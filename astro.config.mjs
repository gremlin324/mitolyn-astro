import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://mitolyn-boost.com',
  integrations: [
    mdx(),
    sitemap(),
    prefetch(),
  ],
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});
