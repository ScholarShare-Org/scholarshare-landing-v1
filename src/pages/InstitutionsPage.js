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

            <!-- Hero Extension: The Data Gap -->
            <div class="mt-8 text-center">
              <p class="text-slate-500 text-sm uppercase tracking-widest mb-6">What's missing from your ERP?</p>
              <div class="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8">
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  <i class="fas fa-trophy text-yellow-500 mr-2" aria-hidden="true"></i>Hackathon wins
                </span>
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  <i class="fas fa-hands-helping text-green-500 mr-2" aria-hidden="true"></i>NSS/NCC camps
                </span>
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  <i class="fas fa-file-alt text-blue-500 mr-2" aria-hidden="true"></i>Research papers
                </span>
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  <i class="fas fa-certificate text-purple-500 mr-2" aria-hidden="true"></i>Certifications
                </span>
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  <i class="fas fa-handshake text-indigo-400 mr-2" aria-hidden="true"></i>Industry visits
                </span>
                <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                  <i class="fas fa-users text-pink-500 mr-2" aria-hidden="true"></i>Club activities
                </span>
              </div>
              <p class="text-slate-400 max-w-2xl mx-auto mb-10">
                This is the <strong class="text-white">invisible data</strong> that defines institutional quality—and it's exactly what NAAC peers want to see documented.
              </p>
              
              <!-- Scroll indicator -->
              <button onclick="document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to next section">
                <i class="fas fa-chevron-down text-slate-600 hover:text-indigo-400 text-2xl" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <!-- HOW IT WORKS - HORIZONTAL FLOW -->
          <div id="how-it-works" class="mb-16 scroll-mt-24">
            <div class="text-center mb-10">
              <div class="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-sm mb-4 uppercase tracking-wider">
                <i class="fas fa-cogs mr-2" aria-hidden="true"></i>End-to-End Automation
              </div>
              <h2 class="text-4xl lg:text-5xl font-black text-white mb-6">
                How ScholarShare <span class="text-indigo-400">Replaces Manual Work</span>
              </h2>
              <p class="text-lg text-slate-400 max-w-3xl mx-auto">
                From opportunity discovery to NAAC documentation—see whose work we automate at every step.
              </p>
            </div>

            <!-- Flow Steps - Dark Theme -->
            <div class="bg-white/5 backdrop-blur-sm rounded-[2rem] p-8 lg:p-10 border border-white/10">
              <!-- Desktop: Horizontal Flow with Arrows -->
              <div class="hidden lg:flex items-stretch gap-2">
                <!-- Step 1 -->
                <div class="flex-1 bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-indigo-500/50 transition-all group">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">1</div>
                    <h3 class="text-white font-black">Discover</h3>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">AI curates relevant opportunities</p>
                  <div class="flex items-center gap-2 text-xs">
                    <span class="px-2 py-1 bg-red-500/10 text-red-400 rounded-md font-medium">Replaces</span>
                    <span class="text-slate-500">WhatsApp forwards</span>
                  </div>
                </div>
                <div class="flex items-center text-indigo-500" aria-hidden="true"><i class="fas fa-chevron-right"></i></div>

                <!-- Step 2 -->
                <div class="flex-1 bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-indigo-500/50 transition-all group">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">2</div>
                    <h3 class="text-white font-black">Distribute</h3>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">Smart push to right students</p>
                  <div class="flex items-center gap-2 text-xs">
                    <span class="px-2 py-1 bg-red-500/10 text-red-400 rounded-md font-medium">Replaces</span>
                    <span class="text-slate-500">Mass broadcasts</span>
                  </div>
                </div>
                <div class="flex items-center text-indigo-500" aria-hidden="true"><i class="fas fa-chevron-right"></i></div>

                <!-- Step 3 -->
                <div class="flex-1 bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-indigo-500/50 transition-all group">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">3</div>
                    <h3 class="text-white font-black">Capture</h3>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">Auto-log with geo + timestamp</p>
                  <div class="flex items-center gap-2 text-xs">
                    <span class="px-2 py-1 bg-red-500/10 text-red-400 rounded-md font-medium">Replaces</span>
                    <span class="text-slate-500">Excel & paper trails</span>
                  </div>
                </div>
                <div class="flex items-center text-indigo-500" aria-hidden="true"><i class="fas fa-chevron-right"></i></div>

                <!-- Step 4 -->
                <div class="flex-1 bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-indigo-500/50 transition-all group">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">4</div>
                    <h3 class="text-white font-black">Verify</h3>
                  </div>
                  <p class="text-slate-400 text-sm mb-3">3-tier approval workflow</p>
                  <div class="flex items-center gap-2 text-xs">
                    <span class="px-2 py-1 bg-red-500/10 text-red-400 rounded-md font-medium">Replaces</span>
                    <span class="text-slate-500">Manual cert checks</span>
                  </div>
                </div>
                <div class="flex items-center text-indigo-500" aria-hidden="true"><i class="fas fa-chevron-right"></i></div>

                <!-- Step 5 - Highlighted -->
                <div class="flex-1 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-5 border border-indigo-500">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center font-black">5</div>
                    <h3 class="text-white font-black">NAAC Ready</h3>
                  </div>
                  <p class="text-indigo-100 text-sm mb-3">Auto-mapped to criteria</p>
                  <div class="flex items-center gap-2 text-xs">
                    <span class="px-2 py-1 bg-white/20 text-white rounded-md font-medium">Replaces</span>
                    <span class="text-indigo-200">6mo compilation</span>
                  </div>
                </div>
              </div>

              <!-- Mobile: Vertical Stack -->
              <div class="lg:hidden space-y-3">
                <div class="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">1</div>
                  <div class="flex-1">
                    <h3 class="text-white font-bold text-sm">Discover</h3>
                    <p class="text-slate-500 text-xs">AI curates • <span class="text-red-400">Replaces WhatsApp</span></p>
                  </div>
                </div>
                <div class="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">2</div>
                  <div class="flex-1">
                    <h3 class="text-white font-bold text-sm">Distribute</h3>
                    <p class="text-slate-500 text-xs">Smart push • <span class="text-red-400">Replaces broadcasts</span></p>
                  </div>
                </div>
                <div class="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">3</div>
                  <div class="flex-1">
                    <h3 class="text-white font-bold text-sm">Capture</h3>
                    <p class="text-slate-500 text-xs">Geo + time • <span class="text-red-400">Replaces Excel</span></p>
                  </div>
                </div>
                <div class="flex items-center gap-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black flex-shrink-0">4</div>
                  <div class="flex-1">
                    <h3 class="text-white font-bold text-sm">Verify</h3>
                    <p class="text-slate-500 text-xs">3-tier approval • <span class="text-red-400">Replaces manual</span></p>
                  </div>
                </div>
                <div class="flex items-center gap-4 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl p-4 border border-indigo-500">
                  <div class="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center font-black flex-shrink-0">5</div>
                  <div class="flex-1">
                    <h3 class="text-white font-bold text-sm">NAAC Ready</h3>
                    <p class="text-indigo-200 text-xs">Auto-mapped • <span class="text-indigo-100">Saves 6 months</span></p>
                  </div>
                </div>
              </div>

              <!-- Bottom Stats -->
              <div class="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <div class="text-2xl font-black text-white">500+</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Hours Saved</div>
                </div>
                <div>
                  <div class="text-2xl font-black text-white">8+</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Staff Freed</div>
                </div>
                <div>
                  <div class="text-2xl font-black text-white">100%</div>
                  <div class="text-xs text-slate-500 uppercase tracking-wider">Audit Trail</div>
                </div>
              </div>
            </div>
          </div>

          <!-- NAAC Lead-in -->
          <div class="text-center mb-20">
            <p class="text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-10">
              ScholarShare captures every student achievement, verifies it through a 3-tier protocol, and auto-maps it to NAAC Criteria 3, 5, and 7. No more last-minute scrambles. No more fake certificates. Just <strong class="text-white">continuous, audit-ready documentation</strong> that proves your institution's vibrancy in real-time.
            </p>
            <!-- Scroll indicator -->
            <button onclick="document.getElementById('naac-mapping').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to NAAC section">
              <i class="fas fa-chevron-down text-slate-600 hover:text-indigo-400 text-2xl" aria-hidden="true"></i>
            </button>
          </div>

          <!-- NAAC AUTOMATION - BIGGEST HIGHLIGHT (Professional Dashboard Style) -->
          <div id="naac-mapping" class="mb-32 lg:mb-40 scroll-mt-24">
            <!-- Section Header -->
            <div class="text-center mb-12">
              <div class="inline-block px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-sm mb-4 uppercase tracking-wider">
                <i class="fas fa-award mr-2" aria-hidden="true"></i>NAAC 2023 Framework Ready
              </div>
              <h2 class="text-4xl lg:text-5xl font-black text-white mb-4">
                NAAC Criteria <span class="text-indigo-400">Impact Mapping</span>
              </h2>
              <p class="text-slate-400 text-lg max-w-3xl mx-auto">
                7 Criteria. 34 Key Indicators. ~150 Metrics. <br class="hidden md:block">
                ScholarShare doesn't solve <em>all</em> of NAAC—we solve the <strong class="text-white">hardest parts</strong> colleges struggle with most.
              </p>
            </div>

            <!-- Main Impact Dashboard -->
            <div class="bg-white rounded-[2rem] p-8 lg:p-12 mb-8">
              <!-- Top Stats Bar -->
              <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                <div class="text-center p-4 bg-slate-50 rounded-2xl">
                  <div class="text-3xl lg:text-4xl font-black text-slate-900">45-50%</div>
                  <div class="text-sm text-slate-500 font-medium">Total Evidence Automation</div>
                </div>
                <div class="text-center p-4 bg-indigo-50 rounded-2xl border-2 border-indigo-200">
                  <div class="text-3xl lg:text-4xl font-black text-indigo-600">180+</div>
                  <div class="text-sm text-indigo-700 font-medium">NAAC Marks Impacted</div>
                </div>
                <div class="text-center p-4 bg-slate-50 rounded-2xl">
                  <div class="text-3xl lg:text-4xl font-black text-slate-900">3</div>
                  <div class="text-sm text-slate-500 font-medium">High-Impact Criteria</div>
                </div>
                <div class="text-center p-4 bg-green-50 rounded-2xl">
                  <div class="text-3xl lg:text-4xl font-black text-green-600">Real-time</div>
                  <div class="text-sm text-green-700 font-medium">Evidence Generation</div>
                </div>
              </div>

              <!-- Criteria Impact Grid -->
              <h3 class="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <i class="fas fa-chart-bar text-indigo-600" aria-hidden="true"></i>
                Criteria Automation Coverage
              </h3>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                <!-- Criterion 5 - VERY HIGH -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 relative overflow-hidden">
                  <div class="absolute top-2 right-2 px-2 py-0.5 bg-green-600 text-white text-xs font-bold rounded-full">CORE STRENGTH</div>
                  <div class="text-sm text-green-700 font-bold mb-1">Criterion 5</div>
                  <div class="text-lg font-black text-slate-900 mb-2">Student Support & Progression</div>
                  <div class="flex items-center gap-3 mb-3">
                    <div class="flex-1 h-3 bg-green-200 rounded-full overflow-hidden">
                      <div class="h-full bg-green-600 w-[80%]"></div>
                    </div>
                    <span class="text-green-700 font-black">80%</span>
                  </div>
                  <p class="text-xs text-slate-600">Full automation of 5.3 (Student Participation), tracking scholarships, internships, placements</p>
                </div>

                <!-- Criterion 3 - HIGH -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200">
                  <div class="absolute top-2 right-2 px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded-full hidden">HIGH</div>
                  <div class="text-sm text-blue-700 font-bold mb-1">Criterion 3</div>
                  <div class="text-lg font-black text-slate-900 mb-2">Research & Extension</div>
                  <div class="flex items-center gap-3 mb-3">
                    <div class="flex-1 h-3 bg-blue-200 rounded-full overflow-hidden">
                      <div class="h-full bg-blue-600 w-[70%]"></div>
                    </div>
                    <span class="text-blue-700 font-black">70%</span>
                  </div>
                  <p class="text-xs text-slate-600">Hackathons, innovation challenges, extension activities, industry collaborations</p>
                </div>

                <!-- Criterion 7 - HIGH -->
                <div class="p-5 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200">
                  <div class="text-sm text-purple-700 font-bold mb-1">Criterion 7</div>
                  <div class="text-lg font-black text-slate-900 mb-2">Values & Best Practices</div>
                  <div class="flex items-center gap-3 mb-3">
                    <div class="flex-1 h-3 bg-purple-200 rounded-full overflow-hidden">
                      <div class="h-full bg-purple-600 w-[60%]"></div>
                    </div>
                    <span class="text-purple-700 font-black">60%</span>
                  </div>
                  <p class="text-xs text-slate-600">Community service, sustainability initiatives, institutional distinctiveness documentation</p>
                </div>


              </div>

              <!-- The Evidence Gap Section -->
              <div class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <div class="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 class="text-2xl font-black mb-4">The "Evidence Gap" We Fill</h3>
                    <p class="text-slate-300 mb-6">Most colleges struggle with these 4 critical problems during NAAC preparation. ScholarShare solves all four.</p>
                    <div class="grid grid-cols-2 gap-4">
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <i class="fas fa-file-alt text-indigo-400 text-sm"></i>
                        </div>
                        <div>
                          <div class="font-bold text-sm">Documentation</div>
                          <div class="text-xs text-slate-400">Proving activities happened</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <i class="fas fa-sync-alt text-indigo-400 text-sm"></i>
                        </div>
                        <div>
                          <div class="font-bold text-sm">Continuity</div>
                          <div class="text-xs text-slate-400">Sustained, not one-off</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <i class="fas fa-users text-indigo-400 text-sm"></i>
                        </div>
                        <div>
                          <div class="font-bold text-sm">Coverage</div>
                          <div class="text-xs text-slate-400">All student segments</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                          <i class="fas fa-chart-line text-indigo-400 text-sm"></i>
                        </div>
                        <div>
                          <div class="font-bold text-sm">Outcomes</div>
                          <div class="text-xs text-slate-400">Linking to results</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-white/5 rounded-xl p-6 border border-white/10">
                    <div class="text-sm text-indigo-400 font-bold uppercase tracking-wider mb-4">Auto-Generated Evidence</div>
                    <div class="space-y-3">
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-300"><i class="fas fa-hashtag mr-2 text-slate-500" aria-hidden="true"></i>Participation Records</span>
                        <span class="text-green-400 font-bold">Timestamped ✓</span>
                      </div>
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-300"><i class="fas fa-map-marker-alt mr-2 text-slate-500" aria-hidden="true"></i>Geo-tagged Evidence</span>
                        <span class="text-green-400 font-bold">Verified ✓</span>
                      </div>
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-300"><i class="fas fa-chart-pie mr-2 text-slate-500" aria-hidden="true"></i>Demographic Analysis</span>
                        <span class="text-green-400 font-bold">Automated ✓</span>
                      </div>
                      <div class="flex items-center justify-between text-sm">
                        <span class="text-slate-300"><i class="fas fa-history mr-2 text-slate-500" aria-hidden="true"></i>Audit Trails</span>
                        <span class="text-green-400 font-bold">Immutable ✓</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- CTA Row -->
            <div class="flex flex-wrap gap-4 justify-center">
              <button onclick="navigateTo('naac')" class="bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20">
                Deep Dive: NAAC Features <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
              </button>
              <button onclick="navigateTo('joinpilot')" class="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
                Schedule NAAC Demo
              </button>
            </div>

            <!-- Scroll to next section -->
            <div class="text-center mt-12">
              <button onclick="document.getElementById('evidence-verification').scrollIntoView({ behavior: 'smooth', block: 'center' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to next section">
                <i class="fas fa-chevron-down text-slate-600 hover:text-indigo-400 text-2xl" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <!-- EVIDENCE COLLECTION & VERIFICATION - 2ND HIGHLIGHT -->
          <div id="evidence-verification" class="mb-32 lg:mb-40 scroll-mt-24">
            <div class="bg-slate-800 rounded-[3rem] p-12 lg:p-16 border border-slate-700">
              <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div class="inline-block px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 font-bold text-sm mb-6 uppercase tracking-wider">
                    <i class="fas fa-shield-alt mr-2" aria-hidden="true"></i>Trust Layer
                  </div>
                  <h2 class="text-3xl lg:text-5xl font-black text-white mb-6 leading-tight">
                    Evidence Collection<br><span class="text-green-400">& Verification</span>
                  </h2>
                  <p class="text-lg text-slate-400 mb-8 leading-relaxed">
                    Every certificate, participation record, and achievement is verified through our 3-tier protocol. No more fake certificates. No more disputed records. Just audit-ready documentation.
                  </p>
                  <ul class="space-y-4 mb-8">
                    <li class="flex items-start gap-4">
                      <div class="w-8 h-8 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                        <i class="fas fa-check text-green-400 text-xs"></i>
                      </div>
                      <div>
                        <span class="font-bold text-white">Auto-Capture</span>
                        <p class="text-slate-400 text-sm">Photos, geolocation, timestamps collected automatically at events</p>
                      </div>
                    </li>
                    <li class="flex items-start gap-4">
                      <div class="w-8 h-8 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                        <i class="fas fa-check text-green-400 text-xs"></i>
                      </div>
                      <div>
                        <span class="font-bold text-white">Multi-Level Verification</span>
                        <p class="text-slate-400 text-sm">Student → Faculty → IQAC approval workflow</p>
                      </div>
                    </li>
                    <li class="flex items-start gap-4">
                      <div class="w-8 h-8 rounded-full bg-green-500/20 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                        <i class="fas fa-check text-green-400 text-xs"></i>
                      </div>
                      <div>
                        <span class="font-bold text-white">Tamper-Proof Records</span>
                        <p class="text-slate-400 text-sm">Immutable audit trail for every piece of evidence</p>
                      </div>
                    </li>
                  </ul>
                  <button onclick="navigateTo('security')" class="text-green-400 font-bold hover:underline">
                    Learn about our security protocols <i class="fas fa-arrow-right ml-2" aria-hidden="true"></i>
                  </button>
                </div>
                <div class="relative">
                  <div class="bg-gradient-to-br from-slate-700 to-slate-800 p-8 rounded-3xl border border-slate-600">
                    <div class="text-center mb-6">
                      <div class="text-green-400 text-sm font-bold uppercase tracking-widest mb-2">Verification Status</div>
                      <div class="text-5xl font-black text-white">100%</div>
                      <div class="text-slate-500 text-sm">Audit-Ready Records</div>
                    </div>
                    <div class="space-y-4">
                      <div class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center" aria-hidden="true">
                            <i class="fas fa-certificate text-green-400"></i>
                          </div>
                          <span class="text-white font-medium">Certificates Verified</span>
                        </div>
                        <span class="text-green-400 font-bold">2,450</span>
                      </div>
                      <div class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center" aria-hidden="true">
                            <i class="fas fa-calendar-check text-blue-400"></i>
                          </div>
                          <span class="text-white font-medium">Events Documented</span>
                        </div>
                        <span class="text-blue-400 font-bold">186</span>
                      </div>
                      <div class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                        <div class="flex items-center gap-3">
                          <div class="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center" aria-hidden="true">
                            <i class="fas fa-image text-purple-400"></i>
                          </div>
                          <span class="text-white font-medium">Photos Captured</span>
                        </div>
                        <span class="text-purple-400 font-bold">8,320</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Scroll to next section -->
            <div class="text-center mt-12">
              <button onclick="document.getElementById('intelligence-modules').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to next section">
                <i class="fas fa-chevron-down text-slate-600 hover:text-indigo-400 text-2xl" aria-hidden="true"></i>
              </button>
            </div>
          </div>

          <!-- Intelligence Modules -->
          <div id="intelligence-modules" class="grid lg:grid-cols-2 gap-12 mb-12 scroll-mt-24">
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
          <div id="whatsapp-section" class="bg-white/5 border border-white/10 rounded-[3rem] p-12 lg:p-20 flex flex-col lg:flex-row gap-12 items-center scroll-mt-24">
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
