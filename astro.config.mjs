import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Reiner Static-Output: läuft auf Cloudflare Pages (Staging) und Azure Front Door (Produktion).
export default defineConfig({
  site: 'https://evana.ai',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (seite) => !seite.includes('/404') })],
});
