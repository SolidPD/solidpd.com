# SolidPD.com Website

The official website for Solid Product Design - a modern, responsive static site built with Vite and deployed to Netlify.

## ⚠️ CRITICAL: File Structure Rules

**🚨 ONLY EDIT FILES IN THE `src/` DIRECTORY!**

- ✅ **DO EDIT**: Files in `src/` directory (source files)
- ❌ **DO NOT EDIT**: Any HTML/CSS files in the root directory (these are built files)
- ❌ **DO NOT COMMIT**: Files in `dist/` directory (build output)

**Why this matters**: The build system generates files from `src/` to the root and `dist/` directories. Editing root files will cause your changes to be lost on the next build!

## 🚨 STATIC SITE ARCHITECTURE - READ THIS!

**THIS IS A STATIC SITE - DO NOT IMPLEMENT DYNAMIC LOADING!**

### ❌ NEVER DO THESE THINGS:
- **Dynamic component loading** via JavaScript fetch() calls
- **Client-side HTML injection** from separate component files
- **Runtime DOM manipulation** for loading headers/footers
- **AJAX requests** to load HTML fragments
- **JavaScript-based templating** systems

### ✅ CORRECT APPROACH:
- **Inline HTML**: All content (headers, footers, components) should be directly embedded in each HTML file
- **Static assets**: Images, CSS, and JS files served as static resources
- **Build-time processing**: Use Vite's build system for optimization, not runtime loading
- **Copy-paste components**: If you need to update headers/footers across pages, manually update each HTML file

### Why This Matters:
1. **Performance**: Static sites load faster than dynamic ones
2. **Reliability**: No JavaScript failures can break the site structure
3. **SEO**: Search engines can properly index all content
4. **Simplicity**: Easier to maintain and debug
5. **Hosting**: Works on any static hosting service without server requirements

### Component Management:
- The `src/components/` folder contains reference HTML for copy-pasting
- When updating shared components (header/footer), manually update ALL HTML files
- Do NOT create JavaScript loaders or dynamic injection systems

### File Structure Explained

```
src/                    ← EDIT THESE FILES
├── index.html         ← Source homepage
├── about.html         ← Source about page
├── contact.html       ← Source contact page
├── services.html      ← Source services page
├── work.html          ← Source work page
├── assets/
│   ├── css/main.css   ← Source styles
│   ├── js/main.js     ← Source JavaScript
│   └── images/        ← Source images

dist/                  ← GENERATED (don't edit)
├── index.html         ← Built homepage
└── assets/            ← Built assets

Root directory         ← GENERATED (don't edit)
├── index.html         ← Built homepage (ignored by git)
└── css/               ← Built styles (ignored by git)
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
   - Create new HTML file in `src/`
   - Add to `vite.config.js` input configuration:
     ```js
     input: {
       main: 'src/index.html',
       about: 'src/about.html',
       newpage: 'src/newpage.html'  // Add this line
     }
     ```
   - Update navigation in `src/components/header.html`

### Updating Content

**Text Content**: Edit HTML files directly in the `src/` directory.

**Images**: 
- Add new images to `src/assets/images/`
- Use descriptive filenames (e.g., `hero-workshop-background.jpg`)
- Reference in HTML: `<img src="/assets/images/your-image.jpg" alt="Description">`

**Styling**: 
- Global styles: Edit `src/assets/css/main.css`
- Design system: Edit `src/assets/css/design-system.css`
- Component styles: Add to relevant sections in main.css

**Navigation**: 
- Edit `src/components/header.html` for main navigation
- Edit `src/components/footer.html` for footer links

### Brand Assets

Logos are available in multiple formats in `src/assets/images/logos/`:
- **Horizontal layouts**: Use for headers, wide spaces
- **Stacked layouts**: Use for square spaces, favicons
- **Color variations**: Black, White, Blue, Yellow combinations

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
- **Preview deployments**: Any branch push
- **Production deployments**: Push to `main` branch

### Manual Deployment
1. Build the site: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 🛠 Technical Details

### Build System
- **Vite**: Modern build tool with hot reload
- **Multi-page**: Configured for multiple HTML entry points
- **Asset optimization**: Automatic image optimization and versioning
- **CSS/JS bundling**: Minification and compression

### Performance Features
- Lazy loading for images
- Asset bundling and minification
- Preloading of critical resources
- Responsive image handling

### Accessibility Features
- Semantic HTML structure
- Skip-to-content links
- Proper form labeling
- Keyboard navigation support
- Screen reader compatibility

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

**Components not loading**:
- ⚠️ **IMPORTANT**: This site uses STATIC components, not dynamic loading
- Headers and footers should be directly embedded in each HTML file
- If components appear missing, they need to be manually copied into each page
- Do NOT try to fix this with JavaScript loaders - use inline HTML instead
- Check that all HTML files contain the complete header and footer HTML

**Styles not applying**:
- Ensure CSS files are properly linked in HTML
- Check for CSS syntax errors
- Verify CSS custom properties are defined

**Changes not showing up on deployed site**:
- Make sure you edited files in `src/` directory, not root
- Check that your changes were committed and pushed
- Wait for GitHub Actions deployment to complete

### Development Tips

1. **Hot Reload**: Changes to HTML, CSS, and JS files automatically refresh the browser
2. **Asset Paths**: Always use absolute paths starting with `/assets/`
3. **Component Updates**: Changes to header/footer require page refresh
4. **Build Testing**: Test production builds locally with `npm run preview`

## 📞 Support

For technical issues or questions about the website:
1. Check this README for common solutions
2. Review the browser console for error messages
3. Ensure all dependencies are properly installed
4. Contact the development team for assistance

## 📝 Contributing

1. Create a new branch for your changes
2. Make your edits following the project structure (edit files in `src/` only!)
3. Test locally with `npm run dev`
4. Build and verify with `npm run build`
5. Commit changes with descriptive messages
6. Push to your branch and create a pull request