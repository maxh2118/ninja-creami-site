import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  // De volledige URL waar de site live komt
  site: 'https://maxh2118.github.io',
  // De submap waar de site in staat
  base: '/ninja-creami-site/',

  integrations: [tailwind(), react()]
});