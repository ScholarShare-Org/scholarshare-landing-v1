/**
 * @fileoverview Navigation Bar Component
 * Fixed navigation with scroll effects, responsive design, and SPA routing integration
 */

import { Component } from './Component.js';

export class Navbar extends Component {
  constructor(props = {}) {
    super(props);
    this.state = {
      isScrolled: false,
      currentRoute: props.currentRoute || 'home'
    };
  }

  afterRender() {
    // Set up scroll listener
    this.handleScroll = this.handleScroll.bind(this);
    window.addEventListener('scroll', this.handleScroll);
  }

  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== this.state.isScrolled) {
      this.updateScrollState(isScrolled);
    }
  }

  updateScrollState(isScrolled) {
    const nav = document.getElementById('navbar');
    if (!nav) return;

    if (isScrolled) {
      nav.classList.add('nav-scrolled', 'py-2');
      nav.classList.remove('py-4');
    } else {
      nav.classList.remove('nav-scrolled', 'py-2');
      nav.classList.add('py-4');
    }
    this.state.isScrolled = isScrolled;
  }

  setActiveRoute(routeId) {
    this.state.currentRoute = routeId;
    this.updateActiveLink();
  }

  updateActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      const linkRoute = link.getAttribute('data-route');
      if (linkRoute === this.state.currentRoute) {
        link.classList.add('text-indigo-600', 'font-bold');
      } else {
        link.classList.remove('text-indigo-600', 'font-bold');
      }
    });
  }

  render() {
    return `
      <nav id="navbar" class="fixed w-full z-50 transition-all duration-300 py-4 glass" role="navigation" aria-label="Main navigation">
        <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <!-- Logo -->
          <div class="flex items-center gap-2 cursor-pointer" onclick="navigateTo('home')" role="button" aria-label="Go to home page" tabindex="0">
            <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg" aria-hidden="true">
              <i class="fas fa-graduation-cap"></i>
            </div>
            <span class="text-2xl font-extrabold tracking-tight text-slate-900">
              Scholar<span class="text-indigo-600">Share</span>
            </span>
          </div>
          
          <!-- Desktop Navigation Links -->
          <div class="hidden lg:flex items-center gap-8 font-medium text-slate-600">
            <a href="javascript:void(0)" 
               onclick="navigateTo('students')" 
               data-route="students"
               class="nav-link hover:text-indigo-600 transition-colors"
               aria-label="View student opportunities">
              Students
            </a>
            <a href="javascript:void(0)" 
               onclick="navigateTo('institutions')" 
               data-route="institutions"
               class="nav-link hover:text-indigo-600 transition-colors"
               aria-label="View institutional solutions">
              Institutions
            </a>
            <a href="javascript:void(0)" 
               onclick="navigateTo('naac')" 
               data-route="naac"
               class="nav-link hover:text-indigo-600 transition-colors"
               aria-label="View NAAC readiness features">
              NAAC Readiness
            </a>
            <a href="javascript:void(0)" 
               onclick="navigateTo('about')" 
               data-route="about"
               class="nav-link hover:text-indigo-600 transition-colors"
               aria-label="Learn about ScholarShare">
              About
            </a>
          </div>

          <!-- CTA Button + Mobile Menu Toggle -->
          <div class="flex items-center gap-4">
            <!-- Mobile Menu Button -->
            <button 
              id="mobile-menu-btn"
              class="lg:hidden w-10 h-10 flex items-center justify-center text-slate-600 hover:text-indigo-600 transition-colors"
              onclick="toggleMobileMenu()"
              aria-label="Toggle mobile menu"
              aria-expanded="false"
              aria-controls="mobile-menu">
              <i class="fas fa-bars text-xl" id="menu-icon"></i>
            </button>
            
            <!-- Desktop CTA -->
            <button 
              onclick="navigateTo('joinpilot')" 
              class="hidden sm:block bg-indigo-600 text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-indigo-700 transition-all transform hover:scale-105 active:scale-95"
              aria-label="Join the pilot program">
              Join the Pilot
            </button>
          </div>
        </div>
        
        <!-- Mobile Dropdown Menu - Simple dropdown below navbar -->
        <div id="mobile-menu" class="lg:hidden hidden absolute left-0 right-0 top-full bg-white shadow-xl border-t border-slate-100">
          <div class="flex flex-col p-4">
            <a href="javascript:void(0)" 
               onclick="navigateTo('students'); toggleMobileMenu();" 
               class="nav-link font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg transition-colors">
              Students
            </a>
            <a href="javascript:void(0)" 
               onclick="navigateTo('institutions'); toggleMobileMenu();" 
               class="nav-link font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg transition-colors">
              Institutions
            </a>
            <a href="javascript:void(0)" 
               onclick="navigateTo('naac'); toggleMobileMenu();" 
               class="nav-link font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg transition-colors">
              NAAC Readiness
            </a>
            <a href="javascript:void(0)" 
               onclick="navigateTo('about'); toggleMobileMenu();" 
               class="nav-link font-medium text-slate-700 hover:text-indigo-600 hover:bg-indigo-50 py-3 px-4 rounded-lg transition-colors">
              About
            </a>
            <div class="pt-3 mt-2 border-t border-slate-100">
              <button 
                onclick="navigateTo('joinpilot'); toggleMobileMenu();" 
                class="w-full bg-indigo-600 text-white px-4 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all">
                Join the Pilot
              </button>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

// Create singleton instance
let navbarInstance = null;

export function getNavbar(props = {}) {
  if (!navbarInstance) {
    navbarInstance = new Navbar(props);
  }
  return navbarInstance;
}
