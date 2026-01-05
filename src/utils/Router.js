/**
 * @fileoverview SPA Router with hash-based navigation and history management
 */

export class Router {
    /**
     * Create a new Router instance
     * @param {Object} options - Router configuration
     */
    constructor(options = {}) {
        this.routes = new Map();
        this.currentRoute = null;
        this.defaultRoute = options.defaultRoute || 'home';
        this.beforeNavigate = options.beforeNavigate || (() => true);
        this.afterNavigate = options.afterNavigate || (() => { });
        this.notFoundHandler = options.notFoundHandler || null;

        this.init();
    }

    /**
     * Initialize router and bind to hash changes
     */
    init() {
        // Listen for hash changes
        window.addEventListener('hashchange', () => this.handleRouteChange());

        // Handle initial route on page load
        window.addEventListener('DOMContentLoaded', () => {
            this.handleRouteChange();
        });
    }

    /**
     * Register a route
     * @param {string} routeId - Route identifier
     * @param {Object} handler - Route handler object with activate/deactivate methods
     */
    register(routeId, handler) {
        this.routes.set(routeId, handler);
    }

    /**
     * Register multiple routes at once
     * @param {Object} routes - Object mapping route IDs to handlers
     */
    registerAll(routes) {
        Object.entries(routes).forEach(([routeId, handler]) => {
            this.register(routeId, handler);
        });
    }

    /**
     * Navigate to a specific route
     * @param {string} routeId - Target route identifier
     * @param {Object} params - Optional route parameters
     */
    navigate(routeId, params = {}) {
        // Check if navigation should proceed
        if (!this.beforeNavigate(routeId, this.currentRoute)) {
            return;
        }

        // Update URL hash
        const hash = this.buildHash(routeId, params);
        window.location.hash = hash;
    }

    /**
     * Build hash string from route ID and params
     * @param {string} routeId - Route identifier
     * @param {Object} params - Route parameters
     * @returns {string} Hash string
     */
    buildHash(routeId, params = {}) {
        let hash = routeId;
        const paramStr = Object.entries(params)
            .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
            .join('&');

        if (paramStr) {
            hash += `?${paramStr}`;
        }

        return hash;
    }

    /**
     * Parse current hash to extract route ID and params
     * @returns {Object} Parsed route info
     */
    parseHash() {
        const hash = window.location.hash.slice(1) || this.defaultRoute;
        const [routeId, queryString] = hash.split('?');

        const params = {};
        if (queryString) {
            queryString.split('&').forEach(pair => {
                const [key, value] = pair.split('=');
                params[key] = decodeURIComponent(value || '');
            });
        }

        return { routeId: routeId || this.defaultRoute, params };
    }

    /**
     * Handle route changes
     */
    handleRouteChange() {
        const { routeId, params } = this.parseHash();

        // Deactivate current route
        if (this.currentRoute && this.routes.has(this.currentRoute)) {
            const currentHandler = this.routes.get(this.currentRoute);
            if (typeof currentHandler.deactivate === 'function') {
                currentHandler.deactivate();
            }
        }

        // Activate new route
        if (this.routes.has(routeId)) {
            const handler = this.routes.get(routeId);
            if (typeof handler.activate === 'function') {
                handler.activate(params);
            }
            this.currentRoute = routeId;

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // After navigate callback
            this.afterNavigate(routeId, params);
        } else if (this.notFoundHandler) {
            // Handle 404
            this.notFoundHandler(routeId);
        } else {
            // Fallback to default route
            this.navigate(this.defaultRoute);
        }
    }

    /**
     * Get current route ID
     * @returns {string} Current route identifier
     */
    getCurrentRoute() {
        return this.currentRoute;
    }

    /**
     * Check if a route is currently active
     * @param {string} routeId - Route to check
     * @returns {boolean} True if route is active
     */
    isActive(routeId) {
        return this.currentRoute === routeId;
    }

    /**
     * Go back in history
     */
    back() {
        window.history.back();
    }

    /**
     * Go forward in history
     */
    forward() {
        window.history.forward();
    }
}

// Singleton instance
let routerInstance = null;

/**
 * Get or create the router instance
 * @param {Object} options - Router options (only used on first call)
 * @returns {Router} Router instance
 */
export function getRouter(options = {}) {
    if (!routerInstance) {
        routerInstance = new Router(options);
    }
    return routerInstance;
}

/**
 * Global navigation function for use in templates
 * @param {string} routeId - Target route
 * @param {Object} params - Route parameters
 */
export function navigateTo(routeId, params = {}) {
    const router = getRouter();
    router.navigate(routeId, params);
}

// Expose to window for onclick handlers in HTML
if (typeof window !== 'undefined') {
    window.navigateTo = navigateTo;
}
