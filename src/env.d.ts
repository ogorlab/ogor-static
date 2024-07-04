/// <reference path="../.astro/types.d.ts" />
/// <reference types="i18next" />
/// <reference types="astro/client" />
/// <reference path="./middleware.ts" />

interface ImportMetaEnv {
  /** Where is OGOR App located */
  readonly PUBLIC_OGOR_APP_HOST: string;
  
  readonly PUBLIC_OGOR_APP_LOGIN_URL: string;
  readonly PUBLIC_OGOR_APP_SIGNUP_URL: string;
  
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace App {
  interface Locals {
    /** @todo reference definitions from middleware */
    name: string;

    /** Displayed title */
    title: string;

    /** Links to translated versions of the page */
    localizedUrls: LocalizedUrls
  }
}
