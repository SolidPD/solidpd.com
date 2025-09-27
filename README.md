# SolidPD.com Website

The official website for Solid Product Design - a modern, responsive static site built with Vite and deployed to Netlify.

## 🏗️ Architecture Overview

This project uses a **build-time component injection system** that combines the benefits of component-based development with static site performance:

- **Components**: Reusable HTML components stored in `src/components/`
- **Build-time injection**: Custom Vite plugin injects components into pages during build
- **Static output**: Final site is completely static with no runtime JavaScript dependencies
- **Hot reload**: Development server supports live component updates

## ⚠️ CRITICAL: File Structure Rules

**🚨 ONLY EDIT FILES IN THE `src/` DIRECTORY!**

- ✅ **DO EDIT**: Files in `src/` directory (source files)
- ❌ **DO NOT EDIT**: Files in `dist/` directory (build output)
- ❌ **DO NOT COMMIT**: Files in `dist/` directory

**Why this matters**: The build system generates optimized files from `src/` to the `dist/` directory. The `dist/` folder is automatically cleaned and rebuilt on each build.

## 🧩 Component System

### How It Works

The site uses a **build-time component injection system**:

1. **Components** are stored as HTML files in `src/components/`
2. **Pages** use placeholder comments like `<!-- HEADER_PLACEHOLDER -->`
3. **Build process** automatically injects component HTML into placeholders
4. **Final output** is static HTML with components embedded

### Component Structure

```
src/components/
├── header.html          # Navigation and site header
└── footer.html          # Footer with social links and contact info
```

### Page Structure

Each HTML page in `src/` uses placeholders:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, styles -->
</head>
<body>
    <!-- HEADER_PLACEHOLDER -->
    
    <main>
        <!-- Page-specific content -->
    </main>
    
    <!-- FOOTER_PLACEHOLDER -->
    
    <!-- Scripts -->
</body>
</html>
```

### Updating Components

1. **Edit the component file** in `src/components/` (e.g., `header.html` or `footer.html`)
2. **Save the file** - changes are automatically applied to all pages
3. **Test in development** - `npm run dev` shows live updates
4. **Build for production** - `npm run build` generates final files

**No manual copying required!** The build system handles component injection automatically.

## 📁 File Structure

```
src/                              # Source files (edit these)
├── index.html                   # Homepage with placeholders
├── about.html                   # About page with placeholders
├── services.html                # Services page with placeholders
├── work.html                    # Work page with placeholders
├── contact.html                 # Contact page with placeholders
├── components/
│   ├── header.html              # Header component
│   └── footer.html              # Footer component
├── assets/
│   ├── css/
│   │   └── main.css             # Site styles
│   ├── js/
│   │   └── main.js              # Site JavaScript
│   └── images/                  # Image assets
└── public/                      # Static assets (copied to dist)

dist/                            # Build output (generated, don't edit)
├── index.html                   # Built homepage with components injected
├── about.html                   # Built about page with components injected
└── assets/                      # Optimized and versioned assets

vite-html-inject.js              # Custom Vite plugin for component injection
vite.config.js                   # Vite configuration with plugin setup
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm (comes with Node.js)
- Git

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SolidPD/solidpd.com.git
   cd solidpd.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:12000` with hot reload enabled.

4. **Build for production**
   ```bash
   npm run build
   ```
   Built files will be in the `dist/` directory.

## ✏️ Editing Content

### Adding/Editing Pages

1. **Edit existing pages**: Modify HTML files in the `src/` directory
2. **Add new pages**: 
   - Create new HTML file in `src/` with component placeholders
   - Add to `vite.config.js` input configuration:
     ```js
     input: {
       main: 'src/index.html',
       about: 'src/about.html',
       newpage: 'src/newpage.html'  // Add this line
     }
     ```
   - Update navigation in `src/components/header.html`

### Updating Shared Elements

**Header/Navigation**: Edit `src/components/header.html` - changes apply to all pages automatically

**Footer**: Edit `src/components/footer.html` - changes apply to all pages automatically

**Styles**: Edit `src/assets/css/main.css` for global styles

**Images**: 
- Add new images to `src/assets/images/`
- Use descriptive filenames (e.g., `hero-workshop-background.jpg`)
- Reference in HTML: `<img src="/assets/images/your-image.jpg" alt="Description">`

## 🎨 Design System

### Colors
```css
--color-primary: #000000;    /* Black */
--color-secondary: #ffffff;  /* White */
--color-accent: #FFB800;     /* Yellow */
```

### Typography
- **Font**: DM Sans (Google Fonts)
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deployment

### Automatic Deployment (Recommended)
The site automatically deploys via GitHub Actions:
- **Preview deployments**: Any branch push creates preview deployment
- **Production deployments**: Push to `main` branch deploys to production

### GitHub Actions Workflow
Located at `.github/workflows/deploy.yml`:
1. Install Node.js 18 and dependencies with `npm ci`
2. Build site with `npm run build` (includes component injection)
3. Deploy `dist/` folder to Netlify

### Manual Deployment
1. Build the site: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 🛠 Technical Details

### Build System
- **Vite 6.x**: Modern build tool with hot reload
- **Custom Plugin**: `vite-html-inject.js` handles component injection
- **Multi-page**: Configured for multiple HTML entry points
- **Asset optimization**: Automatic image optimization and versioning

### Component Injection Process
1. **Development**: Vite plugin injects components in real-time
2. **Build**: Components are permanently embedded in HTML files
3. **Output**: Static HTML files with no runtime dependencies

### Performance Features
- Static HTML output (no JavaScript required for components)
- Asset bundling and minification
- Automatic image optimization
- CSS optimization and bundling

## 🐛 Troubleshooting

### Common Issues

**Build fails**: 
- Ensure Node.js 18+ is installed
- Delete `node_modules/` and run `npm install`
- Check for syntax errors in HTML/CSS/JS files

**Images not loading**:
- Verify image paths start with `/assets/images/`
- Check that images exist in `src/assets/images/`
- Ensure proper file extensions (.jpg, .png, .svg)

**Components not showing**:
- Verify component files exist in `src/components/`
- Check that HTML pages have correct placeholder comments
- Ensure placeholders match exactly: `<!-- HEADER_PLACEHOLDER -->` and `<!-- FOOTER_PLACEHOLDER -->`

**Styles not applying**:
- Ensure CSS files are properly linked in HTML
- Check for CSS syntax errors
- Verify CSS custom properties are defined

**Changes not showing up on deployed site**:
- Make sure you edited files in `src/` directory
- Check that your changes were committed and pushed
- Wait for GitHub Actions deployment to complete

### Development Tips

1. **Hot Reload**: Changes to components automatically refresh all pages
2. **Asset Paths**: Always use absolute paths starting with `/assets/`
3. **Component Testing**: Changes to header/footer are immediately visible across all pages
4. **Build Testing**: Test production builds locally with `npm run preview`

## 📞 Support

For technical issues or questions about the website:
1. Check this README for common solutions
2. Review the browser console for error messages
3. Ensure all dependencies are properly installed
4. Contact the development team for assistance

## 📝 Contributing

1. Create a new branch for your changes
2. Make your edits in the `src/` directory
3. Test locally with `npm run dev`
4. Build and verify with `npm run build`
5. Commit changes with descriptive messages
6. Push to your branch and create a pull request

## 🔄 Component Development Workflow

### Adding New Components
1. Create HTML file in `src/components/` (e.g., `sidebar.html`)
2. Add placeholder to pages: `<!-- SIDEBAR_PLACEHOLDER -->`
3. Update `vite-html-inject.js` to handle the new placeholder
4. Test with `npm run dev`

### Updating Existing Components
1. Edit component file in `src/components/`
2. Save file - changes automatically apply to all pages
3. Test in browser - hot reload shows immediate updates
4. Build for production when ready

This build-time component system provides the best of both worlds: component-based development with static site performance.