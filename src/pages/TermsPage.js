/**
 * @fileoverview Terms of Use Page
 * Comprehensive legal terms of use content
 */

import { Page } from './Page.js';

export class TermsPage extends Page {
  constructor(props = {}) {
    super({
      ...props,
      pageId: 'terms',
      title: 'Terms of Use | ScholarShare',
      bgClass: 'bg-slate-50'
    });
  }

  render() {
    const content = `
      <div class="pt-32 pb-20">
        <div class="max-w-4xl mx-auto px-6">
          <h1 class="text-5xl font-black mb-4">Terms of Use</h1>
          <p class="text-slate-500 mb-8">Last updated: January 5, 2025</p>
          
          <div class="prose prose-lg text-slate-600 space-y-8">
            <p class="text-lg font-medium text-slate-700">
              These Terms of Use ("Terms") govern your access to and use of the ScholarShare platform, services, and applications. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">1. Acceptance of Terms</h2>
              <p class="mb-4">
                By accessing the ScholarShare platform, you agree to comply with these Terms and all applicable laws, including the National Education Policy 2020 guidelines regarding academic integrity and credit transfer. If you do not agree, you must not use our services.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">2. Account Registration</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>You must provide accurate, current, and complete information during registration</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>One person may not maintain multiple accounts</li>
                <li>Institutional accounts must be registered by authorized personnel only</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">3. Acceptable Use</h2>
              
              <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">3.1 You agree to:</h3>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>Use the platform for legitimate educational and professional purposes</li>
                <li>Maintain academic integrity in all activities</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Report any policy violations or security concerns</li>
              </ul>
              
              <h3 class="text-xl font-bold text-slate-800 mt-6 mb-3">3.2 You must NOT:</h3>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>Fabricate or falsify activity data for credit purposes</li>
                <li>Engage in ragging, harassment, or bullying via Campus Channels</li>
                <li>Share misleading information or impersonate others</li>
                <li>Attempt to circumvent security measures or access unauthorized data</li>
                <li>Use automated systems to scrape or collect data without permission</li>
                <li>Violate any applicable UGC anti-ragging mandates</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">4. Campus Channels Conduct</h2>
              <p class="mb-4">
                Campus Channels are designed for professional and academic discourse. Any violation of UGC anti-ragging mandates or institutional policies will lead to:
              </p>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>Immediate suspension of account access</li>
                <li>Reporting to the HEI administration</li>
                <li>Potential referral to the Anti-Ragging Committee</li>
                <li>Permanent ban from the platform (for severe violations)</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">5. Data Accuracy & Verification</h2>
              <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4">
                <p class="font-bold text-amber-800 mb-2">⚠️ Important Notice</p>
                <p class="text-amber-700">
                  Users are responsible for the accuracy of self-claimed data (Tier 1). Fabricating data for institutional credit is a serious violation and may result in academic penalties as determined by your institution.
                </p>
              </div>
              <p class="mb-4">
                Our three-tier verification system ensures data integrity:
              </p>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li><strong>Tier 1 (Self-Claimed):</strong> User-reported, informal tracking only</li>
                <li><strong>Tier 2 (Peer-Verified):</strong> Validated by club leaders or peers</li>
                <li><strong>Tier 3 (Host-Verified):</strong> Official verification for ABC credits</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">6. Intellectual Property</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>All platform content, features, and functionality are owned by ScholarShare Platform Pvt. Ltd.</li>
                <li>Users retain ownership of their personal content and submissions</li>
                <li>By submitting content, you grant us a non-exclusive license to display and process it for platform operations</li>
                <li>Our trademarks, logos, and service marks may not be used without permission</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">7. Institutional Agreements</h2>
              <p class="mb-4">
                Institutional users are subject to additional terms specified in their Master Service Agreement (MSA). In case of conflict between these Terms and the MSA, the MSA shall prevail.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">8. Service Modifications</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li>We reserve the right to modify, suspend, or discontinue any part of the service</li>
                <li>Institutional partners will receive 30 days notice for significant changes</li>
                <li>Student data export will be facilitated upon request</li>
                <li>We are not liable for any modification, suspension, or discontinuation</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">9. Limitation of Liability</h2>
              <div class="bg-slate-100 p-6 rounded-2xl">
                <p class="text-slate-700">
                  To the maximum extent permitted by law, ScholarShare shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the platform. Our total liability is limited to the fees paid by the institution in the preceding 12 months or ₹10,000, whichever is greater.
                </p>
              </div>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">10. Indemnification</h2>
              <p class="mb-4">
                You agree to indemnify and hold harmless ScholarShare, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your violation of these Terms or your use of the platform.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">11. Dispute Resolution</h2>
              <ul class="list-disc list-inside space-y-2 text-slate-600">
                <li><strong>Governing Law:</strong> These Terms are governed by the laws of India</li>
                <li><strong>Arbitration:</strong> Disputes shall be resolved through binding arbitration under the Arbitration and Conciliation Act, 1996</li>
                <li><strong>Jurisdiction:</strong> Courts of Bangalore, Karnataka shall have exclusive jurisdiction</li>
                <li><strong>Class Action Waiver:</strong> Disputes must be resolved on an individual basis</li>
              </ul>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">12. Severability</h2>
              <p class="mb-4">
                If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
              </p>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">13. Contact Information</h2>
              <div class="bg-slate-100 p-6 rounded-2xl">
                <p class="font-bold text-slate-900 mb-2">Legal Department</p>
                <p>ScholarShare Platform Pvt. Ltd.</p>
                <p>Email: <a href="mailto:legal@scholarshare.in" class="text-indigo-600 hover:underline">legal@scholarshare.in</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    `;

    return this.renderPage(content);
  }
}
