import { SecondaryHero } from '@/components/Hero';
import { H2, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Wrapper } from '@/components/Wrapper';
import { CopyLinkButton } from '@/components/CopyLinkButton';
import { ImagePair } from '@/components/ImagePair';
import { getLocaleFromLang, LOCALES } from '@/lib/types';
import { asksTranslations } from './translations';

interface AsksPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export default async function AsksPage({ params }: AsksPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

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
            <div className="max-w-3xl w-full space-y-12 md:space-y-24 mb-16">

              <Card>
                <H2 className="mb-12 text-center">{asksTranslations.pageTitle[locale]}</H2>
                <ul className="space-y-8">
                  {asksTranslations.items[locale].map((item, index) => (
                    <li key={index} className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-[#1e3a5f] flex items-center justify-center font-semibold text-sm text-[#1e3a5f]">
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
              <P className="mt-12 mb-6 text-center italic">
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
          <HowCanYouHelp locale={locale} />
        </Wrapper>
      </Section>
      <CopyLinkButton />
    </div>
  );
}

