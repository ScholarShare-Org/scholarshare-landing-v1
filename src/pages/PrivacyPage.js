/**
 * @fileoverview Privacy Policy Page
 * Comprehensive legal privacy policy content with DPDP Act 2023 compliance
 * 
 * Uses unified responsive layout with mobile-first approach
 */

import { Page } from './Page.js';

export class PrivacyPage extends Page {
  constructor(props = {}) {
    super({
      ...props,
      pageId: 'privacy',
      title: 'Privacy Policy | ScholarShare',
      bgClass: 'bg-slate-50'
    });
  }

  /**
   * Get privacy sections data for DRY rendering
   */
  get privacySections() {
    return [
      {
        id: 1,
        title: 'Information We Collect',
        mobileContent: `
          <div class="space-y-2 text-xs">
            <p><strong>Student:</strong> Identity, academic, activity & technical data</p>
            <p><strong>Institutional:</strong> Profile, admin users, aggregated metrics</p>
          </div>
        `,
        desktopContent: `
          <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">1.1 Student Data</h3>
          <ul class="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Identity Data:</strong> Name, APAAR ID, email address, phone number, institution affiliation</li>
            <li><strong>Academic Data:</strong> Course enrollment, participation records, credits earned, certifications</li>
            <li><strong>Activity Data:</strong> Event participation, opportunity applications, peer interactions (within Campus Channels)</li>
            <li><strong>Technical Data:</strong> Device information, IP address, browser type (for security and analytics)</li>
          </ul>
          
          <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">1.2 Institutional Data</h3>
          <ul class="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Institutional Profile:</strong> College name, AISHE code, accreditation status, contact details</li>
            <li><strong>Administrative Users:</strong> IQAC coordinator information, department heads</li>
            <li><strong>Aggregated Metrics:</strong> Engagement scores, vibrancy indices, compliance reports</li>
          </ul>
        `
      },
      {
        id: 2,
        title: 'How We Use Data',
        mobileContent: `
          <ul class="text-xs space-y-1 list-disc list-inside">
            <li>Credit mapping & ABC integration</li>
            <li>Personalized recommendations</li>
            <li>NAAC compliance reports</li>
            <li>Platform improvement</li>
          </ul>
        `,
        desktopContent: `
          <ul class="list-disc list-inside space-y-2 text-slate-600">
            <li>To facilitate credit mapping and ABC (Academic Bank of Credits) integration</li>
            <li>To provide personalized opportunity recommendations</li>
            <li>To generate NAAC compliance reports for institutions</li>
            <li>To enable student engagement tracking and institutional intelligence</li>
            <li>To improve our platform through anonymized analytics</li>
            <li>To communicate important updates and service notifications</li>
          </ul>
        `
      },
      {
        id: 3,
        title: 'Data Ownership',
        mobileContent: `<p class="text-xs">Students retain ownership. Institutions are data controllers; ScholarShare is the processor.</p>`,
        desktopContent: `
          <p class="mb-4">
            <strong>Student Data:</strong> Students retain ownership of their personal data. Institutions act as data controllers for student data generated within their ecosystem, with ScholarShare as the data processor.
          </p>
          <p class="mb-4">
            <strong>Institutional Data:</strong> All institutional reports and aggregated data belong to the respective Higher Education Institution (HEI). ScholarShare processes this data under the guidance of the institution's IQAC team.
          </p>
        `
      },
      {
        id: 4,
        title: 'Data Security',
        mobileContent: `
          <ul class="text-xs space-y-1 list-disc list-inside">
            <li>TLS 1.3 & AES-256 encryption</li>
            <li>SOC2 Type II compliant</li>
            <li>MFA available</li>
          </ul>
        `,
        desktopContent: `
          <ul class="list-disc list-inside space-y-2 text-slate-600">
            <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
            <li>SOC2 Type II compliant cloud infrastructure</li>
            <li>Regular security audits and penetration testing</li>
            <li>Role-based access control (RBAC) for institutional users</li>
            <li>Multi-factor authentication (MFA) available for all accounts</li>
          </ul>
        `
      },
      {
        id: 5,
        title: 'Data Retention & Sharing',
        mobileContent: `
          <p class="text-xs mb-2">Student data: Academic journey + 7 years. We do not sell data.</p>
          <p class="text-xs text-slate-500">Limited sharing: Government (APAAR/ABC), Cloud providers (DPA), Analytics (anonymized).</p>
        `,
        desktopContent: `
          <h3 class="text-xl font-bold text-slate-800 mb-3">Data Retention</h3>
          <ul class="list-disc list-inside space-y-2 text-slate-600 mb-6">
            <li><strong>Student Data:</strong> Retained for the duration of the academic journey plus 7 years for audit compliance</li>
            <li><strong>Institutional Data:</strong> Retained as per contractual agreement, typically 5 years post-contract termination</li>
            <li><strong>Technical Logs:</strong> Retained for 90 days for security purposes</li>
          </ul>
          
          <h3 class="text-xl font-bold text-slate-800 mb-3">Third-Party Sharing</h3>
          <p class="mb-4">We do not sell student or institutional data. Limited sharing occurs only with:</p>
          <ul class="list-disc list-inside space-y-2 text-slate-600">
            <li><strong>Government Bodies:</strong> APAAR/ABC integration (with explicit consent)</li>
            <li><strong>Cloud Providers:</strong> AWS/GCP for hosting (under strict DPA)</li>
            <li><strong>Analytics Partners:</strong> Anonymized, aggregated data only</li>
          </ul>
        `
      },
      {
        id: 6,
        title: 'Your Rights (DPDP 2023)',
        mobileContent: `
          <ul class="text-xs space-y-1 list-disc list-inside">
            <li>Access & correct your data</li>
            <li>Request erasure</li>
            <li>Withdraw consent</li>
            <li>Lodge grievance with DPB</li>
          </ul>
        `,
        desktopContent: `
          <p class="mb-4">Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
          <ul class="list-disc list-inside space-y-2 text-slate-600">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of personal data (subject to legal obligations)</li>
            <li>Withdraw consent at any time</li>
            <li>Nominate an individual to exercise rights on your behalf</li>
            <li>Lodge a grievance with the Data Protection Board of India</li>
          </ul>
        `
      }
    ];
  }

  render() {
    const sections = this.privacySections;

    const content = `
      <div class="pt-20 md:pt-32 pb-8 md:pb-20">
        <div class="max-w-4xl mx-auto px-4 md:px-6">
          
          <!-- Header -->
          <div class="mb-6 md:mb-8">
            <!-- Mobile Header -->
            <h1 class="mobile-hero-title md:hidden mb-2">Privacy Policy</h1>
            <!-- Desktop Header -->
            <h1 class="hidden md:block text-5xl font-black mb-4">Privacy Policy</h1>
            
            <p class="text-slate-400 md:text-slate-500 text-xs md:text-base">Last updated: January 5, 2025</p>
          </div>
          
          <!-- Intro -->
          <!-- Mobile Intro -->
          <p class="md:hidden text-slate-700 text-sm leading-relaxed mb-4">
            ScholarShare is committed to protecting your privacy in compliance with the <strong>DPDP Act 2023</strong>.
          </p>
          <!-- Desktop Intro -->
          <div class="hidden md:block prose prose-lg text-slate-600 mb-8">
            <p class="text-lg font-medium text-slate-700">
              ScholarShare Platform Pvt. Ltd. ("we," "our," or "us") is committed to protecting the privacy of students, institutions, and all users of our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.
            </p>
          </div>
          
          <!-- Sections -->
          <!-- Mobile Sections -->
          <div class="md:hidden space-y-4">
            ${sections.map(section => `
              <div class="mobile-card">
                <h2 class="font-bold text-base text-slate-900 mb-2">${section.id}. ${section.title}</h2>
                ${section.mobileContent}
              </div>
            `).join('')}
            
            <!-- Contact DPO -->
            <div class="bg-indigo-50 rounded-xl p-4">
              <h3 class="font-bold text-sm text-slate-900 mb-2">Contact DPO</h3>
              <a href="mailto:privacy@scholarshare.in" class="text-indigo-600 text-sm font-medium">
                privacy@scholarshare.in
              </a>
              <p class="text-xs text-slate-500 mt-1">Response: 72 hours</p>
            </div>
          </div>
          
          <!-- Desktop Sections -->
          <div class="hidden md:block prose prose-lg text-slate-600 space-y-8">
            ${sections.map(section => `
              <section>
                <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">${section.id}. ${section.title}</h2>
                ${section.desktopContent}
              </section>
            `).join('')}
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Cookies & Tracking</h2>
              <p class="mb-4">
                We use essential cookies for authentication and session management. Analytics cookies are used only with your consent. You can manage cookie preferences through your browser settings.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Children's Privacy</h2>
              <p class="mb-4">
                Our platform is designed for higher education students (typically 18+). We do not knowingly collect data from individuals under 18 without parental/guardian consent.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Contact Us</h2>
              <p class="mb-4">
                For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer:
              </p>
              <div class="bg-slate-100 p-6 rounded-2xl">
                <p class="font-bold text-slate-900">Data Protection Officer</p>
                <p>Email: <a href="mailto:privacy@scholarshare.in" class="text-indigo-600 hover:underline">privacy@scholarshare.in</a></p>
                <p>Response Time: 72 hours (working days)</p>
              </div>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Policy Updates</h2>
              <p class="mb-4">
                We may update this Privacy Policy periodically. Significant changes will be communicated via email to registered users and displayed prominently on our platform. Continued use of the platform after updates constitutes acceptance of the revised policy.
              </p>
            </section>
          </div>
          
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
