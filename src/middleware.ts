import { defineMiddleware } from "astro:middleware";

/**
 * @link https://docs.astro.build/en/guides/middleware/
 */
export const onRequest = defineMiddleware((context, next) => {

  // console.log(context.locals.name)
  // console.log(context.locals.title)
  // console.log(context.locals.localizedUrls)
  // console.log(context.currentLocale)

  // As putea sa generez hreflang tags aici...

  console.log(context)
  // You can intercept request here and add variable to Astro.locals
  return next();
});