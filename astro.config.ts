// @ts-check
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = process.env.CI
  ? process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://sywyke.vercel.app"
  : "http://localhost:4321";

export default defineConfig({
  site,
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
