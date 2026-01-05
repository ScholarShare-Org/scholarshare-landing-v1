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

    render() {
        const content = `
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

        return this.renderPage(content);
    }
}
