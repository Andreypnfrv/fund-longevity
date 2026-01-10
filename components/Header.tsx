'use client';

import React from 'react';

import type { Locale } from '@/lib/types';
import { Logo } from './Logo';
import { Link } from './Link';
import { Button } from './Button';
import { LanguageDropdown } from './LanguageDropdown';
import { Wrapper } from './Wrapper';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { Fill, Size } from '@/lib/theme';
import { cn } from '@/lib/utils';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.nav, locale);

  return (
    <header 
      className={cn(
        `sticky top-0 z-40 bg-white border-b border-gray-200 flex flex-row justify-center items-center`,
      )}
      style={{
        height: '64px'
      }}
    >
      <Wrapper className="py-4 h-full">
        <div 
          className={cn(
            "flex flex-row items-center justify-between w-full h-full"
          )}
        >
            <Link href="/" locale={locale}>
              <Logo />
            </Link>
          
          <nav className="hidden md:flex items-center gap-2">
            <Link href="/" locale={locale} className="no-underline">
              <Button fill={Fill.Ghost} size={Size.MD}>{translate('home')}</Button>
            </Link>
            <Link href="/why" locale={locale} className="no-underline">
              <Button fill={Fill.Ghost} size={Size.MD}>{translate('why')}</Button>
            </Link>
            <Link href="/demonstrations" locale={locale} className="no-underline">
              <Button fill={Fill.Ghost} size={Size.MD}>{translate('demonstrations')}</Button>
            </Link>
            <Link href="/asks" locale={locale} className="no-underline">
              <Button fill={Fill.Ghost} size={Size.MD}>{translate('asks')}</Button>
            </Link>
            <Link href="/join" locale={locale} className="no-underline">
              <Button fill={Fill.Ghost} size={Size.MD}>{translate('join')}</Button>
            </Link>
            <Link href="/about" locale={locale} className="no-underline">
              <Button fill={Fill.Ghost} size={Size.MD}>{translate('about')}</Button>
            </Link>
          </nav>

          <LanguageDropdown currentLocale={locale} />
        </div>
      </Wrapper>
    </header>
  );
}

