/**
 * @fileoverview 404 Not Found Page
 * Error page for invalid routes
 * 
 * Uses unified responsive layout with mobile-first approach
 */

import { Page } from './Page.js';

export class NotFoundPage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'notfound',
            title: '404 - Page Not Found | ScholarShare',
            bgClass: 'bg-slate-50'
        });
    }

    /**
     * Get quick links data for DRY rendering
     */
    get quickLinks() {
        return [
            { page: 'students', labelDesktop: 'Student Opportunities & Credits', labelMobile: 'Students' },
            { page: 'institutions', labelDesktop: 'Institutional Intelligence', labelMobile: 'Institutions' },
            { page: 'naac', labelDesktop: 'NAAC Readiness Features', labelMobile: 'NAAC Features' },
            { page: 'joinpilot', labelDesktop: 'Join the Pilot Program', labelMobile: 'Join Pilot' }
        ];
    }

    render() {
        const links = this.quickLinks;

        const content = `
      <div class="pt-20 md:pt-32 pb-24 md:pb-20 min-h-screen flex items-center justify-center">
        <div class="w-full text-center max-w-xl mx-auto px-4 md:px-6">
          
          <!-- 404 Number -->
          <div class="mb-4 md:mb-8">
            <span class="text-7xl md:text-9xl font-black text-indigo-100">404</span>
          </div>
          
          <!-- Title -->
          <h1 class="mobile-hero-title md:hidden mb-2">Page Not Found</h1>
          <h1 class="hidden md:block text-4xl font-black text-slate-900 mb-4">Page Not Found</h1>
          
          <!-- Description -->
          <p class="md:hidden text-slate-500 text-sm mb-6">Let's get you back on track.</p>
          <p class="hidden md:block text-lg text-slate-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          
          <!-- CTAs -->
          <!-- Mobile CTAs -->
          <div class="md:hidden space-y-3 mb-6">
            <button 
              onclick="navigateTo('home')" 
              class="mobile-btn-primary">
              <i class="fas fa-home mr-2"></i>Go to Home
            </button>
            <button 
              onclick="navigateTo('support')" 
              class="mobile-btn-secondary">
              <i class="fas fa-life-ring mr-2"></i>Get Support
            </button>
          </div>
          
          <!-- Desktop CTAs -->
          <div class="hidden md:flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onclick="navigateTo('home')" 
              class="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-indigo-700 transition-all"
              aria-label="Go to home page">
              Go to Home
            </button>
            <button 
              onclick="navigateTo('support')" 
              class="bg-white text-slate-700 px-8 py-3 rounded-full font-bold shadow-md border border-slate-200 hover:bg-slate-50 transition-all"
              aria-label="Get support">
              Get Support
            </button>
          </div>
          
          <!-- Quick Links -->
          <!-- Mobile Quick Links -->
          <div class="md:hidden mobile-card text-left">
            <h3 class="font-bold text-sm text-slate-900 mb-3">Looking for:</h3>
            <div class="space-y-2">
              ${links.map(link => `
                <a href="javascript:void(0)" onclick="navigateTo('${link.page}')" class="block text-indigo-600 text-sm py-2">
                  → ${link.labelMobile}
                </a>
              `).join('')}
            </div>
          </div>
          
          <!-- Desktop Quick Links -->
          <div class="hidden md:block text-left bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 class="font-bold text-slate-900 mb-4">Maybe you were looking for:</h3>
            <ul class="space-y-3">
              ${links.map(link => `
                <li>
                  <a href="javascript:void(0)" onclick="navigateTo('${link.page}')" class="text-indigo-600 hover:underline">
                    → ${link.labelDesktop}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
          
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
