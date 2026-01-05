export enum Locale {
  EN = 'en',
  SV = 'sv',
}

export type Translation = Record<Locale, string>;

export type TranslationKey = string;

export type Translations<T extends Record<string, Translation>> = T;

