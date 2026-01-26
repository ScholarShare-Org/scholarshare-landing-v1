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

  /**
   * Render the desktop layout (unchanged from original)
   */
  renderDesktopLayout() {
    return `
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
  }

  /**
   * Render the mobile-optimized layout (redesigned from scratch)
   */
  renderMobileLayout() {
    return `
      <div class="pt-24 mobile-fade-in bg-slate-900">
        <!-- Hero Section -->
        <div class="px-4 mb-4">
          <span class="mobile-feature-pill bg-indigo-500/20 text-indigo-400 mb-4">
            <i class="fas fa-award"></i> NAAC Readiness
          </span>
          <h1 class="mobile-display-title text-white mb-3">
            Compliance <span class="text-indigo-400">Generator</span>
          </h1>
          <p class="text-slate-400 text-sm leading-relaxed mb-4">
            Protection from the "Transparency Paradox"—ensuring your grade reflects real activity.
          </p>
          
          <!-- Key Stats -->
          <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 text-center border border-slate-700/50">
              <div class="text-indigo-400 text-xl font-black">30%</div>
              <div class="text-slate-500 text-[10px] uppercase tracking-wider">Auto Evidence</div>
            </div>
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 text-center border border-slate-700/50">
              <div class="text-indigo-400 text-xl font-black">180+</div>
              <div class="text-slate-500 text-[10px] uppercase tracking-wider">Marks Impact</div>
            </div>
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 text-center border border-slate-700/50">
              <div class="text-indigo-400 text-xl font-black">0</div>
              <div class="text-slate-500 text-[10px] uppercase tracking-wider">Data Risk</div>
            </div>
          </div>
        </div>

        <!-- 3-Tier Verification Protocol -->
        <div class="px-4 mb-4">
          <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50" onclick="navigateTo('security')">
            <div class="flex items-center gap-2 mb-3">
              <div class="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i class="fas fa-shield-alt text-white text-xs"></i>
              </div>
              <span class="text-xs font-bold text-indigo-400 uppercase tracking-wider">Verification Protocol</span>
            </div>
            <div class="space-y-2">
              <div class="bg-slate-700/50 rounded-lg p-2 flex items-center gap-3">
                <span class="w-7 h-7 bg-slate-600 rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
                <div class="flex-1">
                  <div class="text-white text-sm font-medium">Self-Claimed</div>
                  <div class="text-slate-500 text-[10px]">Student logs activity</div>
                </div>
              </div>
              <div class="bg-slate-700/50 rounded-lg p-2 flex items-center gap-3">
                <span class="w-7 h-7 bg-slate-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</span>
                <div class="flex-1">
                  <div class="text-white text-sm font-medium">Peer-Verified</div>
                  <div class="text-slate-500 text-[10px]">Club leader confirms</div>
                </div>
              </div>
              <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-2 flex items-center gap-3">
                <span class="w-7 h-7 bg-white rounded-full flex items-center justify-center text-xs font-bold text-indigo-600">3</span>
                <div class="flex-1">
                  <div class="text-white text-sm font-bold">Host-Verified → NAAC</div>
                  <div class="text-indigo-200 text-[10px]">Only this flows to reports</div>
                </div>
                <i class="fas fa-check-circle text-white/80 text-sm"></i>
              </div>
            </div>
          </div>
        </div>

        <!-- Core Criteria - Pyramid Layout -->
        <div class="px-4 mb-4">
          <h2 class="text-lg font-black text-white mb-3 flex items-center gap-2">
            <i class="fas fa-chart-bar text-indigo-400 text-sm"></i> Criteria Automation
          </h2>
          
          <!-- Criterion 5 - Featured -->
          <div class="bg-gradient-to-br from-green-500/20 to-green-600/10 backdrop-blur-sm rounded-xl p-4 border border-green-500/30 mb-3">
            <div class="flex items-center justify-between mb-2">
              <div>
                <span class="text-[10px] font-bold text-green-400 uppercase">Core Strength</span>
                <h3 class="text-white font-bold text-sm">Criterion 5: Student Support</h3>
              </div>
              <div class="text-green-400 text-2xl font-black">80%</div>
            </div>
            <div class="h-2 bg-slate-700/50 rounded-full overflow-hidden mb-2">
              <div class="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style="width: 80%"></div>
            </div>
            <p class="text-slate-400 text-xs">Scholarships, internships, placements, co-curricular tracking</p>
          </div>
          
          <!-- Row 2: 2 items -->
          <div class="grid grid-cols-2 gap-2 mb-3">
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-white font-bold text-xs">C3: Research</h3>
                <span class="text-blue-400 text-lg font-black">70%</span>
              </div>
              <div class="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                <div class="h-full bg-blue-500 rounded-full" style="width: 70%"></div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-white font-bold text-xs">C7: Values</h3>
                <span class="text-purple-400 text-lg font-black">60%</span>
              </div>
              <div class="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                <div class="h-full bg-purple-500 rounded-full" style="width: 60%"></div>
              </div>
            </div>
          </div>
          
          <!-- Row 3: Other criteria -->
          <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 border border-slate-700/50">
            <h3 class="text-slate-400 text-xs font-bold mb-2 uppercase">Other Criteria</h3>
            <div class="grid grid-cols-4 gap-2 text-center">
              <div>
                <div class="text-indigo-400 text-sm font-black">50%</div>
                <div class="text-slate-500 text-[10px]">C6</div>
              </div>
              <div>
                <div class="text-indigo-400/70 text-sm font-black">40%</div>
                <div class="text-slate-500 text-[10px]">C1</div>
              </div>
              <div>
                <div class="text-indigo-400/50 text-sm font-black">30%</div>
                <div class="text-slate-500 text-[10px]">C2</div>
              </div>
              <div>
                <div class="text-indigo-400/30 text-sm font-black">20%</div>
                <div class="text-slate-500 text-[10px]">C4</div>
              </div>
            </div>
          </div>
        </div>

        <!-- The Problem We Solve -->
        <div class="px-4 mb-4">
          <div class="bg-gradient-to-br from-amber-500/10 to-orange-500/5 backdrop-blur-sm rounded-xl p-4 border border-amber-500/20">
            <div class="flex items-center gap-2 mb-2">
              <i class="fas fa-exclamation-triangle text-amber-400"></i>
              <span class="text-xs font-bold text-amber-400 uppercase">The Problem</span>
            </div>
            <p class="text-slate-300 text-sm mb-3">Manual collection leads to <strong class="text-white">40% data loss</strong> and accidental fabrication risks.</p>
            <div class="bg-slate-900/50 rounded-lg p-2 text-center">
              <span class="text-red-400 text-xs font-bold">⚠️ NAAC now imposes penalties for data fudging</span>
            </div>
          </div>
        </div>

        <!-- Bottom Line -->
        <div class="px-4 mb-4">
          <div class="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-xl p-5 text-center border border-indigo-500/30">
            <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Bottom Line</div>
            <div class="text-4xl font-black text-white mb-1">30%</div>
            <p class="text-indigo-400 text-sm font-medium">NAAC evidence automated directly</p>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="px-4 pb-6 border-b border-slate-800">
          <button onclick="navigateTo('joinpilot')" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
            <span>Schedule NAAC Demo</span>
            <i class="fas fa-arrow-right"></i>
          </button>
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
