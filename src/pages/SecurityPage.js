/**
 * @fileoverview Security Page
 * Security features, verification protocol, and data integrity
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
   * Render the desktop layout (unchanged from original)
   */
  renderDesktopLayout() {
    return `
      <div class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-20">
            <h1 class="text-5xl lg:text-7xl font-black text-white mb-6">Security & <br><span class="text-indigo-400">Data Integrity.</span></h1>
            <p class="text-xl text-slate-400 max-w-2xl mx-auto">We protect the institutional reputation by ensuring every data point is audit-ready and tamper-proof.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div class="space-y-8">
              <!-- SOC2 -->
              <div class="flex gap-6">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex-shrink-0 flex items-center justify-center text-2xl border border-indigo-400/30" aria-hidden="true">
                  <i class="fas fa-shield-virus"></i>
                </div>
                <div>
                  <h3 class="text-white font-bold text-xl mb-2">SOC2 Type II Ready</h3>
                  <p class="text-slate-400">Our infrastructure follows the highest standards of organizational data security, ensuring student behavioral patterns are never compromised.</p>
                </div>
              </div>
              <!-- 3-Tier Verification -->
              <div class="flex gap-6">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex-shrink-0 flex items-center justify-center text-2xl border border-indigo-400/30" aria-hidden="true">
                  <i class="fas fa-eye"></i>
                </div>
                <div>
                  <h3 class="text-white font-bold text-xl mb-2">3-Tier Verification Protocol</h3>
                  <p class="text-slate-400">Solving the Garbage In, Garbage Out problem. Only digitally signed completions (Tier 3) flow to official accreditation reports.</p>
                </div>
              </div>
              <!-- Auditable Channels -->
              <div class="flex gap-6">
                <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex-shrink-0 flex items-center justify-center text-2xl border border-indigo-400/30" aria-hidden="true">
                  <i class="fas fa-history"></i>
                </div>
                <div>
                  <h3 class="text-white font-bold text-xl mb-2">Auditable Campus Channels</h3>
                  <p class="text-slate-400">Unlike WhatsApp, our Campus Channels offer encrypted discourse that is auditable upon reported grievances (ragging/misinformation).</p>
                </div>
              </div>
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
  }

  /**
   * Render the mobile-optimized layout (experience-first design)
   */
  renderMobileLayout() {
    return `
      <div class="pt-24 pb-8 mobile-fade-in bg-slate-900">
        <!-- Mobile Hero -->
        <div class="px-4 mb-6 text-center">
          <h1 class="mobile-display-title text-white mb-3 mobile-stagger-1">Security & <span class="text-indigo-400">Data Integrity</span></h1>
          <p class="text-slate-400 text-sm mobile-stagger-2">Every data point audit-ready and tamper-proof.</p>
        </div>

        <!-- Verification Protocol - Compact -->
        <div class="px-4 mb-6">
          <div class="mobile-card-dark">
            <h3 class="text-white font-bold text-sm mb-4">Verification Protocol</h3>
            <div class="space-y-2">
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-xl mobile-touch-active">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 bg-yellow-500/20 rounded-full flex items-center justify-center text-xs font-bold text-yellow-400">1</span>
                  <span class="text-slate-300 text-sm">Self-Claimed</span>
                </div>
                <span class="text-yellow-400 text-xs font-bold">Low</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white/5 rounded-xl mobile-touch-active">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center text-xs font-bold text-blue-400">2</span>
                  <span class="text-slate-300 text-sm">Peer-Verified</span>
                </div>
                <span class="text-blue-400 text-xs font-bold">Medium</span>
              </div>
              <div class="flex items-center justify-between p-4 bg-indigo-600/30 rounded-xl border border-indigo-500">
                <div class="flex items-center gap-2">
                  <span class="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-indigo-600">3</span>
                  <span class="text-white text-sm font-bold">Host-Verified</span>
                </div>
                <span class="text-white text-xs font-bold uppercase">Official</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Features -->
        <div class="px-4 space-y-2 mb-4">
          <div class="mobile-card-dark flex items-start gap-3 mobile-touch-active">
            <div class="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
              <i class="fas fa-shield-virus"></i>
            </div>
            <div>
              <h3 class="text-white font-bold text-sm mb-1">SOC2 Type II Ready</h3>
              <p class="text-slate-400 text-xs">Highest standards of data security for student behavioral patterns.</p>
            </div>
          </div>
          
          <div class="mobile-card-dark flex items-start gap-3 mobile-touch-active">
            <div class="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
              <i class="fas fa-eye"></i>
            </div>
            <div>
              <h3 class="text-white font-bold text-sm mb-1">3-Tier Verification</h3>
              <p class="text-slate-400 text-xs">Only Tier 3 completions flow to accreditation reports.</p>
            </div>
          </div>
          
          <div class="mobile-card-dark flex items-start gap-3 mobile-touch-active">
            <div class="w-10 h-10 bg-indigo-600/20 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
              <i class="fas fa-history"></i>
            </div>
            <div>
              <h3 class="text-white font-bold text-sm mb-1">Auditable Channels</h3>
              <p class="text-slate-400 text-xs">Encrypted discourse, auditable for grievances.</p>
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
