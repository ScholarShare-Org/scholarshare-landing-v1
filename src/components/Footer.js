/**
 * @fileoverview Footer Component
 * Contains company info, navigation links, social links, and legal links
 */

import { Component } from './Component.js';

export class Footer extends Component {
  constructor(props = {}) {
    super(props);
  }

  render() {
    return `
      <footer class="bg-slate-900 text-slate-400 pt-20 pb-10 border-t border-white/5" role="contentinfo">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          
          <!-- Company Info -->
          <div class="col-span-2 lg:col-span-2">
            <div class="flex items-center gap-2 mb-6 cursor-pointer" onclick="navigateTo('home')" role="button" aria-label="Go to home page">
              <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white" aria-hidden="true">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <span class="text-2xl font-extrabold tracking-tight text-white">ScholarShare</span>
            </div>
            <p class="max-w-xs mb-8 text-slate-500 leading-relaxed">
              India's first holistic opportunity and institutional intelligence system. Enabling growth, ensuring compliance.
            </p>
            <!-- Social Links -->
            <div class="flex gap-4" aria-label="Social media links">
              <a href="https://linkedin.com/company/scholarshare" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all" 
                 aria-label="Follow us on LinkedIn">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
              <a href="https://twitter.com/ScholarShareIN" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all" 
                 aria-label="Follow us on Twitter">
                <i class="fab fa-twitter" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com/scholarshare.in" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all" 
                 aria-label="Follow us on Instagram">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <!-- Explore Links -->
          <nav aria-label="Explore navigation">
            <h4 class="text-white font-bold mb-6">Explore</h4>
            <ul class="space-y-4 text-sm font-medium">
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('students')" class="hover:text-indigo-400 transition-colors">
                  For Students
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('institutions')" class="hover:text-indigo-400 transition-colors">
                  For Colleges
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('naac')" class="hover:text-indigo-400 transition-colors">
                  NAAC Readiness
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('about')" class="hover:text-indigo-400 transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('compliance')" class="hover:text-indigo-400 transition-colors">
                  Compliance
                </a>
              </li>
            </ul>
          </nav>

          <!-- Product Links -->
          <nav aria-label="Product navigation">
            <h4 class="text-white font-bold mb-6">Product</h4>
            <ul class="space-y-4 text-sm font-medium">
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('joinpilot')" class="hover:text-indigo-400 transition-colors font-bold text-indigo-400">
                  Join Pilot
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('apaar')" class="hover:text-indigo-400 transition-colors">
                  APAAR Sync
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('security')" class="hover:text-indigo-400 transition-colors">
                  Security
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('support')" class="hover:text-indigo-400 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </nav>

          <!-- Legal Links -->
          <nav aria-label="Legal navigation">
            <h4 class="text-white font-bold mb-6">Legal</h4>
            <ul class="space-y-4 text-sm font-medium">
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('privacy')" class="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" onclick="navigateTo('terms')" class="hover:text-indigo-400 transition-colors">
                  Terms of Use
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <!-- Bottom Bar -->
        <div class="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-slate-500 font-bold">
          <p>&copy; 2026 ScholarShare Platform. Strategic Middle-ware for NEP 2025.</p>
          <div class="flex gap-6">
            <span>South & West India Focus</span>
            <span>Pilot Version 1.0</span>
          </div>
        </div>
      </footer>
    `;
  }
}

// Create singleton instance
let footerInstance = null;

export function getFooter(props = {}) {
  if (!footerInstance) {
    footerInstance = new Footer(props);
  }
  return footerInstance;
}
