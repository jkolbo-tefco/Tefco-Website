# CLAUDE.md — Tefco Fabrication Website

Project-specific guidance for Claude Code. Read this first, then
`STYLE-GUIDE.md` for the full design-system reference.

## What this is
Static marketing website for **TEFCO (Tefco of Utah)** — custom iron railings,
gates, security doors, staircases, powder coating, sandblasting, and metal
fabrication in **Ogden & Weber County, Utah**. Family owned since 1942.

**Astro static site** (migrated June 2026 from plain HTML/CSS/JS). Build-based:
`npm run dev` for the local HMR dev server, `npm run build` outputs static HTML
to `dist/`. Stack = **Astro + TinaCMS (Phase 3) + Netlify**. Output stays fully
static for SEO. Don't add a heavy client framework or convert to an SPA — keep
content in static HTML.

> The old **plain-HTML prototype** lives in `archive/static-prototype/` for
> visual diffing — it is NOT the live site. See `BUILD-PLAN.md` for phase status,
> `CONTENT-MASTER.md` for paste-ready page copy, and the memory notes
> (`tefco-architecture-decision`, `tefco-build-workflow`).

## File map (Astro)
**Build / config:** `package.json`, `astro.config.mjs`, `tsconfig.json`

**`src/`**
- `pages/` — one file = one route. `[planter].astro` is a constrained dynamic
  route generating the 5 planter product pages from `data/planters.ts`.
- `layouts/BaseLayout.astro` — `<head>` SEO (title/meta/canonical/OG) + JSON-LD +
  header + footer + loads `tefco.js`. Every page wraps in this.
- `components/` — the block kit as components: `Header`, `Footer`, `PageHero`,
  `LSplit`, `Features`, `FAQ`, `CtaBand`, `ReviewGrid`, `StatStrip`,
  `BeforeAfter`, `PhotoStrip`, `GalleryFeature`, `ServiceCards`, `EstimateForm`,
  `Photo` (renders an `<img>`, or a labeled placeholder when `src` is null).
- `lib/schema.ts` — JSON-LD builders (LocalBusiness, Service, FAQPage, Breadcrumb).
- `data/site.ts` — NAP, nav, services, review pool. `data/planters.ts` — planter line.
- `styles/tefco.css` — ported design system (single source of truth for shared
  styling). `styles/components.css` — new Astro-only component styles.
- `scripts/tefco.js` — shared behaviors; **auto-injects the quote modal + mobile
  call bar**, plus header scroll, mobile drawer, reveal-on-scroll, parallax,
  before/after slider, and the gallery filter/lightbox (when `#galleryMasonry` exists).

**`public/`** — `images/` (logo, photos), `video/hero.mp4`, `robots.txt`.

**Docs:** `STYLE-GUIDE.md` (design system), `CONTENT-MASTER.md` (copy),
`BUILD-PLAN.md` (tasks), `IMAGE-ASSETS.md` (placeholder images to source),
`CONTENT-STRATEGY.md`, `CONTENT-INVENTORY.md`.

**`archive/`** — old concepts + `static-prototype/` (pre-Astro HTML). Ignore for new work.

## How to build a new page
1. Create `src/pages/<slug>.astro` and wrap content in `BaseLayout` (pass
   `title`, `description`, `path`, `ogImage`, `active`, and a `schema` array).
2. Build the body from components (`PageHero`, `LSplit`, `Features`, `FAQ`,
   `CtaBand`, …) using copy from `CONTENT-MASTER.md`. Choose blocks that fit the
   page's content; not every page uses every block.
3. Add the right JSON-LD via `lib/schema.ts` helpers (Service + FAQPage, etc.).
4. Use real photos with descriptive, location-rich alt text; for a missing image
   pass `img={null}` + an `imgNote`/`bgNote` description (logs a placeholder —
   record it in `IMAGE-ASSETS.md`).
5. `npm run build` must pass before considering the page done.

## Design rules that must hold
- **Single source of truth:** shared styling in `tefco.css` (new component styles
  in `components.css`), shared behavior in `tefco.js`, shared markup in
  `components/`. Never hard-code colors/fonts — use the CSS variables. If a
  component doesn't exist, add it so the next page reuses it.
- **Group backgrounds into zones; never zebra.** Do NOT flip the background every
  section. Group consecutive sections on the same light background; reserve dark
  and teal for the hero, one or two emphasis moments, and the closing CTA.
  (This was a real bug we fixed — see STYLE-GUIDE §2/§7.)
- **Content-first layout:** pages are assembled, not templated. Two pages should
  pull a different mix/order of blocks. Vary split direction (`.flip`).
- **Photography-led:** product/service pages should show real work often — use
  splits, `photo-strip`, `gallery-feature`, and (powder coating/sandblasting)
  the `before/after slider`. Image overlays are kept light; don't re-darken them.
- **Bare `.lsplit`/`.overlap-panel` default to a light background** — if you want
  dark/teal, add `.sec-teal` etc. (A bare section will NOT fall through to the
  charcoal body.)
- **Accessibility/SEO (every page):** one keyword `<h1>`; `<h2>` for sections;
  descriptive alt text naming work + location; static crawlable HTML (don't
  render primary content with JS); canonical + OG + JSON-LD; `loading="lazy"`
  on below-fold images. Validate JSON-LD before publishing.

## Brand facts (use in copy + schema; keep accurate)
- Founded **1942** as a **railing, door & metal fabrication** business; **family
  owned**, **licensed & insured**. **Powder coating added in 2000** — do NOT say
  "powder coating since 1942"; the company is 80+ years old, powder coating ~25 yrs.
- **Google rating: 4.6 ★ from 29 reviews** (confirmed June 2026 — use in copy +
  `AggregateRating` schema; keep updated).
- **120 9th Street, Ogden, UT 84404** · **(801) 621-1010** · **info@tefcofab.com**
- Hours: **Mon–Fri 8:00 AM – 4:30 PM**
- **Service area:** Northern Utah / the Wasatch Front. **Primary target: Salt Lake
  City north to the Idaho border** (Salt Lake, Davis, Weber, Box Elder, Cache
  counties — Ogden, Layton, Clearfield, Roy, Bountiful, Brigham City, Logan, SLC).
  Will take some jobs as far south as **Spanish Fork**, but optimize for SLC-and-north.
- Ranking focus: **custom iron railings & ironwork**, then powder coating
- Voice: confident, local, craftsmanship-first ("free estimates," "satisfaction
  guarantee," "since 1942," "second to none")
- Logo: `Tefco_Primary_Logo_Clear-1.png.webp` (pages currently load it from tefcofab.com)
- **Still to confirm before publishing:** specific warranty wording beyond
  "satisfaction guarantee"; contractor license # / insurer for citing.
- **`CONTENT-MASTER.md` is the content source of truth** for the new site —
  paste-ready copy, SEO `<head>` fields, keyword targets, and block choices for
  every page (incl. new pages: Our Process, cost, case studies, blog, city pages).
  Build pages from it. `[[CONFIRM: …]]` slots flag facts to verify before launch.
- See `CONTENT-STRATEGY.md` for the SEO/keyword/conversion plan and
  `CONTENT-INVENTORY.md` for the full original copy + image URLs from the live site.

## TODO / open items (see BUILD-PLAN.md for the live checklist)
- **Phase 3:** wire TinaCMS + content collections (blog, projects/case-studies,
  gallery, reviews); build `/blog/` and `/projects/` templates.
- **Phase 4:** Netlify Forms wiring, 301 redirect map (`netlify.toml`), validate JSON-LD.
- Localize hot-linked assets: most photos still load from `tefcofab.com/wp-content/...`
  — download to `public/images/` before launch. Logo + hero video already local.
- Source the placeholder images listed in `IMAGE-ASSETS.md`.
- Resolve the `[[CONFIRM]]` items (warranty, license #, city list, GBP URLs, lead times).
- Decide final URL structure (current routes mirror the live `/gates/`-style paths).

## Git
- Active branch: **`dev`**. Keep work off `main` until the site is ready.
- Remote: https://github.com/jkolbo-tefco/Tefco-Website.git
- **Commit after each build phase** (per the build workflow).

## Gotchas
- `tefco.js` injects ONE quote modal + ONE mobile call bar into every page (it's
  loaded once by `BaseLayout`). Don't add that markup to a page yourself, or
  you'll get duplicates. Any `[data-open-quote]` button opens the modal.
- `tefco.js` runs `.reveal` fade-in-on-scroll via IntersectionObserver. In a
  full-page screenshot, below-fold `.reveal` content can look empty because the
  observer hasn't fired — that's a capture artifact, not a bug (the content is in
  the static HTML). Scroll, or screenshot the viewport, to see it.
- The gallery filter + lightbox in `tefco.js` only activate when `#galleryMasonry`
  exists on the page (the `/gallery/` route).
- Most photos are still hot-linked from `tefcofab.com` (with `referrerpolicy="no-referrer"`).
  They render but depend on the old host until localized.
