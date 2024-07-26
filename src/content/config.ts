import { z, defineCollection, getCollection } from "astro:content"

const yieldForecastCollection = defineCollection({
  type: "data",
  schema: z.object({
    forecast_date: z.string(),
    next_forecast_date: z.string(),
    crops: z.array(z.object({
      code: z.number(),
      avg_yield: z.number(),
      total_surface: z.number(),
      interpretation: z.record(z.string({}), z.object({
        text: z.string(),
        cite: z.string()
      }))
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

export async function getLatestForecast() {
  const collection = await getCollection("forecast")
  
  return collection.reduce((latest, current) => {
    const latestDate = new Date(latest.data.forecast_date)
    const currentDate = new Date(current.data.forecast_date)
    return currentDate > latestDate ? current : latest;
  })
}
