import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { H4 } from '@/components/Typography';
import { Link } from '@/components/Link';
import { Section } from '@/components/Section';
import { Partners } from '@/components/Partners';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { PARTNERS, buildLocalizedPageMetadata, defaultOgImage } from '@/lib/config';
import { getLocaleFromLang, LOCALES } from '@/lib/types';
import { homeTranslations } from './translations';
import { getTranslation } from '@/lib/translate';
import { Wrapper } from '@/components/Wrapper';

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
    image: '/live-stream.jpeg',
    imageAlt: 'Live stream',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
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
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
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
    image: '/StockholmRiksgatan3.jpg',
    imageAlt: 'Stockholm',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
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
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
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
    image: '/AmsterdamDamSquare.jpg',
    imageAlt: 'Amsterdam',
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
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
    image: '/Rome_Via_San_Nicola_de_Cesarini.png',
    imageAlt: 'Rome',
    dateTime: 'Wednesday 8 April, 16:00-18:00 CEST',
    location: 'Via San Nicola de\' Cesarini',
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
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
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
    dateTime: 'Wednesday 8 April, 18:00-20:30 BST',
    location: 'Ye Olde Cock Tavern, 22 Fleet Street, EC4Y 1AA',
    link: 'https://www.meetup.com/london-futurists/events/313785359',
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
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: '2 Pl. du Palais Bourbon',
    link: 'https://luma.com/unt7c4gf',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'prague',
    type: 'city',
    name: 'PRAGUE',
    flag: '🇨🇿',
    image: '/prague.jpeg',
    imageAlt: 'Prague',
    dateTime: 'Wednesday 8 April, 17:00-18:30 CEST',
    location: 'Park Klárov, 118 00 Malá Strana (Památník padlým vojákům II. světové války)',
    link: 'https://luma.com/ykwx2ykm',
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
    location: 'Madrid City Hall',
    link: 'https://www.meetup.com/madridsingularity/events/313571696/',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'mexico',
    type: 'city',
    name: 'MEXICO',
    flag: '🇲🇽',
    image: '/mexico.png',
    imageAlt: 'Mexico',
    dateTime: 'Wednesday 8 April',
    location: 'Mexico',
    link: '#',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'caracas',
    type: 'city',
    name: 'CARACAS',
    flag: '🇻🇪',
    image: '/caracas.jpg',
    imageAlt: 'Caracas',
    dateTime: 'Wednesday 8 April, 9:00 a.m. VET',
    location: 'Av. Sanz con Cota Mil, El Marqués',
    link: '#',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'abudhabi',
    type: 'city',
    name: 'ABU DHABI',
    flag: '🇦🇪',
    image: '/abu-dhabi.jpg',
    imageAlt: 'Abu Dhabi',
    dateTime: 'Wednesday 8 April, 5:00 p.m. GST',
    location: 'Abu Dhabi',
    link: 'https://luma.com/b7b2d2n2',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'sanfrancisco',
    type: 'city',
    name: 'SAN FRANCISCO',
    flag: '🇺🇸',
    image: '/san-francisco.jpg',
    imageAlt: 'San Francisco',
    dateTime: 'Tuesday 7 April, 5:00 p.m. PDT',
    location: 'San Francisco, California',
    link: 'https://luma.com/ruebed41',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'scottsdale',
    type: 'city',
    name: 'SCOTTSDALE',
    flag: '🇺🇸',
    image: '/scottsdale.png',
    imageAlt: 'Scottsdale, AZ',
    dateTime: 'Wednesday 8 April, 08:00-09:00 MST',
    location: 'Scottsdale, AZ',
    link: 'https://luma.com/b7b2d2n2',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'tbilisi',
    type: 'city',
    name: 'TBILISI',
    flag: '🇬🇪',
    image: '/tbilisi.png',
    imageAlt: 'Longevity in Georgia, Tbilisi',
    dateTime: 'Sunday 5 April 2026, 16:00-19:00 GMT+4',
    location: 'Tbilisi Balneological Resort, Tbilisi',
    link: 'https://luma.com/epvbjkci',
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
    dateTime: 'Wednesday 8 April, 17:00-18:00 CEST',
    location: 'Tel Aviv',
    link: 'https://luma.com/b7b2d2n2',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'toronto',
    type: 'city',
    name: 'TORONTO',
    flag: '🇨🇦',
    image: '/toronto.jpg',
    imageAlt: 'Nathan Phillips Square, Toronto',
    dateTime: 'Wednesday 8 April, 5:00 p.m. EDT',
    location: 'Nathan Phillips Square (Toronto City Hall)',
    link: 'https://luma.com/gojl45sg',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
  },
  {
    id: 'calgary',
    type: 'city',
    name: 'CALGARY',
    flag: '🇨🇦',
    image: '/calgary.png',
    imageAlt: 'Calgary City Hall',
    dateTime: 'Wednesday 8 April, 6:00 p.m. MST',
    location: 'Calgary City Hall square',
    link: 'https://luma.com/2unfczc2',
    buttonText: 'Register',
    buttonColor: '#0900FF',
    buttonShadow: '0 4px 6px rgba(9, 0, 255, 0.3)',
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
  const description = translate('subtitle').replace(/\u00A0/g, ' ');
  const path = `/${lang}/`;
  const base = buildLocalizedPageMetadata({
    lang,
    title: 'Fund Longevity',
    description,
    path,
    ogImage: defaultOgImage,
  });
  return {
    ...base,
    title: { absolute: 'Fund Longevity' },
    openGraph: { ...base.openGraph, title: 'Fund Longevity' },
    twitter: { ...base.twitter, title: 'Fund Longevity' },
  };
}

export default async function HomePage({ params }: HomePageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  const partnersTranslate = getTranslation(homeTranslations.partners, locale);
  const heroTranslate = getTranslation(homeTranslations.hero, locale);
  const agingProblemTranslate = getTranslation(homeTranslations.agingProblem, locale);
  const citiesTranslate = getTranslation(homeTranslations.cities, locale);
  const eventDateTimeTranslate = getTranslation(homeTranslations.eventDateTimes, locale);

  return (
    <div>
      <Hero
        backgroundImage="/hero4.jpg"
        locale={locale}
        titleLine1={heroTranslate('titleLine1')}
        titleLine2={heroTranslate('titleLine2')}
        subtitle={heroTranslate('subtitle')}
      />
      <Section>
        <Wrapper>
          <div className="mx-auto max-w-5xl py-8 md:py-12">
            <p className="text-2xl leading-snug text-gray-900 md:text-3xl lg:text-4xl md:leading-tight [&_a]:inline">
              {agingProblemTranslate('body')}{' '}
              <Link href="/why" locale={locale} className="font-semibold text-[#0900FF] hover:underline">
                {agingProblemTranslate('readMore')}
              </Link>
            </p>
          </div>
        </Wrapper>
      </Section>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
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
                  <div className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.imageAlt || event.name}
                        fill
                        className="object-cover"
                      />
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
                      const dateTimeStr = eventDateTimeTranslate(event.id as keyof typeof homeTranslations.eventDateTimes);
                      const i = dateTimeStr.indexOf(', ');
                      const datePart = i >= 0 ? dateTimeStr.slice(0, i) : dateTimeStr;
                      const timePart = i >= 0 ? dateTimeStr.slice(i + 2) : '';
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

