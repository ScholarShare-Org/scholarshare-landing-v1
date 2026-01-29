/**
 * @fileoverview NAAC Readiness Page
 * Comprehensive NAAC compliance features with criterion breakdowns
 * 
 * Uses unified responsive layout with mobile-first approach
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
   * Get verification tiers data
   */
  get verificationTiers() {
    return [
      { tier: 1, title: 'Self-Claimed', desc: 'Student logs an activity. Useful for informal vibrancy metrics.', descMobile: 'Student logs activity', bgClass: 'bg-slate-300', textClass: 'text-slate-700' },
      { tier: 2, title: 'Peer-Verified', desc: 'Verified by a club leader present at the event. High engagement trust factor.', descMobile: 'Club leader confirms', bgClass: 'bg-slate-400', textClass: 'text-white' },
      { tier: 3, title: 'Host-Verified', desc: 'Only Tier 3 data flows to ABC and NAAC reports.', descMobile: 'Only this flows to reports', bgClass: 'bg-gradient-to-r from-indigo-600 to-purple-600', textClass: 'text-white', highlighted: true }
    ];
  }

  /**
   * Get core criteria data
   */
  get coreCriteria() {
    return [
      {
        id: 5,
        title: 'Student Support & Progression',
        shortTitle: 'Student Support',
        automation: '80%+',
        automationValue: 80,
        color: 'green',
        badge: 'Core Strength',
        metrics: 'Metrics 5.1-5.4: Tracking scholarships, internships, placements, and all co-curricular & extracurricular participation.',
        gap: 'Tracking internal events is difficult; tracking when a student wins a debate at a <em>rival</em> college is impossible without a unified student reporting mechanism.',
        gapMobile: 'Tracking when students win at <em>rival</em> colleges is impossible without a unified reporting mechanism.',
        gapNote: '5.3 (Student Participation) alone is worth <strong>50+ marks</strong>—and it\'s the hardest to document.',
        solutions: [
          'Captures the <strong>External Footprint</strong>—wins at other colleges, external programs',
          'Timestamped participation records with verification',
          'Department-wise & demographic distribution analytics',
          'Internship, placement & scholarship tracking'
        ],
        solutionsMobile: ['External footprint capture', 'Timestamped verification', 'Demographic analytics']
      },
      {
        id: 3,
        title: 'Research, Innovations & Extension',
        shortTitle: 'Research & Extension',
        automation: '70%',
        automationValue: 70,
        color: 'blue',
        metrics: 'Metrics 3.1-3.5: Tracking research grants, hackathons, innovation challenges, extension activities (NSS/NCC), and collaborations.',
        gap: 'Most institutions rely on manual collection of paper certificates at year-end, leading to 40% data loss and accidental fabrication risks.',
        gapMobile: 'Manual year-end certificate collection leads to 40% data loss.',
        gapNote: 'NAAC now imposes penalties for data fudging. Manual systems are high-risk.',
        solutions: [
          'Geotagged activity logs for proof of outreach',
          'Automatic AQAR report generation',
          'NSS/NCC/Social Service participation tracking',
          'Direct APAAR/ABC credit mapping'
        ],
        solutionsMobile: ['Geotagged activity logs', 'Auto AQAR generation', 'NSS/NCC tracking']
      },
      {
        id: 7,
        title: 'Institutional Values & Best Practices',
        shortTitle: 'Values & Practices',
        automation: '60%',
        automationValue: 60,
        color: 'purple',
        metrics: 'Metrics 7.1-7.3: Community service, sustainability, ethical practices, and institutional distinctiveness documentation.',
        gap: 'Proving sustained community engagement and documenting "best practices" with verifiable data is challenging without continuous tracking.',
        gapMobile: 'Proving sustained engagement & best practices without continuous tracking.',
        solutions: [
          'Community service & sustainability initiative tracking',
          'ScholarShare itself serves as a "Best Practice" in student engagement',
          'Unique engagement pattern analytics for distinctiveness'
        ],
        solutionsMobile: ['Community service tracking', 'Platform as "Best Practice"', 'Engagement analytics']
      }
    ];
  }

  /**
   * Get other criteria support data
   */
  get otherCriteria() {
    return [
      { id: 6, name: 'Governance & Quality Assurance', percent: '50%', opacity: '' },
      { id: 1, name: 'Curricular Aspects', percent: '40%', opacity: '' },
      { id: 2, name: 'Teaching-Learning', percent: '30%', opacity: '/50' },
      { id: 4, name: 'Infrastructure', percent: '20%', opacity: '/30' }
    ];
  }

  render() {
    const tiers = this.verificationTiers;
    const criteria = this.coreCriteria;
    const otherCriteria = this.otherCriteria;

    const content = `
      <div class="pt-24 md:pt-32 pb-12 md:pb-20">
        <div class="max-w-7xl mx-auto px-4 md:px-6">
          
          <!-- Header -->
          <div class="text-center mb-8 md:mb-16">
            <!-- Mobile Header -->
            <div class="md:hidden">
              <span class="mobile-feature-pill bg-indigo-100 text-indigo-600 mb-4">
                <i class="fas fa-award"></i> NAAC Readiness
              </span>
              <h1 class="mobile-display-title text-slate-900 mb-3">
                Compliance <span class="text-indigo-600">Generator</span>
              </h1>
              <p class="text-slate-600 text-sm leading-relaxed mb-4">
                Protection from the "Transparency Paradox"—ensuring your grade reflects real activity.
              </p>
              
              <!-- Key Stats -->
              <div class="grid grid-cols-3 gap-2 mb-4">
                <div class="bg-white rounded-xl p-3 text-center border border-slate-100 shadow-sm">
                  <div class="text-indigo-600 text-xl font-black">30%</div>
                  <div class="text-slate-500 text-[10px] uppercase tracking-wider whitespace-nowrap">Automated</div>
                </div>
                <div class="bg-white rounded-xl p-3 text-center border border-slate-100 shadow-sm">
                  <div class="text-indigo-600 text-xl font-black">180+</div>
                  <div class="text-slate-500 text-[10px] uppercase tracking-wider whitespace-nowrap">Marks</div>
                </div>
                <div class="bg-white rounded-xl p-3 text-center border border-slate-100 shadow-sm">
                  <div class="text-indigo-600 text-xl font-black">100%</div>
                  <div class="text-slate-500 text-[10px] uppercase tracking-wider whitespace-nowrap">Audit Trail</div>
                </div>
              </div>
            </div>
            
            <!-- Desktop Header -->
            <div class="hidden md:block">
              <span class="text-indigo-600 font-bold uppercase tracking-widest text-sm">Strategic Accreditation</span>
              <h1 class="text-5xl font-black mt-4">Compliance Generator & Safety Net</h1>
              <p class="text-slate-600 mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
                The binary accreditation system has no room for data fudging. ScholarShare protects your institution from the "Transparency Paradox"—ensuring your grade reflects real activity while protecting you from penalties.
              </p>
            </div>
          </div>

          <!-- Three-Tier Protocol -->
          <!-- Desktop -->
          <div class="hidden md:grid lg:grid-cols-3 gap-8 mb-20 cursor-pointer" onclick="navigateTo('security')">
            ${tiers.map(tier => `
              <article class="${tier.highlighted ? 'bg-indigo-600 text-white shadow-xl' : 'bg-white border border-slate-100 shadow-sm'} p-8 rounded-3xl relative overflow-hidden">
                <div class="text-6xl font-black ${tier.highlighted ? 'text-white/10' : 'text-slate-100'} absolute top-2 right-4 select-none" aria-hidden="true">${tier.tier}</div>
                <h3 class="text-xl font-bold mb-4 relative z-10">${tier.title}</h3>
                <p class="${tier.highlighted ? 'text-white/80' : 'text-slate-500'} relative z-10">${tier.highlighted ? `<strong>${tier.desc}</strong>` : tier.desc}</p>
              </article>
            `).join('')}
          </div>
          
          <!-- Mobile Verification Protocol -->
          <div class="md:hidden mb-4">
            <div class="bg-white rounded-xl p-4 border border-slate-100 shadow-sm" onclick="navigateTo('security')">
              <div class="flex items-center gap-2 mb-3">
                <div class="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <i class="fas fa-shield-alt text-white text-xs"></i>
                </div>
                <span class="text-xs font-bold text-indigo-600 uppercase tracking-wider">Verification Protocol</span>
              </div>
              <div class="space-y-2">
                ${tiers.map(tier => `
                  <div class="${tier.highlighted ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-slate-50'} rounded-lg p-2 flex items-center gap-3">
                    <span class="w-7 h-7 ${tier.highlighted ? 'bg-white text-indigo-600' : tier.bgClass + ' ' + tier.textClass} rounded-full flex items-center justify-center text-xs font-bold">${tier.tier}</span>
                    <div class="flex-1">
                      <div class="${tier.highlighted ? 'text-white font-bold' : 'text-slate-900 font-medium'} text-sm">${tier.title}${tier.highlighted ? ' → NAAC' : ''}</div>
                      <div class="${tier.highlighted ? 'text-indigo-200' : 'text-slate-500'} text-[10px]">${tier.descMobile}</div>
                    </div>
                    ${tier.highlighted ? '<i class="fas fa-check-circle text-white/80 text-sm"></i>' : ''}
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Criteria Breakdown -->
          <div class="space-y-6 md:space-y-12">
            ${criteria.map(c => `
              <!-- Criterion ${c.id} -->
              <!-- Desktop -->
              <article class="hidden md:block bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
                <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div class="max-w-2xl">
                    ${c.badge ? `<div class="inline-block px-3 py-1 bg-indigo-600 rounded-full text-xs font-bold uppercase mb-3">${c.badge}</div>` : ''}
                    <h2 class="text-3xl font-black mb-4">Criterion ${c.id}: ${c.title}</h2>
                    <p class="text-slate-400">${c.metrics}</p>
                  </div>
                  <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
                    <div class="text-4xl font-black">${c.automation}</div>
                    <div class="text-[10px] uppercase font-bold tracking-widest">Automation Rate</div>
                  </div>
                </div>
                <div class="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <i class="fas fa-${c.id === 5 ? 'eye-slash' : c.id === 3 ? 'exclamation-triangle' : 'question-circle'} text-amber-500" aria-hidden="true"></i> The Current Gap
                    </h4>
                    <p class="text-slate-500 mb-6">${c.gap}</p>
                    ${c.gapNote ? `<div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">${c.gapNote}</div>` : ''}
                  </div>
                  <div>
                    <h4 class="font-bold text-indigo-600 mb-4 flex items-center gap-2">
                      <i class="fas fa-check-circle" aria-hidden="true"></i> ScholarShare Solution
                    </h4>
                    <ul class="space-y-3 text-slate-500 text-sm">
                      ${c.solutions.map(s => `<li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-1" aria-hidden="true"></i>${s}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </article>
              
              <!-- Mobile Criterion ${c.id} -->
              <div class="md:hidden bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
                <div class="${c.badge ? 'bg-gradient-to-r from-indigo-600 to-purple-600' : 'bg-slate-900'} p-3">
                  <div class="flex items-center justify-between">
                    <div>
                      ${c.badge ? `<span class="text-[10px] font-bold text-indigo-200 uppercase">${c.badge}</span>` : ''}
                      <h3 class="text-white font-bold text-sm">C${c.id}: ${c.shortTitle}</h3>
                    </div>
                    <span class="${c.badge ? 'bg-white/20' : 'bg-indigo-600'} text-white text-xs font-bold px-2 py-1 rounded-full">${c.automation} Auto</span>
                  </div>
                </div>
                <div class="p-4">
                  <!-- Gap -->
                  <div class="mb-3">
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fas fa-${c.id === 5 ? 'eye-slash' : c.id === 3 ? 'exclamation-triangle' : 'question-circle'} text-amber-500 text-xs"></i>
                      <span class="text-xs font-bold text-amber-600 uppercase">The Gap</span>
                    </div>
                    <p class="text-slate-600 text-xs leading-relaxed">${c.gapMobile}</p>
                    ${c.gapNote && c.id === 5 ? `<div class="bg-amber-50 rounded-lg p-2 mt-2 text-xs text-amber-800 font-medium">5.3 (Participation) = <strong>50+ marks</strong> — hardest to document</div>` : ''}
                  </div>
                  <!-- Solution -->
                  <div class="border-t border-slate-100 pt-3">
                    <div class="flex items-center gap-2 mb-2">
                      <i class="fas fa-check-circle text-indigo-500 text-xs"></i>
                      <span class="text-xs font-bold text-indigo-600 uppercase">ScholarShare Solves</span>
                    </div>
                    <ul class="space-y-1.5 text-slate-600 text-xs">
                      ${c.solutionsMobile.map(s => `<li class="flex gap-2"><i class="fas fa-check text-indigo-500 mt-0.5 text-[10px]"></i>${s}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Other Criteria Summary -->
          <!-- Desktop -->
          <div class="hidden md:block mt-16 bg-white rounded-[2rem] p-8 lg:p-12 border border-slate-100 shadow-lg">
            <h2 class="text-2xl font-black mb-6 text-center">Other Criteria Support</h2>
            <div class="grid md:grid-cols-4 gap-6 text-center">
              ${otherCriteria.map(c => `
                <div>
                  <div class="text-2xl font-black text-slate-${c.opacity ? '300' : '400'}">${c.percent}</div>
                  <div class="text-sm font-bold text-slate-600">Criterion ${c.id}</div>
                  <div class="text-xs text-slate-400">${c.name}</div>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Mobile Other Criteria (in dark panel) -->
          <div class="md:hidden mt-4">
            <div class="bg-slate-900 rounded-[2rem] p-5 shadow-xl">
              <h2 class="text-lg font-black text-white mb-3 flex items-center gap-2">
                <i class="fas fa-chart-bar text-indigo-400 text-sm"></i> Criteria Automation
              </h2>
              
              <!-- Featured Criterion 5 -->
              <div class="bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-xl p-3 border border-green-500/30 mb-3">
                <div class="mb-2">
                  <span class="text-[10px] font-bold text-green-400 uppercase">Core Strength</span>
                  <h3 class="text-white font-bold text-sm">C5: Student Support</h3>
                </div>
                <div class="flex items-center gap-2 mb-2">
                  <div class="flex-1 h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style="width: 80%"></div>
                  </div>
                  <span class="text-green-400 text-xs font-bold whitespace-nowrap">80%+</span>
                </div>
                <p class="text-slate-400 text-[10px] leading-relaxed">Scholarships, internships, placements, co-curricular tracking</p>
              </div>
              
              <!-- C3 and C7 -->
              <div class="grid grid-cols-2 gap-2 mb-3">
                <div class="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-3 border border-blue-500/30">
                  <h3 class="text-white font-bold text-xs mb-2">C3: Research</h3>
                  <div class="flex items-center gap-2 mb-1">
                    <div class="flex-1 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style="width: 70%"></div>
                    </div>
                    <span class="text-blue-400 text-xs font-bold">70%</span>
                  </div>
                  <p class="text-slate-400 text-[10px]">Hackathons, NSS/NCC</p>
                </div>
                <div class="bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-xl p-3 border border-purple-500/30">
                  <h3 class="text-white font-bold text-xs mb-2">C7: Values</h3>
                  <div class="flex items-center gap-2 mb-1">
                    <div class="flex-1 h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                      <div class="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style="width: 60%"></div>
                    </div>
                    <span class="text-purple-400 text-xs font-bold">60%</span>
                  </div>
                  <p class="text-slate-400 text-[10px]">Community, ethics</p>
                </div>
              </div>
              
              <!-- Other criteria -->
              <div class="bg-slate-800/50 rounded-xl p-3 border border-slate-700/50">
                <h3 class="text-slate-400 text-xs font-bold mb-2 uppercase">Other Criteria</h3>
                <div class="grid grid-cols-4 gap-2 text-center">
                  ${otherCriteria.map(c => `
                    <div>
                      <div class="text-indigo-400${c.opacity} text-sm font-black">${c.percent}</div>
                      <div class="text-slate-500 text-[10px]">C${c.id}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Problem Warning (Mobile) -->
          <div class="md:hidden mt-4">
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <div class="flex items-center gap-2 mb-2">
                <i class="fas fa-exclamation-triangle text-amber-500"></i>
                <span class="text-xs font-bold text-amber-600 uppercase">The Problem</span>
              </div>
              <p class="text-slate-700 text-sm mb-3">Manual collection leads to <strong class="text-slate-900">40% data loss</strong> and accidental fabrication risks.</p>
              <div class="bg-white rounded-lg p-2 text-center border border-amber-200">
                <span class="text-red-600 text-xs font-bold">⚠️ NAAC now imposes penalties for data fudging</span>
              </div>
            </div>
          </div>

          <!-- Bottom Line CTA -->
          <!-- Desktop -->
          <div class="hidden md:block mt-16 bg-slate-900 text-white rounded-[3rem] p-8 lg:p-12 text-center">
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
          
          <!-- Mobile Bottom Line -->
          <div class="md:hidden mt-4">
            <div class="bg-slate-900 rounded-xl p-5 text-center">
              <div class="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Bottom Line</div>
              <div class="text-4xl font-black text-white mb-1">30%</div>
              <p class="text-indigo-400 text-sm font-medium">NAAC evidence automated directly</p>
            </div>
          </div>

          <!-- CTA Button (Mobile) -->
          <div class="md:hidden mt-4 pb-6 border-b border-slate-200">
            <button onclick="navigateTo('joinpilot')" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
              <span>Schedule NAAC Demo</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
