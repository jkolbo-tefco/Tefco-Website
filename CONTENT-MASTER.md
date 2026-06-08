# TEFCO — Master Content Document (New Site)

**The single source of truth for the words on the new tefcofab.com.**
Version 1.0 · June 2026

This document defines the *complete, paste-ready content* for every page of the
rebuilt TEFCO website. It merges two inputs:

- **`CONTENT-INVENTORY.md`** — everything currently on tefcofab.com (titles,
  metas, headings, copy, FAQs) plus the SEO bugs to fix. We preserve the ranking
  signals here.
- **`CONTENT-STRATEGY.md`** — the plan to *improve* rankings: kill duplicate
  content, build topic clusters, add high-converting pages, win local + AI search.

Where the old site and the strategy conflict, **the strategy wins** — but we keep
the proven keywords, the real testimonials, the brand voice, and the page set so
no SEO equity is lost. Every page below is rewritten to be *unique* (the #1 fix
the strategy calls for), while keeping each page's existing primary keyword.

> **How to use this with the build system:** each page entry gives you the exact
> `<head>` SEO fields, the page's keyword targets, and the full body copy broken
> into the section blocks defined in `STYLE-GUIDE.md` (hero, lsplit, features,
> faqs, cta-band, etc.). Hand a page entry to a builder and they can assemble the
> HTML from `tefco-blocks.html` without inventing copy. `railings.html` already
> matches the §4.8 entry — use it as the worked reference.

---

## 0. Conventions used in this document

- **`[[CONFIRM: …]]`** — a fact the client must verify before publishing
  (warranty wording, license #, insurer, exact city list). Copy is written
  *around* these so the page is otherwise complete; just fill the slot.
- **Primary keyword** is the one phrase the page must rank for. It goes in the
  title, meta, H1, one H2, the first paragraph, one image alt, and the URL.
  **Secondary keywords** are woven in naturally — never stuffed.
- **Voice:** confident, local, craftsmanship-first. Short sentences. Lead with
  the customer's outcome, then prove it with TEFCO's history and work. Recurring
  phrases to keep: *"free estimate," "satisfaction guarantee," "since 1942,"
  "second to none," "Ogden & the Wasatch Front," "residential & commercial."*
- **One answer, then detail.** Every FAQ and many section intros open with a
  one-sentence direct answer (AI engines lift these), then expand. (Strategy §7.)
- **Block names** (`page-hero`, `lsplit`, `features`, `sec-teal`, `faqs`,
  `cta-band`, `ba-slider`, `stat-strip`, `gallery-feature`, `photo-strip`, …)
  refer to `STYLE-GUIDE.md §6–7`. "→ block:" notes tell the builder which to use.
- **URLs:** written as the live `tefcofab.com/…/` paths so canonicals and 301s
  stay intact. (Final flat-vs-folder decision is a launch item — see §16.)

---

## 1. Canonical brand facts (use verbatim everywhere)

These resolve every inconsistency on the old site. **Use these and only these.**

| Fact | Value |
|---|---|
| Business name | **TEFCO** (legal/local: *Tefco of Utah*) |
| Founded | **1942** — as a railing, door & metal fabrication business |
| Age phrasing | **"since 1942"** / **"over 80 years"** (never "73/75/79") |
| Powder coating | **added in 2000** (~25 yrs) — never "powder coating since 1942" |
| Ownership | **Family owned**, **licensed & insured** |
| Google rating | **4.6 ★ · 29 reviews** (confirmed June 2026 — keep updated) |
| Address | **120 9th Street, Ogden, UT 84404** |
| Phone | **(801) 621-1010** · `tel:8016211010` |
| Email | **info@tefcofab.com** (the *only* email — fix the old `media@tefco.com`) |
| Hours | **Monday – Friday, 8:00 AM – 4:30 PM** |
| Primary focus | **Custom iron railings & ornamental ironwork**, then **powder coating** |
| Service area | Northern Utah / the Wasatch Front — **primary target: Salt Lake City north to the Idaho border** (Salt Lake, Davis, Weber, Box Elder, Cache counties). Some jobs as far south as **Spanish Fork**. |
| Materials | aluminum, mild/carbon steel, stainless, wrought iron, cast iron, galvanized steel, copper & copper alloys, corten, nickel, silicon bronze, tool steel |

**To confirm before launch:**
- `[[CONFIRM: warranty/guarantee wording beyond "100% satisfaction guarantee"]]`
- `[[CONFIRM: contractor license # to cite]]`
- `[[CONFIRM: insurer / "insured by …" line, if we want to name it]]`
- `[[CONFIRM: final list of service-area cities to name in copy + GBP]]` — working
  list: Ogden, Layton, Clearfield, Roy, Bountiful, Brigham City, Logan, Salt Lake City.

---

## 2. Global elements (repeat site-wide — write once, reuse)

### 2.1 NAP / contact block
> **TEFCO** · 120 9th Street, Ogden, UT 84404 · **(801) 621-1010** ·
> info@tefcofab.com · Mon–Fri 8:00 AM – 4:30 PM · *Family owned since 1942 ·
> Licensed & insured*

### 2.2 Header nav
Home · About Us · Services · Gallery · Contact Us · **(801) 621-1010** · *Get a Quote* (button)
- Services dropdown: Railings, Cable Railing, Floating Stairs, Gates, Security
  Doors, Powder Coating, Sand/Shot Blasting, Custom Fabrication, Planters, Commercial
- About dropdown: Our Process, Reviews, FAQs, Blog
- **Fix:** correct the recurring **"Securtiy Doors"** typo everywhere.

### 2.3 Footer
- **Byline:** "Welcome to TEFCO. We've been crafting ornamental iron & custom
  metal fabrication in Ogden since 1942. Family owned, licensed & insured. Call or
  use our online form to speak with a team member — we'd love to build something
  for you."
- **Quick Links:** Home · About Us · Our Process · Gallery · Reviews · Contact Us
- **Services:** Railings · Cable Railing · Floating Stairs · Gates · Security
  Doors · Powder Coating · Sand/Shot Blasting · Custom Fabrication · Planters · Commercial
- Hours, phone, email, address (§2.1); social icons (§2.4)
- Bottom bar: "© 2026 TEFCO · All rights reserved · Sitemap · Privacy Policy"

### 2.4 Social links (fix the old "Google → Instagram" bug)
- Facebook: https://www.facebook.com/profile.php?id=100079254513295
- Instagram: https://www.instagram.com/tefco.ofutah/
- Google: **point to the Google Business Profile** (not Instagram). `[[CONFIRM: GBP URL]]`

### 2.5 Estimate form ("Get a Free Estimate" — on nearly every page)
Heading: **"Get a Free Estimate"** · Sub: "Tell us about your project — we'll get
right back to you with a detailed, no-obligation quote."
Fields: **Name** · **Phone** · **Email** · **Project Address** · **Tell us about
your project** · *(submit)* **Request My Free Estimate**
Trust line under button: "Family owned since 1942 · Licensed & insured · 4.6 ★ on Google"

### 2.6 The "Why TEFCO" proof bar (replaces the old repeated 4-up feature blocks)
Use as a slim `stat-strip` or feature row where proof is needed. **Vary the
wording per page** so it isn't duplicate content; the facts stay constant:
- **Since 1942** — over 80 years of Utah ironwork
- **4.6 ★ · 29 Google reviews** — work our neighbors trust
- **In-house from start to finish** — design, fabricate, powder coat, install
- **Free estimates** — backed by our satisfaction guarantee

### 2.7 Standard CTA band (closing every page — vary the headline per page)
Generic fallback: **"Ready to start your project?"** — "Call (801) 621-1010 or
request a free estimate. We'll help you make your vision a reality." → *Get a Free Estimate*

---

## 3. Testimonials pool (assign 2–3 relevant ones per page — never the same 7 everywhere)

The old site repeated the same 7 reviews on every page — exactly the duplicate
content the strategy says to kill. Below is the full pool with the **service each
maps to**, so each page pulls reviews that match its topic. (Display as
`rev-card`; mark "Google Review", 5★ unless noted.)

| # | Name | Best on page(s) | Quote (trimmed for cards; full text in CONTENT-INVENTORY §2/§4.16) |
|---|---|---|---|
| 1 | Ardie Miller | Railings, Powder Coating | Custom mosaic frame + rail, powder-coated chocolate brown for Ogden Botanical Gardens. |
| 2 | Carik Gazewood | Powder Coating | "Best powder coating, holds up great! Professional service!!" |
| 3 | Patrick Hoyt | Powder Coating | "Used a couple other powder coaters in Ogden… Tefco is hands down the best." |
| 4 | Robert Stuart | Security Doors | Knowledgeable on security screen door locks; gave a free lock + how-to. |
| 5 | Rodney Mulder | Security Doors | "By far the best door we have… got rid of the draft too. Fantastic job!" |
| 6 | Marilyn Jones | Railings | "Very happy with the wrought iron railing… professional and eager to please." |
| 7 | Jason Stellmon | Powder Coating | "Always happy with anything I've had them powder coat." |
| 8 | T. Burr | Powder Coating, Custom Fab | Powder-coated bumper; "Ray" fast and helpful. |
| 9 | L. Ellis | About, Home | Easy & polite, good problem solving. |
| 10 | R. DeHart | Railings, Security Doors | Nine railings + three storm doors, excellent quality. |
| 11 | J. Opheikens | About, Home | Efficient, very pleased. |
| 12 | S. Cobabe | Railings | Railing & grab posts. |
| 13 | Y. Wished | Security Doors | Security screen door lock, 5 stars. |
| 14 | J. Schulze | Railings, Gates | Indoor railings + outdoor deck railing & gate, fair price. |
| 15 | E. Duke | About, Home | Responsive, "made it right." |
| 16 | B. Riddle | Commercial, About | 5-year relationship, top notch. |
| 17 | D. Cook | Commercial, About | Honest, repeat business. |

---

## 4. SEO standard for every page (checklist the builder applies)

1. **Title** < 60 chars: `[Primary keyword] in Ogden, UT — TEFCO`.
2. **Meta description** 150–160 chars: service + Ogden/Weber County + phone.
3. **Canonical** → the real `tefcofab.com/…/` URL (see each entry).
4. **Open Graph** title/description/image (image = the page's hero photo).
5. **Schema (JSON-LD):** `LocalBusiness` (home, the `#business` anchor) ·
   `Service` on every service page (`provider → {"@id":"…/#business"}`) ·
   `FAQPage` matching the visible Q&A · `Product` on planter pages (w/ dimensions)
   · `AggregateRating` (4.6/29) on home · `BreadcrumbList` on subpages ·
   `VideoObject` when a video is embedded.
6. **One keyword `<h1>`**; sections use `<h2>`/`<h3>`.
7. **Descriptive, location-rich alt text** on every image (service + "Ogden/Weber
   County, Utah").
8. **Static, crawlable HTML** — never render core copy with JS.
9. **Internal links** — cross-link related services ("pairs with our powder
   coating"); every service links up to the Services hub and to the Gallery.
10. **Performance** — compress media, `loading="lazy"` below the fold.

---

# PART A — CORE PAGES (ported + rewritten unique)

---

## 5. Home — `/`

**Keywords:** *primary* custom iron fabrication Ogden · *secondary* ornamental
iron Utah, metal fabrication Ogden, custom iron railings Utah, powder coating Ogden, TEFCO.

**SEO `<head>`**
- **Title:** `Custom Iron Fabrication in Ogden, UT — TEFCO Since 1942`
- **Meta:** `Custom iron railings, gates, security doors & powder coating in Ogden, Utah. Family-owned metal fabrication since 1942. Free estimates — call (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/`
- **OG image:** hero railing photo (`…/2024/11/101810-003-scaled.jpg`)
- **Schema:** `LocalBusiness` (the `#business` anchor, with `AggregateRating`
  4.6/29, address, hours, geo, phone, sameAs socials) + `FAQPage`.

### → block: page-hero (video background, home-only)
- **Eyebrow:** WELCOME TO TEFCO · ORNAMENTAL IRON SINCE 1942
- **H1:** Northern Utah's trusted **custom iron** & metal fabrication *(serif accent: "since 1942")*
- **Lede:** Custom iron railings, gates, security doors, staircases, powder
  coating and metal fabrication — designed, built, and finished in our Ogden
  shop. Family owned for over 80 years, and our work is second to none.
- **CTAs:** *Call (801) 621-1010* · *Get a Free Estimate*
- **Trust chips:** Since 1942 · 4.6 ★ Google · Licensed & insured · Free estimates

### → block: features — "Our Services" (6–8 cards, each links + "Learn more")
**H2:** What we build
Cards (photo + one-line blurb): **Railings** "Ornamental, modern & custom iron
railings." · **Gates** "Entry & security gates built to last." · **Security
Doors** "Beauty and protection in one custom door." · **Powder Coating** "A
durable, in-house finish in hundreds of colors." · **Sand/Shot Blasting** "Strip
rust and prep any surface." · **Custom Fabrication** "If you can sketch it, we
can build it." *(also surface Cable Railing, Planters, Commercial in the grid or
a "see all services" link.)*

### → block: lsplit (intro — the "trusted shop" story, rewritten unique)
- **Eyebrow:** Ogden & The Wasatch Front
- **H2:** A real fabrication shop — *not a catalog*
- **Body:** "We've got every need covered: residential, commercial, repairs, and
  everything in between. From custom iron railings and gates to powder coating,
  sandblasting, and full metal fabrication, it's all done in-house by our own
  crew. Eighty years of quality craftsmanship is why homeowners, builders, and
  contractors across Ogden and Northern Utah keep coming back."
- **Photo:** the shop floor (`…/2024/11/Tefcopics2011-008-scaled.jpg`),
  alt "TEFCO metal fabrication shop floor in Ogden, Utah."
- **Link-more:** Meet the shop → /about-us/

### → block: stat-strip ("Why TEFCO" proof bar, §2.6 wording variant)
80+ Years · 4.6 ★ (29 reviews) · In-house design→install · Free estimates

### → block: sec-teal split — "Our Promise" (the one teal emphasis moment)
- **H2:** Our work is second to none. *We promise.*
- **Body:** "Behind that promise is a 100% satisfaction guarantee and a free,
  detailed estimate before any work begins. Tell us your vision — we'll tell you
  exactly how we'll build it." `[[CONFIRM: add specific warranty wording here]]`
- **CTA (btn-dark):** Get a Free Estimate

### → block: photo-strip OR gallery-feature — "View our latest work"
**H2:** See our latest work · 5–6 mixed project photos → **View Full Gallery**
(/gallery/). Alt text names work + location on each.

### → block: features — "Choose TEFCO" (rewritten from old "rely on the best")
**H2:** Why people choose TEFCO
4 features: **80+ years in the trade** (the equipment and skill to get it right
the first time) · **Truly custom** (one-of-a-kind designs, not stock parts) ·
**Local & family owned** (you talk to the people doing the work) · **Finished to
last** (in-house powder coating built for Utah weather).

### → block: rev-grid — reviews (pull #9, #11, #15 + one ironwork one, e.g. #6)
**H2:** What our neighbors say · **Sub:** 4.6 ★ from 29 Google reviews

### → block: estimate form (§2.5)

### → block: faqs (+ FAQPage schema)
1. **What does TEFCO make?** *(one-sentence answer first)* We design and build
   custom ironwork — railings, gates, security doors, and staircases — plus
   powder coating, sandblasting, and general metal fabrication, all in our Ogden
   shop.
2. **What metals do you work with?** Aluminum, mild and carbon steel, stainless,
   wrought and cast iron, galvanized steel, copper and copper alloys, corten, and
   more — matched to the job.
3. **Do you serve my area?** We serve Ogden, Weber County, and Northern Utah from
   Salt Lake City to the Idaho border, and take select projects farther south.
   Call (801) 621-1010 to check your address.

### → block: cta-band
**H2:** Let's build something that lasts. · *Get a Free Estimate*

---

## 6. About Us — `/about-us/`

**Keywords:** *primary* ornamental iron company Ogden · *secondary* metal
fabrication Utah, family owned welding Ogden, since 1942.

**SEO `<head>`**
- **Title:** `About TEFCO — Ogden's Ornamental Iron Shop Since 1942`
- **Meta:** `TEFCO has built custom ornamental iron, fabrication & powder coating in Ogden, Utah since 1942. Family owned, licensed & insured. Call (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/about-us/`
- **Schema:** `AboutPage` + reference `#business`.

### → block: page-hero
- **Eyebrow:** Family Owned Since 1942
- **H1:** Three generations of **Utah ironwork** *(serif: "and counting")*
- **Lede:** Quality ornamental iron, custom fabrication, sandblasting and powder
  coating — built in Ogden, by people who've done it for over 80 years.

### → block: lsplit — "Experience you can trust" (rewritten, dates standardized)
- **H2:** Experience you can trust
- **Body:** "TEFCO has served Weber County and Northern Utah with high-rated
  ornamental iron since 1942. Over eight decades we've earned a reputation for
  quality craftsmanship and one-of-a-kind designs. We take the time to know our
  customers and put their needs first — and our crew takes on jobs of any size,
  from a single railing to a full commercial run."
- **Photo:** historic/shop photo with alt "TEFCO's Ogden, Utah fabrication shop."

### → block: lsplit flip — "Metal into art"
- **H2:** We take metal and make art
- **Body:** "Custom metal fabrication and ornamental iron is what we do best —
  from the simple to the lavish. Combining decades of knowledge with modern
  equipment, we build products and finishes that make people say *wow*. Tell us
  your vision and we'll make it a reality."

### → block: features — "What sets us apart" (3, rewritten unique)
**High-quality products** (built to exceed expectations, not just meet them) ·
**Superior service** (responsive, honest, and easy to work with — ask our repeat
customers) · **100% satisfaction guaranteed** (we back our work, every time).
`[[CONFIRM: warranty wording]]`

### → block: stat-strip — 1942 founded · 80+ yrs · 4.6★/29 · family owned

### → block: rev-grid — reviews #9, #11, #15, #16/#17 (relationship/repeat-business)
**H2:** A reputation built one job at a time

### → block: estimate form (§2.5)

### → block: faqs (+ schema)
1. **Is TEFCO really family owned?** Yes — TEFCO has been family owned since
   1942, and you work directly with the people who build your project.
2. **What metals do you work with?** *(materials list from §1)*
3. **What are the benefits of your powder coating?** Powder coating (added in
   2000) gives a tougher, more uniform, longer-lasting finish than paint — in
   custom-matched colors, with strong corrosion resistance. *(links → /powder-coating/)*

### → block: cta-band
**H2:** Come build with a shop that's been here since 1942. · *Get a Free Estimate*

## 7. Services hub — `/services/`

**Keywords:** *primary* custom iron work Utah · *secondary* metal fabrication
services Ogden, ornamental iron services.

**SEO `<head>`**
- **Title:** `Services — Custom Iron & Metal Fabrication, Ogden UT | TEFCO`
- **Meta:** `Railings, gates, security doors, powder coating, sandblasting & custom fabrication in Ogden, Utah. The best custom iron work the Wasatch Front offers. (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/services/`

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Our **services** *(serif: "all under one roof")*
- **Lede:** Quality craftsmanship and custom fabrication for Ogden and the
  Wasatch Front since 1942. What can we build for you?

### → block: features — service cards (the hub of the topic clusters; each links)
**H2:** What we can do for you
Cards, grouped so the cluster structure is obvious:
- **Ironwork:** Railings · Cable Railing · Floating Stairs · Gates · Security Doors
- **Finishing:** Powder Coating · Sand/Shot Blasting
- **Fabrication:** Custom Fabrication · Planters · Commercial
Each card: 1-line benefit blurb + "Learn more →".

### → block: lsplit — "What we offer" (rewritten unique, links to gallery)
- **H2:** Beautiful, custom ironwork — start to finish
- **Body:** "We've built our reputation on custom ornamental iron: expert design,
  fabrication, finishing, and installation for homes and businesses. From iron
  doors and railings to gates, balconies, planters, and architectural details, if
  it's metal, we can make it — and make it last." → **View Gallery**

### → block: stat-strip (§2.6 variant)

### → block: rev-grid — mixed reviews (#10, #14, #16)

### → block: faqs (+ schema)
1. **What services does TEFCO offer?** Custom iron railings, gates, security
   doors and staircases; powder coating and sandblasting; and full custom metal
   fabrication for residential and commercial clients.
2. **What custom projects can you build?** Edging, fire pits, ladders, radius
   containers, railings, roof racks, table frames, tool boxes, planters, trellises,
   benches, water features, and more — if you can describe it, we can fabricate it.
3. **Do you handle both residential and commercial work?** Yes — from a single
   home railing to large commercial and contractor runs. *(links → /commercial/)*

### → block: cta-band — *Get a Free Estimate*

---

# PART B — IRONWORK CLUSTER (TEFCO's #1 ranking focus)

> Topic cluster: **Railings** is the hub; **Cable Railing** and **Floating
> Stairs** are supporting pages. All three cross-link to each other and up to
> Services. This is the priority cluster per strategy §3.

---

## 8. Railings — `/railings/`  ✅ (built — `railings.html` matches this)

**Keywords:** *primary* custom iron railings Ogden · *secondary* wrought iron
railings Utah, interior/exterior railings, stair railing Ogden, deck railing Utah.

**SEO `<head>`**
- **Title:** `Custom Iron Railings in Ogden, UT — TEFCO`
- **Meta:** `Custom iron railings in Ogden & Weber County, Utah — ornamental, modern, rustic or traditional, hand-crafted by TEFCO since 1942. Free estimates: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/railings/` · **Schema:** Service + FAQPage.

### Content (as built — keep)
- **Hero H1:** Custom Iron Railings *(serif: "built for your home")* · lede: any
  style — ornamental, modern, rustic, traditional — for homes and businesses
  across Ogden and Weber County.
- **lsplit intro:** "Any style. Built to last." — design, fabricate, install;
  measured on site, built in our Ogden shop, finished with in-house powder coating.
- **features — Railing Options:** Ornamental & Traditional · Modern Systems ·
  Cable Railing & Floating Stairs *(internal links)* · Powder Coated In-House.
- **dark parallax accent:** "Finished to handle Utah weather." — weather-resistant,
  hundreds of colors, in-house finish.
- **gallery-feature:** Recent Railing Projects (5 photos) → full gallery.
- **rev-grid:** Marilyn Jones (#6) + Ardie Miller (#1). *(add S. Cobabe #12 or DeHart #10)*
- **faqs:** (1) styles we build (2) do you install (3) how finished.
- **cta-band:** "Ready for your new railing?"

**Improvement vs. old site:** the old railings page wrongly showed *sandblasting*
FAQs — replaced with railing-specific Q&A (done). Add a short **"What affects the
price of a railing"** paragraph (length, material, design complexity, install
access) and link to the new cost guide (§ Part F).

---

## 9. Cable Railing — `/cable-railing/`

**Keywords:** *primary* cable railing Utah · *secondary* stainless cable railing,
deck cable railing Ogden, modern railing Utah.

**SEO `<head>`** *(old site had NO meta description and a copy bug — both fixed)*
- **Title:** `Cable Railing in Ogden, UT — Modern Stainless Systems | TEFCO`
- **Meta:** `Sleek stainless cable railing for decks, stairs & balconies in Ogden, Utah. Custom-built and installed by TEFCO since 1942. Free estimates: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/cable-railing/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Cable Railing *(serif: "with the view left in")*
- **Lede:** Enhance your home or business with sleek, modern cable railing —
  ideal for decks, staircases, and balconies where you want unobstructed views
  and clean lines. *(Fixes the old "floating stairs are more than a staircase…"
  copy bug.)*

### → block: lsplit — "Modern lines, open views"
- **H2:** Custom cable railing, built and installed in Utah
- **Body:** "Cable railing pairs a powder-coated steel or aluminum frame with
  taut stainless cables, so your railing protects without blocking the view. We
  design, tension, and install every system ourselves — engineered to code and
  built to stay tight through Utah's seasons."

### → block: features — "Benefits of cable railing" (6, from old site, kept)
Stylish modern look · Unobstructed views · Durable & long-lasting · Low
maintenance · Increased safety · Versatility (decks, stairs, balconies, interior
or exterior).

### → block: photo-strip — outdoor cable railing (`…/2025/01/outdoor-railing-system-1.jpg`)

### → block: lsplit flip — "Pairs with our other railings"
Internal links: classic **iron railings** (/railings/) · statement **floating
stairs** (/floating-stairs/) · finished with in-house **powder coating**.

### → block: rev-grid — railing reviews (#6, #12)

### → block: faqs (+ schema)
1. **How does cable railing work?** A rigid powder-coated frame holds horizontal
   stainless cables under tension; the cables provide a safe barrier while keeping
   sightlines open.
2. **Is cable railing safe?** Yes — when posts are spaced and cables tensioned to
   code, cable railing meets the same safety requirements as traditional railing.
   We build and install to code.
3. **How much maintenance does cable railing need?** Very little — an occasional
   wipe-down and a yearly check of cable tension. Powder-coated frames resist rust
   and fading.

### → block: cta-band — "Want the view and the railing?" · *Get a Free Estimate*

---

## 10. Floating Stairs — `/floating-stairs/`

**Keywords:** *primary* floating stairs Utah · *secondary* floating staircase,
open-riser stairs Ogden, custom steel stairs.

**SEO `<head>`** *(old site had NO meta description — fixed)*
- **Title:** `Floating Stairs in Ogden, UT — Custom Open-Riser Staircases | TEFCO`
- **Meta:** `Custom floating staircases for Utah homes & businesses — sleek, open-riser steel stairs designed, built & installed by TEFCO since 1942. (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/floating-stairs/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Timeless · Elegant · Unique
- **H1:** Floating Stairs *(serif: "a centerpiece, not just a path")*
- **Lede:** Floating stairs are more than a way between levels — they're a design
  statement. We engineer and build custom open-riser staircases that look like
  they defy gravity, for a sleek, open feel.

### → block: lsplit — "From design to installation"
- **H2:** Custom floating staircases, engineered to last
- **Body:** "Raise the bar with a floating staircase built around your space.
  We handle the structural engineering, fabrication, and installation so the
  finished stair is as safe as it is striking — open risers, hidden stringers,
  and a finish to match your home."

### → block: features — "Benefits of floating stairs" (6, kept)
Sleek modern aesthetic · Space-saving design · Lets in more natural light ·
Customizable materials & treads · Increases home value · Durable & strong.

### → block: overlap-panel OR photo-strip — feature photo (`…/2025/01/shutterstock_2433528987.jpg`)

### → block: lsplit flip — "Pairs with" → cable railing, iron railings (internal links)

### → block: faqs (+ schema) *(fix old "more than 75 years" → 80+)*
1. **Are floating stairs safe?** Yes — properly engineered floating stairs meet
   all building codes. The open look comes from hidden structural supports, not
   from cutting corners on strength.
2. **How much weight can floating stairs hold?** Each stair is engineered to meet
   or exceed residential load codes; we size the steel and connections to your
   specific span and use.
3. **Do floating stairs need a wall?** Not always — they can mount to a wall, a
   hidden central stringer, or a steel structure we build, depending on your
   layout. We'll engineer the right support for your space.

### → block: cta-band — "Ready to make a statement?" · *Get a Free Estimate*

---

## 11. Gates — `/gates/`  ✅ (built — `gates.html`; align to this)

**Keywords:** *primary* custom iron gates Ogden · *secondary* driveway gates
Utah, security gates, entry gates Ogden.

**SEO `<head>`**
- **Title:** `Custom Iron Gates in Ogden, UT — Entry & Security Gates | TEFCO`
- **Meta:** `Custom iron entry & security gates in Ogden, Utah — built and powder-coated by TEFCO since 1942. Driveway, walk & security gates. Free estimates: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/gates/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Custom Iron Gates *(serif: "that make an entrance")*
- **Lede:** Entry gates, driveway gates, and security gates — quality ornamental
  iron and custom fabrication for homes and businesses across Northern Utah.

### → block: lsplit — "Quality custom iron gates in Northern Utah"
- **Body:** "For over 80 years we've built beautiful custom iron gates for our
  Ogden-area customers. We specialize in every type — grand entry gates, driveway
  gates, and security gates — designed to your property and finished with in-house
  powder coating so they look great and hold up for decades."

### → block: features — "What to expect" (rewritten, kept materials)
**Residential or commercial** · **Custom designs** (built to your property, not
off a shelf) · **Built in the right metal** (aluminum, steel, wrought iron, cast
iron, galvanized steel).

### → block: features — "Benefits of a custom iron gate" (4, kept)
Enhanced security · Customization options · Minimal maintenance · Versatility
(automated, manual, swing, slide).

### → block: photo-strip — iron gate (`…/2026/02/Iron-gate-Utah.jpg`)

### → block: lsplit flip — "Add automation & matching ironwork"
Internal links: matching **railings** (/railings/) and **security doors**
(/security-doors/); finished with **powder coating**.

### → block: rev-grid — #14 (deck railing & gate), #10

### → block: faqs (+ schema) — **FIX: old page wrongly showed powder-coating FAQs**
1. **What types of gates do you build?** Entry gates, driveway gates (swing or
   slide), garden and walk gates, and security gates — all custom-fabricated in
   iron, steel, or aluminum.
2. **Can my gate be automated?** Yes — we build gates ready for automatic openers
   and access controls, and can coordinate the operator and gate as one system.
   `[[CONFIRM: do we install openers ourselves or partner?]]`
3. **How are the gates finished so they last?** Every gate is powder-coated
   in-house in your choice of hundreds of colors — a hard finish that resists rust,
   chipping, and fading through Utah weather.

### → block: cta-band — "Ready to upgrade your entrance?" · *Get a Free Estimate*

---

## 12. Security Doors — `/security-doors/`

**Keywords:** *primary* security doors Ogden · *secondary* iron security doors
Utah, custom security screen doors, security screen door Ogden.

**SEO `<head>`**
- **Title:** `Custom Security Doors in Ogden, UT — Iron & Screen | TEFCO`
- **Meta:** `Custom iron security doors & security screen doors in Ogden, Utah — beauty plus protection, built by TEFCO since 1942. Free estimates: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/security-doors/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Custom Security Doors *(serif: "secure, and beautiful")*
- **Lede:** Our custom security doors add real protection from weather, insects,
  and intruders — without sacrificing the look of your home. Built and finished
  in our Ogden shop.

### → block: lsplit — "Northern Utah's best security doors"
- **Body:** "A TEFCO security door does two jobs at once: it secures your home and
  looks like it belongs there. We build to your opening, add features like custom
  kickplates and screen options, and powder coat the finish to match — so you get
  protection that actually improves your curb appeal."

### → block: features — "What to expect" (6, kept)
Improved durability · Added protection · Beauty & functionality · Weather
resistance · Better ventilation (screen options) · Increased home value.

### → block: photo-strip — security door (`…/2024/12/Tefcopics2011-002-1-scaled.jpg`)

### → block: rev-grid — #5 (Rodney Mulder), #4 (Robert Stuart), #13 (Y. Wished)

### → block: faqs (+ schema)
1. **What makes a security door different from a regular door?** A security door
   uses a heavy steel or iron frame, reinforced corners, and a secure lock so it
   resists forced entry — while a screen or grille still lets in air and light.
2. **What are the benefits of a security door?** Protection from intruders and
   weather, better ventilation, longer life than a stock door, and added home
   value — in a custom design that matches your house.
3. **Can a security door match my home's style?** Yes — we build to your opening
   and finish each door with in-house powder coating in your choice of colors, so
   it complements your home instead of looking like an add-on.

### → block: cta-band — "Protect your home in style." · *Get a Free Estimate*

---

# PART C — FINISHING CLUSTER

> **Powder Coating** is the hub; **Sand/Shot Blasting** supports it (blasting is
> the prep step before coating). Cross-link the two heavily. Both pages should
> use a **before/after slider** (`ba-slider`) per the style guide.

---

## 13. Powder Coating — `/powder-coating/`

**Keywords:** *primary* powder coating Ogden · *secondary* powder coating near me,
powder coating Utah, wheel / UTV / automotive powder coating.

**SEO `<head>`** *(FIX old meta that wrongly said "since 1973")*
- **Title:** `Powder Coating in Ogden, UT — Custom Colors | TEFCO`
- **Meta:** `Professional powder coating in Ogden, Utah — wheels, parts, furniture, railings & more. Durable, custom-matched finishes from TEFCO. Free quotes: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/powder-coating/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Powder Coating *(serif: "in hundreds of colors")*
- **Lede:** Ogden's go-to powder coating shop — a tougher, longer-lasting finish
  than paint, for everything from a single set of wheels to thousands of parts.
  *(Note: powder coating added in 2000; do not say "since 1942.")*

### → block: ba-slider — before/after (bare vs. coated wheels: `…/2026/02/wheelspowdercoat.jpg`)
Caption: "Bare metal → durable powder-coated finish. Ogden, Utah."

### → block: lsplit — "Quality powder coating in Utah"
- **Body:** "TEFCO is your go-to powder coating company for residential and
  commercial work — wheels, automotive and UTV parts, patio furniture, railings,
  fencing, machinery, and more. From a single piece to a production run, we
  deliver an unparalleled, even finish and a fast turnaround."

### → block: features — "Benefits of powder coating" (6, kept)
Wide application · Custom color matching · Superior durability (15–20 yrs) ·
Uniform finish · Enhanced corrosion protection · Efficient & fast.

### → block: lsplit flip — "Blasted clean first"
Internal link: every part is prepped with our **sand/shot blasting**
(/sand-shot-blasting/) for a finish that bonds and lasts.

### → block: sec-teal — "Our promise" (powder-coating flavored, satisfaction guarantee)

### → block: rev-grid — powder-coating reviews (#2, #3, #7, #8) — strong proof here

### → block: faqs (+ schema)
1. **How does powder coating work?** A dry pigment is electrostatically sprayed
   onto clean metal, then cured in an oven so it melts into a hard, even shell —
   far more durable than liquid paint.
2. **What are the benefits of powder coating?** It's more durable, more
   eco-friendly (no solvents), and available in far more colors and textures than
   paint — and it resists chips, scratches, and fading.
3. **How do I maintain powder-coated surfaces?** Just wash with mild soap and
   water; avoid abrasive pads and harsh solvents. That's it — the finish does the
   rest.
4. **What can you powder coat?** Wheels, automotive/UTV parts, railings, gates,
   furniture, fencing, machinery, and most metal — bring it in or call for a quote.

### → block: cta-band — "Give us something to coat." · *Get a Free Estimate*

---

## 14. Sand/Shot Blasting — `/sand-shot-blasting/`

**Keywords:** *primary* sandblasting Ogden · *secondary* shot blasting Utah, media
blasting, rust removal Ogden, surface prep for coating.

**SEO `<head>`**
- **Title:** `Sandblasting & Shot Blasting in Ogden, UT | TEFCO`
- **Meta:** `Professional sand & shot blasting in Ogden, Utah — fast rust and coating removal, surface prep done right. TEFCO since 1942. Free quotes: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/sand-shot-blasting/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Sand & Shot Blasting *(serif: "back to bare metal")*
- **Lede:** Strip rust, paint, and corrosion fast with professional sand and shot
  blasting — no chemicals, no scrubbing. The right first step before any coating.

### → block: ba-slider — rusty vs. blasted part (`…/2021/09/Depositphotos_442109094_l-2015.jpg`)

### → block: lsplit — "Residential & commercial blasting in Weber County"
- **Body:** "We've got your prep covered. Sandblasting is fast, thorough, and
  chemical-free — perfect for removing rust, old paint, and scale from metal
  before powder coating or refinishing. From a single part to large commercial
  jobs, we blast it clean and ready."

### → block: features — "Benefits of blasting" (5, kept)
Removes corrosion · Saves time · Non-toxic (no chemicals) · Versatile (many
surfaces) · Extremely effective surface prep.

### → block: lsplit flip — "Then finish it" → internal link to **powder coating** (/powder-coating/)

### → block: faqs (+ schema)
1. **What is sandblasting?** Sandblasting (or media/shot blasting) propels an
   abrasive at high pressure to strip rust, paint, and coatings off a surface,
   leaving clean bare metal ready for finishing.
2. **What surfaces can be blasted?** Metal, wood, glass, concrete, and stone —
   we match the media and pressure to the material.
3. **Is blasting the best way to prep for coating?** Yes — for metal, blasting
   gives the cleanest, best-bonding surface, which is why we blast before powder
   coating.

### → block: cta-band — "Need it stripped and prepped?" · *Get a Free Estimate*

---

# PART D — FABRICATION CLUSTER

---

## 15. Custom Fabrication — `/custom-fabrication/`

**Keywords:** *primary* metal fabrication Ogden · *secondary* custom metal
fabrication Utah, welding Ogden, sheet metal fabrication, 3D metal design.

**SEO `<head>`** *(FIX old "over 73 years")*
- **Title:** `Custom Metal Fabrication in Ogden, UT | TEFCO`
- **Meta:** `Custom metal fabrication & welding in Ogden, Utah — from 3D design to machining and one-off builds. TEFCO since 1942. Free estimates: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/custom-fabrication/` · **Schema:** Service + FAQPage.

### → block: page-hero
- **Eyebrow:** Residential & Commercial
- **H1:** Custom Metal Fabrication *(serif: "if you can sketch it")*
- **Lede:** From 3D design and welding to machining and one-off builds, TEFCO
  turns raw metal into finished products that are tough, precise, and made to
  exceed expectations.

### → block: lsplit — "Quality metal fabrication in Utah"
- **Body:** "We've got every need covered. Bring us a drawing, a photo, or just an
  idea — our crew handles design, cutting, welding, machining, and finishing
  in-house. Whatever you need built, it leaves our shop not just tough and
  durable, but made to last."

### → block: features — "What we can build" (kept project list, scannable)
Edging · Fire pits · Ladders · Radius containers · Railings · Roof racks · Table
frames · Tool boxes · Planters · Trellises · Benches · Water features — and more.

### → block: features — "Advantages of metal fabrication" (4, kept)
Strength & durability · Precision · Corrosion resistance (with the right finish) ·
Scalable (one piece or a production run).

### → block: stat-strip / comparison table — "Metals we work with"
*(Use a table — AI engines lift these.)* Alloy steel · aluminum · carbon steel ·
copper & copper alloys · galvanized steel · iron · nickel · silicon bronze ·
stainless · steel · tool steel · corten — with a one-line "best for" note each.

### → block: lsplit flip — "Finished your way" → internal links: **powder coating**, **sandblasting**

### → block: rev-grid — #8 (bumper), #17 (repeat business)

### → block: faqs (+ schema)
1. **What custom fabrication services do you offer?** Design (including 3D),
   cutting, welding, machining, assembly, and finishing — for residential,
   commercial, and repair work.
2. **What metals do you work with?** *(materials list/table above)*
3. **What can you build for me?** Edging, fire pits, ladders, radius containers,
   railings, roof racks, table frames, tool boxes, planters, and more — if you can
   describe it, we can fabricate it.

### → block: cta-band — "Got a project no one else will take?" · *Get a Free Estimate*

---

## 16. Commercial — `/commercial/`

**Keywords:** *primary* commercial metal fabrication Utah · *secondary*
architectural metalwork Ogden, fabrication for contractors, prefabricated railings.

**SEO `<head>`**
- **Title:** `Commercial Metal Fabrication in Ogden, UT | TEFCO`
- **Meta:** `Commercial metal fabrication for Utah contractors, architects & builders — railings, doors, gates, powder coating & custom work. TEFCO since 1942. (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/commercial/` · **Schema:** Service.

### → block: page-hero
- **Eyebrow:** Custom · Reliable · Durable
- **H1:** Commercial Metal Fabrication *(serif: "built to spec, on schedule")*
- **Lede:** Since 1942, TEFCO has supplied commercial railings, gates, security
  doors, staircases, powder coating, sandblasting, and custom fabrication for
  Utah's contractors, architects, and builders.

### → block: features — "Why contractors choose TEFCO" (FIX old broken cards/links)
Service cards, each linking correctly *(old site linked Security Doors → planters
and copied sandblasting copy onto Custom Fab — fix all)*: Powder Coating ·
Sand/Shot Blasting · Custom Fabrication · Gates · Railings · Security Doors ·
Planters.

### → block: lsplit — "Industries we serve"
Architects · commercial contractors · home & commercial builders · landscape
designers · property managers. "We read plans, hit specs, and communicate — so
your project stays on schedule."

### → block: features — "Why we're easy to build with" (from old bullets)
Attention to detail · punctual · customized quotes · open communication ·
high-quality craftsmanship · unique designs.

### → block: lsplit flip — "What we can do for you"
Sandblasting, powder coating, and metal fabrication at commercial volume —
prefabricated railings, metal & custom doors, metal furniture, aluminum planters,
benches, trellises, water features, fire pits, sheet metal fabrication. *(keeps
the old keyword-rich list, cleaned up — fix "meatal railings" typo)*

### → block: rev-grid — commercial/relationship reviews (#16 B. Riddle, #17 D. Cook)

### → block: cta-band — "Let's talk about your next build." · *Get a Free Estimate*
*(No FAQ on this page — matches old site; optional to add a "lead times / volume"
Q&A later.)*

---

# PART E — PLANTERS CLUSTER (kept as a full product line)

> Hub (`/planters/`) + 5 product pages. Each product page should carry **`Product`
> schema** with dimensions/materials so they're eligible for rich results and AI
> answers. **Avoid duplicate content:** the 5 product pages share a layout but
> must have *unique* intros and dimension tables — don't copy-paste the cube copy
> across all five. Two supporting pages — Planter Colors and Accessories — are
> linked from each product page.

---

## 17. Planters hub — `/planters/`

**Keywords:** *primary* custom metal planters · *secondary* corten steel planters,
aluminum planters Utah, commercial planters, steel planter boxes.

**SEO `<head>`**
- **Title:** `Custom Metal Planters — Aluminum, Steel & Corten | TEFCO`
- **Meta:** `Custom metal planters in aluminum, mild steel & corten — cube, rectangle, pillar & more. Any size, shape or powder-coat color. Built in Ogden by TEFCO. (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/planters/`

### → block: page-hero
- **Eyebrow:** Beautiful · Custom · Unique
- **H1:** Custom Metal Planters *(serif: "in any size or color")*
- **Lede:** Don't see exactly what you need? No problem — we customize any of our
  planters or design a brand-new one in aluminum, mild steel, or corten, in any
  powder-coat color.

### → block: features — "Our planter styles" (5 cards, each links to its page)
**Cube** · **Rectangle** · **Right Angle** · **Pillar** · **Tapered Pillar** —
each with a representative photo and "View sizes →".

### → block: comparison table — "Choose your metal" (great for AI answers)
| Metal | Look | Best for |
|---|---|---|
| **Aluminum** | Lightweight, clean | rooftops, balconies, frequent moves |
| **Mild steel** | Solid, powder-coated any color | most residential & commercial use |
| **Corten** | Natural weathered rust patina | modern/landscape designs, outdoors |

### → block: lsplit — "Made for your space"
- **Body:** "Choose from a range of sizes and three metals, then pick a powder-coat
  color to match your project. Every planter is built in our Ogden shop and can be
  customized — drain holes, casters, irrigation, lighting, and more." Internal
  links: **Planter Colors** (/planter-colors/) · **Accessories** (/accessories/).

### → block: rev-grid — design/quality reviews (#1, #11)

### → block: faqs (+ schema)
1. **What are your planters made from?** Aluminum, mild steel, or corten — each
   finished and built to handle the outdoors.
2. **What accessories can I add?** Irrigation, LED lighting, casters, and even
   integrated sound systems. *(links → /accessories/)*
3. **Can I use them for large plants or small trees?** Yes — we build larger and
   reinforced sizes with proper drainage for trees and big plantings.

### → block: cta-band — "Let's design your planters." · *Get a Free Estimate*

---

## 18. Planter product pages (5) — shared structure, unique copy each

**Common `<head>` pattern:** Title `[Style] Planters — Custom Metal Planters Utah | TEFCO`;
Meta names the style + "aluminum, steel or corten, any size or powder-coat color,
built in Ogden"; Canonical `https://tefcofab.com/[style]-planters/`; **Product schema**.

**Common body blocks (per page):**
- **page-hero:** H1 `[Style] Planters` + one-line unique value prop for that shape.
- **lsplit intro:** what this shape is best for (UNIQUE per page — see notes below).
- **dimension table:** the size/variety options with exact measurements.
- **features:** "Make it custom" — colors (→/planter-colors/), accessories
  (→/accessories/), shapes & sizes; metals (aluminum, mild steel, corten); drain
  holes (removable).
- **gallery-feature:** real planter photos.
- **cta-band:** "Customize your [style] planters."

### 18.1 Cube Planters — `/cube-planters/` (full copy below; template for the rest)
- **Intro angle:** the versatile classic — clean cubes that suit almost any space.
- **Varieties + dimensions (from inventory):**
  - **Classic Cube** — S 18×18×19" · M 22×22×23" · L 28×28×29"
  - **Elevated Cube** — S 18×18×22" · M 22×22×26" · L 28×28×32"
  - **Lipless Block** — S 19×19×14.625" · M 23×23×17.125" · L 29.5×29.5×24.875"
  - **Circle Cube** — S 20×20×18" · M 25×25×23" · L 30.5×30.5×28.5" (drain hole + 2" skid)
  - **Metals:** aluminum, mild steel, corten · designed with removable drain holes.
- **"Make it custom":** custom planter pots, metal/aluminum planters, metal
  furniture, benches, fire pits, water features, metal trellis.

### 18.2 Rectangle Planters — `/rectangle-planters/`
- **Intro angle (unique):** long, low lines for borders, entries, and dividers.
- **Dimensions:** `[[PULL from tefcofab.com/rectangle-planters/]]`

### 18.3 Right Angle Planters — `/right-angle-planters/`
- **Intro angle (unique):** L-shaped planters that wrap corners and patios.
- **Dimensions:** `[[PULL from tefcofab.com/right-angle-planters/]]`

### 18.4 Pillar Planters — `/pillar-planters/`
- **Intro angle (unique):** tall columns that add height and frame entrances.
- **Dimensions:** `[[PULL from tefcofab.com/pillar-planters/]]`

### 18.5 Tapered Pillar Planters — `/tapered-pillar-planters/`
- **Intro angle (unique):** sculptural tapered columns — a modern statement piece.
- **Dimensions:** `[[PULL from tefcofab.com/tapered-pillar-planters/]]`

### 18.6 Planter Colors — `/planter-colors/` (support page)
- **H1:** Planter Colors · short intro: "Every planter is finished with in-house
  powder coating — choose from hundreds of colors and textures." Show the swatch
  set `[[PULL color swatches/images from live page]]`; link back to /planters/.

### 18.7 Planter Accessories — `/accessories/` (support page)
- **H1:** Planter Accessories · features: irrigation systems · LED lighting ·
  casters/wheels · integrated sound systems · custom drainage. Link back to /planters/.

---

# PART F — SUPPORTING PAGES

---

## 19. Gallery — `/gallery/`  ✅ (built — `gallery.html`)

**Keywords:** *primary* iron work gallery Ogden · *secondary* metal fabrication
photos Utah, custom railing/gate/door gallery. (Supports every page via image
search + alt text.)

**SEO `<head>`**
- **Title:** `Project Gallery — Custom Iron Work in Ogden, UT | TEFCO`
- **Meta:** `See TEFCO's custom iron work in Ogden, Utah — railings, gates, security doors, powder coating & more. 80+ years of metal fabrication. Call (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/gallery/`

### Content
- **Hero H1:** Our Work *(serif: "in metal")* · lede: from powder coating to
  railings, gates, doors and full fabrication.
- **Filter categories (keep as filter chips + jump links):** Powder Coating ·
  Indoor Railings · Outdoor Railings · Security Doors · Gates · Commercial.
- Each category gets a **1-line intro** (helps SEO + AI) and a photo grid.
- **Every image needs descriptive, location-rich alt text** (service + "Ogden /
  Weber County, Utah") — fixes the old empty/placeholder alt issue.
- **Action:** pull the full per-category image URL list directly from the live
  `/gallery/` page (~150 photos) when populating.
- Closing CTA: "See something you like?" → *Get a Free Estimate*.

---

## 20. Reviews — `/reviews/`

**Keywords:** *primary* TEFCO reviews Ogden · *secondary* metal fabrication
reviews Utah, ornamental iron testimonials.

**SEO `<head>`**
- **Title:** `Reviews — TEFCO Custom Iron & Powder Coating, Ogden UT`
- **Meta:** `Read reviews of TEFCO of Utah from Ogden-area homeowners, builders & businesses — 4.6 ★ on Google. Custom iron, fabrication & powder coating since 1942.`
- **Canonical:** `https://tefcofab.com/reviews/`
- **Schema:** `AggregateRating` (4.6/29) + individual `Review` items.

### → block: page-hero / sec-head
- **H1:** What our customers say
- **Sub:** 4.6 ★ from 29 Google reviews — and counting. From homeowners to
  builders to commercial clients, here's what working with TEFCO is like.

### → block: rev-grid (cols-3 or masonry) — the FULL review set
Display all reviews from the pool (§3) + the dedicated `/reviews/` set: T. Burr,
L. Ellis, R. DeHart, C. Gazewood, J. Opheikens, S. Cobabe, P. Hoyt, R. Mulder,
Y. Wished, J. Stellmon, M. Jones, J. Schulze, E. Duke, B. Riddle, D. Cook, Ardie
Miller, Robert Stuart. (Full quotes in CONTENT-INVENTORY §4.16/§2.) Each: 5★,
name, "Google Review".

### → block: cta-band — "Want to be our next 5-star review?" · *Get a Free Estimate*
**Also:** add a "Leave us a review" button → the GBP review link. `[[CONFIRM: GBP review URL]]`

---

## 21. Contact Us — `/contact-us/`  &  Get a Quote — `/get-a-quote/`

**Keywords:** *primary* metal fabrication Ogden contact · *secondary* custom iron
shop Ogden, free estimate ironwork Utah.

**SEO `<head>` (Contact)**
- **Title:** `Contact TEFCO — Custom Iron Shop in Ogden, UT`
- **Meta:** `Contact TEFCO of Utah — Ogden's custom iron & fabrication shop since 1942. Call (801) 621-1010 or request a free estimate. 120 9th Street, Ogden, UT 84404.`
- **Canonical:** `https://tefcofab.com/contact-us/`
- **Schema:** `ContactPage` + `#business` reference; embed Google Map.

### → block: page-hero / split
- **H1:** Contact us · lede: "Need to talk to a fabrication specialist? Call us or
  request a free estimate — we'll walk you through your options."

### → block: contact + form (two-column)
- **Left — details:** hours (Mon–Fri 8:00 AM–4:30 PM); phone `(801) 621-1010`;
  **email `info@tefcofab.com`** *(FIX: old icon linked to `media@tefco.com`)*;
  address with Google Maps directions link; embedded map.
- **Right — estimate form** (§2.5).
- **SMS compliance line (keep):** "To stop receiving SMS messages, reply STOP.
  See our Privacy Policy."

### → block: cta-band — "Prefer to talk it through? Call (801) 621-1010."

### 21.1 Get a Quote — `/get-a-quote/`
Standalone estimate form page (the §2.5 form, full-page).
- **Title:** `Get a Free Estimate — TEFCO Custom Iron, Ogden UT`
- **Meta:** `Request a free, no-obligation estimate from TEFCO of Utah — custom iron, fabrication & powder coating in Ogden. Or call (801) 621-1010.`
- **H1:** Get a free estimate · short reassurance copy (no obligation, family
  owned since 1942, we respond fast) + the form + NAP.

---

## 22. FAQs — `/faqs/`

**Keywords:** *primary* metal fabrication FAQ Ogden · supports AI answers across topics.

**SEO `<head>`**
- **Title:** `FAQs — Custom Iron, Powder Coating & Fabrication | TEFCO`
- **Meta:** `Answers to common questions about TEFCO's custom iron, powder coating, sandblasting & fabrication in Ogden, Utah. Or just call us: (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/faqs/` · **Schema:** `FAQPage` (all Q&A here).

### → block: faqs grouped by topic (aggregates the per-page FAQs — one master list)
- **General:** What does TEFCO make? · What's your service area? · Are you family
  owned? · Do you offer free estimates? · Are you licensed & insured?
  `[[CONFIRM: license/insurance line]]`
- **Railings & stairs:** railing styles · do you install · how finished · are
  floating stairs safe · do floating stairs need a wall · is cable railing safe.
- **Gates & security doors:** gate types · gate automation · what makes a security
  door different · benefits · can it match my home.
- **Powder coating & blasting:** how powder coating works · benefits · maintenance
  · what is sandblasting · what surfaces · best prep for coating.
- **Fabrication & planters:** what can you build · what metals · planter materials
  · planter accessories.
> Each answer = one-sentence direct answer, then detail. Keep them in sync with
> the per-page FAQs (same wording) so schema is consistent.

### → block: cta-band — "Didn't see your question? Just ask." · *Call / Free Estimate*

---

## 23. Privacy Policy — `/privacy/`  &  Sitemap — `/sitemap/`
- **Privacy:** keep the existing legal boilerplate (port verbatim); ensure the
  SMS/Privacy language matches the Contact page line. `[[CONFIRM: keep current
  privacy text or update]]`. Title `Privacy Policy — TEFCO`; `noindex` optional.
- **Sitemap (HTML):** simple linked list of all pages (footer link). Also ship an
  **XML sitemap** + `robots.txt` at launch (strategy §9).

---

# PART G — NEW STRATEGIC PAGES (added per CONTENT-STRATEGY §4)

> These pages don't exist on the old site. They target the buyer's biggest
> questions ("what's it like to work with you?", "what will it cost?", "show me
> proof"), which converts visitors and earns AI citations.

---

## 24. Our Process — `/our-process/`  ⭐ NEW

**Keywords:** *primary* custom ironwork process Utah · *secondary* how custom
fabrication works, what to expect TEFCO.

**SEO `<head>`**
- **Title:** `Our Process — How TEFCO Builds Your Project | Ogden, UT`
- **Meta:** `From free estimate to installation — see how TEFCO designs, fabricates, powder coats & installs your custom iron in Ogden, Utah. Call (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/our-process/`
- **Schema:** `HowTo` (optional) + `#business` reference.

### → block: page-hero
- **Eyebrow:** What To Expect
- **H1:** From idea to installed *(serif: "our process")*
- **Lede:** Working with a custom shop shouldn't be a mystery. Here's exactly how
  your project goes from first call to finished install — five clear steps.

### → block: features OR numbered steps — the 5 steps
1. **Free estimate & consult** — Call or send the form. We learn your goal,
   measure if needed, and give you a clear, no-obligation quote. *(no surprises)*
2. **Design** — We turn your idea (or sketch, or photo) into a buildable design,
   including 3D when it helps, and confirm materials, finish, and color with you.
3. **Fabricate** — Our crew cuts, welds, and builds your project by hand in our
   Ogden shop — the same way we have since 1942.
4. **Finish** — We sandblast and powder coat in-house for a hard, even,
   long-lasting finish in your chosen color.
5. **Install** — Our own team installs for a precise fit and stands behind the
   work with our satisfaction guarantee. `[[CONFIRM: warranty wording]]`

### → block: stat-strip — In-house design→install · 80+ yrs · Free estimates · 4.6★

### → block: lsplit — "One shop, start to finish"
"Because we design, build, finish, and install under one roof, nothing gets lost
between vendors — and you talk to the people actually doing the work."

### → block: faqs (+ schema)
1. **How long does a project take?** It depends on scope and our current
   schedule — we give you a realistic timeline with your estimate. `[[CONFIRM:
   typical lead times]]`
2. **Do you handle installation?** Yes — our own crew installs everything we build.
3. **What does an estimate cost?** Nothing — estimates are always free and
   no-obligation.

### → block: cta-band — "Ready for step one?" · *Get a Free Estimate*

---

## 25. What Affects Cost — `/cost/` (or section reused across service pages)  ⭐ NEW

**Keywords:** *primary* cost of custom ironwork Utah · *secondary* iron railing
cost Ogden, powder coating cost Utah, how much does a gate cost.
*(Captures high-intent "cost" searches without publishing fixed prices.)*

**SEO `<head>`**
- **Title:** `What Affects the Cost of Custom Iron Work | TEFCO Ogden`
- **Meta:** `What drives the price of custom railings, gates, powder coating & fabrication in Utah — and how to get an accurate free estimate from TEFCO. (801) 621-1010.`
- **Canonical:** `https://tefcofab.com/cost/`

### → block: page-hero
- **H1:** What affects the cost of custom iron work *(serif: "and how to budget")*
- **Lede (one-sentence answer first):** Most custom iron projects are priced by
  size, material, design complexity, finish, and installation — here's how each
  factor moves the number, and why a free estimate is the only accurate quote.

### → block: features / table — the cost factors
- **Size & quantity** — more linear feet or more pieces = more material and labor.
- **Material** — aluminum vs. steel vs. stainless vs. corten each price
  differently.
- **Design complexity** — simple modern lines cost less than detailed ornamental
  scrollwork.
- **Finish** — powder coat color/texture and prep (blasting) add to the base.
- **Installation** — access, height, and site conditions affect install time.

### → block: sec-teal — "Why we don't list flat prices"
"Every custom project is different, so a one-size price would either overcharge or
underdeliver. Instead we give you a detailed, free, no-obligation estimate built
around your exact job." → *Get a Free Estimate*

### → block: lsplit — "Get the most accurate quote"
Tips: have measurements, photos, and your color/material preference ready; tell us
residential or commercial; mention your timeline. Internal links to each service.

### → block: faqs (+ schema)
1. **How much does a custom iron railing cost in Utah?** It varies with length,
   material, and design — we give a firm number in a free estimate, usually within
   `[[CONFIRM: response time]]`.
2. **Do you offer free estimates?** Always — free and no-obligation.
3. **Is powder coating worth the added cost?** Yes — it lasts far longer than
   paint, so it lowers your long-term cost. *(link → /powder-coating/)*

### → block: cta-band — "Get your number — free." · *Get a Free Estimate*

> **Alternative:** if a standalone `/cost/` page feels thin, embed a short "What
> affects the price" section into each service page instead (Railings, Gates,
> Powder Coating) and skip the standalone page. Recommended: build the standalone
> page *and* add a 2–3 sentence cost note + link on each service page.

---

## 26. Project Case Studies — `/projects/` (hub) + `/projects/[slug]/`  ⭐ NEW

**Keywords:** *primary* custom iron projects Ogden · per-study long-tail (e.g.
"16-foot driveway gate North Ogden").

**Hub `/projects/`**
- **Title:** `Project Case Studies — TEFCO Custom Iron, Ogden UT`
- **Meta:** `Real TEFCO projects across Ogden & Northern Utah — custom railings, gates, security doors & fabrication, from problem to finished install. (801) 621-1010.`
- **H1:** Project case studies · grid of case-study cards (photo + title + location).

**Each case study `/projects/[slug]/` — structure (great for SEO + AI + social):**
1. **Title** = the project + location (keyword-rich): e.g. "How we built a 16-ft
   automated driveway gate in North Ogden."
2. **The challenge** — what the customer needed (1 short para).
3. **What we built** — design, material, finish, any custom detail.
4. **The result** — outcome + a customer quote if available.
5. **Photos** (before/after where possible) + **embedded video** (`VideoObject` schema).
6. **CTA** → the related service page + *Get a Free Estimate*.
- **Schema:** `Article`/`CreativeWork` + `VideoObject` + `BreadcrumbList`.
- **Seed list (build 3–5 first, from real jobs):** a driveway gate · an indoor
  ornamental staircase railing · a powder-coating wheel/UTV job · a security-door
  install · a commercial railing run. `[[CONFIRM: which real jobs + photos we can use]]`

---

# PART H — BLOG / CONTENT ENGINE (`/blog/`)

> The blog is the growth engine (strategy §8): each post is a new ranking page for
> a real question, feeds AI answers, and links to a money page. One real job or
> topic → 1 article + 1 video + social + a GBP post.

### Blog hub — `/blog/`
- **Title:** `Blog — Iron, Fabrication & Powder Coating Tips | TEFCO Ogden`
- **Meta:** `Guides and project stories from TEFCO of Utah — railing care, powder coating, cost guides & more for Ogden-area homeowners and builders. (801) 621-1010.`
- **H1:** TEFCO blog · post grid (title, category, thumbnail, date).

### Post template (every post)
- Keyword-targeted **title** (the searched question) · meta · canonical · OG ·
  `Article` schema (+ `VideoObject` if embedded) · `BreadcrumbList`.
- **Structure:** one-sentence answer up top → scannable sections with `<h2>`/lists/
  tables → a relevant photo or embedded video → **internal link to the money page**
  → closing **CTA to a free estimate**.
- 600–1,000 words, written for humans, primary keyword used naturally.

### Launch article queue (each maps to a money page)
| # | Working title (target search) | Links to |
|---|---|---|
| 1 | How much does powder coating cost in Utah? (2026 guide) | /powder-coating/, /cost/ |
| 2 | Powder coating vs. paint: which lasts longer? | /powder-coating/ |
| 3 | How to keep wrought iron railings rust-free through a Utah winter | /railings/ |
| 4 | Cable railing vs. glass vs. traditional: pros, cons, cost | /cable-railing/ |
| 5 | Are iron security doors worth it? Security, value & style | /security-doors/ |
| 6 | Corten vs. aluminum vs. steel planters: how to choose | /planters/ |
| 7 | Do floating stairs need a wall? How we engineer them safely | /floating-stairs/ |
| 8 | What is shot blasting, and when do you need it? | /sand-shot-blasting/ |
| 9 | How we built a 16-ft driveway gate in North Ogden (project) | /gates/, /projects/ |
| 10 | Spring deck railing refresh: powder coat or replace? | /railings/, /powder-coating/ |

> Publish ~weekly. Repurpose each into a YouTube video (embed back into the post),
> 3–5 social posts, and 1 Google Business Profile post linking to the article.

---

# PART I — LOCAL / CITY LANDING PAGES (build only for markets we truly serve)

> Strategy §3: city pages win "near me" searches *only if each has genuine, unique
> content* — never copy-paste with the city name swapped. Start with the 2–3
> biggest markets in the "SLC-and-north" target. Recommended first three:
> **Ogden** (home base), **Layton**, **Salt Lake City**.
> `[[CONFIRM: which cities to publish first]]`

### City page template — `/[city]-metal-fabrication/` (or `/iron-railings-[city]/`)
- **Title:** `Custom Iron & Metal Fabrication in [City], UT | TEFCO`
- **Meta:** names the service + `[City]` + phone.
- **Canonical:** the city URL · **Schema:** `Service` with `areaServed → [City]`.
- **Unique content required (not boilerplate):**
  - **H1:** Custom iron & metal fabrication in **[City], Utah**.
  - A genuinely local intro: distance/relationship to Ogden, neighborhoods or
    landmarks, the kind of work we do *there* (e.g. snow-country railings).
  - **2–3 real [City] projects** (photos) or [City] reviews — proof we work there.
  - Services offered, each linking to the main service page (the city page
    supports, doesn't replace, the service hub).
  - A [City]-specific FAQ ("Do you serve [City]?" → yes, with travel/area detail).
  - CTA + NAP + map.
- **Do not** publish a city page we can't fill with real, local proof — Google
  treats thin doorway pages as spam.

**First three (build in this order):**
1. **Ogden** — home base; strongest. Lead with "our shop is here."
2. **Layton** — major Davis County market south of Ogden.
3. **Salt Lake City** — biggest metro in the target area; emphasize we serve SLC north.

---

# PART J — SEO PRESERVATION & MIGRATION

## 27. URL / redirect map (keep all existing ranking equity)

**Rule:** keep every existing URL identical where possible. If a URL changes (or
we move from flat `gates.html` to `/gates/`), add a **301 redirect** old → new so
rankings transfer. New pages have no old URL — no redirect needed.

| Old URL (tefcofab.com) | New page | Action |
|---|---|---|
| `/` | Home | keep |
| `/about-us/` | About | keep |
| `/services/` | Services hub | keep |
| `/railings/` | Railings | keep |
| `/cable-railing/` | Cable Railing | keep (add meta + fix copy bug) |
| `/floating-stairs/` | Floating Stairs | keep (add meta) |
| `/gates/` | Gates | keep (fix FAQ) |
| `/security-doors/` | Security Doors | keep |
| `/powder-coating/` | Powder Coating | keep (fix "1973" meta) |
| `/sand-shot-blasting/` | Sand/Shot Blasting | keep |
| `/custom-fabrication/` | Custom Fabrication | keep (fix "73 years") |
| `/commercial/` | Commercial | keep (fix broken cards) |
| `/planters/` + 5 types | Planters cluster | keep all |
| `/planter-colors/`, `/accessories/` | support pages | keep |
| `/gallery/` | Gallery | keep |
| `/reviews/` | Reviews | keep (add schema) |
| `/contact-us/`, `/get-a-quote/` | Contact / Quote | keep (fix email) |
| `/faqs/` | FAQs | keep (master FAQPage) |
| `/blog/` | Blog | keep |
| `/privacy/`, `/sitemap/` | legal | keep |
| — | `/our-process/` | **NEW** |
| — | `/cost/` | **NEW** |
| — | `/projects/` + studies | **NEW** |
| — | city landing pages | **NEW** |

## 28. Old-site content bugs this document fixes (from CONTENT-INVENTORY §6)

1. ✅ **Missing metas** — Cable Railing & Floating Stairs now have metas (§9, §10).
2. ✅ **Company-age inconsistency** — standardized to **1942 / 80+ years**
   everywhere; powder coating noted as **added 2000** (§1).
3. ✅ **Cable Railing copy bug** — hero no longer says "floating stairs…" (§9).
4. ✅ **Mismatched FAQs** — Gates gets gate FAQs (was powder coating); Railings
   gets railing FAQs (was sandblasting) — both with FAQ schema (§8, §11).
5. ✅ **Commercial page errors** — "meatal" typo, Security-Doors-→-planters bad
   link, sandblasting copy pasted onto Custom Fab + raw URL — all fixed (§16).
6. ✅ **Contact email** — `info@tefcofab.com` everywhere (was `media@tefco.com`) (§21).
7. ✅ **"Securtiy Doors" footer typo** — fixed in global footer (§2.3).
8. ✅ **"Google" social link** — points to GBP, not Instagram (§2.4).
9. ✅ **No structured data** — full JSON-LD suite specified per page (§4).
10. ✅ **Thin/empty alt text** — descriptive, location-rich alt required on every
    image (§4, §19).
11. ✅ **Duplicate content** — same 7 testimonials + repeated feature blocks +
    reused FAQs replaced with per-page unique copy and a mapped testimonial pool (§3).

## 29. Suggested build sequence (maps to strategy §11 priorities)

**Phase 1 — core port with unique copy + schema (first 30 days)**
Home → Services hub → the **ironwork cluster** (Railings ✅, Cable Railing,
Floating Stairs, Gates ✅, Security Doors) → **finishing cluster** (Powder Coating,
Sand/Shot Blasting) → Custom Fabrication → About → Contact/Quote → Gallery ✅ →
Reviews → FAQs. Add **Our Process** and the **cost** content. Fix all §28 bugs.
Set up sitemap, robots, Search Console, GA4, redirects.

**Phase 2 — depth & conversion (31–60 days)**
Planters cluster (hub + 5 + colors/accessories) → Commercial → launch **/blog/**
with articles #1–4 → add 3–5 **case studies** + before/after sliders on powder
coating & blasting.

**Phase 3 — authority & scale (61–90 days)**
Build the top **city landing pages** (Ogden, Layton, SLC) → keep the weekly blog/
video/GBP engine running → expand whichever clusters show traction in Search Console.

## 30. Open items to confirm before publish (all `[[CONFIRM]]` slots, collected)
- Warranty/guarantee wording beyond "100% satisfaction guarantee" (used on Home,
  About, Our Process, service pages).
- Contractor license # and insurer line (Home/About/FAQs trust copy).
- Final service-area **city list** to name in copy + GBP.
- **GBP URL** (footer "Google" link) and **GBP review link** (Reviews page button).
- Gate automation: do we install openers or partner?
- Typical **lead times / estimate response time** (Our Process, Cost FAQs).
- Real **projects + photos/video** we may publish as case studies.
- Planter sub-page **dimensions** for Rectangle, Right Angle, Pillar, Tapered
  Pillar (pull from live pages) + Planter Colors swatches.
- Keep vs. update the **Privacy Policy** text.
- Final **URL structure** (flat vs. folder) — then lock redirects.

---

*End of master content document. Pair this with `STYLE-GUIDE.md` (how to build the
pages) and the block kit in `tefco-blocks.html` (what to paste). `CONTENT-INVENTORY.md`
holds the full original copy + image URLs; `CONTENT-STRATEGY.md` holds the why.*
