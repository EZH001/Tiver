import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  appType: 'spa',
  base: command === 'build' ? '/tiver/app/' : '/',
  build: {
    outDir: 'docs/app',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  preview: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
}));
