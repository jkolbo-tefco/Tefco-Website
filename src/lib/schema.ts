// JSON-LD builders. Keep output in sync with visible page content.
import { business } from '../data/site';

const BUSINESS_ID = 'https://tefcofab.com/#business';

export function localBusiness() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
    name: business.name,
    image: business.logoRemote,
    telephone: business.phone,
    email: business.email,
    url: 'https://tefcofab.com/',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.street,
      addressLocality: business.city,
      addressRegion: business.state,
      postalCode: business.zip,
      addressCountry: 'US',
    },
    openingHours: 'Mo-Fr 08:00-16:30',
    priceRange: '$$',
    foundingDate: '1942',
    sameAs: [business.social.facebook, business.social.instagram],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
  };
}

export function service(opts: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: `https://tefcofab.com${opts.path}`,
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Ogden' },
      { '@type': 'AdministrativeArea', name: 'Weber County' },
      { '@type': 'AdministrativeArea', name: 'Northern Utah' },
    ],
  };
}

export type FaqItem = { q: string; a: string };

export function faqPage(items: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function breadcrumb(trail: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: `https://tefcofab.com${t.path}`,
    })),
  };
}
