import { SecondaryHero } from '@/components/Hero';
import { H2, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Wrapper } from '@/components/Wrapper';
import { Locale } from '@/lib/types';
import { asksTranslations } from './translations';
import { homeTranslations } from '../translations';
import { getTranslation } from '@/lib/translate';

interface AsksPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
}

export default async function AsksPage({ params }: AsksPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  const buttons = getTranslation(homeTranslations.buttons, locale);
  const howCanYouHelp = getTranslation(homeTranslations.howCanYouHelp, locale);

  return (
    <div>
      <SecondaryHero title={asksTranslations.hero.title[locale]} />

      <Section>
        <Wrapper>
          <div className="flex justify-center">
            <div className="max-w-3xl w-full space-y-20">

              <Card>
                <H2 className="mb-8 text-center">{asksTranslations.pageTitle[locale]}</H2>
                <ul className="space-y-4">
                  {asksTranslations.items[locale].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-blue-600 flex items-center justify-center font-semibold text-sm text-blue-600">
                        {index + 1}
                      </div>
                      <P className="flex-1 pt-1">
                        {item.parts.map((part, partIndex) => 
                          part.bold ? <strong key={partIndex}>{part.text}</strong> : <span key={partIndex}>{part.text}</span>
                        )}
                      </P>
                    </li>
                  ))}
                </ul>
              </Card>

              <P className="mb-6 text-center ">
                {asksTranslations.intro[locale]}
              </P>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <HowCanYouHelp
          locale={locale}
          title={howCanYouHelp('title')}
          description={howCanYouHelp('description')}
          joinDiscordLabel={buttons('joinDiscord')}
          getInvolvedLabel={buttons('getInvolved')}
        />
      </Section>
    </div>
  );
}

