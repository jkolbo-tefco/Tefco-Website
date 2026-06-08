# TEFCO Website — Style Guide & Component Reference

**Version 1.0 · June 2026**

This is the single source of truth for how the Tefco website is built. Every
page links one stylesheet (`tefco.css`) and one script (`tefco.js`); this
document explains the tokens, components, and section styles those files
provide, and how to assemble a new page from them.

**See it live:**
- `tefco-elements.html` — every base component rendered with its class name
- `tefco-sections.html` — every full-width section style in a realistic order
- `railings.html` / `gates.html` — complete service pages built from the system
- `tefco-page-scaffold.html` — the chrome-only shell for a new page
- `tefco-blocks.html` — copy-paste section blocks to assemble a page

---

## 1. How the system fits together

```
tefco.css   ← all design tokens + every component/section style
tefco.js    ← shared behaviors; auto-injects the quote modal + mobile call bar
```

Every page includes these two lines:

```html
<link rel="stylesheet" href="tefco.css">   <!-- in <head> -->
<script src="tefco.js"></script>            <!-- right before </body> -->
```

**Golden rule:** never hard-code a color, font, or component's styles inside a
page. If something needs to change everywhere, it changes in `tefco.css` once.
If a component doesn't exist yet, add it to `tefco.css` so the next page can
reuse it.

Fonts are loaded from Google Fonts in each page's `<head>`:
Inter, Space Grotesk, and Playfair Display.

---

## 2. Design philosophy

- **Premium, not budget.** Clean layouts, generous whitespace, real photography
  of actual Tefco work. The UI stays out of the way.
- **Teal as accent, not wallpaper.** Most of the page is white, light gray, or
  charcoal. Teal appears in buttons, eyebrows, accent lines, and one or two
  feature sections per page.
- **Photography-forward.** Every section that can lead with a real project photo
  should. Use `object-fit: cover` everywhere; never stretch or letterbox.
- **Mixed-case display type with a serif accent.** Space Grotesk for big
  headings, one italic Playfair phrase per heading for warmth, Inter for
  everything else.
- **Group into background zones; don't zebra.** Do NOT flip the background on
  every section — that creates disorienting horizontal stripes where each
  section reads as a separate slab. Instead group several sections onto the same
  light background so they read as one continuous zone, and reserve dark and
  teal for the hero, one or two intentional emphasis moments, and the closing
  CTA. The page should feel light-dominant with a few deliberate dark accents.
  (See §7.)

---

## 3. Color tokens

Defined as CSS variables on `:root`. **Always reference the variable.**

| Variable | Hex | Use |
|---|---|---|
| `--gold` | `#14b8a6` | Primary brand accent — buttons, links, eyebrows, accent lines |
| `--gold-dark` | `#0f766e` | Hover states, deep teal section background, accents on light bg |
| `--gold-light` | `#2dd4bf` | Button hover, accents on dark backgrounds |
| `--gold-pale` | `#e6f4f2` | Tinted callout background, checkmark chips |
| `--charcoal` | `#161719` | Primary dark background, dark text |
| `--wood-dark` | `#1e1f22` | Panels, modal/drawer backgrounds |
| `--wood-light` | `#f7f6f3` | Warm off-white section background |
| `--slate` | `#fdfdfc` | Near-white section background |

> **Naming note:** the accent variables are prefixed `--gold-` for historical
> reasons but the brand color is **teal**. Don't rename them — too many rules
> depend on them; just know gold = teal here.

Additional flat background used by section styles: **`#f2f2f2`** (light gray,
via the `.sec-gray` class — see §7).

**Text colors**
- On light backgrounds: headings `--charcoal`; body `rgba(0,0,0,.6)`.
- On dark/teal backgrounds: headings `#fff`; body `rgba(255,255,255,.7–.85)`.

---

## 4. Typography

| Role | Font | Class / usage |
|---|---|---|
| Display heading | Space Grotesk 800, uppercase | `.h-display`, all `h1`/`h2` in heroes & sections |
| Serif accent | Playfair Display italic | `.serif-accent` — one phrase inside a heading |
| Eyebrow / label | mono, 10px, `.35em` tracking, uppercase | `.eyebrow` |
| Body | Inter 300–400 | default paragraph text |
| Buttons / chips | Inter or Space Grotesk, uppercase, tracked | handled by component classes |

**Heading pattern** (used in heroes and section heads):

```html
<span class="eyebrow">What We Do</span>
<h1 class="h-display">Custom Iron Railings
  <span class="serif-accent">built for your home</span>
</h1>
```

Body copy: 13px, line-height 1.75, weight 300, on dark backgrounds at 70%
white. Scale up slightly for lede paragraphs (15px).

---

## 5. Spacing, layout & motion

- **Content width:** wrap everything in `.wrap` (max 1280px, responsive side
  padding 24px → 48px).
- **Section padding:** 72–80px top/bottom is the norm; heroes are larger.
- **Border radius:** intentionally minimal — most elements use `2px`. Circles
  (badges, plus buttons) are `50%`.
- **Reveal on scroll:** add class `reveal` to any element; `tefco.js` adds
  `.in` when it scrolls into view (fade + rise). Stagger groups with inline
  `style="transition-delay:70ms"` (then 140ms, 210ms…).
- **Parallax:** add `data-parallax="0.82"` to an `<img>` inside an
  `overflow:hidden` box (e.g. `.split-photo`). Value is strength: `0.3` subtle,
  `0.82` strong. The image must be oversized (the `.split-photo img` rule
  already handles this).
- **Respect motion:** keep effects subtle; they should enhance, not distract.

---

## 6. Base components

All shown live in **`tefco-elements.html`**.

### Buttons
Base class `.btn` + one variant:

| Class | Appearance | Use on |
|---|---|---|
| `.btn-solid` | Solid teal, white text | primary action, any background |
| `.btn-outline-light` | Teal outline, white text | dark/teal backgrounds |
| `.btn-outline-dark` | Gray outline, dark text | light backgrounds |
| `.btn-dark` | Charcoal fill, white text | on the teal CTA band |
| `.btn-cta` | Compact solid teal | header only |
| `.btn-sm` | Size modifier | add to any of the above |

Any button or link with **`data-open-quote`** opens the shared quote modal —
no extra wiring needed.

Text link with arrow: `.link-more` (arrow slides on hover).

### Header — `.site-header`
Fixed, transparent over the hero, turns solid charcoal on scroll (`.scrolled`,
added automatically). Add `.solid` to force the solid state on subpages.
Contains `.logo`, `.desk-nav` (desktop), `.header-actions` (phone + CTA), and
`.mobile-controls` + `.mobile-drawer` (mobile menu, toggled by `tefco.js`).

### Footer — `.site-footer`
Four-column layout: brand/byline, Quick Links, Services, Contact + hours.
Copy/paste the block from `tefco-page-scaffold.html` unchanged. (The homepage
footer adds a 5th stamp column via a home-only `.footer-grid` override.)

### Cards
| Component | Class (container) | Notes |
|---|---|---|
| Service photo card | `.pillar` in `.card-grid` | photo, number chip, hover lift + teal underline; title links to the service page |
| Gallery image tile | `.proj-card` in `.tile-grid` (`.cols-3` for 3-up) | title overlaid on photo, description slides up on hover |
| Review card | `.rev-card` in `.rev-grid` (`.cols-4`) | stars, quote, attribution |
| Feature row | `.feature` in `.feature-grid` | checkmark + title + description |

### FAQ — `.faqs` + `.faq-list`
Native `<details>/<summary>`; the `+` rotates to `×` when open. **Always pair
on-page FAQs with `FAQPage` JSON-LD in the page head** (see §8).

### Quote modal & mobile call bar
Injected into every page by `tefco.js`. The modal validates name/email/message
and shows a success state with a reference number. The call bar (Call Now /
Free Estimate) appears only on screens ≤640px.

### Utility classes
- `.bg-grid` — blueprint grid texture (use on dark sections)
- `.inset-shadow` — recessed "window" inner shadow (on a photo container)
- `.divider` — 64px teal accent line
- `.eyebrow`, `.h-display`, `.serif-accent` — type helpers (§4)

---

## 7. Section styles — the page-building blocks

Mix these so the page never repeats a background twice in a row. All shown live
in **`tefco-sections.html`**.

### Background modifiers
Apply to any section wrapper to set its surface:

| Class | Background | Text |
|---|---|---|
| (none / `.features`) | white `--slate` | dark |
| `.sec-gray` | light gray `#f2f2f2` | dark |
| `.sec-warm` | warm off-white `--wood-light` | dark |
| `.sec-pale` | mint tint `--gold-pale` | dark |
| `.sec-teal` | deep teal `--gold-dark` | **white** |
| `.split` + `.bg-grid` | charcoal + grid texture | white |

> White cards (`.feature`, `.rev-card`) automatically gain a border + soft
> shadow on `.sec-gray`, `.sec-warm`, and `.sec-pale` so they don't blend in.

### The section layouts

**A. Light Split** — `.lsplit` + `.lsplit-grid`
Text on the left, framed photo on the right. Photo can get an offset teal frame
(`.media.frame-offset`) and a caption chip (`.chip-caption`). Put it on white,
gray, warm, pale, or teal.

**B. Mirrored Split** — add `.flip` to `.lsplit-grid`
Same as A but photo on the **left**, text on the right. Use `.frame-left` on
the media to flip the offset frame direction.

**C. Tinted feature section** — `.sec-gray` (or warm/pale) + `.sec-head` + `.feature-grid`
Centered heading over a grid of feature cards. The "third color" breather
between white and dark sections.

**D. Stat strip** — `.stat-strip`
Slim pale band of 2–4 big numbers (`.n`) with mono labels (`.l`). A light
alternative to the dark stats banner.

**E. Deep teal split** — `.lsplit.sec-teal`
Full brand-teal section, white text, photo on either side. A strong color
moment that isn't charcoal. (Use `.btn-dark` for the button here.)

**F. Photo banner** — `.photo-banner` (add `.card-right` to flip)
Full-bleed background photo with a floating white content card. A dramatic
mid-page break that's neither fully dark nor light.

**G. Overlap panel** — `.overlap-panel` on a light section
A charcoal panel (`.panel-box`, add `.bg-grid`) with the photo breaking out past
the panel's edge on desktop. Adds depth without a full dark section.

**H. Page hero** — `.page-hero` (subpages)
Photo background with charcoal gradient, breadcrumb, `h1` with serif accent,
lede, and action buttons.

**I. CTA band** — `.cta-band`
Full-width teal band (darkens on hover) with a heading and a `.btn-dark`. Use
once near the bottom of every page.

**J. Photo strip** — `.photo-strip` (`.short` / `.tall`)
Full-bleed cinematic image band used as a visual divider or emphasis moment,
with optional parallax (`data-parallax`) and a centered caption. Because it's a
big image rather than a flat color, it doubles as a section "accent" without
adding a plain dark slab — a good way to inject imagery between content zones.

**K. Featured gallery** — `.gallery-feature`
Mixed-size gallery: add `.big` to the first `.proj-card` so it spans 2×2 while
the rest fill in around it. Use it in place of the equal `.tile-grid` when you
want to show more photos (5–6) with more visual interest.

**L. Before/after slider** — `.ba-slider`
Interactive drag slider comparing a "before" and "after" image. Built for
**powder coating** and **sandblasting** pages (e.g. bare vs. coated wheels).

### Imagery on product/service pages
These pages should be **photography-led**. Beyond the hero, work real project
photos into the body so the page never goes more than a section or two without
an image: use split blocks (each carries a photo), a `photo-strip` accent, a
`gallery-feature` instead of a plain tile grid, and — on powder coating /
sandblasting — a `ba-slider`. Aim for a visual every scroll-length.

### Choosing & ordering sections — content first
**There is no fixed page layout.** Each page is assembled from the blocks above
based on *what that page actually has to say*, so no two pages look identical.
Work in this order:

1. **Inventory the content.** What does this page need to communicate? A long
   description? A list of options? Project photos? Reviews? Questions? Process
   steps? Let that decide which blocks you pull — skip blocks the content
   doesn't call for.
2. **Match content to a block:**
   - A meaty description → `lsplit` (alternate `.flip` direction per use)
   - A list of options/benefits → `features`
   - Quick trust numbers → `stat-strip`
   - A standout statement (guarantee, "second to none") → `sec-teal` split
   - Project examples → gallery `tile-grid`
   - Social proof → `rev-grid`
   - Common questions → `faqs` (+ `FAQPage` schema)
   - A visual breather / emphasis moment → `photo-banner` or `overlap-panel`
3. **Always** open with `page-hero` and close with `cta-band`.
4. **Build in zones, not stripes.** Group consecutive sections onto the same
   light background (white/gray/warm/pale) so they flow as one zone — vary them
   by *layout* (split, then features, then split flipped), not by flipping the
   background each time. Reserve dark and teal for the hero, **one or two**
   emphasis moments, and the closing CTA. Two different pages should still pull a
   *different mix and order* of blocks, but neither should alternate
   dark/light/dark/light down the page.

This is illustrative only — **do not apply it as a fixed recipe.** A short
product page might be just `page-hero → lsplit → features → cta-band`, while a
flagship service page might run eight sections. Build to the content.

---

## 8. SEO requirements (every page)

These are non-negotiable on each new page:

1. **Title** — under 60 chars, lead with the keyword + "Ogden, UT — TEFCO".
2. **Meta description** — 150–160 chars, include the service, Ogden/Weber
   County, and the phone number.
3. **Canonical** tag pointing at the real `tefcofab.com` URL.
4. **Open Graph** tags (`og:title`, `og:description`, `og:image`).
5. **Schema (JSON-LD):**
   - Homepage carries the `LocalBusiness` block (the `@id` anchor other pages
     reference).
   - Service pages carry a `Service` block whose `provider` points at
     `{ "@id": "https://tefcofab.com/#business" }`.
   - Any page with an FAQ carries a `FAQPage` block matching the visible Q&A.
6. **One `<h1>` per page**, keyword-bearing; sections use `<h2>`.
7. **Descriptive alt text** on every image, naming the work + location.
8. **Real, crawlable HTML** — do not render primary content with JavaScript.
   Static markup; JS only adds interaction.
9. **Internal links** — service cards link to their service pages; cross-link
   related services.
10. **Performance** — compress hero media (target < 3 MB), `loading="lazy"` on
    below-the-fold images, `preload="metadata"` on video.

---

## 9. Brand facts (for copy & schema)

- **Founded:** 1942 · **Family owned**
- **Licensed & insured**
- **Address:** 120 9th Street, Ogden, UT 84404
- **Phone:** (801) 621-1010 · **Email:** info@tefcofab.com
- **Hours:** Monday–Friday, 8:00 AM – 4:30 PM
- **Service area (primary):** Ogden & Weber County, Utah
- **Primary ranking focus:** custom iron railings & ironwork, then powder coating
- **Voice:** confident, local, craftsmanship-first. "Free estimates,"
  "satisfaction guarantee," "since 1942," "second to none."
- **Logo:** `Tefco_Primary_Logo_Clear-1.png.webp` (local) or the hosted
  `https://tefcofab.com/wp-content/uploads/2026/02/Tefco_Primary_Logo_Clear-1.png`

> **Still to confirm with the client:** exact Google star rating + review count,
> and any specific warranty wording beyond "satisfaction guarantee." Don't
> publish numbers until confirmed.

---

## 10. Building a new page — workflow

Pages are **assembled, not templated.** The scaffold gives you the chrome; you
fill the middle with the blocks the content calls for (see §7's "content first"
guidance).

1. **Gather the content** for the page — copy, photos, reviews, FAQs.
2. Copy `tefco-page-scaffold.html`, rename it (e.g. `gates.html`). This is the
   shell: head, header, empty `<main>` build zone, footer, scripts.
3. Fill the head: title, meta description, canonical, OG tags, and the right
   schema (`Service` and/or `FAQPage` — see §8).
4. **Choose blocks based on the content** and paste them into `<main>` from
   `tefco-blocks.html`. Pull only what the page needs; order for rhythm so
   backgrounds and split directions alternate. Aim for a mix that's distinct
   from other pages.
5. Replace every `[[PLACEHOLDER]]` with real content; use real Tefco photos with
   descriptive, location-rich alt text.
6. Mark the active nav link in the header with `class="active"`.
7. Keep header, footer, and the `<script>` **unchanged**.
8. End the `<main>` with a `cta-band` block.
9. Test: mobile menu, quote modal, mobile call bar, parallax, scroll reveals.
10. Validate the JSON-LD (Google Rich Results Test) before publishing.

`railings.html` is a worked example of a finished page assembled this way.

---

## 11. File map

**Live design system (project root)**
- `tefco.css` — tokens + all components & section styles
- `tefco.js` — shared behaviors + injected modal/call bar
- `STYLE-GUIDE.md` — this document
- `tefco-elements.html` — base component reference (noindex)
- `tefco-sections.html` — section styles shown with real content (noindex)
- `tefco-blocks.html` — **copy-paste section block kit** — assemble pages from here (noindex)
- `tefco-page-scaffold.html` — **chrome-only shell** for a new page (head/header/footer)
- `index.html` — the homepage (links shared `tefco.css`; keeps page-specific
  styles + JS for its bespoke hero video, sliding logo, parallax, lightbox & drawer)
- `railings.html` — example finished service page (assembled from blocks)
- `website_background_web.mp4` — compressed hero video (use this one)
- `website_background.mp4` — original hero video (kept; large)
- `Tefco_Primary_Logo_Clear-1.png.webp` — logo

**`/archive`** — early concepts, sample images, decision demos, and the old
print style guide. Reference only; not part of the live site. See
`archive/README.md`.
