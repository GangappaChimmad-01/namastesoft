import { config } from './config';

const { siteUrl, company, social } = config;

export const absolute = (path = '/') => new URL(path, siteUrl).href;

// Whole of India (Bengaluru included). The address below stays the real business location.
const AREA_SERVED = { '@type': 'Country', name: 'India' };

export const ORG_ID = `${siteUrl}/#organization`;

/** The business itself. ProfessionalService is a LocalBusiness subtype, so it is eligible for local results. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': ORG_ID,
    name: company.name,
    alternateName: 'NamasteSoft',
    description:
      'Software and website development company based in Bengaluru, building websites, web applications, mobile apps, AI solutions and WhatsApp automation for businesses across India.',
    url: absolute('/'),
    logo: absolute('/brand/namastesoft-logo.png'),
    image: absolute('/og-image.png'),
    email: company.email,
    telephone: company.phones.map((p) => `+${p.wa}`),
    address: {
      '@type': 'PostalAddress',
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: company.country
    },
    areaServed: AREA_SERVED,
    openingHoursSpecification: config.hours
      .filter((h) => h.schema)
      .map((h) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: h.schema!.days,
        opens: h.schema!.opens,
        closes: h.schema!.closes
      })),
    contactPoint: company.phones.map((p) => ({
      '@type': 'ContactPoint',
      telephone: `+${p.wa}`,
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English']
    })),
    sameAs: [`https://www.linkedin.com/${social.linkedin}`, `https://github.com/${social.github}`],
    knowsAbout: [
      'Website development',
      'Web application development',
      'Mobile app development',
      'Custom software development',
      'WhatsApp Business API automation',
      'Artificial intelligence',
      'Machine learning'
    ]
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}/#website`,
    url: absolute('/'),
    name: company.name,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID }
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

export function serviceSchema(s: { name: string; description: string; path: string; serviceType: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.name,
    serviceType: s.serviceType,
    description: s.description,
    url: absolute(s.path),
    provider: { '@id': ORG_ID },
    areaServed: AREA_SERVED
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absolute(it.path)
    }))
  };
}

export function productListSchema(items: { name: string; description: string; url: string; category: string; operatingSystem: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'SoftwareApplication',
        name: p.name,
        description: p.description,
        url: p.url,
        applicationCategory: p.category,
        operatingSystem: p.operatingSystem,
        publisher: { '@id': ORG_ID }
      }
    }))
  };
}
