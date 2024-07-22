import type { GetStaticPathsItem, GetStaticPathsResult } from "astro";
import i18next, { t } from "i18next"

// TODO HERE
import config from "astro.config.mjs"
import { toCodes } from "astro:i18n";

const locales = toCodes( config.i18n!.locales ) as Locale[]
const defaultLocale = config.i18n!.defaultLocale as Locale

const prefixDefaultLocale = (
  typeof config.i18n!.routing === "object" && 
  config.i18n!.routing.prefixDefaultLocale
)

type Locale = "ro" | "en" | "fr"



/**
 * @todo move namespaces in external files
 * @link https://www.i18next.com/misc/json-format#i18next-json-v4
 */
i18next.init({
  lng: "ro",
  fallbackLng: "ro",
  resources: {
    ro: {
      translation: {
        your_account: "Contul tău",
        create_account: "Creează cont",
        create_account_ogor: "Creează cont OGOR",

        "accumulated_precipitation": "Precipitații acumulate",
        "weather_forecast": "Prognoza meteo",
        "water_capacity": "Rezerva de umiditate din sol",
        "crop_rotation": "Rotația culturilor",
        "soil_map": "Harta solurilor și a texturilor",
        "vra": "Aplicare variabilă (VRA)",
        "soil_analysis": "Analize de sol",

        nav: {
          company: "Compania",
          company_long: "Prezentarea companiei",
          products: "Produse",
          products_long: "Produsele noastre",
          forecast: "Prognoza",
          forecast_long: "Prognoza OGOR",
          updates: "Noutăți",
          updates_long: "Ultimele noutăți",
        },
        company: {
          tagline: "IT pentru Agricultură",
          description: "Înființată în 2019, compania noastră este specializată în procesarea datelor satelitare pentru agricultură. Colaborăm cu fermieri, agronomi și cercetători pentru a oferi soluții accesibile de monitorizare de la distanță a culturilor și de agricultură de precizie.",
          name: "Field Data Zoom SRL (OGOR)",
          cui: "CUI 41399686",
          address: "Str. Gheorghe Missail 67, 011542 Sector 1, București",
          phone: "+40 (754) 347 347",
          email: "contact@ogor.ro",
        },
        legal: {
          "terms": "Termeni și condiții",
          "privacy": "Politica de confidențialitate",
          "cookie": "Politica de cookie"
        },
        // Maybe have a separate namespace...
        home: {
          "hero_heading": "Suita de instrumente digitale pentru agricultură decisivă",
          "hero_description": "Un nivel de <strong>încredere în deciziile agronomice</strong> care vine doar din date actualizate despre <strong>vegetație, vreme și sol.</strong>",
          "hero_cta": "Încearcă azi",
          "why_ogor": "De ce OGOR?",
          "feature1_heading": "Monitorizare activă a culturilor",
          "feature1_description": "Vezi vegetația înainte de a face inspecția din câmp! Având o vedere de sus asupra fermei, poți identifica din timp unde este afectată creșterea culturii.",
          "feature2_heading": "Intervenții agronomice timpurii",
          "feature2_description": "Privind ferma de sus, poți identifica din timp zonele în care creșterea culturilor este afectată, iar împărțirea în zone de management ajută la reducerea costurilor prin intervenții precise.",
          "feature3_heading": "Prognoză de productivitate cu 2 luni înainte de recoltă",
          "feature3_description": "Aplicând algoritmi proprii de învățare automată, OGOR produce prognoza de productivitate la grâu, orz și rapiță cu 2 luni înainte de recoltă. Prognoza este apoi actualizată o dată la 2 săptămâni până la recoltă.",
          "feature4_heading": "Jurnal agrotehnic colaborativ",
          "feature4_description": "Fie că sunteți mai mulți în fermă care folosesc OGOR, fie că apelezi la consultanți externi, adaugă poze și note pe hartă pentru a ști mereu ce s-a întâmplat pe parcelă și ce lucrări au fost efectuate.",
          "context": "Într-un context tot mai provocator din punct de vedere climatic, de piață și al politicilor agricole, <strong>OGOR</strong> vine în sprijinul fermierilor cu soluții accesibile bazate pe imagini din satelit.",
          "testimonials_heading": "Ce spun clienții OGOR?",
          "testimonials_description": "Păstrăm în permanență contact cu clienții noștri pentru a dezvolta cele mai bune soluții pentru ei. Iată ce au avut de spus când i-am întrebat: <q><strong>Cu ce v-a ajutat OGOR până acum?</strong></q>",
          "got_questions": "Ai întrebări?",
          "here_to_help": "Suntem aici să te ajutăm. Îți stăm la dispoziție la telefon sau pe email de Luni până Vineri între orele 9:00–17:00.",
          "cta": "Creează cont <strong>OGOR</strong>",
          "cta_assurance1": "Durează 3 minute să încarci terenurile tale folosind contul APIA",
          "cta_assurance2": "Funcționează cu utilajele existente și nu necesită pregătire specializată",
          "cta_assurance3": "Suport tehnic și agronomic pe tot parcursul sezonului agricol",
          "with_the_support_of": "Cu sprijinul",
          "partners": "Parteneri"
        },
        yield: {
          "ogorForecast": "Prognoza OGOR",
          "usingAlgorithms": "Aplicând algoritmi proprii de învățare automată pe imagini din satelit și date pedoclimatice, <strong>OGOR</strong> produce prognoza de productivitate la 5 dintre culturile cele mai importante: <strong>grâu, orz, porumb, floarea soarelui și rapiță.</strong>",
          "forecastIsSent": "Prognoza este emisă cu <strong>2 luni înainte de recoltă</strong> și este actualizată la fiecare 2 săptămâni.",
          "aboutForecast": "Prognoza OGOR este disponibilă ca 3 produse distincte:",
          "nationalMapAndStatistics": "<strong>Hartă și statistici la nivel național,</strong> publicate gratuit pe ogor.ro/productivitate.",
          "lastForecast": "Ultima prognoză:",
          "forecastHistory": "Istoric prognoze OGOR",
          "autumnCrops": "Culturi de toamnă",
          "springCrops": "Culturi de primăvară",
          "localityMapAndStatistics": "<strong>Hartă și statistici la nivel de județ și localitate,</strong> eliberate în baza unui contract.",
          "yieldMap": "Hartă de productivitate",
          "cropMap": "Hartă culturilor detectate",
          "statisticsTable": "Tabel statistici pentru fiecare cultură:",
          "countyYield": "Producția maximă, medie și minimă la nivelul județului",
          "localityCultivatedArea": "Suprafață cultivată în fiecare localitate",
          "salesContact": "Contact vânzări →",
          "parcelStatistics": "<strong>Statistici pe fermă și prognoză la nivel de parcelă,</strong> accesibile prin opțiune la abonamentul OGOR.",
          "subscriptionOptions": "Opțiuni abonament OGOR",
          forecast: {
            "ogorForecastFrom": "Prognoza OGOR din {{date}}",
            "ogorForecastProject": " <strong>Prognoza OGOR</strong> este un proiect de cercetare realizat de Field Data Zoom SRL (OGOR), cu sprijinul <em>Agenței Spațiale Europene (ESA)</em> și <em>Agenței Spațiale Române (ROSA)</em>. Datele de validate de la sol sunt furnizate de <em>Agenția de Plăţi şi Intervenție pentru Agricultură (APIA)</em> și datele meteo sunt furnizate de <em>OpenWeather</em>.",
            "regarding": "referitor la",
            "byApplyingML": "prin aplicarea unor algoritmi de învățare automată pe observațiile satelitare",
            "averageYield": "Producție medie",
            "harvestedSurface": "Suprafață recoltată",
            "downloadMap": "Descarcă harta",
            "lastForecast": "Ultima prognoză ({{date}})",
            "forecastHistory": "Istoricul prognoze OGOR",
            "aboutTheProject": "Despre proiect",
            "nextForecast": "Urmǎtoarea prognozǎ disponibilǎ pe data de",
            "contactOgorTeam": "Pentru hărți și statistici la nivel de județ și localitate <strong>contactează echipa de vânzări OGOR →</strong>"
          }
        },
        crop: {
          "wheat": "Grâu",
          "barley": "Orz",
          "rapeseed": "Rapiță",
          "maize": "Porumb",
          "sunflower": "Floarea soarelui",
        }
      },
      urls: {
        company: "compania",
        updates: "noutati",
        yield: "productie",
        forecast: "prognoza",
        legal: "legal",
      },
      crops: {
        101: "Grâu",
        105: "Orz",
        108: "Porumb",
        201: "Floarea soarelui",
        202: "Rapițǎ",
      }
    },
    en: {
      translation: {
        company: {
          address: "67 Gheorghe Missail Street, 011542 Sector 1, BUCHAREST, ROMANIA",
        },

        nav: {
          company: "Compania",
          company_long: "Prezentarea companiei",
          products: "Produse",
          products_long: "Produsele noastre",
          forecast: "Prognoza",
          forecast_long: "Prognoza OGOR",
          updates: "Noutăți",
          updates_long: "Ultimele noutăți",
        },
      },
      urls: {
        company: "company",
        updates: "updates",
        yield: "yield",
        forecast: "forecast",
      },
      crops: {
        101: "Wheat",
        105: "Barley",
        108: "Maize",
        201: "Sunflower",
        202: "Rapeseet",
      }
    },
    fr: {
      translation: {
        company: {
          address: "Rue Gheorghe Missail 67, 011542 Secteur 1, Bucarest, Roumanie"
        }
      },
      urls: {
        company: "entreprise",
        updates: "nouveautes", // nouveautés
        yield: "rendement",
        forecast: "prevision",
      },
      crops: {
        101: "Blé",
        105: "Orge",
        108: "Maïs", 
        201: "Tournesol",
        202: "Colza",
      }
    }
  }
})

i18next.services.formatter?.add('ha', (value, lng, options) => {
  value = value.toLocaleString(lng, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }) + ' ha'
  return value
})

// Review
export const LOGIN_URL = import.meta.env.PUBLIC_OGOR_APP_LOGIN_URL

type GetLocalizedPathsItem = GetStaticPathsItem & {
  props: {
    key: string;
  }
}

type GetLocalizedPathCallback<T extends GetLocalizedPathsItem = GetLocalizedPathsItem> = (item: T) => T;

/**
 * @todo make it work with interpolated params...
 */
export function getUrl(locale: string = defaultLocale, key: string) {
  const params = key.split("/")

  let url = params.map(param => t(param, { lng: locale, ns: "urls" })).join("/")

  if (url[0] !== "/") {
    url = "/" + url
  }
  if (prefixDefaultLocale || locale !== defaultLocale) {
    url = "/" + locale + url
  }

  return url
}

/**
 * @todo use locales defined in config
 * @todo special case for default lang
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
  const params = key.split("/")
  const paths: GetStaticPathsResult = []

  for (let lang of [undefined, "en", "fr"]) {
    const entries = params.map(param => [param, t(param, { lng: lang, ns: "urls" })])
    entries.push(["lang", lang as string])

    const path = {
      params: Object.fromEntries(entries),
      props: { key }
    }

    cb?.call(null, path)
    paths.push(path)
  }

  return paths
}

/**
 * @todo declare locales
 * 
 * @example
 * ```astro
 * ---
 * const { t } = useI18n(Astro.currentLocale)
 * ---
 * { t("your_translation_key") }
 * ```
 */
export function useI18n(lang: string = "ro") {
  return {
    t: function() {
      return t(arguments[0], { lng: lang, ...arguments[1] })
    }
  }
}
