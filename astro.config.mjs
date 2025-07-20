import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  // De base is weer nodig voor deze methode
  base: '/ninja-creami-site/',
  
  integrations: [tailwind(), react()]
});