import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { H4 } from '@/components/Typography';
import { Section } from '@/components/Section';
import { Partners } from '@/components/Partners';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Locale } from '@/lib/types';
import { homeTranslations } from './translations';
import { joinTranslations } from './join/translations';
import { getTranslation } from '@/lib/translate';
import { Wrapper } from '@/components/Wrapper';
import { PARTNERS } from '@/lib/config';

interface EventData {
  id: string;
  type: 'online' | 'city';
  name: string;
  flag: string;
  image?: string;
  imageAlt?: string;
  dateTime: string;
  location: string;
  link: string;
  buttonText: string;
  buttonColor: string;
  buttonShadow: string;
}

const EVENTS_DATA: EventData[] = [
  {
    id: 'livestream',
    type: 'online',
    name: 'LIVE STREAM',
    flag: '📱',
    image: '/youtube-logo.png',
    imageAlt: 'YouTube',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Youtube',
    link: 'https://luma.com/b7b2d2n2',
    buttonText: 'Watch Live',
    buttonColor: 'rgb(37, 99, 235)',
    buttonShadow: '0 4px 6px rgba(37, 99, 235, 0.3)',
  },
  {
    id: 'brussels',
    type: 'city',
    name: 'BRUSSELS',
    flag: '🇧🇪',
    image: '/brussels.jpg',
    imageAlt: 'Brussels',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Brussels',
    link: '#',
    buttonText: 'Register for Event',
    buttonColor: 'rgb(124, 58, 237)',
    buttonShadow: '0 4px 6px rgba(124, 58, 237, 0.3)',
  },
  {
    id: 'stockholm',
    type: 'city',
    name: 'STOCKHOLM',
    flag: '🇸🇪',
    image: '/StockholmRiksgatan3.png',
    imageAlt: 'Stockholm',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Riksgatan 3',
    link: 'https://luma.com/jjvn91yn',
    buttonText: 'Register for Event',
    buttonColor: 'rgb(124, 58, 237)',
    buttonShadow: '0 4px 6px rgba(124, 58, 237, 0.3)',
  },
  {
    id: 'berlin',
    type: 'city',
    name: 'BERLIN',
    flag: '🇩🇪',
    image: '/berlin.png',
    imageAlt: 'Berlin',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Platz der Republik vor dem Reichstagsgebäude',
    link: 'https://luma.com/85zauy4k',
    buttonText: 'Register for Event',
    buttonColor: 'rgba(34, 197, 94, 0.9)',
    buttonShadow: '0 4px 6px rgba(34, 197, 94, 0.3)',
  },
  {
    id: 'amsterdam',
    type: 'city',
    name: 'AMSTERDAM',
    flag: '🇳🇱',
    image: '/AmsterdamDamSquare.png',
    imageAlt: 'Amsterdam',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Dam Square',
    link: 'https://luma.com/ewtm0j9h',
    buttonText: 'Register for Event',
    buttonColor: 'rgb(37, 99, 235)',
    buttonShadow: '0 4px 6px rgba(37, 99, 235, 0.3)',
  },
  {
    id: 'rome',
    type: 'city',
    name: 'ROME',
    flag: '🇮🇹',
    image: '/RomePiazzadelPopolo.jpg',
    imageAlt: 'Rome',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Piazza del Popolo',
    link: 'https://luma.com/xjvb2fcb',
    buttonText: 'Register for Event',
    buttonColor: 'rgb(124, 58, 237)',
    buttonShadow: '0 4px 6px rgba(124, 58, 237, 0.3)',
  },
  {
    id: 'london',
    type: 'city',
    name: 'LONDON',
    flag: '🇬🇧',
    image: '/LondonTrafalgarSquare.jpg',
    imageAlt: 'London',
    dateTime: 'Wednesday 8 April, 16:00-17:00 BST',
    location: 'Trafalgar Square',
    link: 'https://luma.com/zrhjldno',
    buttonText: 'Register for Event',
    buttonColor: 'rgba(34, 197, 94, 0.9)',
    buttonShadow: '0 4px 6px rgba(34, 197, 94, 0.3)',
  },
  {
    id: 'paris',
    type: 'city',
    name: 'PARIS',
    flag: '🇫🇷',
    image: '/paris.png',
    imageAlt: 'Paris',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: '2 Pl. du Palais Bourbon, 75007 Paris',
    link: 'https://luma.com/unt7c4gf',
    buttonText: 'Register for Event',
    buttonColor: 'rgb(37, 99, 235)',
    buttonShadow: '0 4px 6px rgba(37, 99, 235, 0.3)',
  },
];

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
  
  const howCanYouHelp = getTranslation(homeTranslations.howCanYouHelp, locale);
  const partnersTranslate = getTranslation(joinTranslations.partners, locale);
  const buttons = getTranslation(homeTranslations.buttons, locale);

  return (
    <div>
      <Hero
        backgroundImage="/hero3.jpg"
        locale={locale}
      />
      <Section>
        <Wrapper>
          <div className="text-center py-8 md:py-12">
            <div className="inline-block">
              <div className="flex flex-col items-start gap-1 md:gap-2">
                <div className="flex flex-row items-baseline gap-2 md:gap-4 flex-wrap">
                  <div className="text-5xl md:text-7xl lg:text-8xl font-black leading-none" style={{
                    background: 'linear-gradient(135deg, #000 0%, #333 50%, #000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                  }}>
                    JOIN US
                  </div>
                  <div className="text-5xl md:text-7xl lg:text-8xl font-black leading-none" style={{
                    background: 'linear-gradient(135deg, #000 0%, #333 50%, #000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                  }}>
                    IN YOUR CITY
                  </div>
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight border-t-4 border-black pt-1 md:pt-2 mt-1 md:mt-2" style={{
                  letterSpacing: '0.1em',
                  fontWeight: '900',
                }}>
                  8TH APRIL 2026
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 mb-8 pt-16 md:pt-24">
            {EVENTS_DATA.map((event) => (
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                className="text-start flex flex-col gap-md p-6 rounded-lg hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer"
              >
                <div className={`relative aspect-square ${event.type === 'online' ? 'bg-black' : 'bg-gray-200'} rounded-lg overflow-hidden`}>
                  {event.image ? (
                    event.type === 'online' ? (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src={event.image}
                          alt={event.imageAlt || event.name}
                          width={200}
                          height={200}
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <Image
                        src={event.image}
                        alt={event.imageAlt || event.name}
                        fill
                        className="object-cover"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                      <span className="text-gray-500 text-4xl">{event.flag}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <H4 className="text-sm md:text-base font-black whitespace-nowrap">{event.name}</H4>
                  <div className="text-2xl md:text-3xl">{event.flag}</div>
                </div>
                <div className="text-base md:text-lg mb-0 whitespace-nowrap">{event.dateTime}</div>
                <div className="text-base md:text-lg text-gray-600 mb-6 -mt-1">{event.location}</div>
                <div className="mb-10">
                  <div className="inline-block text-white rounded-lg font-semibold px-8 py-4 text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: event.buttonColor, boxShadow: event.buttonShadow }}>
                    {event.buttonText}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <HowCanYouHelp
            locale={locale}
            title={howCanYouHelp('title')}
            description={howCanYouHelp('description')}
            joinDiscordLabel={buttons('joinDiscord')}
            getInvolvedLabel={buttons('getInvolved')}
          />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Partners
            locale={locale}
            title={partnersTranslate('title')}
            partners={PARTNERS}
          />
        </Wrapper>
      </Section>

    </div>
  );
}

