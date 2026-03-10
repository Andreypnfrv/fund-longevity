import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { H4 } from '@/components/Typography';
import { Section } from '@/components/Section';
import { Partners } from '@/components/Partners';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { getLocaleFromLang, LOCALES } from '@/lib/types';
import { homeTranslations } from './translations';
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
  note?: string;
}

const EVENTS_DATA: EventData[] = [
  {
    id: 'livestream',
    type: 'online',
    name: 'LIVE STREAM',
    flag: '📱',
    image: '/youtube-logo.png',
    imageAlt: 'YouTube',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Youtube',
    link: 'https://luma.com/b7b2d2n2',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'brussels',
    type: 'city',
    name: 'BRUSSELS',
    flag: '🇧🇪',
    image: '/brussels.jpg',
    imageAlt: 'Brussels',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Brussels',
    link: 'https://luma.com/9hjypbt7',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'stockholm',
    type: 'city',
    name: 'STOCKHOLM',
    flag: '🇸🇪',
    image: '/StockholmRiksgatan3.png',
    imageAlt: 'Stockholm',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Riksgatan 3',
    link: 'https://luma.com/jjvn91yn',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'berlin',
    type: 'city',
    name: 'BERLIN',
    flag: '🇩🇪',
    image: '/berlin.png',
    imageAlt: 'Berlin',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Platz der Republik vor dem Reichstagsgebäude',
    link: 'https://luma.com/85zauy4k',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'amsterdam',
    type: 'city',
    name: 'AMSTERDAM',
    flag: '🇳🇱',
    image: '/AmsterdamDamSquare.png',
    imageAlt: 'Amsterdam',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Dam Square',
    link: 'https://luma.com/tkxk5owu',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'rome',
    type: 'city',
    name: 'ROME',
    flag: '🇮🇹',
    image: '/RomePiazzadelPopolo.jpg',
    imageAlt: 'Rome',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Piazza del Popolo',
    link: 'https://luma.com/xjvb2fcb',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'ljubljana',
    type: 'city',
    name: 'LJUBLJANA',
    flag: '🇸🇮',
    image: '/ljubljana.jpg',
    imageAlt: 'Ljubljana',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Ljubljana',
    link: 'https://luma.com/ttgmkonk',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'london',
    type: 'city',
    name: 'LONDON',
    flag: '🇬🇧',
    image: '/LondonTrafalgarSquare.jpg',
    imageAlt: 'London',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Trafalgar Square',
    link: 'https://luma.com/zrhjldno',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'paris',
    type: 'city',
    name: 'PARIS',
    flag: '🇫🇷',
    image: '/paris.png',
    imageAlt: 'Paris',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: '2 Pl. du Palais Bourbon',
    link: 'https://luma.com/unt7c4gf',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'telaviv',
    type: 'city',
    name: 'TEL AVIV',
    flag: '🇮🇱',
    image: '/telaviv.jpg',
    imageAlt: 'Tel Aviv',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Tel Aviv',
    link: 'https://luma.com/rk8hxy1h',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'madrid',
    type: 'city',
    name: 'MADRID',
    flag: '🇪🇸',
    image: '/madrid.jpg',
    imageAlt: 'Madrid',
    dateTime: 'Wednesday 8 April, 10:00-12:00 CET',
    location: 'Madrid',
    link: 'https://www.meetup.com/madridsingularity/events/313571696/',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
    note: 'Because of regulations in Madrid, our March will be between 14:00 and 16:00.',
  },
];

interface HomePageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const translate = getTranslation(homeTranslations.hero, locale);

  return {
    title: translate('title'),
    description: translate('subtitle'),
  };
}

export default async function HomePage({ params }: HomePageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  const partnersTranslate = getTranslation(homeTranslations.partners, locale);
  const heroTranslate = getTranslation(homeTranslations.hero, locale);
  const citiesTranslate = getTranslation(homeTranslations.cities, locale);

  return (
    <div>
      <Hero
        backgroundImage="/hero4.jpg"
        locale={locale}
        titleLine1={heroTranslate('titleLine1')}
        titleLine2={heroTranslate('titleLine2')}
        subtitle={heroTranslate('subtitle')}
      />
      <Section id="cities">
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
                    {citiesTranslate('joinUs')}
                  </div>
                  <div className="text-5xl md:text-7xl lg:text-8xl font-black leading-none" style={{
                    background: 'linear-gradient(135deg, #000 0%, #333 50%, #000 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                  }}>
                    {citiesTranslate('inYourCity')}
                  </div>
                </div>
                <div className="text-2xl md:text-4xl lg:text-5xl font-bold text-black leading-tight border-t-4 border-black pt-1 md:pt-2 mt-1 md:mt-2 inline-flex flex-wrap items-baseline gap-x-1 max-[1180px]:flex-col max-[1180px]:items-start max-[1180px]:gap-y-0" style={{
                  letterSpacing: '0.1em',
                  fontWeight: '900',
                }}>
                  <span className="whitespace-nowrap">{citiesTranslate('date')}</span>
                  <span className="whitespace-nowrap">{citiesTranslate('year')}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 mb-8 pt-16 md:pt-24">
            {[
              ...EVENTS_DATA.filter((e) => e.type === 'online'),
              ...EVENTS_DATA.filter((e) => e.type === 'city').sort((a, b) => a.name.localeCompare(b.name)),
            ].map((event) => (
              <a
                key={event.id}
                href={event.link}
                target="_blank"
                className="text-start flex flex-col justify-between gap-md p-6 rounded-lg hover:bg-gray-100 transition-all duration-200 ease-in-out cursor-pointer"
              >
                <div className="flex flex-col flex-1 min-h-0 gap-5">
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
                            unoptimized
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
                  <div className="flex items-center justify-between gap-2">
                    <H4 className="text-sm md:text-base font-black whitespace-nowrap">{event.name}</H4>
                    <div className="text-2xl md:text-3xl">{event.flag}</div>
                  </div>
                  <div className="text-base md:text-lg mb-0 inline-flex flex-wrap items-baseline gap-x-1 max-[1180px]:flex-col max-[1180px]:items-start max-[1180px]:gap-y-0">
                    {(() => {
                      const i = event.dateTime.indexOf(', ');
                      const datePart = i >= 0 ? event.dateTime.slice(0, i) : event.dateTime;
                      const timePart = i >= 0 ? event.dateTime.slice(i + 2) : '';
                      const nbsp = '\u00A0';
                      const dateStr = datePart.replace(/ /g, nbsp);
                      const timeStr = timePart.replace(/ /g, nbsp);
                      return (
                        <>
                          {dateStr && <span className="whitespace-nowrap">{dateStr}{timePart ? ',\u00A0' : ''}</span>}
                          {timeStr && <span className="whitespace-nowrap">{timeStr}</span>}
                        </>
                      );
                    })()}
                  </div>
                  <div className="text-base md:text-lg text-gray-600 -mt-1">{event.location}</div>
                  {event.note && <div className="text-sm text-gray-500 mt-1">{event.note}</div>}
                </div>
                <div className="flex-shrink-0">
                  <div className="inline-block text-white rounded-lg font-semibold px-8 py-4 text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: event.buttonColor, boxShadow: event.buttonShadow }}>
                    {citiesTranslate('register')}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <HowCanYouHelp locale={locale} />
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <Partners
            locale={locale}
            title={partnersTranslate('title')}
            subtitle={partnersTranslate('subtitle')}
            partners={PARTNERS}
          />
        </Wrapper>
      </Section>

    </div>
  );
}

