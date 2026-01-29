/**
 * @fileoverview Home Page
 * Main landing page with hero, dual split, intelligence section, and pilot CTA
 * 
 * Uses unified responsive layout with mobile-first approach
 */

import { Page } from './Page.js';
import { HeroSection, DualSplitSection, IntelligenceSection, PilotCTASection } from '../components/Sections.js';

export class HomePage extends Page {
    constructor(props = {}) {
        super({
            ...props,
            pageId: 'home',
            title: 'Home | ScholarShare',
            bgClass: 'bg-slate-50'
        });
    }

    /**
     * Get feature cards data for mobile grid
     */
    get featureCards() {
        return [
            { icon: 'fa-check-circle', iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Verified Gigs', desc: 'ABC/APAAR credits', bgClass: 'bg-white', delay: '' },
            { icon: 'fa-chart-line', iconBg: 'bg-white/10', iconColor: 'text-white', title: 'NAAC IQAC', desc: 'Real-time Reports', bgClass: 'bg-slate-900 text-white mt-6', delay: '0.3s' },
            { icon: 'fa-robot', iconBg: 'bg-white/20', iconColor: 'text-white', title: 'AI Feed', desc: 'Career discovery', bgClass: 'bg-indigo-600 text-white', delay: '0.15s' },
            { icon: 'fa-university', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Campus TV', desc: 'Talent telecasting', bgClass: 'bg-white mt-6 border border-slate-100', delay: '0.45s' }
        ];
    }

    /**
     * Get intelligence icons for mobile section
     */
    get intelligenceItems() {
        return [
            { icon: 'fa-file-invoice', label: 'AQAR Auto' },
            { icon: 'fa-users-cog', label: 'Dashboard' },
            { icon: 'fa-arrow-right', label: 'See All', highlighted: true }
        ];
    }

    render() {
        const cards = this.featureCards;
        const intelItems = this.intelligenceItems;

        // Desktop uses component-based sections
        const hero = new HeroSection();
        const dualSplit = new DualSplitSection();
        const intelligence = new IntelligenceSection();
        const pilotCTA = new PilotCTASection();

        const content = `
            <!-- Desktop Layout (hidden on mobile) -->
            <div class="hidden md:block">
                ${hero.render()}
                ${dualSplit.render()}
                ${intelligence.render()}
                ${pilotCTA.render()}
            </div>
            
            <!-- Mobile Layout (hidden on desktop) -->
            <div class="md:hidden mobile-fade-in overflow-hidden">
                <!-- Hero Section - Immersive with Depth -->
                <section class="relative pt-24 pb-12 px-5 overflow-hidden">
                    <!-- Background Blur Orbs for Depth -->
                    <div class="absolute -top-20 -right-20 w-64 h-64 bg-indigo-300 rounded-full blur-3xl opacity-40 pointer-events-none" aria-hidden="true"></div>
                    <div class="absolute top-40 -left-32 w-48 h-48 bg-purple-300 rounded-full blur-3xl opacity-30 pointer-events-none" aria-hidden="true"></div>
                    
                    <div class="relative z-10">
                        <!-- Premium Badge with Glow -->
                        <div class="flex justify-center mb-6 mobile-stagger-1">
                            <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs uppercase tracking-widest shadow-sm">
                                <i class="fas fa-bolt text-indigo-500"></i>
                                Post-NEP 2025 Ready
                            </span>
                        </div>
                        
                        <!-- Hero Title - Premium Typography -->
                        <h1 class="text-[2.5rem] leading-[1.1] font-extrabold text-center mb-5 mobile-stagger-2">
                            Where <span class="gradient-text">Ambition</span> Meets<br>
                            <span class="underline decoration-indigo-500 decoration-[3px] underline-offset-4">Accreditation</span>.
                        </h1>
                        
                        <!-- Subtitle -->
                        <p class="text-slate-600 text-center text-base leading-relaxed mb-8 max-w-sm mx-auto mobile-stagger-3">
                            The holistic opportunity engine for students. The essential intelligence middleware for institutions.
                        </p>
                        
                        <!-- CTA Buttons - Premium Styling -->
                        <div class="flex flex-col gap-3 mb-10 mobile-stagger-4">
                            <button onclick="showComingSoon('Student App')" class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-base shadow-xl shadow-indigo-200/50 active:scale-[0.98] transition-transform">
                                Get Your Opportunities
                            </button>
                            <button onclick="navigateTo('joinpilot')" class="w-full bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-2xl font-bold text-base active:scale-[0.98] transition-transform">
                                Request Demo
                            </button>
                        </div>
                        
                        <!-- Stats Row - Refined -->
                        <div class="flex justify-center items-center gap-6 mb-8 mobile-stagger-5">
                            <div class="text-center">
                                <div class="text-2xl font-extrabold text-slate-900">10+</div>
                                <div class="text-xs text-slate-500 font-medium">Pilot Colleges</div>
                            </div>
                            <div class="w-px h-10 bg-slate-200" aria-hidden="true"></div>
                            <div class="text-center">
                                <div class="text-2xl font-extrabold text-slate-900">200+</div>
                                <div class="text-xs text-slate-500 font-medium">Weekly Ops</div>
                            </div>
                            <div class="w-px h-10 bg-slate-200" aria-hidden="true"></div>
                            <div class="text-center">
                                <div class="text-2xl font-extrabold text-slate-900">₹0.60</div>
                                <div class="text-xs text-slate-500 font-medium">Starting</div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Floating Feature Cards - Asymmetric Grid like Desktop -->
                <section class="px-5 pb-10 relative">
                    <div class="absolute bottom-0 right-0 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40 pointer-events-none" aria-hidden="true"></div>
                    
                    <div class="grid grid-cols-2 gap-3 relative z-10">
                        ${cards.map((card, i) => `
                            <div class="${card.bgClass} p-5 rounded-3xl shadow-xl floating" ${card.delay ? `style="animation-delay: ${card.delay};"` : ''}>
                                <div class="w-11 h-11 ${card.iconBg} ${card.iconColor} rounded-xl flex items-center justify-center mb-3 text-lg">
                                    <i class="fas ${card.icon}"></i>
                                </div>
                                <h4 class="font-bold text-sm ${card.bgClass.includes('text-white') ? '' : 'text-slate-800'}">${card.title}</h4>
                                <p class="text-xs ${card.bgClass.includes('text-white') ? 'text-white/60' : 'text-slate-500'} mt-1">${card.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Dual Split Section - Bold Like Desktop -->
                <section class="mx-4 mb-10 rounded-[2rem] overflow-hidden shadow-2xl">
                    <!-- Students Side -->
                    <div class="student-gradient p-7 text-white relative">
                        <div class="absolute top-3 right-3 opacity-10" aria-hidden="true">
                            <i class="fas fa-rocket text-6xl"></i>
                        </div>
                        <h3 class="text-xl font-extrabold mb-4 relative z-10">For Opportunity Seekers</h3>
                        <ul class="space-y-3 mb-5 relative z-10">
                            <li class="flex items-start gap-3">
                                <div class="w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                                    <i class="fas fa-check text-[8px]"></i>
                                </div>
                                <p class="text-sm text-indigo-100">Curated hackathons, scholarships, and gigs that actually pay</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-5 h-5 rounded-full bg-white/20 flex-shrink-0 flex items-center justify-center mt-0.5">
                                    <i class="fas fa-check text-[8px]"></i>
                                </div>
                                <p class="text-sm text-indigo-100">Turn activities into ABC credits automatically</p>
                            </li>
                        </ul>
                        <button onclick="showComingSoon('Student App')" class="w-full bg-white text-indigo-700 py-3 rounded-xl font-bold text-sm active:scale-[0.98] transition-transform">
                            Download App →
                        </button>
                    </div>
                    
                    <!-- Institutions Side -->
                    <div class="college-gradient p-7 text-white relative border-t border-white/10">
                        <div class="absolute top-3 right-3 opacity-10" aria-hidden="true">
                            <i class="fas fa-shield-alt text-6xl"></i>
                        </div>
                        <h3 class="text-xl font-extrabold mb-4 relative z-10">For Intelligence Centric</h3>
                        <ul class="space-y-3 mb-5 relative z-10">
                            <li class="flex items-start gap-3">
                                <div class="w-5 h-5 rounded-full bg-indigo-500/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                                    <i class="fas fa-check text-[8px]"></i>
                                </div>
                                <p class="text-sm text-slate-300">Automate NAAC Criterion 3, 5, 7 documentation</p>
                            </li>
                            <li class="flex items-start gap-3">
                                <div class="w-5 h-5 rounded-full bg-indigo-500/40 flex-shrink-0 flex items-center justify-center mt-0.5">
                                    <i class="fas fa-check text-[8px]"></i>
                                </div>
                                <p class="text-sm text-slate-300">Telecast achievements across digital signage</p>
                            </li>
                        </ul>
                        <button onclick="navigateTo('institutions')" class="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm border border-indigo-400 active:scale-[0.98] transition-transform">
                            Intel Portal →
                        </button>
                    </div>
                </section>

                <!-- Intelligence Section - Clean Cards -->
                <section class="px-5 pb-10">
                    <h2 class="text-2xl font-extrabold text-center mb-2">Real-time Vibrancy</h2>
                    <p class="text-slate-600 text-sm text-center mb-6 max-w-xs mx-auto">
                        Stop chasing certificates. Get audit-ready documentation automatically.
                    </p>
                    
                    <div class="grid grid-cols-3 gap-3">
                        ${intelItems.map(item => `
                            <div class="bg-white p-4 rounded-2xl shadow-md border border-slate-100 text-center" ${item.highlighted ? 'onclick="navigateTo(\'naac\')"' : ''}>
                                <div class="w-10 h-10 ${item.highlighted ? 'bg-indigo-600 text-white' : 'bg-slate-50 text-indigo-600'} rounded-xl flex items-center justify-center mx-auto mb-2 text-lg">
                                    <i class="fas ${item.icon}"></i>
                                </div>
                                <div class="text-xs font-bold ${item.highlighted ? 'text-indigo-600' : 'text-slate-700'}">${item.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- Pilot CTA - Glass Effect -->
                <section class="mx-4 mb-10 relative overflow-hidden">
                    <div class="absolute inset-0 student-gradient opacity-10 rounded-[2rem]" aria-hidden="true"></div>
                    <div class="glass p-6 rounded-[2rem] text-center border border-white/40 relative">
                        <h2 class="text-xl font-black mb-3">
                            Join the First <span class="text-indigo-600">10 Pilots</span>
                        </h2>
                        <p class="text-slate-600 text-sm mb-5">
                            Limited slots for Tier 1-2 colleges. Scale vibrancy at ₹0.60/student/day.
                        </p>
                        <button onclick="navigateTo('joinpilot')" class="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200/50 active:scale-[0.98] transition-transform">
                            Join the Revolution
                        </button>
                    </div>
                </section>
            </div>
        `;

        return this.renderPage(content);
    }
}
