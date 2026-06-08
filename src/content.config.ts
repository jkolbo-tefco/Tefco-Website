import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog — the weekly content engine. One MDX file per post.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroNote: z.string().optional(),
    keyword: z.string().optional(),
    // Slug of the service page this post supports (links + cross-promo)
    relatedService: z.string().optional(),
    category: z.string().default('Guides'),
    draft: z.boolean().default(false),
  }),
});

// Projects / case studies — problem → solution → result, with photos/video.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    service: z.string(), // related service slug
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroNote: z.string().optional(),
    challenge: z.string(),
    solution: z.string(),
    result: z.string(),
    quote: z.string().optional(),
    quoteAuthor: z.string().optional(),
    videoUrl: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
