import Image from 'next/image';
import type { Metadata } from 'next';
import { H1, H2, P } from '@/components/Typography';
import { Section } from '@/components/Section';
import { Wrapper } from '@/components/Wrapper';
import { CopyLinkButton } from '@/components/CopyLinkButton';
import { defaultOgImage, getOgLocale } from '@/lib/config';
import { getLocaleFromLang, LOCALES, Locale } from '@/lib/types';
import { globalTranslations } from '@/lib/translations';
import { cn } from '@/lib/utils';
import messagesData from '@/lib/messages.json';
import { getInspirationImages } from '@/lib/inspiration-images';
import { MEME_SIGN_LINES_BY_LOCALE, messagesTranslations } from './translations';

interface MessagesPageProps {
  params: Promise<{ lang: string }>;
}

type ImportantSign = {
  image: string;
  alt: string;
  downloadFile: string;
  layout: 'banner' | 'default';
};

const data = messagesData as {
  importantSigns: ImportantSign[];
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params }: MessagesPageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const title = globalTranslations.nav.messages[locale];
  const description =
    messagesTranslations.heroTitle[locale] ?? messagesTranslations.heroTitle[Locale.EN];
  const path = `/${lang}/messages/`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: Object.fromEntries(LOCALES.map((l) => [l, `/${l}/messages/`])),
    },
    openGraph: {
      title,
      description,
      url: path,
      locale: getOgLocale(lang),
      siteName: 'Fund Longevity',
      images: [{ url: defaultOgImage, alt: title }],
    },
    twitter: { title, description, images: [defaultOgImage] },
  };
}

function SignBlock({ sign, downloadLabel }: { sign: ImportantSign; downloadLabel: string }) {
  const isBanner = sign.layout === 'banner';
  return (
    <div className="flex flex-col gap-4 h-full rounded border border-gray-200 p-6 md:p-8">
      <div
        className={cn(
          'relative w-full overflow-hidden',
          isBanner ? 'aspect-[21/9] min-h-[140px]' : 'aspect-[4/5] max-h-[420px] mx-auto w-full',
        )}
      >
        <Image src={sign.image} alt={sign.alt} fill className="object-contain" sizes={isBanner ? '100vw' : '(max-width: 768px) 100vw, 33vw'} />
      </div>
      <a
        href={sign.downloadFile}
        download
        className="inline-flex items-center justify-center rounded-md bg-[#0900FF] text-white px-4 py-3 text-sm font-semibold hover:bg-[#0900FF]/90 transition-colors w-full sm:w-auto self-start"
      >
        {downloadLabel}
      </a>
    </div>
  );
}

function pick<T extends Record<Locale, string>>(m: T, locale: Locale): string {
  return m[locale] ?? m[Locale.EN];
}

export default async function MessagesPage({ params }: MessagesPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const inspirationImages = await getInspirationImages();
  const t = messagesTranslations;
  type MessagesCopyKey = Exclude<keyof typeof messagesTranslations, 'memePdfUrl'>;
  const L = (k: MessagesCopyKey) => pick(messagesTranslations[k] as Record<Locale, string>, locale);
  const bannerSigns = data.importantSigns.filter((s) => s.layout === 'banner');
  const defaultSigns = data.importantSigns.filter((s) => s.layout !== 'banner');
  const memeLines = MEME_SIGN_LINES_BY_LOCALE[locale] ?? MEME_SIGN_LINES_BY_LOCALE[Locale.EN];
  const memeMid = Math.ceil(memeLines.length / 2);
  const memeCol1 = memeLines.slice(0, memeMid);
  const memeCol2 = memeLines.slice(memeMid);
  const memeListClass =
    'list-disc list-outside space-y-3 pl-6 text-base md:text-lg text-black marker:text-xl';

  return (
    <div className="flex flex-col gap-8 md:gap-18 pt-16 md:pt-20">
      <Section>
        <Wrapper>
          <div>
            <H1 display className="mb-4 text-[#0900FF] whitespace-pre-line">
              {L('heroTitle')}
            </H1>
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <div className="pb-16 md:pb-24">
            <section id="important-signs" className="mb-20 md:mb-28">
              <H2 className="mb-3 md:mb-4">{L('sectionImportant')}</H2>
              <P className="mb-8 md:mb-10 max-w-2xl text-base md:text-lg text-gray-600">
                {L('sectionImportantSubtitle')}
              </P>
              <div className="flex flex-col gap-6 md:gap-8">
                {bannerSigns.map((sign, i) => (
                  <SignBlock key={`${sign.image}-b-${i}`} sign={sign} downloadLabel={L('download')} />
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {defaultSigns.map((sign, i) => (
                    <SignBlock key={`${sign.image}-d-${i}`} sign={sign} downloadLabel={L('download')} />
                  ))}
                </div>
              </div>
            </section>

            <section id="meme-signs" className={inspirationImages.length > 0 ? 'mb-20 md:mb-28' : ''}>
              <H2 className="mb-8">{L('sectionMeme')}</H2>
              <div className="flex flex-col" style={{ gap: 50 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1">
                  <ul className={memeListClass}>
                    {memeCol1.map((line, i) => (
                      <li key={`m1-${i}`}>{line}</li>
                    ))}
                  </ul>
                  <ul className={memeListClass}>
                    {memeCol2.map((line, i) => (
                      <li key={`m2-${i}`}>{line}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={t.memePdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border border-[#0900FF] px-4 py-4 text-center text-base md:text-lg font-semibold text-[#0900FF] hover:bg-[#0900FF]/5 transition-colors"
                >
                  {L('memePdfCta')}
                </a>
              </div>
            </section>

            {inspirationImages.length > 0 ? (
              <section id="inspiration" className="w-full min-w-0">
                <H2 className="mb-6 md:mb-8">{L('sectionInspiration')}</H2>
                <P className="text-gray-600 mb-10 md:mb-12 max-w-2xl text-base md:text-lg">{L('inspirationCredit')}</P>
                <div className="grid w-full min-w-0 grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                  {inspirationImages.map((item) => (
                    <figure key={item.src} className="m-0 w-full min-w-0 overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        sizes="(max-width: 767px) 100vw, calc(50vw - 3rem)"
                        className="h-auto w-full max-w-none rounded-lg object-contain shadow-sm"
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ))}
                </div>
              </section>
            ) : null}
          </div>
        </Wrapper>
      </Section>
      <CopyLinkButton locale={locale} />
    </div>
  );
}

