import { SecondaryHero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { DemonstrationForm } from '@/components/DemonstrationForm';
import { MediaForm } from '@/components/MediaForm';
import { PartnerForm } from '@/components/PartnerForm';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { Partners } from '@/components/Partners';
import { DiscordIcon } from '@/lib/icons';
import { Icon } from '@/components/Icon';
import { Locale } from '@/lib/types';
import { joinTranslations } from './translations';
import { getTranslation } from '@/lib/translate';
import { mailchimpConfig, discordUrl } from '@/lib/config';

interface JoinPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
}

export default async function JoinPage({ params }: JoinPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

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
        title={joinTranslations.hero.title[locale]}
        backgroundImage="/images/community.jpg"
      />

      <Section className="flex flex-row justify-center">
        <Wrapper>
          <div className="flex gap-8">
            <Sidebar locale={locale} items={sidebarItems} />

            <div className="flex-1 flex flex-col gap-12">
              <section id="discord">
                <Card className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-16">
                  <div className="flex-1">
                    <H3>{discordTranslate('title')}</H3>
                    <P className="mb-0">{discordTranslate('description')}</P>
                  </div>

                  <div className="flex flex-1 items-center justify-start md:justify-end">
                    <a
                      href={discordUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-4 rounded-lg bg-[#5865F2] px-6 py-4 text-white shadow-md transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      <span className="inline-flex items-center justify-center rounded-full bg-white/15 p-3">
                        <DiscordIcon size={40} className="text-white" />
                      </span>
                      <span className="text-lg font-semibold leading-tight">
                        Join Discord
                        <Icon
                          icon="lucide:arrow-right"
                          className="ml-2 inline-block align-middle transition-transform group-hover:translate-x-0.5"
                        />
                      </span>
                    </a>
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
                      <DemonstrationForm
                        locale={locale}
                        listId={mailchimpConfig.listIds.demonstrations}
                        formId={mailchimpConfig.formIds.demonstrations}
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
                      <MediaForm
                        locale={locale}
                        listId={mailchimpConfig.listIds.media}
                        formId={mailchimpConfig.formIds.media}
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
                      <PartnerForm
                        locale={locale}
                        listId={mailchimpConfig.listIds.partners}
                        formId={mailchimpConfig.formIds.partners}
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

