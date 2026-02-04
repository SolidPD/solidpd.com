# Issue #133 - Phase 2 Directives

## PHASE OBJECTIVE
Download all favicon assets from issue attachments and implement the adaptive favicon solution.

## EXACT STEPS (Execute in order)

### Step 1: Create Feature Branch
- Command: `git checkout -b issue-133-adaptive-favicon`
- Expected: New branch created from current HEAD

### Step 2: Download SVG Favicons
- favicon-adaptive.svg: https://github.com/user-attachments/assets/7bc648c4-e10c-4e23-92ad-c9e2939591ca
- favicon-light.svg: https://github.com/user-attachments/assets/07e7f99b-1361-4693-a53a-4a01d18721a9
- favicon-dark.svg: https://github.com/user-attachments/assets/2b1b31d7-4208-4320-9847-e5acd793b3a2

### Step 3: Download Light Mode PNGs (Dark Logo)
| Size | URL |
|------|-----|
| 16x16 | https://github.com/user-attachments/assets/7fd555da-22a9-462b-9f48-a8830b12eddb |
| 32x32 | https://github.com/user-attachments/assets/e617bf54-9f01-45a6-85cb-18f8ade2fb04 |
| 48x48 | https://github.com/user-attachments/assets/f83ed97d-4c05-4f2e-9f83-5b1efb71826c |
| 64x64 | https://github.com/user-attachments/assets/cd615092-8728-4d0d-adcf-466b3c09fd8e |
| 128x128 | https://github.com/user-attachments/assets/5c11c952-7f2a-48a4-aeb8-4c436e272555 |
| 192x192 | https://github.com/user-attachments/assets/6d69f143-2383-484c-aa97-26f8cbf6a60b |
| 256x256 | https://github.com/user-attachments/assets/49e77319-d2be-4694-8b81-89e99663b0e1 |
| 512x512 | https://github.com/user-attachments/assets/d3c434b5-4732-4dd6-aa13-4a75b643860c |
| 180x180 (Apple) | https://github.com/user-attachments/assets/211ccc60-755e-48d1-9e1a-366499d1bdf8 |

### Step 4: Download Dark Mode PNGs (Light Logo)
| Size | URL |
|------|-----|
| 16x16 | https://github.com/user-attachments/assets/3a7ed900-0ed1-4838-b373-6efbf514c38d |
| 32x32 | https://github.com/user-attachments/assets/bfaddf1c-c016-4957-a311-43246ad9133a |
| 48x48 | https://github.com/user-attachments/assets/a605803d-585d-475b-917d-40799aff616a |
| 64x64 | https://github.com/user-attachments/assets/df6a2965-2420-46c3-a9bc-736f54d9d064 |
| 128x128 | https://github.com/user-attachments/assets/9c39ec9b-6cc9-4975-81ec-8634c4f132fe |
| 192x192 | https://github.com/user-attachments/assets/609422a1-b634-4d3a-b6a0-08efdd67523d |
| 256x256 | https://github.com/user-attachments/assets/af2039e5-d8c0-4314-8642-37b56e4d1ebb |
| 512x512 | https://github.com/user-attachments/assets/0bc9d8cc-074f-40bf-8b4f-782f1519df5d |
| 180x180 (Apple) | https://github.com/user-attachments/assets/c2d23bca-490e-46f4-9ec5-e6d8cc3901b0 |

### Step 5: Organize Favicon Files
- Keep main favicon.svg in root (adaptive version)
- Store PNGs in appropriate locations
- Update apple-touch-icon.png

### Step 6: Update HTML Head in All 6 Files
Replace favicon links with:
```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/svg+xml" href="/favicon-dark.svg" media="(prefers-color-scheme: light)">
<link rel="icon" type="image/svg+xml" href="/favicon-light.svg" media="(prefers-color-scheme: dark)">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
```

### Step 7: Update site.webmanifest
- Update icon paths for 192x192 and 512x512

### Step 8: Delete Old Incorrect Files
- Remove old favicon.ico if replaced
- Clean up any unused favicon files

## REQUIRED OUTPUT FORMAT
```
### Phase 2 Implementation Report

**Branch Created:** [branch name]

**Files Downloaded:**
- [list of downloaded files with sizes]

**HTML Files Updated:**
- [list of files with changes made]

**Files Deleted:**
- [list of removed files]

**Verification:**
- [git status output]
- [git diff summary]
```

## PROHIBITED ACTIONS
- DO NOT commit changes (orchestrator will handle)
- DO NOT push to remote
- DO NOT create PR
- DO NOT merge anything
