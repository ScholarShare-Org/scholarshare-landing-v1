/**
 * @fileoverview Compliance Page
 * Regulatory compliance features for UGC and NAAC 2024
 */

import { Page } from './Page.js';

export class CompliancePage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'compliance',
            title: 'Regulatory Compliance | ScholarShare',
            bgClass: 'bg-slate-50'
        });
    }

    /**
     * Render the desktop layout (unchanged from original)
     */
    renderDesktopLayout() {
        return `
      <div class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl font-black mb-6">Regulatory Compliance</h1>
            <p class="text-slate-600 text-lg max-w-3xl mx-auto">ScholarShare is the only platform built natively for the UGC and NAAC 2024 Reforms, protecting institutions from binary accreditation penalties.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 mb-12">
            <!-- Binary Accreditation Shield -->
            <article class="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div class="text-indigo-600 text-4xl mb-6" aria-hidden="true">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Binary Accreditation Shield</h3>
              <p class="text-slate-600 mb-6">NAAC has transitioned to an Accredited/Not Accredited system. Data validation is now done remotely via Data Validation and Verification (DVV). ScholarShare ensures your data integrity is 100% compliant with e-copies of award letters and geotagged evidence.</p>
              <div class="bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">NAAC 2024 Reform Ready</div>
            </article>
            
            <!-- Anti-Ragging Mandates -->
            <article class="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
              <div class="text-indigo-600 text-4xl mb-6" aria-hidden="true">
                <i class="fas fa-user-shield"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Anti-Ragging Mandates</h3>
              <p class="text-slate-600 mb-6">The UGC has explicitly directed institutions to monitor informal WhatsApp channels for ragging. ScholarShare's Campus Channels provide a sanctioned, safe alternative that satisfies UGC grievance addressal requirements.</p>
              <div class="bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">UGC Circular Compliance</div>
            </article>
          </div>
        </div>
      </div>
    `;
    }

    /**
     * Render the mobile-optimized layout
     */
    renderMobileLayout() {
        return `
      <div class="pt-20 pb-24 mobile-fade-in">
        <!-- Mobile Hero -->
        <div class="px-4 mb-6 text-center">
          <h1 class="mobile-hero-title mb-2">Regulatory Compliance</h1>
          <p class="text-slate-500 text-sm">Built for UGC and NAAC 2024 Reforms.</p>
        </div>

        <!-- Compliance Cards -->
        <div class="px-4 space-y-4">
          <div class="mobile-card">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3 class="font-bold text-base text-slate-900">Binary Accreditation Shield</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">NAAC uses Accredited/Not Accredited system with remote DVV. ScholarShare ensures 100% data integrity.</p>
            <div class="bg-slate-50 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">
              NAAC 2024 Ready
            </div>
          </div>
          
          <div class="mobile-card">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <i class="fas fa-user-shield"></i>
              </div>
              <h3 class="font-bold text-base text-slate-900">Anti-Ragging Mandates</h3>
            </div>
            <p class="text-sm text-slate-600 mb-3">Campus Channels provide a sanctioned, safe alternative to WhatsApp for UGC grievance compliance.</p>
            <div class="bg-slate-50 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">
              UGC Compliant
            </div>
          </div>
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
