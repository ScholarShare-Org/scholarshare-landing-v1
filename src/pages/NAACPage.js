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
            <!-- Criterion 5 - CORE STRENGTH -->
            <article class="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
              <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="max-w-2xl">
                  <div class="inline-block px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold uppercase mb-3">Core Strength</div>
                  <h2 class="text-3xl font-black mb-4">Criterion 5: Student Support & Progression</h2>
                  <p class="text-slate-400">Metrics 5.1-5.4: Tracking scholarships, internships, placements, and all co-curricular & extracurricular participation.</p>
                </div>
                <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
                  <div class="text-4xl font-black">80%+</div>
                  <div class="text-[10px] uppercase font-bold tracking-widest">Automation Rate</div>
                </div>
              </div>
              <div class="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fas fa-eye-slash text-amber-500" aria-hidden="true"></i> The Current Gap
                  </h4>
                  <p class="text-slate-500 mb-6">Tracking internal events is difficult; tracking when a student wins a debate at a <em>rival</em> college is impossible without a unified student reporting mechanism.</p>
                  <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                    5.3 (Student Participation) alone is worth <strong>50+ marks</strong>—and it's the hardest to document.
                  </div>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <i class="fas fa-check-circle" aria-hidden="true"></i> ScholarShare Solution
                  </h4>
                  <ul class="space-y-3 text-slate-500 text-sm">
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Captures the <strong>External Footprint</strong>—wins at other colleges, external programs</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Timestamped participation records with verification</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Department-wise & demographic distribution analytics</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Internship, placement & scholarship tracking</li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- Criterion 3 -->
            <article class="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
              <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="max-w-2xl">
                  <h2 class="text-3xl font-black mb-4">Criterion 3: Research, Innovations & Extension</h2>
                  <p class="text-slate-400">Metrics 3.1-3.5: Tracking research grants, hackathons, innovation challenges, extension activities (NSS/NCC), and collaborations.</p>
                </div>
                <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
                  <div class="text-4xl font-black">70%</div>
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
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Geotagged activity logs for proof of outreach</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Automatic AQAR report generation</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> NSS/NCC/Social Service participation tracking</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Direct APAAR/ABC credit mapping</li>
                  </ul>
                </div>
              </div>
            </article>

            <!-- Criterion 7 -->
            <article class="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
              <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                <div class="max-w-2xl">
                  <h2 class="text-3xl font-black mb-4">Criterion 7: Institutional Values & Best Practices</h2>
                  <p class="text-slate-400">Metrics 7.1-7.3: Community service, sustainability, ethical practices, and institutional distinctiveness documentation.</p>
                </div>
                <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
                  <div class="text-4xl font-black">60%</div>
                  <div class="text-[10px] uppercase font-bold tracking-widest">Automation Rate</div>
                </div>
              </div>
              <div class="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
                <div>
                  <h4 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <i class="fas fa-question-circle text-amber-500" aria-hidden="true"></i> The Current Gap
                  </h4>
                  <p class="text-slate-500 mb-6">Proving sustained community engagement and documenting "best practices" with verifiable data is challenging without continuous tracking.</p>
                </div>
                <div>
                  <h4 class="font-bold text-indigo-600 mb-4 flex items-center gap-2">
                    <i class="fas fa-check-circle" aria-hidden="true"></i> ScholarShare Solution
                  </h4>
                  <ul class="space-y-3 text-slate-500 text-sm">
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Community service & sustainability initiative tracking</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> ScholarShare itself serves as a "Best Practice" in student engagement</li>
                    <li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i> Unique engagement pattern analytics for distinctiveness</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <!-- Other Criteria Summary -->
          <div class="mt-16 bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 shadow-lg">
            <h2 class="text-2xl font-black mb-6 text-center">Other Criteria Support</h2>
            <div class="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div class="text-2xl font-black text-slate-400">50%</div>
                <div class="text-sm font-bold text-slate-600">Criterion 6</div>
                <div class="text-xs text-slate-400">Governance & Quality Assurance</div>
              </div>
              <div>
                <div class="text-2xl font-black text-slate-400">40%</div>
                <div class="text-sm font-bold text-slate-600">Criterion 1</div>
                <div class="text-xs text-slate-400">Curricular Aspects</div>
              </div>
              <div>
                <div class="text-2xl font-black text-slate-300">30%</div>
                <div class="text-sm font-bold text-slate-600">Criterion 2</div>
                <div class="text-xs text-slate-400">Teaching-Learning</div>
              </div>
              <div>
                <div class="text-2xl font-black text-slate-300">20%</div>
                <div class="text-sm font-bold text-slate-600">Criterion 4</div>
                <div class="text-xs text-slate-400">Infrastructure</div>
              </div>
            </div>
          </div>

          <!-- Bottom Line CTA -->
          <div class="mt-16 bg-slate-900 text-white rounded-[3rem] p-8 lg:p-12 text-center">
            <h2 class="text-3xl font-black mb-4">Bottom Line</h2>
            <p class="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              ScholarShare automates <strong class="text-white">30% of NAAC evidence directly</strong>—the most labor-intensive, evidence-heavy areas that cause maximum stress during preparation.
            </p>
            <div class="flex flex-wrap gap-4 justify-center">
              <button onclick="navigateTo('joinpilot')" class="bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-indigo-500 transition-all">
                Schedule NAAC Demo <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </button>
              <button onclick="navigateTo('institutions')" class="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Back to Institutions
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
