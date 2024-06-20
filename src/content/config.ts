import { z, defineCollection } from "astro:content"

const yieldForecastCollection = defineCollection({
  type: "data",
  schema: z.object({
    crop: z.string(),
  })
})

export const collections = {
  yieldForecasts: yieldForecastCollection,
}

// Organize yield by year, date / maybe in the future crop


