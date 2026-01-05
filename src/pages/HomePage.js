/**
 * @fileoverview Home Page
 * Main landing page with hero, dual split, intelligence section, and pilot CTA
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

    render() {
        const hero = new HeroSection();
        const dualSplit = new DualSplitSection();
        const intelligence = new IntelligenceSection();
        const pilotCTA = new PilotCTASection();

        const content = `
      ${hero.render()}
      ${dualSplit.render()}
      ${intelligence.render()}
      ${pilotCTA.render()}
    `;

        return this.renderPage(content);
    }
}
