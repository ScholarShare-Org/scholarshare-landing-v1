/**
 * @fileoverview Reusable Card Components
 * Collection of card variants used across the landing page
 */

import { Component } from './Component.js';

/**
 * Feature Card - Floating cards in hero section
 */
export class FeatureCard extends Component {
    constructor(props) {
        super(props);
        // props: icon, title, description, bgClass, textClass, delay
    }

    render() {
        const { icon, title, description, bgClass = 'bg-white', textClass = 'text-slate-800', delay = 0, iconBg, iconColor } = this.props;

        return `
      <div class="${bgClass} p-6 rounded-3xl shadow-xl floating ${textClass}" style="animation-delay: ${delay}s;">
        <div class="w-12 h-12 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center mb-4 text-xl" aria-hidden="true">
          <i class="${icon}"></i>
        </div>
        <h4 class="font-bold">${title}</h4>
        <p class="text-xs ${this.props.descClass || 'text-slate-500'} mt-2">${description}</p>
      </div>
    `;
    }
}

/**
 * Stat Card - Statistics display
 */
export class StatCard extends Component {
    render() {
        const { value, label, bgClass = 'bg-white/5', borderClass = 'border-white/10' } = this.props;

        return `
      <div class="p-8 rounded-[2rem] ${bgClass} border ${borderClass}">
        <h3 class="text-indigo-400 text-3xl font-black mb-2">${value}</h3>
        <p class="text-slate-300 font-bold">${label}</p>
      </div>
    `;
    }
}

/**
 * Opportunity Card - Student opportunity feed
 */
export class OpportunityCard extends Component {
    render() {
        const { icon, iconBg, iconColor, badge, badgeBg, badgeColor, title, description, credits } = this.props;

        return `
      <div class="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm opportunity-card transition-all cursor-pointer" role="article">
        <div class="flex justify-between items-start mb-4">
          <div class="w-12 h-12 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center text-xl" aria-hidden="true">
            <i class="${icon}"></i>
          </div>
          <span class="${badgeBg} ${badgeColor} px-3 py-1 rounded-full text-xs font-bold">${badge}</span>
        </div>
        <h4 class="font-bold text-lg mb-2">${title}</h4>
        <p class="text-slate-500 text-sm mb-4">${description}</p>
        <div class="flex items-center justify-between text-xs font-bold text-slate-400">
          <span><i class="fas fa-star text-yellow-400 mr-1" aria-hidden="true"></i> ${credits} Credits</span>
          <span class="text-indigo-600">Apply Now</span>
        </div>
      </div>
    `;
    }
}

/**
 * Intelligence Feature Card - NAAC section cards
 */
export class IntelligenceCard extends Component {
    render() {
        const { icon, title, description } = this.props;

        return `
      <div class="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group" role="article">
        <div class="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-3xl shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all" aria-hidden="true">
          <i class="${icon}"></i>
        </div>
        <h3 class="text-2xl font-bold mb-4">${title}</h3>
        <p class="text-slate-600">${description}</p>
      </div>
    `;
    }
}

/**
 * Security Feature Card
 */
export class SecurityFeatureCard extends Component {
    render() {
        const { icon, title, description } = this.props;

        return `
      <div class="flex gap-6">
        <div class="w-14 h-14 rounded-2xl bg-indigo-600/20 text-indigo-400 flex-shrink-0 flex items-center justify-center text-2xl border border-indigo-400/30" aria-hidden="true">
          <i class="${icon}"></i>
        </div>
        <div>
          <h3 class="text-white font-bold text-xl mb-2">${title}</h3>
          <p class="text-slate-400">${description}</p>
        </div>
      </div>
    `;
    }
}

/**
 * Criterion Card - NAAC criterion breakdown
 */
export class CriterionCard extends Component {
    render() {
        const { criterionNumber, title, subtitle, automationRate, automationLabel, currentGap, solution, solutionItems = [] } = this.props;

        return `
      <div class="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
        <div class="bg-slate-900 text-white p-8 lg:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-black mb-4">${title}</h2>
            <p class="text-slate-400">${subtitle}</p>
          </div>
          <div class="text-center bg-indigo-600 px-8 py-4 rounded-3xl">
            <div class="text-4xl font-black">${automationRate}</div>
            <div class="text-[10px] uppercase font-bold tracking-widest">${automationLabel}</div>
          </div>
        </div>
        <div class="p-8 lg:p-12 grid md:grid-cols-2 gap-12">
          <div>
            <h4 class="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <i class="fas fa-exclamation-triangle text-amber-500" aria-hidden="true"></i> The Current Gap
            </h4>
            <p class="text-slate-500 mb-6">${currentGap}</p>
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
              NAAC now imposes penalties for data fudging. Manual systems are high-risk.
            </div>
          </div>
          <div>
            <h4 class="font-bold text-indigo-600 mb-4 flex items-center gap-2">
              <i class="fas fa-check-circle" aria-hidden="true"></i> ScholarShare Solution
            </h4>
            <ul class="space-y-3 text-slate-500 text-sm">
              ${solutionItems.map(item => `
                <li class="flex gap-2">
                  <i class="fas fa-check text-green-500 mt-1" aria-hidden="true"></i> ${item}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
    }
}

/**
 * Roadmap Step Card
 */
export class RoadmapStep extends Component {
    render() {
        const { phase, title, description, dateLabel, dateColor = 'text-indigo-600' } = this.props;

        return `
      <div class="roadmap-step">
        <div class="roadmap-node"></div>
        <div class="roadmap-content">
          <div class="${dateColor} font-black text-xs uppercase mb-2">${dateLabel}</div>
          <h4 class="text-xl font-bold mb-2">${title}</h4>
          <p class="text-sm text-slate-500">${description}</p>
        </div>
      </div>
    `;
    }
}

/**
 * Community Badge Card - Peer learning section
 */
export class CommunityBadge extends Component {
    render() {
        const { name, members } = this.props;

        return `
      <div class="bg-slate-50 p-6 rounded-3xl text-center">
        <div class="text-3xl font-black mb-1">${name}</div>
        <div class="text-slate-400 text-xs uppercase font-bold">${members} Members</div>
      </div>
    `;
    }
}
