'use client';

import NextLink from 'next/link';
import React, { type ReactNode } from 'react';
import type { Locale } from '@/lib/types';
import { getLocalizedPath, type PathKey } from '@/lib/paths';

interface LinkProps {
  href: string | PathKey;
  locale: Locale;
  children: ReactNode;
  className?: string;
}

export function Link({ href, locale, children, className }: LinkProps): React.ReactElement {
  const localizedHref =
    typeof href === 'string' ? getLocalizedPath(href, locale) : getLocalizedPath(href, locale);

  return (
    <NextLink href={localizedHref} className={className}>
      {children}
    </NextLink>
  );
}

