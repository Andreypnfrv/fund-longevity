import { SecondaryHero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { FormSection } from '@/components/FormSection';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { Partners } from '@/components/Partners';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { joinTranslations } from './translations';
import { getTranslation } from '@/lib/translate';

interface JoinPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
}

export default async function JoinPage({ params }: JoinPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  const heroTranslate = getTranslation(joinTranslations.hero, locale);
  const discordTranslate = getTranslation(joinTranslations.discord, locale);
  const demonstrationTranslate = getTranslation(joinTranslations.demonstration, locale);
  const mediaTranslate = getTranslation(joinTranslations.media, locale);
  const partnerTranslate = getTranslation(joinTranslations.partner, locale);
  const partnersTranslate = getTranslation(joinTranslations.partners, locale);

  const sidebarItems = [
    { id: 'discord', label: discordTranslate('title'), href: '/join#discord' },
    { id: 'demonstration', label: demonstrationTranslate('title'), href: '/join#demonstration' },
    { id: 'media', label: mediaTranslate('title'), href: '/join#media' },
    { id: 'partner', label: partnerTranslate('title'), href: '/join#partner' },
    { id: 'partners', label: partnersTranslate('title'), href: '/join#partners' },
  ];

  return (
    <div>
      <SecondaryHero
        title={heroTranslate('title')}
        backgroundImage="/images/community.jpg"
      />

      <Section className="flex flex-row justify-center">
        <Wrapper>
          <div className="flex gap-8">
            <Sidebar locale={locale} items={sidebarItems} />

            <div className="flex-1 space-y-12">
              <section id="discord">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H3>{discordTranslate('title')}</H3>
                      <P className="mb-6">{discordTranslate('description')}</P>
                      <a
                        href="https://discord.gg/fundlongevity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                      >
                        <DiscordIcon />
                        <span>Join Discord</span>
                      </a>
                    </div>
                  </div>
                </Card>
              </section>

              <section id="demonstration">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H3>{demonstrationTranslate('title')}</H3>
                      <P>{demonstrationTranslate('description')}</P>
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

              <section id="media">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H3>{mediaTranslate('title')}</H3>
                      <P>{mediaTranslate('description')}</P>
                    </div>
                    <div className="flex-1">
                      <FormSection
                        locale={locale}
                        listId={process.env['NEXT_PUBLIC_MAILCHIMP_LIST_ID_MEDIA'] || ''}
                        fields={{ firstName: true, city: true, email: true, phone: true }}
                        noCard={true}
                      />
                    </div>
                  </div>
                </Card>
              </section>

              <section id="partner">
                <Card>
                  <div className="flex gap-8">
                    <div className="flex-1">
                      <H3>{partnerTranslate('title')}</H3>
                      <P>{partnerTranslate('description')}</P>
                    </div>
                    <div className="flex-1">
                      <FormSection
                        locale={locale}
                        listId={process.env['NEXT_PUBLIC_MAILCHIMP_LIST_ID_PARTNERS'] || ''}
                        fields={{ firstName: true, city: true, email: true, phone: true }}
                        checkboxes={{ joinOffline: true, joinOnline: true, canTakePart: true }}
                        noCard={true}
                      />
                    </div>
                  </div>
                </Card>
              </section>

              <section id="partners">
                <Partners
                  locale={locale}
                  title={partnersTranslate('title')}
                  partners={['Vitalism', 'Longevity Biotech Fellowship', 'Swedish longevity cluster']}
                />
              </section>
            </div>
          </div>
        </Wrapper>
      </Section>
    </div>
  );
}

