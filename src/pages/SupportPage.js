/**
 * @fileoverview Support Page
 * Help desk requirements and contact form
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
    // Setup form submission handler
    const form = document.querySelector('#support-form');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will respond within 24 hours.');
  }

  render() {
    const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-5xl mx-auto px-6">
          <div class="text-center mb-20">
            <h1 class="text-5xl font-black mb-4">Get Support</h1>
            <p class="text-slate-600 text-lg">Our team of academic consultants and technical architects is ready to assist you.</p>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <div class="space-y-8">
              <!-- Institutional Helpdesk -->
              <article class="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 class="font-bold text-xl mb-4 text-indigo-600">Institutional Helpdesk</h3>
                <p class="text-slate-600 mb-6">Dedicated support for IQAC Heads and College Admins during the pilot phase.</p>
                <a href="mailto:support@scholarshare.in" class="font-bold text-slate-900 border-b-2 border-indigo-600 pb-1">support@scholarshare.in</a>
              </article>
              <!-- Student Resources -->
              <article class="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 class="font-bold text-xl mb-4 text-indigo-600">Student Resources</h3>
                <p class="text-slate-600 mb-6">Having issues with APAAR sync or credit mapping? Access our student guide.</p>
                <button onclick="showComingSoon('Student FAQ')" class="font-bold text-slate-900 border-b-2 border-indigo-600 pb-1">View Student FAQ</button>
              </article>
            </div>
            
            <!-- Direct Inquiry Form -->
            <div class="bg-indigo-600 p-10 rounded-[3rem] text-white">
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
