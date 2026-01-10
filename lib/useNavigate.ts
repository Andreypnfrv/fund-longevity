'use client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import type { Locale } from './types';
import { getPath, getLocalizedPath, type PathKey } from './paths';

export function useNavigate(locale: Locale): {
  navigate: (path: string | PathKey) => void;
} {
  const router = useRouter();

  const navigate = useMemo(() => {
    return (path: string | PathKey): void => {
      if (typeof path === 'string') {
        if (path.startsWith('/')) {
          router.push(getLocalizedPath(path, locale));
        } else {
          router.push(path);
        }
      } else {
        router.push(getPath(path, locale));
      }
    };
  }, [router, locale]);

  return { navigate };
}


