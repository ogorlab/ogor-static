import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "ro",
    locales: ["ro", "fr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [sitemap()],
});