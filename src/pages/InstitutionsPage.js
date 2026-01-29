/**
 * @fileoverview Institutions Page
 * Institution-focused landing with analytics, telecasting engine, and vibrancy score
 * 
 * Uses unified responsive layout with mobile-first approach
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

    /**
     * Get hero stats data
     */
    get heroStats() {
        return [
            { value: '90%', label: 'Reduction in manual data entry for NAAC.', labelMobile: 'Less Manual' },
            { value: '100%', label: 'Student participation audit-readiness.', labelMobile: 'Audit Ready' },
            { value: '180+', label: 'NAAC marks saved through automation.', labelMobile: 'Marks Saved' }
        ];
    }

    /**
     * Get ERP gap items
     */
    get erpGaps() {
        return [
            { icon: 'fa-chart-line', label: 'Engagement Tracking', color: 'text-yellow-500' },
            { icon: 'fa-award', label: 'NAAC Compliance', color: 'text-green-500' },
            { icon: 'fa-exclamation-triangle', label: 'Opportunity Gaps', color: 'text-amber-500' },
            { icon: 'fa-trash-alt', label: 'Resource Waste', color: 'text-red-500' },
            { icon: 'fa-brain', label: 'Student Intent', color: 'text-purple-500' },
            { icon: 'fa-eye', label: 'Outcome Visibility', color: 'text-blue-500' }
        ];
    }

    /**
     * Get workflow steps
     */
    get workflowSteps() {
        return [
            { num: 1, title: 'Discover', desc: 'AI curates relevant opportunities', descMobile: 'AI curates opportunities', replaces: 'WhatsApp forwards', replacesMobile: 'WhatsApp', icon: 'fa-search' },
            { num: 2, title: 'Distribute', desc: 'Smart push to right students', descMobile: 'Smart push to right students', replaces: 'Mass broadcasts', replacesMobile: 'broadcasts', icon: 'fa-share-alt' },
            { num: 3, title: 'Capture', desc: 'Auto-log with geo + timestamp', descMobile: 'Geo + timestamp evidence', replaces: 'Excel & paper trails', replacesMobile: 'Excel', icon: 'fa-camera' },
            { num: 4, title: 'Verify', desc: '3-tier approval workflow', descMobile: '3-tier approval workflow', replaces: 'Manual cert checks', replacesMobile: 'manual', icon: 'fa-shield-alt' },
            { num: 5, title: 'NAAC Ready', desc: 'Auto-mapped to criteria', descMobile: 'Auto-mapped to criteria', replaces: '6mo compilation', replacesMobile: '6 months', highlighted: true, icon: 'fa-award' }
        ];
    }

    /**
     * Get NAAC criteria coverage data
     */
    get naacCriteria() {
        return [
            { id: 5, title: 'Student Support & Progression', percent: 80, color: 'green', label: 'CORE STRENGTH' },
            { id: 3, title: 'Research & Extension', percent: 70, color: 'blue' },
            { id: 7, title: 'Values & Best Practices', percent: 60, color: 'purple' }
        ];
    }

    /**
     * Get evidence gap problems
     */
    get evidenceGaps() {
        return [
            { icon: 'fa-file-alt', title: 'Documentation', desc: 'Proving activities happened' },
            { icon: 'fa-sync-alt', title: 'Continuity', desc: 'Sustained, not one-off' },
            { icon: 'fa-users', title: 'Coverage', desc: 'All student segments' },
            { icon: 'fa-chart-line', title: 'Outcomes', desc: 'Linking to results' }
        ];
    }

    /**
     * Get auto-generated evidence items
     */
    get autoEvidence() {
        return [
            { icon: 'fa-hashtag', label: 'Participation Records', status: 'Timestamped ✓' },
            { icon: 'fa-map-marker-alt', label: 'Geo-tagged Evidence', status: 'Verified ✓' },
            { icon: 'fa-chart-pie', label: 'Demographic Analysis', status: 'Automated ✓' },
            { icon: 'fa-history', label: 'Audit Trails', status: 'Immutable ✓' }
        ];
    }

    /**
     * Get verification stats
     */
    get verificationStats() {
        return [
            { icon: 'fa-certificate', label: 'Certificates Verified', value: '2,450', color: 'green' },
            { icon: 'fa-calendar-check', label: 'Events Documented', value: '186', color: 'blue' },
            { icon: 'fa-image', label: 'Photos Captured', value: '8,320', color: 'purple' }
        ];
    }

    render() {
        const stats = this.heroStats;
        const gaps = this.erpGaps;
        const steps = this.workflowSteps;
        const criteria = this.naacCriteria;
        const evidenceGaps = this.evidenceGaps;
        const autoEvidence = this.autoEvidence;
        const verificationStats = this.verificationStats;

        const content = `
      <div class="pt-24 md:pt-32 pb-12 md:pb-20">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          
          <!-- Hero Section -->
          <div class="mb-8 md:mb-20">
            <!-- Mobile Hero -->
            <div class="md:hidden mobile-fade-in mobile-hero-glow">
              <span class="mobile-feature-pill bg-indigo-500/20 text-indigo-400 mb-4 mobile-stagger-1">
                <i class="fas fa-building"></i> Institutional OS
              </span>
              <h1 class="mobile-display-title text-white mb-3 mobile-stagger-2">
                Intelligence <span class="text-indigo-400">Beyond ERP</span>
              </h1>
              <p class="text-slate-400 text-sm leading-relaxed mb-5 mobile-stagger-3">
                Turn campus activities into verified, NAAC-ready documentation.
              </p>
              
              <!-- Quick Stats -->
              <div class="grid grid-cols-3 gap-2 mb-4">
                ${stats.map(s => `
                  <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-3 text-center border border-slate-700/50">
                    <div class="text-indigo-400 text-xl font-black">${s.value}</div>
                    <div class="text-slate-500 text-[10px] uppercase tracking-wider">${s.labelMobile}</div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <!-- Desktop Hero -->
            <div class="hidden md:block">
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
                ${stats.map(s => `
                  <div class="p-8 rounded-[2rem] bg-white/5 border border-white/10">
                    <h3 class="text-indigo-400 text-3xl font-black mb-2">${s.value}</h3>
                    <p class="text-slate-300 font-bold">${s.label}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Desktop What's Missing -->
              <div class="mt-8 text-center">
                <p class="text-slate-500 text-sm uppercase tracking-widest mb-6">What's missing from your ERP?</p>
                <div class="flex flex-wrap justify-center gap-3 lg:gap-4 mb-8">
                  ${gaps.map(g => `
                    <span class="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium">
                      <i class="fas ${g.icon} ${g.color} mr-2" aria-hidden="true"></i>${g.label}
                    </span>
                  `).join('')}
                </div>
                <p class="text-slate-400 max-w-2xl mx-auto mb-10">
                  This is the <strong class="text-white">invisible data</strong> that defines institutional quality—and it's exactly what NAAC peers want to see documented.
                </p>
                
                <button onclick="document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to next section">
                  <i class="fas fa-chevron-down text-slate-600 hover:text-indigo-400 text-2xl" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- What's Missing Section (Mobile) -->
          <div class="md:hidden mb-4">
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
              <p class="text-slate-500 text-xs uppercase tracking-widest mb-3 text-center">What's missing from your ERP?</p>
              <div class="flex flex-col items-center gap-2">
                <div class="flex justify-center gap-2">
                  <span class="px-3 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
                    <i class="fas fa-chart-line text-yellow-400 mr-1"></i>Engagement Tracking
                  </span>
                </div>
                <div class="flex justify-center gap-2">
                  <span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                    <i class="fas fa-award text-green-400 mr-1"></i>NAAC Compliance
                  </span>
                  <span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                    <i class="fas fa-exclamation-triangle text-amber-400 mr-1"></i>Opportunity Gaps
                  </span>
                </div>
                <div class="flex justify-center gap-2 flex-wrap">
                  <span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                    <i class="fas fa-trash-alt text-red-400 mr-1"></i>Resource Waste
                  </span>
                  <span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                    <i class="fas fa-brain text-purple-400 mr-1"></i>Student Intent
                  </span>
                  <span class="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium">
                    <i class="fas fa-eye text-blue-400 mr-1"></i>Outcome Visibility
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- HOW IT WORKS -->
          <div id="how-it-works" class="mb-8 md:mb-16 scroll-mt-24">
            <!-- Desktop Header -->
            <div class="hidden md:block text-center mb-10">
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
            
            <!-- Mobile Header -->
            <div class="md:hidden mb-4">
              <h2 class="text-lg font-black text-white mb-3 flex items-center gap-2">
                <i class="fas fa-cogs text-indigo-400 text-sm"></i> How It Works
              </h2>
            </div>

            <!-- Flow Steps Container -->
            <div class="bg-white/5 backdrop-blur-sm rounded-[2rem] p-4 md:p-8 lg:p-10 border border-white/10">
              <!-- Desktop: Horizontal Flow with Arrows -->
              <div class="hidden lg:flex items-stretch gap-2">
                ${steps.map((step, i) => `
                  ${step.highlighted ? `
                    <div class="flex-1 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-5 border border-indigo-500">
                      <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 bg-white text-indigo-600 rounded-xl flex items-center justify-center font-black">${step.num}</div>
                        <h3 class="text-white font-black">${step.title}</h3>
                      </div>
                      <p class="text-indigo-100 text-sm mb-3">${step.desc}</p>
                      <div class="flex items-center gap-2 text-xs">
                        <span class="px-2 py-1 bg-white/20 text-white rounded-md font-medium">Replaces</span>
                        <span class="text-indigo-200">${step.replaces}</span>
                      </div>
                    </div>
                  ` : `
                    <div class="flex-1 bg-slate-800/50 rounded-2xl p-5 border border-slate-700 hover:border-indigo-500/50 transition-all group">
                      <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center font-black">${step.num}</div>
                        <h3 class="text-white font-black">${step.title}</h3>
                      </div>
                      <p class="text-slate-400 text-sm mb-3">${step.desc}</p>
                      <div class="flex items-center gap-2 text-xs">
                        <span class="px-2 py-1 bg-red-500/10 text-red-400 rounded-md font-medium">Replaces</span>
                        <span class="text-slate-500">${step.replaces}</span>
                      </div>
                    </div>
                  `}
                  ${i < steps.length - 1 ? '<div class="flex items-center text-indigo-500" aria-hidden="true"><i class="fas fa-chevron-right"></i></div>' : ''}
                `).join('')}
              </div>

              <!-- Mobile: Vertical Stack -->
              <div class="lg:hidden space-y-2">
                ${steps.map(step => `
                  ${step.highlighted ? `
                    <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl p-3 flex items-center gap-3 shadow-lg shadow-indigo-500/20">
                      <div class="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <i class="fas ${step.icon} text-indigo-600 text-sm"></i>
                      </div>
                      <div class="flex-1">
                        <div class="text-white font-bold text-sm">${step.title}</div>
                        <div class="text-indigo-200 text-xs">${step.descMobile}</div>
                      </div>
                      <i class="fas fa-check-circle text-white/80 text-sm"></i>
                    </div>
                  ` : `
                    <div class="bg-slate-800/60 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-slate-700/50">
                      <div class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                        <i class="fas ${step.icon} text-white text-sm"></i>
                      </div>
                      <div class="flex-1">
                        <div class="text-white font-bold text-sm">${step.title}</div>
                        <div class="text-slate-400 text-xs">${step.descMobile}</div>
                      </div>
                      <i class="fas fa-chevron-right text-slate-600 text-xs"></i>
                    </div>
                  `}
                `).join('')}
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

          <!-- NAAC Lead-in (Desktop only) -->
          <div class="hidden md:block text-center mb-20">
            <p class="text-xl lg:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-10">
              ScholarShare captures every student achievement, verifies it through a 3-tier protocol, and auto-maps it to NAAC Criteria 3, 5, and 7. No more last-minute scrambles. No more fake certificates. Just <strong class="text-white">continuous, audit-ready documentation</strong> that proves your institution's vibrancy in real-time.
            </p>
            <button onclick="document.getElementById('naac-mapping').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to NAAC section">
              <i class="fas fa-chevron-down text-slate-600 hover:text-indigo-400 text-2xl" aria-hidden="true"></i>
            </button>
          </div>

          <!-- NAAC Impact Section -->
          <div id="naac-mapping" class="mb-8 md:mb-32 lg:mb-40 scroll-mt-24">
            <!-- Desktop NAAC Dashboard -->
            <div class="hidden md:block">
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
                  ${criteria.map(c => `
                    <div class="p-5 rounded-2xl bg-gradient-to-br from-${c.color}-50 to-${c.color === 'green' ? 'emerald' : c.color}-50 border-2 border-${c.color}-200 relative overflow-hidden">
                      ${c.label ? `<div class="absolute top-2 right-2 px-2 py-0.5 bg-${c.color}-600 text-white text-xs font-bold rounded-full">${c.label}</div>` : ''}
                      <div class="text-sm text-${c.color}-700 font-bold mb-1">Criterion ${c.id}</div>
                      <div class="text-lg font-black text-slate-900 mb-2">${c.title}</div>
                      <div class="flex items-center gap-3 mb-3">
                        <div class="flex-1 h-3 bg-${c.color}-200 rounded-full overflow-hidden">
                          <div class="h-full bg-${c.color}-600" style="width: ${c.percent}%"></div>
                        </div>
                        <span class="text-${c.color}-700 font-black">${c.percent}%</span>
                      </div>
                    </div>
                  `).join('')}
                </div>

                <!-- The Evidence Gap Section -->
                <div class="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                  <div class="grid lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 class="text-2xl font-black mb-4">The "Evidence Gap" We Fill</h3>
                      <p class="text-slate-300 mb-6">Most colleges struggle with these 4 critical problems during NAAC preparation. ScholarShare solves all four.</p>
                      <div class="grid grid-cols-2 gap-4">
                        ${evidenceGaps.map(g => `
                          <div class="flex items-start gap-3">
                            <div class="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                              <i class="fas ${g.icon} text-indigo-400 text-sm"></i>
                            </div>
                            <div>
                              <div class="font-bold text-sm">${g.title}</div>
                              <div class="text-xs text-slate-400">${g.desc}</div>
                            </div>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                    <div class="bg-white/5 rounded-xl p-6 border border-white/10">
                      <div class="text-sm text-indigo-400 font-bold uppercase tracking-wider mb-4">Auto-Generated Evidence</div>
                      <div class="space-y-3">
                        ${autoEvidence.map(e => `
                          <div class="flex items-center justify-between text-sm">
                            <span class="text-slate-300"><i class="fas ${e.icon} mr-2 text-slate-500" aria-hidden="true"></i>${e.label}</span>
                            <span class="text-green-400 font-bold">${e.status}</span>
                          </div>
                        `).join('')}
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
            
            <!-- Mobile NAAC Impact -->
            <div class="md:hidden mb-4">
              <div class="bg-white rounded-2xl p-5">
                <div class="flex items-center gap-2 mb-4">
                  <i class="fas fa-award text-indigo-600"></i>
                  <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">NAAC Impact</span>
                </div>
                
                <div class="grid grid-cols-2 gap-2 mb-4">
                  <div class="text-center p-3 bg-indigo-50 rounded-xl">
                    <div class="text-2xl font-black text-indigo-600">180+</div>
                    <div class="text-xs text-slate-500">Marks Impacted</div>
                  </div>
                  <div class="text-center p-3 bg-slate-50 rounded-xl">
                    <div class="text-2xl font-black text-slate-900">45%</div>
                    <div class="text-xs text-slate-500">Automation</div>
                  </div>
                </div>
                
                <!-- Criteria Progress -->
                <div class="space-y-3">
                  <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                      <span>Criterion 5 - Student Support</span>
                      <span class="text-green-600">80%</span>
                    </div>
                    <div class="mobile-progress-bar">
                      <div class="mobile-progress-fill bg-green-500" style="width: 80%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                      <span>Criterion 3 - Research</span>
                      <span class="text-blue-600">70%</span>
                    </div>
                    <div class="mobile-progress-bar">
                      <div class="mobile-progress-fill bg-blue-500" style="width: 70%"></div>
                    </div>
                  </div>
                  <div>
                    <div class="flex justify-between text-xs font-bold mb-1">
                      <span>Criterion 7 - Values</span>
                      <span class="text-purple-600">60%</span>
                    </div>
                    <div class="mobile-progress-bar">
                      <div class="mobile-progress-fill bg-purple-500" style="width: 60%"></div>
                    </div>
                  </div>
                </div>
                
                <button onclick="navigateTo('naac')" class="mobile-btn-primary mt-4 mobile-touch-active">
                  Explore NAAC Features <i class="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>

          <!-- EVIDENCE VERIFICATION SECTION -->
          <div id="evidence-verification" class="mb-8 md:mb-32 lg:mb-40 scroll-mt-24">
            <!-- Desktop -->
            <div class="hidden md:block bg-slate-800 rounded-[3rem] p-12 lg:p-16 border border-slate-700">
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
                      ${verificationStats.map(s => `
                        <div class="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl">
                          <div class="flex items-center gap-3">
                            <div class="w-10 h-10 bg-${s.color}-500/20 rounded-lg flex items-center justify-center" aria-hidden="true">
                              <i class="fas ${s.icon} text-${s.color}-400"></i>
                            </div>
                            <span class="text-white font-medium">${s.label}</span>
                          </div>
                          <span class="text-${s.color}-400 font-bold">${s.value}</span>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Mobile Evidence Verification -->
            <div class="md:hidden mb-4">
              <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
                <div class="flex items-center gap-2 mb-2">
                  <div class="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <i class="fas fa-shield-alt text-white text-xs"></i>
                  </div>
                  <span class="text-xs font-bold text-green-400 uppercase tracking-wider">Trust Layer</span>
                </div>
                <h3 class="text-white font-bold text-sm mb-1">Evidence Verification</h3>
                <p class="text-slate-400 text-xs mb-3">Every certificate verified through 3-tier protocol.</p>
                
                <div class="grid grid-cols-2 gap-2">
                  <div class="bg-slate-900/50 rounded-lg p-2 text-center border border-slate-700/50">
                    <div class="text-green-400 font-black text-lg">2,450</div>
                    <div class="text-slate-500 text-[10px] uppercase">Certs Verified</div>
                  </div>
                  <div class="bg-slate-900/50 rounded-lg p-2 text-center border border-slate-700/50">
                    <div class="text-blue-400 font-black text-lg">186</div>
                    <div class="text-slate-500 text-[10px] uppercase">Events Logged</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Intelligence Modules (Desktop) -->
          <div id="intelligence-modules" class="hidden md:grid lg:grid-cols-2 gap-12 mb-12 scroll-mt-24">
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

          <!-- Shadow Infrastructure Section (Desktop) -->
          <div id="whatsapp-section" class="hidden md:flex bg-white/5 border border-white/10 rounded-[3rem] p-12 lg:p-20 flex-col lg:flex-row gap-12 items-center scroll-mt-24">
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
          
          <!-- Mobile Vibrancy Score -->
          <div class="md:hidden mb-4">
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-xl p-4 text-center border border-indigo-500/30">
              <div class="text-indigo-400 text-base font-bold">Vibrancy <span class="text-white">Score</span></div>
              <div class="text-4xl font-black text-white my-1">92</div>
              <p class="text-slate-500 text-[10px] uppercase tracking-widest">Real-Time Index</p>
            </div>
          </div>

          <!-- CTA Button (Mobile) -->
          <div class="md:hidden pb-6 border-b border-slate-800">
            <button onclick="navigateTo('joinpilot')" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
              <span>Schedule Demo</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
