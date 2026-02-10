// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import { SITE_URL } from './src/consts';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    svelte(),
    mdx(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          // Sanitize entry/chunk filenames to remove @ characters that Netlify rejects
          chunkFileNames(chunkInfo) {
            const name = chunkInfo.name || 'chunk';
            const sanitized = name.replace(/@/g, '');
            return `chunks/${sanitized}.[hash].mjs`;
          },
          entryFileNames(chunkInfo) {
            const name = chunkInfo.name || 'entry';
            const sanitized = name.replace(/@/g, '');
            return `${sanitized}.[hash].mjs`;
          },
        },
      },
    },
    plugins: [tailwindcss()],
    server: {
      watch: {
        usePolling: true,
        interval: 100,
      },
      hmr: {
        overlay: true,
      },
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // Configuración de compilación para Netlify
  output: 'server',
  adapter: netlify(),
});