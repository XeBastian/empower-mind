import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: process.env.SITE_URL ?? 'https://empower-mind.pages.dev',
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) =>
        ![
          '/get-involved/',
          '/impact-stories/',
          '/research-advocacy/',
          '/resources/',
          '/what-we-do/',
        ].some((path) => new URL(page).pathname === path),
    }),
  ],

  build: {
    inlineStylesheets: 'auto',
  },

  adapter: cloudflare(),
});