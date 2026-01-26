/**
 * @fileoverview Students Page
 * Student-focused landing with opportunities, peer learning, and APAAR integration
 */

import { Page } from './Page.js';

export class StudentsPage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'students',
            title: 'For Students | ScholarShare',
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
          <!-- Header Card -->
          <div class="student-gradient rounded-[3rem] p-12 lg:p-20 text-white mb-8 relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 p-12 opacity-10" aria-hidden="true">
              <i class="fas fa-bolt text-[15rem]"></i>
            </div>
            <div class="relative z-10 max-w-3xl">
              <span class="bg-white/20 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                The Gig Economy Ready
              </span>
              <h1 class="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                Your Portfolio is Your <span class="underline decoration-indigo-300">New Resume.</span>
              </h1>
              <p class="text-xl lg:text-2xl opacity-90 mb-10 leading-relaxed">
                In the post-NEP era, every verified hackathon, volunteer hour, and micro-internship counts. ScholarShare connects you to opportunities and ensures they are creditized in your Academic Bank of Credits.
              </p>
              <div class="flex flex-wrap gap-6">
                <div class="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/20 cursor-pointer hover:bg-white/20 transition-all" onclick="navigateTo('apaar')">
                  <i class="fas fa-id-card text-2xl" aria-hidden="true"></i>
                  <div>
                    <div class="font-bold">APAAR Sync</div>
                    <div class="text-xs opacity-60 text-indigo-100 uppercase tracking-tighter">Identity Verified</div>
                  </div>
                </div>
                <div class="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-2xl border border-white/20">
                  <i class="fas fa-piggy-bank text-2xl" aria-hidden="true"></i>
                  <div>
                    <div class="font-bold">ABC Credits</div>
                    <div class="text-xs opacity-60 text-indigo-100 uppercase tracking-tighter">Automatic Transfer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Personalization Quote - Desktop Single Line -->
          <div class="text-center pb-8 mb-6">
            <div class="flex justify-center items-center gap-4 flex-wrap mb-8">
              <p class="text-slate-600 text-lg font-medium">
                If your social feed knows you, shouldn't your <span style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.4));">opportunities</span> too?
              </p>
              <span class="text-slate-300">—</span>
              <div class="flex items-center gap-2">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                  <i class="fas fa-filter text-xs"></i> Eligibility
                </span>
                <span class="text-purple-400">✦</span>
                <span class="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                  <i class="fas fa-heart text-xs"></i> Interests
                </span>
              </div>
            </div>
            <!-- Scroll indicator -->
            <button onclick="document.getElementById('opportunity-feed').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to opportunities">
              <i class="fas fa-chevron-down text-slate-400 hover:text-indigo-500 text-xl" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Opportunity Feed Mockup -->
          <div id="opportunity-feed" class="mb-20 scroll-mt-24">
            <div class="flex justify-between items-end mb-8">
              <div>
                <h2 class="text-3xl font-black text-slate-900">Live Opportunity Feed</h2>
                <p class="text-slate-500">Curated specifically for your major and skills.</p>
              </div>
              <button onclick="showComingSoon('Opportunity Marketplace')" class="text-indigo-600 font-bold hover:underline">View All Gigs →</button>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <!-- Card 1 -->
              <article onclick="showComingSoon('Opportunity Applications')" class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center text-xl" aria-hidden="true">
                    <i class="fas fa-laptop-code"></i>
                  </div>
                  <span class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">₹5,000 Stipend</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Frontend Micro-internship</h3>
                <p class="text-slate-500 text-sm mb-4">Build a landing page for a local NGO. Duration: 2 weeks.</p>
                <div class="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span><i class="fas fa-star text-yellow-400 mr-1" aria-hidden="true"></i> 2.5 Credits</span>
                  <span class="text-indigo-600">Apply Now</span>
                </div>
              </article>
              <!-- Card 2 -->
              <article onclick="showComingSoon('Opportunity Applications')" class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center text-xl" aria-hidden="true">
                    <i class="fas fa-leaf"></i>
                  </div>
                  <span class="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">Volunteering</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Urban Tree Plantation</h3>
                <p class="text-slate-500 text-sm mb-4">Participate in the city-wide green initiative. Geotagging required.</p>
                <div class="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span><i class="fas fa-star text-yellow-400 mr-1" aria-hidden="true"></i> 1.0 Credits</span>
                  <span class="text-indigo-600">Apply Now</span>
                </div>
              </article>
              <!-- Card 3 -->
              <article onclick="showComingSoon('Opportunity Applications')" class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
                <div class="flex justify-between items-start mb-4">
                  <div class="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center text-xl" aria-hidden="true">
                    <i class="fas fa-brain"></i>
                  </div>
                  <span class="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-xs font-bold">Competition</span>
                </div>
                <h3 class="font-bold text-lg mb-2">Inter-College Debate</h3>
                <p class="text-slate-500 text-sm mb-4">Represent your institution at the National Policy Forum.</p>
                <div class="flex items-center justify-between text-xs font-bold text-slate-400">
                  <span><i class="fas fa-star text-yellow-400 mr-1" aria-hidden="true"></i> 3.0 Credits</span>
                  <span class="text-indigo-600">Apply Now</span>
                </div>
              </article>
            </div>
          </div>

          <!-- Horizontal Learning Section -->
          <div class="bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-4xl font-black mb-6">Peer Learning Communities</h2>
              <p class="text-lg text-slate-600 mb-8">
                Move beyond disciplinary silos. Join interest-based micro-communities that transcend your campus. A student in a rural college can join a "Quantum Computing" group moderated by a peer in a metro college.
              </p>
              <div class="space-y-4">
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
                  <div class="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white" aria-hidden="true">
                    <i class="fas fa-users"></i>
                  </div>
                  <span class="font-bold">500+ Active Societies</span>
                </div>
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-purple-50 border border-purple-100">
                  <div class="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center text-white" aria-hidden="true">
                    <i class="fas fa-graduation-cap"></i>
                  </div>
                  <span class="font-bold">Peer-to-Peer Mentorship</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-slate-50 p-6 rounded-3xl text-center">
                <div class="text-3xl font-black mb-1">Python</div>
                <div class="text-slate-400 text-xs uppercase font-bold">1.2k Members</div>
              </div>
              <div class="bg-slate-50 p-6 rounded-3xl text-center">
                <div class="text-3xl font-black mb-1">FinTech</div>
                <div class="text-slate-400 text-xs uppercase font-bold">800 Members</div>
              </div>
              <div class="bg-slate-50 p-6 rounded-3xl text-center">
                <div class="text-3xl font-black mb-1">Design</div>
                <div class="text-slate-400 text-xs uppercase font-bold">2.5k Members</div>
              </div>
              <div class="bg-slate-50 p-6 rounded-3xl text-center">
                <div class="text-3xl font-black mb-1">Debate</div>
                <div class="text-slate-400 text-xs uppercase font-bold">600 Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    }

    /**
     * Render the mobile-optimized layout (premium experience-first design)
     * Crafted to match the artistry of the desktop view
     */
    renderMobileLayout() {
        return `
      <div class="mobile-fade-in overflow-hidden">
        <!-- Hero + Quote Combined Section - Seamless Flow -->
        <section class="relative pt-24 pb-6 px-5 overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white">
          <!-- Background Blur Orbs - Extended for continuity -->
          <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-40 pointer-events-none" aria-hidden="true"></div>
          <div class="absolute top-40 -left-32 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true"></div>
          <div class="absolute bottom-0 right-0 w-40 h-40 bg-indigo-300 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true"></div>
          
          <!-- Hero Card -->
          <div class="student-gradient rounded-[2rem] p-6 text-white relative overflow-hidden shadow-2xl mobile-stagger-1 mb-6">
            <div class="absolute top-2 right-2 opacity-10" aria-hidden="true">
              <i class="fas fa-bolt text-7xl"></i>
            </div>
            
            <div class="relative z-10">
              <!-- Premium Badge -->
              <span class="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-white/20">
                <i class="fas fa-zap text-yellow-300"></i>
                Gig Economy Ready
              </span>
              
              <!-- Hero Title -->
              <h1 class="text-[1.75rem] leading-[1.2] font-extrabold mb-4">
                Your Portfolio is Your<br>
                <span class="underline decoration-indigo-300 decoration-[3px] underline-offset-4 whitespace-nowrap">New Resume.</span>
              </h1>
              
              <!-- Subtitle -->
              <p class="text-indigo-100 text-sm leading-relaxed mb-6">
                Every verified hackathon, volunteer hour, and micro-internship counts. Get creditized in your Academic Bank of Credits.
              </p>
              
              <!-- APAAR & ABC Cards -->
              <div class="grid grid-cols-2 gap-3">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center cursor-pointer active:scale-[0.98] transition-transform" onclick="navigateTo('apaar')">
                  <i class="fas fa-id-card text-2xl mb-2"></i>
                  <div class="font-bold text-sm">APAAR Sync</div>
                  <div class="text-[10px] text-indigo-200 uppercase tracking-wider">Identity Verified</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
                  <i class="fas fa-piggy-bank text-2xl mb-2"></i>
                  <div class="font-bold text-sm">ABC Credits</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Personalization Quote - VARIATION C: Minimal with Pill Keywords -->
          <div class="relative text-center py-4">
            <!-- Main Quote - Clean Typography -->
            <p class="text-slate-600 text-base font-medium leading-relaxed mb-4 px-2">
              If your social feed knows you,<br>
              shouldn't your <span style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.4));">opportunities</span> too?
            </p>
            
            <!-- Keyword Pills with Collaboration Symbol -->
            <div class="flex justify-center items-center gap-2">
              <span class="inline-flex items-center gap-1 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                <i class="fas fa-filter text-[9px]"></i> Eligibility
              </span>
              <span class="text-purple-400 text-sm">✦</span>
              <span class="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                <i class="fas fa-heart text-[9px]"></i> Interests
              </span>
            </div>
          </div>
        </section>

        <!-- Live Opportunities Section -->
        <section class="pt-8 pb-12 px-5 bg-gradient-to-b from-white to-slate-50/50">
          <!-- Section Header with subtle intro -->
          <div class="text-center mb-6">
            <span class="text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2 block">Curated For You</span>
            <h2 class="text-2xl font-extrabold text-slate-900 mb-2">Live Opportunities</h2>
            <p class="text-slate-500 text-sm">Apply to gigs, internships & volunteer work</p>
          </div>
          
          <!-- Opportunity Cards - Uniform Visual Weight -->
          <div class="space-y-3">
            <!-- Card 1: Frontend Internship - Highlighted but subtle -->
            <div onclick="showComingSoon('Opportunity Applications')" class="bg-white p-4 rounded-2xl shadow-md border border-slate-100 cursor-pointer active:scale-[0.99] transition-transform">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-laptop-code text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 class="font-bold text-slate-800">Frontend Micro-internship</h4>
                    <span class="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-bold">₹5K</span>
                  </div>
                  <p class="text-xs text-slate-500 mb-2">Build a landing page for a local NGO. Duration: 2 weeks.</p>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="text-slate-400"><i class="fas fa-star text-yellow-400 mr-1"></i>2.5 Credits</span>
                    <span class="text-indigo-600 font-bold">Apply →</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Card 2: Volunteer -->
            <div onclick="showComingSoon('Opportunity Applications')" class="bg-white p-4 rounded-2xl shadow-md border border-slate-100 cursor-pointer active:scale-[0.99] transition-transform">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-leaf text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 class="font-bold text-slate-800">Tree Plantation Drive</h4>
                    <span class="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Volunteer</span>
                  </div>
                  <p class="text-xs text-slate-500 mb-2">City-wide green initiative. Geotagging required.</p>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="text-slate-400"><i class="fas fa-star text-yellow-400 mr-1"></i>1.0 Credit</span>
                    <span class="text-indigo-600 font-bold">Apply →</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Card 3: Competition -->
            <div onclick="showComingSoon('Opportunity Applications')" class="bg-white p-4 rounded-2xl shadow-md border border-slate-100 cursor-pointer active:scale-[0.99] transition-transform">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-brain text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 class="font-bold text-slate-800">Inter-College Debate</h4>
                    <span class="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Compete</span>
                  </div>
                  <p class="text-xs text-slate-500 mb-2">National Policy Forum. Certificates provided.</p>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="text-slate-400"><i class="fas fa-star text-yellow-400 mr-1"></i>3.0 Credits</span>
                    <span class="text-indigo-600 font-bold">Apply →</span>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Card 4: Research -->
            <div onclick="showComingSoon('Opportunity Applications')" class="bg-white p-4 rounded-2xl shadow-md border border-slate-100 cursor-pointer active:scale-[0.99] transition-transform">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-flask text-lg"></i>
                </div>
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-1 flex-wrap">
                    <h4 class="font-bold text-slate-800">AI Research Assistant</h4>
                    <span class="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full text-[10px] font-bold">Research</span>
                  </div>
                  <p class="text-xs text-slate-500 mb-2">Joint project with IIT faculty. Remote work.</p>
                  <div class="flex items-center gap-3 text-xs">
                    <span class="text-slate-400"><i class="fas fa-star text-yellow-400 mr-1"></i>4.0 Credits</span>
                    <span class="text-indigo-600 font-bold">Apply →</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- View All CTA -->
          <button onclick="showComingSoon('Opportunity Marketplace')" class="w-full mt-5 py-3 text-center text-indigo-600 font-bold text-sm border border-indigo-200 rounded-xl bg-indigo-50/50 active:bg-indigo-100 transition-colors">
            View All Opportunities <i class="fas fa-arrow-right ml-2"></i>
          </button>
        </section>

        <!-- Peer Learning - Bold Section -->
        <section class="mx-4 mb-8 rounded-[2rem] overflow-hidden shadow-2xl">
          <div class="bg-white p-6 border-b border-slate-100">
            <h2 class="text-xl font-extrabold mb-2">Peer Learning Communities</h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              Join interest-based micro-communities that transcend your campus.
            </p>
          </div>
          
          <!-- Stats Row -->
          <div class="bg-slate-50 p-5 grid grid-cols-2 gap-3">
            <div class="bg-indigo-50 rounded-xl p-4 flex items-center gap-3 border border-indigo-100">
              <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white">
                <i class="fas fa-users"></i>
              </div>
              <div>
                <div class="font-extrabold text-lg text-slate-900">500+</div>
                <div class="text-[10px] text-slate-500 uppercase font-medium">Active Societies</div>
              </div>
            </div>
            <div class="bg-purple-50 rounded-xl p-4 flex items-center gap-3 border border-purple-100">
              <div class="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div>
                <div class="font-extrabold text-lg text-slate-900">P2P</div>
                <div class="text-[10px] text-slate-500 uppercase font-medium">Mentorship</div>
              </div>
            </div>
          </div>
          
          <!-- Community Grid - 2x2 like Desktop -->
          <div class="bg-slate-50 px-5 pb-5 grid grid-cols-2 gap-3">
            <div class="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
              <div class="text-xl font-black text-slate-900">Python</div>
              <div class="text-[10px] text-slate-400 font-bold uppercase">1.2k Members</div>
            </div>
            <div class="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
              <div class="text-xl font-black text-slate-900">FinTech</div>
              <div class="text-[10px] text-slate-400 font-bold uppercase">800 Members</div>
            </div>
            <div class="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
              <div class="text-xl font-black text-slate-900">Design</div>
              <div class="text-[10px] text-slate-400 font-bold uppercase">2.5k Members</div>
            </div>
            <div class="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
              <div class="text-xl font-black text-slate-900">Debate</div>
              <div class="text-[10px] text-slate-400 font-bold uppercase">600 Members</div>
            </div>
          </div>
        </section>

        <!-- What You Can Do - Dark Premium CTA -->
        <section class="mx-4 mb-10">
          <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-6 text-white relative overflow-hidden">
            <div class="absolute top-2 right-2 opacity-5" aria-hidden="true">
              <i class="fas fa-rocket text-8xl"></i>
            </div>
            
            <h3 class="font-extrabold text-lg mb-4 relative z-10">What You Can Do</h3>
            
            <ul class="space-y-3 mb-6 relative z-10">
              <li class="flex items-center gap-3">
                <div class="w-7 h-7 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-check text-indigo-400 text-xs"></i>
                </div>
                <span class="text-sm text-slate-300">Discover curated hackathons & scholarships</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-7 h-7 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-check text-indigo-400 text-xs"></i>
                </div>
                <span class="text-sm text-slate-300">Turn activities into ABC credits automatically</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-7 h-7 bg-indigo-500/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i class="fas fa-check text-indigo-400 text-xs"></i>
                </div>
                <span class="text-sm text-slate-300">Build your shadow curriculum beyond syllabus</span>
              </li>
            </ul>
            
            <button onclick="showComingSoon('Student App Download')" class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-900/50 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
              <i class="fas fa-download"></i>
              Download App
            </button>
          </div>
        </section>
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

