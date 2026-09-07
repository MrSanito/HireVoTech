import React from 'react';

export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'EmploymentAgency', 'ProfessionalService'],
    name: 'HireVoTech LLC',
    alternateName: 'HireVoTech',
    url: 'https://www.hirevotech.com',
    logo: 'https://www.hirevotech.com/logo.png',
    image: 'https://www.hirevotech.com/og-image.png',
    description:
      'Premier technical career consulting and talent acquisition firm connecting top 1% software engineering talent with high-growth technology enterprises through proactive career marketing, dedicated interview coaching, and zero upfront risk deferred success fees.',
    email: 'info@hirevotech.com',
    telephone: '+91-89684-47825',
    sameAs: ['https://www.linkedin.com/company/hirevotechllc/'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '17350 State Hwy 249, Ste 220',
      addressLocality: 'Houston',
      addressRegion: 'TX',
      postalCode: '77064',
      addressCountry: 'US',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-89684-47825',
        contactType: 'customer support',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: '+91-95748-44683',
        contactType: 'recruitment advisory',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    areaServed: ['US', 'IN', 'Worldwide'],
    serviceType: [
      'Technical Talent Acquisition',
      'Career Consulting',
      'ATS Resume Optimization',
      'Executive Search',
      'Technical Mock Interviews',
      'Salary Negotiation Advisory',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HireVoTech',
    url: 'https://www.hirevotech.com',
    description:
      'Empowering Elite Technical Careers and Scaling World-Class Engineering Teams.',
    publisher: {
      '@type': 'Organization',
      name: 'HireVoTech LLC',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.hirevotech.com/logo.png',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQJsonLd({
  items = [],
}: {
  items?: Array<{ question: string; answer: string }>;
}) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items = [],
}: {
  items?: Array<{ name: string; url: string }>;
}) {
  if (!items || items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

