/**
 * About Page
 * Extracted from original index.html
 * 
 * Uses unified responsive layout with mobile-first approach
 * @module pages/AboutPage
 */

import { Page } from './Page.js';

export class AboutPage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'about',
            title: 'About | ScholarShare',
            bgClass: 'bg-slate-50'
        });
    }

    /**
     * Get roadmap phases for DRY rendering
     */
    get roadmapPhases() {
        return [
            { phase: 0, date: 'Dec 2025 – Mar 2026', title: 'Foundation', color: 'indigo', desc: 'Pilot onboarding of 10 Tier-1 colleges. Manual curation of cross-college opportunities and basic engagement tracking.', descMobile: '10 Tier-1 colleges • Manual curation • Basic tracking' },
            { phase: 1, date: 'Mid 2026', title: 'Intelligence Layer', color: 'purple', desc: 'Deployment of pattern-based student insights and department-level engagement dashboards for administrators.', descMobile: 'Pattern-based insights • Department dashboards' },
            { phase: 2, date: 'Late 2026', title: 'Automation', color: 'pink', desc: 'n8n-driven opportunity ingestion pipeline. Deployment of AI-assisted curator workflows for massive scaling.', descMobile: 'n8n pipelines • AI curator workflows' },
            { phase: 3, date: '2027', title: 'National Infrastructure', color: 'slate', desc: 'Deep policy integrations with APAAR/ABC for live credit pushing and cross-institutional insight networks.', descMobile: 'APAAR/ABC live pushing • Cross-institution networks' },
            { phase: 4, date: '2028+', title: 'Global Mobility', color: 'indigo', desc: 'Enabling international credit recognition and verified student performance maps for global higher-ed entities.', descMobile: 'International credit recognition • Global higher-ed integration', isGlobal: true }
        ];
    }

    /**
     * Get triptych cards for DRY rendering
     */
    get triptychCards() {
        return [
            {
                id: 'students',
                gradient: 'student-gradient',
                icon: 'fa-rocket',
                titleStrike: 'Extracurricular',
                titleMain: 'Essential Exposure',
                descDesktop: [
                    'For decades, students have treated college life as a binary choice: focus strictly on the degree or engage in "extracurriculars" that often go unrewarded by the system.',
                    'ScholarShare stands to eliminate this divide by making college life meaningful through curated exposure. Every hour spent outside the classroom is mapped to industry-ready skills and verified for academic credit.'
                ],
                descMobile: 'Every hour outside class is mapped to <strong>industry-ready skills</strong> and verified for credit.'
            },
            {
                id: 'transparency',
                gradient: 'bg-gradient-to-br from-slate-100 to-indigo-50',
                icon: 'fa-balance-scale',
                titleMain: 'Solving the Transparency Paradox',
                descDesktop: [
                    'Selling a system predicated on data honesty to a market historically prone to data manipulation is the ultimate challenge.',
                    'ScholarShare solves this by pivoting from a tool of "policing" to an engine of <strong class="text-indigo-700">"generative compliance."</strong> We don\'t just measure the quality of education; we provide the active consultant engine that suggests local NGO partnerships or corporate gigs when the system detects a gap in your metrics.'
                ],
                descMobile: 'How do you sell data honesty to a market prone to manipulation?',
                highlight: '<strong>Our pivot:</strong> From policing → <span class="font-bold">Generative Compliance</span>',
                isLight: true
            },
            {
                id: 'industry',
                gradient: 'college-gradient',
                icon: 'fa-university',
                iconMobile: 'fa-handshake',
                titleMain: 'Industry ↔ Academia',
                titleDesktop: 'Bridging the Industry–<span class="whitespace-nowrap">Academia Chasm</span>',
                descDesktop: [
                    'Industries frequently complain about the "employability gap"—the distance between what colleges teach and what work requires.',
                    'ScholarShare provides institutions with the intelligence to fill this void. By providing colleges with real-time analytics on student performance in external, high-stakes environments, we enable IQAC heads to identify skill deficiencies instantly and optimize departmental focus areas.'
                ],
                descMobile: 'Real-time analytics help IQAC heads identify <strong>skill gaps instantly</strong>.'
            }
        ];
    }

    render() {
        const phases = this.roadmapPhases;
        const cards = this.triptychCards;

        const content = `
      <div class="pt-32 md:pt-32 pb-20 md:pb-20">
        
        <!-- Hero Section -->
        <div class="max-w-4xl mx-auto px-4 md:px-6">
          <div class="text-center mb-8 md:mb-16">
            <!-- Mobile Hero -->
            <div class="md:hidden relative">
              <div class="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-2xl"></div>
              <div class="absolute -top-5 -right-5 w-24 h-24 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-full blur-2xl"></div>
              <div class="relative z-10">
                <div class="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/30">
                  <i class="fas fa-brain text-white text-2xl"></i>
                </div>
                <h1 class="text-3xl font-black text-slate-900 mb-2 leading-tight">
                  The <span class="gradient-text">Digital Nervous System</span>
                  <span class="block text-xl font-bold text-slate-500 mt-1">of the University.</span>
                </h1>
                <p class="text-slate-500 text-sm italic mt-4">
                  "Where Credit is Currency, <span class="text-indigo-600 font-semibold">ScholarShare is the bank.</span>"
                </p>
              </div>
            </div>
            
            <!-- Desktop Hero -->
            <div class="hidden md:block">
              <h1 class="text-5xl md:text-6xl font-black mb-6">The <span class="gradient-text">Digital Nervous System</span> of the University.</h1>
              <p class="text-lg md:text-xl text-slate-600 leading-relaxed italic">"In the post-NEP world, where Credit is Currency, ScholarShare is the bank."</p>
            </div>
          </div>
          
          <!-- 2025 Context Section -->
          <!-- Mobile Context -->
          <div class="md:hidden px-0 mb-8">
            <div class="relative bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-slate-200 shadow-xl overflow-hidden">
              <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div class="relative z-10">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                    <i class="fas fa-landmark text-white"></i>
                  </div>
                  <div>
                    <h2 class="font-black text-lg text-slate-900">The 2025 Context</h2>
                    <p class="text-xs text-slate-500">India's Education Inflection Point</p>
                  </div>
                </div>
                <p class="text-sm text-slate-600 leading-relaxed mb-4">
                  NEP 2020 has transformed university life. Every <strong class="text-slate-900">volunteer hour</strong> and <strong class="text-slate-900">hackathon win</strong> is now a potential graduation requirement.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-xs font-bold shadow-sm">
                    <i class="fas fa-id-card mr-1"></i> APAAR
                  </span>
                  <span class="px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold shadow-sm">
                    <i class="fas fa-university mr-1"></i> ABC
                  </span>
                  <span class="px-3 py-1.5 rounded-full bg-slate-800 text-white text-xs font-bold shadow-sm">
                    NEP 2020
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Desktop Context -->
          <div class="hidden md:block prose prose-lg text-slate-600 space-y-12">
            <section>
              <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-6">The 2025 Context</h2>
              <p class="mb-4 text-base md:text-lg">Indian higher education has reached a definitive inflection point. With the transition to a rigid, operational reality of the National Education Policy (NEP) 2020, university life is no longer just about exams—it's about a holistic, credit-based ecosystem.</p>
              <p class="text-base md:text-lg">Digital mandates like <strong>APAAR</strong> (Automated Permanent Academic Account Registry) and the <strong>Academic Bank of Credits (ABC)</strong> mean that every volunteer hour and hackathon participation is a potential graduation requirement.</p>
            </section>
          </div>
        </div>
        
        <!-- Triptych Section -->
        <section class="py-8 md:py-24 w-full px-4 md:px-6 lg:px-12">
          <div class="text-center mb-4 md:mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs md:text-sm mb-3 md:mb-6 uppercase tracking-wider">
              <span class="md:hidden">✦ Triptych of Transformation ✦</span>
              <span class="hidden md:inline">The Triptych of Transformation</span>
            </span>
            <h2 class="text-2xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-slate-900">Bridging <span class="gradient-text">Three Critical Gaps</span></h2>
            <p class="hidden md:block text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">Every stakeholder in Indian higher education faces a unique challenge. ScholarShare provides a unified solution that transforms barriers into bridges.</p>
          </div>
          
          <!-- Desktop Triptych Grid -->
          <div class="hidden lg:grid lg:grid-cols-3 w-full max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
            <!-- Students Side -->
            <div class="student-gradient p-16 lg:p-20 text-white relative">
              <div class="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                <i class="fas fa-rocket text-8xl"></i>
              </div>
              <h2 class="text-[24px] lg:text-[32px] font-extrabold leading-tight mb-8">
                <span class="text-white/60 line-through decoration-2">Extracurricular</span>
                <span class="block text-xl font-medium text-white/40 my-2">reimagined as</span>
                <span class="whitespace-nowrap">Essential Exposure</span>
              </h2>
              <div class="space-y-6">
                <p class="text-lg leading-relaxed">For decades, students have treated college life as a binary choice: focus strictly on the degree or engage in "extracurriculars" that often go unrewarded by the system.</p>
                <p class="text-lg leading-relaxed opacity-90">ScholarShare stands to eliminate this divide by making college life meaningful through curated exposure. Every hour spent outside the classroom is mapped to industry-ready skills and verified for academic credit.</p>
              </div>
            </div>

            <!-- Transparency Paradox -->
            <div class="bg-gradient-to-br from-slate-100 to-indigo-50 p-16 lg:p-20 text-slate-900 relative border-x border-white/20">
              <div class="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                <i class="fas fa-balance-scale text-8xl text-indigo-400"></i>
              </div>
              <h2 class="text-[24px] lg:text-[32px] font-extrabold mb-8 text-indigo-900">
                Solving the Transparency Paradox
              </h2>
              <div class="space-y-6">
                <p class="text-lg leading-relaxed text-slate-700">Selling a system predicated on data honesty to a market historically prone to data manipulation is the ultimate challenge.</p>
                <p class="text-lg leading-relaxed text-slate-600">ScholarShare solves this by pivoting from a tool of "policing" to an engine of <strong class="text-indigo-700">"generative compliance."</strong> We don't just measure the quality of education; we provide the active consultant engine that suggests local NGO partnerships or corporate gigs when the system detects a gap in your metrics.</p>
              </div>
            </div>

            <!-- Industry-Academia Chasm -->
            <div class="college-gradient p-16 lg:p-20 text-white relative">
              <div class="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                <i class="fas fa-university text-8xl"></i>
              </div>
              <h2 class="text-[24px] lg:text-[32px] font-extrabold mb-8">Bridging the Industry–<span class="whitespace-nowrap">Academia Chasm</span></h2>
              <div class="space-y-6">
                <p class="text-lg leading-relaxed text-slate-200">Industries frequently complain about the "employability gap"—the distance between what colleges teach and what work requires.</p>
                <p class="text-lg leading-relaxed opacity-90">ScholarShare provides institutions with the intelligence to fill this void. By providing colleges with real-time analytics on student performance in external, high-stakes environments, we enable IQAC heads to identify skill deficiencies instantly and optimize departmental focus areas.</p>
              </div>
            </div>
          </div>
          
          <!-- Mobile Triptych Cards -->
          <div class="lg:hidden space-y-4 max-w-lg mx-auto">
            <!-- Card 1: Students -->
            <div class="student-gradient rounded-2xl p-5 relative overflow-hidden">
              <div class="absolute -top-2 -right-2 opacity-10">
                <i class="fas fa-rocket text-6xl text-white"></i>
              </div>
              <div class="relative z-10">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <i class="fas fa-rocket text-white text-sm"></i>
                  </div>
                  <div>
                    <span class="text-white/50 text-xs line-through">Extracurricular</span>
                    <h3 class="text-lg font-black text-white -mt-0.5">Essential Exposure</h3>
                  </div>
                </div>
                <p class="text-white/90 text-sm leading-relaxed">
                  Every hour outside class is mapped to <strong>industry-ready skills</strong> and verified for credit.
                </p>
              </div>
            </div>
            
            <!-- Card 2: Transparency -->
            <div class="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm relative overflow-hidden">
              <div class="absolute -top-2 -right-2 opacity-5">
                <i class="fas fa-balance-scale text-6xl text-indigo-600"></i>
              </div>
              <div class="relative z-10">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-balance-scale text-indigo-600 text-sm"></i>
                  </div>
                  <h3 class="text-lg font-black text-slate-900">Transparency Paradox</h3>
                </div>
                <p class="text-slate-600 text-sm leading-relaxed mb-3">
                  How do you sell data honesty to a market prone to manipulation?
                </p>
                <div class="bg-indigo-50 rounded-xl px-3 py-2">
                  <p class="text-xs text-indigo-700">
                    <strong>Our pivot:</strong> From policing → <span class="font-bold">Generative Compliance</span>
                  </p>
                </div>
              </div>
            </div>
            
            <!-- Card 3: Industry-Academia -->
            <div class="college-gradient rounded-2xl p-5 relative overflow-hidden">
              <div class="absolute -top-2 -right-2 opacity-10">
                <i class="fas fa-university text-6xl text-white"></i>
              </div>
              <div class="relative z-10">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <i class="fas fa-handshake text-white text-sm"></i>
                  </div>
                  <h3 class="text-lg font-black text-white">Industry ↔ Academia</h3>
                </div>
                <p class="text-white/90 text-sm leading-relaxed">
                  Real-time analytics help IQAC heads identify <strong>skill gaps instantly</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Roadmap Section -->
        <div class="max-w-4xl mx-auto px-4 md:px-6">
          <h2 class="text-2xl md:text-4xl font-black text-center text-slate-900 mb-6 md:mb-12">Our Roadmap</h2>
          
          <!-- Roadmap (Unified for Desktop and Mobile via CSS) -->
          <div class="prose prose-lg text-slate-600 space-y-6">
            <div class="roadmap-container">
              <div class="roadmap-path"></div>
              ${phases.map((p, i) => `
                <div class="roadmap-step">
                  <div class="roadmap-node"></div>
                  <div class="roadmap-content ${i === 0 ? 'roadmap-first' : ''}">
                    <div class="text-${p.color}-${p.phase === 3 ? '400' : '600'} font-black text-xs uppercase mb-2">${p.date}</div>
                    <h4 class="text-lg md:text-xl font-bold mb-2 text-slate-900">Phase ${p.phase}: ${p.title}</h4>
                    <p class="text-sm text-slate-500 hidden md:block">${p.desc}</p>
                    <p class="text-sm text-slate-500 md:hidden">${p.descMobile}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- What We're NOT Doing Section -->
          <div class="mt-8 md:mt-32 p-6 md:p-12 bg-slate-900 rounded-3xl md:rounded-[3.5rem] text-white relative overflow-hidden">
            <div class="absolute -bottom-4 -right-4 opacity-5">
              <i class="fas fa-hand-paper text-9xl text-white"></i>
            </div>
            <div class="relative z-10">
              <!-- Mobile Header -->
              <div class="md:hidden flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <i class="fas fa-ban text-red-400"></i>
                </div>
                <div>
                  <h3 class="font-black text-white">What We're NOT Doing</h3>
                  <p class="text-xs text-slate-500">(Intentionally)</p>
                </div>
              </div>
              
              <!-- Desktop Header -->
              <h2 class="hidden md:block text-3xl font-black mb-8 text-center text-white">What We're NOT Doing Yet (By Design)</h2>
              
              <div class="grid md:grid-cols-2 gap-3 md:gap-12">
                <div class="md:block flex items-start gap-3 p-3 md:p-0 bg-white/5 md:bg-transparent rounded-xl">
                  <div class="md:hidden w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-pause text-amber-400 text-xs"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-indigo-400 text-sm md:text-base md:mb-2">Automated ABC Pushing</h4>
                    <p class="text-slate-400 text-xs md:text-sm">
                      <span class="md:hidden">Deferred to Phase 3 for 100% audit-readiness.</span>
                      <span class="hidden md:inline">We are intentionally deferring live ABC pushes until Phase 3 to ensure 100% data audit-readiness with regulator APIs.</span>
                    </p>
                  </div>
                </div>
                <div class="md:block flex items-start gap-3 p-3 md:p-0 bg-white/5 md:bg-transparent rounded-xl">
                  <div class="md:hidden w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-lock text-amber-400 text-xs"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-indigo-400 text-sm md:text-base md:mb-2">Open API Marketplace</h4>
                    <p class="text-slate-400 text-xs md:text-sm">
                      <span class="md:hidden">Restricted to pilot HEIs for data privacy.</span>
                      <span class="hidden md:inline">Access to institutional intelligence is restricted to onboarded HEIs only to maintain strict student data privacy during pilot.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Mobile CTA -->
          <div class="md:hidden mt-6 pb-6 border-b border-slate-200">
            <button onclick="navigateTo('joinpilot')" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 text-lg">
              <span>Join the Pilot</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    `;

        return this.renderPage(content);
    }
}
