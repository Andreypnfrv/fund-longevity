import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { asksTranslations } from './translations';

interface AsksPageProps {
  params: Promise<{ lang: string }>;
}

export default async function AsksPage({ params }: AsksPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  return (
    <div>
      <Hero
        title={asksTranslations.hero.title[locale]}
        variant="secondary"
      />

      <div className="container mx-auto px-4 py-16">
        <Sidebar locale={locale} items={[]} />

        <div className="space-y-8">
          <Card>
            <P className="mb-6">{asksTranslations.intro[locale]}</P>
          </Card>

          <Card>
            <H2 className="mb-6">{asksTranslations.regulations.title[locale]}</H2>
            <ul className="space-y-3">
              {asksTranslations.regulations.items[locale].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <P>{item}</P>
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <H2 className="mb-6">{asksTranslations.funding.title[locale]}</H2>
            <ul className="space-y-3">
              {asksTranslations.funding.items[locale].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <P>{item}</P>
                </li>
              ))}
            </ul>
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

