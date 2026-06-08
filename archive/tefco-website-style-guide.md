# Tefco Fabrication — Website Design & Style Guide

**Prepared for:** Development Team
**Date:** June 4, 2026
**Reference:** Tefco Look Book (print catalog)

This guide defines the visual language for the Tefco Fabrication website redesign. It is derived from the approved print look book and adapted for responsive web. All CSS is framework-agnostic — use these variables and patterns regardless of your stack.

---

## 1. Design Philosophy

The look book establishes Tefco as a **premium, trusted fabrication shop** — not a budget operation. The design language communicates craftsmanship, precision, and 80+ years of heritage through clean layouts, generous whitespace, and a refined teal color palette. Photography does the heavy lifting; the UI stays out of the way.

Key principles:

- **Clean over clever.** No gradients on photos, no drop shadows on text, no decorative borders. Let the work speak.
- **Photography-forward.** Every service page leads with large, high-quality images. Use `object-fit: cover` everywhere — never stretch or letterbox.
- **Teal as accent, not wallpaper.** Teal appears in headers, accent lines, badges, CTAs, and the footer bar. The majority of the page is white/off-white.
- **Serif for personality, sans-serif for everything else.** Playfair Display italics add warmth to headings. Inter handles all body text and UI.

---

## 2. Color Palette

### 2.1 Brand Colors

```css
:root {
  /* ── Primary teal family ── */
  --teal-deep:   #0a5c5f;   /* Darkest — footer bars, deep backgrounds, strong text accents */
  --teal-brand:  #0d7377;   /* Primary brand teal — CTAs, links, active states, accent borders */
  --teal-light:  #14a3a8;   /* Lighter accent — hover states, secondary buttons, border highlights */
  --teal-pale:   #e8f5f5;   /* Tinted background — callout boxes, feature highlights, subtle sections */
}
```

### 2.2 Neutrals

```css
:root {
  /* ── Neutrals ── */
  --white:       #ffffff;
  --off-white:   #fafafa;   /* Subtle section backgrounds, alternating rows */
  --light-gray:  #f2f2f2;   /* Card backgrounds, info strips, secondary panels */
  --border:      #e8e8e8;   /* Dividers, card borders, table rules */
  --text-dark:   #1a1f22;   /* Primary headings and important text */
  --text-mid:    #4a5568;   /* Body copy, descriptions, secondary content */
  --text-light:  #718096;   /* Captions, labels, meta text, uppercase section tags */
}
```

### 2.3 Usage Rules

- **Page backgrounds** are `--white` or `--off-white`. Never use teal as a full page background.
- **Section backgrounds** alternate between `--white`, `--off-white`, and `--light-gray` to create visual rhythm without hard borders.
- **Teal backgrounds** are reserved for: the global footer bar, hero overlays, callout/CTA boxes, and the About page side panel. Use `--teal-deep` for these.
- **`--teal-pale`** is for light callout boxes and feature-highlight backgrounds (e.g., "Powder Coating for Outside Customers" box). Always pair with a `--teal-light` border.
- **Text on teal backgrounds** is always `#ffffff` (white).
- **Links and interactive elements** use `--teal-brand` as default, `--teal-light` on hover.

---

## 3. Typography

### 3.1 Font Stack

```css
/* Import from Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:ital@1&display=swap');

:root {
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-accent:  'Playfair Display', Georgia, 'Times New Roman', serif;
}
```

**Inter** is the workhorse — used for body text, navigation, buttons, labels, and most headings. Load weights 300 through 900.

**Playfair Display Italic** is used exclusively as an accent within headings. It is always italic, never used for body text, and typically appears as the second line or emphasized phrase in a heading (e.g., "Custom Iron *Railings*" where "Railings" is Playfair Display italic).

### 3.2 Type Scale

| Element | Font | Size | Weight | Color | Letter-spacing |
|---|---|---|---|---|---|
| Page heading (h1) | Inter + Playfair | 28–32px | 800 (Inter part) | `--text-dark` | -0.5px |
| Page heading `<em>` | Playfair Display | inherits | italic 400 | `--teal-brand` | normal |
| Section label | Inter | 10–11px | 600 | `--teal-brand` | 2px, uppercase |
| Subheading (h2) | Inter | 18–22px | 700 | `--text-dark` | -0.3px |
| Card title (h3) | Inter | 13–15px | 700 | `--text-dark` | normal |
| Body text | Inter | 11–13px | 400 | `--text-mid` | normal |
| Caption / meta | Inter | 9–10px | 600 | `--text-light` | 1.5px, uppercase |
| Button text | Inter | 11–12px | 700 | white | 1px, uppercase |

### 3.3 Heading Pattern

The look book uses a consistent heading structure across all service pages:

```html
<div class="section-label">Railings · Page 1 of 2</div>
<h1>Custom Iron <em>Railings</em></h1>
<p class="sub">Subtitle or tagline goes here.</p>
```

```css
.section-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--teal-brand);
  margin-bottom: 8px;
}

h1 {
  font-family: var(--font-primary);
  font-size: 30px;
  font-weight: 800;
  color: var(--text-dark);
  line-height: 1.2;
  letter-spacing: -0.5px;
}

h1 em {
  font-family: var(--font-accent);
  font-style: italic;
  font-weight: 400;
  color: var(--teal-brand);
}

.sub {
  font-size: 12px;
  color: var(--text-mid);
  margin-top: 6px;
  line-height: 1.5;
}
```

On the web, scale these sizes up proportionally (e.g., h1 → 40–48px, body → 16–18px) since the look book was designed for print at smaller point sizes.

### 3.4 Line Height

- Headings: `1.1` to `1.25`
- Body copy: `1.6` to `1.7`
- Captions and labels: `1.4`

---

## 4. Spacing & Layout

### 4.1 Spacing Scale

The look book uses a consistent spacing system. Adapt these to `rem` for the web:

```css
:root {
  --space-xs:  4px;    /* 0.25rem — tight gaps, label margins */
  --space-sm:  8px;    /* 0.5rem  — grid gaps, small padding */
  --space-md:  16px;   /* 1rem    — section padding, card padding */
  --space-lg:  24px;   /* 1.5rem  — section gaps, major margins */
  --space-xl:  40px;   /* 2.5rem  — page section separators */
  --space-2xl: 56px;   /* 3.5rem  — page-level horizontal padding (print) */
}
```

### 4.2 Content Width

The look book uses `56px` horizontal padding on each side (within an 8.5" page). For the web, translate this to a max-content-width approach:

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(20px, 5vw, 80px);
}
```

### 4.3 Grid System

The look book uses CSS Grid and Flexbox. Common patterns:

**Photo gallery grid (3 columns):**
```css
.photo-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.photo-grid img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
}
```

**Two-column feature layout:**
```css
.feature-split {
  display: flex;
  gap: 24px;
}

.feature-split > * {
  flex: 1;
}
```

**Service card grid (2×2):**
```css
.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
```

### 4.4 Border Radius

```css
:root {
  --radius-sm: 4px;   /* Photo containers, image overlays */
  --radius-md: 6px;   /* Cards, callout boxes, info panels */
  --radius-lg: 10px;  /* Large feature cards, hero overlays */
}
```

---

## 5. Component Library

### 5.1 Standard Page Header

Every service/content page opens with a consistent header block:

```css
.page-header {
  padding: 32px var(--space-2xl) 20px;
}

.page-header .section-label { /* see §3.3 */ }
.page-header h1 { /* see §3.3 */ }
.page-header .sub { /* see §3.3 */ }
```

### 5.2 Footer Bar

A persistent teal strip at the bottom of every page:

```css
.site-footer-bar {
  background: var(--teal-deep);
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(255, 255, 255, 0.85);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 1px;
}
```

On the web, this translates to a sticky or standard footer. The key elements: dark teal background, white text, company name on the left, contact info on the right.

### 5.3 Hero Sections

Service pages use full-width or large hero images:

```css
.hero {
  width: 100%;
  height: 300px;           /* adjust for web — 50vh or aspect-ratio */
  overflow: hidden;
  position: relative;
}

.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Optional dark overlay for text readability */
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.55) 0%,
    transparent 70%
  );
}
```

**Important:** The look book intentionally avoids heavy gradients over photos. When text overlays are needed, use a subtle left-to-right gradient that only darkens where text sits. Never apply a full-page teal gradient over photography.

### 5.4 Info Cards / Feature Blocks

Used for process steps, service descriptions, and feature highlights:

```css
.info-card {
  background: var(--off-white);
  border-radius: var(--radius-md);
  padding: 16px 18px;
  border-left: 3px solid var(--teal-brand);
}

.info-card h3 {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-dark);
  margin-bottom: 8px;
}

.info-card p {
  font-size: 11px;
  color: var(--text-mid);
  line-height: 1.6;
}
```

The **left border accent** (`border-left: 3px solid var(--teal-brand)`) is a signature pattern in the look book. Use it on cards, blockquotes, and feature descriptions.

### 5.5 Numbered Badge

Used for process steps and ordered lists:

```css
.step-badge {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--teal-brand);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  flex-shrink: 0;
}
```

### 5.6 Callout Box (CTA)

Used for calls-to-action like "Powder Coating for Outside Customers":

```css
.callout-box {
  background: var(--teal-pale);
  border: 1px solid var(--teal-light);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.callout-box .label {
  font-size: 12px;
  font-weight: 700;
  color: var(--teal-deep);
  margin-bottom: 4px;
}

.callout-box p {
  font-size: 13px;
  color: var(--text-mid);
  line-height: 1.6;
}
```

### 5.7 Dark Callout Box

Used for high-impact stats and feature callouts:

```css
.callout-dark {
  background: var(--teal-deep);
  border-radius: var(--radius-md);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  color: white;
}

.callout-dark .stat {
  font-size: 28px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
}

.callout-dark .description {
  font-size: 11px;
  line-height: 1.5;
  opacity: 0.9;
}
```

### 5.8 Photo Grid with Overlay Labels

Used in gallery pages — photos in a grid with label text at the bottom:

```css
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 8px;
}

.gallery-item {
  border-radius: var(--radius-sm);
  overflow: hidden;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-item .label {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.65));
  padding: 24px 12px 10px;
  color: white;
  font-size: 11px;
  font-weight: 600;
}
```

### 5.9 Testimonial Card

```css
.testimonial {
  background: var(--light-gray);
  border-radius: var(--radius-md);
  padding: 16px 20px;
}

.testimonial .eyebrow {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-light);
  margin-bottom: 8px;
}

.testimonial blockquote {
  font-size: 13px;
  color: var(--text-mid);
  line-height: 1.6;
  font-style: italic;
}

.testimonial .attribution {
  font-size: 11px;
  font-weight: 600;
  color: var(--teal-deep);
  margin-top: 8px;
}
```

### 5.10 Process Step Card (with photo)

Used on the powder coating process page — a card with a photo on top and descriptive text below:

```css
.process-card {
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: white;
  border: 1px solid var(--border);
}

.process-card .photo {
  height: 200px;
  overflow: hidden;
}

.process-card .photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.process-card .body {
  padding: 12px 16px;
  display: flex;
  gap: 12px;
  background: var(--off-white);
}

.process-card .body .step-badge { /* see §5.5 */ }

.process-card .body h4 {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-dark);
}

.process-card .body p {
  font-size: 10px;
  color: var(--text-mid);
  line-height: 1.5;
}
```

### 5.11 Horizontal Process Flow

For step-by-step processes displayed in a row with arrows:

```css
.process-flow {
  display: flex;
  align-items: flex-start;
  gap: 0;
}

.process-step {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.process-step .step-badge { /* see §5.5 */ }

.process-step h4 {
  font-size: 11px;
  font-weight: 700;
  margin-top: 8px;
}

.process-step p {
  font-size: 10px;
  color: var(--text-mid);
  line-height: 1.5;
  max-width: 140px;
}

.process-arrow {
  flex-shrink: 0;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 7px;
  color: var(--teal-brand);
  font-size: 26px;
  font-weight: bold;
}
```

### 5.12 Info Strip

A horizontal bar for secondary information (e.g., Sand & Shot Blasting):

```css
.info-strip {
  background: var(--light-gray);
  border-top: 1px solid var(--border);
  padding: 14px 40px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.info-strip h4 {
  font-size: 13px;
  font-weight: 700;
  color: var(--text-dark);
  min-width: 160px;
  flex-shrink: 0;
}

.info-strip p {
  font-size: 13px;
  color: var(--text-mid);
  line-height: 1.6;
}
```

### 5.13 Buttons

```css
.btn-primary {
  background: var(--teal-brand);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  padding: 12px 28px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease;
}

.btn-primary:hover {
  background: var(--teal-light);
}

.btn-secondary {
  background: transparent;
  color: var(--teal-brand);
  border: 2px solid var(--teal-brand);
  border-radius: var(--radius-sm);
  padding: 10px 28px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: var(--teal-brand);
  color: white;
}
```

---

## 6. Page Layout Patterns

### 6.1 Service Page (Standard)

Most service pages follow this structure:

```
┌─────────────────────────────────────┐
│  Page Header                        │
│  (section label + h1 + subtitle)    │
├─────────────────────────────────────┤
│                                     │
│  Hero Image (full-width)            │
│                                     │
├─────────────────────────────────────┤
│  Content Section                    │
│  (description text + feature cards) │
├─────────────────────────────────────┤
│  Stats or Quality Bar               │
│  (3–4 metric boxes in a row)        │
├─────────────────────────────────────┤
│  Footer Bar (teal)                  │
└─────────────────────────────────────┘
```

### 6.2 Gallery Page

```
┌─────────────────────────────────────┐
│  Page Header                        │
├─────────────────────────────────────┤
│                                     │
│  3×3 or 3×2 Photo Grid             │
│  (with overlay labels)              │
│                                     │
├─────────────────────────────────────┤
│  Info Strip (optional)              │
├─────────────────────────────────────┤
│  Callout Box / CTA (optional)       │
├─────────────────────────────────────┤
│  Footer Bar (teal)                  │
└─────────────────────────────────────┘
```

### 6.3 About / Split Layout

The About page uses a distinctive two-panel layout:

```
┌────────────────────┬────────────────┐
│                    │                │
│   Left Panel       │  Right Panel   │
│   (teal bg)        │  (white bg)    │
│                    │                │
│   - Logo           │  - Stats       │
│   - Tagline        │  - History     │
│   - Heritage text  │  - Values      │
│                    │                │
└────────────────────┴────────────────┘
```

```css
.about-split {
  display: flex;
  min-height: 100vh;
}

.about-panel-teal {
  flex: 0 0 38%;
  background: var(--teal-deep);
  color: white;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-panel-content {
  flex: 1;
  padding: 60px 40px;
  background: white;
}
```

### 6.4 Contact Page

```
┌─────────────────────────────────────┐
│  Teal Header Block                  │
│  (large heading, subtitle)          │
├──────────────────┬──────────────────┤
│  Contact Form    │  Map / Info      │
│                  │                  │
│  - Name          │  - Address       │
│  - Email         │  - Phone         │
│  - Phone         │  - Hours         │
│  - Message       │  - Map embed     │
│  - Submit btn    │                  │
├──────────────────┴──────────────────┤
│  Footer Bar (teal)                  │
└─────────────────────────────────────┘
```

---

## 7. Photography Guidelines

### 7.1 General Rules

- All images use `object-fit: cover` — never stretch, squish, or letterbox.
- Prefer landscape-oriented photos for heroes and grid items.
- Photos should show finished work in real environments (installed railings, completed staircases, coated parts).
- Avoid stock photography. All images should be of actual Tefco work.

### 7.2 Image Treatment

- **No colored overlays on photos** (no teal tint, no color grading).
- **Minimal text overlay** — when text must sit on a photo, use a subtle dark gradient from one edge only (see §5.3 hero overlay).
- **Rounded corners** on grid thumbnails (`border-radius: 4px`), but full-bleed heroes have no rounding.
- **Before/after** powder coating photos should be placed side by side in the grid with clear labels.

### 7.3 Photo Sizing (Web)

| Context | Recommended Size | Aspect Ratio |
|---|---|---|
| Hero banner | 1600×600px min | ~2.67:1 |
| Gallery grid item | 600×400px min | 3:2 |
| Process step card | 800×500px min | 16:10 |
| About page panels | 800×1000px min | 4:5 |

---

## 8. Responsive Breakpoints

The look book is fixed-width print. For the web, use these breakpoints:

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm  — stack → 2-col grids */ }
@media (min-width: 768px)  { /* md  — tablet layout */  }
@media (min-width: 1024px) { /* lg  — full desktop layout */ }
@media (min-width: 1280px) { /* xl  — max-width container */ }
```

### 8.1 Responsive Behavior

- **Photo grids:** 1 column on mobile → 2 columns at `sm` → 3 columns at `md`
- **Split layouts** (about page, contact): Stack vertically on mobile, side-by-side at `md`
- **Process flows:** Horizontal on desktop, vertical stack on mobile
- **Hero images:** Full-width at all sizes; adjust height from `200px` (mobile) to `400px+` (desktop)
- **Font sizes:** Scale headings down ~20% on mobile; body text stays at 16px minimum for readability

---

## 9. What's Changing from the Current Site

The current tefcofab.com uses a different design language. Here's what shifts:

| Element | Current Site | New (Look Book) |
|---|---|---|
| Headings font | Aldrich / Heebo (blocky, all-caps) | Inter 800 + Playfair Display italic |
| Body font | Open Sans | Inter 400 |
| Heading style | ALL UPPERCASE, wide tracking | Mixed case, tight tracking, serif accent |
| Primary color | Dark teal (similar) | Refined teal family (4 shades) |
| Body text color | `rgb(84, 81, 75)` brownish gray | `#4a5568` cool gray |
| Layout approach | Full-width sections, dark backgrounds | Contained layouts, white-dominant |
| Image treatment | Bordered frames, rotated angles | Clean grid, `object-fit: cover`, no frames |
| CTAs | Outlined boxes on teal | Solid teal buttons, light callout boxes |
| Overall feel | Industrial, heavy, dark | Clean, premium, photography-forward |

### Key Changes Developers Should Note

1. **Kill the all-caps headings.** The new look uses mixed-case with Playfair italic accents. This is the single biggest visual shift.
2. **Lighten the backgrounds.** The current site uses large dark (charcoal/teal) sections. The new design is predominantly white and off-white with teal used sparingly.
3. **Simplify image presentation.** Remove rotated frames, borders, and decorative containers. Photos sit in clean rectangular containers with optional 4px radius.
4. **Introduce the section label pattern.** Every page header now gets a small uppercase teal label above the main heading (e.g., "Railings · Page 1 of 2"). On the web, adapt this as breadcrumb-style context labels.
5. **Add the teal footer bar.** A persistent dark teal strip appears at the bottom of every page.

---

## 10. Accessibility Notes

- **Contrast ratios:** `--text-dark` (#1a1f22) on `--white` (#ffffff) = 16.5:1 (AAA). `--text-mid` (#4a5568) on white = 7.0:1 (AAA). White on `--teal-deep` (#0a5c5f) = 7.2:1 (AAA). All pass WCAG AA and AAA.
- **Font sizing:** Minimum body text 16px on web (the look book uses smaller sizes for print).
- **Focus states:** Use `outline: 2px solid var(--teal-brand); outline-offset: 2px` for keyboard focus.
- **Image alt text:** All gallery photos and hero images need descriptive alt text.
- **Motion:** Use `prefers-reduced-motion` to disable transitions for users who request it.

---

## 11. Complete CSS Variables Reference

Copy this block into your global stylesheet as the single source of truth:

```css
:root {
  /* ── Colors ── */
  --teal-deep:   #0a5c5f;
  --teal-brand:  #0d7377;
  --teal-light:  #14a3a8;
  --teal-pale:   #e8f5f5;
  --white:       #ffffff;
  --off-white:   #fafafa;
  --light-gray:  #f2f2f2;
  --border:      #e8e8e8;
  --text-dark:   #1a1f22;
  --text-mid:    #4a5568;
  --text-light:  #718096;

  /* ── Typography ── */
  --font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-accent:  'Playfair Display', Georgia, 'Times New Roman', serif;

  /* ── Spacing ── */
  --space-xs:  0.25rem;
  --space-sm:  0.5rem;
  --space-md:  1rem;
  --space-lg:  1.5rem;
  --space-xl:  2.5rem;
  --space-2xl: 3.5rem;

  /* ── Radius ── */
  --radius-sm: 4px;
  --radius-md: 6px;
  --radius-lg: 10px;
}

/* ── Base reset ── */
body {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  color: var(--text-mid);
  line-height: 1.6;
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-primary);
  color: var(--text-dark);
  line-height: 1.2;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

---

## 12. Quick Reference Checklist for Developers

When building a new page, verify:

- [ ] Uses `--font-primary` (Inter) for body and `--font-accent` (Playfair Display italic) for heading accents only
- [ ] Page heading follows the section-label → h1 (with `<em>`) → subtitle pattern
- [ ] Colors reference CSS variables, not hardcoded hex values
- [ ] All images use `object-fit: cover` and never appear stretched
- [ ] Teal backgrounds are limited to footer bar, callout boxes, and one hero/about section
- [ ] Cards use `border-left: 3px solid var(--teal-brand)` accent pattern
- [ ] Buttons are uppercase, letter-spaced, with teal background
- [ ] Gallery grids use consistent gap (8px) and subtle border-radius (4px)
- [ ] Page follows the white-dominant color scheme (no large dark sections outside footer)
- [ ] Text on teal backgrounds is white, not dark
- [ ] Responsive: grids collapse gracefully, split layouts stack on mobile
