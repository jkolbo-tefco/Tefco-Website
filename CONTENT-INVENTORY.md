# TEFCO — Content Inventory (port from tefcofab.com)

Captured from the live **tefcofab.com** site for porting into the new code
project. For each page: SEO metadata (title, meta description, canonical, OG),
headings, body copy, images, and FAQs. Global elements that repeat on every
page (header, footer, contact info, the estimate form, the recurring
testimonials and feature blocks) are captured once in **§2** so per-page entries
only list what's unique.

> **Goal:** preserve the existing on-page SEO (titles, descriptions, headings,
> alt-worthy content) when rebuilding, then improve from there. See **§6** for
> SEO observations and issues found on the live site that we should fix.

---

## 1. Site map / index

```
/                          Home
/about-us/                 About Us
  /privacy/                Privacy Policy        (legal boilerplate — not captured in detail)
  /reviews/                Reviews
  /faqs/                   FAQs
  /blog/                   Blog                  (dynamic post listing — not captured)
/services/                 Services (hub)
  /powder-coating/         Powder Coating
  /sand-shot-blasting/     Sand/Shot Blasting
  /custom-fabrication/     Custom Fabrication
  /gates/                  Gates
  /railings/               Railings
  /security-doors/         Security Doors
  /commercial/             Commercial
  /planters/               Planters (hub)
    /cube-planters/        Cube Planters
    /rectangle-planters/   Rectangle Planters    (same template as Cube)
    /right-angle-planters/ Right Angle Planters  (same template as Cube)
    /pillar-planters/      Pillar Planters       (same template as Cube)
    /tapered-pillar-planters/  Tapered Pillar Planters (same template as Cube)
  /cable-railing/          Cable Railing
  /floating-stairs/        Floating Stairs
/gallery/                  Gallery
/contact-us/               Contact Us
  /get-a-quote/            Get a Quote
/planter-colors/           Planter Colors        (referenced from planter pages)
/accessories/              Planter Accessories   (referenced from planter pages)
/sitemap/                  Sitemap (footer link)
```

---

## 2. Global elements (repeat site-wide)

### Business / NAP
- **Name:** TEFCO (Tefco of Utah)
- **Phone:** (801) 621-1010 — `tel:8016211010`
- **Email:** info@tefcofab.com
- **Address:** 120 9th Street, Ogden, UT 84404
- **Hours:** Monday – Friday, 8:00 AM – 4:30 PM
- **Founded:** 1942 (see §6 — the site is inconsistent about the year/age)
- **Maps:** Google Maps link to "Tefco of Utah, 120 9th St, Ogden, UT 84404"

### Social links
- Facebook: https://www.facebook.com/profile.php?id=100079254513295
- Instagram: https://www.instagram.com/tefco.ofutah/
- "Google" (footer) currently points to the Instagram URL — see §6

### Logo
- `https://tefcofab.com/wp-content/uploads/2026/02/Tefco_Primary_Logo_Clear-1.png`

### Primary nav (header)
Home · About Us · Services · Gallery · Contact Us · phone
(About Us submenu: Privacy Policy, Reviews, FAQS, Blog. Services submenu lists
all service + planter pages. Contact submenu: Get a Quote.)

### Footer
- Byline: "Welcome to TEFCO. We've been creating ornamental iron & custom
  fabrication since 1942. Please call or use our online form to speak with a
  team member. We look forward to working with you!"
- **Quick Links:** Home, About Us, Services, Gallery, Contact Us
- **Services:** Powder Coating, Sand/Shot Blasting, Custom Fabrication, Gates,
  Railings, Security Doors, Commercial, Planters, Cable Railing, Floating Stairs
- Hours, social icons, phone/email/address (as above)
- Bottom bar: "copyright © 2026 Tefco | all rights reserved | sitemap | privacy policy"

### Estimate form ("Get an Estimate" — appears on nearly every page)
Fields: **Name**, **Phone**, **Email Address**, **Project Address**,
**Tell Us About Your Project**, **Submit**

### Recurring feature blocks (4-up; wording varies slightly per page)
- **Custom Designs** — "quality custom designs that are truly unique"
- **Newest Technology** — "stay up to date on all the latest trends and technology"
- **High-Quality Products** — "knowledge and experience to provide an unparalleled level of products"
- **Trusted Reputation** — "built our reputation on making beautiful custom ornamental iron products"
(Some pages swap in: Superior Service, 100% Satisfaction, 80+ Years Experience.)

### Recurring testimonials (the standard 7, used on Home + most service pages)
1. **Ardie Miller** — "Tefco, known for their expertise in creating railings, went above and beyond to fulfill my unique request for a frame to install a mosaic on. They crafted a custom frame as per my specifications, including a rail and a four-foot aluminum disk with a quarter-inch ring, and powder-coated it in chocolate brown. The completed frame was then installed at the Ogden Botanical Gardens, showcasing my Forever Blooming mosaic."
2. **Carik Gazewood** — "They do great work! Best powder coating, holds up great! Professional service!!"
3. **Patrick Hoyt** — "I'm very impressed with Tefco. I've used a couple other powder coaters in the Ogden area and have never been satisfied. Tefco is hands down the best. The quality of the finish was excellent and the turn around time and price were exceptional. You won't be disappointed."
4. **Robert Stuart** — "Very knowledgeable. I came in looking for a lock for a security screen door for my mother that was outdated; they knew exactly what kind of lock it was and gave me a free lock. He also told me how the lock worked and how to maintain them. 5 stars."
5. **Rodney Mulder** — "Tefco built a security door for us. It's by far the best door we have. We simply love it. It looks great, is very functional, and really provides the security we needed. It also got rid of the draft problem we had too. Fantastic job! Thanks Tefco!!!"
6. **Marilyn Jones** — "We were very happy with the wrought iron railing Tefco made for our front porch. They were professional and eager to please. They heard our needs and offered good advice."
7. **Jason Stellmon** — "I haven't used their fabrication services, but I've always been happy with the outcome of anything I've had them powder coat. Have been there multiple times, and will continue to do so."
(The dedicated **/reviews/** page has a longer set — see §4.)

---

## 3. Service-area & shared image assets (real hosted URLs)

Logo + recurring icons/photos that aren't page-specific:
- Service icons: `Asset-3@2x.png` (powder coating), `Asset-6@2x.png` (sandblasting),
  `Asset-8@2x.png` (custom fab), `Asset-7@2x.png` (gates), `Asset-2@2x.png` (railings),
  `Asset-1@2x.png` (security doors), `Asset-4@2x.png` (planters) — all under
  `/wp-content/uploads/2024/11/`
- Feature icons: `pr-firm-icon-6-dark.png`, `-3-dark`, `-1-dark`, `-10-dark` (`/2024/11/`)
- Reviews stars: `/wp-content/uploads/2026/04/Stars.png`

The **Gallery** is the main image library (~150 photos across Powder Coating,
Indoor Railings, Outdoor Railings, Security Doors, Gates, Commercial). Full URL
list is long — pull directly from `/gallery/` when building the gallery page.
Representative hero/featured images are noted per page below.

---

## 4. Pages

### 4.1 Home — `/`
- **Title:** Custom Iron Manufacturer - Tefco
- **Meta description:** Need a custom iron manufacturer for gates, railings, security doors, sandblasting, powder coating & more! Call TEFCO at (801) 621-1010.
- **Canonical:** https://tefcofab.com/
- **OG:** title "Custom Iron Manufacturer - Tefco"; type website
- **H1:** Northern utah's trusted metal manufacturing & powder coating
  - eyebrow: "Welcome to tefco"
- **Intro:** "Since 1942 TEFCO has been specializing in Railings, Security Gates & Doors, Powder Coating, Sandblasting, Staircases, Custom Planters, and more. Call now to get started!"
- **CTAs:** call now / get quote
- **H2 OUR SERVICES** — 6 cards: Powder Coating, Sand/Shot Blasting, Custom Fabrication, Gates, Railings, Commercial (each with blurb + "Learn more >")
- **H2 trusted metal fabrication shop** — "We've got all your needs covered: from residential, to commercial, repairs, and everything in between. We specialize in all kinds of ornamental iron work. From powder coating, sand/shot blasting to custom fabrication, gates, railing and security doors, we can help." + "Due to the level of our quality craftsmanship over the last 80 years, we've built a trusted reputation in the Ogden area & throughout Utah."
- **H2 our promise** — "Our work is second to none. We promise. And behind that promise, we back our work with a satisfaction guarantee… free estimate…"
- Feature blocks: custom designs / newest technology / high-quality products / trusted reputation
- Testimonials: the standard 7 (§2)
- **H2 rely on the best — choose tefco.** — "With over 80 years of experience in welding and metal working, TEFCO of Utah has the equipment and skills necessary to get the job done right…"
- **H2 view our latest work** — gallery teaser → view gallery
- Estimate form (§2)
- **FAQs:** (1) What custom fabrication services do you provide? (2) What metals do you work with? (3) What custom made projects can you assist with? — *(full answers already in our index.html FAQ section / earlier capture)*
- **Key images:** hero railing `…/2024/11/101810-003-scaled.jpg`; security door `…/2026/05/image-77.png`; railing system `…/2026/02/Indoor-modern-railing-system…png`; shop `…/2024/11/Tefcopics2011-008-scaled.jpg`; powder-coat wheels `…/2026/02/wheelspowdercoat.jpg`; UTV cage `…/2021/11/utv-cage-gray-powder-coat.jpg`

### 4.2 About Us — `/about-us/`
- **Title:** About Us | Tefco | Custom Ornamental Iron
- **Meta description:** Tefco is your go to custom ornamental iron manufacturer since 1942. Call us today (801) 621-1010 for you next custom iron project.
- **Canonical:** https://tefcofab.com/about-us/
- eyebrow "best metal fabrication" · **H1:** about us · sub "Quality ornamental iron, custom fabrication, shotblasting, powder coating & more." · CTA view services
- **H2 experience you can trust.** — "TEFCO has been serving Weber County with high-rated ornamental iron products and services since 1942. Over the years, we have earned a reputation for quality craftsmanship and unique one of a kind designs… We take pride in getting to know our customers and putting their needs first… Our knowledgeable crew takes on jobs of any size and we have been able to create some pretty amazing products over the last 79 years…"
- 3 blocks: **High-quality products**, **superior service**, **100% satisfaction**
- **H2 unparalled quality & detail** — "TEFCO takes metal and creates art. Custom Metal Fabrication & Ornamental Iron work…" + get quote
- **H2 unique metal works & services** — "Combining our knowledge and experience, we can provide products and services that will 'wow!'… give us a call today at (801) 621-1010 or reach out through our online form…"
- 4 feature blocks: custom designs / newest technology / **80+ years experience** / trusted reputation
- Testimonials: standard 7
- **H2 100% satisfaction guaranteed** — satisfaction-guarantee paragraph + get in touch
- Estimate form
- **FAQs:** (1) What metals do you work with? (2) What fabrication services do you provide? (3) What are the benefits of your powder coating services? (4-point answer: extent of application, customized color matching, durability & uniform finish, resistance to corrosion)

### 4.3 Services (hub) — `/services/`
- **Title:** Services | Tefco | Best Custom Iron Work Utah Has To Offer
- **Meta description:** Tefco provides the best custom iron work Utah has to offer; railings, security doors, gates, custom fabrication & more. (801) 621-1010
- **Canonical:** https://tefcofab.com/services/
- **H1:** our services · "We've been providing quality craftmanship & custom fabrication to Ogden & the Wasatch Front for over 80 years. What can we help you with?"
- **8 service cards** (each links + Learn More): powder coating, sandblasting, Custom Fabrication, gates, railings, security doors, planters, commercial
- **H2 what we can offer you** — "At TEFCO, we've built our reputation on making beautiful, custom ornamental iron products… expert design, fabrication, and installation for residential and commercial projects… iron doors and railings to gates, balconies, and architectural details…" → VIEW GALLERY
- 4 feature blocks (custom designs / newest technology / high-quality products / trusted reputation)
- Testimonials: standard 7
- **H2 rely on the best — choose tefco.** — "…you can trust our skilled and experienced technicians… your go-to custom iron company in Ogden."
- Estimate form
- **FAQs:** (1) What fabrication services do you provide? (2) What custom fabricated projects can you help with? (Edging, Fire Pits, Ladders, Radius Containers, Railings, Roof Racks, Table Frames, Tool Boxes, Planters…) (3) What are the benefits of powder coating? (Durability / Eco-friendly / Variety)

### 4.4 Powder Coating — `/powder-coating/`
- **Title:** Powder Coating | Tefco | Custom Iron Fabrication
- **Meta description:** Tefco is a powder coating company in Ogden. We've also provided ornamental iron work & sand/shot blasting since 1973. Call (801) 621-1010
- **Canonical:** https://tefcofab.com/powder-coating/
- eyebrow "residential, commercial" · **H1:** powder coating · "We've provided quality shot blasting, sandblasting, powder coating & more since 1942. Have a project in mind? Give us a call today for a free quote!"
- **H2 QUALITY POWDER COATING IN UTAH** — "TEFCO of Utah is your go-to powder coating company… from residential, to commercial, and everything in between… From a single metal piece to thousands, we offer an unparalleled level of service…"
- **H2 benefits of powder coating** — 6 blocks: EXTENT OF APPLICATION, COLOR MATCHING, SUPERIOR DURABILITY (15-20 yrs), UNIFORM FINISH, ENHANCED PROTECTION, EFFICIENT AND FAST
- **H2 ogden's best powder coating** — "…contact the powder coating pros for your free estimate at (801) 621-1010."
- **H2 our promise** (standard promise copy, powder-coating flavored)
- 4 feature blocks; testimonials: standard 7
- **H2 why choose us** — "…over a decade of experience in welding and metal working…"
- Estimate form
- **FAQs:** (1) How does powder coating work? (electrostatic spray + curing oven) (2) What are the benefits of powder coating? (Durability / Eco-friendly / Variety) (3) How do I maintain powder-coated surfaces? (mild soap & water; avoid abrasives)

### 4.5 Sand/Shot Blasting — `/sand-shot-blasting/`
- **Title:** Sand/Shot Blasting | Tefco | Sandblasting Company in Ogden
- **Meta description:** Tefco is your go-to sandblasting/shot blasting company in Ogden. Give us a call today at (801) 621-1010 for all your unique iron projects.
- **Canonical:** https://tefcofab.com/sand-shot-blasting/
- eyebrow "residential and commercial" · **H1:** sandblasting · "Remove corrosion with professional sand/shot blasting…"
- **H3 sand/ shot blasting** "Residential & Commercial Sandblasting in Weber County" — "We have got all your needs covered… Sandblasting is generally a very quick process… No chemicals, scrubbing…"
- **H2 benefits of sandblasting** — 5 blocks: removes corrosion, saves time, non-toxic, versatile, extremely effective
- **H2 our promise** (standard)
- 4 feature blocks; testimonials: standard 7
- **H2 We have a vision** — "…over 80 years of welding and metal working experience…"
- **Key image:** `…/2021/09/Depositphotos_442109094_l-2015.jpg` (shot-blasting)
- Estimate form
- **FAQs:** (1) What is sandblasting? (2) What surfaces can be sandblasted? (Metal, Wood, Glass, Concrete, Stone) (3) Is sandblasting the best way to prepare a surface for coating?

### 4.6 Custom Fabrication — `/custom-fabrication/`
- **Title:** Custom Fabrication | Tefco | Ornamental Iron Company
- **Meta description:** Tefco has been the go-to Ogden custom fabrication company for over 73 years. For custom railings, doors, & gates call (801) 621-1010.
- **Canonical:** https://tefcofab.com/custom-fabrication/
- eyebrow "residential, commercial" · **H1:** custom fabrication · "We've been providing quality ornamental iron & custom fabrication services since 1942…"
- **H2 quality metal fabrication in utah** — "TEFCO has all your needs covered… From welding, 3D design to machining and custom metal work…"
- **H2 what to expect from us** — 3 blocks: high-quality work, Custom designs, trusted reputation
- **H2 Northern Utah full-service metal fabrication shop** — "…not only tough and durable, they're made to exceed expectations…" + free estimate (801) 621-1010
- **H2 advantages of metal fabrication** — 4 blocks: strength & Durability, Precision, corrosion resistance, Scalable
- testimonials: standard 7; **H2 reasons to choose TEFCO**
- **Key image:** `…/2026/02/Custom-outdoor-railing-system.png`
- Estimate form
- **FAQs:** (1) What custom fabrication services do you offer? (2) What metals do you work with? (alloy steel, aluminum, carbon steel, copper, copper alloys, galvanized steel, iron, nickel, silicon bronze, stainless, steel, tool steel) (3) What custom fabricated projects can you help me with? (Edging, Fire Pits, Ladders, Radius Containers, Railings, Roof Racks, Table Frames, Tool Boxes, Planters)

### 4.7 Gates — `/gates/`
- **Title:** Gates | Tefco | Custom Iron Gates Utah
- **Meta description:** When you need a custom iron gates, Tefco of Utah is your #1 custom iron fabrication shop of choice. Call us today at (801) 621-1010.
- **Canonical:** https://tefcofab.com/gates/
- eyebrow "residential & commercial" · **H1:** iron gates · "When it comes to gates, we offer quality ornamental iron & custom fabrication…"
- **H2 quality custom iron gates in northern utah** — "…The beautiful custom iron work we've provided our customers for over 80 years… We specialize in all types of custom iron gates including entry gates and security gates…"
- **H2 what to expect from us** — 3 blocks: residential or commercial, Custom designs, high-quality products (aluminum, steel, wrought iron, cast iron, galvanized steel)
- **H2 northern utah's best iron gates** — form/function paragraph + get a quote
- **H2 key benefits of custom iron gates** — 4 blocks: Enhanced Security, Customization Options, minimal Maintenance, Versatility
- testimonials: standard 7; **H2 reasons to choose tefco**
- **Key image:** `…/2026/02/Iron-gate-Utah.jpg`
- Estimate form
- **FAQs:** (1) How does powder coating work? (2) What are the benefits of powder coating? (3) How do I maintain powder-coated surfaces? *(note: gates page reuses powder-coating FAQs — candidate to swap for gate-specific Qs)*

### 4.8 Railings — `/railings/`
- **Title:** Railings | Tefco | Custom Iron Railings
- **Meta description:** Tefco of Utah is the iron company for ornamental iron work, including custom iron railings, gates, security doors. Call (801) 621-1010 today.
- **Canonical:** https://tefcofab.com/railings/
- eyebrow "residential & commercial" · **H1:** iron railings · "We design unique railing solutions to fit any space…"
- **H3 custom iron railings** "Ogden's Residential & Commercial Iron Railings" — "We specialize in all types of railing systems. Since 1942… Whether you love ornamental, modern, rustic, or traditional, we can make it…"
- **H2 interior and exterior railing systems** — 3 blocks: balcony rails, handrails, spiral railings & More
- **H2 our promise** (railing-flavored)
- 4 feature blocks; testimonials: standard 7; **H2 why choose us**
- **Key image:** `…/2026/02/Indoor-modern-railing-system-e1770237188274.png`
- Estimate form
- **FAQs:** (1) What is sandblasting? (2) What types of surfaces can be sandblasted? (3) Is sandblasting the best choice to prepare a surface for coating? *(note: railings page reuses sandblasting FAQs — candidate to swap for railing-specific Qs)*

### 4.9 Security Doors — `/security-doors/`
- **Title:** Security Doors | Tefco | Custom Security Doors & More
- **Meta description:** Tefco of Utah has provided quality ornamental iron products, including custom security doors since 1942. Call us today at (801) 621-1010.
- **Canonical:** https://tefcofab.com/security-doors/
- eyebrow "residential & commercial" · **H1:** security doors · "We provide quality ornamental iron & custom fabricated security doors…"
- **H2 northern utah's best security doors** "Residential & Commercial Security Doors in Ogden, UT" — "Our custom security doors offer beauty and added protection from weather, insects and intruders… custom kickplates…"
- **H2 what to expect from TEFCO** — 6 blocks: improved Durability, added protection, beauty & functionality, Weather Resistance, better ventilation, increased home value
- **H2 our promise**; 4 feature blocks; testimonials: standard 7; **H2 experience you can trust**
- **Key image:** `…/2024/12/Tefcopics2011-002-1-scaled.jpg`
- Estimate form
- **FAQs:** (1) What makes a security door different from a regular door? (2) What are the main benefits of installing a security door? (3) Can security doors match the style of my home?

### 4.10 Commercial — `/commercial/`
- **Title:** Commercial | Tefco | Custom Iron Fabrication
- **Meta description:** As a professional metal fabricator, TEFCO will discuss all your fabrication options & guide you through the process. Call (801) 621-1010 now.
- **Canonical:** https://tefcofab.com/commercial/
- eyebrow "custom, reliable, durable" · **H1:** commercial services · "Since 1942 TEFCO has been specializing in Commercial Railings, Security Gates & Doors, Powder Coating, Sandblasting, Staircases, Custom Planters, and more…" · call now / get quote
- **H2 why contractors choose tefco** — service cards: Powder Coating, Sand/Shot Blasting, Custom Fabrication, Gates, Railings, planters, Security Doors *(see §6 — several cards have wrong links/copy on the live site)*
- **H2 Best commercial fabrication** — industries served: Architects, Commercial Architects, Commercial Contractors, Home Builders, Commercial Builders, Landscape Designers, Commercial Designers
- **H2 what we can do for you** — sandblasting / powder coating / metal fabrication paragraph
- 4 blocks: custom designs, 80+ yrs experience, superior service, 100% satisfaction
- testimonials: standard 7
- **H2 choose to work with the best** — bullet list: attention to detail, punctual, customized quotes, open communication, high-quality craftsmanship, unique designs
- **H2 view our latest work** — long keyword list (sheet metal fabrication, prefabricated railings, metal doors, custom doors, metal furniture, aluminum planters, benches, metal trellis, water features, fire pits…)
- Estimate form. (No FAQ section on this page.)

### 4.11 Planters (hub) — `/planters/`
- **Title:** Planters - Tefco | Custom Planters
- **Meta description:** TEFCO offers unique planters including cube planters, pillar planters, rectangle planters, tapered pillar planters, and right angle planters.
- **Canonical:** https://tefcofab.com/planters/
- eyebrow "beautiful, custom, unique" · **H1:** planters · "Don't see what you need? No problem. We can customize any of our planters or design completely new ones…"
- **H2 quality, Custom Planters** — links to the 5 planter types (cube, rectangle, right angle, pillar, tapered pillar)
- **H2 our promise** — "…choose from a variety of sizes and three types of metal (aluminum, mild steel, and corten)…"
- 4 feature blocks; testimonials: standard 7
- **H2 why choose us** / **H2 WE'RE ON A MISSION**
- Estimate form
- **FAQs:** (1) What material are your planters made from? (aluminum, mild steel, corten) (2) What type of planter accessories do you provide? (irrigation, LED lights, casters, sound systems) (3) Can I use fabricated planters for larger plants or small trees?

### 4.12 Cube Planters — `/cube-planters/` (template shared by all 5 planter sub-pages)
- **Title:** Cube Planters | Tefco | Custom Cube Planters Utah
- **Meta description:** Our cube planters are designed to make any area come to life. We can customize your planters to any shape, size, paint or powder coat color.
- **Canonical:** https://tefcofab.com/cube-planters/
- **H1/H2 cube planters** — "available in 4 varieties – Classic, Lipless, Elevated, and Circle… any shape, size, paint, or powder coat color… designed with drain holes (removable)."
- **Customization sections:** Colors (link to `/planter-colors/`), Accessories (link to `/accessories/`), Shapes and Sizes
- **Planter options w/ dimensions:**
  - Classic Cube — S 18×18×19", M 22×22×23", L 28×8×29"
  - Elevated Cube — S 18×18×22", M 22×22×26", L 28×28×32"
  - Lipless Block — S 19×19×14.625", M 23×23×17.125", L 29.5×29.5×24.875"
  - Circle Cube — S 20×20×18", M 25×25×23", L 30.5×30.5×28.5" (drain hole + 2" skid)
  - Metals: aluminum, mild steel, corten
- **H2 Make it custom** — custom planter pots, metal/aluminum planters, metal furniture, benches, fire pits, water features, metal trellis
> **Rectangle / Right Angle / Pillar / Tapered Pillar planters** follow this same
> layout with their own dimensions and titles — fetch each when porting.

### 4.13 Cable Railing — `/cable-railing/`
- **Title:** Cable Railing - Tefco
- **Meta description:** ⚠️ **MISSING** on the live site (no meta description) — add one when porting.
- **Canonical:** https://tefcofab.com/cable-railing/
- eyebrow "residential & commercial" · **H1:** cable railing · ⚠️ intro text mistakenly reads "Floating stairs are more than a staircase…" (copy bug — fix to cable-railing copy)
- **H3 cable railing utah** "Custom Designs to Quick Installations…" — "Enhance your home or business with sleek and stylish cable railing. Ideal for decks, staircases, and balconies… unobstructed views and clean lines…"
- **H2 benefits of cable railing** — 6 blocks: Stylish/Modern Look, unobstructed views, durable & long-lasting, low maintenance, Increased Safety, versatility
- **H2 our promise**; 4 feature blocks; testimonials: standard 7; **H2 why choose us**
- **Key images:** `…/2025/01/outdoor-railing-system-1.jpg`; `…/2025/01/470600498_1148356203958053_3132734559770478428_n.jpg`
- Estimate form
- **FAQs:** (1) How does cable railing work? (2) Is cable railing safe? (3) How much maintenance does cable railing require?

### 4.14 Floating Stairs — `/floating-stairs/`
- **Title:** Floating Stairs - Tefco
- **Meta description:** ⚠️ **MISSING** on the live site — add one when porting.
- **Canonical:** https://tefcofab.com/floating-stairs/
- eyebrow "Timeless, elegant, Unique" · **H1:** Floating stairs · "Floating stairs are more than just a way to travel from one level to the next, they're a design element all on their own…"
- **H3 quality floating stairs** "From Custom Designs to Fast Installation…" — "…Raise the bar with custom floating stairs… defy gravity… sleek, open aesthetic…"
- **H2 benefits of floating stairs** — 6 blocks: sleek/modern aesthetic, space-saving design, enhanced natural light, customizable features, Increased Value, durability & strength
- **H2 our promise**; 4 feature blocks; testimonials: standard 7; **H2 why choose us** (note: says "more than 75 years")
- **Key image:** `…/2025/01/shutterstock_2433528987.jpg`
- Estimate form
- **FAQs:** (1) Are floating stairs safe? (2) How much weight can floating stairs hold? (3) Do floating stairs require extra wall support?

### 4.15 Gallery — `/gallery/`
- **Title:** Gallery | Tefco | Custom Iron Work
- **Meta description:** We've been providing the best custom iron work in Ogden and the surrounding area for over 73 years. Call Tefco of Utah today (801) 621-1010.
- **Canonical:** https://tefcofab.com/gallery/
- eyebrow "residential, commercial" · **H1:** gallery · "From powder coating to metal fabrication, railings, doors & more…"
- **Categories (jump links):** powder coating, indoor railings, outdoor railings, security doors, gates, commercial
- Each category has an intro line + a large photo grid (~150 images total across categories). Closing CTA "see something you like?" + contact.
- **Action when porting:** pull the full image URL list per category directly from this page; it's the site's primary photo library.

### 4.16 Reviews — `/reviews/`
- **Title:** Reviews - Tefco
- **Meta description:** Check out reviews of TEFCO of Utah from homeowners and builders. Read about our custom metal fabrication, craftsmanship, & more!
- **Canonical:** https://tefcofab.com/reviews/
- **H2 What our customers have to say** — intro about homeowners/builders/commercial clients
- **Reviews (5-star, with Stars.png):** T. Burr (powder-coated bumper, Ray, fast); L. Ellis (easy & polite, problem solving); R. DeHart (nine railings + three storm doors, excellent quality); C. Gazewood; J. Opheikens (efficient, pleased); S. Cobabe (railing & grab posts); P. Hoyt; R. Mulder (security door); Y. Wished (security screen door lock, 5 stars); J. Stellmon; M. Jones; J. Schulze (indoor railings + outdoor deck railing+gate, fair price); E. Duke (responsive, made it right); B. Riddle (5-yr relationship, top notch); D. Cook (honest, repeat business)
- (No estimate form / FAQ on this page.)

### 4.17 Contact Us — `/contact-us/`
- **Title:** Contact Us Tefco | Custom Iron Shop
- **Meta description:** Tefco of Utah has been the top custom iron shop in the area for over 73 years. Call today with your next iron project (801) 621-1010.
- **Canonical:** https://tefcofab.com/contact-us/
- **H1:** contact us · "Need to talk to a fabrication specialist? Give us a call today and receive an estimate…"
- Open hours, phone, **email** (⚠️ email icon links to `mailto:media@tefco.com` while text shows info@tefcofab.com — fix), address w/ Google Maps directions link
- SMS compliance line: "To stop receiving SMS… reply STOP… Privacy Policy: https://tefcofab.com/privacy/"
- Estimate form
- **Get a Quote** (`/get-a-quote/`) is essentially the standalone estimate form.

---

## 5. Recurring CTAs / phrases to keep (brand voice)
"free estimate / free quote", "satisfaction guarantee", "our work is second to
none", "since 1942", "residential & commercial", "from the simple to the
lavish", "you're going to love the end result", "make your vision a reality",
"Ogden & the Wasatch Front", "Weber County", "Northern Utah".

---

## 6. SEO observations & issues found on the live site

**Preserve (already good):**
- Every page has a unique `<title>`, meta description, canonical, and Open Graph
  block. Port these **verbatim** to keep ranking signals, then refine.
- Clear single `<h1>` per page; keyword-relevant section `<h2>`s.
- WordPress "modified_time" article tags present.

**Fix / improve when porting:**
1. **Missing meta descriptions:** `/cable-railing/` and `/floating-stairs/` have
   **no** meta description. Write one for each.
2. **Inconsistent company age:** pages variously say "since 1942", "since 1973"
   (powder-coating meta), "over 73 years", "79 years", "75 years", "80+ years".
   Standardize on **1942 / 80+ years**.
3. **Copy bug — Cable Railing:** the hero intro says "Floating stairs are more
   than a staircase…" (wrong service). Rewrite for cable railing.
4. **Mismatched FAQs:** Gates page shows powder-coating FAQs; Railings page shows
   sandblasting FAQs. Replace with topic-appropriate Q&A (and add `FAQPage` schema).
5. **Commercial page errors:** "meatal railings" typo; the **Security Doors**
   card links to `/planters/`; the Custom Fabrication card description is copied
   from sandblasting and contains a raw URL. Clean these up.
6. **Contact email link:** the email icon uses `mailto:media@tefco.com` — should
   be `info@tefcofab.com`.
7. **Footer "Securtiy Doors"** typo (also present in our new footers — fix
   everywhere).
8. **"Google" social link** points to the Instagram URL — point it to the Google
   Business Profile or remove.
9. **No structured data (JSON-LD)** detected in the live markup. The new site
   already adds `LocalBusiness` + `Service` + `FAQPage` schema — a real
   improvement to carry forward to every page.
10. **Lazy-load alt text:** many gallery/section images render as SVG
    placeholders with empty/generic alt. When porting, give every image
    descriptive, location-rich alt text (service + "Ogden/Weber County, Utah").

---

## 7. Status of the port (new site)
- **Built:** `index.html` (home), `railings.html`, `gates.html` — already use the
  real copy above + improved SEO (schema, OG, lighter imagery, zone layout).
- **To build from `tefco-page-scaffold.html` + `tefco-blocks.html`:** Powder
  Coating, Sand/Shot Blasting, Custom Fabrication, Security Doors, Commercial,
  Planters (hub + 5 sub-pages), Cable Railing, Floating Stairs, About Us,
  Services hub, Gallery, Reviews, Contact/Get-a-Quote, FAQs, Privacy, Blog.
- Use this document as the content source; pull exact gallery image URLs and the
  remaining planter sub-page dimensions directly from the live pages when building.
