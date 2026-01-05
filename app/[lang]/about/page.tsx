import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { FormSection } from '@/components/FormSection';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { aboutTranslations } from './translations';

interface AboutPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutPage({ params }: AboutPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  return (
    <div>
      <Hero
        title={aboutTranslations.hero.title[locale]}
        variant="secondary"
      />

      <div className="container mx-auto px-4 py-16">
        <Sidebar locale={locale} items={[]} />

        <div className="space-y-8">
          <Card>
            <P>{aboutTranslations.about[locale]}</P>
          </Card>

          <Card>
            <H2 className="mb-4">{aboutTranslations.coreTeam.title[locale]}</H2>
            <ul className="space-y-2">
              <li>
                <P>Andrei Panferov</P>
              </li>
              <li>
                <P>Linus Petersson</P>
              </li>
            </ul>
          </Card>

          <Card>
            <H2 className="mb-4">{aboutTranslations.advisors.title[locale]}</H2>
            <P>Advisors section...</P>
          </Card>

          <Card>
            <H2 className="mb-4">{aboutTranslations.localLeads.title[locale]}</H2>
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
          </Card>

          <Card>
            <a
              href="https://discord.gg/fundlongevity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
            >
              <DiscordIcon />
              <span>Join Discord Community</span>
            </a>
          </Card>

          <Card>
            <H2 className="mb-4">{aboutTranslations.partners.title[locale]}</H2>
            <FormSection
              locale={locale}
              title="Become a Partner"
              description="Is your organization already fighting aging? Awesome! We want to help."
              listId={process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID_PARTNERS || ''}
              fields={{ firstName: true, city: true, email: true, phone: true }}
              checkboxes={{ joinOffline: true, joinOnline: true, canTakePart: true }}
            />
          </Card>
        </div>
      </div>
    </div>
  );
}

