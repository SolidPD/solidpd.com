import { defineConfig } from 'vite'
import htmlInject from './vite-html-inject.js'

export default defineConfig({
  plugins: [htmlInject()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/index.html',
        about: 'src/about.html',
        services: 'src/services.html',
        work: 'src/work.html',
        contact: 'src/contact.html'
      }
    }
  },
  server: {
    host: '0.0.0.0',
    port: 12000,
    cors: true,
    allowedHosts: ['work-1-qveihvtqvrxadrdz.prod-runtime.all-hands.dev', 'work-2-qveihvtqvrxadrdz.prod-runtime.all-hands.dev'],
    headers: {
      'X-Frame-Options': 'ALLOWALL'
    }
  }
})