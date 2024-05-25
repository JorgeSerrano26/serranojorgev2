import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';
import robotsTxt from "astro-robots-txt";
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  }), robotsTxt(), sitemap(), react()],
  compilerOptions: {
    "plugins": [{
      "name": "@astrojs/ts-plugin"
    }]
  },
  site: "https://jorgeserrano.com.ar",
  output: "server",
  adapter: cloudflare()
});