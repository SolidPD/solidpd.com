# AGENTS.md - AI Agent Development Guide

This document provides technical guidance for AI agents working on the SolidPD.com website. It includes project architecture, development patterns, and best practices specific to this codebase.

## 🚨 CRITICAL WARNING - READ FIRST

**ONLY EDIT FILES IN THE `src/` DIRECTORY!**

- ✅ **DO EDIT**: Files in `src/` directory (source files)
- ❌ **NEVER EDIT**: Files in `dist/` directory (build output)
- ❌ **NEVER COMMIT**: Built files or `dist/` directory

**Why this matters**: The build system generates optimized files from `src/` to the `dist/` directory. The `dist/` folder is automatically cleaned and rebuilt on each build.

## 🏗️ BUILD-TIME COMPONENT INJECTION ARCHITECTURE

**THIS PROJECT USES BUILD-TIME COMPONENT INJECTION - NOT RUNTIME LOADING!**

### ✅ CURRENT ARCHITECTURE:
- **Build-time injection**: Custom Vite plugin (`vite-html-inject.js`) injects components during build
- **Component placeholders**: HTML pages use comments like `<!-- HEADER_PLACEHOLDER -->`
- **Static output**: Final site is completely static with components embedded
- **Hot reload**: Development server supports live component updates
- **No runtime dependencies**: Components are injected at build time, not loaded dynamically

### ❌ FORBIDDEN APPROACHES:
- **Runtime component loading** via JavaScript fetch() calls
- **Client-side HTML injection** from separate component files  
- **Dynamic DOM manipulation** for loading headers/footers
- **AJAX requests** to load HTML fragments
- **JavaScript-based templating** systems

### Historical Context:
This project was previously configured for inline HTML components, but has been upgraded to use build-time component injection:
- **Old approach**: Manual copy-paste of component HTML into each page
- **New approach**: Automated component injection during build process
- **Benefits**: DRY principle, easier maintenance, hot reload support
- **Output**: Still produces static HTML files with no runtime dependencies

### Component Update Workflow:
1. Edit the component file in `src/components/` (e.g., `header.html` or `footer.html`)
2. Save the file - changes automatically apply to all pages during development
3. Test with `npm run dev` - hot reload shows updates immediately
4. Build with `npm run build` - components are permanently embedded in output

### Quick File Structure Check
```
src/                              # Source files (edit these)
├── *.html                       # Pages with component placeholders
├── components/
│   ├── header.html              # Header component
│   └── footer.html              # Footer component
├── assets/css/main.css          # Site styles
└── assets/images/               # Image assets

dist/                            # Build output (generated, don't edit)
├── *.html                       # Built pages with components injected
└── assets/                      # Optimized assets

vite-html-inject.js              # Custom Vite plugin for component injection
vite.config.js                   # Vite configuration with plugin setup
```

## 🏗 Project Architecture

### Build System
- **Vite 6.x**: Modern build tool with ES modules and hot reload
- **Custom Plugin**: `vite-html-inject.js` handles build-time component injection
- **Multi-page configuration**: Each HTML file is a separate entry point
- **Asset processing**: Automatic optimization, versioning, and bundling
- **Development server**: Hot reload on port 12000 with CORS enabled

### Component Injection Plugin
The `vite-html-inject.js` plugin:
1. **Reads component files** from `src/components/` during build
2. **Finds placeholders** in HTML files (e.g., `<!-- HEADER_PLACEHOLDER -->`)
3. **Replaces placeholders** with actual component HTML
4. **Works in development** with hot reload support
5. **Embeds components** permanently in production build

### File Structure Analysis
```
src/                              # Source directory (edit these files)
├── *.html                       # Page templates with component placeholders
├── components/
│   ├── header.html              # Header component (injected into all pages)
│   └── footer.html              # Footer component (injected into all pages)
├── assets/css/main.css          # Site styles and component styles
├── assets/js/main.js            # Site interactions and functionality
├── assets/images/               # Optimized images with descriptive names
└── public/                      # Static assets (copied to dist)

dist/                            # Build output (generated, don't edit)
├── *.html                       # Built pages with components injected
└── assets/                      # Optimized and versioned assets
```

## 🔧 Development Workflow

### Setting Up Development Environment
```bash
# Install dependencies
npm install

# Start development server (with component injection)
npm run dev

# Build for production (with component injection)
npm run build

# Preview production build locally
npm run preview
```

### Key Development Commands
- `npm run dev` - Start development server with hot reload and component injection
- `npm run build` - Build optimized production files with components embedded
- `npm run preview` - Preview production build locally

## 🧩 Component System (BUILD-TIME INJECTION)

### Component Management - BUILD-TIME INJECTION
The site uses a **BUILD-TIME component injection system**:

```html
<!-- CORRECT: Use placeholders in page templates -->
<!DOCTYPE html>
<html>
<body>
    <!-- HEADER_PLACEHOLDER -->
    <main>
        <!-- Page content -->
    </main>
    <!-- FOOTER_PLACEHOLDER -->
</body>
</html>
```

```javascript
// ✅ CORRECT: Build-time injection via Vite plugin
// vite-html-inject.js handles component injection automatically
export default function htmlInject() {
  return {
    name: 'html-inject',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        // Inject components during build
        html = html.replace('<!-- HEADER_PLACEHOLDER -->', headerHtml);
        html = html.replace('<!-- FOOTER_PLACEHOLDER -->', footerHtml);
        return html;
      }
    }
  };
}
```

### Adding New Components
1. Create HTML file in `src/components/` (e.g., `sidebar.html`)
2. Add placeholder to page templates: `<!-- SIDEBAR_PLACEHOLDER -->`
3. Update `vite-html-inject.js` to handle the new placeholder
4. Test with `npm run dev` - component appears on all pages automatically

### Updating Existing Components
1. Edit the component file in `src/components/`
2. Save file - changes automatically apply to all pages
3. Test in browser - hot reload shows immediate updates
4. Build for production - components are permanently embedded

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

### Page Structure Pattern (BUILD-TIME INJECTION)
Each HTML page follows this structure with **COMPONENT PLACEHOLDERS**:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Meta tags, title, favicon -->
  <link rel="stylesheet" href="/assets/css/main.css">
</head>
<body>
  <!-- HEADER_PLACEHOLDER - Replaced during build -->
  
  <main>
    <!-- Page-specific content -->
  </main>
  
  <!-- FOOTER_PLACEHOLDER - Replaced during build -->
  
  <script src="/assets/js/main.js"></script>
</body>
</html>
```

### ✅ CORRECT Pattern:
```html
<!-- Build-time placeholders that get replaced with component HTML -->
<!-- HEADER_PLACEHOLDER -->
<!-- FOOTER_PLACEHOLDER -->
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
- ⚠️ **CRITICAL**: This site uses BUILD-TIME component injection, not runtime loading
- If headers/footers are missing, check that placeholders exist in HTML files
- Verify component files exist in `src/components/` directory
- Ensure placeholders match exactly: `<!-- HEADER_PLACEHOLDER -->` and `<!-- FOOTER_PLACEHOLDER -->`
- Check that `vite-html-inject.js` plugin is properly configured
- Test with `npm run dev` to see if components inject properly

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
2. **Use BUILD-TIME component injection** - components are injected during build
3. **Edit component files** in `src/components/` - changes apply to all pages automatically
4. **Use descriptive commit messages** with clear change descriptions
5. **Follow existing naming conventions** for files and CSS classes
6. **Maintain responsive design** across all breakpoints
7. **Preserve existing improvements** (like LinkedIn SVG icons) when fixing issues

### File Management
- **Never edit dist/ directly** - it's generated by the build process
- **Edit component files** in `src/components/` - changes apply automatically
- **Use component placeholders** in HTML pages for injection points
- **Use descriptive image names** when adding new assets
- **Update vite.config.js** when adding new pages
- **Ensure vite-html-inject.js** handles all component placeholders

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