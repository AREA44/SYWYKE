import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
import critters from 'astro-critters';

export default defineConfig({
  site: 'https://sywyke.vercel.app',
  integrations: [sitemap(), compress(), critters()],
});
