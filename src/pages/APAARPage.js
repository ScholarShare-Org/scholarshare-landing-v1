/**
 * @fileoverview APAAR Integration Page
 * Deep dive into APAAR and ABC credit mapping features
 */

import { Page } from './Page.js';

export class APAARPage extends Page {
  constructor(props = {}) {
    super({
      ...props,
      pageId: 'apaar',
      title: 'APAAR & ABC Integration | ScholarShare',
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
          <div class="mb-16 flex flex-col md:flex-row gap-12 items-center">
            <div class="md:w-1/2">
              <span class="text-indigo-600 font-black uppercase tracking-widest text-sm">One Nation, One Student ID</span>
              <h1 class="text-5xl lg:text-7xl font-black mt-4 mb-8">APAAR & ABC <br><span class="text-indigo-400">Deep Sync.</span></h1>
              <p class="text-xl text-slate-600 leading-relaxed mb-8">
                The <strong>Automated Permanent Academic Account Registry (APAAR)</strong> is the Aadhaar of education. ScholarShare acts as the essential middleware that populates the <strong>Academic Bank of Credits (ABC)</strong> with verified non-academic achievements.
              </p>
              <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
                <h4 class="font-bold mb-2">NCrF Compliance</h4>
                <p class="text-sm text-slate-500">The National Credit Framework (NCrF) has obliterated the wall between "curricular" and "extra-curricular." We map sports, yoga, and social service directly to credit-bearing activities.</p>
              </div>
            </div>
            <div class="md:w-1/2 relative">
              <div class="bg-indigo-600 rounded-[3rem] p-12 text-white shadow-2xl relative z-10">
                <div class="flex items-center gap-4 mb-8">
                  <div class="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-2xl" aria-hidden="true">
                    <i class="fas fa-id-card"></i>
                  </div>
                  <div>
                    <div class="text-2xl font-black tracking-tighter">APAAR REGISTER</div>
                    <div class="text-xs font-bold opacity-70">12-DIGIT LIFELONG ID</div>
                  </div>
                </div>
                <div class="space-y-6">
                  <div class="p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div class="text-xs opacity-60 uppercase font-bold mb-1">Academic Year</div>
                    <div class="text-lg font-bold">2025-26 Season</div>
                  </div>
                  <div class="p-6 bg-white/10 rounded-2xl border border-white/20">
                    <div class="text-xs opacity-60 uppercase font-bold mb-1">Total Credits Earned</div>
                    <div class="text-3xl font-black">24.5 <span class="text-sm font-normal">verified</span></div>
                  </div>
                  <div class="p-4 bg-green-500/30 rounded-xl text-center font-bold text-sm">
                    Verified ABC Push Completed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render the mobile-optimized layout (experience-first design)
   */
  renderMobileLayout() {
    return `
      <div class="pt-16 pb-28 mobile-fade-in">
        <!-- Mobile Hero -->
        <div class="px-4 mb-6 text-center">
          <span class="mobile-feature-pill mb-3 mobile-stagger-1">
            <i class="fas fa-id-card"></i> One Nation, One ID
          </span>
          <h1 class="mobile-display-title mb-2 mobile-stagger-2">APAAR & ABC <span class="text-indigo-600">Sync</span></h1>
          <p class="text-slate-500 text-sm mobile-stagger-3">The Aadhaar of education meets verified achievements.</p>
        </div>

        <!-- APAAR Register Card -->
        <div class="px-4 mb-6">
          <div class="bg-indigo-600 rounded-2xl p-5 text-white mobile-hero-glow mobile-stagger-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <i class="fas fa-id-card"></i>
              </div>
              <div>
                <div class="font-bold text-sm">APAAR REGISTER</div>
                <div class="text-xs opacity-70">12-Digit Lifelong ID</div>
              </div>
            </div>
            <div class="mobile-split-row mb-3">
              <div class="bg-white/10 rounded-xl p-3">
                <div class="text-[10px] opacity-60 uppercase font-bold">Year</div>
                <div class="font-bold text-sm">2025-26</div>
              </div>
              <div class="bg-white/10 rounded-xl p-3">
                <div class="text-[10px] opacity-60 uppercase font-bold">Credits</div>
                <div class="font-bold text-lg">24.5</div>
              </div>
            </div>
            <div class="bg-green-500/30 rounded-xl p-3 text-center text-sm font-bold">
              ✓ ABC Push Completed
            </div>
          </div>
        </div>

        <!-- NCrF Compliance -->
        <div class="px-4 mb-4">
          <div class="mobile-card mobile-touch-active">
            <h3 class="font-bold text-sm mb-2 text-slate-900">NCrF Compliance</h3>
            <p class="text-xs text-slate-600">The National Credit Framework maps sports, yoga, and social service directly to credit-bearing activities.</p>
          </div>
        </div>
      </div>
      
      <!-- Floating CTA -->
      <div class="mobile-floating-cta">
        <button onclick="navigateTo('students')" class="mobile-btn-primary flex items-center justify-center gap-2">
          <span>Learn More</span>
          <i class="fas fa-arrow-right"></i>
        </button>
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
