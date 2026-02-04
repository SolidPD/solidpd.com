# Issue #122 - Phase 2 Directives (Implementation)

## PHASE OBJECTIVE
Implement the Labs contact section redesign: convert to single-column layout with background image, dark form card, and contact info below.

## EXACT STEPS (Execute in order)

### Step 1: Update CSS - Convert .contact-section to single-column with background
- Remove grid layout
- Add: `display: flex; flex-direction: column; align-items: center; justify-content: center;`
- Add: `background: url("images/assets/solid-labs/building-entrance.jpg") center/cover no-repeat;`
- Add: `position: relative;` for overlay pseudo-element
- Add: `padding: 6rem 2rem;`
- Add: `min-height: 80vh;`

### Step 2: Add dark overlay via ::before pseudo-element
- Add `.contact-section::before` rule with:
  - `content: "";`
  - `position: absolute; top: 0; left: 0; right: 0; bottom: 0;`
  - `background: rgba(0, 0, 0, 0.6);`
  - `z-index: 1;`
- Add `.contact-section > *` with `position: relative; z-index: 2;` to lift content above overlay

### Step 3: Update .contact-form-container styling
- Update to: `background: rgba(20, 20, 20, 0.9);`
- Add: `border-radius: 12px;`
- Add: `padding: 2rem;`
- Add: `box-shadow: 0 20px 40px rgba(0,0,0,0.35);`
- Add: `max-width: 500px; width: 100%;`

### Step 4: Update HTML - Remove contact-image div
- Delete the entire `<div class="contact-image">...</div>` block (lines 1331-1336)

### Step 5: Update HTML - Remove schedule-link
- Delete the `<p class="schedule-link">...</p>` line (line 1328)

### Step 6: Update HTML - Add contact info section below form
- After the closing `</div>` of `.contact-form` (after line 1329), add:
```html
<div class="contact-info-row">
  <div class="contact-info-item">
    <h4>Email</h4>
    <a href="mailto:labs@solidpd.com">labs@solidpd.com</a>
  </div>
  <div class="contact-info-item">
    <h4>Address</h4>
    <p>2212 Walnut Street<br>Philadelphia, PA 19103</p>
  </div>
</div>
```

### Step 7: Add CSS for contact-info-row
- Add styling for `.contact-info-row`:
  - `display: flex; justify-content: center; gap: 3rem;`
  - `margin-top: 2rem;`
  - `color: #fff;`
  - `text-align: center;`
- Add styling for `.contact-info-item h4` and `.contact-info-item a`

### Step 8: Update/remove obsolete CSS
- Remove `.contact-image` and `.contact-image img` rules
- Update responsive rules to remove `.contact-image` references

### Step 9: Ensure form inputs remain full-width with proper spacing
- Verify `.form-group` has appropriate margin-bottom
- Verify inputs have `width: 100%`

## REQUIRED OUTPUT FORMAT

```
## Implementation Complete

### CSS Changes
| Line(s) | Change Description |
|---------|-------------------|
| [lines] | [description] |

### HTML Changes
| Line(s) | Change Description |
|---------|-------------------|
| [lines] | [description] |

### Elements Removed
- [list]

### Elements Added
- [list]
```

## PROHIBITED ACTIONS
- DO NOT modify any other sections of labs.html
- DO NOT touch index.html
- DO NOT create commits (orchestrator will handle)
