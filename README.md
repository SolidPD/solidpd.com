# Solid Product Design Website

A modern, responsive static website for Solid Product Design - expert hardware product design and engineering services.

## Overview

This repository contains the source code for the Solid Product Design website, featuring:

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance**: Single HTML file with inline CSS and JavaScript for fast loading
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Contact Form**: Interactive contact form with validation
- **Smooth Navigation**: Animated scrolling between sections

## Features

- Hero section with call-to-action
- About section explaining the company story
- Services showcase with 6 key service areas
- Contact section with form and company information
- Mobile-responsive navigation menu
- Smooth scroll animations and hover effects

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox/grid, animations, and responsive design
- **Vanilla JavaScript**: Interactive features and form handling
- **No Dependencies**: Self-contained single file for easy deployment

## Deployment

This site is designed to be deployed on Netlify with automatic GitHub Actions integration.

### Quick Deploy to Netlify

1. Fork this repository
2. Connect your GitHub account to Netlify
3. Create a new site from Git and select this repository
4. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/` (root)
5. Deploy!

### Custom Domain Setup

To use your custom domain (solidpd.com):

1. In Netlify dashboard, go to Site Settings > Domain Management
2. Add custom domain: `solidpd.com`
3. Configure DNS records in your domain provider (GoDaddy):
   - Add CNAME record: `www` → `your-site-name.netlify.app`
   - Add A record: `@` → Netlify's IP addresses

## Development

To run locally:

1. Clone the repository
2. Open `index.html` in your browser
3. Or serve with a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

## File Structure

```
solidpd-site/
├── index.html          # Main website file
├── README.md           # This file
├── .gitignore         # Git ignore rules
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions workflow
```

## Contact Information

- **Email**: hello@solidpd.com
- **Phone**: (555) 123-4567
- **Location**: Philadelphia, PA

## License

© 2026 Solid Product Design. All rights reserved.

---

**Note**: This is a placeholder website. Update contact information, content, and styling as needed for your specific requirements.

