import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react"; // <-- Dit is de correctie

export default defineConfig({
  // Deze base is BELANGRIJK
  base: '/ninja-creami-site/',

  integrations: [tailwind(), react()]
});