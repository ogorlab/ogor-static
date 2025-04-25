import { defineMiddleware } from "astro:middleware";
import { getUrl as _getUrl, defaultLocale } from "@/i18n"

/**
 * @link https://docs.astro.build/en/guides/middleware/
 */
export const onRequest = defineMiddleware((context, next) => {
  const { lang = defaultLocale } = context.params
  Object.assign(context.locals, {
    key: context.props.key,
    lang,
    getUrl: _getUrl.bind(null, context.currentLocale),
    backUrl: "TODO"
  })

  // You can intercept request here and add variable to Astro.locals
  return next();
});