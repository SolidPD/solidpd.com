# Issue #130 - Phase 1 Directives (Analysis)

## PHASE OBJECTIVE
Analyze the current favicon setup and identify all elements that need modification for adaptive SVG favicon implementation.

## EXACT STEPS (Execute in order)

### Step 1: Read Current Favicon HTML Configuration
- Command: Read index.html head section, focus on favicon/icon meta tags
- Expected output: All current favicon link tags and apple-touch-icon references
- If error: STOP and report

### Step 2: Read Labs Page Favicon Configuration
- Command: Read labs.html head section for favicon references
- Expected output: Confirm favicon configuration matches or differs from index.html
- If error: STOP and report

### Step 3: Inventory Existing Favicon Assets
- Command: List all favicon files in the root directory and images folder
- Expected output: List of favicon.ico, favicon-*.png, apple-touch-icon files
- If error: STOP and report

### Step 4: Check for Existing SVG Logo Assets
- Command: Search for any existing SVG files that could be used as basis
- Expected output: Any SVG logo files that exist
- If error: Report no SVG assets found

### Step 5: Verify Brand Guide Logo Specifications
- Command: Reference brand guide for logo usage rules
- Expected output: Logo colors, clear space requirements, stylized O specifications
- If error: STOP and report

## REQUIRED OUTPUT FORMAT

```
## Current Favicon Analysis

### HTML Configuration
- index.html: [list of favicon link tags]
- labs.html: [list of favicon link tags]

### Existing Assets
- [list of all favicon-related files]

### SVG Source Assets
- [list any existing SVG logos or "none found"]

### Brand Requirements
- Primary Blue: #0495F6
- Primary Yellow/Orange: #FFB75A
- Dark mode logo: [white/specified color]
- Light mode logo: [black/specified color]

### Implementation Requirements
- [ ] Create SVG favicon with prefers-color-scheme
- [ ] Update index.html head section
- [ ] Update labs.html head section
- [ ] Ensure PNG fallback for Safari
```

## PROHIBITED ACTIONS
- DO NOT modify any files
- DO NOT create commits
- DO NOT edit HTML, CSS, or create SVG files
- This is READ-ONLY analysis
