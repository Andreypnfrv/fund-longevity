import type { Metadata } from 'next';
import { GenerationsHero } from '@/components/GenerationsHero';
import { Sidebar } from '@/components/Sidebar';
import { H1, H2, H3, H4, P } from '@/components/Typography';
import { Content } from '@/components/Content';
import { Section, TextSection } from '@/components/Section';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { buildLocalizedPageMetadata } from '@/lib/config';
import { getLocaleFromLang, LOCALES, Locale } from '@/lib/types';
import { globalTranslations } from '@/lib/translations';
import { whyTranslations } from './translations';
import { getTranslation } from '@/lib/translate';
import { Wrapper } from '@/components/Wrapper';

interface WhyPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: WhyPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const title = globalTranslations.nav.why[locale];
  const description =
    whyTranslations.seoDescription[locale] ?? whyTranslations.seoDescription[Locale.EN];
  return buildLocalizedPageMetadata({
    lang,
    title,
    description,
    path: `/${lang}/why`,
    ogImage: '/why-say-forever.jpg',
  });
}

export default async function WhyPage({ params }: WhyPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  const problemTranslate = getTranslation(whyTranslations.sections.problem, locale);
  const personalTranslate = getTranslation(whyTranslations.sections.personal, locale);
  const possibleTranslate = getTranslation(whyTranslations.sections.possible, locale);
  const meaningTranslate = getTranslation(whyTranslations.sections.meaning, locale);
  const realisticTranslate = getTranslation(whyTranslations.sections.realistic, locale);
  const hardTranslate = getTranslation(whyTranslations.sections.hard, locale);
  const missingTranslate = getTranslation(whyTranslations.sections.missing, locale);
  const whyWeActTranslate = getTranslation(whyTranslations.sections.whyWeAct, locale);
  const sidebarItems = [
    { id: 'problem', label: problemTranslate('title'), href: '/why#problem' },
    { id: 'personal', label: personalTranslate('title'), href: '/why#personal' },
    { id: 'possible', label: possibleTranslate('title'), href: '/why#possible' },
    { id: 'meaning', label: meaningTranslate('title'), href: '/why#meaning' },
    { id: 'realistic', label: realisticTranslate('title'), href: '/why#realistic' },
    { id: 'hard', label: hardTranslate('title'), href: '/why#hard' },
    { id: 'missing', label: missingTranslate('title'), href: '/why#missing' },
    { id: 'whyWeAct', label: whyWeActTranslate('title'), href: '/why#whyWeAct' },
  ];

  return (
    <div className='flex flex-col gap-8 md:gap-18'>
      
      <Section style={{ paddingTop: '15px' }}>
        <Wrapper>
          <div>
            <H1 display className="mb-4 text-[#0900FF] whitespace-pre-line">{whyTranslations.hero.title[locale]}</H1>
          </div>
        </Wrapper>
      </Section>
      <GenerationsHero images={['/why-say-forever.jpg']} />

      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16">
          <Sidebar locale={locale} items={sidebarItems} />
          <Content>
              
              <TextSection id="problem" className="pt-8 pb-12">
                <H2>{problemTranslate('title')}</H2>
                <H3 className="text-lg md:text-xl lg:text-2xl">
                  {problemTranslate('content')}
                </H3>
              </TextSection>

              <TextSection id="personal">
                <H4>{personalTranslate('title')}</H4>
                <P>{personalTranslate('content')}</P>
              </TextSection>

              <TextSection id="possible">
                <H4>{possibleTranslate('title')}</H4>
                <P>{possibleTranslate('content')}</P>
              </TextSection>

              <TextSection id="meaning">
                <H4>{meaningTranslate('title')}</H4>
                <P>{meaningTranslate('content')}</P>
              </TextSection>

              <TextSection id="realistic">
                <H4>{realisticTranslate('title')}</H4>
                <P>{realisticTranslate('content')}</P>
              </TextSection>

              <TextSection id="hard">
                <H4>{hardTranslate('title')}</H4>
                <P>{hardTranslate('content')}</P>
              </TextSection>

              <TextSection id="missing">
                <H4>{missingTranslate('title')}</H4>
                <P>{missingTranslate('content')}</P>
              </TextSection>

              <TextSection id="whyWeAct">
                <H4>{whyWeActTranslate('title')}</H4>
                <P>{whyWeActTranslate('content')}</P>
              </TextSection>

          </Content>
        </div>
      </Wrapper>

    <Section>
        <Wrapper>
          <HowCanYouHelp locale={locale} />
        </Wrapper>
    </Section>
    </div>
  );
}

