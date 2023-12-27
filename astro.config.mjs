import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  compilerOptions: {
    "plugins": [{
      "name": "@astrojs/ts-plugin"
    }]
  },
  output: "server",
  adapter: vercel()
});