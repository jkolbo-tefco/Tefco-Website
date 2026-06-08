import { defineConfig } from 'tinacms';

// TinaCMS — the visual editing layer over the same Markdown/MDX files that
// Astro's content collections read (src/content/*). Astro builds the site
// independently; Tina just edits the source files and commits them to Git.
//
// Local editing:   npm run dev:cms   → http://localhost:4321/admin/index.html
// Production:       set TINA_CLIENT_ID + TINA_TOKEN (Tina Cloud) and run
//                   `tinacms build` before `astro build` (see netlify.toml notes).

const branch =
  process.env.TINA_BRANCH ||
  process.env.HEAD || // Netlify
  'dev';

const serviceOptions = [
  { value: 'railings', label: 'Railings' },
  { value: 'cable-railing', label: 'Cable Railing' },
  { value: 'floating-stairs', label: 'Floating Stairs' },
  { value: 'gates', label: 'Gates' },
  { value: 'security-doors', label: 'Security Doors' },
  { value: 'powder-coating', label: 'Powder Coating' },
  { value: 'sand-shot-blasting', label: 'Sand/Shot Blasting' },
  { value: 'custom-fabrication', label: 'Custom Fabrication' },
  { value: 'planters', label: 'Planters' },
  { value: 'commercial', label: 'Commercial' },
];

export default defineConfig({
  branch,
  // From Tina Cloud (https://app.tina.io). Local dev works without them.
  clientId: process.env.TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: {
    tina: { mediaRoot: 'images/uploads', publicFolder: 'public' },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'mdx',
        ui: { router: ({ document }) => `/blog/${document._sys.filename}/` },
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Meta description', required: true, ui: { component: 'textarea' } },
          { type: 'datetime', name: 'pubDate', label: 'Publish date', required: true },
          { type: 'datetime', name: 'updatedDate', label: 'Updated date' },
          { type: 'string', name: 'heroImage', label: 'Hero image URL or /path' },
          { type: 'string', name: 'heroAlt', label: 'Hero image alt text' },
          { type: 'string', name: 'heroNote', label: 'Hero placeholder note (if no image yet)' },
          { type: 'string', name: 'keyword', label: 'Primary keyword' },
          { type: 'string', name: 'relatedService', label: 'Related service', options: serviceOptions },
          { type: 'string', name: 'category', label: 'Category' },
          { type: 'boolean', name: 'draft', label: 'Draft (hidden until unchecked)' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
      {
        name: 'projects',
        label: 'Projects / Case Studies',
        path: 'src/content/projects',
        format: 'mdx',
        ui: { router: ({ document }) => `/projects/${document._sys.filename}/` },
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          { type: 'string', name: 'description', label: 'Meta description', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'location', label: 'Location (e.g. Ogden, UT)', required: true },
          { type: 'string', name: 'service', label: 'Related service', options: serviceOptions, required: true },
          { type: 'datetime', name: 'pubDate', label: 'Publish date', required: true },
          { type: 'string', name: 'heroImage', label: 'Hero image URL or /path' },
          { type: 'string', name: 'heroAlt', label: 'Hero image alt text' },
          { type: 'string', name: 'heroNote', label: 'Hero placeholder note (if no image yet)' },
          { type: 'string', name: 'challenge', label: 'The challenge', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'solution', label: 'What we built', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'result', label: 'The result', required: true, ui: { component: 'textarea' } },
          { type: 'string', name: 'quote', label: 'Customer quote' },
          { type: 'string', name: 'quoteAuthor', label: 'Quote author' },
          { type: 'string', name: 'videoUrl', label: 'Embed video URL (optional)' },
          { type: 'boolean', name: 'draft', label: 'Draft (hidden until unchecked)' },
          { type: 'rich-text', name: 'body', label: 'Extra notes (optional)', isBody: true },
        ],
      },
    ],
  },
});
