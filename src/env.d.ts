/// <reference path="../.astro/types.d.ts" />
/// <reference types="i18next" />
/// <reference types="astro/client" />

import type { Locale } from "@/i18n";
import type { TFunction } from "i18next";

interface ImportMetaEnv {
  /** Where is OGOR App located */
  readonly PUBLIC_OGOR_APP_HOST: string;
  
  readonly PUBLIC_OGOR_APP_LOGIN_URL: string;
  readonly PUBLIC_OGOR_APP_SIGNUP_URL: string;
  
  readonly PUBLIC_BE_HOST: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}


/**
 * @todo see if these definitions can live next to the code.
 * /// <reference types="./middleware.ts" />
 * /// <reference path="./middleware.ts" />
 */
declare global {
  namespace App {
    interface Locals {
      lang: Locale,

      /** Displayed title */
      title: string;
      og_image?: string;
      description: "string";

      /** Get localized URLs based on current locale */
      getUrl: (key: string, hash?: string) => string;

      backUrl: string | undefined;

      /** The abstract (non-localized) path of the route. */
      key: string;
    }
  }
}
