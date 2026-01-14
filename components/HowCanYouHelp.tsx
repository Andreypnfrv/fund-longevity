import React from 'react';
import { H2, H3 } from './Typography';
import { Button } from './Button';
import { Link } from './Link';
import { Wrapper } from './Wrapper';
import { DiscordCommunity } from './DiscordCommunity';
import { Locale } from '@/lib/types';
import { Size } from '@/lib/theme';
import { Card } from './Card';

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
    <Card className='text-center border border-black rounded-xl'>
      <div className="flex flex-col gap-6 py-16">
        <H2 display>{title}</H2>
        <H3 className="font-normal">{description}</H3>
        <div className="flex justify-center gap-4 flex-wrap">
          <DiscordCommunity label={joinDiscordLabel} variant="button" size={Size.XL} />
          <Link href="/join" locale={locale} className="no-underline">
            <Button size={Size.XL} rightIcon="lucide:chevron-right">{getInvolvedLabel}</Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
