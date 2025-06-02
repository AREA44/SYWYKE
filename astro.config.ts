// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import pagefind from "astro-pagefind";
import { defineConfig, fontProviders } from "astro/config";

const site = process.env.CI
  ? process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://sywyke.vercel.app"
  : "http://localhost:4321";

export default defineConfig({
  site,
  integrations: [react(), pagefind()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Geist",
        cssVariable: "--font-geist",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
