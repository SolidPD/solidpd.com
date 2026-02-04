# Issue #135 - Phase 2 Directives

## PHASE OBJECTIVE
Move Amenities and Equipment sections inside Resident Benefits section as peer h3 subsections to Community.

## EXACT STEPS (Execute in order)

### Step 1: Close the benefits-section later
- Current closing `</section>` for benefits-section is at line 1201
- Need to move it to AFTER Equipment section content

### Step 2: Convert Amenities section to subsection
- Remove `<section class="amenities-section" id="amenities">` wrapper
- Replace with `<div id="amenities" class="amenities-subsection">`
- Keep h3 with id="amenities-title" and class="subsection-title"
- Close with `</div>` instead of `</section>`

### Step 3: Convert Equipment section to subsection
- Remove `<section class="equipment-section">` wrapper
- Replace with `<div id="equipment" class="equipment-subsection">`
- Keep h3 with id="equipment-title" and class="subsection-title"
- Close with `</div>` instead of `</section>`

### Step 4: Move both inside benefits-section
- Place Amenities div after Community content (after line 1200)
- Place Equipment div after Amenities div
- Close benefits-section after Equipment

### Step 5: Update CSS if needed
- Ensure .amenities-subsection and .equipment-subsection have proper styling
- May need to add padding/margins similar to existing section styles

## REQUIRED OUTPUT FORMAT
- Modified labs.html with new structure
- git diff showing changes

## PROHIBITED ACTIONS
- DO NOT change any text content
- DO NOT remove any IDs needed for aria-labelledby or anchors
- DO NOT modify navigation links
