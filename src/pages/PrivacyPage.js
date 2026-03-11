/**
 * @fileoverview Privacy Policy Page
 * Comprehensive legal privacy policy content
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
        content: `
          <p class="mb-2">We collect the following types of information:</p>
          <p class="mb-2 font-semibold">Personal Information (provided by you):</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Name, email address, and password (for account creation)</li>
            <li>College name, department, registration number</li>
            <li>Academic details (CGPA, year of study, course)</li>
            <li>Demographic information (gender, state, city — optional)</li>
            <li>Interests and preferences you select in the App</li>
          </ul>
          <p class="mb-2 font-semibold">Automatically Collected Information:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Device type, operating system, and version</li>
            <li>App usage patterns and interaction data</li>
            <li>Crash reports and performance data</li>
            <li>IP address (for security and analytics)</li>
          </ul>
          <p class="mb-2 font-semibold text-red-700">We do NOT collect:</p>
          <ul class="list-disc list-inside space-y-1 mb-4 text-slate-600">
            <li>Location data (GPS)</li>
            <li>Contact lists or call logs</li>
            <li>Financial or payment information</li>
            <li>Biometric data</li>
          </ul>
        `
      },
      {
        id: 2,
        title: 'How We Use Your Data',
        content: `
          <p class="mb-2">We use the information we collect to:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Create and manage your account</li>
            <li>Provide personalized scholarship and opportunity recommendations</li>
            <li>Display relevant eligibility information</li>
            <li>Send deadline reminders and important notifications</li>
            <li>Improve our matching algorithms using aggregated, anonymized data</li>
            <li>Monitor and improve App performance and stability</li>
            <li>Protect against fraud and unauthorized access</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p class="mb-2 font-semibold">Legal Basis for Processing:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li><strong>Consent:</strong> You provide explicit consent when creating an account</li>
            <li><strong>Legitimate Interest:</strong> We process data to improve our services</li>
            <li><strong>Legal Compliance:</strong> We may process data to meet regulatory requirements</li>
          </ul>
        `
      },
      {
        id: 3,
        title: 'Data Sharing & Third Parties',
        content: `
          <p class="mb-4 font-semibold text-green-700">We do NOT sell your personal data to third parties.</p>
          <p class="mb-2">We may share limited data with:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li><strong>Google Sign-In:</strong> Authentication (when enabled) — governed by Google's Privacy Policy</li>
            <li><strong>Expo (React Native):</strong> Push notifications and OTA updates — anonymized device data</li>
            <li><strong>Render (Cloud Hosting):</strong> Server infrastructure — encrypted data in transit and at rest</li>
            <li><strong>Supabase:</strong> File storage — encrypted, access-controlled</li>
          </ul>
          <p class="mb-4">All third-party providers are bound by data protection agreements. We only share the minimum data necessary for each service to function.</p>
          <p>We may disclose information if required by law, court order, or to protect the rights, property, or safety of ScholarShare, our users, or the public.</p>
        `
      },
      {
        id: 4,
        title: 'Data Security',
        content: `
          <p class="mb-2">We implement industry-standard security measures:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>All data transmitted between the App and our servers is encrypted using TLS/HTTPS</li>
            <li>Passwords are hashed using bcrypt (never stored in plaintext)</li>
            <li>JWT-based authentication with short-lived access tokens and long-lived refresh tokens</li>
            <li>Database access is restricted and logged</li>
            <li>Regular security reviews of our codebase</li>
          </ul>
          <p>No method of electronic transmission or storage is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
        `
      },
      {
        id: 5,
        title: 'Data Retention',
        content: `
          <p class="mb-2">We retain your data as follows:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li><strong>Account data:</strong> Retained until you delete your account</li>
            <li><strong>Usage analytics:</strong> Anonymized and aggregated, retained indefinitely</li>
            <li><strong>Crash/performance logs:</strong> Retained for 90 days</li>
            <li><strong>Deleted account data:</strong> Permanently removed within 30 days of account deletion</li>
          </ul>
          <p>You can request immediate deletion of your account and all associated data at any time by contacting us.</p>
        `
      },
      {
        id: 6,
        title: 'Your Rights',
        content: `
          <p class="mb-2">You have the right to:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li><strong>Access:</strong> View all personal data we hold about you</li>
            <li><strong>Rectification:</strong> Correct any inaccurate or incomplete data</li>
            <li><strong>Deletion:</strong> Request permanent deletion of your account and data</li>
            <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format</li>
            <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
            <li><strong>Object:</strong> Object to processing of your personal data</li>
            <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
          </ul>
          <p>To exercise any of these rights, contact us at privacy@scholarshare.in. We will respond within 30 days.</p>
        `
      },
      {
        id: 7,
        title: 'Children\\'s Privacy',
        content: `
          <p class="mb-2">ScholarShare is designed for students, which may include users under 18.</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Users under 13 are not permitted to create accounts (COPPA compliance)</li>
            <li>Users aged 13-17 should have parental or guardian consent before creating an account</li>
            <li>We do not knowingly collect personal information from children under 13</li>
            <li>If we discover that we have collected information from a child under 13, we will promptly delete it</li>
          </ul>
          <p>If you believe a child under 13 has provided personal information to us, please contact us immediately at privacy@scholarshare.in.</p>
        `
      },
      {
  id: 8,
    title: 'Cookies & Tracking',
      content: `
          <p class="mb-4">As a mobile application, we do not use traditional browser cookies.</p>
          <p class="mb-2">We use:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li><strong>AsyncStorage:</strong> Local device storage for authentication tokens and user preferences (never shared externally)</li>
            <li><strong>Expo Analytics:</strong> Anonymized app usage metrics to improve performance</li>
            <li>No third-party advertising trackers</li>
            <li>No cross-app tracking</li>
          </ul>
          <p>You can clear all locally stored App data through your device settings at any time.</p>
        `
},
{
  id: 9,
    title: 'International Data Transfers',
      content: `
          <p class="mb-4">ScholarShare operates from India. Your data may be processed on servers located in regions where our cloud infrastructure providers operate (including the United States and European Union).</p>
          <p class="mb-2">We ensure that any international data transfers comply with applicable data protection laws, including:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Standard Contractual Clauses (for EU data)</li>
            <li>Adequate safeguards as required under the Information Technology Act 2000 (India)</li>
            <li>Encryption of data in transit and at rest</li>
          </ul>
        `
},
{
  id: 10,
    title: 'Changes to This Policy',
      content: `
          <p class="mb-2">We may update this Privacy Policy from time to time. Changes will be:</p>
          <ul class="list-disc list-inside space-y-1 mb-4">
            <li>Posted within the App with the updated effective date</li>
            <li>Notified to users via in-app notification for significant changes</li>
            <li>Effective immediately upon posting unless otherwise stated</li>
          </ul>
          <p class="mb-4">Continued use of the App after changes constitutes acceptance of the updated Privacy Policy.</p>
          <p>We encourage you to review this policy periodically.</p>
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
            
            <p class="text-slate-400 md:text-slate-500 text-xs md:text-base">Last updated: March 2026</p>
          </div>
          
          <!-- Intro -->
          <!-- Mobile Intro -->
          <p class="md:hidden text-slate-700 text-sm leading-relaxed mb-4">
            ScholarShare ("we," "us," "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
          </p>
          <!-- Desktop Intro -->
          <div class="hidden md:block prose prose-lg text-slate-600 mb-8">
            <p class="text-lg font-medium text-slate-700">
              ScholarShare ("we," "us," "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.
            </p>
          </div>
          
          <!-- Sections -->
          <!-- Mobile Sections -->
          <div class="md:hidden space-y-4">
            ${sections.map(section => \`
              <div class="mobile-card">
                <h2 class="font-bold text-base text-slate-900 mb-2">\${section.id}. \${section.title}</h2>
                <div class="text-xs text-slate-600">
                  \${section.content}
                </div>
              </div>
            \`).join('')}
            
            <div class="bg-red-50 border border-red-100 rounded-xl p-4">
              <h2 class="font-bold text-red-800 mb-2">11. Data Breach Notification</h2>
              <div class="text-xs text-slate-700">
                <p class="mb-2">In the event of a data breach that affects your personal information, we will:</p>
                <ul class="list-disc list-inside space-y-1 mb-4">
                  <li>Notify affected users within 72 hours of discovery</li>
                  <li>Report the breach to relevant authorities as required by law</li>
                  <li>Provide details about the nature of the breach and steps taken to mitigate it</li>
                  <li>Recommend any actions you should take to protect yourself</li>
                </ul>
                <p>We maintain an incident response plan and conduct regular security audits to minimize the risk of data breaches.</p>
              </div>
            </div>
            
            <!-- Contact DPO -->
            <div class="bg-indigo-50 rounded-xl p-4 mt-4">
              <h3 class="font-bold text-sm text-slate-900 mb-2">Contact Our Data Protection Officer</h3>
              <p class="text-xs text-slate-600 mb-2">If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact:</p>
              <a href="mailto:privacy@scholarshare.in" class="text-indigo-600 text-sm font-medium">
                privacy@scholarshare.in
              </a>
              <div class="mt-4 pt-4 border-t border-indigo-100 text-[10px] text-slate-500 leading-relaxed">
                Effective Date: March 2026<br/>
                Last Updated: March 2026<br/><br/>
                ScholarShare complies with applicable data protection laws including the Information Technology Act 2000 (India), GDPR (EU), and CCPA (California).<br/><br/>
                By using ScholarShare, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
              </div>
            </div>
          </div>
          
          <!-- Desktop Sections -->
          <div class="hidden md:block prose prose-lg text-slate-600 space-y-8">
            ${sections.map(section => \`
              <section>
                <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">\${section.id}. \${section.title}</h2>
                <div class="text-slate-600">
                  \${section.content}
                </div>
              </section>
            \`).join('')}
            
            <section>
              <div class="bg-red-50 border border-red-100 rounded-2xl p-6">
                <h2 class="text-2xl font-bold text-red-900 mb-4 mt-0">11. Data Breach Notification</h2>
                <div class="text-slate-700">
                  <p class="mb-2">In the event of a data breach that affects your personal information, we will:</p>
                  <ul class="list-disc list-inside space-y-1 mb-4">
                    <li>Notify affected users within 72 hours of discovery</li>
                    <li>Report the breach to relevant authorities as required by law</li>
                    <li>Provide details about the nature of the breach and steps taken to mitigate it</li>
                    <li>Recommend any actions you should take to protect yourself</li>
                  </ul>
                  <p>We maintain an incident response plan and conduct regular security audits to minimize the risk of data breaches.</p>
                </div>
              </div>
            </section>
            
            <section>
              <h2 class="text-2xl font-bold text-slate-900 mt-8 mb-4">Contact Our Data Protection Officer</h2>
              <div class="bg-slate-100 p-6 rounded-2xl">
                <p class="text-slate-700 mb-2">
                  If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact:
                </p>
                <p>Email: <a href="mailto:privacy@scholarshare.in" class="text-indigo-600 hover:underline">privacy@scholarshare.in</a></p>
                
                <div class="mt-4 pt-4 border-t border-slate-200 text-sm text-slate-500 leading-relaxed">
                  Effective Date: March 2026<br/>
                  Last Updated: March 2026<br/><br/>
                  ScholarShare complies with applicable data protection laws including the Information Technology Act 2000 (India), GDPR (EU), and CCPA (California).<br/><br/>
                  By using ScholarShare, you acknowledge that you have read, understood, and agreed to this Privacy Policy.
                </div>
              </div>
            </section>
          </div>
          
        </div>
      </div>
    \`;

    return this.renderPage(content);
  }
}
