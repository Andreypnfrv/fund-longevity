import React from 'react';
import { H2, H3 } from './Typography';
import { Button } from './Button';
import { Link } from './Link';
import { Wrapper } from './Wrapper';
import { Locale } from '@/lib/types';
import { Size } from '@/lib/theme';

interface HowCanYouHelpProps {
  locale: Locale;
  title: string;
  description: string;
  joinDiscordLabel: string;
  getInvolvedLabel: string;
}

export function HowCanYouHelp({
  locale,
  title,
  description,
  joinDiscordLabel,
  getInvolvedLabel,
}: HowCanYouHelpProps): React.ReactElement {
  return (
    <Wrapper className='text-center border border-black rounded-xl'>
      <div className="flex flex-col gap-12 py-16">
        <H2 display>{title}</H2>
        <H3 className="font-normal">{description}</H3>
        <div className="flex justify-center gap-4 flex-wrap">
          <a href="https://discord.gg/fundlongevity" target="_blank" rel="noopener noreferrer" className="no-underline">
            <Button size={Size.XL} rightIcon="mdi:discord">{joinDiscordLabel}</Button>
          </a>
          <Link href="/join" locale={locale} className="no-underline">
            <Button size={Size.XL} rightIcon="lucide:chevron-right">{getInvolvedLabel}</Button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
