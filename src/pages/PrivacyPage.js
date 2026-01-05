/**
 * @fileoverview Privacy Policy Page
 * Comprehensive legal privacy policy content with DPDP Act 2023 compliance
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

  render() {
    const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-5xl font-black mb-4">Privacy Policy</h1>
          <p class="text-slate-500 mb-8">Last updated: January 5, 2025</p>
          
          <div class="prose prose-lg text-slate-600 space-y-8">
            <p class="text-lg font-medium text-slate-700">
              ScholarShare Platform Pvt. Ltd. ("we," "our," or "us") is committed to protecting the privacy of students, institutions, and all users of our platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with the Digital Personal Data Protection Act, 2023 (DPDP Act) of India.
            </p>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Information We Collect</h2>
              
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
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">2. How We Use Your Information</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>To facilitate credit mapping and ABC (Academic Bank of Credits) integration</li>
                <li>To provide personalized opportunity recommendations</li>
                <li>To generate NAAC compliance reports for institutions</li>
                <li>To enable student engagement tracking and institutional intelligence</li>
                <li>To improve our platform through anonymized analytics</li>
                <li>To communicate important updates and service notifications</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Data Ownership & Processing</h2>
              <p class="mb-4">
                <strong>Student Data:</strong> Students retain ownership of their personal data. Institutions act as data controllers for student data generated within their ecosystem, with ScholarShare as the data processor.
              </p>
              <p class="mb-4">
                <strong>Institutional Data:</strong> All institutional reports and aggregated data belong to the respective Higher Education Institution (HEI). ScholarShare processes this data under the guidance of the institution's IQAC team.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Data Security</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>All data is encrypted in transit (TLS 1.3) and at rest (AES-256)</li>
                <li>SOC2 Type II compliant cloud infrastructure</li>
                <li>Regular security audits and penetration testing</li>
                <li>Role-based access control (RBAC) for institutional users</li>
                <li>Multi-factor authentication (MFA) available for all accounts</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Retention</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li><strong>Student Data:</strong> Retained for the duration of the academic journey plus 7 years for audit compliance</li>
                <li><strong>Institutional Data:</strong> Retained as per contractual agreement, typically 5 years post-contract termination</li>
                <li><strong>Technical Logs:</strong> Retained for 90 days for security purposes</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Third-Party Sharing</h2>
              <p class="mb-4">We do not sell student or institutional data. Limited sharing occurs only with:</p>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li><strong>Government Bodies:</strong> APAAR/ABC integration (with explicit consent)</li>
                <li><strong>Cloud Providers:</strong> AWS/GCP for hosting (under strict DPA)</li>
                <li><strong>Analytics Partners:</strong> Anonymized, aggregated data only</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Your Rights (DPDP Act 2023)</h2>
              <p class="mb-4">Under the Digital Personal Data Protection Act, 2023, you have the right to:</p>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request erasure of personal data (subject to legal obligations)</li>
                <li>Withdraw consent at any time</li>
                <li>Nominate an individual to exercise rights on your behalf</li>
                <li>Lodge a grievance with the Data Protection Board of India</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Cookies & Tracking</h2>
              <p class="mb-4">
                We use essential cookies for authentication and session management. Analytics cookies are used only with your consent. You can manage cookie preferences through your browser settings.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Children's Privacy</h2>
              <p class="mb-4">
                Our platform is designed for higher education students (typically 18+). We do not knowingly collect data from individuals under 18 without parental/guardian consent.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Contact Us</h2>
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
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Policy Updates</h2>
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
