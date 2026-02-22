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
    return `/${locale}/`;
  }
  
  const hashIndex = path.indexOf('#');
  const hash = hashIndex !== -1 ? path.slice(hashIndex) : '';
  const pathWithoutHash = hashIndex !== -1 ? path.slice(0, hashIndex) : path;
  
  const normalizedPath = pathWithoutHash.endsWith('/') ? pathWithoutHash : `${pathWithoutHash}/`;
  return `/${locale}${normalizedPath}${hash}`;
}

export function getPath(key: PathKey, locale: Locale): string {
  return getLocalizedPath(PATHS[key], locale);
}
