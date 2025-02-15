import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html', // For SPAs (single-page apps)
    }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? '/sweetener-converter' : '', // Adjust for GitHub Pages
    },
  },
  preprocess: vitePreprocess(),
};