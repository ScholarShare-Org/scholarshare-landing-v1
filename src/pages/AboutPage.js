/**
 * About Page
 * Extracted from original index.html
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
     * Render the desktop layout (unchanged from original)
     */
    renderDesktopLayout() {
        return `
      <div class="pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-5xl md:text-6xl font-black mb-6">The <span class="gradient-text">Digital Nervous System</span> of the University.</h1>
            <p class="text-lg md:text-xl text-slate-600 leading-relaxed italic">"In the post-NEP world, where Credit is Currency, ScholarShare is the bank."</p>
          </div>

          <div class="prose prose-lg text-slate-600 space-y-12">
            <section>
              <h2 class="text-2xl md:text-3xl font-black text-slate-900 mb-6">The 2025 Context</h2>
              <p class="mb-4 text-base md:text-lg">Indian higher education has reached a definitive inflection point. With the transition to a rigid, operational reality of the National Education Policy (NEP) 2020, university life is no longer just about exams—it's about a holistic, credit-based ecosystem.</p>
              <p class="text-base md:text-lg">Digital mandates like <strong>APAAR</strong> (Automated Permanent Academic Account Registry) and the <strong>Academic Bank of Credits (ABC)</strong> mean that every volunteer hour and hackathon participation is a potential graduation requirement.</p>
            </section>
          </div>
        </div>

        <!-- Three-Column Inspired Layout -->
        <section class="py-16 md:py-24 w-full px-4 md:px-6 lg:px-12">
          <div class="text-center mb-12 md:mb-16">
            <span class="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs md:text-sm mb-4 md:mb-6 uppercase tracking-wider">The Triptych of Transformation</span>
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 text-slate-900">Bridging <span class="gradient-text">Three Critical Gaps</span></h2>
            <p class="text-base md:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">Every stakeholder in Indian higher education faces a unique challenge. ScholarShare provides a unified solution that transforms barriers into bridges.</p>
          </div>
          <div class="grid lg:grid-cols-3 w-full max-w-7xl mx-auto rounded-[3rem] overflow-hidden shadow-2xl">
            <!-- Left: Students Side -->
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

            <!-- Middle: Transparency Paradox -->
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

            <!-- Right: Industry-Academia Chasm -->
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
        </section>
        
        <div class="max-w-4xl mx-auto px-6">
          <div class="prose prose-lg text-slate-600 space-y-6">

            <!-- Expanded Dynamic Roadmap -->
            <h2 class="text-center text-4xl font-black mb-12 text-slate-900 pb-10">Our Roadmap</h2>
            <div class="roadmap-container">
              <div class="roadmap-path"></div>
              
              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-indigo-600 font-black text-xs uppercase mb-2">Dec 2025 – Mar 2026</div>
                  <h4 class="text-xl font-bold mb-2">Phase 0: Foundation</h4>
                  <p class="text-sm text-slate-500">Pilot onboarding of 10 Tier-1 colleges. Manual curation of cross-college opportunities and basic engagement tracking.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-purple-600 font-black text-xs uppercase mb-2">Mid 2026</div>
                  <h4 class="text-lg md:text-xl font-bold mb-2 text-slate-900">Phase 1: Intelligence Layer</h4>
                  <p class="text-sm text-slate-500">Deployment of pattern-based student insights and department-level engagement dashboards for administrators.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-pink-600 font-black text-xs uppercase mb-2">Late 2026</div>
                  <h4 class="text-lg md:text-xl font-bold mb-2 text-slate-900">Phase 2: Automation</h4>
                  <p class="text-sm text-slate-500">n8n-driven opportunity ingestion pipeline. Deployment of AI-assisted curator workflows for massive scaling.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-slate-400 font-black text-xs uppercase mb-2">2027</div>
                  <h4 class="text-lg md:text-xl font-bold mb-2 text-slate-900">Phase 3: National Infrastructure</h4>
                  <p class="text-sm text-slate-500">Deep policy integrations with APAAR/ABC for live credit pushing and cross-institutional insight networks.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-indigo-400 font-black text-xs uppercase mb-2">2028+</div>
                  <h4 class="text-lg md:text-xl font-bold mb-2 text-slate-900">Phase 4: Global Mobility</h4>
                  <p class="text-sm text-slate-500">Enabling international credit recognition and verified student performance maps for global higher-ed entities.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Intentional Deferment - Outside prose wrapper to avoid color override -->
          <div class="mt-32 p-12 bg-slate-900 rounded-[3.5rem] text-white">
            <h2 class="text-3xl font-black mb-8 text-center text-white">What We're NOT Doing Yet (By Design)</h2>
            <div class="grid md:grid-cols-2 gap-12">
              <div>
                <h4 class="font-bold text-indigo-400 mb-2">Automated ABC Pushing</h4>
                <p class="text-slate-400 text-sm">We are intentionally deferring live ABC pushes until Phase 3 to ensure 100% data audit-readiness with regulator APIs.</p>
              </div>
              <div>
                <h4 class="font-bold text-indigo-400 mb-2">Open API Marketplace</h4>
                <p class="text-slate-400 text-sm">Access to institutional intelligence is restricted to onboarded HEIs only to maintain strict student data privacy during pilot.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    /**
     * Render the mobile-optimized layout (premium crafted experience)
     */
    renderMobileLayout() {
        return `
      <div class="pt-20 bg-slate-50 overflow-hidden">
        <!-- Immersive Hero with Decorative Elements -->
        <div class="relative px-4 mb-8 text-center">
          <!-- Floating decorative shapes -->
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

        <!-- NEP Context - Glassmorphic Card -->
        <div class="px-4 mb-8">
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

        <!-- Triptych Section Header -->
        <div class="px-4 mb-4 text-center">
          <span class="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-black text-xs uppercase tracking-widest mb-3">
            ✦ Triptych of Transformation ✦
          </span>
          <h2 class="text-2xl font-black text-slate-900">Bridging <span class="gradient-text">Three Critical Gaps</span></h2>
        </div>

        <!-- Triptych Cards - Production Ready -->
        <div class="px-4 space-y-4 mb-8">
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

        <!-- Roadmap with Visual Timeline -->
        <div class="px-4 mb-8">
          <h2 class="text-2xl font-black text-slate-900 text-center mb-6">Our Roadmap</h2>
          
          <div class="relative">
            <!-- Vertical Timeline Line -->
            <div class="absolute left-5 top-6 bottom-6 w-0.5 bg-gradient-to-b from-indigo-600 via-purple-500 via-pink-500 to-slate-300"></div>
            
            <div class="space-y-4">
              <!-- Phase 0 -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 z-10 ring-4 ring-white shadow-lg">0</div>
                <div class="bg-white rounded-2xl p-4 flex-1 border border-slate-100 shadow-sm">
                  <div class="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Dec 2025 – Mar 2026</div>
                  <div class="font-black text-slate-900">Foundation</div>
                  <p class="text-xs text-slate-500">10 Tier-1 colleges • Manual curation • Basic tracking</p>
                </div>
              </div>
              
              <!-- Phase 1 -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 z-10 ring-4 ring-white shadow-lg">1</div>
                <div class="bg-white rounded-2xl p-4 flex-1 border border-slate-100 shadow-sm">
                  <div class="text-[10px] font-black text-purple-600 uppercase tracking-widest">Mid 2026</div>
                  <div class="font-black text-slate-900">Intelligence Layer</div>
                  <p class="text-xs text-slate-500">Pattern-based insights • Department dashboards</p>
                </div>
              </div>
              
              <!-- Phase 2 -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 z-10 ring-4 ring-white shadow-lg">2</div>
                <div class="bg-white rounded-2xl p-4 flex-1 border border-slate-100 shadow-sm">
                  <div class="text-[10px] font-black text-pink-600 uppercase tracking-widest">Late 2026</div>
                  <div class="font-black text-slate-900">Automation</div>
                  <p class="text-xs text-slate-500">n8n pipelines • AI curator workflows</p>
                </div>
              </div>
              
              <!-- Phase 3 -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 z-10 ring-4 ring-white shadow-lg">3</div>
                <div class="bg-white rounded-2xl p-4 flex-1 border border-slate-100 shadow-sm">
                  <div class="text-[10px] font-black text-slate-500 uppercase tracking-widest">2027</div>
                  <div class="font-black text-slate-900">National Infrastructure</div>
                  <p class="text-xs text-slate-500">APAAR/ABC live pushing • Cross-institution networks</p>
                </div>
              </div>
              
              <!-- Phase 4 -->
              <div class="flex gap-4">
                <div class="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-black flex-shrink-0 z-10 ring-4 ring-white shadow-lg">
                  <i class="fas fa-globe text-xs"></i>
                </div>
                <div class="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-4 flex-1 border border-indigo-200">
                  <div class="text-[10px] font-black text-indigo-500 uppercase tracking-widest">2028+</div>
                  <div class="font-black text-slate-900">Global Mobility</div>
                  <p class="text-xs text-slate-600">International credit recognition • Global higher-ed integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- What We're NOT Doing - Creative Treatment -->
        <div class="px-4 mb-6">
          <div class="bg-slate-900 rounded-3xl p-6 relative overflow-hidden">
            <div class="absolute -bottom-4 -right-4 opacity-5">
              <i class="fas fa-hand-paper text-9xl text-white"></i>
            </div>
            <div class="relative z-10">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                  <i class="fas fa-ban text-red-400"></i>
                </div>
                <div>
                  <h3 class="font-black text-white">What We're NOT Doing</h3>
                  <p class="text-xs text-slate-500">(Intentionally)</p>
                </div>
              </div>
              
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                  <div class="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-pause text-amber-400 text-xs"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-indigo-400 text-sm">Automated ABC Pushing</h4>
                    <p class="text-slate-400 text-xs">Deferred to Phase 3 for 100% audit-readiness.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white/5 rounded-xl">
                  <div class="w-6 h-6 bg-amber-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i class="fas fa-lock text-amber-400 text-xs"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-indigo-400 text-sm">Open API Marketplace</h4>
                    <p class="text-slate-400 text-xs">Restricted to pilot HEIs for data privacy.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA Button -->
        <div class="px-4 pb-6 border-b border-slate-200">
          <button onclick="navigateTo('joinpilot')" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-2 text-lg">
            <span>Join the Pilot</span>
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
