# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## 🔴 CRITICAL: Production Safety Rules

> **⚠️ THE `main` BRANCH IS THE LIVE PRODUCTION SITE**
>
> Merging to `main` immediately deploys to https://solidpd.com - the client's live website.

### NEVER Do These Actions Without Explicit User Request

| Action | Allowed? | Requirement |
|--------|----------|-------------|
| Merge PR to `main` | 🚫 NEVER autonomous | User must explicitly say "merge to main" or "deploy to production" |
| Create PR targeting `main` | 🚫 NEVER autonomous | User must explicitly request PR to main |
| Push directly to `main` | 🚫 NEVER | Always blocked, even if requested |
| `git checkout main` + commit | 🚫 NEVER | Work on feature branches only |
| `netlify deploy --prod` | 🚫 NEVER autonomous | User must explicitly request production deploy |

### When User Requests Merge to Main

**STOP and present this warning BEFORE proceeding:**

```
⚠️  PRODUCTION DEPLOYMENT WARNING ⚠️

You are about to merge to the `main` branch.
This will IMMEDIATELY deploy changes to the LIVE production site:

  🌐 https://solidpd.com

This action will affect the client's live website visible to the public.

Please confirm you want to proceed with production deployment.
```

**Only proceed after user confirms.**

### Safe Workflow

1. **Always work on feature branches** (e.g., `ms-cc-dev-multipage-v2`)
2. **Deploy previews** using `netlify deploy --dir=.` (without `--prod`)
3. **Create PRs to `dev` branch** for staging/review
4. **Only merge to `main`** when user explicitly requests production deployment

---

## 🔴 CRITICAL: GitHub Issue Workflow

> **⚠️ ALWAYS SYNC BEFORE WORKING ON ISSUES**
>
> Issues are created on GitHub and may include file uploads that only exist on the remote.

### Before Working on ANY GitHub Issue

**MANDATORY: Run these commands FIRST before reading or addressing any issue:**

```bash
git fetch origin
git pull origin <current-branch>
```

### Why This Matters

- **Colleagues upload assets directly to GitHub** when creating issues
- These files exist on the **remote** but not in the **local** repository
- Without syncing, you will report files as "missing" when they actually exist
- This wastes time and creates confusion between team members

### Trigger Phrases

Perform the sync operation when the user says ANY of these:
- "work on issue(s)"
- "address issue(s)"
- "fix issue(s)"
- "resolve issue(s)"
- "tackle issue(s)"
- "look at the open issues"
- "what issues are open"
- References to specific issue numbers (e.g., "#85", "issue 85")

### Sync Protocol

1. **Check current branch**: `git branch --show-current`
2. **Fetch remote changes**: `git fetch origin`
3. **Check for divergence**: `git status`
4. **Pull/merge if needed**: `git pull origin <branch>` or `git merge origin/<branch>`
5. **Confirm sync**: Report any new files that were pulled down
6. **THEN proceed** with issue work

---

### Why Production Safety Matters

- `main` branch triggers automatic production deployment via GitHub Actions
- There is NO staging environment between merge and live site
- Mistakes affect the client's business immediately
- Rollback requires manual intervention

---

## Project Overview

**Solid Product Design** - Static website for a hardware product design and engineering services company based in Philadelphia, PA. Currently a single-page splash site being expanded to a multi-page website based on client mockups.

**Live Site**: https://solidpd.com
**Netlify Admin**: https://app.netlify.com/projects/solidpd

## Development Commands

```bash
# Local development (choose one)
python -m http.server 8000
npx serve .
netlify dev                    # Netlify CLI with form support

# Deploy preview (generates unique URL for review)
export NETLIFY_AUTH_TOKEN=$(grep NETLIFY_API_KEY .env | cut -d'=' -f2)
netlify deploy --dir=.

# Deploy to production
netlify deploy --dir=. --prod
```

## Deployment Workflow

- **Branch `main`** → Production deploy to solidpd.com (via GitHub Actions)
- **Branch `dev`** → Preview deploy (via GitHub Actions)
- **Branch `ms-cc-dev-multipage`** → Sandbox branch, manual `netlify deploy` for previews
- GitHub Actions workflow: `.github/workflows/deploy.yml`

## Architecture Decisions

| Decision | Choice |
|----------|--------|
| Architecture | Multi-page static HTML (transitioning from single-page) |
| Build system | Zero-dependency (no npm/build step) |
| Contact form | Netlify Forms |
| Labs page | Placeholder (external link TBD) |
| Styling | Inline CSS in each HTML file |

## Design System

**Brand Guide**: `docs/solidpd-brand-guide-v1.0.pdf` (official reference)

**Colors** (from brand guide):
- **Primary Blue**: `#0495F6` (accent, links, CTA)
- **Primary Yellow/Orange**: `#FFB75A` (accent, stylized O)
- **Grays**: `#1A1A1A` (90%) → `#E5E5E5` (10%)
- **Dark Blues**: `#011A2B` → `#CAE9FE` (for depth)

**Typography**:
- **Headings**: Quicksand, Semibold 600, UPPERCASE, ≥2x body size
- **Body**: DM Sans, Regular 400 / Bold 700
- **Logo font**: Quicksand variable (weights 350, 500, 550)

**Logo Rules**:
- Min width: 60px (screen), 0.75" (print)
- Clear space: 0.5x height of stylized O
- Stylized O may be blue or yellow; letters always black or white

**Breakpoints**: 768px (tablet), 480px (mobile), 667px height (small screens)

## Mockups

Source mockups in `mockups/` folder (PDF, PPTX, SVG formats). 15-page design specifying:
- **Pages**: Home, About, Services (flip cards), Work (portfolio), Contact (form), CTA sections
- **Navigation**: Work | About | Services | Contact | Labs
- **Interactive elements**: Service cards flip on hover, portfolio items reveal details

## Planned Page Structure

```
/                   → index.html (hero + value prop)
/about              → about.html (story + 4 pillars)
/services           → services.html (6 service cards)
/work               → work.html (portfolio grid)
/contact            → contact.html (Netlify form + location)
```

## Assets

- **Logos**: `images/logo-horizontal-white.png`, `images/logo-stacked-white.png`
- **Client assets** (`images/assets/`):
  - Hero Image, Our Work images (Neuralert, Laminitis Sensor, UroGenie)
  - `Other Images/` - Service/process photos (14 images)
  - `Client Logos (incomplete)/` - Only 3 logos; use placeholders for rest
- **Placeholders** (`images/placeholders/`): 40 images from mockups (see `ASSET_MANIFEST.md`)
  - Use for missing client logos and as visual reference

---

## Available Tools

### CLI Tools
| Tool | Status | Usage |
|------|--------|-------|
| `netlify` | Auth via `.env` | Deploy, forms, preview URLs |
| `gh` | System auth | GitHub CLI: PRs, issues, repo operations |
| `git` | Configured | Version control |
| `node`/`npm`/`npx` | v24.11.1 | `npx serve .` for local dev server |
| `python3` | Installed | `python -m http.server 8000` for local dev |
| `curl`/`wget` | Installed | Fetch external resources |
| `jq` | Installed | JSON processing |
| `unzip` | Installed | Extract PPTX/Office files (ZIP archives) |
| `chromium`/`firefox` | Installed | Browser testing |
| `rg` | Installed | ripgrep for fast code search |

**Netlify CLI auth:**
```bash
export NETLIFY_AUTH_TOKEN=$(grep NETLIFY_API_KEY .env | cut -d'=' -f2)
```

### MCP Servers
| Server | Use For |
|--------|---------|
| `netlify` | Deploy, preview URLs, env vars, Netlify Forms setup |
| `playwright` | Visual testing, responsive checks, accessibility validation |
| `context7` | CSS/HTML patterns, accessibility documentation |
| `tavily` | Research design patterns, CSS solutions |
| `sequential-thinking` | Complex architecture decisions |

### 🔴 Playwright Visual Verification Rule

**When using Playwright to verify site changes, ALWAYS verify BOTH:**

1. **Visual rendering** - Take screenshots at desktop (1280px+) AND mobile (375px) viewports
2. **Functional behavior** - Test interactions, navigation, form submissions

**Never rely on code/attribute checks alone.** HTML attributes can be correct while CSS causes visual defects.

**Required checks:**
- Full-page screenshots at each viewport size
- `document.body.scrollWidth` vs `window.innerWidth` (detect horizontal overflow)
- Rendered element dimensions match expected values
- Images display at correct aspect ratios
- Text is readable and properly sized
- Interactive elements are accessible and functional

### Slash Commands
| Command | Use For |
|---------|---------|
| `/sc:implement` | Page creation, component implementation |
| `/sc:design` | Design system specs |
| `/sc:brainstorm` | Navigation structure, content strategy |
| `/sc:workflow` | Convert mockup → implementation plan |
| `/sc:analyze` | HTML/CSS quality, accessibility audit |
| `/sc:cleanup` | Remove dead code, consolidate CSS |
| `/sc:git` | Commits, branches, PRs |
| `/sc:save` / `/sc:load` | Persist context across sessions |
| `/code-review:code-review` | Review before merge |

### Skills
| Skill | Use For |
|-------|---------|
| `frontend-design` | Production-grade HTML/CSS components |

### Task Agents
| Agent | Use For |
|-------|---------|
| `Explore` | Navigate mockups, understand codebase |
| `Plan` | Multi-page architecture, feature planning |
| `frontend-architect` | UI/UX, responsive design decisions |
| `quality-engineer` | Cross-browser, accessibility testing |
| `task-decomposer` | Break large initiatives into single-commit tasks |
| `taskmaster:task-orchestrator` | Coordinate multi-task execution with dependencies |
| `taskmaster:task-executor` | Implement specific decomposed tasks |
| `error-debugging:debugger` | CSS/JS errors, deployment failures |
| `root-cause-analyst` | Systematic investigation of complex issues |
