import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { Button } from '@/components/Button';
import { H2, H3 } from '@/components/Typography';
import { Link } from '@/components/Link';
import { Section } from '@/components/Section';
import { Partners } from '@/components/Partners';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Locale } from '@/lib/types';
import { homeTranslations } from './translations';
import { joinTranslations } from './join/translations';
import { getTranslation } from '@/lib/translate';
import { Wrapper } from '@/components/Wrapper';
import { Size } from '@/lib/theme';

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sv' }];
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
  
  const whyAging = getTranslation(homeTranslations.whyAging, locale);
  const demonstrations = getTranslation(homeTranslations.demonstrations, locale);
  const howCanYouHelp = getTranslation(homeTranslations.howCanYouHelp, locale);
  const aboutUs = getTranslation(homeTranslations.aboutUs, locale);
  const partnersTranslate = getTranslation(joinTranslations.partners, locale);
  const buttons = getTranslation(homeTranslations.buttons, locale);

  return (
    <div>
      <Hero
        backgroundImage="/hero1.png"
      />
      <Section>
        <Wrapper className='text-center py-20'>
          <div className="flex flex-col gap-12">
            <H2 display className="text-4xl md:text-5xl lg:text-6xl">{whyAging('title')}</H2>
            <H3 className="font-normal text-xl md:text-2xl lg:text-3xl">{whyAging('description')}</H3>
            <div className="flex justify-center">
              <Link href="/why" locale={locale}>
                <Button size={Size.XL} rightIcon="lucide:chevron-right">{buttons('learnMore')}</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper className='text-center'>
          <div className="flex flex-col gap-12">
            <H2 display className="text-4xl md:text-5xl lg:text-6xl">{demonstrations('title')}</H2>
            <H3 className="font-normal text-xl md:text-2xl lg:text-3xl">{demonstrations('description')}</H3>
            <div className="flex justify-center">
              <Link href="/demonstrations" locale={locale}>
                <Button size={Size.XL} rightIcon="lucide:chevron-right">{buttons('learnMore')}</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section>
        <HowCanYouHelp
          locale={locale}
          title={howCanYouHelp('title')}
          description={howCanYouHelp('description')}
          joinDiscordLabel={buttons('joinDiscord')}
          getInvolvedLabel={buttons('getInvolved')}
        />
      </Section>
      <Section>
        <Wrapper className='text-center'>
          <div className="flex flex-col gap-12">
            <H2 display className="text-4xl md:text-5xl lg:text-6xl">{aboutUs('title')}</H2>
            <H3 className="font-normal text-xl md:text-2xl lg:text-3xl">{aboutUs('description')}</H3>
            <div className="flex justify-center">
              <Link href="/about" locale={locale}>
                <Button size={Size.XL} rightIcon="lucide:chevron-right">{buttons('learnMore')}</Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </Section>

      <Section className="">
        <Wrapper>
          <Partners
            locale={locale}
            title={partnersTranslate('title')}
            partners={['Vitalism', 'Longevity Biotech Fellowship', 'Swedish longevity cluster']}
          />
        </Wrapper>
      </Section>

    </div>
  );
}

