# TEFCO — Image Assets Needed (placeholders in the build)

Where the old tefcofab.com site had no usable image, the Astro build shows a
**dashed "IMAGE NEEDED" placeholder** with a short description (via the `Photo`
component's `note`). This file lists every placeholder so you can source/shoot
the real photo. Replace the placeholder by setting the image URL/path in the
page's front-matter (`img=`, `bg=`, `after=`, etc.) or in `src/data/`.

> Most pages already use real photos pulled from tefcofab.com. The items below
> are the gaps. Aim for landscape, well-lit, real TEFCO work where possible.
> Give each a descriptive, location-rich alt text (service + "Ogden/Weber County, UT").

## High priority (money pages)

| Page | Slot | What it should show |
|---|---|---|
| Home / Services cards | Planters card (`src/data/site.ts`) | A row of custom metal planters (cube + pillar) with plants, styled outside a modern home or commercial entry in Utah. |
| Home / Services cards | Commercial card (`src/data/site.ts`) | A commercial install — a long prefabricated railing run on a stairwell/balcony, or architectural metalwork on a Utah commercial building. |
| Powder Coating | Before/after **"before"** | Bare/rusty or stripped metal wheels (or parts) on the shop floor, unfinished — pairs with the existing coated "after" wheels shot. |
| Sand/Shot Blasting | Before/after **both** | "Before": a rusty/painted/corroded part (railing, bumper, gate, machinery). "After": the same part blasted to clean bright bare metal. |
| Commercial | "Industries we serve" split | A finished architectural metalwork install — prefabricated railing run, or a contractor job site with TEFCO ironwork. |
| Commercial | "What we can do" split | The shop handling a commercial batch — racks of parts being powder coated, or a run of railings/doors staged for delivery. |

## Planters cluster

| Page | Slot | What it should show |
|---|---|---|
| Planters hub | Hero + style cards (×5) + lifestyle split | Custom metal planters (aluminum/steel/corten) styled with plants — one clean shot per style: cube, rectangle, right-angle, pillar, tapered pillar. |
| Cube / Rectangle / Right-Angle / Pillar / Tapered Pillar | Hero + intro + "beyond planters" | A styled product shot of that specific planter shape with plants (studio or lifestyle). |
| Planter Colors | Hero + swatch graphic | The actual powder-coat color swatch set (pull swatch images from tefcofab.com/planter-colors/), or several planters in different finishes. |
| Accessories | Hero | A planter with a visible accessory — integrated LED lighting at dusk, irrigation, or casters. |

## Supporting

| Page | Slot | What it should show |
|---|---|---|
| What Affects Cost | "Be ready" split | An estimate moment — reviewing measurements/a sketch on site, or a tape measure on a railing. |

## Also to localize (currently hot-linked from tefcofab.com)

The live site's photos are loaded directly from `tefcofab.com/wp-content/...`.
Before launch, download and self-host these under `public/images/` (and update
the URLs) so the site doesn't depend on the old WordPress host. The hero video
and logo are already localized to `/video/hero.mp4` and `/images/tefco-logo.webp`.
