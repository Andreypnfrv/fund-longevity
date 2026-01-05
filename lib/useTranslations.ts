import { useMemo } from 'react';
import { Locale, type Translation } from './types';

export function useTranslations<T extends Record<string, Translation>>(
  translations: T,
  locale: Locale
): {
  translate: (key: keyof T) => string;
} {
  const translate = useMemo(() => {
    return (key: keyof T): string => {
      const translation = translations[key];
      if (!translation) {
        console.warn(`Translation missing for key: ${String(key)}`);
        return String(key);
      }
      return translation[locale] ?? translation[Locale.EN] ?? String(key);
    };
  }, [translations, locale]);

  return { translate };
}

