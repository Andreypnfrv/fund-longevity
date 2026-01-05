'use client';

import React from 'react';

import type { Locale } from '@/lib/types';
import { Logo } from './Logo';
import { Link } from './Link';
import { LanguageDropdown } from './LanguageDropdown';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.nav, locale);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo locale={locale} />
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/why" locale={locale} className="font-inter text-sm hover:text-blue-600 transition-colors">
              {translate('why')}
            </Link>
            <Link href="/demonstrations" locale={locale} className="font-inter text-sm hover:text-blue-600 transition-colors">
              {translate('demonstrations')}
            </Link>
            <Link href="/asks" locale={locale} className="font-inter text-sm hover:text-blue-600 transition-colors">
              {translate('asks')}
            </Link>
            <Link href="/join" locale={locale} className="font-inter text-sm hover:text-blue-600 transition-colors">
              {translate('join')}
            </Link>
            <Link href="/about" locale={locale} className="font-inter text-sm hover:text-blue-600 transition-colors">
              {translate('about')}
            </Link>
            <Link href="/faq" locale={locale} className="font-inter text-sm hover:text-blue-600 transition-colors">
              {translate('faq')}
            </Link>
          </nav>

          <LanguageDropdown currentLocale={locale} />
        </div>
      </div>
    </header>
  );
}

