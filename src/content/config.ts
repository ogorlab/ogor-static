import { z, defineCollection } from "astro:content"

const yieldForecastCollection = defineCollection({
  type: "data",
  schema: z.object({
    forecast_date: z.string(),
    next_forecast_date: z.string(),
    crops: z.array(z.object({
      code: z.number(),
      avg_yield: z.number(),
      total_surface: z.number()
    })),
  })
})

const updatesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.date(),
  })
})

export const collections = {
  forecast: yieldForecastCollection,
  updates: updatesCollection,
}

// Organize yield by year, date / maybe in the future crop
