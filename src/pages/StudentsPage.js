/**
 * @fileoverview Students Page
 * Student-focused landing with opportunities, peer learning, and APAAR integration
 * 
 * Uses unified responsive layout with mobile-first approach
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
     * Get opportunity cards for DRY rendering
     */
    get opportunityCards() {
        return [
            {
                icon: 'fa-laptop-code',
                iconBg: 'bg-indigo-50 md:bg-indigo-50',
                iconColor: 'text-indigo-600',
                title: 'Frontend Micro-internship',
                badge: '₹5,000 Stipend',
                badgeMobile: '₹5K',
                badgeClass: 'bg-green-100 text-green-700',
                desc: 'Build a landing page for a local NGO. Duration: 2 weeks.',
                credits: '2.5'
            },
            {
                icon: 'fa-leaf',
                iconBg: 'bg-purple-50',
                iconColor: 'text-purple-600',
                title: 'Urban Tree Plantation',
                titleMobile: 'Tree Plantation Drive',
                badge: 'Volunteering',
                badgeMobile: 'Volunteer',
                badgeClass: 'bg-purple-100 text-purple-700',
                desc: 'Participate in the city-wide green initiative. Geotagging required.',
                descMobile: 'City-wide green initiative. Geotagging required.',
                credits: '1.0'
            },
            {
                icon: 'fa-brain',
                iconBg: 'bg-pink-50',
                iconColor: 'text-pink-600',
                title: 'Inter-College Debate',
                badge: 'Competition',
                badgeMobile: 'Compete',
                badgeClass: 'bg-pink-100 text-pink-700',
                desc: 'Represent your institution at the National Policy Forum.',
                descMobile: 'National Policy Forum. Certificates provided.',
                credits: '3.0'
            }
        ];
    }

    /**
     * Get peer learning communities for DRY rendering
     */
    get peerCommunities() {
        return [
            { name: 'Python', members: '1.2k' },
            { name: 'FinTech', members: '800' },
            { name: 'Design', members: '2.5k' },
            { name: 'Debate', members: '600' }
        ];
    }

    render() {
        const opportunities = this.opportunityCards;
        const communities = this.peerCommunities;

        const content = `
      <div class="pt-24 md:pt-32 pb-12 md:pb-20">
        <div class="max-w-7xl mx-auto px-0 md:px-6">
          
          <!-- Hero Card -->
          <!-- Mobile Hero -->
          <div class="md:hidden mobile-fade-in overflow-hidden">
            <section class="relative pt-0 pb-6 px-5 overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-white">
              <!-- Background Blur Orbs -->
              <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-400 rounded-full blur-3xl opacity-40 pointer-events-none" aria-hidden="true"></div>
              <div class="absolute top-40 -left-32 w-48 h-48 bg-purple-400 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true"></div>
              <div class="absolute bottom-0 right-0 w-40 h-40 bg-indigo-300 rounded-full blur-3xl opacity-20 pointer-events-none" aria-hidden="true"></div>
              
              <div class="student-gradient rounded-[2rem] p-6 text-white relative overflow-hidden shadow-2xl mobile-stagger-1 mb-6">
                <div class="absolute top-2 right-2 opacity-10" aria-hidden="true">
                  <i class="fas fa-bolt text-7xl"></i>
                </div>
                
                <div class="relative z-10">
                  <span class="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border border-white/20">
                    <i class="fas fa-zap text-yellow-300"></i>
                    Gig Economy Ready
                  </span>
                  
                  <h1 class="text-[1.75rem] leading-[1.2] font-extrabold mb-4">
                    Your Portfolio is Your<br>
                    <span class="underline decoration-indigo-300 decoration-[3px] underline-offset-4 whitespace-nowrap">New Resume.</span>
                  </h1>
                  
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
              
              <!-- Personalization Quote -->
              <div class="relative text-center py-4">
                <p class="text-slate-600 text-base font-medium leading-relaxed mb-4 px-2">
                  If your social feed knows you,<br>
                  shouldn't your <span style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; filter: drop-shadow(0 0 8px rgba(139, 92, 246, 0.4));">opportunities</span> too?
                </p>
                
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
          </div>
          
          <!-- Desktop Hero Card -->
          <div class="hidden md:block student-gradient rounded-[3rem] p-12 lg:p-20 text-white mb-8 relative overflow-hidden shadow-2xl">
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

          <!-- Desktop Personalization Quote -->
          <div class="hidden md:block text-center pb-8 mb-6">
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
            <button onclick="document.getElementById('opportunity-feed').scrollIntoView({ behavior: 'smooth' })" class="animate-bounce cursor-pointer hover:text-indigo-400 transition-colors" aria-label="Scroll to opportunities">
              <i class="fas fa-chevron-down text-slate-400 hover:text-indigo-500 text-xl" aria-hidden="true"></i>
            </button>
          </div>

          <!-- Opportunity Feed -->
          <div id="opportunity-feed" class="mb-8 md:mb-20 scroll-mt-24 px-5 md:px-0">
            <!-- Mobile Header -->
            <div class="md:hidden text-center mb-6">
              <span class="text-indigo-600 font-bold text-xs uppercase tracking-wider mb-2 block">Curated For You</span>
              <h2 class="text-2xl font-extrabold text-slate-900 mb-2">Live Opportunities</h2>
              <p class="text-slate-500 text-sm">Apply to gigs, internships & volunteer work</p>
            </div>
            
            <!-- Desktop Header -->
            <div class="hidden md:flex justify-between items-end mb-8">
              <div>
                <h2 class="text-3xl font-black text-slate-900">Live Opportunity Feed</h2>
                <p class="text-slate-500">Curated specifically for your major and skills.</p>
              </div>
              <button onclick="showComingSoon('Opportunity Marketplace')" class="text-indigo-600 font-bold hover:underline">View All Gigs →</button>
            </div>
            
            <!-- Desktop Cards Grid -->
            <div class="hidden md:grid md:grid-cols-3 gap-6">
              ${opportunities.map(opp => `
                <article onclick="showComingSoon('Opportunity Applications')" class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
                  <div class="flex justify-between items-start mb-4">
                    <div class="w-12 h-12 ${opp.iconBg} ${opp.iconColor} rounded-xl flex items-center justify-center text-xl" aria-hidden="true">
                      <i class="fas ${opp.icon}"></i>
                    </div>
                    <span class="${opp.badgeClass} px-3 py-1 rounded-full text-xs font-bold">${opp.badge}</span>
                  </div>
                  <h3 class="font-bold text-lg mb-2">${opp.title}</h3>
                  <p class="text-slate-500 text-sm mb-4">${opp.desc}</p>
                  <div class="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span><i class="fas fa-star text-yellow-400 mr-1" aria-hidden="true"></i>${opp.credits} Credits</span>
                    <span class="text-indigo-600">Apply Now</span>
                  </div>
                </article>
              `).join('')}
            </div>
            
            <!-- Mobile Cards List -->
            <div class="md:hidden space-y-3">
              ${opportunities.map(opp => `
                <div onclick="showComingSoon('Opportunity Applications')" class="bg-white p-4 rounded-2xl shadow-md border border-slate-100 cursor-pointer active:scale-[0.99] transition-transform">
                  <div class="flex items-start gap-4">
                    <div class="w-12 h-12 ${opp.iconBg} ${opp.iconColor} rounded-xl flex items-center justify-center flex-shrink-0">
                      <i class="fas ${opp.icon} text-lg"></i>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="flex items-center gap-2 mb-1 flex-wrap">
                        <h4 class="font-bold text-slate-800">${opp.titleMobile || opp.title}</h4>
                        <span class="${opp.badgeClass} px-2 py-0.5 rounded-full text-[10px] font-bold">${opp.badgeMobile || opp.badge}</span>
                      </div>
                      <p class="text-xs text-slate-500 mb-2">${opp.descMobile || opp.desc}</p>
                      <div class="flex items-center gap-3 text-xs">
                        <span class="text-slate-400"><i class="fas fa-star text-yellow-400 mr-1"></i>${opp.credits} Credit${opp.credits === '1.0' ? '' : 's'}</span>
                        <span class="text-indigo-600 font-bold">Apply →</span>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
              
              <!-- Additional Mobile Card: Research -->
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
              
              <!-- View All CTA -->
              <button onclick="showComingSoon('Opportunity Marketplace')" class="w-full mt-2 py-3 text-center text-indigo-600 font-bold text-sm border border-indigo-200 rounded-xl bg-indigo-50/50 active:bg-indigo-100 transition-colors">
                View All Opportunities <i class="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
          </div>

          <!-- Peer Learning Section -->
          <!-- Mobile Version -->
          <section class="md:hidden mx-4 mb-8 rounded-[2rem] overflow-hidden shadow-2xl">
            <div class="bg-white p-6 border-b border-slate-100">
              <h2 class="text-xl font-extrabold mb-2">Peer Learning Communities</h2>
              <p class="text-slate-600 text-sm leading-relaxed">
                Join interest-based micro-communities that transcend your campus.
              </p>
            </div>
            
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
            
            <div class="bg-slate-50 px-5 pb-5 grid grid-cols-2 gap-3">
              ${communities.map(comm => `
                <div class="bg-white p-4 rounded-2xl text-center shadow-sm border border-slate-100">
                  <div class="text-xl font-black text-slate-900">${comm.name}</div>
                  <div class="text-[10px] text-slate-400 font-bold uppercase">${comm.members} Members</div>
                </div>
              `).join('')}
            </div>
          </section>
          
          <!-- Desktop Version -->
          <div class="hidden md:block bg-white rounded-[3rem] p-12 lg:p-20 shadow-xl border border-slate-100 mb-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
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
                ${communities.map(comm => `
                  <div class="bg-slate-50 p-6 rounded-3xl text-center">
                    <div class="text-3xl font-black mb-1">${comm.name}</div>
                    <div class="text-slate-400 text-xs uppercase font-bold">${comm.members} Members</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          
          <!-- Mobile Download CTA -->
          <section class="md:hidden mx-4 mb-10">
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
      </div>
    `;

        return this.renderPage(content);
    }
}
