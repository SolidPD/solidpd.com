# SolidPD.com Website

The official website for Solid Product Design - a modern, responsive static site built with Vite and deployed to Netlify.

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

## 📁 Project Structure

```
solidpd.com/
├── src/                          # Source files
│   ├── index.html               # Homepage
│   ├── about.html               # About page
│   ├── services.html            # Services page
│   ├── work.html                # Portfolio page
│   ├── contact.html             # Contact page
│   ├── assets/
│   │   ├── css/
│   │   │   ├── design-system.css # Design system variables
│   │   │   └── main.css         # Main stylesheet
│   │   ├── js/
│   │   │   └── main.js          # Main JavaScript
│   │   └── images/              # Image assets
│   └── components/
│       ├── header.html          # Reusable header
│       └── footer.html          # Reusable footer
├── public/                      # Static assets (copied to dist)
├── dist/                        # Built site (generated)
├── .github/workflows/           # CI/CD configuration
├── package.json                 # Dependencies
├── vite.config.js              # Build configuration
└── README.md                    # This file
```

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
- Check that header/footer files exist in `src/components/`
- Verify JavaScript is loading properly
- Check browser console for errors

**Styles not applying**:
- Ensure CSS files are properly linked in HTML
- Check for CSS syntax errors
- Verify CSS custom properties are defined

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

## 🔄 Contributing

1. Create a new branch for your changes
2. Make your edits following the project structure
3. Test locally with `npm run dev`
4. Build and verify with `npm run build`
5. Commit changes with descriptive messages
6. Push to your branch and create a pull request