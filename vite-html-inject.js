import fs from 'fs';
import path from 'path';

export default function htmlInject() {
  let config;

  return {
    name: 'html-inject',
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const headerPath = path.resolve(config.root, 'components/header.html');
        const footerPath = path.resolve(config.root, 'components/footer.html');
        
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
        
        html = html.replace('<!-- HEADER_PLACEHOLDER -->', headerHtml);
        html = html.replace('<!-- FOOTER_PLACEHOLDER -->', footerHtml);
        
        return html;
      }
    }
  };
}