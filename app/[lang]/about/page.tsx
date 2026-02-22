import Image from 'next/image';
import { H1, H2, H3, P } from '@/components/Typography';
import { Sidebar } from '@/components/Sidebar';
import { Content } from '@/components/Content';
import { Partners } from '@/components/Partners';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { Locale } from '@/lib/types';
import { aboutTranslations } from './translations';
import { PARTNERS } from '@/lib/config';
import { TEAM_DATA } from '@/lib/team';
import { Icon } from '@/components/Icon';

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
    { id: 'localLeads', label: aboutTranslations.localLeads.title[locale], href: '/about#localLeads' },
    { id: 'partners', label: aboutTranslations.partners.title[locale], href: '/about#partners' },
  ];

  return (
    <div className='flex flex-col gap-8 md:gap-18 pt-16 md:pt-20'>
      <Section>
        <Wrapper>
          <div>
            <H1 display className="mb-20 text-black whitespace-pre-line">{aboutTranslations.hero.title[locale]}</H1>
            <P className="text-4xl text-black opacity-90 whitespace-pre-line">{aboutTranslations.hero.subtitle[locale]}</P>
          </div>
        </Wrapper>
      </Section>

      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16">
          <Sidebar locale={locale} items={sidebarItems} />
          <Content>
            <section id="localLeads">
                <div className="py-8 bg-white">
                  <H2 className="mb-6">{aboutTranslations.localLeads.title[locale]}</H2>
                  {TEAM_DATA.cities.map((cityGroup) => (
                    <div key={cityGroup.city} className="mb-12">
                      <H3 className="mb-6">{cityGroup.city}</H3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {cityGroup.members.map((member) => (
                          <div key={member.name} className="bg-white rounded-lg py-6">
                            <div className="relative w-full aspect-square mb-8 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
                              {member.image ? (
                                <Image
                                  src={member.image}
                                  alt={member.name}
                                  fill
                                  className="object-cover rounded-lg"
                                />
                              ) : (
                                <span className="text-gray-400 text-sm">{member.name}</span>
                              )}
                            </div>
                            <div className="mb-2">
                              <h3 className="text-2xl font-bold">{member.name}</h3>
                              <span className="text-base text-gray-600">{member.location}</span>
                            </div>
                            {member.description && <P className="mb-4">{member.description}</P>}
                            <div className="flex gap-3">
                              {member.socialLinks?.linkedin && (
                                <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                  <Icon icon="mdi:linkedin" width={20} height={20} />
                                </a>
                              )}
                              {member.socialLinks?.x && (
                                <a href={member.socialLinks.x} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                  <Icon icon="simple-icons:x" width={20} height={20} />
                                </a>
                              )}
                              {member.socialLinks?.website && (
                                <a href={member.socialLinks.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                  <Icon icon="mdi:web" width={20} height={20} />
                                </a>
                              )}
                              {member.socialLinks?.telegram && (
                                <a href={member.socialLinks.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                  <Icon icon="mdi:telegram" width={20} height={20} />
                                </a>
                              )}
                              {member.socialLinks?.github && (
                                <a href={member.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors">
                                  <Icon icon="mdi:github" width={20} height={20} />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
            </section>

            <section id="partners">
              <Partners
                locale={locale}
                title={aboutTranslations.partners.title[locale]}
                partners={PARTNERS}
              />
            </section>
          </Content>
        </div>
      </Wrapper>
    </div>
  );
}

