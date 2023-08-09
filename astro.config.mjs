import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import Compress from 'astro-compress'
import Critters from 'astro-critters'

export default defineConfig({
  site: 'https://sywyke.vercel.app',
  integrations: [sitemap(), Compress(), Critters()],
})
