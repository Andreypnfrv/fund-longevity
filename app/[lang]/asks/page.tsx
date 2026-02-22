import { SecondaryHero } from '@/components/Hero';
import { H2, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Wrapper } from '@/components/Wrapper';
import { CopyLinkButton } from '@/components/CopyLinkButton';
import { ImagePair } from '@/components/ImagePair';
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
      <SecondaryHero 
        title={asksTranslations.hero.title[locale]} 
        subtitle={asksTranslations.hero.subtitle[locale]}
        backgroundImage="/NASDAQ.jpg" 
        height="80vh"
        backgroundPosition="top right"
      />

      <Section>
        <div className="pt-16 md:pt-20">
          <Wrapper>
            <div className="flex justify-center">
            <div className="max-w-3xl w-full space-y-8 md:space-y-20">

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
        </div>
      </Section>

      <Section>
        <Wrapper>
          <ImagePair 
            image1="/Politics1.png" 
            image2="/Politics2.png"
            alt1="Politics 1"
            alt2="Politics 2"
          />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <HowCanYouHelp
            locale={locale}
            title={howCanYouHelp('title')}
            description={howCanYouHelp('description')}
            joinDiscordLabel={buttons('joinDiscord')}
            getInvolvedLabel={buttons('getInvolved')}
          />
        </Wrapper>
      </Section>
      <CopyLinkButton />
    </div>
  );
}

