import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  // Haal de configuratie uit de 'environment variables'
  site: process.env.PUBLIC_SITE_URL,
  base: process.env.PUBLIC_BASE_URL,

  integrations: [tailwind(), react()]
});