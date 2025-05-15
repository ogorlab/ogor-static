import { defineMiddleware } from "astro:middleware";
import { getUrl, defaultLocale, locales } from "@/i18n"
import i18next from "i18next"

/**
 * @link https://docs.astro.build/en/guides/middleware/
 */
export const onRequest = defineMiddleware(({ locals, params, props }, next) => {
  const { lang = defaultLocale } = params

  if (i18next.language !== lang) {
    i18next.changeLanguage(
      // @ts-ignore stupid TS!
      locales.includes(lang) ? lang : defaultLocale
    )
  }

  Object.assign(locals, {
    key: props.key,
    umamiKey: props.umamiKey || props.key,
    lang,
    getUrl: getUrl.bind(undefined, lang),
    backUrl: "TODO"
  })

  // You can intercept request here and add variable to Astro.locals
  return next();
});