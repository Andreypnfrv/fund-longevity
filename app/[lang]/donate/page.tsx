import type { Metadata } from 'next';
import { H1, P } from '@/components/Typography';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { CopyTextButton } from '@/components/CopyLinkButton';
import { buildLocalizedPageMetadata, defaultOgImage } from '@/lib/config';
import { getLocaleFromLang, LOCALES, Locale } from '@/lib/types';
import { donateTranslations } from './translations';

const SAFE_ADDRESS = '0x38dd24b0542FDAaCF9b379fA446d70661826610c';

interface DonatePageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: DonatePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const title = donateTranslations.hero.title[locale];
  const description = donateTranslations.seoDescription[locale] ?? donateTranslations.seoDescription[Locale.EN];
  return buildLocalizedPageMetadata({
    lang,
    title,
    description,
    path: `/${lang}/donate`,
    ogImage: defaultOgImage,
  });
}

export default async function DonatePage({ params }: DonatePageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  return (
    <div className="flex flex-col gap-8 md:gap-18">
      <Section style={{ paddingTop: '30px', paddingBottom: 'clamp(7rem, 14vw, 11rem)' }}>
        <Wrapper>
          <H1 display className="mb-20 md:mb-28 text-[#0900FF] whitespace-pre-line">
            {donateTranslations.hero.title[locale]}
          </H1>
          <div className="max-w-3xl flex flex-col gap-6">
            <P className="text-lg md:text-xl text-black/90">{donateTranslations.p1[locale]}</P>
            <P className="text-lg md:text-xl text-black/90">{donateTranslations.p2[locale]}</P>
          </div>
          <div className="mt-20 md:mt-28 max-w-2xl rounded-lg border border-gray-200 bg-gray-50 px-8 py-12 md:px-12 md:py-14 flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#1e3a5f]">
                {donateTranslations.fundTitle[locale]}
              </p>
              <p className="text-base md:text-lg text-gray-800 leading-relaxed">{donateTranslations.networks[locale]}</p>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{donateTranslations.tokenRecommendation[locale]}</p>
            </div>
            <p className="font-mono text-sm md:text-base break-all text-gray-900">{SAFE_ADDRESS}</p>
            <CopyTextButton
              textToCopy={SAFE_ADDRESS}
              idleLabel={donateTranslations.copy[locale]}
              copiedLabel={donateTranslations.copied[locale]}
              className="inline-flex items-center justify-center self-start rounded-md bg-[#0900FF] text-white px-5 py-3.5 text-sm font-semibold hover:bg-[#0900FF]/90 transition-colors"
            />
          </div>
        </Wrapper>
      </Section>
    </div>
  );
}
