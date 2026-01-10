import { Locale, type Translation } from './types';

export function translate<T extends Record<string, Translation>>(
  translations: T,
  locale: Locale,
  key: keyof T
): string {
  const translation = translations[key];
  if (!translation) {
    console.warn(`Translation missing for key: ${String(key)}`);
    return String(key);
  }
  return translation[locale] ?? translation[Locale.EN] ?? String(key);
}

export function getTranslation<T extends Record<string, Translation>>(
  translations: T,
  locale: Locale
): (key: keyof T) => string {
  return (key: keyof T) => translate(translations, locale, key);
}


