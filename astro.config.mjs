// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
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
    plugins: [tailwindcss()]
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
  // Configuración de compilación para Vercel
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  }),
});