// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: swap for the real domain once registered
  site: 'https://www.gargoylecleaning.com',
  integrations: [sitemap()],
});
