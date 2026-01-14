import { SecondaryHero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { PartnerForm } from '@/components/PartnerForm';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { aboutTranslations } from './translations';
import { mailchimpConfig, discordUrl } from '@/lib/config';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
}

export default async function AboutPage({ params }: AboutPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  const sidebarItems = [
    { id: 'about', label: aboutTranslations.hero.title[locale], href: '/about#about' },
    { id: 'coreTeam', label: aboutTranslations.coreTeam.title[locale], href: '/about#coreTeam' },
    { id: 'advisors', label: aboutTranslations.advisors.title[locale], href: '/about#advisors' },
    { id: 'localLeads', label: aboutTranslations.localLeads.title[locale], href: '/about#localLeads' },
    { id: 'discord', label: 'Discord Community', href: '/about#discord' },
    { id: 'partners', label: aboutTranslations.partners.title[locale], href: '/about#partners' },
  ];

  return (
    <div>
      <SecondaryHero title={aboutTranslations.hero.title[locale]} />

      <Section className="flex flex-row justify-center">
        <Wrapper>
          <div className="flex gap-8">
            <Sidebar locale={locale} items={sidebarItems} />

            <div className="flex-1 space-y-12">
              <section id="about">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <P>{aboutTranslations.about[locale]}</P>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="coreTeam">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H2>{aboutTranslations.coreTeam.title[locale]}</H2>
                      <ul className="space-y-2">
                        <li>
                          <P>Andrei Panferov</P>
                        </li>
                        <li>
                          <P>Linus Petersson</P>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="advisors">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H2>{aboutTranslations.advisors.title[locale]}</H2>
                      <P>Advisors section...</P>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="localLeads">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H2>{aboutTranslations.localLeads.title[locale]}</H2>
                      <ul className="space-y-2">
                        <li>
                          <P>Stockholm</P>
                        </li>
                        <li>
                          <P>Berlin</P>
                        </li>
                        <li>
                          <P>Paris</P>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="discord">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <a
                        href={discordUrl}
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

              <section id="partners">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H2>{aboutTranslations.partners.title[locale]}</H2>
                      <P>Is your organization already fighting aging? Awesome! We want to help.</P>
                    </div>
                    <div className="flex-1">
                      <PartnerForm
                        locale={locale}
                        listId={mailchimpConfig.listIds.partners}
                        formId={mailchimpConfig.formIds.partners}
                      />
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

