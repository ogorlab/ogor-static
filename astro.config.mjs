import { defineConfig } from 'astro/config';




export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  i18n: {
    defaultLocale: "ro",
    locales: ["ro", "fr", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },
});
