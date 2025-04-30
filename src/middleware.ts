import { defineMiddleware } from "astro:middleware";
import { getUrl, defaultLocale } from "@/i18n"
import i18next from "i18next"

/**
 * @link https://docs.astro.build/en/guides/middleware/
 */
export const onRequest = defineMiddleware(({ locals, params, props }, next) => {
  const { lang = defaultLocale } = params

  if (i18next.language !== lang) {
    i18next.changeLanguage(lang)
  }

  Object.assign(locals, {
    key: props.key,
    lang,
    getUrl: getUrl.bind(undefined, lang),
    backUrl: "TODO"
  })

  // You can intercept request here and add variable to Astro.locals
  return next();
});