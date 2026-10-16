# Brand & Craft Review — 2026-10-16

Scope: all 8 pages on `feature/multipage-rebuild` (at commit `9729d83`), reviewed against
`docs/solidpd-brand-guide-v1.0.pdf` (v1.0, April 2025) and a top-tier-firm craft bar.

**Status: parked.** Findings only — no fixes applied. This branch exists to hold the overhaul
effort so it doesn't block getting a good-enough version live.

## Method and limits

Everything below is measured from source, not estimated: exact palette compliance, WCAG contrast
math, type scale against the brand's 2x rule, logo geometry decoded from the PNG, semantics,
payload, and cross-page rule drift.

**Not covered:** visual craft — spacing rhythm, image crops, hover feel, real-device mobile. The
review environment could not render pages (no `libatk`, no sudo to install it). For a "looks like a
top-tier design firm" judgment that half matters as much and still needs eyes on a preview.

---

## CRITICAL

### 1. A 16.75 MB PNG ships on two pages
`images/assets/Our Work - Neuralert.png` is 3840x2160 RGBA, **16.75 MB**, 2.12 bytes/pixel — an
unoptimized export. It renders in a teaser card a few hundred pixels wide, on both `index.html` and
`work.html`. No optimized variant exists.

`work.html` uses **zero `srcset`** across all 24 images. `index.html` has a proper `<picture>` for
the hero only.

| Page | Image payload | srcset |
| --- | --- | --- |
| work | **22.4 MB** | none |
| index | 20.6 MB | hero only |
| services | 1.6 MB | none |
| labs | 4.5 MB | none |

`loading="lazy"` defers but does not shrink. Scrolling the Work page pulls ~22 MB.

### 2. The primary CTA fails WCAG AA on every page
`.btn-primary` is `#FFFFFF` on `#0495F6` = **3.17:1**. Button text is 16px / weight 600 — not
"large text" under WCAG, so 4.5:1 is required.

This is a brand-level tension, not a coding slip: the brand's default blue cannot carry white text
accessibly at body size. In-palette fixes: `#0263A3` (blue-600) with white = 6.33:1, or keep
`#0495F6` with black text = 6.62:1.

Same root cause elsewhere:
- `.nav-highlight` pill — white on `#0495F6` = 3.17:1 (added 2026-10-16)
- `.hapimatic-card-link` — `#0495F6` on `#333333` = 3.99:1 (added 2026-10-16)

### 3. `about.html` has no `<h1>`
Opens at `<h2>`. Every other content page has one.

### 4. `team.html` is a stub but sits in the main nav on all 7 pages
Entire content: "Meet the Team — Full team bios coming soon." Bios are not approved and photos are
not sourced. Either pull it from the nav until bios land, or do not publish it.

### 5. Placeholder client logos are in the markup
`work.html` references 16 placeholder images, `about.html` 4 — including `client-neuralert.png`,
`client-strella.png`, `client-hubly-surgical.png`. Only 3 real client logos exist in the repo.

---

## SHOULD-FIX

### 6. Quicksand headings below the brand's 2x rule
Guide: *"Headings using Quicksand should be at least twice the size of the body text. For smaller
headings, use DM Sans at a weight of Bold or heavier."* Body is 16px, so the floor is 32px.

| Selector | Page | Size | Note |
| --- | --- | --- | --- |
| `h1` (mobile) | index | 28.8px | all 7 other pages use 32px |
| `.section-intro h2` | index | 25.6–36px | fails at min |
| `.section-heading` | agentic | 25.6–38.4px | fails at min |
| `.flip-card-front h3` | services | 24px | fails |
| `.workspace-card h3` | labs | 20.8px | fails |
| `.bridge-title` | index | 30.4–44px | fails at min (added 2026-10-16) |

### 7. The homepage `h1` scales differently from every other page
`clamp(2rem, 5vw, 4.5rem)` vs `clamp(2.5rem, 5vw, 4rem)` elsewhere.

### 8. Nav blur missing in Safari on 6 of 7 pages
`index.html` and `labs.html` carry `-webkit-backdrop-filter`; `about`, `services`, `work`,
`contact`, `team`, `agentic` do not. Safari went unprefixed only in 18.0, so on Safari/iOS <= 17 the
frosted nav works on the homepage and nowhere else. Blur radius also differs (12px vs 10px).

### 9. Heading-level skips
`services.html` and `work.html` both jump `h1` -> `h3`.

### 10. `--gray-30` is `#B3B3B3`; the brand guide says `#B2B2B2`
On all 8 pages. `CLAUDE.md` records the wrong value too, so it will keep being reintroduced until
the doc is corrected.

### 11. `labs.html` is orphaned
Nothing links to it. Still deploys, with a stale nav (no AGENTIC AI item), its own footer structure,
three off-palette colors (`#0380D6`, `#F5F5F5`, plus `#666666` usage), different logo sizes, and
4.5 MB of images. Delete it or relink and bring it into the system.

### 12. Nav and footer logos have no `width`/`height`
Both, on all 7 pages. The nav logo is above the fold and not lazy — guaranteed layout shift.

### 13. Off-palette status colors
`#86EFAC` and `#FCA5A5` (contact form success/error). The brand guide defines no semantic status
colors — a genuine gap in the guide. Worth deciding once and adding to v1.1.

### 14. Hapimatic green in site-wide chrome
`#5AE6AB` is the footer-byline link hover on all 7 pages. The 2026-10-15 decision approved
Hapimatic's palette *for the bridge window*; the byline carried it further.

---

## POLISH

### 15. 133 KB of inline CSS, re-shipped per page
Only **49 rules** are identical across all 7 rebuilt pages (~30 KB pure duplication). Drift is
already measurable: `:root` differs (`--dark-blue` defined on 3 pages, used on 1, absent on 4),
`.page-header` padding has three different values, `.footer-content` has three. `CLAUDE.md` calls
inline CSS deliberate — at 2 pages that is fine; at 8 it is why the 2026-10-16 port had to be
applied seven times by hand.

### 16. `:focus` used instead of `:focus-visible`
On 7 of 8 pages — focus rings fire on mouse click, not just keyboard.

### 17. Font weights drift from brand defaults
DM Sans 500 for nav links (guide says default 400/700); Quicksand 700 in `.bridge-eyebrow` (guide
says default 600).

### 18. Quicksand at label sizes
`.card-label` 12.8px, `.loop-step` 14.4px, `.bridge-eyebrow` 13.6px, `.bridge-loop span` 12.8px.
Strictly these breach "smaller headings use DM Sans Bold", but they are UI labels rather than
headings — a gray area, flagged for consistency not correctness.

---

## Two findings beyond the list

**The brand guide's own contrast rule is weaker than WCAG AA.** It says *"at small sizes, text
should be at least 50% lighter or darker than its background."* Every pair on the site passes that
rule — including the 3.17:1 button that fails WCAG. Following the guide to the letter will not
produce an accessible site. Worth adding a WCAG AA line to brand guide v1.1.

**What passes cleanly**, so it is not re-litigated later:

- Logo minimum size. The horizontal lockup PNG was decoded: "SOLID" is 30.4% of total width, so the
  26px mobile nav renders it ~80px wide, comfortably over the 60px floor.
- All greys and the default blue/yellow are exact brand hexes.
- Every image has an `alt`; the empty ones are correctly-marked decorative.
- Skip links, `<main>`, meta description, and canonical are present on all 8 pages.
- The contact form honeypot is properly hidden and labelled.
- Flip cards have real Enter/Space keyboard handling.
