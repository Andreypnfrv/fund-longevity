import type { Metadata } from 'next';
import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { H4 } from '@/components/Typography';
import { Link } from '@/components/Link';
import { Section } from '@/components/Section';
import { Partners } from '@/components/Partners';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { PARTNERS, buildLocalizedPageMetadata, defaultOgImage, mailchimpConfig } from '@/lib/config';
import { getLocaleFromLang, LOCALES, SubmitIntent } from '@/lib/types';
import { homeTranslations } from './translations';
import { getTranslation } from '@/lib/translate';
import { Wrapper } from '@/components/Wrapper';
import { FormSection } from '@/components/FormSection';
import { Fill, Size } from '@/lib/theme';

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
    image: '/stockholm.png',
    imageAlt: 'Fund Longevity march, Stockholm',
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
    image: '/amsterdam-rally.png',
    imageAlt: 'Fund Longevity rally, Dam Square, Amsterdam',
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
    image: '/rome-rally.png',
    imageAlt: 'Fund Longevity rally, Rome',
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
    image: '/ljubljana.png',
    imageAlt: 'Fund Longevity rally, Prešeren Square, Ljubljana',
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
    image: '/paris-rally.png',
    imageAlt: 'Fund Longevity rally, Esplanade des Invalides, Paris',
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
    image: '/prague-rally.png',
    imageAlt: 'Fund Longevity rally, Klárov, Prague',
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
    image: '/madrid-rally.png',
    imageAlt: 'Fund Longevity rally, Presidencia de la Comunidad de Madrid',
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
    image: '/mexico-rally.png',
    imageAlt: 'Fund Longevity rally, Mexico',
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
    image: '/san-francisco-rally.png',
    imageAlt: 'Fund Longevity rally, San Francisco',
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
  const translate = getTranslation(homeTranslations.agingProblem, locale);
  const description = translate('tagline').replace(/\u00A0/g, ' ');
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
  const agingProblemTranslate = getTranslation(homeTranslations.agingProblem, locale);
  const citiesTranslate = getTranslation(homeTranslations.cities, locale);
  const eventDateTimeTranslate = getTranslation(homeTranslations.eventDateTimes, locale);
  const recapApril8Translate = getTranslation(homeTranslations.recapApril8, locale);

  return (
    <div>
      <Hero backgroundImage="/stockholn-hero.jpeg" />
      <Section>
        <Wrapper>
          <div className="w-full pt-8 pb-16 md:pt-12 md:pb-24 lg:pb-28">
            <div className="flex flex-col gap-8 xl:flex-row xl:items-stretch xl:gap-16 2xl:gap-20">
              <div className="order-first flex min-h-0 w-full min-w-0 flex-col xl:order-2 xl:flex-1 xl:basis-0 xl:justify-center">
                <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-black/15">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src="https://www.youtube.com/embed/qg5AS-YmOXk?rel=0&modestbranding=1"
                    title={agingProblemTranslate('promoIframeTitle')}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="order-last flex min-w-0 w-full flex-col gap-6 md:gap-16 xl:order-1 xl:flex-1 xl:basis-0 xl:gap-20">
                <p className="hero-subtitle-wrap whitespace-pre-line font-black uppercase leading-[1.05] tracking-tight text-gray-900">
                  {agingProblemTranslate('tagline')}
                </p>
                <p className="text-2xl leading-snug text-gray-900 md:text-3xl xl:text-4xl md:leading-tight [&_a]:inline">
                  {agingProblemTranslate('body')}{' '}
                  <Link href="/why" locale={locale} className="font-semibold text-[#0900FF] hover:underline">
                    {agingProblemTranslate('readMore')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </Section>
      <Section id="recap-april-8" className="bg-gradient-to-b from-[#f5f6ff] via-white to-white">
        <Wrapper>
          <div className="w-full py-12 md:py-20">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16">
              <div className="relative min-w-0 flex-[2] basis-0 overflow-hidden rounded-3xl border border-black/[0.06] bg-white p-6 shadow-[0_32px_120px_-24px_rgba(9,0,255,0.22)] md:p-10 lg:min-h-0 lg:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#0900FF]/10 blur-3xl"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-[#0900FF]/5 blur-3xl"
                />
                <div className="relative flex flex-col gap-12 md:gap-16 lg:gap-20">
                  <h2
                    className="whitespace-pre-line text-3xl font-black leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
                    style={{
                      background: 'linear-gradient(120deg, #000 0%, #1a1a1a 35%, #0900FF 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {recapApril8Translate('title')}
                  </h2>
                  <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl bg-black shadow-[0_20px_60px_-15px_rgba(0,0,0,0.45)] ring-1 ring-black/20">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src="https://www.youtube.com/embed/4CHvbryuUb4?rel=0&modestbranding=1"
                      title={recapApril8Translate('iframeTitle')}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex shrink-0 justify-center">
                    <a
                      href="https://www.youtube.com/watch?v=4CHvbryuUb4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-[3.75rem] items-center justify-center rounded-2xl bg-[#FF0000] px-8 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-[0_14px_44px_-6px_rgba(255,0,0,0.55)] ring-2 ring-white/25 transition hover:scale-[1.02] hover:ring-white/40"
                    >
                      {recapApril8Translate('openOnYoutube')}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex min-h-0 w-full min-w-0 flex-col self-stretch lg:flex-1 lg:basis-0">
                <div
                  className="box-border flex h-full min-h-0 w-full flex-col rounded-3xl border border-white/15 px-6 py-10 text-center text-white shadow-[0_24px_80px_-28px_rgba(0,0,0,0.45)] md:px-8 md:py-12 lg:flex-1 lg:min-h-0 lg:py-12"
                  style={{
                    background: 'linear-gradient(120deg, #000 0%, #1a1a1a 35%, #0900FF 100%)',
                  }}
                >
                  <h3 className="w-full shrink-0 whitespace-pre-line text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                    {recapApril8Translate('newsletterTitle')}
                  </h3>
                  <div className="flex min-h-0 flex-col gap-8 pt-8 lg:flex-1 lg:justify-center">
                    <p className="w-full text-lg leading-relaxed text-white md:text-xl">
                      {recapApril8Translate('newsletterDescription')}
                    </p>
                    <div className="w-full">
                      <FormSection
                        locale={locale}
                        noCard
                        listId={mailchimpConfig.listIds.partners}
                        mailchimpFormId={mailchimpConfig.formIds.partners}
                        fields={{ firstName: false, city: false, phone: false, email: true }}
                        formClassName="gap-10 text-center [&_label]:mb-2 [&_label]:block [&_label]:text-center [&_label]:text-white [&_p]:text-center [&_p]:!text-white [&_input]:border-white/35 [&_input]:bg-white/10 [&_input]:text-white [&_input]:placeholder:text-white/45"
                        submitIntent={SubmitIntent.Subscribe}
                        submitButtonFill={Fill.Blue}
                        submitButtonSize={Size.LG}
                        submitButtonClassName="rounded-2xl font-bold uppercase tracking-[0.14em] text-sm shadow-[0_14px_44px_-6px_rgba(9,0,255,0.6)] ring-2 ring-white/25 hover:ring-white/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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

