# Issue #135 - Phase 1 Directives

## PHASE OBJECTIVE
Analyze the current structure of labs.html to understand the heading hierarchy and section organization.

## EXACT STEPS (Execute in order)

### Step 1: Read labs.html
- Read the full labs.html file
- Identify the current heading structure (h1, h2, h3)
- Locate "Resident Benefits", "Community", "Amenities", and "Equipment" sections

### Step 2: Document Current Structure
- Map out the current HTML hierarchy
- Note the line numbers for each relevant section
- Identify any id attributes and aria-labelledby references
- Check navigation anchors that reference these sections

### Step 3: Identify Required Changes
- Determine what needs to move where
- Note any potential issues with anchor links or aria references

## REQUIRED OUTPUT FORMAT
```
### Current Structure Analysis

**Heading Hierarchy:**
- Line XX: <h1> [content]
- Line XX: <h2> [content] (Resident Benefits)
- Line XX: <h3> [content] (Community)
- Line XX: <h2/h3> [content] (Amenities - current level)
- Line XX: <h2/h3> [content] (Equipment - current level)

**Section Locations:**
- Resident Benefits section: Lines XX-XX
- Community subsection: Lines XX-XX
- Amenities section: Lines XX-XX
- Equipment section: Lines XX-XX

**Anchor IDs Found:**
- id="amenities" on line XX
- id="equipment" on line XX
- etc.

**Navigation References:**
- Nav links to #amenities, #equipment, etc.
```

## PROHIBITED ACTIONS
- DO NOT modify any files
- DO NOT make any commits
