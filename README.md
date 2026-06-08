# Tefco Fabrication — Website

Marketing website for TEFCO (Tefco of Utah) — custom iron railings, gates,
security doors, staircases, powder coating, sandblasting, and metal fabrication
in Ogden & Weber County, Utah. Family owned since 1942.

Static HTML/CSS/JS — no build step. Open any `.html` file in a browser.

## Structure

**Live pages**
- `index.html` — homepage
- `railings.html` — Railings service page
- `gates.html` — Gates service page

**Shared design system**
- `tefco.css` — all design tokens, components, and section styles (single source of truth)
- `tefco.js` — shared behaviors; auto-injects the quote modal + mobile call bar
- `STYLE-GUIDE.md` — full style guide and component/section reference

**Authoring tools (for building new pages — not linked from the live site)**
- `tefco-page-scaffold.html` — chrome-only shell (head, header, footer) for a new page
- `tefco-blocks.html` — copy-paste section blocks to assemble a page
- `tefco-elements.html` — live reference of every base component
- `tefco-sections.html` — live reference of every section style

**Assets**
- `tefco.css` / `tefco.js` — must sit alongside the pages (linked relatively)
- `website_background_web.mp4` — compressed hero video used on the homepage
- `Tefco_Primary_Logo_Clear-1.png.webp` — logo (pages currently load the logo from tefcofab.com)

**`archive/`** — early concepts, sample reference images, decision demos, the
original print style guide, the original (uncompressed) hero video, and a
pre-refactor backup of the homepage. Not part of the live site.

## Building a new page

1. Copy `tefco-page-scaffold.html` and rename it (e.g. `security-doors.html`).
2. Fill in the `<head>` (title, meta description, canonical, Open Graph, schema).
3. Paste section blocks from `tefco-blocks.html` into `<main>`, choosing the
   ones that fit the page's content. Group backgrounds into zones — don't
   alternate every section. See `STYLE-GUIDE.md` §7 and §10.
4. Replace placeholders, use real photos with descriptive alt text, end with a CTA band.

## Notes / TODO

- Service pages currently use local filenames (`railings.html`, `gates.html`).
  Footer/nav links to not-yet-built services still point to `tefcofab.com`.
  Swap those to local pages as they're built.
- Pages load fonts from Google Fonts and most images + the logo from
  `tefcofab.com`. For a fully self-hosted deploy, download those locally.
- Confirm with the client before publishing: exact Google review rating/count
  and any specific warranty wording (see `STYLE-GUIDE.md` §9).
