// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Final production domain. Update if the launch domain differs.
const SITE = 'https://tefcofab.com';

export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Keep thank-you (form target) out of search results.
      filter: (page) => !page.includes('/thank-you'),
    }),
    mdx(),
  ],
  // Build to static HTML for best SEO + Core Web Vitals.
  output: 'static',
  image: {
    // Allow optimizing remote images still hosted on the live WordPress site
    // during the migration. Remove these once assets are localized.
    domains: ['tefcofab.com'],
    remotePatterns: [{ protocol: 'https' }],
  },
});
