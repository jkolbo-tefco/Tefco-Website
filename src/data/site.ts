// ─────────────────────────────────────────────────────────────
// TEFCO — central site data (NAP, nav, services, reviews)
// Single source of truth for chrome + shared content. See CONTENT-MASTER.md.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'TEFCO',
  legalName: 'Tefco of Utah',
  founded: 1942,
  phone: '(801) 621-1010',
  phoneHref: 'tel:8016211010',
  email: 'info@tefcofab.com',
  street: '120 9th Street',
  city: 'Ogden',
  state: 'UT',
  zip: '84404',
  hours: 'Monday – Friday, 8:00 AM – 4:30 PM',
  rating: 4.6,
  reviewCount: 29,
  logo: '/images/tefco-logo.webp',
  // Remote logo still used by the prototype; localized copy lives at /images/tefco-logo.webp
  logoRemote: 'https://tefcofab.com/wp-content/uploads/2026/02/Tefco_Primary_Logo_Clear-1.png',
  mapUrl: 'https://www.google.com/maps/place/120+9th+St,+Ogden,+UT+84404',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=100079254513295',
    instagram: 'https://www.instagram.com/tefco.ofutah/',
    google: '#', // [[CONFIRM: Google Business Profile URL]]
  },
};

// Primary navigation (links to real pages, not anchors)
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about-us/' },
  { label: 'Services', href: '/services/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact Us', href: '/contact-us/' },
];

// Service catalogue — drives the Services hub, footer, and cards.
// `card` = representative photo (live-site URL where known; null → placeholder).
export const services = [
  { slug: 'railings', title: 'Railings', href: '/railings/', group: 'Ironwork', blurb: 'Ornamental, modern & custom iron railings.', card: 'https://tefcofab.com/wp-content/uploads/2026/02/house-with-rails-scaled.jpg', cardNote: 'Custom iron railing on an Ogden, UT home' },
  { slug: 'cable-railing', title: 'Cable Railing', href: '/cable-railing/', group: 'Ironwork', blurb: 'Sleek stainless systems with the view left in.', card: 'https://tefcofab.com/wp-content/uploads/2025/01/outdoor-railing-system-1.jpg', cardNote: 'Stainless cable railing on a deck, Utah' },
  { slug: 'floating-stairs', title: 'Floating Stairs', href: '/floating-stairs/', group: 'Ironwork', blurb: 'Custom open-riser staircases that make a statement.', card: 'https://tefcofab.com/wp-content/uploads/2025/01/shutterstock_2433528987.jpg', cardNote: 'Modern floating open-riser staircase' },
  { slug: 'gates', title: 'Gates', href: '/gates/', group: 'Ironwork', blurb: 'Entry & security gates built to last.', card: 'https://tefcofab.com/wp-content/uploads/2026/02/Iron-gate-Utah.jpg', cardNote: 'Custom iron gate in Utah' },
  { slug: 'security-doors', title: 'Security Doors', href: '/security-doors/', group: 'Ironwork', blurb: 'Beauty and protection in one custom door.', card: 'https://tefcofab.com/wp-content/uploads/2024/12/Tefcopics2011-002-1-scaled.jpg', cardNote: 'Custom iron security door, Ogden UT' },
  { slug: 'powder-coating', title: 'Powder Coating', href: '/powder-coating/', group: 'Finishing', blurb: 'A durable, in-house finish in hundreds of colors.', card: 'https://tefcofab.com/wp-content/uploads/2026/02/wheelspowdercoat.jpg', cardNote: 'Powder-coated wheels, Ogden UT' },
  { slug: 'sand-shot-blasting', title: 'Sand/Shot Blasting', href: '/sand-shot-blasting/', group: 'Finishing', blurb: 'Strip rust and prep any surface — chemical-free.', card: 'https://tefcofab.com/wp-content/uploads/2021/09/Depositphotos_442109094_l-2015.jpg', cardNote: 'Sandblasting / shot blasting in progress' },
  { slug: 'custom-fabrication', title: 'Custom Fabrication', href: '/custom-fabrication/', group: 'Fabrication', blurb: 'If you can sketch it, we can build it.', card: 'https://tefcofab.com/wp-content/uploads/2026/02/Custom-outdoor-railing-system.png', cardNote: 'Custom metal fabrication work, Ogden UT' },
  { slug: 'planters', title: 'Planters', href: '/planters/', group: 'Fabrication', blurb: 'Custom metal planters in any size or color.', card: null, cardNote: 'Custom metal planters (aluminum/steel/corten) styled outdoors — a row of cube and pillar planters with plants' },
  { slug: 'commercial', title: 'Commercial', href: '/commercial/', group: 'Fabrication', blurb: 'Built to spec, on schedule, for contractors.', card: null, cardNote: 'Commercial metal fabrication — e.g. a large prefabricated railing run or architectural metalwork on a commercial building in Utah' },
];

// Footer service links (subset/order per CONTENT-MASTER §2.3)
export const footerServices = services.filter((s) =>
  ['railings', 'cable-railing', 'floating-stairs', 'gates', 'security-doors', 'powder-coating', 'sand-shot-blasting', 'custom-fabrication', 'planters', 'commercial'].includes(s.slug)
);

// Review pool (CONTENT-MASTER §3). `tags` = which pages each fits.
export type Review = { name: string; quote: string; source: string; tags: string[] };
export const reviews: Review[] = [
  { name: 'Ardie Miller', source: 'Google Review', tags: ['railings', 'powder-coating', 'planters'], quote: 'Tefco, known for their expertise in creating railings, went above and beyond to fulfill my unique request. They crafted a custom frame to my specifications and powder-coated it in chocolate brown.' },
  { name: 'Carik Gazewood', source: 'Google Review', tags: ['powder-coating'], quote: 'They do great work! Best powder coating, holds up great! Professional service!!' },
  { name: 'Patrick Hoyt', source: 'Google Review', tags: ['powder-coating'], quote: "I'm very impressed with Tefco. I've used a couple other powder coaters in the Ogden area and have never been satisfied. Tefco is hands down the best." },
  { name: 'Robert Stuart', source: 'Google Review', tags: ['security-doors'], quote: 'Very knowledgeable. I came in looking for a lock for a security screen door for my mother; they knew exactly what it was and gave me a free lock. 5 stars.' },
  { name: 'Rodney Mulder', source: 'Google Review', tags: ['security-doors'], quote: "Tefco built a security door for us. It's by far the best door we have. It looks great, is very functional, and got rid of the draft problem we had too. Fantastic job!" },
  { name: 'Marilyn Jones', source: 'Google Review', tags: ['railings'], quote: 'We were very happy with the wrought iron railing Tefco made for our front porch. They were professional and eager to please. They heard our needs and offered good advice.' },
  { name: 'Jason Stellmon', source: 'Google Review', tags: ['powder-coating'], quote: "I've always been happy with the outcome of anything I've had them powder coat. Have been there multiple times, and will continue to do so." },
  { name: 'T. Burr', source: 'Google Review', tags: ['powder-coating', 'custom-fabrication'], quote: 'Had a bumper powder-coated — Ray was fast and helpful, and the finish came out great.' },
  { name: 'L. Ellis', source: 'Google Review', tags: ['home', 'about'], quote: 'Easy and polite to work with, and great at problem solving. Highly recommend.' },
  { name: 'R. DeHart', source: 'Google Review', tags: ['railings', 'security-doors'], quote: 'Tefco made nine railings and three storm doors for us — excellent quality throughout.' },
  { name: 'J. Opheikens', source: 'Google Review', tags: ['home', 'about'], quote: 'Efficient and professional. Very pleased with the work.' },
  { name: 'S. Cobabe', source: 'Google Review', tags: ['railings'], quote: 'Great job on our railing and grab posts. Solid work.' },
  { name: 'Y. Wished', source: 'Google Review', tags: ['security-doors'], quote: 'Helped me with a security screen door lock. 5 stars.' },
  { name: 'J. Schulze', source: 'Google Review', tags: ['railings', 'gates'], quote: 'Indoor railings plus an outdoor deck railing and gate — great work at a fair price.' },
  { name: 'E. Duke', source: 'Google Review', tags: ['home', 'about'], quote: 'Responsive and they made it right. Would use again.' },
  { name: 'B. Riddle', source: 'Google Review', tags: ['commercial', 'about'], quote: "Five-year relationship with Tefco — top notch every time." },
  { name: 'D. Cook', source: 'Google Review', tags: ['commercial', 'about'], quote: 'Honest and reliable — the reason we keep coming back.' },
];

export function reviewsFor(tag: string, n = 2): Review[] {
  const matched = reviews.filter((r) => r.tags.includes(tag));
  return (matched.length ? matched : reviews).slice(0, n);
}
