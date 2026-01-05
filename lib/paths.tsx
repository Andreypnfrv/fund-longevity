import type { Locale } from './types';

export const PATHS = {
  HOME: '/',
  WHY: '/why',
  JOIN: '/join',
  DEMONSTRATIONS: '/demonstrations',
  ASKS: '/asks',
  ABOUT: '/about',
} as const;

export type PathKey = keyof typeof PATHS;

export function getLocalizedPath(path: string, locale: Locale): string {
  if (path === '/') {
    return `/${locale}`;
  }
  return `/${locale}${path}`;
}

export function getPath(key: PathKey, locale: Locale): string {
  return getLocalizedPath(PATHS[key], locale);
}

