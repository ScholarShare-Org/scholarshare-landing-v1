/**
 * @fileoverview Security Page
 * Security features, verification protocol, and data integrity
 * 
 * Uses unified responsive layout with mobile-first approach
 */

import { Page } from './Page.js';

export class SecurityPage extends Page {
  constructor(props = {}) {
    super({
      ...props,
      pageId: 'security',
      title: 'Security & Data Integrity | ScholarShare',
      bgClass: 'bg-slate-900'
    });
  }

  /**
   * Get security features data for DRY rendering
   */
  get securityFeatures() {
    return [
      {
        icon: 'fa-shield-virus',
        title: 'SOC2 Type II Ready',
        titleMobile: 'SOC2 Type II Ready',
        descriptionDesktop: 'Our infrastructure follows the highest standards of organizational data security, ensuring student behavioral patterns are never compromised.',
        descriptionMobile: 'Highest standards of data security for student behavioral patterns.'
      },
      {
        icon: 'fa-eye',
        title: '3-Tier Verification Protocol',
        titleMobile: '3-Tier Verification',
        descriptionDesktop: 'Solving the Garbage In, Garbage Out problem. Only digitally signed completions (Tier 3) flow to official accreditation reports.',
        descriptionMobile: 'Only Tier 3 completions flow to accreditation reports.'
      },
      {
        icon: 'fa-history',
        title: 'Auditable Campus Channels',
        titleMobile: 'Auditable Channels',
        descriptionDesktop: 'Unlike WhatsApp, our Campus Channels offer encrypted discourse that is auditable upon reported grievances (ragging/misinformation).',
        descriptionMobile: 'Encrypted discourse, auditable for grievances.'
      }
    ];
  }

  /**
   * Get verification tiers data
   */
  get verificationTiers() {
    return [
      { tier: 1, label: 'Self-Claimed', trust: 'Low', trustColor: 'yellow', bgClass: 'bg-white/5' },
      { tier: 2, label: 'Peer-Verified', trust: 'Medium', trustColor: 'blue', bgClass: 'bg-white/5' },
      { tier: 3, label: 'Host-Verified', trust: 'OFFICIAL', trustColor: 'white', bgClass: 'bg-indigo-600/20', isHighlight: true }
    ];
  }

  render() {
    const features = this.securityFeatures;
    const tiers = this.verificationTiers;

    const content = `
      <div class="pt-24 md:pt-32 pb-8 md:pb-20 bg-slate-900">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          
          <!-- Hero Section -->
          <div class="text-center mb-6 md:mb-20">
            <!-- Mobile Title -->
            <h1 class="mobile-display-title md:hidden text-white mb-3">Security & <span class="text-indigo-400">Data Integrity</span></h1>
            <!-- Desktop Title -->
            <h1 class="hidden md:block text-5xl lg:text-7xl font-black text-white mb-6">Security & <br><span class="text-indigo-400">Data Integrity.</span></h1>
            
            <!-- Mobile Subtitle -->
            <p class="md:hidden text-slate-400 text-sm">Every data point audit-ready and tamper-proof.</p>
            <!-- Desktop Subtitle -->
            <p class="hidden md:block text-xl text-slate-400 max-w-2xl mx-auto">We protect the institutional reputation by ensuring every data point is audit-ready and tamper-proof.</p>
          </div>
          
          <!-- Mobile: Verification Protocol First -->
          <div class="md:hidden px-0 mb-6">
            <div class="mobile-card-dark">
              <h3 class="text-white font-bold text-sm mb-4">Verification Protocol</h3>
              <div class="space-y-2">
                ${tiers.map(tier => `
                  <div class="flex items-center justify-between p-${tier.isHighlight ? '4' : '3'} ${tier.isHighlight ? 'bg-indigo-600/30 border border-indigo-500' : 'bg-white/5'} rounded-xl">
                    <div class="flex items-center gap-2">
                      <span class="w-6 h-6 ${tier.isHighlight ? 'bg-white text-indigo-600' : `bg-${tier.trustColor}-500/20 text-${tier.trustColor}-400`} rounded-full flex items-center justify-center text-xs font-bold">${tier.tier}</span>
                      <span class="${tier.isHighlight ? 'text-white font-bold' : 'text-slate-300'} text-sm">${tier.label}</span>
                    </div>
                    <span class="text-${tier.isHighlight ? 'white' : tier.trustColor + '-400'} text-xs font-bold ${tier.isHighlight ? 'uppercase' : ''}">${tier.trust}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <!-- Mobile: Security Features -->
          <div class="md:hidden space-y-2 mb-4">
            ${features.map(feature => `
              <div class="mobile-card-dark flex items-start gap-3">
                <div class="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <i class="fas ${feature.icon}"></i>
                </div>
                <div>
                  <h3 class="text-white font-bold text-sm mb-1">${feature.titleMobile}</h3>
                  <p class="text-slate-400 text-xs">${feature.descriptionMobile}</p>
                </div>
              </div>
            `).join('')}
          </div>
          
          <!-- Desktop: Two Column Layout -->
          <div class="hidden md:grid md:grid-cols-2 gap-12 items-center mb-20">
            <!-- Features Column -->
            <div class="space-y-8">
              ${features.map(feature => `
                <div class="flex gap-6">
                  <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex-shrink-0 flex items-center justify-center text-2xl border border-indigo-400/30" aria-hidden="true">
                    <i class="fas ${feature.icon}"></i>
                  </div>
                  <div>
                    <h3 class="text-white font-bold text-xl mb-2">${feature.title}</h3>
                    <p class="text-slate-400">${feature.descriptionDesktop}</p>
                  </div>
                </div>
              `).join('')}
            </div>
            
            <!-- Verification Protocol Card -->
            <div class="bg-white/5 p-12 rounded-[3rem] border border-white/10">
              <h4 class="text-white font-bold text-2xl mb-6">Verification Protocol</h4>
              <div class="space-y-4">
                <div class="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span class="text-slate-400">Self-Claimed (Tier 1)</span>
                  <span class="text-yellow-400">Low Trust</span>
                </div>
                <div class="p-4 bg-white/5 rounded-2xl border border-white/10 flex justify-between items-center">
                  <span class="text-slate-400">Peer-Verified (Tier 2)</span>
                  <span class="text-blue-400">Medium Trust</span>
                </div>
                <div class="p-6 bg-indigo-600/20 rounded-2xl border border-indigo-400 flex justify-between items-center font-bold text-white">
                  <span>Host-Verified (Tier 3)</span>
                  <span>OFFICIAL</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
