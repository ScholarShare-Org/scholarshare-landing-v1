/**
 * @fileoverview About Page
 * Company vision, roadmap, and strategic positioning
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

    render() {
        const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-6">
          <div class="text-center mb-16">
            <h1 class="text-6xl font-black mb-6">The <span class="gradient-text">Digital Nervous System</span> of the University.</h1>
            <p class="text-xl text-slate-600 leading-relaxed italic">"In the post-NEP world, where Credit is Currency, ScholarShare is the bank."</p>
          </div>

          <div class="prose prose-lg text-slate-600 space-y-12">
            <section>
              <h2 class="text-3xl font-black text-slate-900 mb-6">The 2025 Context</h2>
              <p class="mb-4">Indian higher education has reached a definitive inflection point. With the transition to a rigid, operational reality of the National Education Policy (NEP) 2020, university life is no longer just about exams—it's about a holistic, credit-based ecosystem.</p>
              <p>Digital mandates like <strong>APAAR</strong> (Automated Permanent Academic Account Registry) and the <strong>Academic Bank of Credits (ABC)</strong> mean that every volunteer hour and hackathon participation is a potential graduation requirement.</p>
            </section>
          </div>
        </div>

        <!-- Three-Column Inspired Layout -->
        <section class="py-24 w-screen px-12">
          <h2 class="text-center text-4xl font-black mb-4 text-slate-900">Our Goals</h2>
          <p class="text-center text-slate-600 max-w-2xl mx-auto mb-12">How ScholarShare transforms the student experience and institutional capabilities.</p>
          <div class="grid lg:grid-cols-3 w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <!-- Left: Students Side -->
            <div class="student-gradient p-16 lg:p-20 text-white relative">
              <div class="absolute top-0 right-0 p-8 opacity-10" aria-hidden="true">
                <i class="fas fa-rocket text-8xl"></i>
              </div>
              <h3 class="text-3xl lg:text-4xl font-extrabold mb-8">"Extracurricular" <br> to <br> "Essential Exposure"</h3>
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
              <h3 class="text-3xl lg:text-4xl font-extrabold mb-8 text-indigo-900">Solving the "Transparency Paradox"</h3>
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
              <h3 class="text-3xl lg:text-4xl font-extrabold mb-8">Bridging the Industry-Academia Chasm</h3>
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
                  <h4 class="text-xl font-bold mb-2">Phase 1: Intelligence Layer</h4>
                  <p class="text-sm text-slate-500">Deployment of pattern-based student insights and department-level engagement dashboards for administrators.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-pink-600 font-black text-xs uppercase mb-2">Late 2026</div>
                  <h4 class="text-xl font-bold mb-2">Phase 2: Automation</h4>
                  <p class="text-sm text-slate-500">n8n-driven opportunity ingestion pipeline. Deployment of AI-assisted curator workflows for massive scaling.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-slate-400 font-black text-xs uppercase mb-2">2027</div>
                  <h4 class="text-xl font-bold mb-2">Phase 3: National Infrastructure</h4>
                  <p class="text-sm text-slate-500">Deep policy integrations with APAAR/ABC for live credit pushing and cross-institutional insight networks.</p>
                </div>
              </div>

              <div class="roadmap-step">
                <div class="roadmap-node"></div>
                <div class="roadmap-content">
                  <div class="text-indigo-400 font-black text-xs uppercase mb-2">2028+</div>
                  <h4 class="text-xl font-bold mb-2">Phase 4: Global Mobility</h4>
                  <p class="text-sm text-slate-500">Enabling international credit recognition and verified student performance maps for global higher-ed entities.</p>
                </div>
              </div>
            </div>

            <!-- Intentional Deferment -->
            <div class="mt-32 p-12 bg-slate-900 rounded-[3.5rem] text-white">
              <h2 class="text-3xl font-black mb-8 text-center">What We're NOT Doing Yet (By Design)</h2>
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
      </div>
    `;

        return this.renderPage(content);
    }
}
