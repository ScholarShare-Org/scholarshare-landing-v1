/**
 * @fileoverview NAAC Readiness Page
 * Comprehensive NAAC compliance features with criterion breakdowns
 */

import { Page } from './Page.js';

export class NAACPage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'naac',
            title: 'NAAC Readiness | ScholarShare',
            bgClass: 'bg-slate-50'
        });
    }

    render() {
        const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <!-- Header -->
          <div class="text-center mb-16">
            <span class="text-indigo-600 font-bold uppercase tracking-widest text-sm">Strategic Accreditation</span>
            <h1 class="text-5xl font-black mt-4">Compliance Generator & Safety Net</h1>
            <p class="text-slate-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
              The binary accreditation system has no room for data fudging. ScholarShare protects your institution from the "Transparency Paradox"—ensuring your grade reflects real activity while protecting you from penalties.
            </p>
          </div>

          <!-- Three-Tier Protocol (Summary) -->
          <div class="grid lg:grid-cols-3 gap-8 mb-20 cursor-pointer" onclick="navigateTo('security')">
            <article class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div class="text-6xl font-black text-slate-100 absolute top-2 right-4 select-none" aria-hidden="true">1</div>
              <h3 class="text-xl font-bold mb-4 relative z-10">Self-Claimed</h3>
              <p class="text-slate-500 relative z-10">Student logs an activity. Useful for informal vibrancy metrics.</p>
            </article>
            <article class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative overflow-hidden">
              <div class="text-6xl font-black text-slate-100 absolute top-2 right-4 select-none" aria-hidden="true">2</div>
              <h3 class="text-xl font-bold mb-4 relative z-10">Peer-Verified</h3>
              <p class="text-slate-500 relative z-10">Verified by a club leader present at the event. High engagement trust factor.</p>
            </article>
            <article class="bg-indigo-600 p-8 rounded-3xl shadow-xl relative overflow-hidden text-white">
              <div class="text-6xl font-black text-white/10 absolute top-2 right-4 select-none" aria-hidden="true">3</div>
              <h3 class="text-xl font-bold mb-4 relative z-10">Host-Verified</h3>
              <p class="text-white/80 relative z-10"><strong>Only Tier 3 data flows to ABC and NAAC reports.</strong></p>
            </article>
          </div>

          <!-- Criterion Breakdown -->
          <div class="space-y-12">
            <!-- Criterion 3 -->
            <article class="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
              <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="max-w-2xl">
                  <h2 class="text-3xl font-black mb-4">Criterion 3: Research, Innovations & Extension</h2>
                  <p class="text-slate-400">Metrics 3.4.3 & 3.4.4: Tracking student participation in extension and outreach programs (NSS/NCC/Social Service).</p>
                </div>
                <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
                  <div class="text-4xl font-black">90%</div>
                  <div class="text-[10px] uppercase font-bold tracking-widest">Automation Rate</div>
                </div>
              </div>
              <div class="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fas fa-exclamation-triangle text-amber-500" aria-hidden="true"></i> The Current Gap
                  </h4>
                  <p class="text-slate-500 mb-6">Most institutions rely on manual collection of paper certificates at year-end, leading to 40% data loss and accidental fabrication risks.</p>
                  <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                    NAAC now imposes penalties for data fudging. Manual systems are high-risk.
                  </div>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <i class="fas fa-check-circle" aria-hidden="true"></i> ScholarShare Solution
                  </h4>
                  <ul class="space-y-3 text-slate-500 text-sm">
                    <li class="flex gap-2"><i class="fas fa-check text-green-500 mt-1" aria-hidden="true"></i> Geotagged activity logs for proof of outreach.</li>
                    <li class="flex gap-2"><i class="fas fa-check text-green-500 mt-1" aria-hidden="true"></i> Automatic report generation for AQAR submissions.</li>
                    <li class="flex gap-2"><i class="fas fa-check text-green-500 mt-1" aria-hidden="true"></i> Direct link to student APAAR/ABC for credit mapping.</li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- Criterion 5 -->
            <article class="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
              <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="max-w-2xl">
                  <h2 class="text-3xl font-black mb-4">Criterion 5: Student Support & Progression</h2>
                  <p class="text-slate-400">Metric 5.3.2: Tracking sports and cultural programs participation (Internal & External).</p>
                </div>
                <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
                  <div class="text-4xl font-black">100%</div>
                  <div class="text-[10px] uppercase font-bold tracking-widest">Visibility</div>
                </div>
              </div>
              <div class="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fas fa-eye-slash text-amber-500" aria-hidden="true"></i> The Current Gap
                  </h4>
                  <p class="text-slate-500 mb-6">Tracking internal events is difficult; tracking when a student wins a debate at a *rival* college is impossible without a unified student reporting mechanism.</p>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <i class="fas fa-satellite" aria-hidden="true"></i> ScholarShare Solution
                  </h4>
                  <p class="text-slate-500 mb-4 text-sm">We capture the <strong>External Footprint</strong>. When your student wins elsewhere, they log it on ScholarShare, you verify it once, and it's filed for your accreditation.</p>
                  <div class="flex gap-4">
                    <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400" aria-hidden="true"><i class="fas fa-trophy"></i></div>
                    <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400" aria-hidden="true"><i class="fas fa-running"></i></div>
                    <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400" aria-hidden="true"><i class="fas fa-mask"></i></div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
