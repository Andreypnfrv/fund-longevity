import { SecondaryHero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { FormSection } from '@/components/FormSection';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { demonstrationsTranslations } from './translations';

interface DemonstrationsPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
}

export default async function DemonstrationsPage({ params }: DemonstrationsPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  const sidebarItems = [
    { id: 'overview', label: 'Overview', href: '/demonstrations#overview' },
    { id: 'nextDemo', label: demonstrationsTranslations.nextDemo[locale], href: '/demonstrations#nextDemo' },
    { id: 'behavior', label: demonstrationsTranslations.behavior[locale], href: '/demonstrations#behavior' },
    { id: 'signs', label: demonstrationsTranslations.signs[locale], href: '/demonstrations#signs' },
    { id: 'discord', label: 'Discord Community', href: '/demonstrations#discord' },
  ];

  return (
    <div>
      <SecondaryHero
        title={demonstrationsTranslations.hero.title[locale]}
      />

      <Section className="flex flex-row justify-center">
        <Wrapper>
          <div className="flex gap-8">
            <Sidebar locale={locale} items={sidebarItems} />

            <div className="flex-1 space-y-12">
              <section id="overview">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <P>{demonstrationsTranslations.simple[locale]}</P>
                      <P>{demonstrationsTranslations.localLead[locale]}</P>
                      <P>{demonstrationsTranslations.liveStream[locale]}</P>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="nextDemo">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H2>{demonstrationsTranslations.nextDemo[locale]}</H2>
                      <P>{demonstrationsTranslations.hero.title[locale]}</P>
                    </div>
                    <div className="flex-1">
                      <FormSection
                        locale={locale}
                        listId={process.env['NEXT_PUBLIC_MAILCHIMP_LIST_ID_DEMONSTRATIONS'] || ''}
                        fields={{ firstName: true, city: true, email: true, phone: true }}
                        checkboxes={{ joinOffline: true, joinOnline: true, canTakePart: true }}
                        noCard={true}
                      />
                    </div>
                  </div>
                </Card>
              </section>

              <section id="behavior">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H3>{demonstrationsTranslations.behavior[locale]}</H3>
                      <P>Guidelines for demonstration behavior...</P>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="signs">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H3>{demonstrationsTranslations.signs[locale]}</H3>
                      <P>Sign gallery with screenshots and PDF downloads...</P>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="discord">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <a
                        href="https://discord.gg/fundlongevity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <DiscordIcon />
                        <span>Join Discord Community</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </section>
            </div>
          </div>
        </Wrapper>
      </Section>
    </div>
  );
}

