import { defineConfig, envField } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = import.meta.env.APP_HOST || "https://ogor.ro"

// https://astro.build/config
export default defineConfig({
  site,
  trailingSlash: "ignore",
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
  ],
  env: {
    schema: {
      OGOR_APP_HOST: envField.string({ context: "client", access: "public", default: site }),
      OGOR_APP_LOGIN_URL: envField.string({ context: "client", access: "public", default: site + "/auth/login" }),
      OGOR_APP_SIGNUP_URL: envField.string({ context: "client", access: "public", default: site + "/auth/new-account"}),
      OGOR_BE_HOST: envField.string({ context: "client", access: "public", default: site }),
      TRACKING_ENABLED: envField.boolean({ context: "client", access: "public", default: false }),
    }
  },
  server: {
    allowedHosts: ["ogor.ro"],
    host: true,
    hmr: {
      host: "ogor.ro",
    }
  },
  security: {
    checkOrigin: false,
  },
  vite: {
    plugins: [
      tailwindcss({
        nesting: true, 
        applyBaseStyles: false
      }),
    ]
  }
});