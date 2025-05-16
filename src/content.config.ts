import { z, defineCollection, getCollection } from "astro:content"
import { glob } from "astro/loaders"


const yieldForecastCollection = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.json",
    base: "./src/content/forecast/",
  }),
  schema: z.object({
    forecast_date: z.string(),
    crops: z.array(z.object({
      code: z.number(),
      avg_yield: z.number(),
      total_surface: z.number(),
      interpretation: z.record(z.string({}), z.object({
        text: z.string(),
        cite: z.string()
      })).optional()
    })),
  })
})


const updatesCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: "./src/content/updates",
  }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  })
})

const testimonialsCollection = defineCollection({
  loader: glob({
    pattern: '**/[^_]*.{md,mdx}',
    base: "./src/content/testimonials",
  }),
  schema: z.object({
    name: z.string(),
    from: z.string()
  })
})

export const collections = {
  forecast: yieldForecastCollection,
  updates: updatesCollection,
  testimonials: testimonialsCollection
}

export async function getLatestForecast() {
  const collection = await getForecasts()

  return collection[0]
}

/** Sorted from newest to oldest */
export async function getForecasts() {
  const collection = await getCollection("forecast")

  return collection.toSorted(
    (a, b) => b.data.forecast_date.localeCompare(a.data.forecast_date)
  )
}

export async function getForecastsByYear() {
  const collection = await getForecasts()
  const record: Record<string, typeof collection[number]> = {}

  collection.forEach(entry => record[entry.data.forecast_date] = entry)

  return record
}