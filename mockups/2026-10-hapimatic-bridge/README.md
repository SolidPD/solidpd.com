# Hapimatic bridge — prototype renders (2026-10-15)

Working prototype of how solidpd.com links to Hapimatic: the standard hardware
product-design firm (this site) and the agentic AI platform (hapimatic.com),
bridged at three points on the homepage plus one landing page.

The renders below are screenshots of the real HTML on this branch
(`index.html`, `agentic.html`), not drawings. Serve the repo root locally
(`python3 -m http.server 8000`) to click through the same thing.

## Homepage (`index.html`)

| File | What it shows |
| --- | --- |
| `A1-home-hero-desktop.png` | Nav gains an **AGENTIC AI** pill (same blue-highlight treatment as the hero's "HARDWARE"). Hero gains an optional secondary ghost button, "AI at the Bench". |
| `A2-home-bridge-desktop.png` | New **bridge band** between "The SOLID Difference" and Services: SPD copy on the left, a Hapimatic "window" on the right showing the Hardware Bench figure from hapimatic.com. Two CTAs: the landing page, and hapimatic.com. |
| `A3-home-footer-desktop.png` | Footer byline mirroring hapimatic.com's SPD byline: Hapimatic wordmark + one sentence + GitHub link. |
| `A4-home-hero-mobile.png` | iPhone 16 width (393 px). Buttons stack. |
| `A5-home-menu-mobile.png` | Hamburger menu with the AGENTIC AI pill as the last item. |
| `A6-home-bridge-mobile-1.png`, `A7-home-bridge-mobile-2.png` | The bridge band on mobile: copy, loop strip, CTAs, then the Hapimatic window. |

## Services grid (`index.html`, decision E2)

| File | What it shows |
| --- | --- |
| `C1-home-services-firmware-desktop.png` | A seventh card, **Firmware & Embedded Software**, as a full-width featured row under the six existing cards (an odd seventh card would otherwise orphan in the two-column grid). Photo: the Solid Labs electronics workstation. |
| `C2-home-services-firmware-back-desktop.png` | The flipped side: four bullets in two columns, the last naming the agentic test cells. |
| `C3-home-services-firmware-mobile.png` | Same card at 393 px, where it is simply one more card in the single column. |

## Decisions taken 2026-10-15 (Matt S)

Nav pill as rendered; hero secondary button kept; bridge band stays after The SOLID Difference; the Hapimatic window keeps Hapimatic's own palette; a Firmware & Embedded Software card is added to Services.

## Landing page (`agentic.html`)

Matt Bell's 2026-08-02 draft (`draft/agentic-ai-page`) with three changes: the
nav matches the live site (SOLID LABS was removed from the header in #138),
a **Built on Hapimatic** section follows "We Closed the Loop", and the
"What We Can Do for You" section gets `id="engagements"` so the third card
can point at it.

| File | What it shows |
| --- | --- |
| `B1-agentic-hero-desktop.png` | Draft hero with the corrected nav and the draft banner still on. |
| `B2-agentic-hapimatic-desktop.png` | The new section: three cards for the three ways in: open-source core (GitHub), hosted Hardware Bench (hapimatic.com, in pilot), and SPD engineering engagements. |
| `B3-agentic-hero-mobile.png`, `B4-agentic-hapimatic-mobile.png` | Same at 393 px. |

## Before publishing (not resolved by this branch)

- The draft still carries `[headline metric TBD]` in "Results We've Demonstrated". It must be replaced or the bullet cut.
- `agentic.html` still has `noindex, nofollow` and the orange DRAFT banner. Both come off at publish.
- Claims in the draft copy (two years, thermal camera coverage, smoke-triggered cutoff, e-stop chain, twenty years of embedded experience) need the same evidence check hapimatic.com's copy went through.
- Hapimatic wording follows hapimatic.com: "Hapimatic" (capital H only), "in pilot, contact us", no pricing, the bench is a paid add-on of the hosted service and not part of the open-source core.

## Reference

`reference/` holds the live solidpd.com and hapimatic.com captures the prototype was matched against.
