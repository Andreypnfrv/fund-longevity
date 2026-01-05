import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { FormSection } from '@/components/FormSection';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { demonstrationsTranslations } from './translations';

interface DemonstrationsPageProps {
  params: Promise<{ lang: string }>;
}

export default async function DemonstrationsPage({ params }: DemonstrationsPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  return (
    <div>
      <Hero
        title={demonstrationsTranslations.hero.title[locale]}
        variant="secondary"
      />

      <div className="container mx-auto px-4 py-16">
        <Sidebar locale={locale} items={[]} />

        <div className="space-y-8">
          <Card>
            <P className="mb-4">{demonstrationsTranslations.simple[locale]}</P>
            <P className="mb-4">{demonstrationsTranslations.localLead[locale]}</P>
            <P>{demonstrationsTranslations.liveStream[locale]}</P>
          </Card>

          <Card>
            <H2 className="mb-4">{demonstrationsTranslations.nextDemo[locale]}</H2>
            <FormSection
              locale={locale}
              title="Join the Demonstration"
              description={demonstrationsTranslations.hero.title[locale]}
              listId={process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID_DEMONSTRATIONS || ''}
              fields={{ firstName: true, city: true, email: true, phone: true }}
              checkboxes={{ joinOffline: true, joinOnline: true, canTakePart: true }}
            />
          </Card>

          <Card>
            <H3 className="mb-4">{demonstrationsTranslations.behavior[locale]}</H3>
            <P>Guidelines for demonstration behavior...</P>
          </Card>

          <Card>
            <H3 className="mb-4">{demonstrationsTranslations.signs[locale]}</H3>
            <P>Sign gallery with screenshots and PDF downloads...</P>
          </Card>

          <Card>
            <a
              href="https://discord.gg/fundlongevity"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
            >
              <DiscordIcon />
              <span>Join Discord Community</span>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}

