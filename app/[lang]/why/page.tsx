import { Hero } from '@/components/Hero';
import { Sidebar } from '@/components/Sidebar';
import { H2, P } from '@/components/Typography';
import { Button } from '@/components/Button';
import { Link } from '@/components/Link';
import { Card } from '@/components/Card';
import { Locale } from '@/lib/types';
import { whyTranslations } from './translations';
import { getTranslation } from '@/lib/translate';

interface WhyPageProps {
  params: Promise<{ lang: string }>;
}

export default async function WhyPage({ params }: WhyPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = (lang === 'sv' ? Locale.SV : Locale.EN) as Locale;

  const heroTranslate = getTranslation(whyTranslations.hero, locale);
  const problemTranslate = getTranslation(whyTranslations.sections.problem, locale);
  const personalTranslate = getTranslation(whyTranslations.sections.personal, locale);
  const possibleTranslate = getTranslation(whyTranslations.sections.possible, locale);
  const meaningTranslate = getTranslation(whyTranslations.sections.meaning, locale);
  const realisticTranslate = getTranslation(whyTranslations.sections.realistic, locale);
  const hardTranslate = getTranslation(whyTranslations.sections.hard, locale);
  const missingTranslate = getTranslation(whyTranslations.sections.missing, locale);
  const whyWeActTranslate = getTranslation(whyTranslations.sections.whyWeAct, locale);

  const sidebarItems = [
    { id: 'problem', label: problemTranslate('title'), href: '/why#problem' },
    { id: 'personal', label: personalTranslate('title'), href: '/why#personal' },
    { id: 'possible', label: possibleTranslate('title'), href: '/why#possible' },
    { id: 'meaning', label: meaningTranslate('title'), href: '/why#meaning' },
    { id: 'realistic', label: realisticTranslate('title'), href: '/why#realistic' },
    { id: 'hard', label: hardTranslate('title'), href: '/why#hard' },
    { id: 'missing', label: missingTranslate('title'), href: '/why#missing' },
    { id: 'whyWeAct', label: whyWeActTranslate('title'), href: '/why#whyWeAct' },
  ];

  return (
    <div>
      <Hero title={heroTranslate('title')} variant="secondary" />

      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-8">
          <Sidebar locale={locale} items={sidebarItems} />

          <div className="flex-1 space-y-12">
            <section id="problem">
              <Card>
                <H2 className="mb-4">{problemTranslate('title')}</H2>
                <P>{problemTranslate('content')}</P>
              </Card>
            </section>

            <section id="personal">
              <Card>
                <H2 className="mb-4">{personalTranslate('title')}</H2>
                <P>{personalTranslate('content')}</P>
              </Card>
            </section>

            <section id="possible">
              <Card>
                <H2 className="mb-4">{possibleTranslate('title')}</H2>
                <P>{possibleTranslate('content')}</P>
              </Card>
            </section>

            <section id="meaning">
              <Card>
                <H2 className="mb-4">{meaningTranslate('title')}</H2>
                <P>{meaningTranslate('content')}</P>
              </Card>
            </section>

            <section id="realistic">
              <Card>
                <H2 className="mb-4">{realisticTranslate('title')}</H2>
                <P>{realisticTranslate('content')}</P>
              </Card>
            </section>

            <section id="hard">
              <Card>
                <H2 className="mb-4">{hardTranslate('title')}</H2>
                <P>{hardTranslate('content')}</P>
              </Card>
            </section>

            <section id="missing">
              <Card>
                <H2 className="mb-4">{missingTranslate('title')}</H2>
                <P>{missingTranslate('content')}</P>
              </Card>
            </section>

            <section id="whyWeAct">
              <Card>
                <H2 className="mb-4">{whyWeActTranslate('title')}</H2>
                <P className="mb-6">{whyWeActTranslate('content')}</P>
                <Link href="/join" locale={locale}>
                  <Button>Join us</Button>
                </Link>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

