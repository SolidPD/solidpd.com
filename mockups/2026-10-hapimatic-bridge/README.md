# Hapimatic bridge — prototype renders (2026-10-15)

Working prototype of how solidpd.com links to Hapimatic: the standard hardware
product-design firm (this site) and the agentic AI platform (hapimatic.com),
bridged at three points on the homepage plus one landing page.

The renders below are screenshots of the real HTML on this branch
(`index.html`, `agentic.html`), not drawings. Serve the repo root locally
(`python3 -m http.server 8000`) to click through the same thing.

## Handoff: read this first (2026-10-15)

**Everything is on this branch.** The prototype is hand-edited static HTML with no build step: `index.html`,
`agentic.html`, the assets under `images/assets/hapimatic/` and `images/assets/Other Images/optimized/firmware.jpg`,
and these renders. Nothing outside the repo is needed to continue.

**Preview.** Every push to this branch runs `.github/workflows/deploy.yml`, which publishes a Netlify draft
deploy with its own URL. The URL reviewed on 2026-10-15 was https://6ad0c02cae53d41bbb5d83c9--solidpd.netlify.app/ .
To find the URL of the latest push:

```
gh run list --repo SolidPD/solidpd.com --branch ms/hapimatic-bridge-mockups --limit 1
gh run view <run-id> --repo SolidPD/solidpd.com --log | grep -o 'https://[^ >]*--solidpd.netlify.app' | sort -u
```

**This branch and `feature/multipage-rebuild` both start from `main` (9c32d96) and diverge.** That branch (Matt
Bell, 2026-10-09) splits the site into pages, moves the services cards to `services.html`, turns the homepage
sections into teasers, and rebuilds `agentic.html`. This branch keeps the single-page homepage. Merging one into the
other conflicts across the whole of `index.html`, so the recommended path is to keep `feature/multipage-rebuild`
as the base and port the pieces below into it. Use this branch as the visual reference.

| Piece on this branch | Where it goes on `feature/multipage-rebuild` |
| --- | --- |
| AGENTIC AI nav pill: class `nav-highlight` plus its CSS, including the 768 px rule | Every page already has an AGENTIC AI nav item. Add the class and CSS on each page. |
| Hero second button "AI at the Bench": `.hero-ctas`, `.btn-ghost` | `index.html` hero, beside "Let's Build Together". |
| Bridge band `#agentic`: copy, loop strip, Hapimatic window with the inlined bench figure, `.bridge-*` CSS, and the `.dg` / `.pcbg` figure rules scoped under `.bridge-window` | Replaces or extends the "AGENTIC AI TEASER" section of `index.html`. That branch sets the page background to `#1A1A1A`, the same color as the band, so give the band a different background or a border. |
| Firmware & Embedded Software card: `.flip-card-wide` plus `firmware.jpg` | `services.html`, after its six flip cards. |
| Footer Hapimatic byline: `.footer-hapimatic` | `.footer-bottom` on every page. |
| "Built on Hapimatic" section on `agentic.html`: `#hapimatic`, `.hapimatic-card*`, and `id="engagements"` on "What We Can Do for You" | That branch's `agentic.html`, after "We Closed the Loop — In-House". |

**Open framing decision.** The `feature/multipage-rebuild` version of `agentic.html` says the capability was
"built in-house" and names no tools, so it never mentions Hapimatic. This branch names Hapimatic and links to
hapimatic.com and to GitHub. The in-house framing predates the hapimatic.com launch. Decide which framing ships before
porting the agentic page.

**Line endings.** The site's HTML files use CRLF. The first push of this branch converted `index.html` to LF by
mistake; a later commit restored CRLF, so `git diff origin/main` shows only the real change. Keep CRLF when porting.

**Production.** Merging to `main` deploys solidpd.com immediately. The repo's `CLAUDE.md` requires an explicit
production confirmation first. The publish blockers are listed under "Before publishing" below.

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
