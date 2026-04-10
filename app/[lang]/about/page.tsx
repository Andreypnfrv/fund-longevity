import type { Metadata } from 'next';
import Image from 'next/image';
import { H1, H3, P } from '@/components/Typography';
import { Sidebar } from '@/components/Sidebar';
import { Content } from '@/components/Content';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { buildLocalizedPageMetadata, defaultOgImage } from '@/lib/config';
import { getLocaleFromLang, LOCALES, Locale } from '@/lib/types';
import { aboutTranslations } from './translations';
import { TEAM_DATA, type TeamMember } from '@/lib/team';
import { Icon } from '@/components/Icon';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

const TEAM_MEMBER_GRID =
  'grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(min(100%,17rem),1fr))]';

function TeamMemberCard({ member, locale }: { member: TeamMember; locale: Locale }): JSX.Element {
  return (
    <div className="bg-white rounded-lg py-6">
      <div className="relative w-full aspect-square mb-8 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className={`object-cover rounded-lg ${member.name === 'Miguel Ferrero' || member.name === 'Ivan Gorbadei' ? 'object-top' : ''}`}
          />
        ) : (
          <span className="text-gray-400 text-sm">{member.name}</span>
        )}
      </div>
      <div className="mb-2">
        <h3 className="text-2xl font-bold">{member.name}</h3>
        {member.location && <span className="text-base text-gray-600">{member.location}</span>}
      </div>
      {(member.descriptions?.[locale] ?? member.description) && (
        <P className="mb-4">{member.descriptions?.[locale] ?? member.description}</P>
      )}
      {member.socialLinks &&
        (member.socialLinks.linkedin ??
          member.socialLinks.x ??
          member.socialLinks.website ??
          member.socialLinks.telegram ??
          member.socialLinks.github) && (
          <div className="flex gap-3">
            {member.socialLinks?.linkedin && (
              <a
                href={member.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 shrink-0 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon icon="mdi:linkedin" width={20} height={20} className="shrink-0" />
              </a>
            )}
            {member.socialLinks?.x && (
              <a
                href={member.socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 shrink-0 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon icon="simple-icons:x" width={20} height={20} className="shrink-0" />
              </a>
            )}
            {member.socialLinks?.website && (
              <a
                href={member.socialLinks.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 shrink-0 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon icon="mdi:web" width={20} height={20} className="shrink-0" />
              </a>
            )}
            {member.socialLinks?.telegram && (
              <a
                href={member.socialLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 shrink-0 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon icon="mdi:telegram" width={20} height={20} className="shrink-0" />
              </a>
            )}
            {member.socialLinks?.github && (
              <a
                href={member.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 shrink-0 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Icon icon="mdi:github" width={20} height={20} className="shrink-0" />
              </a>
            )}
          </div>
        )}
    </div>
  );
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const title = aboutTranslations.hero.title[locale];
  const description =
    aboutTranslations.hero.subtitle[locale] ?? aboutTranslations.hero.subtitle[Locale.EN];
  return buildLocalizedPageMetadata({
    lang,
    title,
    description,
    path: `/${lang}/about`,
    ogImage: defaultOgImage,
  });
}

export default async function AboutPage({ params }: AboutPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  const coreGroup = TEAM_DATA.cities.find((g) => g.city === 'core');
  const citiesSorted = [...TEAM_DATA.cities].filter((g) => g.city !== 'core').sort((a, b) => {
    if (a.city === 'experts') return -1;
    if (b.city === 'experts') return 1;
    if (a.city === 'liveStreamOrgs') return -1;
    if (b.city === 'liveStreamOrgs') return 1;
    return a.city.localeCompare(b.city, undefined, { sensitivity: 'base' });
  });
  const sidebarItems = [
    ...(coreGroup
      ? [
          {
            id: 'core',
            label: aboutTranslations.teamSections.core[locale],
            href: '/about#core',
          },
        ]
      : []),
    ...citiesSorted.map((g) => ({
      id: g.city,
      label: aboutTranslations.teamSections[g.city as keyof typeof aboutTranslations.teamSections][locale],
      href: `/about#${g.city}`,
    })),
  ];

  return (
    <div className="flex flex-col gap-8 md:gap-18">
      <Section style={{ paddingTop: '30px', paddingBottom: 0 }}>
        <Wrapper>
          <div>
            <H1 display className="mb-20 text-[#0900FF] whitespace-pre-line">
              {aboutTranslations.hero.title[locale]}
            </H1>
            <P className="text-4xl text-black opacity-90 whitespace-pre-line">{aboutTranslations.hero.subtitle[locale]}</P>
            <a
              href="https://docs.google.com/document/d/1pZbNyNh-QCYZG4tRp88AH_QVlVamS4F1/edit?rtpof=true&sd=true&tab=t.0"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full border border-[#0900FF] px-4 py-4 text-center text-base md:text-lg font-semibold text-[#0900FF] hover:bg-[#0900FF]/5 transition-colors"
            >
              {aboutTranslations.hero.pressReleaseCta[locale]}
            </a>
          </div>
        </Wrapper>
      </Section>

      <Wrapper>
        <div className="flex flex-col lg:flex-row gap-16">
          <Sidebar locale={locale} items={sidebarItems} />
          <Content>
            <section id="team">
              <div className="py-8 bg-white">
                {coreGroup && (
                  <div id="core" className="mb-48 scroll-mt-48">
                    <H3 className="mb-6">{aboutTranslations.teamSections.core[locale]}</H3>
                    <div className={TEAM_MEMBER_GRID}>
                      {coreGroup.members.map((member, i) => (
                        <TeamMemberCard key={`core-${member.name}-${i}`} member={member} locale={locale} />
                      ))}
                    </div>
                  </div>
                )}
                {citiesSorted.map((cityGroup) => (
                  <div key={cityGroup.city} id={cityGroup.city} className="mb-48 scroll-mt-48">
                    <H3 className="mb-6">
                      {aboutTranslations.teamSections[cityGroup.city as keyof typeof aboutTranslations.teamSections][locale]}
                    </H3>
                    <div className={TEAM_MEMBER_GRID}>
                      {cityGroup.members.map((member, i) => (
                        <TeamMemberCard key={`${cityGroup.city}-${member.name}-${i}`} member={member} locale={locale} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Content>
        </div>
      </Wrapper>
    </div>
  );
}
