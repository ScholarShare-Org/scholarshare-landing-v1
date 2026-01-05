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

    render() {
        const content = `
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

        return this.renderPage(content);
    }
}
