# Issue #132 - Phase 2 Directives (Implementation)

## PHASE OBJECTIVE
Fix heading hierarchy on Labs page to ensure consistent levels and classes.

## EXACT STEPS (Execute in order)

### Step 1: Fix "Resident Benefits" class
- Location: Line 1171
- Change: `class="page-title"` → `class="section-title"`
- Result: All H2 section titles use same class

### Step 2: Fix "Amenities" heading
- Location: Line 1206
- Change: `<h2 id="amenities-title">Amenities</h2>` → `<h3 class="subsection-title" id="amenities-title">Amenities</h3>`
- Result: H3 level with subsection-title class

### Step 3: Fix "Equipment" heading
- Location: Line 1247
- Change: `<h2 id="equipment-title">Equipment</h2>` → `<h3 class="subsection-title" id="equipment-title">Equipment</h3>`
- Result: H3 level with subsection-title class

### Step 4: Update CSS for section-header h3
- May need CSS adjustment for .section-header h3 styling if not already present

## REQUIRED OUTPUT FORMAT

```
## Implementation Complete

### HTML Changes
| Line | Before | After |
|------|--------|-------|
| 1171 | class="page-title" | class="section-title" |
| 1206 | <h2>Amenities</h2> | <h3 class="subsection-title">Amenities</h3> |
| 1247 | <h2>Equipment</h2> | <h3 class="subsection-title">Equipment</h3> |

### CSS Changes (if any)
| Line | Change |
|------|--------|
```

## PROHIBITED ACTIONS
- DO NOT modify any other sections
- DO NOT touch index.html
- DO NOT create commits
