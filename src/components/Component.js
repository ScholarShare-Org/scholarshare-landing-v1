/**
 * @fileoverview Base Component Class - OOP Foundation
 * Provides lifecycle methods, event handling, and render utilities
 * All UI components inherit from this class
 */

export class Component {
    /**
     * Create a new Component instance
     * @param {Object} props - Component properties
     */
    constructor(props = {}) {
        this.props = props;
        this.state = {};
        this.element = null;
        this.eventListeners = [];
        this.childComponents = [];
        this.id = props.id || `component-${Math.random().toString(36).substr(2, 9)}`;
    }

    /**
     * Set component state and trigger re-render
     * @param {Object} newState - Partial state to merge
     */
    setState(newState) {
        const prevState = { ...this.state };
        this.state = { ...this.state, ...newState };
        this.onStateChange(prevState, this.state);
        this.update();
    }

    /**
     * Lifecycle: Called when state changes
     * @param {Object} prevState - Previous state
     * @param {Object} newState - New state
     */
    onStateChange(prevState, newState) {
        // Override in subclass
    }

    /**
     * Lifecycle: Called before render
     */
    beforeRender() {
        // Override in subclass
    }

    /**
     * Lifecycle: Called after render and DOM insertion
     */
    afterRender() {
        // Override in subclass
    }

    /**
     * Lifecycle: Called before component is destroyed
     */
    beforeDestroy() {
        // Override in subclass
    }

    /**
     * Add event listener with automatic cleanup tracking
     * @param {string} selector - CSS selector for target element
     * @param {string} event - Event name
     * @param {Function} handler - Event handler
     */
    addEvent(selector, event, handler) {
        this.eventListeners.push({ selector, event, handler });
    }

    /**
     * Bind all registered event listeners to DOM
     */
    bindEvents() {
        if (!this.element) return;

        this.eventListeners.forEach(({ selector, event, handler }) => {
            const targets = selector === 'self'
                ? [this.element]
                : this.element.querySelectorAll(selector);

            targets.forEach(target => {
                target.addEventListener(event, handler.bind(this));
            });
        });
    }

    /**
     * Remove all event listeners
     */
    unbindEvents() {
        // Events are automatically cleaned up when element is removed
        // This is for manual cleanup if needed
        this.eventListeners = [];
    }

    /**
     * Add a child component
     * @param {Component} child - Child component instance
     */
    addChild(child) {
        this.childComponents.push(child);
    }

    /**
     * Render child components
     * @returns {string} Combined HTML of all children
     */
    renderChildren() {
        return this.childComponents.map(child => child.render()).join('');
    }

    /**
     * Destroy all child components
     */
    destroyChildren() {
        this.childComponents.forEach(child => child.destroy());
        this.childComponents = [];
    }

    /**
     * Main render method - must be implemented by subclass
     * @returns {string} HTML string
     */
    render() {
        throw new Error('Component.render() must be implemented by subclass');
    }

    /**
     * Mount component to a container element
     * @param {HTMLElement|string} container - Container element or selector
     * @param {string} position - Insert position ('replace', 'append', 'prepend')
     */
    mount(container, position = 'replace') {
        this.beforeRender();

        const containerEl = typeof container === 'string'
            ? document.querySelector(container)
            : container;

        if (!containerEl) {
            console.error(`Container not found: ${container}`);
            return;
        }

        const html = this.render();

        if (position === 'replace') {
            containerEl.innerHTML = html;
            this.element = containerEl.firstElementChild;
        } else if (position === 'append') {
            containerEl.insertAdjacentHTML('beforeend', html);
            this.element = containerEl.lastElementChild;
        } else if (position === 'prepend') {
            containerEl.insertAdjacentHTML('afterbegin', html);
            this.element = containerEl.firstElementChild;
        }

        this.bindEvents();
        this.afterRender();
    }

    /**
     * Update component in place
     */
    update() {
        if (!this.element) return;

        this.beforeRender();
        const html = this.render();
        const parent = this.element.parentElement;

        if (parent) {
            const temp = document.createElement('div');
            temp.innerHTML = html;
            const newElement = temp.firstElementChild;
            parent.replaceChild(newElement, this.element);
            this.element = newElement;
            this.bindEvents();
            this.afterRender();
        }
    }

    /**
     * Destroy component and clean up
     */
    destroy() {
        this.beforeDestroy();
        this.destroyChildren();
        this.unbindEvents();

        if (this.element && this.element.parentElement) {
            this.element.parentElement.removeChild(this.element);
        }

        this.element = null;
    }

    /**
     * Utility: Create CSS class string from object
     * @param {Object} classes - Object with class names as keys and boolean values
     * @returns {string} Space-separated class string
     */
    static classNames(classes) {
        return Object.entries(classes)
            .filter(([, condition]) => condition)
            .map(([className]) => className)
            .join(' ');
    }

    /**
     * Utility: Escape HTML to prevent XSS
     * @param {string} str - String to escape
     * @returns {string} Escaped string
     */
    static escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }
}
