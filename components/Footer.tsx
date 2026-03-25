'use client';

import React from 'react';

import type { Locale } from '@/lib/types';
import { Link } from './Link';
import { Wrapper } from './Wrapper';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { homeTranslations } from '@/app/[lang]/translations';
import { DiscordIcon } from '@/lib/icons';
import { P } from './Typography';
import { Logo } from './Logo';
import { discordUrl } from '@/lib/config';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps): React.ReactElement {
  const nav = useTranslations(globalTranslations.nav, locale);
  const footer = useTranslations(globalTranslations.footer, locale);

  return (
    <footer className="w-full flex flex-col items-center justify-center bg-gray-50 border-t border-gray-200 pt-8 md:pt-16 gap-8 md:gap-16">
      <Wrapper>
        <div className="flex flex-col md:flex-row w-full justify-between gap-8 md:gap-0">
          <div>
            <Logo title={homeTranslations.hero.title[locale]} />
            <P className="mb-4 text-gray-700">{footer.translate('summary')}</P>
            <a
              href={discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#0900FF] hover:text-[#0900FF]/80 transition-colors"
            >
              <DiscordIcon />
              <span className=" text-base">{footer.translate('discord')}</span>
            </a>
          </div>

          <nav className="flex flex-col gap-2">
            <Link href="/why" locale={locale} className=" text-base text-gray-700 hover:text-[#0900FF] transition-colors">
              {nav.translate('why')}
            </Link>
            <Link href="/asks" locale={locale} className=" text-base text-gray-700 hover:text-[#0900FF] transition-colors">
              {nav.translate('asks')}
            </Link>
            <Link href="/about" locale={locale} className=" text-base text-gray-700 hover:text-[#0900FF] transition-colors">
              {nav.translate('about')}
            </Link>
          </nav>
        </div>
      </Wrapper>
    </footer>
  );
}

