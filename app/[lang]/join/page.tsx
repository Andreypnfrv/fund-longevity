import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { FormSection } from '@/components/FormSection';
import { DiscordIcon } from '@/lib/icons';
import { Locale } from '@/lib/types';
import { joinTranslations } from './translations';
import { getTranslation } from '@/lib/translate';

interface JoinPageProps {
  params: Promise<{ lang: string }>;
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

  return (
    <div>
      <Hero
        title={heroTranslate('title')}
        variant="secondary"
        backgroundImage="/images/community.jpg"
      />

      <div className="container mx-auto px-4 py-16">
        <Sidebar locale={locale} items={[]} />

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <H3 className="mb-4">{discordTranslate('title')}</H3>
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
          </Card>

          <FormSection
            locale={locale}
            title={demonstrationTranslate('title')}
            description={demonstrationTranslate('description')}
            listId={process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID_DEMONSTRATIONS || ''}
            fields={{ firstName: true, city: true, email: true, phone: true }}
            checkboxes={{ joinOffline: true, joinOnline: true, canTakePart: true }}
          />

          <FormSection
            locale={locale}
            title={mediaTranslate('title')}
            description={mediaTranslate('description')}
            listId={process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID_MEDIA || ''}
            fields={{ firstName: true, city: true, email: true, phone: true }}
          />

          <FormSection
            locale={locale}
            title={partnerTranslate('title')}
            description={partnerTranslate('description')}
            listId={process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID_PARTNERS || ''}
            fields={{ firstName: true, city: true, email: true, phone: true }}
            checkboxes={{ joinOffline: true, joinOnline: true, canTakePart: true }}
          />
        </div>

        <section className="mt-16">
          <H2 className="mb-8">{partnersTranslate('title')}</H2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <H3>Vitalism</H3>
            </Card>
            <Card>
              <H3>Longevity Biotech Fellowship</H3>
            </Card>
            <Card>
              <H3>Swedish longevity cluster</H3>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}

