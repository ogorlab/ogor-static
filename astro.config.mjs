import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PROD ? "https://ogor.ro" : undefined,
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
    sitemap({
      // This doesn't seem to do anything...
      i18n: {
        defaultLocale: "ro",
        locales: {
          ro: "ro",
          en: "en",
          fr: "fr",
        }
      }
    }), 
    tailwind({
      nesting: true, 
      applyBaseStyles: false
    })
  ]
});