# AGENTS.md - AI Agent Development Guide

This document provides technical guidance for AI agents working on the SolidPD.com website. It includes project architecture, development patterns, and best practices specific to this codebase.

## 🚨 CRITICAL WARNING - READ FIRST

**ONLY EDIT FILES IN THE `src/` DIRECTORY!**

- ✅ **DO EDIT**: Files in `src/` directory (source files)
- ❌ **NEVER EDIT**: HTML/CSS files in root directory (index.html, about.html, etc.)
- ❌ **NEVER EDIT**: Files in `dist/` directory (build output)
- ❌ **NEVER COMMIT**: Built files or `dist/` directory

**Why this matters**: The build system generates files from `src/` to the root and `dist/` directories. Editing root files will cause your changes to be lost on the next build!

## 🚨 STATIC SITE ARCHITECTURE - MANDATORY FOR AI AGENTS

**THIS IS A STATIC SITE - NEVER IMPLEMENT DYNAMIC LOADING!**

### ❌ FORBIDDEN APPROACHES:
- **Dynamic component loading** via JavaScript fetch() calls
- **Client-side HTML injection** from separate component files  
- **Runtime DOM manipulation** for loading headers/footers
- **AJAX requests** to load HTML fragments
- **JavaScript-based templating** systems
- **Component loaders** like footer-loader.js (removed from this project)

### ✅ REQUIRED APPROACH:
- **Inline HTML**: All content (headers, footers, components) must be directly embedded in each HTML file
- **Static assets**: Images, CSS, and JS files served as static resources only
- **Manual updates**: When updating shared components, manually update ALL HTML files
- **Copy-paste workflow**: Use `src/components/` as reference templates for copying into pages

### Historical Context:
This project previously had dynamic component loading that caused issues:
- `footer-loader.js` attempted to fetch `/components/footer.html` 
- Vite dev server root is `src/`, causing path resolution failures
- Dynamic loading broke the footer display across all pages
- **Solution**: Replaced with inline HTML in all pages (index, about, services, work, contact)

### Component Update Workflow:
1. Edit the reference component in `src/components/` (e.g., `footer.html`)
2. Copy the updated HTML to ALL page files in `src/`
3. Test that all pages display the component correctly
4. Never create JavaScript loaders or dynamic injection systems

### Quick File Structure Check
```
src/                    ← EDIT THESE FILES
├── index.html         ← Source homepage
├── assets/css/main.css ← Source styles
└── assets/images/     ← Source images

Root directory         ← NEVER EDIT THESE
├── index.html         ← Built file (ignored by git)
└── css/               ← Built files (ignored by git)

dist/                  ← NEVER EDIT THESE
└── (build output)     ← Generated files
```

## 🏗 Project Architecture

### Build System
- **Vite 6.x**: Modern build tool with ES modules and hot reload
- **Multi-page configuration**: Each HTML file is a separate entry point
- **Asset processing**: Automatic optimization, versioning, and bundling
- **Development server**: Hot reload on port 12000 with CORS enabled

### File Structure Analysis
```
src/                              # Source directory (edit these files)
├── *.html                       # Page templates with component loading
├── assets/css/
│   ├── design-system.css        # CSS custom properties and design tokens
│   └── main.css                 # Component styles and utilities
├── assets/js/main.js            # Component loading, interactions, forms
├── assets/images/               # Optimized images with descriptive names
└── components/                  # Reusable HTML components

public/                          # Static assets (copied to dist)
├── components/                  # Component copies for serving
└── assets/images/logos/         # Brand assets in multiple formats

dist/                            # Build output (generated, don't edit)
```

## 🔧 Development Workflow

### Setting Up Development Environment
```bash
# Install dependencies
npm install

# Start development server (required for component loading)
npm run dev

# Build for production
npm run build

# Copy public assets to dist
cp -r public/* dist/
```

### Key Development Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production files
- `npm run preview` - Preview production build locally

## 🧩 Component System (STATIC APPROACH)

### Component Management - STATIC ONLY
The site uses a **STATIC component system** - NO dynamic loading:

```html
<!-- CORRECT: Inline component HTML directly in each page -->
<footer class="footer">
  <div class="container">
    <!-- Full footer HTML embedded here -->
  </div>
</footer>
```

```javascript
// ❌ FORBIDDEN: Do NOT create dynamic loaders like this
async function loadComponent(elementId, componentPath) {
  // This approach is BANNED from this project
}
```

### Adding New Components
1. Create HTML file in `src/components/` as a **reference template**
2. **Manually copy** the HTML into each page file in `src/`
3. **Do NOT** create JavaScript loaders or dynamic injection
4. Test that the component appears correctly on all pages

### Updating Existing Components
1. Edit the reference file in `src/components/`
2. **Manually copy** the updated HTML to **ALL** page files in `src/`
3. Verify the changes appear on all pages
4. **Never** use JavaScript to inject or load components

## 🎨 Styling Architecture

### CSS Organization
```css
/* design-system.css - Design tokens */
:root {
  --color-primary: #000000;
  --color-secondary: #ffffff;
  --color-accent: #FFB800;
  --font-family: 'DM Sans', sans-serif;
  --spacing-xs: 0.5rem;
  /* ... more tokens */
}

/* main.css - Component styles */
.component-name {
  /* Use design tokens */
  color: var(--color-primary);
  font-family: var(--font-family);
}
```

### Responsive Design Patterns
```css
/* Mobile-first approach */
.component {
  /* Mobile styles */
}

@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

## 📝 Content Management

### Page Structure Pattern (STATIC APPROACH)
Each HTML page follows this structure with **INLINE components**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, title, favicon -->
  <link rel="stylesheet" href="/assets/css/design-system.css">
  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
  <!-- INLINE HEADER - Full HTML embedded here -->
  <header class="header">
    <nav class="navbar">
      <!-- Complete header HTML -->
    </nav>
  </header>
  
  <main>
    <!-- Page-specific content -->
  </main>
  
  <!-- INLINE FOOTER - Full HTML embedded here -->
  <footer class="footer">
    <div class="container">
      <!-- Complete footer HTML including LinkedIn links -->
    </div>
  </footer>
  
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

### ❌ WRONG Pattern (DO NOT USE):
```html
<!-- This is FORBIDDEN - no empty divs for dynamic loading -->
<div id="header"></div>
<div id="footer"></div>
```

### Adding New Pages
1. Create HTML file in `src/` directory
2. Add to `vite.config.js` input configuration:
   ```js
   export default defineConfig({
     build: {
       rollupOptions: {
         input: {
           main: 'src/index.html',
           about: 'src/about.html',
           newpage: 'src/newpage.html'  // Add here
         }
       }
     }
   });
   ```
3. Update navigation in `src/components/header.html`

### Content Update Patterns
- **Text**: Edit HTML directly in `src/` files
- **Images**: Add to `src/assets/images/` with descriptive names
- **Styles**: Update CSS files in `src/assets/css/`
- **Functionality**: Update `src/assets/js/main.js`

## 🖼 Asset Management

### Image Handling
- **Location**: `src/assets/images/`
- **Naming**: Use descriptive, kebab-case names
- **Formats**: JPG for photos, PNG for graphics, SVG for icons
- **Optimization**: Vite automatically optimizes and versions images

### Logo Assets
Available in `src/assets/images/logos/`:
- **Horizontal/**: Wide layouts (headers, footers)
- **Stacked/**: Square layouts (favicons, social)
- **Color variations**: Black, White, Blue, Yellow combinations

### Asset Reference Patterns
```html
<!-- In HTML -->
<img src="/assets/images/descriptive-name.jpg" alt="Description">

<!-- In CSS -->
background-image: url('/assets/images/background-name.jpg');
```

## ⚡ Performance Considerations

### Build Optimization
- Vite automatically bundles and minifies CSS/JS
- Images are optimized and versioned
- Unused CSS is not automatically removed (manual cleanup needed)

### Loading Patterns
```javascript
// Lazy loading implementation
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      imageObserver.unobserve(img);
    }
  });
});
```

### Critical Resource Preloading
```javascript
// Preload critical images
const criticalImages = [
  '/assets/images/hero-workshop-background.jpg',
  '/assets/images/logos/Horizontal/PNG/logo.png'
];
```

## 🔍 Debugging and Testing

### Common Issues and Solutions

**Components not loading**:
- ⚠️ **CRITICAL**: This site uses STATIC components, not dynamic loading
- If headers/footers are missing, they need to be manually embedded in each HTML file
- **DO NOT** create JavaScript loaders to fix this - use inline HTML instead
- Check that all HTML files contain the complete header and footer HTML
- The `src/components/` folder is for reference templates only, not for serving
- **Historical note**: `footer-loader.js` was removed because it broke the site

**Styles not applying**:
- Verify CSS files are linked in HTML head
- Check for CSS syntax errors
- Ensure CSS custom properties are defined in design-system.css

**Build failures**:
- Check for HTML/CSS/JS syntax errors
- Verify all referenced assets exist
- Ensure vite.config.js input paths are correct

### Development Testing
```bash
# Test development build
npm run dev
# Visit http://localhost:12000

# Test production build
npm run build
npm run preview
# Visit http://localhost:4173
```

## 🚀 Deployment

### GitHub Actions Workflow
The site deploys automatically via `.github/workflows/deploy.yml`:
1. Install Node.js and dependencies
2. Run `npm run build`
3. Copy public assets to dist
4. Deploy to Netlify

### Manual Deployment Steps
```bash
# Build the site
npm run build

# Copy public assets
cp -r public/* dist/

# Deploy dist/ folder to hosting provider
```

### Environment Configuration
- **Development**: `npm run dev` (port 12000)
- **Preview**: `npm run preview` (port 4173)
- **Production**: Netlify deployment from `dist/` folder

## 🎯 Best Practices for Agents

### Code Modification Guidelines
1. **Always test locally** with `npm run dev` before committing
2. **Use STATIC components only** - never implement dynamic loading
3. **Update ALL HTML files** when modifying shared components (header/footer)
4. **Use descriptive commit messages** with clear change descriptions
5. **Follow existing naming conventions** for files and CSS classes
6. **Maintain responsive design** across all breakpoints
7. **Preserve existing improvements** (like LinkedIn SVG icons) when fixing issues

### File Management
- **Never edit dist/ directly** - it's generated by the build process
- **Use src/components/ as reference templates only** - not for serving
- **Manually copy component changes** to all HTML files in src/
- **Use descriptive image names** when adding new assets
- **Update vite.config.js** when adding new pages
- **Do NOT create component loaders** or dynamic injection systems

### Performance Optimization
- **Optimize images** before adding to the project
- **Use CSS custom properties** for consistent theming
- **Implement lazy loading** for non-critical images
- **Test build output** to ensure proper optimization

### Accessibility Compliance
- **Use semantic HTML** elements appropriately
- **Include alt text** for all images
- **Ensure keyboard navigation** works properly
- **Test with screen readers** when possible

### Brand Consistency
- **Use design system tokens** from design-system.css
- **Follow brand guidelines** for colors, typography, spacing
- **Use appropriate logo variations** for different contexts
- **Maintain consistent tone** in content

## 🔄 Maintenance Tasks

### Regular Updates
- **Dependencies**: Update npm packages regularly
- **Content**: Keep team bios, project portfolio current
- **Images**: Optimize and update project images
- **Performance**: Monitor and improve loading times

### Quality Assurance
- **Cross-browser testing**: Chrome, Firefox, Safari, Edge
- **Device testing**: Mobile, tablet, desktop viewports
- **Accessibility testing**: Screen readers, keyboard navigation
- **Performance testing**: Lighthouse scores, loading times

This guide should help AI agents understand the project structure and make effective contributions to the SolidPD.com website.