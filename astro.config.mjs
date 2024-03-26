import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), sitemap()],
  compilerOptions: {
    "plugins": [{
      "name": "@astrojs/ts-plugin"
    }]
  },
  site: "https://jorgeserrano.com.ar",
  output: "server",
  adapter: vercel()
});