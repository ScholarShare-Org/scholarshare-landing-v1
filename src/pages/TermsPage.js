/**
 * @fileoverview Terms of Use Page
 * Comprehensive legal terms of use content
 * 
 * Uses unified responsive layout with mobile-first approach
 */

import { Page } from './Page.js';

export class TermsPage extends Page {
  constructor(props = {}) {
    super({
      ...props,
      pageId: 'terms',
      title: 'Terms & Conditions | ScholarShare',
      bgClass: 'bg-slate-50'
    });
  }

  /**
   * Get terms sections data for DRY rendering
   */
  get termsSections() {
    return [
      {
        id: 1,
        title: 'Acceptance of Terms',
        content: `
          <p class="mb-4">By downloading, installing, or using ScholarShare ("the App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree with any of these Terms, you must not use the App.</p>
          <p>These Terms constitute a legally binding agreement between you ("User," "you") and ScholarShare ("we," "us," "our"). We reserve the right to modify these Terms at any time. Continued use of the App after changes constitutes acceptance of the modified Terms.</p>
        `
      },
      {
        id: 2,
        title: 'Description of Service',
        content: `
          <p class="mb-4">ScholarShare is an educational platform that aggregates scholarship, internship, fellowship, hackathon, and other academic opportunity listings from publicly available sources across India.</p>
          <p class="mb-2">The App provides:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Aggregated opportunity listings from public sources</li>
            <li>Personalized recommendations based on user preferences</li>
            <li>Eligibility checking tools (experimental)</li>
            <li>Opportunity saving and tracking features</li>
          </ul>
          <p>ScholarShare does NOT directly provide scholarships, grants, or financial aid. We are an information aggregator and discovery platform.</p>
        `
      },
      {
        id: 3,
        title: 'User Accounts',
        content: `
          <p class="mb-2">To use certain features, you must create an account. You agree to:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the security of your password and account</li>
            <li>Promptly notify us of any unauthorized access</li>
            <li>Accept responsibility for all activities under your account</li>
          </ul>
          <p class="mb-4">You must be at least 13 years old to create an account. If you are under 18, you represent that you have parental or guardian consent to use the App.</p>
          <p>We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        `
      },
      {
        id: 4,
        title: 'User Content & Conduct',
        content: `
          <p class="mb-2">You agree NOT to:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Use the App for any unlawful purpose</li>
            <li>Submit false, misleading, or fraudulent information</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Scrape, crawl, or harvest data from the App</li>
            <li>Interfere with or disrupt the App's operation</li>
            <li>Impersonate another person or entity</li>
            <li>Use automated tools to access the App without permission</li>
          </ul>
          <p>Any content you submit (profile information, preferences) remains your property, but you grant us a non-exclusive license to use it for providing and improving our services.</p>
        `
      },
      {
        id: 5,
        title: 'Intellectual Property',
        content: `
          <p class="mb-4">The App, including its design, logos, code, and original content, is owned by ScholarShare and protected by intellectual property laws.</p>
          <p class="mb-4">Opportunity listings aggregated by ScholarShare are sourced from publicly available information. We attribute sources where possible and do not claim ownership of third-party content.</p>
          <p>You may not reproduce, distribute, modify, or create derivative works of the App without our prior written consent.</p>
        `
      },
      {
        id: 6,
        title: 'Disclaimer of Warranties',
        content: `
          <p class="mb-4 font-semibold uppercase">The App is provided "as is" and "as available" without warranties of any kind, express or implied.</p>
          <p class="mb-2">We do not guarantee:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>The accuracy, completeness, or timeliness of opportunity listings</li>
            <li>That eligibility results are definitive or error-free</li>
            <li>Uninterrupted or error-free operation of the App</li>
            <li>That any particular scholarship or opportunity will be available</li>
          </ul>
          <p>Users should always verify opportunity details and eligibility criteria directly with the issuing organization.</p>
        `
      },
      {
        id: 7,
        title: 'Limitation of Liability',
        content: `
          <p class="mb-2">To the maximum extent permitted by applicable law, ScholarShare shall not be liable for:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Any indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, data, or opportunities</li>
            <li>Damages arising from reliance on information in the App</li>
            <li>Damages exceeding the amount you paid to use the App (if any)</li>
          </ul>
          <p>This limitation applies regardless of the legal theory (contract, tort, negligence, or otherwise).</p>
        `
      },
      {
        id: 8,
        title: 'Third-Party Links & Services',
        content: `
          <p class="mb-2">The App may contain links to third-party websites, scholarship portals, and application forms. We are not responsible for:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>The content, accuracy, or practices of third-party sites</li>
            <li>Any transactions between you and third-party providers</li>
            <li>Privacy practices of third-party services</li>
          </ul>
          <p>Access to third-party content is at your own risk. We encourage you to review the terms and privacy policies of any third-party service.</p>
        `
      },
      {
        id: 9,
        title: 'Termination',
        content: `
          <p class="mb-4">We may suspend or terminate your access to the App at any time, with or without cause, and with or without notice.</p>
          <p class="mb-2">Upon termination:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Your right to use the App ceases immediately</li>
            <li>We may delete your account data in accordance with our Privacy Policy</li>
            <li>Provisions that by their nature should survive termination will continue to apply</li>
          </ul>
          <p>You may delete your account at any time by contacting us at support@scholarshare.in.</p>
        `
      },
      {
        id: 10,
        title: 'Governing Law',
        content: `
          <p class="mb-4">These Terms are governed by and construed in accordance with the laws of India, specifically the Information Technology Act 2000, the Indian Contract Act 1872, and other applicable regulations.</p>
          <p class="mb-4">Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.</p>
          <p>If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.</p>
        `
      }
    ];
  }

  render() {
    const sections = this.termsSections;

    const content = `
      <div class="pt-20 md:pt-32 pb-8 md:pb-20">
        <div class="max-w-4xl mx-auto px-4 md:px-6">
          
          <!-- Header -->
          <div class="mb-6 md:mb-8">
            <!-- Mobile Header -->
            <h1 class="mobile-hero-title md:hidden mb-2">Terms & Conditions</h1>
            <!-- Desktop Header -->
            <h1 class="hidden md:block text-5xl font-black mb-4">Terms & Conditions</h1>
            
            <p class="text-slate-400 md:text-slate-500 text-xs md:text-base">Last updated: March 2026</p>
          </div>
          
          <!-- Intro -->
          <!-- Mobile Intro -->
          <p class="md:hidden text-slate-700 text-sm leading-relaxed mb-4">
            Please read these terms carefully before using ScholarShare. By using the App, you agree to these terms.
          </p>
          <!-- Desktop Intro -->
          <div class="hidden md:block prose prose-lg text-slate-600 mb-8">
            <p class="text-lg font-medium text-slate-700">
              Please read these terms carefully before using ScholarShare. By using the App, you agree to these terms.
            </p>
          </div>
          
          <!-- Sections -->
          <!-- Mobile Sections -->
          <div class="md:hidden space-y-4">
            ${sections.map(section => `
              <div class="mobile-card">
                <h2 class="font-bold text-base text-slate-900 mb-2">${section.id}. ${section.title}</h2>
                <div class="text-xs text-slate-600">
                  ${section.content}
                </div>
              </div>
            `).join('')}
            
            <!-- Contact Legal -->
            <div class="bg-indigo-50 rounded-xl p-4">
              <h3 class="font-bold text-sm text-slate-900 mb-2">Questions About These Terms?</h3>
              <p class="text-xs text-slate-600 mb-2">If you have any questions about these Terms and Conditions, please contact us:</p>
              <a href="mailto:support@scholarshare.in" class="text-indigo-600 text-sm font-medium">
                support@scholarshare.in
              </a>
              <div class="mt-4 pt-4 border-t border-indigo-100 text-[10px] text-slate-500">
                Effective Date: March 2026<br/>
                Last Updated: March 2026<br/><br/>
                ScholarShare is operated from India and these Terms are subject to Indian law.
              </div>
            </div>
          </div>
          
          <!-- Desktop Sections -->
          <div class="hidden md:block prose prose-lg text-slate-600 space-y-8">
            ${sections.map(section => `
              <section>
                <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">${section.id}. ${section.title}</h2>
                <div class="text-slate-600">
                  ${section.content}
                </div>
              </section>
            `).join('')}
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Questions About These Terms?</h2>
              <div class="bg-slate-100 p-6 rounded-2xl">
                <p class="text-slate-700 mb-2">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <p>Email: <a href="mailto:support@scholarshare.in" class="text-indigo-600 hover:underline">support@scholarshare.in</a></p>
                <div class="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-500">
                  Effective Date: March 2026<br/>
                  Last Updated: March 2026<br/><br/>
                  ScholarShare is operated from India and these Terms are subject to Indian law.
                </div>
              </div>
            </section>
          </div>
          
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
