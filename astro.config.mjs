import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

// Dit is de meest simpele, kale configuratie.
export default defineConfig({
  integrations: [tailwind(), react()]
});