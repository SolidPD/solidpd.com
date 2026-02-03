# Issue #144 - Phase 1 Directives

## PHASE OBJECTIVE
Analyze the current scroll behavior in labs.html and confirm the fix approach by comparing with index.html implementation.

## EXACT STEPS (Execute in order)

### Step 1: Verify current labs.html scroll handling
- Read labs.html JavaScript section (lines 1436-1461)
- Confirm no scroll offset handling exists
- Document current anchor link targets

### Step 2: Review index.html scroll offset implementation
- Read index.html scroll handling code
- Document the exact JavaScript pattern used
- Note the navHeight calculation approach

### Step 3: Identify all navigation targets in labs.html
- List all `href="#X"` links in the navigation
- List all corresponding `id="X"` elements
- Confirm all targets exist and are correctly matched

### Step 4: Confirm nav header height values
- Document desktop nav height (68px logo + padding)
- Document mobile nav height (45px logo + padding)

## REQUIRED OUTPUT FORMAT
```
### Analysis Results

**Current labs.html scroll handling:**
- [description of current state]

**index.html reference implementation:**
- [code snippet showing scroll offset pattern]

**Navigation targets mapping:**
| Nav Link | Target ID | Element Type | Line # |
|----------|-----------|--------------|--------|
| #location | location | section | XXX |
...

**Nav header heights:**
- Desktop: XXpx
- Mobile: XXpx

**Recommended fix:**
[Brief description of the fix to apply]
```

## PROHIBITED ACTIONS
- DO NOT modify any files
- DO NOT make any commits
- DO NOT run git commands that change state
