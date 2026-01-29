/**
 * @fileoverview Compliance Page
 * Regulatory compliance features for UGC and NAAC 2024
 * 
 * Uses unified responsive layout with mobile-first approach
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
   * Get compliance card data for DRY rendering
   */
  get complianceCards() {
    return [
      {
        icon: 'fa-balance-scale',
        title: 'Binary Accreditation Shield',
        descriptionDesktop: 'NAAC has transitioned to an Accredited/Not Accredited system. Data validation is now done remotely via Data Validation and Verification (DVV). ScholarShare ensures your data integrity is 100% compliant with e-copies of award letters and geotagged evidence.',
        descriptionMobile: 'NAAC uses Accredited/Not Accredited system with remote DVV. ScholarShare ensures 100% data integrity.',
        badgeDesktop: 'NAAC 2024 Reform Ready',
        badgeMobile: 'NAAC 2024 Ready'
      },
      {
        icon: 'fa-user-shield',
        title: 'Anti-Ragging Mandates',
        descriptionDesktop: 'The UGC has explicitly directed institutions to monitor informal WhatsApp channels for ragging. ScholarShare\'s Campus Channels provide a sanctioned, safe alternative that satisfies UGC grievance addressal requirements.',
        descriptionMobile: 'Campus Channels provide a sanctioned, safe alternative to WhatsApp for UGC grievance compliance.',
        badgeDesktop: 'UGC Circular Compliance',
        badgeMobile: 'UGC Compliant'
      }
    ];
  }

  render() {
    const cards = this.complianceCards;

    const content = `
      <div class="pt-20 md:pt-32 pb-24 md:pb-20">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          
          <!-- Hero Section -->
          <div class="text-center mb-6 md:mb-16">
            <!-- Mobile Title -->
            <h1 class="mobile-hero-title md:hidden mb-2">Regulatory Compliance</h1>
            <!-- Desktop Title -->
            <h1 class="hidden md:block text-5xl font-black mb-6">Regulatory Compliance</h1>
            
            <!-- Mobile Subtitle -->
            <p class="md:hidden text-slate-500 text-sm">Built for UGC and NAAC 2024 Reforms.</p>
            <!-- Desktop Subtitle -->
            <p class="hidden md:block text-slate-600 text-lg max-w-3xl mx-auto">ScholarShare is the only platform built natively for the UGC and NAAC 2024 Reforms, protecting institutions from binary accreditation penalties.</p>
          </div>
          
          <!-- Compliance Cards -->
          <div class="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-8 md:mb-12">
            ${cards.map(card => `
              <!-- Card: ${card.title} -->
              
              <!-- Mobile Card -->
              <div class="mobile-card md:hidden">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                    <i class="fas ${card.icon}"></i>
                  </div>
                  <h3 class="font-bold text-base text-slate-900">${card.title}</h3>
                </div>
                <p class="text-sm text-slate-600 mb-3">${card.descriptionMobile}</p>
                <div class="bg-slate-50 px-3 py-2 rounded-lg text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">
                  ${card.badgeMobile}
                </div>
              </div>
              
              <!-- Desktop Card -->
              <article class="hidden md:block bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                <div class="text-indigo-600 text-4xl mb-6" aria-hidden="true">
                  <i class="fas ${card.icon}"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4">${card.title}</h3>
                <p class="text-slate-600 mb-6">${card.descriptionDesktop}</p>
                <div class="bg-slate-50 p-4 rounded-xl text-xs font-bold text-slate-500 uppercase tracking-widest">${card.badgeDesktop}</div>
              </article>
            `).join('')}
          </div>
          
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
