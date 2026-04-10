export enum SubmitIntent {
  Send = 'send',
  Subscribe = 'subscribe',
  SubscribeToEmail = 'subscribeToEmail',
}

export enum SubmitStatus {
  Idle = 'idle',
  Success = 'success',
  Error = 'error',
}

export enum Locale {
  EN = 'en',
  SV = 'sv',
  DE = 'de',
  FR = 'fr',
  ES = 'es',
  IT = 'it',
  NL = 'nl',
  CS = 'cs',
}

export const LOCALES: Locale[] = [Locale.EN, Locale.SV, Locale.DE, Locale.FR, Locale.ES, Locale.IT, Locale.NL, Locale.CS];

export function getLocaleFromLang(lang: string): Locale {
  const l = lang?.toLowerCase();
  if (Object.values(Locale).includes(l as Locale)) return l as Locale;
  return Locale.EN;
}

export type Translation = Partial<Record<Locale, string>> & { [Locale.EN]: string };

export type TranslationKey = string;

export type Translations<T extends Record<string, Translation>> = T;


