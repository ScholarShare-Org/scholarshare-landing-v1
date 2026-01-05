/**
 * @fileoverview Institutions Page
 * Institution-focused landing with analytics, telecasting engine, and vibrancy score
 */

import { Page } from './Page.js';

export class InstitutionsPage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'institutions',
            title: 'For Institutions | ScholarShare',
            bgClass: 'bg-slate-900'
        });
    }

    render() {
        const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <!-- Institutional Header -->
          <div class="mb-20">
            <div class="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-6 uppercase tracking-wider">
              Institutional Operating System
            </div>
            <h1 class="text-5xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Institutional Intelligence <br><span class="text-indigo-400">Beyond the ERP.</span>
            </h1>
            <p class="text-xl lg:text-2xl text-slate-400 max-w-3xl mb-12">
              Legacy ERPs handle fees and attendance. ScholarShare handles the vibrancy. We turn the informal campus discourse into a verified ledger of institutional quality.
            </p>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                <h3 class="text-indigo-400 text-3xl font-black mb-2">90%</h3>
                <p class="text-slate-300 font-bold">Reduction in manual data entry for NAAC.</p>
              </div>
              <div class="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                <h3 class="text-indigo-400 text-3xl font-black mb-2">100%</h3>
                <p class="text-slate-300 font-bold">Student participation audit-readiness.</p>
              </div>
              <div class="p-8 rounded-[2rem] bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-all" onclick="navigateTo('security')">
                <h3 class="text-indigo-400 text-3xl font-black mb-2">
                  <i class="fas fa-lock text-sm align-middle mr-2" aria-hidden="true"></i>Secure
                </h3>
                <p class="text-slate-300 font-bold">3-Tier Verification Protocol.</p>
              </div>
            </div>
          </div>

          <!-- Intelligence Modules -->
          <div class="grid lg:grid-cols-2 gap-12 mb-20">
            <!-- Moneyball Effect Card -->
            <div class="bg-white rounded-[3rem] p-12 lg:p-16">
              <div class="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-2xl mb-8" aria-hidden="true">
                <i class="fas fa-chart-pie"></i>
              </div>
              <h2 class="text-3xl font-black mb-6 text-slate-900">The "Moneyball" Effect</h2>
              <p class="text-slate-600 mb-8 leading-relaxed">
                Optimize your institutional budget through real-time engagement data. If hackathons drive 90% attendance while guest lectures on theory drive 15%, ScholarShare signals the shift. Reallocate resources to what actually creates outcomes.
              </p>
              <div class="space-y-4">
                <div class="flex justify-between items-center text-sm font-bold">
                  <span>Event Engagement Score</span>
                  <span class="text-indigo-600">88/100</span>
                </div>
                <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                  <div class="h-full bg-indigo-600 w-[88%]"></div>
                </div>
              </div>
            </div>

            <!-- Telecasting Engine -->
            <div class="bg-indigo-600 rounded-[3rem] p-12 lg:p-16 text-white relative overflow-hidden">
              <div class="absolute -bottom-10 -right-10 opacity-10" aria-hidden="true">
                <i class="fas fa-satellite-dish text-[12rem]"></i>
              </div>
              <h2 class="text-3xl font-black mb-6">Talent Telecasting Engine</h2>
              <p class="opacity-90 mb-8 leading-relaxed">
                Colleges often conduct excellent programs that go unnoticed. ScholarShare acts as an internal PR machine. When a student wins an award or a department hosts a seminar, it is automatically "telecasted" to digital signage and web feeds.
              </p>
              <ul class="space-y-4">
                <li class="flex items-center gap-3">
                  <i class="fas fa-check-circle opacity-60" aria-hidden="true"></i> Digital Signage Integration
                </li>
                <li class="flex items-center gap-3">
                  <i class="fas fa-check-circle opacity-60" aria-hidden="true"></i> Social Media Auto-Feeds
                </li>
                <li class="flex items-center gap-3">
                  <i class="fas fa-check-circle opacity-60" aria-hidden="true"></i> Brand Building Metrics
                </li>
              </ul>
            </div>
          </div>

          <!-- Shadow Infrastructure Section -->
          <div class="bg-white/5 border border-white/10 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-12 items-center">
            <div class="lg:w-1/2">
              <h2 class="text-4xl font-black text-white mb-6">Ending the WhatsApp Crisis</h2>
              <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                Informal WhatsApp groups are "data black holes" and breeding grounds for misinformation or harassment (ragging). ScholarShare co-opts the network effect of chat through <strong>Campus Channels</strong>—structured, auditable spaces for student discourse that generate institutional intelligence.
              </p>
              <div class="flex gap-4">
                <div class="px-6 py-2 rounded-full bg-white/10 text-white font-bold text-sm">Auditable History</div>
                <div class="px-6 py-2 rounded-full bg-white/10 text-white font-bold text-sm">Safety Protocols</div>
              </div>
            </div>
            <div class="lg:w-1/2 bg-white/10 p-8 rounded-3xl border border-white/10 text-center">
              <div class="text-indigo-400 text-6xl font-black mb-4">Vibrancy <span class="text-white">Score</span></div>
              <div class="text-8xl font-black text-white mb-4">92</div>
              <p class="text-slate-500 uppercase font-bold tracking-widest text-xs">Real-Time Institutional Index</p>
            </div>
          </div>
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
