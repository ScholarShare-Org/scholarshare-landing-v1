/**
 * @fileoverview Main Application Entry Point
 * Initializes the SPA, router, and mounts all components
 */

// Router
import { getRouter, navigateTo } from './utils/Router.js';

// Components
import { Navbar, getNavbar } from './components/Navbar.js';
import { Footer, getFooter } from './components/Footer.js';

// Pages
import { HomePage } from './pages/HomePage.js';
import { StudentsPage } from './pages/StudentsPage.js';
import { InstitutionsPage } from './pages/InstitutionsPage.js';
import { NAACPage } from './pages/NAACPage.js';
import { AboutPage } from './pages/AboutPage.js';
import { JoinPilotPage } from './pages/JoinPilotPage.js';
import { APAARPage } from './pages/APAARPage.js';
import { SecurityPage } from './pages/SecurityPage.js';
import { CompliancePage } from './pages/CompliancePage.js';
import { SupportPage } from './pages/SupportPage.js';
import { PrivacyPage } from './pages/PrivacyPage.js';
import { TermsPage } from './pages/TermsPage.js';
import { NotFoundPage } from './pages/NotFoundPage.js';

// Import styles
import './styles/main.css';

/**
 * ScholarShare Application Class
 * Main application orchestrator
 */
class ScholarShareApp {
    constructor() {
        this.pages = {};
        this.navbar = null;
        this.footer = null;
        this.router = null;
        this.contentArea = null;
    }

    /**
     * Initialize the application
     */
    init() {
        console.log('🎓 ScholarShare Landing Page - Initializing...');

        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.bootstrap());
        } else {
            this.bootstrap();
        }
    }

    /**
     * Bootstrap the application after DOM is ready
     */
    bootstrap() {
        // Get content area
        this.contentArea = document.getElementById('content-area');

        if (!this.contentArea) {
            console.error('Content area not found!');
            return;
        }

        // Initialize components
        this.initNavbar();
        this.initPages();
        this.initFooter();
        this.initRouter();

        // Render initial state
        this.renderPages();

        console.log('✅ ScholarShare App initialized successfully');
    }

    /**
     * Initialize navigation bar
     */
    initNavbar() {
        this.navbar = getNavbar();
        const navContainer = document.getElementById('navbar-container');
        if (navContainer) {
            this.navbar.mount(navContainer);
        }
    }

    /**
     * Initialize all page instances
     */
    initPages() {
        this.pages = {
            home: new HomePage(),
            students: new StudentsPage(),
            institutions: new InstitutionsPage(),
            naac: new NAACPage(),
            about: new AboutPage(),
            joinpilot: new JoinPilotPage(),
            apaar: new APAARPage(),
            security: new SecurityPage(),
            compliance: new CompliancePage(),
            support: new SupportPage(),
            privacy: new PrivacyPage(),
            terms: new TermsPage(),
            notfound: new NotFoundPage()
        };
    }

    /**
     * Initialize footer
     */
    initFooter() {
        this.footer = getFooter();
        const footerContainer = document.getElementById('footer-container');
        if (footerContainer) {
            this.footer.mount(footerContainer);
        }
    }

    /**
     * Initialize router with page handlers
     */
    initRouter() {
        this.router = getRouter({
            defaultRoute: 'home',
            afterNavigate: (routeId) => {
                // Update navbar active state
                if (this.navbar) {
                    this.navbar.setActiveRoute(routeId);
                }
            }
        });

        // Register all pages as routes
        Object.entries(this.pages).forEach(([pageId, page]) => {
            this.router.register(pageId, {
                activate: () => this.activatePage(pageId),
                deactivate: () => this.deactivatePage(pageId)
            });
        });
    }

    /**
     * Render all pages to DOM (hidden by default)
     */
    renderPages() {
        // Clear content area
        this.contentArea.innerHTML = '';

        // Render each page
        Object.entries(this.pages).forEach(([pageId, page]) => {
            const html = page.render();
            this.contentArea.insertAdjacentHTML('beforeend', html);
        });
    }

    /**
     * Activate a specific page
     * @param {string} pageId - Page identifier
     */
    activatePage(pageId) {
        const page = this.pages[pageId];
        if (!page) return;

        // Hide all pages
        document.querySelectorAll('.page-view').forEach(el => {
            el.classList.remove('active');
        });

        // Show the target page
        const pageElement = document.getElementById(pageId);
        if (pageElement) {
            pageElement.classList.add('active');
        }

        // Activate page (updates SEO)
        page.activate();

        // Run afterRender for dynamic content
        page.afterRender();
    }

    /**
     * Deactivate a specific page
     * @param {string} pageId - Page identifier
     */
    deactivatePage(pageId) {
        const page = this.pages[pageId];
        if (page) {
            page.deactivate();
        }
    }
}

// Create and initialize the app
const app = new ScholarShareApp();
app.init();

// Expose navigateTo globally for onclick handlers
window.navigateTo = navigateTo;

/**
 * Toggle mobile menu visibility
 */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const btn = document.getElementById('mobile-menu-btn');
    const icon = document.getElementById('menu-icon');

    if (!menu || !btn || !icon) return;

    const isOpen = !menu.classList.contains('hidden');

    if (isOpen) {
        menu.classList.add('hidden');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    } else {
        menu.classList.remove('hidden');
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
        btn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    }
}

// Expose toggleMobileMenu globally
window.toggleMobileMenu = toggleMobileMenu;

/**
 * Show Coming Soon Modal
 * @param {string} featureName - Name of the feature that's coming soon
 */
function showComingSoon(featureName = 'This feature') {
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.id = 'coming-soon-modal';
    overlay.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50';
    overlay.onclick = (e) => {
        if (e.target === overlay) closeComingSoonModal();
    };

    // Modal content
    overlay.innerHTML = `
        <div class="bg-white rounded-3xl p-8 md:p-12 max-w-md mx-4 text-center shadow-2xl">
            <div class="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i class="fas fa-rocket text-3xl text-indigo-600"></i>
            </div>
            <h3 class="text-2xl font-bold text-slate-900 mb-4">Coming Soon!</h3>
            <p class="text-slate-600 mb-8 leading-relaxed">
                <strong>${featureName}</strong> is currently under development. 
                We're working hard to bring you an amazing experience!
            </p>
            <div class="space-y-3">
                <button 
                    onclick="navigateTo('joinpilot'); closeComingSoonModal();"
                    class="w-full bg-indigo-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-indigo-700 transition-all"
                >
                    Join Pilot Program for Early Access
                </button>
                <button 
                    onclick="closeComingSoonModal()"
                    class="w-full bg-slate-100 text-slate-700 px-6 py-4 rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                    Close
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';
}

/**
 * Close Coming Soon Modal
 */
function closeComingSoonModal() {
    const modal = document.getElementById('coming-soon-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// Expose showComingSoon and closeComingSoonModal globally
window.showComingSoon = showComingSoon;
window.closeComingSoonModal = closeComingSoonModal;

// Export for potential external use
export { app, navigateTo, toggleMobileMenu, showComingSoon, closeComingSoonModal };

