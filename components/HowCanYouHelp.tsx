import React from 'react';
import { H3 } from './Typography';
import { Link } from './Link';
import { DiscordCommunity } from './DiscordCommunity';
import { Locale } from '@/lib/types';
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
      <div className="flex flex-col gap-8 py-8 md:py-16">
        <div className="text-center">
          <div className="inline-block">
            <div className="flex flex-col items-start gap-1 md:gap-2">
              <div className="flex flex-row items-baseline gap-2 md:gap-4 flex-wrap">
                <div className="text-5xl md:text-7xl lg:text-8xl font-black leading-none" style={{
                  background: 'linear-gradient(135deg, #000 0%, #333 50%, #000 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  letterSpacing: '-0.02em',
                }}>
                  {title.toUpperCase()}
                </div>
              </div>
            </div>
          </div>
        </div>
        <H3 className="font-normal text-xl md:text-2xl">{description}</H3>
        <div className="flex justify-center gap-4 flex-wrap pt-4">
          <DiscordCommunity label={joinDiscordLabel} variant="button" />
          <Link href="/join" locale={locale} className="no-underline">
            <div className="inline-block text-white rounded-lg font-semibold px-8 py-4 text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: 'rgb(37, 99, 235)', boxShadow: '0 4px 6px rgba(37, 99, 235, 0.3)' }}>
              {getInvolvedLabel}
            </div>
          </Link>
        </div>
      </div>
    </Card>
  );
}
