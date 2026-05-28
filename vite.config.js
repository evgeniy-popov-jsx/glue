import { defineConfig } from 'vite';

export default defineConfig({
  base: '/glue/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'glue/privacy/index.html',
        terms: 'glue/terms/index.html',
      },
    },
  },
});
