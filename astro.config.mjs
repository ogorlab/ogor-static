import { loadEnv } from "vite";
import { defineConfig, envField } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://docs.astro.build/en/guides/environment-variables/#in-the-astro-config-file
const { PUBLIC_OGOR_APP_HOST } = loadEnv(process.env.NODE_ENV, process.cwd(), "")

const site = PUBLIC_OGOR_APP_HOST || "https://ogor.ro"

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
      PUBLIC_OGOR_APP_HOST: envField.string({ context: "client", access: "public", default: site }),
      PUBLIC_OGOR_APP_LOGIN_URL: envField.string({ context: "client", access: "public", default: site + "/auth/login" }),
      PUBLIC_OGOR_APP_SIGNUP_URL: envField.string({ context: "client", access: "public", default: site + "/auth/new-account"}),
      PUBLIC_OGOR_BE_HOST: envField.string({ context: "client", access: "public", default: site }),
      PUBLIC_TRACKING_UMAMI_ID: envField.string({ context: "client", access: "public", optional: true }),
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