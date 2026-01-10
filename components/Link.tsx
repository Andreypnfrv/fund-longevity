'use client';

import NextLink from 'next/link';
import React, { type ReactNode } from 'react';
import type { Locale } from '@/lib/types';
import { getLocalizedPath, getPath, type PathKey } from '@/lib/paths';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string | PathKey;
  locale: Locale;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Link({ href, locale, children, className, style }: LinkProps): React.ReactElement {
  const localizedHref =
    typeof href === 'string' ? getLocalizedPath(href, locale) : getPath(href, locale);

  return (
    <NextLink href={localizedHref} className={cn(className)} style={style}>
      {children}
    </NextLink>
  );
}

