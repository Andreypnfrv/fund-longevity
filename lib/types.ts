export enum Locale {
  EN = 'en',
  SV = 'sv',
  DE = 'de',
  FR = 'fr',
  ES = 'es',
  IT = 'it',
  NL = 'nl',
}

export const LOCALES: Locale[] = [Locale.EN, Locale.SV, Locale.DE, Locale.FR, Locale.ES, Locale.IT, Locale.NL];

export function getLocaleFromLang(lang: string): Locale {
  const l = lang?.toLowerCase();
  if (Object.values(Locale).includes(l as Locale)) return l as Locale;
  return Locale.EN;
}

export type Translation = Partial<Record<Locale, string>> & { [Locale.EN]: string };

export type TranslationKey = string;

export type Translations<T extends Record<string, Translation>> = T;


