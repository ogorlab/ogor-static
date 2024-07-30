import type { GetStaticPathsItem, GetStaticPathsResult } from "astro";
import i18next, { t } from "i18next"
import type { TOptions } from "i18next"
import config from "astro.config.mjs"
import { toCodes } from "astro:i18n";

export type Locale = "ro" | "en" | "fr"

const locales = toCodes( config.i18n!.locales ) as Locale[]
const defaultLocale = config.i18n!.defaultLocale as Locale
const prefixDefaultLocale = (
  typeof config.i18n!.routing === "object" && 
  config.i18n!.routing.prefixDefaultLocale
)

/**
 * @todo move namespaces in external files
 * @link https://www.i18next.com/misc/json-format#i18next-json-v4
 */
i18next.init({
  lng: "ro",
  fallbackLng: "ro",
  fallbackNS: "common",
  resources: {
    ro: {
      common: {
        "ro": "Română",
        "en": "English",
        "fr": "Français",

        "and": "și",
        "year": "an",
        "date": "Data",
        "document": "Document",
        "availability": "Valabilitate",
        "link": "Link",
        "map": "hartă",
        "starting_from": "Începând de la",

        "autumn_crops": "Culturi de toamnă",
        "spring_crops": "Culturi de primăvară",

        "contact": "Contact",
        "download": "Descarcă",
        "about": "Despre",
      },
      translation: {
        // Account
        "your_account": "Contul tău",
        "create_account": "Creează cont",
        "create_account_ogor": "Creează cont OGOR",

        // Features
        "accumulated_precipitation": "Precipitații acumulate",
        "accumulated_precipitation_home": "Un indicator cheie în estimarea productivității, anticiparea unor boli și dăunători etc. Nu există agricultură de precizie fără precipitații acumulate.",
        "weather_forecast": "Prognoza meteo",
        "weather_forecast_home": "Pe următoarele 7 zile; <strong>din 3 în 3 ore pentru ziua curentă!</strong> Date furnizate de Meteo Romania.",
        "water_capacity": "Rezerva de umiditate din sol",
        "water_capacity_home": "Rezerva de apă din sol la diferite adâncimi, atât pentru culturile de toamnă, cât și cele de primăvară.",
        "crop_rotation": "Rotația culturilor",
        "crop_rotation_home": "Instrumente pentru gestiunea și planificarea asolamentului, de la desenarea terenurilor până la setarea culturilor.",
        "soil_map": "Harta solurilor și a texturilor",
        "soil_map_home": "Tipul de sol, textura, scheletul etc.",
        "vra": "Aplicare variabilă (VRA)",
        "vra_home": "👍 Reducerea costurilor cu îngrășămintele. 💧 Economisirea apei. 🔻 Reducerea utilizării substanțelor chimice. 🚜 Reducerea costurilor cu combustibilul și forța de muncă. 🌾 Creșterea productivității. <br><br><a href=\"{{href}}\" rel=\"external\">Începând de la 35 de lei</a> →",
        "soil_analysis": "Analize de sol",
        "soil_analysis_home": "Analiza solului și a apei este calea sigură către fertilizarea și amendarea eficientă a parcelelor, către agricultură de performanță. <br><br>În parteneriat cu <strong>Alcedo.</strong>",

        "products": "Produse",
        "products_title_company": "Produsele noastre",

        "nav": {
          "company": "Compania",
          "company_long": "Prezentarea companiei",
          "products": "Produse",
          "products_long": "Produsele noastre",
          "forecast": "Prognoza",
          "forecast_long": "Prognoza OGOR",
          "updates": "Noutăți",
          "updates_long": "Ultimele noutăți",
        },
        "company": {
          "tagline": "IT pentru Agricultură",
          "description": "Înființată în 2019, compania noastră este specializată în procesarea datelor satelitare pentru agricultură. Colaborăm cu fermieri, agronomi și cercetători pentru a oferi soluții accesibile de monitorizare de la distanță a culturilor și de agricultură de precizie.",
          "name": "Field Data Zoom SRL (OGOR)",
          "cui": "CUI 41399686",
          "address": "Str. Gheorghe Missail 67, 011542 Sector 1, București",
          "phone": "+40 (754) 347 347",
          "email": "contact@ogor.ro",
        },
        "legal": {
          "title": "Legal",
          "history": "Versiuni anterioare",
          "terms": "Termeni și condiții",
          "privacy": "Politica de confidențialitate",
          "cookie": "Politica de cookie",
          "generaltos_terms": "Termeni și condiții de utilizare",
          "tos_terms": "Termeni și condiții contractuale",
          "marketing_terms": "Politica de marketing",
          "cookie_terms": "$t(legal.cookie)",
          "privacy_terms": "$t(legal.privacy)",
        },
        "meta": {
          "title": "Instrumente digitale pentru agricultură decisivă",
          "description": "Încredere în deciziile agronomice prin date actualizate despre vegetație, vreme și sol."
        },
        "home": {
          "hero_heading": "Suita de instrumente digitale pentru agricultură decisivă",
          "hero_description": "Un nivel de <strong>încredere în deciziile agronomice</strong> care vine doar din date actualizate despre <strong>vegetație, vreme și sol.</strong>",
          "hero_cta": "Încearcă azi",
          "why_ogor": "De ce OGOR?",
          "feature1_heading": "Monitorizare activă a culturilor",
          "feature1_description": "Vezi vegetația înainte de a face inspecția din câmp! Având o vedere de sus asupra fermei, poți identifica din timp unde este afectată creșterea culturii.",
          "feature2_heading": "Intervenții agronomice timpurii",
          "feature2_description": "Privind ferma de sus, poți identifica din timp zonele în care creșterea culturilor este afectată, iar împărțirea în zone de management ajută la reducerea costurilor prin intervenții precise.",
          "feature3_heading": "Prognoza de productivitate cu 2 luni înainte de recoltă",
          "feature3_description": "Aplicând algoritmi proprii de învățare automată, OGOR produce prognoza de productivitate la grâu, orz, porumb, floarea soarelui și rapiță cu 2 luni înainte de recoltă. Prognoza este apoi actualizată o dată la 2 săptămâni până la recoltă.",
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
        "yield_title": "Producția de {{crops}}",
        "yield": {
          "ogorForecast": "Prognoza OGOR",
          "usingAlgorithms": "Aplicând algoritmi proprii de învățare automată pe imagini din satelit și date pedoclimatice, <strong>OGOR</strong> produce prognoza de productivitate la 5 dintre culturile cele mai importante: <strong>grâu, orz, porumb, floarea soarelui și rapiță.</strong>",
          "forecastIsSent": "Prognoza este emisă cu <strong>2 luni înainte de recoltă</strong> și este actualizată la fiecare 2 săptămâni.",
          "aboutForecast": "Prognoza OGOR este disponibilă ca 3 produse distincte:",
          "nationalMapAndStatistics": "<strong>Hartă și statistici la nivel național,</strong> publicate gratuit pe ogor.ro/productivitate.",
          "lastForecast": "Ultima prognoză",
          "history": "Istoric prognoze OGOR",
          "localityMapAndStatistics": "<strong>Hartă și statistici la nivel de județ și localitate,</strong> eliberate în baza unui contract.",
          "yieldMap": "Hartă de productivitate",
          "cropMap": "Hartă culturilor detectate",
          "statisticsTable": "Tabel statistici pentru fiecare cultură:",
          "countyYield": "Producția maximă, medie și minimă la nivelul județului",
          "localityCultivatedArea": "Suprafață cultivată în fiecare localitate",
          "salesContact": "Contact vânzări →",
          "parcelStatistics": "<strong>Statistici pe fermă și prognoză la nivel de parcelă,</strong> accesibile prin opțiune la abonamentul OGOR.",
          "subscriptionOptions": "Opțiuni abonament OGOR",
        },
        "yield_forecast": {
          "ogorForecastFrom": "Prognoza OGOR din {{date}}",
          "ogorForecastProject": " <strong>Prognoza OGOR</strong> este un proiect de cercetare realizat de Field Data Zoom SRL (OGOR), cu sprijinul <em>Agenței Spațiale Europene (ESA)</em> și <em>Agenței Spațiale Române (ROSA)</em>. Datele de validate de la sol sunt furnizate de <em>Agenția de Plăţi şi Intervenție pentru Agricultură (APIA)</em> și datele meteo sunt furnizate de <em>OpenWeather</em>.",
          "regarding": "referitor la",
          "byApplyingML": "realizatǎ aplicând algoritmii proprii de învǎțare automatǎ pe observații satelitare și date meteorologice",
          "averageYield": "Producție medie",
          "harvestedSurface": "Suprafață recoltată",
          "downloadMap": "Descarcă harta",
          "lastForecast": "Ultima prognoză ({{date}})",
          "history": "Istoric prognoze OGOR",
          "aboutTheProject": "Despre proiect",
          "nextForecast": "Urmǎtoarea prognozǎ disponibilǎ pe data de <em>{{date}}</em>.",
          "contactOgorTeam": "Pentru hărți și statistici la nivel de județ și localitate <strong>contactează echipa de vânzări OGOR →</strong>"
        },
        "ogor_description_product": "<strong>Platforma OGOR</strong> prelucrează în fiecare săptămână date satelitare pe toată suprafața României pentru a produce hărți de vegetație pentru 300+ fermieri.",
        "ogor_yield_description_product": "Aplicând algoritmi proprii de învățare automată pe imagini din satelit și date pedoclimatice, <strong>OGOR</strong> produce prognoza de productivitate cu 2 luni înainte de recoltă.",
        "ogor_vra_description_product": "Creează hărți <strong>VRA în 10 minute</strong> sau mai puțin. VRA — <em>Aplicare cu Ratǎ Variabilă</em> — permite ajustarea cantității de tratament pe zone pentru eficientizarea costurilor de amendare a parcelei.",
        "tarla_description_product": "<strong>Tarla</strong> a fost creat pentru a centraliza datele funciare într-o singură aplicație, cu posibilitatea de a vedea toate terenurile pe aceeași hartǎ și de a le putea localiza la fața locului."
      },
      "urls": {
        "company": "compania",
        "updates": "noutati",
        "yield": "productie",
        "forecast": "prognoza",
        "legal": "legal",
        "#products": "#produse",
        "#history": "#istoric",
        "#generaltos_terms": "#termeni",
        "#privacy_terms": "#confidentialitate",
        "#cookie_terms": "#cookie",
      },
      "alt": {
        "kv_main": "Fermier în câmp",
        "kv_devices": "OGOR pe mai multe dispozitive",
        "screenshot_farm_view": "Captură ecran din aplicația OGOR cu vedere de ansamblu asupra fermei",
        "flooding": "Suprafața afectată de băltire așa cum se vede pe harta NDVI",
        "pests": "Notă cu poză identificând dăunător",
        "forecast_country": "Hartă cu prognoza OGOR de productivitate la nivel național din data de {{ date }}",
      },
      "crops": {
        "101": "Grâu",
        "105": "Orz",
        "108": "Porumb",
        "201": "Floarea soarelui",
        "202": "Rapițǎ",
      }
    },
    en: {
      "common": {
        "and": "and",
        "year": "year",
        "date": "Date",
        "document": "Document",
        "availability": "Availability",
        "link": "Link",
        "map": "map",
        "starting_from": "Starting from",
        "autumn_crops": "Autumn crops",
        "spring_crops": "Spring crops",
        "contact": "Contact",
        "download": "Download",
        "about": "About",
      },
      "translation": {
        // Account
        "your_account": "Your account",
        "create_account": "Create account",
        "create_account_ogor": "Create OGOR account",

        // Features
        "accumulated_precipitation": "Accumulated precipitation",
        "accumulated_precipitation_home": "A key indicator in estimating productivity, anticipating diseases and pests, etc. There is no precision agriculture without accumulated precipitation.",
        "weather_forecast": "Weather forecast",
        "weather_forecast_home": "For the next 7 days; <strong>every 3 hours for the current day!</strong> Weather data provided by Meteo Romania.",
        "water_capacity": "Soil water capacity",
        "water_capacity_home": "Soil water capacity at different depths for both spring and autumn crops.",
        "crop_rotation": "Crop rotation",
        "crop_rotation_home": "Instruments for managing and planning crop rotation from drawing parcels to setting crops.",
        "soil_map": "Soil and texture map",
        "soil_map_home": "Type of soil, texture, skeleton etc.",
        "vra": "Variable Rate Application (VRA)",
        "vra_home": "👍 Cut fertilizers costs. 💧 Save water. 🔻 Reduce chemical use. 🚜 Lower fuel and labor. 🌾 Increased yields.<br><br><a href=\"{{href}}\" rel=\"external\">Starting from $6/map</a> →",
        "soil_analysis": "Soil analyses",
        "soil_analysis_home": "Soil and water analysis is the sure-fire way towards efficient fertilization and parcel ammendment, towards precision agriculture. In partnership with <strong>Alcedo.</strong>",

        "products": "Products",
        "products_title_company": "Our products",

        "nav": {
          "company": "Company",
          "company_long": "Company presentation",
          "products": "Products",
          "products_long": "Our products",
          "forecast": "Forecast",
          "forecast_long": "OGOR Yield",
          "updates": "Updates",
          "updates_long": "Latest updates",
        },
        "company": {
          "tagline": "IT for Agricultură",
          "description": "Founded in 2019, our company specializes in processing satellite data for agriculture. We collaborate with farmers, agronomists, and researchers to provide accessible remote crop monitoring and precision agriculture solutions.",
          "address": "67 Gheorghe Missail Street, 011542 Sector 1, BUCHAREST, ROMANIA",
        },
        "legal": {
          "title": "Legal",
          "history": "Previous versions",
          "terms": "Terms and conditions",
          "privacy": "Privacy policy",
          "cookie": "Cookie policy",
        },
        "meta": {
          "title": "Digital suite for decisive agriculture",
          "description": "Confidence in agronomic decisions from up-to-date data on vegetation, weather and soil."
        },
        "home": {
          "hero_heading": "The farming software suite for confident decision‑making",
          "hero_description": "A level of <strong>confidence in agronomic decisions</strong> that can only come from up-to-date data on <strong>vegetation, weather, and soil.</strong>",
          "hero_cta": "Try it today",
          "why_ogor": "Why OGOR?",
          "feature1_heading": "Active crop monitoring",
          "feature1_description": "See vegetation before doing field inspections! With an aerial view of the farm, you can identify areas where crop growth is affected early.",
          "feature2_heading": "Early agronomic interventions",
          "feature2_description": "By looking at the farm from above, you can identify areas where crop growth is affected early, and dividing into management zones helps reduce costs through precise interventions.",
          "feature3_heading": "Yield forecast 2 months before harvest",
          "feature3_description": "By applying proprietary machine learning algorithms, OGOR provides the yield forecasts for maize, sunflower, wheat, barley, and rapeseed 2 months before harvest. The forecast is then updated every 2 weeks until harvest.",
          "feature4_heading": "Collaborative agronomic journal",
          "feature4_description": "Whether you have multiple people on the farm using OGOR or you consult external advisors, add photos and notes on the map to always know what happened on the plot and what work was done.",
          "context": "In an increasingly challenging context in terms of climate, market, and agricultural policies, <strong>OGOR</strong> supports farmers with affordable solutions based on satellite imagery.",
          "testimonials_heading": "What do OGOR customers say?",
          "testimonials_description": "We constantly stay in touch with our customers to develop the best solutions for them. Here's what they had to say when we asked: <q><strong>How has OGOR helped you so far?</strong></q>",
          "got_questions": "Got questions?",
          "here_to_help": "We are here to help you. We are available by phone or email from Monday to Friday between 9:00 AM and 5:00 PM.",
          "cta": "Create an <strong>OGOR</strong> account",
          "cta_assurance1": "It takes 3 minutes to upload your lands using the APIA account",
          "cta_assurance2": "Works with existing equipment and requires no specialized training",
          "cta_assurance3": "Technical and agronomic support throughout the agricultural season",
          "with_the_support_of": "With the support of",
          "partners": "Partners"
        },
        "yield_title": "{{crops}} production",
        "yield": {
          "ogorForecast": "OGOR Forecast",
          "usingAlgorithms": "By applying proprietary machine learning algorithms on satellite images and pedoclimatic data, <strong>OGOR</strong> produces productivity forecasts for 5 of the most important crops: <strong>wheat, barley, corn, sunflower, and rapeseed.</strong>",
          "forecastIsSent": "The forecast is issued <strong>2 months before harvest</strong> and is updated every 2 weeks.",
          "aboutForecast": "The OGOR forecast is available as 3 distinct products:",
          "nationalMapAndStatistics": "<strong>National map and statistics,</strong> published for free on ogor.ro/productivity.",
          "lastForecast": "Last forecast",
          "history": "OGOR forecast history",
          "localityMapAndStatistics": "<strong>County and locality-level map and statistics,</strong> provided under a contract.",
          "yieldMap": "Yield map",
          "cropMap": "Detected crops map",
          "statisticsTable": "Statistics table for each crop:",
          "countyYield": "Maximum, average, and minimum yield at the county level",
          "localityCultivatedArea": "Cultivated area in each locality",
          "salesContact": "Sales contact →",
          "parcelStatistics": "<strong>Farm-level statistics and parcel-level forecast,</strong> accessible as an option with the OGOR subscription.",
          "subscriptionOptions": "OGOR subscription options"
        },
        "yield_forecast": {
          "ogorForecastFrom": "OGOR Forecast from {{date}}",
          "ogorForecastProject": "<strong>OGOR Yield</strong> is a research project conducted by Field Data Zoom SRL (OGOR), with the support of the <em>European Space Agency (ESA)</em> and the <em>Romanian Space Agency (ROSA)</em>. Ground-validated data is provided by the <em>Agency for Payments and Intervention in Agriculture (APIA)</em> and weather data is provided by <em>OpenWeather</em>.",
          "regarding": "regarding",
          "byApplyingML": "by applying proprietary machine learning algorithms on satellite observations on meteorological data",
          "averageYield": "Average Yield",
          "harvestedSurface": "Harvested Surface",
          "downloadMap": "Download Map",
          "lastForecast": "Latest forecast ({{date}})",
          "history": "OGOR Forecast History",
          "aboutTheProject": "About the Project",
          "nextForecast": "Next forecast available on <em>{{date}}</em>.",
          "contactOgorTeam": "For county and locality-level maps and statistics, <strong>contact the OGOR sales team →</strong>"
        },
        "ogor_description_product": "<strong>The OGOR platform</strong> processes satellite data across the entire surface of Romania every week to produce vegetation maps for 300+ farmers.",
        "ogor_yield_description_product": "By applying proprietary machine learning algorithms on satellite images and pedoclimatic data, <strong>OGOR</strong> produces productivity forecasts 2 months before harvest.",
        "ogor_vra_description_product": "Create <strong>VRA maps in 10 minutes</strong> or less. VRA — <em>Variable Rate Application</em> — allows adjusting treatment quantities by zones to optimize amendment costs for the plot.",
        "tarla_description_product": "<strong>Tarla</strong> was created to centralize land data in a single application, with the ability to see all lands on the same map and locate them on-site."
      },
      "urls": {
        "company": "company",
        "updates": "updates",
        "yield": "yield",
        "forecast": "forecast",
        "#history": "#history",
        "#products": "#products",
        "#generaltos_terms": "#terms",
        "#privacy_terms": "#privacy",
        "#cookie_terms": "#cookie",
      },
      "alt": {
        "kv_main": "Farmer in the field",
        "kv_devices": "OGOR on different devices",
        "screenshot_farm_view": "Screencapture from OGOR app with farm overview",
        "flooding": "Area affected by flooding as seen on NDVI maps",
        "pests": "Note with photo that identifies pests",
        "forecast_country": "Map of OGOR forecast from {{ date }} regarding yield at national level",
      },
      "crops": {
        "101": "Wheat",
        "105": "Barley",
        "108": "Maize",
        "201": "Sunflower",
        "202": "Rapeseed",
      }
    },
    fr: {
      "common": {
        "and": "et",
      },
      "translation": {
        "company": {
          "address": "Rue Gheorghe Missail 67, 011542 Secteur 1, Bucarest, Roumanie"
        }
      },
      "urls": {
        "company": "entreprise",
        "updates": "nouveautes", // nouveautés
        "yield": "rendement",
        "forecast": "prevision",
        "#history": "#historique"
      },
      "crops": {
        "101": "Blé",
        "105": "Orge",
        "108": "Maïs", 
        "201": "Tournesol",
        "202": "Colza",
      }
    }
  }
})

i18next.services.formatter?.add('ha', (value, lng) => {
  value = value.toLocaleString(lng, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }) + ' ha'
  return value
})

type GetLocalizedPathsItem = GetStaticPathsItem & {
  props: {
    key: string;
  }
}

type GetLocalizedPathCallback<T extends GetLocalizedPathsItem = GetLocalizedPathsItem> = (item: T, locale: Locale) => T;

/**
 * @todo make it work with interpolated params...
 */
export function getUrl(locale: string = defaultLocale, key: string, hash?: string) {
  const params = key.split("/")

  let url = params.map(param => t(param, { lng: locale, ns: "urls" })).join("/")

  if (url[0] !== "/") {
    url = "/" + url
  }
  if (prefixDefaultLocale || locale !== defaultLocale) {
    url = "/" + locale + url
  }
  if (hash) {
    url += t(hash, { lng: locale, ns: "urls" })
  }

  return url
}

/**
 * @todo I would like to infer type, but I need to be able to extend GetStaticPathsItem first
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
  const params = key && key !== "/" ? key.split("/") : []
  const paths: GetStaticPathsResult = []

  for (let lang of locales) {
    if (!prefixDefaultLocale && lang === defaultLocale) {
      // @ts-ignore
      lang = undefined
    }
    const entries = params.map(param => [param, t(param, { lng: lang, ns: "urls" })])
    entries.push(["lang", lang as string])

    const path = {
      params: Object.fromEntries(entries),
      props: { key }
    }

    cb?.call(null, path as T, lang || defaultLocale)
    paths.push(path)
  }

  return paths
}

/**
 * @example
 * ```astro
 * ---
 * const { t } = useI18n(Astro.currentLocale)
 * ---
 * { t("your_translation_key") }
 * ```
 */
export function useI18n(lang: string = defaultLocale) {
  return {
    t: function(key: string | number, options?: TOptions) {
      // @ts-ignore - key works just fine with number
      return t(key, { lng: lang, ...options })
    }
  }
}
