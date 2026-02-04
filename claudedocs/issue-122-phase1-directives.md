# Issue #122 - Phase 1 Directives (Analysis)

## PHASE OBJECTIVE
Analyze the current Labs contact section structure and identify all elements that need modification.

## EXACT STEPS (Execute in order)

### Step 1: Read Current Contact Section HTML
- Command: Read labs.html, focus on the contact section (search for "contact-section" or similar)
- Expected output: Full HTML structure of current contact section
- If error: STOP and report

### Step 2: Read Current Contact Section CSS
- Command: Read labs.html CSS styles related to contact section
- Expected output: All CSS rules for `.contact-section`, `.contact-form`, `.contact-image`, etc.
- If error: STOP and report

### Step 3: Identify Elements to Modify
- List all HTML elements that need to change
- List all CSS rules that need to change
- Identify the "schedule a call" link location
- Note the current image element that will become background

### Step 4: Verify Image Asset Exists
- Command: Check if `images/assets/solid-labs/building-entrance.jpg` exists
- Expected output: File exists confirmation
- If error: Report missing asset

## REQUIRED OUTPUT FORMAT

```
## Current Structure Analysis

### HTML Elements
- [element]: [current state] → [required change]

### CSS Rules
- [selector]: [current state] → [required change]

### Elements to Remove
- [list elements to delete]

### Elements to Add
- [list new elements needed]

### Asset Verification
- building-entrance.jpg: [exists/missing]
```

## PROHIBITED ACTIONS
- DO NOT modify any files
- DO NOT create commits
- DO NOT edit HTML or CSS
- This is READ-ONLY analysis
