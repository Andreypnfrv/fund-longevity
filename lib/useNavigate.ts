'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useMemo } from 'react';
import type { Locale } from './types';
import { getPath, type PathKey } from './paths';

export function useNavigate(locale: Locale): {
  navigate: (path: string | PathKey) => void;
} {
  const router = useRouter();
  const pathname = usePathname();

  const navigate = useMemo(() => {
    return (path: string | PathKey): void => {
      if (typeof path === 'string') {
        if (path.startsWith('/')) {
          router.push(`/${locale}${path}`);
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

