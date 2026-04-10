'use client';

import React from 'react';
import { H3 } from './Typography';
import { DiscordCommunity } from './DiscordCommunity';
import { FormSection } from './FormSection';
import { Locale, SubmitIntent } from '@/lib/types';
import { Card } from './Card';
import { useTranslations } from '@/lib/useTranslations';
import { homeTranslations } from '@/app/[lang]/translations';
import { mailchimpConfig } from '@/lib/config';

interface HowCanYouHelpProps {
  locale: Locale;
}

export function HowCanYouHelp({ locale }: HowCanYouHelpProps): React.ReactElement {
  const { translate: t } = useTranslations(homeTranslations.howCanYouHelp, locale);
  const { translate: buttons } = useTranslations(homeTranslations.buttons, locale);

  const title = t('title');
  const description = t('description');

  return (
    <Card className='text-center border border-black rounded-xl'>
      <div className="flex flex-col gap-8">
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
        <div className="w-full max-w-4xl self-center pt-2">
          <FormSection
            locale={locale}
            noCard
            inline
            inlineEnd={<DiscordCommunity label={buttons('joinDiscord')} variant="button" />}
            listId={mailchimpConfig.listIds.partners}
            mailchimpFormId={mailchimpConfig.formIds.partners}
            fields={{ firstName: false, city: false, phone: false, email: true }}
            formClassName="gap-3 [&_p]:text-center"
            submitIntent={SubmitIntent.SubscribeToEmail}
          />
        </div>
      </div>
    </Card>
  );
}
