import { SecondaryHero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H1, H2, H3, H4, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { DemonstrationForm } from '@/components/DemonstrationForm';
import { Section, TextSection } from '@/components/Section';
import { Content } from '@/components/Content';
import { Wrapper } from '@/components/Wrapper';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Locale } from '@/lib/types';
import { demonstrationsTranslations } from './translations';
import { getTranslation } from '@/lib/translate';
import { homeTranslations } from '../translations';
import { mailchimpConfig } from '@/lib/config';

interface DemonstrationsPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
}

export default async function DemonstrationsPage({ params }: DemonstrationsPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  const overviewTranslate = getTranslation(demonstrationsTranslations.sections.overview, locale);
  const behaviorTranslate = getTranslation(demonstrationsTranslations.sections.behavior, locale);
  const signsTranslate = getTranslation(demonstrationsTranslations.sections.signs, locale);
  const howCanYouHelp = getTranslation(homeTranslations.howCanYouHelp, locale);
  const buttons = getTranslation(homeTranslations.buttons, locale);

  const sidebarItems = [
    { id: 'overview', label: overviewTranslate('title'), href: '/demonstrations#overview' },
    { id: 'nextDemo', label: demonstrationsTranslations.nextDemo[locale], href: '/demonstrations#nextDemo' },
    { id: 'behavior', label: behaviorTranslate('title'), href: '/demonstrations#behavior' },
    { id: 'signs', label: signsTranslate('title'), href: '/demonstrations#signs' },
  ];

  return (
    <div className='flex flex-col gap-8 md:gap-18'>
      <Section>
        <Wrapper>
          <div className="pt-16 md:pt-20">
            <H1 display className="mb-4 text-black whitespace-pre-line">{demonstrationsTranslations.hero.title[locale]}</H1>
          </div>
        </Wrapper>
      </Section>
      <SecondaryHero 
        title=""
        backgroundImage="/Demonstrations1.jpg"
        height="80vh"
        backgroundPosition="bottom center"
      />

      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16">
          <Sidebar locale={locale} items={sidebarItems} />
          <Content>
            <TextSection id="overview" className="pt-8 pb-12">
              <H2>{overviewTranslate('title')}</H2>
              <H3 className="text-lg md:text-xl lg:text-2xl">
                {overviewTranslate('content')}
              </H3>
            </TextSection>

            <section id="nextDemo">
              <Card>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <H2>{demonstrationsTranslations.nextDemo[locale]}</H2>
                    <P>{demonstrationsTranslations.nextDemoDescription[locale]}</P>
                  </div>
                  <div className="flex-1">
                    <DemonstrationForm
                      locale={locale}
                      listId={mailchimpConfig.listIds.demonstrations}
                      formId={mailchimpConfig.formIds.demonstrations}
                    />
                  </div>
                </div>
              </Card>
            </section>

            <TextSection id="behavior">
              <H4>{behaviorTranslate('title')}</H4>
              <P>{behaviorTranslate('content')}</P>
            </TextSection>

            <TextSection id="signs">
              <H4>{signsTranslate('title')}</H4>
              <P>{signsTranslate('content')}</P>
            </TextSection>

          </Content>
        </div>
      </Wrapper>
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
    </div>
  );
}

