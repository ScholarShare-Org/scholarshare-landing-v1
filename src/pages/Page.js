/**
 * @fileoverview Base Page Class
 * Extends Component with page-specific functionality including SEO management and transitions
 */

import { Component } from '../components/Component.js';
import { pagesSEO, generateMetaTags, generateStructuredData, siteConfig } from '../config/seo.config.js';

export class Page extends Component {
    /**
     * Create a new Page instance
     * @param {Object} props - Page properties
     * @param {string} props.pageId - Unique page identifier for routing and SEO
     * @param {string} props.title - Page title (fallback if not in SEO config)
     * @param {string} props.bgClass - Background CSS class
     */
    constructor(props = {}) {
        super(props);
        this.pageId = props.pageId || 'home';
        this.title = props.title || 'ScholarShare';
        this.bgClass = props.bgClass || 'bg-slate-50';
        this.isActive = false;
    }

    /**
     * Get SEO configuration for this page
     * @returns {Object} SEO configuration object
     */
    getSEO() {
        return pagesSEO[this.pageId] || pagesSEO.home;
    }

    /**
     * Update document head with page-specific SEO
     */
    updateSEO() {
        const seo = this.getSEO();

        // Update title
        document.title = seo.title;

        // Update or create meta description
        this.updateMetaTag('name', 'description', seo.description);

        // Update or create meta keywords
        if (seo.keywords) {
            this.updateMetaTag('name', 'keywords', seo.keywords);
        }

        // Update canonical link
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = `${siteConfig.siteUrl}${seo.canonical || '/'}`;

        // Update Open Graph tags
        this.updateMetaTag('property', 'og:title', seo.title);
        this.updateMetaTag('property', 'og:description', seo.description);
        this.updateMetaTag('property', 'og:url', `${siteConfig.siteUrl}${seo.canonical || '/'}`);
        this.updateMetaTag('property', 'og:type', seo.ogType || 'website');

        // Update Twitter tags
        this.updateMetaTag('name', 'twitter:title', seo.title);
        this.updateMetaTag('name', 'twitter:description', seo.description);

        // Update structured data
        this.updateStructuredData();
    }

    /**
     * Helper to update or create a meta tag
     * @param {string} attr - Attribute name ('name' or 'property')
     * @param {string} key - Attribute value
     * @param {string} content - Content value
     */
    updateMetaTag(attr, key, content) {
        let meta = document.querySelector(`meta[${attr}="${key}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute(attr, key);
            document.head.appendChild(meta);
        }
        meta.content = content;
    }

    /**
     * Update JSON-LD structured data
     */
    updateStructuredData() {
        const seo = this.getSEO();

        // Remove existing structured data
        const existing = document.querySelector('script[data-page-structured-data]');
        if (existing) {
            existing.remove();
        }

        // Add new structured data if available
        if (seo.structuredData) {
            const script = document.createElement('script');
            script.type = 'application/ld+json';
            script.setAttribute('data-page-structured-data', 'true');
            script.textContent = JSON.stringify(seo.structuredData);
            document.head.appendChild(script);
        }
    }

    /**
     * Activate the page (show it)
     */
    activate() {
        this.isActive = true;
        this.updateSEO();
        this.onActivate();
    }

    /**
     * Deactivate the page (hide it)
     */
    deactivate() {
        this.isActive = false;
        this.onDeactivate();
    }

    /**
     * Lifecycle: Called when page is activated
     */
    onActivate() {
        // Override in subclass
    }

    /**
     * Lifecycle: Called when page is deactivated
     */
    onDeactivate() {
        // Override in subclass
    }

    /**
     * Render page wrapper with proper classes
     * @param {string} content - Inner HTML content
     * @returns {string} Wrapped HTML string
     */
    renderPage(content) {
        const activeClass = this.isActive ? 'active' : '';
        return `
      <section id="${this.pageId}" class="page-view ${activeClass} ${this.bgClass}">
        ${content}
      </section>
    `;
    }

    /**
     * Render method - must be implemented by subclass
     * @returns {string} HTML string
     */
    render() {
        throw new Error('Page.render() must be implemented by subclass');
    }

    /**
     * Get page content areas for lazy loading
     * @returns {Object} Object with content section renderers
     */
    getContentSections() {
        return {};
    }
}
