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

    render() {
        const content = `
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

        return this.renderPage(content);
    }
}
