# TEFCO Website — Build Plan & Task Tracker

**The working checklist for rebuilding tefcofab.com on the new stack.**
Version 1.0 · June 2026

This is the execution plan. It captures the decided architecture, the local
dev/deploy workflow, and a phase-by-phase task list we check off as we go.

**Companion docs:**
- `CONTENT-MASTER.md` — paste-ready copy + SEO fields for every page (the content source)
- `STYLE-GUIDE.md` — design system (tokens, components, section blocks)
- `CONTENT-STRATEGY.md` — SEO/keyword/conversion strategy (the *why*)
- `CONTENT-INVENTORY.md` — original copy + image URLs from the live site

**Status legend:** `[ ]` to do · `[~]` in progress · `[x]` done · `[!]` blocked (see Open Confirms §8)

---

## 1. Decided architecture (locked)

| Layer | Choice |
|---|---|
| Framework | **Astro** (static output, zero-JS by default, component-based) |
| Content | **Astro content collections** (Markdown/MDX) — blog, projects, gallery, reviews |
| Visual CMS | **TinaCMS** (Git-based; staff edit in a UI, devs edit files) |
| Forms | **Netlify Forms** (estimate form → email; no separate service) |
| Hosting / deploy | **Netlify** (free CDN, auto HTTPS, build-on-push, Tina auth) |
| Styling | **`tefco.css`** ported as global styles (already responsive) |
| Behaviors | **`tefco.js`** modal / mobile bar / lightbox / parallax → Astro islands |

**Carry-over:** the `tefco-blocks.html` sections become `.astro` components; the
SEO rules become a central `BaseLayout`/`Seo`/`Schema`; `CONTENT-MASTER.md` is the copy.

---

## 2. Local dev & deploy workflow (reference)

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server + HMR at `localhost:4321` — auto-updates on save (primary loop) |
| `npm run build` | Compile full static site to `dist/` (test real output) |
| `npm run preview` | Serve built `dist/` locally |
| `npm run dev -- --host` | Expose dev server on LAN to test on a real phone/tablet |
| `tinacms dev -c "astro dev"` | Dev server + local CMS editor at `/admin` |

Deploy: **push to Git → Netlify runs `npm run build` → publishes to CDN.** No manual build needed for deploys.

---

## 3. Target project structure

```
src/
  layouts/BaseLayout.astro        head/SEO/schema + header + footer + modal + scripts
  components/  Header Footer Hero LSplit Features FAQ CtaBand ReviewGrid
               Seo Schema QuoteModal MobileCallBar BeforeAfter StatStrip GalleryGrid
  pages/       index, about, services/, [service].astro, blog/[slug], projects/[slug],
               gallery, reviews, contact, faqs, our-process, cost, city pages …
  content/     config.ts + blog/ projects/ gallery/ reviews/
  styles/tefco.css
  scripts/tefco.js
public/        images, logo, video, robots.txt
astro.config.mjs   (sitemap, image, redirects)
tina/              TinaCMS config (collections/schema)
netlify.toml       build + redirects + forms config
```

---

## 4. Phases overview

- **Phase 0** — Prerequisites & accounts
- **Phase 1** — Scaffold + design-system port + parity page
- **Phase 2** — Convert all core/static pages
- **Phase 3** — Dynamic content systems (collections, CMS, blog/gallery/projects)
- **Phase 4** — Forms, technical SEO, redirects
- **Phase 5** — Launch
- **Phase 6** — Post-launch content engine + local SEO (ongoing)

---

## 5. Task checklist

### Phase 0 — Prerequisites & accounts
- [ ] Create/confirm **Netlify** account + connect the GitHub repo
- [ ] Create **TinaCMS** account (Tina Cloud) for editor auth
- [ ] Confirm **Node.js LTS** installed locally (`node -v`)
- [ ] Decide final **URL structure** (flat `gates.html` vs folder `/gates/`) — affects redirects
- [ ] Gather the **Open Confirms** items (§8) from the client where possible

### Phase 1 — Scaffold + design system + parity
- [x] Initialize Astro project in the repo (`package.json`, `astro.config.mjs`, `tsconfig.json`)
- [x] Add integrations: `@astrojs/sitemap`, `@astrojs/mdx`, built-in image optimization (Tina = Phase 3)
- [x] Configure `.gitignore` (`node_modules`, `dist`, `.astro`, `.netlify`)
- [x] Move current static `.html` files → `archive/static-prototype/` (kept for diffing)
- [x] Port `tefco.css` → `src/styles/` (+ `components.css`) and wire Google Fonts (Inter, Space Grotesk, Playfair)
- [x] Build `BaseLayout.astro`: `<head>` SEO + canonical/OG + JSON-LD + header + footer + scripts
- [x] Build schema helpers (`lib/schema.ts`: LocalBusiness/Service/FAQPage/Breadcrumb) + central `data/site.ts`
- [x] Quote modal + mobile call bar kept as `tefco.js` self-injection (one instance, loaded via BaseLayout)
- [x] Convert core section blocks to components: PageHero, LSplit, Features, FAQ, CtaBand, ReviewGrid, StatStrip, BeforeAfter, PhotoStrip, GalleryFeature, ServiceCards, EstimateForm, Photo
- [x] Port interactive behaviors as islands: scroll reveal, parallax, lightbox, drawer, before/after slider (via bundled `tefco.js`)
- [x] **Convert `railings.html` → `railings.astro` as the parity page** (build passes)
- [x] Confirm visual parity vs the static prototype (Railings + Home + mobile verified via dev server screenshots; build clean). Formal Lighthouse run deferred to Phase 4 perf pass.
- [x] Update **CLAUDE.md**: replaced "no build step/framework" rule with Astro/Tina/Netlify conventions + new file map + gotchas
- [x] Update `STYLE-GUIDE.md` with the component-structure note

### Phase 2 — Convert core pages (copy from `CONTENT-MASTER.md`)  ✅ COMPLETE
See the **Page Build Tracker (§7)** for per-page status. All 31 routes build clean.
- [x] Home (`/`) — video hero, services grid, schema w/ AggregateRating
- [x] About (`/about-us/`)
- [x] Services hub (`/services/`)
- [x] **Ironwork cluster:** Railings · Cable Railing · Floating Stairs · Gates · Security Doors
- [x] **Finishing cluster:** Powder Coating (+ before/after) · Sand/Shot Blasting (+ before/after)
- [x] **Fabrication cluster:** Custom Fabrication · Commercial
- [x] **Planters cluster:** hub + Cube · Rectangle · Right Angle · Pillar · Tapered Pillar · Colors · Accessories
- [x] Gallery (`/gallery/`) — filterable + lightbox
- [x] Reviews (`/reviews/`) — full set + Review/AggregateRating schema
- [x] Contact (`/contact-us/`) + Get a Quote (`/get-a-quote/`) — email fixed, map embedded
- [x] FAQs (`/faqs/`) — master FAQPage
- [x] Privacy (`/privacy/`) + HTML Sitemap (`/sitemap/`)
- [x] **New pages:** Our Process (`/our-process/`) · What Affects Cost (`/cost/`)
- [x] Plus: `thank-you` (form target) + `404`
- [x] Cross-link clusters + "what affects price" link on Railings/cost
- [x] Verify all §6 content-bug fixes applied (see §6)

### Phase 3 — Dynamic content systems
- [ ] Define content collections in `src/content/config.ts` (blog, projects, gallery, reviews) with typed frontmatter
- [ ] Build **Blog**: `/blog/` index + `blog/[slug]` post template (Article schema, related-service link, CTA)
- [ ] Build **Projects/Case studies**: `/projects/` index + `projects/[slug]` template (Article + VideoObject + Breadcrumb)
- [ ] Build **Gallery** as a collection (categories, optimized images, lightbox)
- [ ] Build **Reviews** as a collection (drives Reviews page + per-page review pulls)
- [ ] Configure **TinaCMS** schema for each collection (fields, media uploads, previews)
- [ ] Wire Tina media library → `public/` (or a CDN) for image uploads
- [ ] Test the **full editor flow locally** (`/admin`) — add a post + a gallery item as staff would
- [ ] Seed initial content: 3–5 **case studies** + first **blog posts** (#1–4 from CONTENT-MASTER §H)

### Phase 4 — Forms, technical SEO, redirects
- [ ] Wire estimate form → **Netlify Forms** (+ spam protection / honeypot)
- [ ] Form success state + notification email routing
- [ ] Generate **XML sitemap** (`@astrojs/sitemap`) + `robots.txt`
- [ ] Add JSON-LD to every page (LocalBusiness, Service, FAQPage, Product, AggregateRating, Breadcrumb, VideoObject)
- [ ] Implement the **301 redirect map** (CONTENT-MASTER §27) in `netlify.toml`
- [ ] Set canonical URLs to final domain on every page
- [ ] Image optimization pass (responsive sizes, WebP, `loading="lazy"` below fold)
- [ ] Compress/serve hero video efficiently (`preload="metadata"`)
- [ ] Accessibility pass (alt text, heading order, contrast, focus states)
- [ ] Cross-browser + device QA (desktop/tablet/phone; real device via `--host`)
- [ ] **Validate JSON-LD** (Google Rich Results Test) on each template

### Phase 5 — Launch
- [ ] Final content review against `CONTENT-MASTER.md` (resolve remaining `[[CONFIRM]]`)
- [ ] Connect production **domain** to Netlify + HTTPS
- [ ] Confirm 301 redirects resolve old URLs → new (spot-check top pages)
- [ ] Submit sitemap to **Google Search Console** + **Bing Webmaster Tools**
- [ ] Set up **Google Analytics 4** + call/form conversion tracking
- [ ] Verify TinaCMS editing works against the **production** repo
- [ ] Lighthouse/Core Web Vitals check on the live site
- [ ] Go live 🎉

### Phase 6 — Post-launch (ongoing content engine + local SEO)
- [ ] Optimize **Google Business Profile** (categories, services, hours, photos, Q&A)
- [ ] Start the **review-request habit** (text GBP link day after install) + respond to all reviews
- [ ] NAP consistency sweep across directories (Yelp, BBB, Houzz, Angi, FB, chamber)
- [ ] Run the **weekly content engine**: 1 article + 1 video + social + 1 GBP post
- [ ] Add **before/after sliders** content as jobs come in
- [ ] Build top **city landing pages** (Ogden → Layton → Salt Lake City) with real local proof
- [ ] Review Search Console monthly; expand clusters showing traction

---

## 6. Content-bug fixes to verify during conversion (from CONTENT-INVENTORY §6)
- [x] Add missing metas (Cable Railing, Floating Stairs)
- [x] Standardize company age → **1942 / 80+ years** everywhere; powder coating "added 2000"
- [x] Fix Cable Railing hero copy bug ("floating stairs are more than…")
- [x] Fix mismatched FAQs (Gates had powder-coating; Railings had sandblasting)
- [x] Fix Commercial page errors ("meatal" typo, Security-Doors→planters link, sandblasting copy on Custom Fab)
- [x] Fix contact email → `info@tefcofab.com` (was `media@tefco.com`)
- [x] Fix "Securtiy Doors" footer typo (footer now built from `data/site.ts` — correct everywhere)
- [x] Fix "Google" social link → GBP (`business.social.google`, [[CONFIRM URL]])
- [x] Descriptive, location-rich alt text on every image (incl. placeholder alt/notes)
- [x] Kill duplicate content (per-page unique copy, mapped testimonials via `reviewsFor()`, topic-specific FAQs)

---

## 7. Page Build Tracker

| Page | URL | Content ready | Astro built | QA'd |
|---|---|---|---|---|
| Home | `/` | ✅ §5 | [x] | [x] spot |
| About | `/about-us/` | ✅ §6 | [x] | [ ] |
| Services hub | `/services/` | ✅ §7 | [x] | [ ] |
| Railings | `/railings/` | ✅ §8 | [x] | [x] parity |
| Cable Railing | `/cable-railing/` | ✅ §9 | [x] | [ ] |
| Floating Stairs | `/floating-stairs/` | ✅ §10 | [x] | [ ] |
| Gates | `/gates/` | ✅ §11 | [x] | [ ] |
| Security Doors | `/security-doors/` | ✅ §12 | [x] | [ ] |
| Powder Coating | `/powder-coating/` | ✅ §13 | [x] | [x] spot (mobile) |
| Sand/Shot Blasting | `/sand-shot-blasting/` | ✅ §14 | [x] | [ ] |
| Custom Fabrication | `/custom-fabrication/` | ✅ §15 | [x] | [ ] |
| Commercial | `/commercial/` | ✅ §16 | [x] | [ ] |
| Planters hub | `/planters/` | ✅ §17 | [x] | [ ] |
| Cube Planters | `/cube-planters/` | ✅ §18.1 | [x] | [ ] |
| Rectangle Planters | `/rectangle-planters/` | ⚠ dims to pull §18.2 | [x] | [ ] |
| Right Angle Planters | `/right-angle-planters/` | ⚠ dims to pull §18.3 | [x] | [ ] |
| Pillar Planters | `/pillar-planters/` | ⚠ dims to pull §18.4 | [x] | [ ] |
| Tapered Pillar Planters | `/tapered-pillar-planters/` | ⚠ dims to pull §18.5 | [x] | [ ] |
| Planter Colors | `/planter-colors/` | ⚠ swatches to pull §18.6 | [x] | [ ] |
| Planter Accessories | `/accessories/` | ✅ §18.7 | [x] | [ ] |
| Gallery | `/gallery/` | ✅ §19 | [x] | [ ] |
| Reviews | `/reviews/` | ✅ §20 | [x] | [ ] |
| Contact | `/contact-us/` | ✅ §21 | [x] | [ ] |
| Get a Quote | `/get-a-quote/` | ✅ §21.1 | [x] | [ ] |
| FAQs | `/faqs/` | ✅ §22 | [x] | [ ] |
| Privacy | `/privacy/` | ⚠ confirm text §23 | [x] | [ ] |
| Sitemap (HTML) | `/sitemap/` | ✅ §23 | [x] | [ ] |
| Our Process ⭐ | `/our-process/` | ✅ §24 | [x] | [ ] |
| What Affects Cost ⭐ | `/cost/` | ✅ §25 | [x] | [ ] |
| Thank You (form target) | `/thank-you/` | — | [x] | [ ] |
| 404 | `/404/` | — | [x] | [ ] |
| Projects hub ⭐ | `/projects/` | ✅ §26 | [ ] Phase 3 | [ ] |
| Case studies ⭐ | `/projects/[slug]/` | ⚠ real jobs §26 | [ ] Phase 3 | [ ] |
| Blog hub | `/blog/` | ✅ §H | [ ] Phase 3 | [ ] |
| Blog posts | `/blog/[slug]/` | ✅ queue §H | [ ] Phase 3 | [ ] |
| City — Ogden ⭐ | (TBD) | ⚠ §I | [ ] Phase 6 | [ ] |
| City — Layton ⭐ | (TBD) | ⚠ §I | [ ] Phase 6 | [ ] |
| City — Salt Lake City ⭐ | (TBD) | ⚠ §I | [ ] Phase 6 | [ ] |

`⭐ = new page` · `⚠ = needs an Open Confirm or content pull`

---

## 8. Open confirms (blockers to resolve — mirrors CONTENT-MASTER §30)
- [ ] Warranty/guarantee wording beyond "100% satisfaction guarantee"
- [ ] Contractor license # + insurer line to cite
- [ ] Final service-area **city list** to name in copy + GBP
- [ ] **GBP URL** (footer link) + **GBP review link** (Reviews page)
- [ ] Gate automation: install openers ourselves or partner?
- [ ] Typical **lead times / estimate response time**
- [ ] Real **projects + photos/video** cleared for case studies
- [ ] Planter sub-page **dimensions** (Rectangle, Right Angle, Pillar, Tapered Pillar) + color swatches
- [ ] Keep vs. update **Privacy Policy** text
- [ ] Final **URL structure** (flat vs folder) → lock redirects
- [ ] Production **domain** + DNS access for Netlify
- [ ] Decision: self-host video vs. keep loading assets from `tefcofab.com`

---

*Update this file as we complete items — check boxes and flip the Page Build
Tracker columns. This is the live status of the project.*
