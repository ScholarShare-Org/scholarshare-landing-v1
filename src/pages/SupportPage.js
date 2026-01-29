/**
 * @fileoverview Support Page
 * Help desk requirements and contact form
 * 
 * Uses unified responsive layout with mobile-first approach
 */

import { Page } from './Page.js';

export class SupportPage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'support',
            title: 'Support | ScholarShare',
            bgClass: 'bg-white'
        });
    }

    afterRender() {
        // Setup form submission handler for both forms
        const forms = document.querySelectorAll('#support-form, #support-form-mobile');
        forms.forEach(form => {
            if (form) {
                form.addEventListener('submit', this.handleSubmit.bind(this));
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert('Thank you for your inquiry! Our team will respond within 24 hours.');
    }

    /**
     * Get support options data for DRY rendering
     */
    get supportOptions() {
        return [
            {
                title: 'Institutional Helpdesk',
                descriptionDesktop: 'Dedicated support for IQAC Heads and College Admins during the pilot phase.',
                descriptionMobile: 'Support for IQAC Heads and Admins.',
                linkType: 'email',
                linkValue: 'support@scholarshare.in',
                icon: 'fa-envelope'
            },
            {
                title: 'Student Resources',
                descriptionDesktop: 'Having issues with APAAR sync or credit mapping? Access our student guide.',
                descriptionMobile: 'APAAR sync or credit mapping issues?',
                linkType: 'button',
                linkLabel: 'View Student FAQ',
                linkAction: "showComingSoon('Student FAQ')",
                icon: 'fa-book'
            }
        ];
    }

    render() {
        const options = this.supportOptions;

        const content = `
      <div class="pt-24 md:pt-32 pb-16 md:pb-20">
        <div class="max-w-5xl mx-auto px-4 md:px-6">
          
          <!-- Hero Section -->
          <div class="text-center mb-6 md:mb-20">
            <!-- Mobile Title -->
            <h1 class="mobile-hero-title md:hidden mb-2">Get Support</h1>
            <!-- Desktop Title -->
            <h1 class="hidden md:block text-5xl font-black mb-4">Get Support</h1>
            
            <!-- Mobile Subtitle -->
            <p class="md:hidden text-slate-500 text-sm">Academic consultants & technical architects ready to help.</p>
            <!-- Desktop Subtitle -->
            <p class="hidden md:block text-slate-600 text-lg">Our team of academic consultants and technical architects is ready to assist you.</p>
          </div>
          
          <!-- Main Content Grid -->
          <div class="grid md:grid-cols-2 gap-6 md:gap-12">
            
            <!-- Support Options -->
            <div class="space-y-3 md:space-y-8">
              ${options.map(option => `
                <!-- ${option.title} -->
                
                <!-- Mobile Card -->
                <div class="mobile-card md:hidden">
                  <h3 class="font-bold text-base text-indigo-600 mb-2">${option.title}</h3>
                  <p class="text-sm text-slate-600 mb-3">${option.descriptionMobile}</p>
                  ${option.linkType === 'email'
                ? `<a href="mailto:${option.linkValue}" class="mobile-btn-secondary text-sm py-3 block text-center">
                         <i class="fas ${option.icon} mr-2"></i>${option.linkValue}
                       </a>`
                : `<button onclick="${option.linkAction}" class="mobile-btn-secondary text-sm py-3 w-full">
                         <i class="fas ${option.icon} mr-2"></i>${option.linkLabel}
                       </button>`
            }
                </div>
                
                <!-- Desktop Card -->
                <article class="hidden md:block bg-slate-50 p-8 rounded-3xl border border-slate-200">
                  <h3 class="font-bold text-xl mb-4 text-indigo-600">${option.title}</h3>
                  <p class="text-slate-600 mb-6">${option.descriptionDesktop}</p>
                  ${option.linkType === 'email'
                ? `<a href="mailto:${option.linkValue}" class="font-bold text-slate-900 border-b-2 border-indigo-600 pb-1">${option.linkValue}</a>`
                : `<button onclick="${option.linkAction}" class="font-bold text-slate-900 border-b-2 border-indigo-600 pb-1">${option.linkLabel}</button>`
            }
                </article>
              `).join('')}
            </div>
            
            <!-- Inquiry Form -->
            <!-- Mobile Form -->
            <div class="md:hidden bg-indigo-600 rounded-2xl p-5 text-white">
              <h3 class="font-bold text-lg mb-4">Direct Inquiry</h3>
              <form id="support-form-mobile" class="space-y-3">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Name" 
                  class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-sm focus:outline-none"
                  required
                >
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-sm focus:outline-none"
                  required
                >
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="3" 
                  class="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 text-sm focus:outline-none"
                  required
                ></textarea>
                <button type="submit" class="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl">
                  Send Inquiry
                </button>
              </form>
            </div>
            
            <!-- Desktop Form -->
            <div class="hidden md:block bg-indigo-600 p-10 rounded-[3rem] text-white">
              <h3 class="text-2xl font-black mb-6">Direct Inquiry</h3>
              <form id="support-form" class="space-y-4">
                <div>
                  <label for="support-name" class="sr-only">Name</label>
                  <input 
                    type="text" 
                    id="support-name"
                    name="name"
                    placeholder="Name" 
                    class="w-full px-6 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 focus:bg-white/20 focus:outline-none"
                    required
                  >
                </div>
                <div>
                  <label for="support-email" class="sr-only">Email</label>
                  <input 
                    type="email" 
                    id="support-email"
                    name="email"
                    placeholder="Email" 
                    class="w-full px-6 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 focus:bg-white/20 focus:outline-none"
                    required
                  >
                </div>
                <div>
                  <label for="support-message" class="sr-only">Your Message</label>
                  <textarea 
                    id="support-message"
                    name="message"
                    placeholder="Your Message" 
                    rows="4" 
                    class="w-full px-6 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 focus:bg-white/20 focus:outline-none"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="w-full bg-white text-indigo-600 font-black py-4 rounded-xl hover:bg-slate-100 transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
