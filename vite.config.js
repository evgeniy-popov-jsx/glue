import { defineConfig } from 'vite';
import { resolve } from 'path';
// import inlining from 'vite-plugin-html-inline-sources';

export default defineConfig({
  // plugins: [inlining()],
  base: '/glue/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
      },
    },
  },
});
