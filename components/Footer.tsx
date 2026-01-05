'use client';

import React from 'react';

import type { Locale } from '@/lib/types';
import { Link } from './Link';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { DiscordIcon } from '@/lib/icons';
import { P } from './Typography';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps): React.ReactElement {
  const nav = useTranslations(globalTranslations.nav, locale);
  const footer = useTranslations(globalTranslations.footer, locale);

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <P className="mb-4 text-gray-700">{footer.translate('summary')}</P>
            <a
              href="https://discord.gg/fundlongevity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <DiscordIcon />
              <span className="font-inter text-sm">{footer.translate('discord')}</span>
            </a>
          </div>

          <nav className="flex flex-col gap-2">
            <Link href="/why" locale={locale} className="font-inter text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('why')}
            </Link>
            <Link href="/demonstrations" locale={locale} className="font-inter text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('demonstrations')}
            </Link>
            <Link href="/asks" locale={locale} className="font-inter text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('asks')}
            </Link>
            <Link href="/join" locale={locale} className="font-inter text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('join')}
            </Link>
            <Link href="/about" locale={locale} className="font-inter text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('about')}
            </Link>
            <Link href="/faq" locale={locale} className="font-inter text-sm text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('faq')}
            </Link>
          </nav>

          <div>
            <P className="text-sm text-gray-500">{footer.translate('copyright')}</P>
          </div>
        </div>
      </div>
    </footer>
  );
}

