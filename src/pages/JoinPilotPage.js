/**
 * @fileoverview Join Pilot Page
 * Institutional partnership application form
 */

import { Page } from './Page.js';

export class JoinPilotPage extends Page {
  constructor(props = {}) {
    super({
      ...props,
      pageId: 'joinpilot',
      title: 'Join the Pilot | ScholarShare',
      bgClass: 'bg-white'
    });
  }

  afterRender() {
    // Setup form submission handler
    const form = document.querySelector('#pilot-form');
    if (form) {
      form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // In production, this would submit to an API
    alert('Thank you! Our Pilot Coordination Team will reach out within 24 hours.');
  }

  /**
   * Render the desktop layout (unchanged from original)
   */
  renderDesktopLayout() {
    return `
      <div class="pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-black mb-4">Join the Pilot</h1>
            <p class="text-slate-600 text-lg">We are onboarding 10 institutions for the 2025-26 academic season. Limited slots available for South and West India regions.</p>
          </div>
          
          <form id="pilot-form" class="bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-xl space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="institution-name" class="font-bold text-sm uppercase text-slate-500">Institution Name</label>
                <input 
                  type="text" 
                  id="institution-name"
                  name="institutionName"
                  placeholder="BITS Pilani, SRM, etc." 
                  class="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
              </div>
              <div class="space-y-2">
                <label for="college-location" class="font-bold text-sm uppercase text-slate-500">College Location</label>
                <input 
                  type="text" 
                  id="college-location"
                  name="location"
                  placeholder="City, State" 
                  class="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label for="contact-name" class="font-bold text-sm uppercase text-slate-500">Primary Contact Name</label>
                <input 
                  type="text" 
                  id="contact-name"
                  name="contactName"
                  placeholder="Prof. Jane Doe" 
                  class="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
              </div>
              <div class="space-y-2">
                <label for="designation" class="font-bold text-sm uppercase text-slate-500">Designation</label>
                <input 
                  type="text" 
                  id="designation"
                  name="designation"
                  placeholder="IQAC Head / Placement Director" 
                  class="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
              </div>
            </div>
            <div class="space-y-2">
              <label for="official-email" class="font-bold text-sm uppercase text-slate-500">Official Email ID</label>
              <input 
                type="email" 
                id="official-email"
                name="email"
                placeholder="admin@college.edu.in" 
                class="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
            </div>
            <div class="space-y-2">
              <label for="student-strength" class="font-bold text-sm uppercase text-slate-500">Student Strength (Approx)</label>
              <select 
                id="student-strength"
                name="studentStrength"
                class="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm transition-all appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select range</option>
                <option value="under-1000">Under 1,000</option>
                <option value="1000-3000">1,000 - 3,000</option>
                <option value="3000-5000">3,000 - 5,000</option>
                <option value="above-5000">Above 5,000</option>
              </select>
            </div>
            <div class="pt-6">
              <button 
                type="submit" 
                class="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl text-xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100"
              >
                Apply for Institutional Pilot
              </button>
              <p class="text-center text-xs text-slate-400 mt-4 uppercase font-bold tracking-widest">
                Pricing & Terms will be discussed under NDA.
              </p>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  /**
   * Render the mobile-optimized layout (experience-first design)
   */
  renderMobileLayout() {
    return `
      <div class="pt-24 pb-16 mobile-fade-in">
        <div class="px-4">
          <!-- Header -->
          <div class="text-center mb-6">
            <span class="mobile-feature-pill mb-3 mobile-stagger-1">
              <i class="fas fa-handshake"></i> Limited Slots
            </span>
            <h1 class="mobile-display-title mb-2 mobile-stagger-2">Join the Pilot</h1>
            <p class="text-slate-500 text-sm mobile-stagger-3">10 institutions for 2025-26. South & West India.</p>
          </div>
          
          <!-- Mobile Form -->
          <form id="pilot-form-mobile" class="mobile-card space-y-4 mobile-stagger-4">
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Institution Name</label>
              <input 
                type="text" 
                name="institutionName"
                placeholder="BITS Pilani, SRM, etc." 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
            </div>
            
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Location</label>
              <input 
                type="text" 
                name="location"
                placeholder="City, State" 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
            </div>
            
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Contact Name</label>
              <input 
                type="text" 
                name="contactName"
                placeholder="Prof. Jane Doe" 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
            </div>
            
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Designation</label>
              <input 
                type="text" 
                name="designation"
                placeholder="IQAC Head / Placement Director" 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
            </div>
            
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Official Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="admin@college.edu.in" 
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
            </div>
            
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Student Strength</label>
              <select 
                name="studentStrength"
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select range</option>
                <option value="under-1000">Under 1,000</option>
                <option value="1000-3000">1,000 - 3,000</option>
                <option value="3000-5000">3,000 - 5,000</option>
                <option value="above-5000">Above 5,000</option>
              </select>
            </div>
            
            <div class="pt-2">
              <button 
                type="submit" 
                class="mobile-btn-primary text-base py-3.5 mobile-touch-active"
              >
                Apply for Pilot <i class="fas fa-arrow-right ml-2"></i>
              </button>
              <p class="text-center text-xs text-slate-400 mt-3">
                Pricing & Terms under NDA
              </p>
            </div>
          </form>
        </div>
      </div>
    `;
  }

  render() {
    const content = `
      <!-- Desktop Layout (hidden on mobile) -->
      <div class="hidden md:block">
        ${this.renderDesktopLayout()}
      </div>
      
      <!-- Mobile Layout (hidden on desktop) -->
      <div class="block md:hidden">
        ${this.renderMobileLayout()}
      </div>
    `;

    return this.renderPage(content);
  }
}

