/**
 * @fileoverview Join Pilot Page
 * Institutional partnership application form
 * 
 * Uses unified responsive layout with mobile-first approach
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
    // Setup form submission handler for both forms
    const forms = document.querySelectorAll('#pilot-form, #pilot-form-mobile');
    forms.forEach(form => {
      if (form) {
        form.addEventListener('submit', this.handleSubmit.bind(this));
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Thank you! Our Pilot Coordination Team will reach out within 24 hours.');
  }

  /**
   * Get form fields for DRY rendering
   */
  get formFields() {
    return [
      { name: 'institutionName', label: 'Institution Name', labelMobile: 'Institution Name', placeholder: 'BITS Pilani, SRM, etc.', type: 'text' },
      { name: 'location', label: 'College Location', labelMobile: 'Location', placeholder: 'City, State', type: 'text' },
      { name: 'contactName', label: 'Primary Contact Name', labelMobile: 'Contact Name', placeholder: 'Prof. Jane Doe', type: 'text' },
      { name: 'designation', label: 'Designation', labelMobile: 'Designation', placeholder: 'IQAC Head / Placement Director', type: 'text' },
      { name: 'email', label: 'Official Email ID', labelMobile: 'Official Email', placeholder: 'admin@college.edu.in', type: 'email' }
    ];
  }

  get studentStrengthOptions() {
    return [
      { value: '', label: 'Select range' },
      { value: 'under-1000', label: 'Under 1,000' },
      { value: '1000-3000', label: '1,000 - 3,000' },
      { value: '3000-5000', label: '3,000 - 5,000' },
      { value: 'above-5000', label: 'Above 5,000' }
    ];
  }

  render() {
    const fields = this.formFields;
    const strengthOptions = this.studentStrengthOptions;

    const content = `
      <div class="pt-24 md:pt-32 pb-16 md:pb-20">
        <div class="max-w-4xl mx-auto px-4 md:px-6">
          
          <!-- Hero Section -->
          <div class="text-center mb-6 md:mb-16">
            <!-- Mobile Header -->
            <div class="md:hidden">
              <span class="mobile-feature-pill mb-3">
                <i class="fas fa-handshake"></i> Limited Slots
              </span>
              <h1 class="mobile-display-title mb-2">Join the Pilot</h1>
              <p class="text-slate-500 text-sm">10 institutions for 2025-26. South & West India.</p>
            </div>
            
            <!-- Desktop Header -->
            <div class="hidden md:block">
              <h1 class="text-5xl font-black mb-4">Join the Pilot</h1>
              <p class="text-slate-600 text-lg">We are onboarding 10 institutions for the 2025-26 academic season. Limited slots available for South and West India regions.</p>
            </div>
          </div>
          
          <!-- Form -->
          <!-- Mobile Form -->
          <form id="pilot-form-mobile" class="mobile-card space-y-4 md:hidden">
            ${fields.map(field => `
              <div class="space-y-1">
                <label class="text-xs font-bold text-slate-500 uppercase">${field.labelMobile}</label>
                <input 
                  type="${field.type}" 
                  name="${field.name}"
                  placeholder="${field.placeholder}" 
                  class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                >
              </div>
            `).join('')}
            
            <div class="space-y-1">
              <label class="text-xs font-bold text-slate-500 uppercase">Student Strength</label>
              <select 
                name="studentStrength"
                class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                ${strengthOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
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
          
          <!-- Desktop Form -->
          <form id="pilot-form" class="hidden md:block bg-slate-50 p-10 rounded-[3rem] border border-slate-200 shadow-xl space-y-6">
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
                ${strengthOptions.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('')}
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

    return this.renderPage(content);
  }
}
