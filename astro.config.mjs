import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import pagefind from 'astro-pagefind';
import compress from 'astro-compress';
import critters from 'astro-critters';

export default defineConfig({
  build: {
    format: 'file',
  },
  site: 'https://sywyke.vercel.app',
  integrations: [sitemap(), pagefind(), compress(), critters()],
});
