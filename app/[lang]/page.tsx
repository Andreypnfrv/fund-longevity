import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/Button';
import { H2, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Link } from '@/components/Link';
import { Locale } from '@/lib/types';
import { homeTranslations } from './translations';
import { getTranslation } from '@/lib/translate';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;
  const translate = getTranslation(homeTranslations.hero, locale);

  return {
    title: translate('title'),
    description: translate('subtitle'),
  };
}

export default async function HomePage({ params }: HomePageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;
  
  const hero = getTranslation(homeTranslations.hero, locale);
  const whyAging = getTranslation(homeTranslations.whyAging, locale);
  const demonstrations = getTranslation(homeTranslations.demonstrations, locale);
  const howCanYouHelp = getTranslation(homeTranslations.howCanYouHelp, locale);
  const aboutUs = getTranslation(homeTranslations.aboutUs, locale);

  return (
    <div>
      <Hero
        title={hero.translate('title')}
        subtitle={hero.translate('subtitle')}
        variant="primary"
      />

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <H2 className="mb-4">{whyAging.translate('title')}</H2>
            <P className="mb-6">{whyAging.translate('description')}</P>
            <Link href="/why" locale={locale}>
              <Button>Learn more</Button>
            </Link>
          </Card>

          <Card>
            <H2 className="mb-4">{demonstrations.translate('title')}</H2>
            <P className="mb-6">Learn how our demonstrations work and how you can participate.</P>
            <Link href="/demonstrations" locale={locale}>
              <Button>Learn more</Button>
            </Link>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <H2 className="mb-4">{howCanYouHelp.translate('title')}</H2>
            <P className="mb-6">Join us in the fight against aging. There are many ways to contribute.</P>
            <Link href="/join" locale={locale}>
              <Button>Get involved</Button>
            </Link>
          </Card>

          <Card>
            <H2 className="mb-4">{aboutUs.translate('title')}</H2>
            <P className="mb-6">Learn more about our mission and the team behind Fund Longevity.</P>
            <Link href="/about" locale={locale}>
              <Button>Learn more</Button>
            </Link>
          </Card>
        </div>
      </section>
    </div>
  );
}

