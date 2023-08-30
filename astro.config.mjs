import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'

export default defineConfig({
  site: 'https://sywyke.vercel.app',
  integrations: [sitemap()],
})
