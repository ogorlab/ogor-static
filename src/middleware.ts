import { defineMiddleware } from "astro:middleware";

import type { GetStaticPathsResult } from "astro"
import config from "astro.config.mjs"
import { toCodes } from "astro:i18n"
import Home from "@/views/Home.astro"
import About from "@/views/About.astro"
import Legal from "@/views/Legal.astro"

if (!config.i18n) {
  throw Error("Missing i18n in Astro configuration.")
}

type Locale = "ro" | "en" | "fr"

type RouteName = keyof typeof ROUTES

export type RouteMeta = {
  path: string;
  title: string;
}

export type LocalizedUrls = Record<Locale, string>

// ----------------------------------------------------------------------------

export const locales = toCodes( config.i18n.locales ) as Locale[]
export const defaultLocale = config.i18n.defaultLocale as Locale

let prefixDefaultLocale: boolean | undefined = undefined
if (typeof config.i18n.routing == "object") {
  prefixDefaultLocale = config.i18n.routing.prefixDefaultLocale
}

export const ROUTES = {
  "home": {
    component: Home
  },
  "about": {
    component: About
  },
  "legal": {
    component: Legal
  },
} as const

const META = {
  "home": {
    "ro": {},
    "en": {},
    "fr": {}
  },
  "about": {
    "ro": {
      "path": "despre"
    },
    "en": {
      "path": "about"
    },
    "fr": {
      "path": "a-propos"
    }
  },
  "legal": {
    "ro": {
      "path": "legal",
      "title": "Legal"
    },
    "en": {},
    "fr": {
      "title": "Légal"
    }
  },
} as Record<RouteName, Record<Locale, Partial<RouteMeta>>>





export function getLocaleProps(locale: Locale, name: RouteName) {
  return Object.assign({}, 
    (locale === defaultLocale) ? null : META[name][defaultLocale],
    META[name][locale]
  )
}

export function getPath(locale: Locale = defaultLocale, name: RouteName, absolute = false) {
  // @ts-ignore
  const localeProps = getLocaleProps.apply(this, arguments)

  // Prefix paths where appropriate
  let path = localeProps.path 
  if (!prefixDefaultLocale && locale !== defaultLocale) {
    path = locale + "/" + (path || "") // make it string if path is undefined
  }
  if (absolute) {
    const site = import.meta.env.SITE || ""
    const base = import.meta.env.BASE_URL || ""
    path = site + base + (path || "")
  }

  return path
}

export function getLocalizedPaths() {
  const result: GetStaticPathsResult = []

  for (let _name in ROUTES) {
    const name = _name as RouteName

    for (const _locale in META[name]) {
      const locale = _locale as Locale
      const path = getPath(locale, name)
      const props = {
        Content: ROUTES[name].component,
        name,
      }
      result.push({ params: { path }, props })
    }
  }
  console.log(result)
  return result
}

/**
 * @link https://docs.astro.build/en/guides/middleware/
 * 
 * @todo build canonical urls
 */
export const onRequest = defineMiddleware((context, next) => {
  const name = context.props.name

  console.log(context.locals)
  if (name in ROUTES) {
    context.locals.name = name

    const props = getLocaleProps(context.currentLocale as Locale, name)
    
    Object.assign(context.locals, props)

    const localizedUrls: Partial<LocalizedUrls> = {}
    for (let locale of locales) {
      localizedUrls[locale] = getPath(locale, name, true) || ""
    }
    context.locals.localizedUrls = localizedUrls
  } else {
    console.warn("Requested name is not defined in ROUTES")
  }

  return next();
});