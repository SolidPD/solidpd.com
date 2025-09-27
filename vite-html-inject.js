import fs from 'fs';
import path from 'path';

export default function htmlInject() {
  return {
    name: 'html-inject',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        // Read header and footer components
        const headerPath = path.resolve('src/components/header.html');
        const footerPath = path.resolve('src/components/footer.html');
        
        let headerHtml = '';
        let footerHtml = '';
        
        try {
          headerHtml = fs.readFileSync(headerPath, 'utf-8');
        } catch (err) {
          console.warn('Header component not found:', headerPath);
        }
        
        try {
          footerHtml = fs.readFileSync(footerPath, 'utf-8');
        } catch (err) {
          console.warn('Footer component not found:', footerPath);
        }
        
        // Replace placeholders with actual components
        html = html.replace('<!-- HEADER_PLACEHOLDER -->', headerHtml);
        html = html.replace('<!-- FOOTER_PLACEHOLDER -->', footerHtml);
        
        return html;
      }
    }
  };
}