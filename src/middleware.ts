import { defineMiddleware } from "astro:middleware";
import { getUrl as _getUrl } from "@/i18n"

/**
 * @link https://docs.astro.build/en/guides/middleware/
 */
export const onRequest = defineMiddleware((context, next) => {
  Object.assign(context.locals, {
    key: context.props.key,
    getUrl: _getUrl.bind(null, context.currentLocale),
    backUrl: "TODO"
  })

  // You can intercept request here and add variable to Astro.locals
  return next();
});