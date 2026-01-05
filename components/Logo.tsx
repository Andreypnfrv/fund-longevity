import React from 'react';
import type { Locale } from '@/lib/types';
import { H1 } from './Typography';

interface LogoProps {
  locale: Locale;
  className?: string;
}

export function Logo({ locale, className = '' }: LogoProps): React.ReactElement {
  return (
    <H1 className={`text-2xl md:text-3xl ${className}`}>
      Fund Longevity
    </H1>
  );
}

