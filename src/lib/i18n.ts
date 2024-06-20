import type { GetStaticPathsResult } from "astro";
import config from "astro.config.mjs"
import { toCodes } from "astro:i18n";

const locales = toCodes( config.i18n!.locales ) as Locale[]
const defaultLocale = config.i18n!.defaultLocale as Locale

type Locale = "ro" | "en" | "fr"

type PathOptions = {
  path?: string | undefined;
  title?: string;
  component?: any;
}

// How do I deal with front-matter

// 1. defaultLocale routeOptions are merged into currentLocale
// 2. currentLocale should be able to specify different properties in the file
// 3. cum gasesc path-ul unei rute traduse?
//    1. caut locale in ruta sau caut name in locale

// am nevoie sa gasesc path-ul fiecarei rute

// : 





export const ROUTES = {
  "home": {
    "ro": {
      "path": undefined,
      "title": "Prima paginǎ",
      "component": Home,
    },
    "en": {
      "title": "Homepage",
    },
    "fr": {
      "title": "Premier page",
    }
  },
  "about": {
    "ro": {
      "path": "/despre",
      "component": About
    },
    "en": {
      "path": "/about"
    },
    "fr": {
      "path": "/a-propos"
    }
  }
} satisfies Record<string, Record<Locale, PathOptions>>

type RouteName = keyof typeof ROUTES

export function getLocalizedPaths(name: RouteName) {
  const route = ROUTES[name]
  const localizedPaths: GetStaticPathsResult = [] 

  // @ts-ignore
  const defaultPath = route[defaultLocale].path

  for (const [locale, options] of Object.entries(route)) {
    const path = options.path || defaultPath
    localizedPaths.push({ params: { [name]: path, locale }})
  }

  return localizedPaths
}