import { defineConfig } from 'astro/config';
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  site: process.env.SITE_URL || undefined,
});
