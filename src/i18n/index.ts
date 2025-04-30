import type { GetStaticPathsItem, GetStaticPathsResult } from "astro";
import i18n, { t } from "i18next"
import * as config from "astro:config/client"
import { toCodes } from "astro:i18n";
import ro from "./ro.json";
import en from "./en.json";
import fr from "./fr.json";

export type Locale = "ro" | "en" | "fr"

const i18nConfig = config.i18n!

export const locales = toCodes( i18nConfig.locales ) as Locale[]
export const defaultLocale = i18nConfig.defaultLocale as Locale
export const prefixDefaultLocale = (
  typeof i18nConfig.routing === "object" && 
  i18nConfig.routing.prefixDefaultLocale
)

declare module "i18next" {  
  interface CustomTypeOptions {
    /** When working heavily with translations you might need help finding the keys */
    // resources: typeof ro
  }
}

/**
 * @todo move namespaces in external files
 * @link https://www.i18next.com/misc/json-format#i18next-json-v4
 */
i18n.init({
  compatibilityJSON: "v4",
  lng: defaultLocale,
  fallbackLng: "ro",
  fallbackNS: "common",
  pluralSeparator: "+",
  resources: { ro, en, fr },
  initImmediate: true,
  returnObjects: true,
  returnNull: false,
})

i18n.services.formatter?.add('ha', (value, lng) => {
  value = value.toLocaleString(lng, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }) + ' ha'
  return value
})
i18n.services.formatter?.add("lower", str => str.toLowerCase())
/**
 * @todo when needed add options: { type: "conjunction" | "disjunction" }
 */
i18n.services.formatter?.add("list", function(list: any[], lng: any, options: any) {
  if (list.length === 0) return ""
  if (list.length === 1) return list[0]

  return (
    list.slice(0, -1).join(", ") + 
    " " + i18n.t("and") + " " + 
    list[list.length - 1]
  )
})

type GetLocalizedPathsItem = GetStaticPathsItem & {
  props: {
    key: string;
  }
}

type GetLocalizedPathCallback<T extends GetLocalizedPathsItem = GetLocalizedPathsItem> = (item: T, locale: Locale) => T;

/**
 * @todo make it work with interpolated params...
 */
export function getUrl(locale: string = defaultLocale, key: string, hash?: string) {
  const params = key.split("/")

  let url = params.map(param => t(param, "", { lng: locale, ns: "urls" })).join("/")

  if (url[0] !== "/") {
    url = "/" + url
  }
  if (prefixDefaultLocale || locale !== defaultLocale) {
    url = "/" + locale + url
  }
  if (hash) {
    url += t(hash, "", { lng: locale, ns: "urls" })
  }

  return url
}

/**
 * @todo I would like to infer type, but I need to be able to extend GetStaticPathsItem first
 * @todo cb should replace item with either an array or the item itself
 * 
 * @example
 * ```
 * export const getStaticPaths = (
 *   () => getLocalizedPaths("yield/forecast")
 * ) satisfies GetStaticPaths;
 * ```
 * Alternatively, use `import.meta.url` instead of path:
 * @example
 * ```
 * export const getStaticPaths = (
 *   () => getLocalizedPaths(import.meta.url)
 * ) satisfies GetStaticPaths;
 * ```
 */
export function getLocalizedPaths<T extends GetLocalizedPathsItem = GetLocalizedPathsItem>(key: string, cb?: GetLocalizedPathCallback<T>) {
  key = key.split("pages/[...lang]/").pop()!
           .replaceAll(/\.astro|\.html|\.md|\.mdx|\.json/g, "")
           .replaceAll(/\[|\]/g, "")
  const params = key && key !== "/" ? key.split("/") : []
  const paths: GetStaticPathsResult = []

  for (let lang of locales) {
    const entries = params.map(param => [param, t(param, "", { lng: lang, ns: "urls" })])

    if (!prefixDefaultLocale && lang !== defaultLocale) {
      entries.push(["lang", lang])
    } else {
      // @ts-ignore - if we don't prefix default locale this needs to be undefined
      entries.push(["lang", undefined])
    }

    const path = {
      params: Object.fromEntries(entries),
      props: { key }
    }

    cb?.call(null, path as T, lang || defaultLocale)
    paths.push(path)
  }

  return paths
}
