/**
 * @fileoverview Section Components
 * Reusable section layouts for page construction
 */

import { Component } from './Component.js';

/**
 * Hero Section Component
 */
export class HeroSection extends Component {
    render() {
        return `
      <header class="relative pt-32 pb-20 overflow-hidden" role="banner">
        <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div class="z-10 text-center md:text-left">
            <div class="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm mb-6 uppercase tracking-wider">
              Post-NEP 2025 Ready
            </div>
            <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Where <span class="gradient-text">Ambition</span> Meets <span class="text-slate-900 underline decoration-indigo-500 underline-offset-8">Accreditation</span>.
            </h1>
            <p class="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              The holistic opportunity engine for students and the essential intelligence middleware for institutions. Verified, credit-mapped, and future-proof.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onclick="navigateTo('students')" class="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all text-lg">
                Get Your Opportunities
              </button>
              <button onclick="navigateTo('institutions')" class="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all text-lg">
                Request Institutional Demo
              </button>
            </div>
            
            <!-- Stats -->
            <div class="mt-12 flex items-center gap-8 justify-center md:justify-start">
              <div>
                <div class="text-3xl font-bold">10+</div>
                <div class="text-sm text-slate-500">Pilot Colleges</div>
              </div>
              <div class="w-[1px] h-10 bg-slate-200" aria-hidden="true"></div>
              <div>
                <div class="text-3xl font-bold">200+</div>
                <div class="text-sm text-slate-500">Weekly Ops</div>
              </div>
              <div class="w-[1px] h-10 bg-slate-200" aria-hidden="true"></div>
              <div>
                <div class="text-3xl font-bold">₹0.60</div>
                <div class="text-sm text-slate-500">Starting Point</div>
              </div>
            </div>
          </div>

          <!-- Floating Feature Cards -->
          <div class="relative">
            <div class="absolute -top-10 -right-10 w-72 h-72 bg-indigo-200 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
            <div class="grid grid-cols-2 gap-4 relative">
              <div class="bg-white p-6 rounded-3xl shadow-xl floating">
                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4 text-xl" aria-hidden="true">
                  <i class="fas fa-check-circle"></i>
                </div>
                <h4 class="font-bold text-slate-800">Verified Gigs</h4>
                <p class="text-xs text-slate-500 mt-2">Mapped to ABC/APAAR credits</p>
              </div>
              <div class="bg-slate-900 p-6 rounded-3xl shadow-xl mt-8 text-white floating" style="animation-delay: 1s;">
                <div class="w-12 h-12 bg-white/10 text-white rounded-xl flex items-center justify-center mb-4 text-xl" aria-hidden="true">
                  <i class="fas fa-chart-line"></i>
                </div>
                <h4 class="font-bold">NAAC IQAC</h4>
                <p class="text-xs text-white/60 mt-2">Real-time Criterion 5 & 7 Reports</p>
              </div>
              <div class="bg-indigo-600 p-6 rounded-3xl shadow-xl text-white floating" style="animation-delay: 0.5s;">
                <div class="w-12 h-12 bg-white/20 text-white rounded-xl flex items-center justify-center mb-4 text-xl" aria-hidden="true">
                  <i class="fas fa-robot"></i>
                </div>
                <h4 class="font-bold">AI Feed</h4>
                <p class="text-xs text-white/70 mt-2">Personalized career discovery</p>
              </div>
              <div class="bg-white p-6 rounded-3xl shadow-xl mt-8 border border-slate-100 floating" style="animation-delay: 1.5s;">
                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 text-xl" aria-hidden="true">
                  <i class="fas fa-university"></i>
                </div>
                <h4 class="font-bold text-slate-800">Campus TV</h4>
                <p class="text-xs text-slate-500 mt-2">Internal talent telecasting</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    `;
    }
}

/**
 * Dual Split Section - Students vs Institutions
 */
export class DualSplitSection extends Component {
    render() {
        return `
      <section class="py-20" id="sides" aria-labelledby="dual-heading">
        <h2 id="dual-heading" class="sr-only">For Students and Institutions</h2>
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 rounded-[3rem] overflow-hidden shadow-2xl">
            <!-- Students Side -->
            <div class="student-gradient p-12 lg:p-20 text-white relative">
              <div class="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                <i class="fas fa-rocket text-9xl"></i>
              </div>
              <h3 class="text-4xl font-extrabold mb-6">For the Opportunity Seekers</h3>
              <ul class="space-y-6 mb-12">
                <li class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <p class="text-lg">Discover curated hackathons, scholarships, and micro-internships that actually pay.</p>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <p class="text-lg">Turn activities into credits. Integrated with the Academic Bank of Credits (ABC).</p>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <p class="text-lg">Shadow Curriculum: Find high-value skills beyond your classroom syllabus.</p>
                </li>
              </ul>
              <button class="bg-white text-indigo-700 px-8 py-4 rounded-xl font-black text-lg hover:bg-slate-50 transition-all uppercase tracking-tight">
                Download App →
              </button>
            </div>

            <!-- Institutions Side -->
            <div class="college-gradient p-12 lg:p-20 text-white relative border-l border-white/10">
              <div class="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                <i class="fas fa-shield-alt text-9xl"></i>
              </div>
              <h3 class="text-4xl font-extrabold mb-6">For the Intelligence Centric</h3>
              <ul class="space-y-6 mb-12">
                <li class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-indigo-500/30 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <p class="text-lg text-slate-300">Automate NAAC Criterion 3, 5, and 7 documentation. No more chasing certificates.</p>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-indigo-500/30 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <p class="text-lg text-slate-300">"Compliance Generator": We don't just track data; we help you improve metrics.</p>
                </li>
                <li class="flex items-start gap-4">
                  <div class="w-6 h-6 rounded-full bg-indigo-500/30 flex-shrink-0 flex items-center justify-center mt-1" aria-hidden="true">
                    <i class="fas fa-check text-[10px]"></i>
                  </div>
                  <p class="text-lg text-slate-300">Internal PR: Telecast student achievements across digital signage and web feeds.</p>
                </li>
              </ul>
              <button class="bg-indigo-600 text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-indigo-700 transition-all border border-indigo-400 uppercase tracking-tight">
                Intel Portal →
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
    }
}

/**
 * Intelligence Section - NAAC Features
 */
export class IntelligenceSection extends Component {
    render() {
        return `
      <section class="py-24 bg-white" id="intelligence-section" aria-labelledby="intelligence-heading">
        <div class="max-w-7xl mx-auto px-6 text-center">
          <h2 id="intelligence-heading" class="text-4xl font-extrabold mb-4">Real-time Institutional Vibrancy</h2>
          <p class="text-slate-600 max-w-2xl mx-auto mb-16 text-lg">
            Stop living in fear of the accreditation guillotine. ScholarShare provides the granular proof of engagement required by NAAC 2025.
          </p>

          <div class="grid md:grid-cols-3 gap-8">
            <!-- Card 1: AQAR Automation -->
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all" aria-hidden="true">
                <i class="fas fa-file-invoice"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">AQAR Automation</h3>
              <p class="text-slate-600">Auto-tagging of student events against NAAC metrics. Every "Tree Plantation" drive is geotagged and filed.</p>
            </div>
            
            <!-- Card 2: Intelligence Dashboard -->
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all" aria-hidden="true">
                <i class="fas fa-users-cog"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Intelligence Dashboard</h3>
              <p class="text-slate-600">See which departments are actually active. Optimize budgets based on real engagement data, not intuition.</p>
            </div>
            
            <!-- Card 3: Verified Trust -->
            <div class="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group">
              <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all" aria-hidden="true">
                <i class="fas fa-fingerprint"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4">Verified Trust</h3>
              <p class="text-slate-600">Three-tier verification protocol ensures data integrity. Only Tier 3 data flows to official reports.</p>
            </div>
          </div>
        </div>
      </section>
    `;
    }
}

/**
 * Pilot CTA Section
 */
export class PilotCTASection extends Component {
    render() {
        return `
      <section class="py-20 relative overflow-hidden" aria-labelledby="pilot-cta-heading">
        <div class="absolute inset-0 student-gradient opacity-10" aria-hidden="true"></div>
        <div class="max-w-5xl mx-auto px-6 relative">
          <div class="glass p-12 md:p-20 rounded-[3rem] text-center shadow-xl border-white/40">
            <h2 id="pilot-cta-heading" class="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Be Among the First <br><span class="text-indigo-600">10 Pilot Institutions.</span>
            </h2>
            <p class="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
              Limited slots available for Tier 1-2 colleges in South and West India. Scale your institutional vibrancy with ₹0.60/student per day.
            </p>
            <form class="flex flex-col sm:flex-row gap-4 justify-center" onsubmit="return false;">
              <label for="pilot-email" class="sr-only">College Email</label>
              <input 
                type="email" 
                id="pilot-email"
                placeholder="Enter College Email" 
                class="px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 min-w-[300px]"
                aria-label="Enter your college email address"
              >
              <button type="submit" class="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
                Join the Revolution
              </button>
            </form>
          </div>
        </div>
      </section>
    `;
    }
}

/**
 * Section Header Component
 */
export class SectionHeader extends Component {
    render() {
        const { badge, title, subtitle, centered = true, light = false } = this.props;

        const containerClass = centered ? 'text-center' : '';
        const titleClass = light ? 'text-white' : 'text-slate-900';
        const subtitleClass = light ? 'text-slate-400' : 'text-slate-600';

        return `
      <div class="${containerClass} mb-16">
        ${badge ? `<span class="${light ? 'text-indigo-400' : 'text-indigo-600'} font-bold uppercase tracking-widest text-sm">${badge}</span>` : ''}
        <h1 class="text-5xl font-black mt-4 ${titleClass}">${title}</h1>
        ${subtitle ? `<p class="${subtitleClass} mt-6 max-w-3xl ${centered ? 'mx-auto' : ''} text-lg leading-relaxed">${subtitle}</p>` : ''}
      </div>
    `;
    }
}
