/**
 * @fileoverview 404 Not Found Page
 * Error page for invalid routes
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

    render() {
        const content = `
      <div class="pt-32 pb-20 min-h-screen flex items-center justify-center">
        <div class="text-center max-w-xl mx-auto px-6">
          <div class="mb-8">
            <span class="text-9xl font-black text-indigo-100">404</span>
          </div>
          <h1 class="text-4xl font-black text-slate-900 mb-4">Page Not Found</h1>
          <p class="text-lg text-slate-600 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
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
          
          <div class="mt-16 text-left bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 class="font-bold text-slate-900 mb-4">Maybe you were looking for:</h3>
            <ul class="space-y-3">
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('students')" class="text-indigo-600 hover:underline">
                  → Student Opportunities & Credits
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('institutions')" class="text-indigo-600 hover:underline">
                  → Institutional Intelligence
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('naac')" class="text-indigo-600 hover:underline">
                  → NAAC Readiness Features
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('joinpilot')" class="text-indigo-600 hover:underline">
                  → Join the Pilot Program
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
