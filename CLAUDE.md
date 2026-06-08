# CLAUDE.md — Tefco Fabrication Website

Project-specific guidance for Claude Code. Read this first, then
`STYLE-GUIDE.md` for the full design-system reference.

## What this is
Static marketing website for **TEFCO (Tefco of Utah)** — custom iron railings,
gates, security doors, staircases, powder coating, sandblasting, and metal
fabrication in **Ogden & Weber County, Utah**. Family owned since 1942.

Plain HTML/CSS/JS. **No build step, no framework, no dependencies.** Open any
`.html` file directly in a browser. Don't introduce a bundler, npm packages, or
a framework unless explicitly asked.

## File map
**Live pages**
- `index.html` — homepage (bespoke: video hero, sliding logo, parallax About,
  project lightbox, service drawer — keeps page-specific `<style>` + inline JS)
- `railings.html`, `gates.html` — service pages assembled from the block kit
- `gallery.html` — filterable masonry photo gallery + full-screen lightbox
  (filter/lightbox JS lives in `tefco.js`, activates only when `#galleryMasonry` exists)

**Shared design system (edit these once; every page inherits)**
- `tefco.css` — all tokens, components, and section styles (single source of truth)
- `tefco.js` — shared behaviors; **auto-injects the quote modal + mobile call bar**
- `STYLE-GUIDE.md` — full reference (tokens, components, every section style, SEO rules)

**Authoring kit (not linked from the live site)**
- `tefco-page-scaffold.html` — chrome-only shell (head/header/footer) for a new page
- `tefco-blocks.html` — copy-paste section blocks
- `tefco-elements.html` / `tefco-sections.html` — live visual references

**`archive/`** — old concepts, samples, decision demos, pre-refactor backups. Ignore for new work.

## How to build a new page
1. Copy `tefco-page-scaffold.html`, rename it (e.g. `security-doors.html`).
2. Fill the `<head>`: title, meta description, canonical, Open Graph, and schema
   (`Service` block + `FAQPage` block if it has an FAQ).
3. Paste section blocks from `tefco-blocks.html` into `<main>` — **choose blocks
   that fit the page's actual content**; not every page uses every block.
4. Replace `[[PLACEHOLDERS]]`, use real Tefco photos with descriptive,
   location-rich alt text, mark the active nav link `class="active"`, end with a CTA band.
5. Link `tefco.css` and `tefco.js`; leave header/footer/scripts unchanged.

## Design rules that must hold
- **Single source of truth:** put shared styling in `tefco.css`, shared behavior
  in `tefco.js`. Never hard-code colors/fonts — use the CSS variables. If a
  component doesn't exist, add it to `tefco.css` so the next page reuses it.
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
- See `CONTENT-STRATEGY.md` for SEO/keyword/conversion plan and `CONTENT-INVENTORY.md`
  for the full content port from the live site.

## TODO / open items
- Build remaining service pages from the kit: powder coating, sand/shot blasting,
  custom fabrication, security doors, commercial; plus planter product pages.
- Footer/nav links to not-yet-built services still point to `tefcofab.com` — swap
  to local pages as they're created.
- Fonts load from Google Fonts; most images + the logo load from `tefcofab.com`.
  For a fully self-hosted deploy, localize those assets.
- Decide final URL structure (flat `gates.html` vs. `/gates/`) before launch.

## Git
- Active branch: **`dev`**. Keep work off `main` until the site is ready.
- Remote: https://github.com/jkolbo-tefco/Tefco-Website.git

## Gotchas
- `index.html` keeps its own embedded `<style>` + inline JS for homepage-only
  features; it links `tefco.css` for everything shared. When changing a shared
  component, edit `tefco.css` — but check the homepage still looks right, since a
  few home-only overrides live in its `<style>` (5-column footer, etc.).
- `tefco.js` injects ONE quote modal + ONE mobile call bar. Don't add a second
  set of that markup to a page that loads `tefco.js`, or you'll get duplicates.
  (The homepage is the exception — it has its own modal markup and does NOT load
  `tefco.js`; it runs its own inline script instead.)
