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

    render() {
        const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-7xl mx-auto px-6">
          <!-- Header Card -->
          <div class="student-gradient rounded-[3rem] p-12 lg:p-20 text-white mb-16 relative overflow-hidden shadow-2xl">
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

          <!-- Opportunity Feed Mockup -->
          <div class="mb-20">
            <div class="flex justify-between items-end mb-8">
              <div>
                <h2 class="text-3xl font-black text-slate-900">Live Opportunity Feed</h2>
                <p class="text-slate-500">Curated specifically for your major and skills.</p>
              </div>
              <button class="text-indigo-600 font-bold hover:underline">View All Gigs →</button>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <!-- Card 1 -->
              <article class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
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
              <article class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
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
              <article class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer">
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

        return this.renderPage(content);
    }
}
