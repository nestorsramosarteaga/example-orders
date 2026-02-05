// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel/serverless'; // Or static if you don't use SSR

export default defineConfig({
  adapter: vercel({}), 
  output: 'server', // This allows Astro to handle dynamic requests on Vercel or static
  vite: {
    plugins: [tailwindcss()]
  }
});