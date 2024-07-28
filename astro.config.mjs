import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  i18n: {
    defaultLocale: "ro",
    locales: ["ro", "en", "fr"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    sitemap(), 
    tailwind({
      nesting: true, 
      applyBaseStyles: false
    })
  ]
});