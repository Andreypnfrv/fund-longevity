'use client';

import React from 'react';

import type { Locale } from '@/lib/types';
import { Link } from './Link';
import { Wrapper } from './Wrapper';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { DiscordIcon } from '@/lib/icons';
import { P } from './Typography';
import { Logo } from './Logo';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps): React.ReactElement {
  const nav = useTranslations(globalTranslations.nav, locale);
  const footer = useTranslations(globalTranslations.footer, locale);

  return (
    <footer className="w-full flex flex-col items-center justify-center bg-gray-50 border-t border-gray-200 py-40">
      <Wrapper>
        <div className="flex flex-row w-full justify-between">
          <div>
            <Logo />
            <P className="mb-4 text-gray-700">{footer.translate('summary')}</P>
            <a
              href={process.env['DISCORD_URL'] ?? ''}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <DiscordIcon />
              <span className=" text-base">{footer.translate('discord')}</span>
            </a>
          </div>

          <nav className="flex flex-col gap-2">
            <Link href="/why" locale={locale} className=" text-base text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('why')}
            </Link>
            <Link href="/demonstrations" locale={locale} className=" text-base text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('demonstrations')}
            </Link>
            <Link href="/asks" locale={locale} className=" text-base text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('asks')}
            </Link>
            <Link href="/join" locale={locale} className=" text-base text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('join')}
            </Link>
            <Link href="/about" locale={locale} className=" text-base text-gray-700 hover:text-blue-600 transition-colors">
              {nav.translate('about')}
            </Link>
          </nav>
        </div>
      </Wrapper>
      <Wrapper>
        <div className='w-full text-center'>
          <P className="text-base text-gray-500">
            {footer.translate('copyright')}
          </P>
        </div>
      </Wrapper>
    </footer>
  );
}

