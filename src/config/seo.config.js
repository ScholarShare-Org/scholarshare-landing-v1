/**
 * SEO Configuration for ScholarShare Landing Page
 * Contains per-page metadata, Open Graph, Twitter Cards, and JSON-LD structured data
 */

export const siteConfig = {
    siteName: 'ScholarShare',
    siteUrl: 'https://scholarshare.in',
    defaultLocale: 'en_IN',
    twitterHandle: '@ScholarShareIN',
    organizationName: 'ScholarShare Platform',
    organizationLogo: 'https://scholarshare.in/logo.png',
    themeColor: '#6366f1',
};

export const pagesSEO = {
    home: {
        title: 'ScholarShare | Institutional Intelligence & Opportunity Platform',
        description: 'India\'s first holistic opportunity engine for students and essential intelligence middleware for institutions. Verified, credit-mapped, and NEP 2025 ready.',
        keywords: 'scholarshare, nep 2020, academic credits, naac, institutional intelligence, student opportunities, abc credits, apaar',
        canonical: '/',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'ScholarShare',
            url: 'https://scholarshare.in',
            logo: 'https://scholarshare.in/logo.png',
            description: 'India\'s first holistic opportunity engine for students and institutional intelligence middleware.',
            foundingDate: '2024',
            industry: 'Educational Technology',
            areaServed: 'India',
            sameAs: [
                'https://www.linkedin.com/company/scholarshare',
                'https://twitter.com/ScholarShareIN',
                'https://www.instagram.com/scholarshare.in'
            ]
        }
    },
    students: {
        title: 'For Students | ScholarShare - Opportunities & Credit Mapping',
        description: 'Discover curated hackathons, scholarships, and micro-internships. Turn activities into ABC credits. Your portfolio is your new resume.',
        keywords: 'student opportunities, hackathons india, scholarships, micro-internships, abc credits, academic bank of credits, apaar sync',
        canonical: '/students',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'For Students - ScholarShare',
            description: 'Discover verified opportunities and map them to academic credits.',
            mainEntity: {
                '@type': 'EducationalOrganization',
                name: 'ScholarShare Student Platform'
            }
        }
    },
    institutions: {
        title: 'For Institutions | ScholarShare - Institutional Intelligence Beyond ERP',
        description: 'Automate NAAC documentation, reduce manual data entry by 90%, and gain real-time institutional vibrancy insights with ScholarShare.',
        keywords: 'naac automation, iqac software, institutional intelligence, compliance automation, erp integration, aqar reports',
        canonical: '/institutions',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'ScholarShare Institutional Portal',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Web',
            offers: {
                '@type': 'Offer',
                price: '0.60',
                priceCurrency: 'INR',
                priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    unitText: 'per student per day'
                }
            }
        }
    },
    naac: {
        title: 'NAAC Readiness | ScholarShare - Compliance Generator & Safety Net',
        description: 'Strategic accreditation support for binary NAAC system. Automate Criterion 3, 5, and 7 documentation with verified, audit-ready data.',
        keywords: 'naac 2024, naac compliance, criterion 3, criterion 5, criterion 7, aqar automation, dvv compliance, binary accreditation',
        canonical: '/naac',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'NAAC Readiness Service',
            provider: {
                '@type': 'Organization',
                name: 'ScholarShare'
            },
            description: 'Automated NAAC compliance and accreditation support for higher education institutions.'
        }
    },
    about: {
        title: 'About ScholarShare | The Digital Nervous System of the University',
        description: 'Learn about ScholarShare\'s mission to transform Indian higher education through credit-based ecosystem integration and institutional intelligence.',
        keywords: 'about scholarshare, nep 2025, digital education, academic bank of credits vision, higher education reform india',
        canonical: '/about',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About ScholarShare',
            mainEntity: {
                '@type': 'Organization',
                name: 'ScholarShare',
                foundingDate: '2024',
                mission: 'Transforming Indian higher education through holistic opportunity discovery and institutional intelligence.'
            }
        }
    },
    joinpilot: {
        title: 'Join the Pilot | ScholarShare - Be Among the First 10 Institutions',
        description: 'Limited slots available for Tier 1-2 colleges in South and West India. Scale your institutional vibrancy starting at ₹0.60/student per day.',
        keywords: 'scholarshare pilot, institutional partnership, college pilot program, education technology partnership',
        canonical: '/joinpilot',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Join ScholarShare Pilot Program',
            potentialAction: {
                '@type': 'RegisterAction',
                name: 'Apply for Institutional Pilot'
            }
        }
    },
    apaar: {
        title: 'APAAR & ABC Integration | ScholarShare - One Nation, One Student ID',
        description: 'Deep sync with APAAR (Automated Permanent Academic Account Registry) and Academic Bank of Credits. NCrF compliant credit mapping.',
        keywords: 'apaar, academic bank of credits, abc credits, ncrf, national credit framework, student id india, one nation one student id',
        canonical: '/apaar',
        ogType: 'website',
        structuredData: {
            '@context': 'https://schema.org',
            '@type': 'TechArticle',
            name: 'APAAR & ABC Deep Sync',
            description: 'Integration with national academic credit infrastructure.'
        }
    },
    security: {
        title: 'Security & Data Integrity | ScholarShare - SOC2 Ready',
        description: 'Enterprise-grade security with 3-tier verification protocol, SOC2 Type II ready infrastructure, and auditable campus channels.',
        keywords: 'data security, soc2, verification protocol, data integrity, campus security, student data protection',
        canonical: '/security',
        ogType: 'website'
    },
    compliance: {
        title: 'Regulatory Compliance | ScholarShare - UGC & NAAC 2024 Ready',
        description: 'Built natively for UGC and NAAC 2024 reforms. Binary accreditation shield and anti-ragging mandate compliance.',
        keywords: 'ugc compliance, naac 2024, binary accreditation, anti-ragging, dvv compliance, higher education regulations',
        canonical: '/compliance',
        ogType: 'website'
    },
    support: {
        title: 'Support | ScholarShare - Get Help',
        description: 'Dedicated support for IQAC heads, college admins, and students. Access resources and get direct assistance.',
        keywords: 'scholarshare support, help desk, iqac support, student resources, faq',
        canonical: '/support',
        ogType: 'website'
    },
    privacy: {
        title: 'Privacy Policy | ScholarShare',
        description: 'ScholarShare\'s privacy policy detailing data collection, institutional data handling, and security measures.',
        keywords: 'privacy policy, data protection, student data privacy, institutional data',
        canonical: '/privacy',
        ogType: 'website'
    },
    terms: {
        title: 'Terms of Use | ScholarShare',
        description: 'ScholarShare\'s terms of use outlining acceptable conduct, data accuracy requirements, and NEP 2020 compliance guidelines.',
        keywords: 'terms of use, terms and conditions, acceptable use policy',
        canonical: '/terms',
        ogType: 'website'
    }
};

/**
 * Generate meta tags HTML for a specific page
 * @param {string} pageId - The page identifier
 * @returns {string} HTML string of meta tags
 */
export function generateMetaTags(pageId) {
    const pageSEO = pagesSEO[pageId] || pagesSEO.home;
    const { siteUrl, siteName, twitterHandle, themeColor } = siteConfig;

    return `
    <title>${pageSEO.title}</title>
    <meta name="description" content="${pageSEO.description}">
    <meta name="keywords" content="${pageSEO.keywords || ''}">
    <link rel="canonical" href="${siteUrl}${pageSEO.canonical}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${pageSEO.ogType || 'website'}">
    <meta property="og:url" content="${siteUrl}${pageSEO.canonical}">
    <meta property="og:title" content="${pageSEO.title}">
    <meta property="og:description" content="${pageSEO.description}">
    <meta property="og:image" content="${siteUrl}/og-image.png">
    <meta property="og:site_name" content="${siteName}">
    <meta property="og:locale" content="en_IN">
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="${twitterHandle}">
    <meta name="twitter:title" content="${pageSEO.title}">
    <meta name="twitter:description" content="${pageSEO.description}">
    <meta name="twitter:image" content="${siteUrl}/twitter-card.png">
    
    <!-- Theme Color -->
    <meta name="theme-color" content="${themeColor}">
  `.trim();
}

/**
 * Generate JSON-LD structured data script
 * @param {string} pageId - The page identifier
 * @returns {string} Script tag with JSON-LD
 */
export function generateStructuredData(pageId) {
    const pageSEO = pagesSEO[pageId] || pagesSEO.home;
    if (!pageSEO.structuredData) return '';

    return `<script type="application/ld+json">${JSON.stringify(pageSEO.structuredData, null, 0)}</script>`;
}
