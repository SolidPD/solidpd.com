<!-- DIRECTIVE_METADATA
{
  "issue": 165,
  "generated_by": "issue-researcher",
  "researcher_version": "1.12.0",
  "confidence": 92,
  "timestamp": "2026-05-05T21:59:25Z",
  "task_count": 8,
  "complexity": "medium",
  "research_cycle": 1
}
-->

# Worker Directive — Issue #165: Remove Argospire from OUR WORK

> **For**: `issue-worker`
> **From**: `issue-researcher` v1.12.0 • 2026-05-05T21:59:25Z • Confidence: **92%**
>
> The worker may skip Phase 2 analysis and start from Task 1 below.

## Requirements (behavioral)

| ID | Requirement |
|----|-------------|
| R1 | When the user views the homepage (`index.html` rendered from `origin/main`) on any breakpoint, the OUR WORK section shall display exactly **5** portfolio items, none referencing "Argospire" or "Connected Spirometer". |
| R2 | When the user views the work page (`work.html` rendered from `origin/main`) on any breakpoint, the OUR WORK section shall display exactly **5** portfolio items, none referencing "Argospire" or "Connected Spirometer". |
| R3 | When the user views the work page, the "Our Clients" client-logo strip shall not contain a logo for Argospire. |
| R4 | When the OUR WORK section displays its 5 items at desktop breakpoint (≥769px), the layout shall be visually balanced — the recommended treatment is **3 items in row 1, 2 items centered in row 2** (see Task 5 for alternatives). |
| R5 | When the user navigates portfolio items via mouse vs keyboard on `work.html`, the focus ring shall appear only on keyboard focus (`:focus-visible`), bringing `work.html` to convention parity with `index.html`. *(In-path bug fix per code-reviewer.)* |
| R6 | When the production deployment runs after merge to `main`, the GitHub Actions → Netlify pipeline shall complete successfully with no new image-asset 404s and no console errors on the deployed pages. |

## Prerequisites

- [ ] Confirm with the user (or check repo `CLAUDE.md`): the change targets `origin/main` (the live production branch). The current worktree branch `issue-165-remove-argo-spire-from-our-work` was created off `dev`, NOT `main`. `dev` is a separate Vite-based redesign with no Argospire content. **Task 1 below resolves this by creating a new branch from `main`.**
- [ ] Confirm `gh` is authenticated against `SolidPD/solidpd.com`.
- [ ] Production safety: per `origin/main:CLAUDE.md`, **explicit user permission is required** before merging to `main`. The worker must NOT `gh pr merge` without it. Opening a PR is allowed; merging is gated.

## Task Sequence

### Task 1 — Create new branch off `origin/main`
- **File(s)**: N/A (git operation)
- **Action**: branch create
- **Satisfies**: enables R1–R6
- **Sub-agent**: none
- **Details**: From the worktree, run:
  ```bash
  git fetch origin
  git checkout -b issue-165-remove-argospire origin/main
  ```
  Do NOT use the existing `issue-165-remove-argo-spire-from-our-work` branch — it is based on `dev` and has no overlap with the files we need to edit. If branching is not feasible in this worktree (e.g., uncommitted state on the dev-based branch), the worker should clean up and create a fresh worktree from `main`.
- **Pattern**: Existing main-history convention: `issue-153-labs-header-logo`, `issue-133-adaptive-favicon`.
- **Depends on**: —
- **Verify**: `git rev-parse --abbrev-ref HEAD` reports `issue-165-remove-argospire`; `git merge-base HEAD origin/main` equals `origin/main` HEAD.

### Task 2 — Remove Argospire portfolio item from `index.html`
- **File(s)**: `index.html` (origin/main lines 1873–1881)
- **Action**: modify (delete block)
- **Satisfies**: R1
- **Sub-agent**: none
- **Details**: Delete the HTML comment `<!-- Project 6: Argospire Spirometer -->` plus the entire trailing `<div class="portfolio-item" tabindex="0">...</div>` (the block ends with the closing `</div>` of the portfolio-item; do NOT delete the parent `</div>` of `.portfolio-grid`). Preserve indentation of surrounding items.
- **Pattern**: Block format identical to the 5 surrounding portfolio items in the same file.
- **Depends on**: 1
- **Verify**: `grep -c -i "argospire\|connected spirometer\|Our Work - Argo Placeholder" index.html` → 0; `grep -c '<div class="portfolio-item"' index.html` → 5.

### Task 3 — Remove Argospire portfolio item from `work.html`
- **File(s)**: `work.html` (origin/main lines 762–770)
- **Action**: modify (delete block)
- **Satisfies**: R2
- **Sub-agent**: none
- **Details**: Delete `<!-- Project 6: Argospire Spirometer -->` plus the entire trailing portfolio-item div. Preserve indentation.
- **Pattern**: Same as Task 2.
- **Depends on**: 1
- **Verify**: `grep -c "Project 6" work.html` → 0; `grep -c '<div class="portfolio-item"' work.html` → 5.

### Task 4 — Remove Argospire client logo from `work.html`
- **File(s)**: `work.html` (origin/main, the client-logo div at line 783–786 referencing `client-argospire.png`)
- **Action**: modify (delete block)
- **Satisfies**: R3
- **Sub-agent**: none
- **Details**: Delete the single `<div class="client-logo">` block whose `<img>` `src` ends in `client-argospire.png`. Adjacent siblings (Hala Systems before, Strella after) must remain intact. NOTE: `index.html` does NOT have an Argospire client-logo entry, so no edit is needed there.
- **Pattern**: All sibling `.client-logo` divs follow the same shape.
- **Depends on**: 1
- **Verify**: `grep -c "client-argospire" work.html` → 0.

### Task 5 — Apply 5-item desktop grid polish (recommended: 3 + 2-centered)
- **File(s)**: `index.html` (style block — locate `.portfolio-grid` rule, originally at line ~571), `work.html` (style block — `.portfolio-grid` rule, originally at line ~226)
- **Action**: modify (add CSS rule)
- **Satisfies**: R4
- **Sub-agent**: none (or `frontend-design:frontend-design` if user wants polish iteration)
- **Details**: The existing CSS uses `grid-template-columns: repeat(3, 1fr)` at desktop. With 5 items the natural layout is 3+2 with an empty bottom-right cell. To center the second row of 2 items:

  **Option A (recommended) — center via spanning, no scaffolding change:**
  ```css
  .portfolio-grid > .portfolio-item:nth-last-child(2):nth-child(odd) {
    grid-column: 1 / 3;
    justify-self: end;
  }
  .portfolio-grid > .portfolio-item:last-child:nth-child(even) {
    grid-column: 2 / 4;
    justify-self: start;
  }
  /* Both items keep their natural width via max-width inheritance; */
  /* result: row 2 has two items centered against the row 1 trio.   */
  ```
  Add ONLY in the desktop scope (the default block before media queries). Tablet (`repeat(2,1fr)`) and mobile (`1fr`) layouts do NOT need new rules — they already work with 5 items.

  **Option B (simplest) — accept the natural 2+2+1 / 3+2 with empty cell.** Add NO CSS. Document this as the chosen design.

  **Option C — 6-column scaffold, items span 2.** More complex; not recommended unless A produces visual issues.

  Worker should attempt Option A first, then visually verify. If Option A produces awkward spacing due to gap or padding, fall back to Option B and flag for the user. Do NOT invent a wholly new approach.
- **Pattern**: `.portfolio-grid` block in each file's `<style>` element.
- **Depends on**: 2, 3
- **Verify**: Visual inspection in Playwright at 1280×800 (desktop), 768×1024 (tablet), 375×667 (mobile). Last row visually centered at desktop, no awkward whitespace.

### Task 6 — Fix `work.html` keyboard-focus convention (in-path bug)
- **File(s)**: `work.html` style block, at the existing `.portfolio-item:focus` rule (origin/main line ~676)
- **Action**: modify (rule rewrite)
- **Satisfies**: R5
- **Sub-agent**: none
- **Details**: Replace the existing rule:
  ```css
  .portfolio-item:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(4, 149, 246, 0.3);
  }
  ```
  with the convention used in `index.html` lines 1565–1572:
  ```css
  .portfolio-item:focus {
    outline: none;
    box-shadow: none;
  }
  .portfolio-item:focus-visible {
    box-shadow: 0 0 0 3px rgba(4, 149, 246, 0.3);
  }
  ```
  This stops the focus ring from flashing on every mouse click while preserving keyboard accessibility. The two files will be in convention parity afterward.
- **Pattern**: `index.html` lines 1565–1572 (verbatim).
- **Depends on**: 1 (independent of 2–5; can be done in any order after Task 1)
- **Verify**: `grep -c ':focus-visible' work.html` ≥ 1; click a portfolio-item with mouse — no ring; press Tab to it — ring appears.

### Task 7 — Local visual verification with Playwright
- **File(s)**: N/A
- **Action**: verify
- **Satisfies**: V1–V5 (validates R1–R5; R6 is post-deploy)
- **Sub-agent**: none
- **Details**: Use Playwright MCP to navigate to local file URLs or a local preview server. Take screenshots at three viewport sizes for each page (`index.html`, `work.html`):
  - 1280×800 (desktop) — verify 5 items, last row centered (Option A) or accepted layout (Option B), no Argospire text
  - 768×1024 (tablet) — verify 2-col layout still works with 5 items
  - 375×667 (mobile) — verify 1-col layout
  Also: open browser DevTools console and confirm no errors / no 404s. Test keyboard focus on `work.html`: tab to portfolio items → ring; click with mouse → no ring.
- **Depends on**: 2, 3, 4, 5, 6
- **Verify**: Six screenshots committed (or attached to PR) showing all viewports for both pages; `mcp__plugin_playwright_playwright__browser_console_messages` returns no errors.

### Task 8 — Open PR targeting `main` (production)
- **File(s)**: N/A
- **Action**: create PR
- **Satisfies**: R6
- **Sub-agent**: none
- **Details**: After commits and visual verification:
  ```bash
  gh pr create --base main --head issue-165-remove-argospire \
    --title "Remove Argospire portfolio item from OUR WORK section (#165)" \
    --body-file <handoff comment template>
  ```
  **DO NOT MERGE WITHOUT EXPLICIT USER PERMISSION** per `origin/main:CLAUDE.md` production safety rules. Wait for the user to say "merge to main" / "deploy to production".
- **Depends on**: 7
- **Verify**: `gh pr view` shows OPEN, base `main`, head `issue-165-remove-argospire`.

## Sub-Agent Routing

| Tasks | Recommended Agent | Rationale |
|-------|------------------|-----------|
| 1, 2, 3, 4, 6 | none | Mechanical HTML/CSS edits; no specialist needed. |
| 5 | none (`frontend-design:frontend-design` if iteration needed) | Layout decision is documented in three options; only escalate if Option A and B both fail visual review. |
| 7 | none (Playwright MCP directly) | Standard verification flow. |
| 8 | none | Standard PR open. |

## Verification Checklist

- [ ] V1 (R1, R2): `grep -ric "argospire\|connected spirometer" index.html work.html` returns 0
- [ ] V2 (R1, R2): `grep -c '<div class="portfolio-item"' index.html` returns 5; same for `work.html`
- [ ] V3 (R3): `grep -c "client-argospire" work.html` returns 0
- [ ] V4 (R4): Playwright desktop screenshot shows visually balanced layout (no awkward empty cell)
- [ ] V5 (R5): Mouse click on portfolio item shows no focus ring on `work.html`; keyboard tab does
- [ ] V6 (R6): After PR open, GitHub Actions deploy preview succeeds; console/network panel show no errors / 404s on the preview URL

## Rollback

If implementation fails or visual review fails:

1. `git restore --source=origin/main index.html work.html` to revert content edits
2. If branch `issue-165-remove-argospire` was pushed: `git push --delete origin issue-165-remove-argospire`
3. Close any opened PR with comment explaining the rollback reason
4. Re-open issue #165 (re-add the `📶 status: 🔍 needs-investigation` label if root cause needs more research)

## Key Decisions

- **Branch target = `main`** (NOT `dev`). Rationale: `main` is the live production branch (per `origin/main:CLAUDE.md` and `.github/workflows/deploy.yml`); `dev` is a parallel Vite redesign with a different content model. The user's screenshot is from the live site → must hit `main`.
- **Recommended layout = Option A (3 + 2-centered)** rather than B (natural 2+2+1) or C (6-column scaffold). Rationale: aligns with the user's "clean 3x2 grid" wording, minimal CSS surface area, no risk to tablet/mobile.
- **In-path bug fix included** (Task 6). Rationale: `work.html` and `index.html` are inconsistent on focus styles, and the worker is already touching the `.portfolio-grid` CSS in both files. Per "In-Path Bug Fixing" rule, fix it now.
- **Asset PNGs left in place** (`Our Work - Argo Placeholder.png`, `client-argospire.png`). Rationale: removing committed binary assets is reversible-but-noisy; leaving them harms nothing (no 404 risk because they're no longer referenced). If the user requests cleanup, that can be a follow-up issue.

## Open Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Worker tries to commit on the dev-based branch | Wrong files / branch divergence | Task 1 explicitly resets the branch base to `origin/main`. |
| Option A layout looks awkward in practice | Visual regression | Fallback to Option B (no CSS change) is documented. Worker should screenshot before committing. |
| User merges PR without seeing the layout change | Production cosmetic regression | CLAUDE.md production-safety gate forces explicit "merge to main" approval; worker must include screenshots in PR description. |
| Future PRs touch `index.html` and miss the `:focus-visible` parity | Regression of the in-path fix | Convention now matches between files; future code review should catch it. |

## Specialist Findings (Pre-Implementation)

### In-Path Bugs (fix during implementation)

- [ ] **`work.html` focus ring fires on mouse click** (code-reviewer, confidence 90). Pre-existing inconsistency with `index.html`. Fixed by Task 6.

### Performance Considerations
N/A — performance-engineer not invoked (no API/rendering-heavy code).

### Architecture Guidance
N/A — architect-review not invoked (medium complexity, single-area change).

### Convention Patterns (preserve in implementation)

- All portfolio items use `<div class="portfolio-item" tabindex="0">` — preserve.
- `<img>` elements have explicit `width` and `height` attributes for layout-shift prevention — preserve.
- Project comments numbered `<!-- Project N: ... -->` — after removing #6, leave 1–5 numbered as-is or renumber consistently.

### Pre-existing accessibility note (out of scope)
The `tabindex="0"` on `div.portfolio-item` provides keyboard focus but no `Enter`/`Space` action. This affects all 5 (formerly 6) items equally and is **not introduced by this issue**. Out of scope; flag for separate issue if desired.

---
:clipboard: *issue-researcher v1.12.0 • 2026-05-05T21:59:25Z • Confidence: 92%*