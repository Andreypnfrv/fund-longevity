import type { ReactNode } from 'react';
import Image from 'next/image';
import { H1, H3, P } from '@/components/Typography';
import { Card } from '@/components/Card';
import { Section } from '@/components/Section';
import { HowCanYouHelp } from '@/components/HowCanYouHelp';
import { Wrapper } from '@/components/Wrapper';
import { CopyLinkButton } from '@/components/CopyLinkButton';
import { getLocaleFromLang, LOCALES } from '@/lib/types';
import { asksContentEn } from './translations';

interface AsksPageProps {
  params: Promise<{ lang: string }>;
}

function CheckIcon(): React.ReactElement {
  return (
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" aria-hidden className="text-[#0900FF]">
      <path
        d="M1 5l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckboxRow({ children }: { children: ReactNode }): React.ReactElement {
  return (
    <li className="mx-auto flex w-full max-w-3xl flex-row items-start gap-4 md:gap-6">
      <div className="flex w-10 shrink-0 justify-center pt-1.5" aria-hidden>
        <span className="flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-[3px] border-2 border-[#0900FF] bg-[#0900FF]/[0.06]">
          <CheckIcon />
        </span>
      </div>
      <span className="min-w-0 flex-1 text-left text-base leading-relaxed text-gray-900 md:text-lg">
        {children}
      </span>
    </li>
  );
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export default async function AsksPage({ params }: AsksPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);
  const t = asksContentEn;

  return (
    <div>
      <Section style={{ paddingTop: '4rem', paddingBottom: '2.5rem' }}>
        <Wrapper className="flex flex-col items-center">
          <div className="flex w-full max-w-4xl flex-col items-center px-3 text-center">
            <H1 display className="!mb-4 w-full !text-center md:!mb-6 text-[#0900FF]">
              {t.heroTitle}
            </H1>
            <P
              className="!mb-0 w-full max-w-3xl !text-center text-lg font-semibold leading-snug text-gray-800 md:text-2xl lg:text-3xl xl:text-4xl"
              style={{ fontFamily: 'var(--font-plus-jakarta), sans-serif' }}
            >
              {t.heroSubtitle}
            </P>
          </div>
        </Wrapper>
      </Section>

      <Section style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
        <div>
          <Wrapper>
            <div className="flex w-full justify-center">
              <div className="mx-auto mb-16 w-full max-w-4xl space-y-12 md:space-y-20">
                <Card className="border-black/90 shadow-lg md:p-10 lg:p-12 text-center [&_p]:text-center [&_h3]:text-center">
                  <P className="!mb-8 !text-center !text-lg font-bold !leading-snug !text-gray-900 md:!text-xl lg:!text-2xl">
                    {t.lead}
                  </P>

                  <div className="mx-auto mb-8 max-w-3xl rounded-xl border border-black/10 bg-gradient-to-br from-gray-50/80 to-white p-5 text-center md:p-7">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#0900FF]">
                      {t.objectivesLabel}
                    </p>
                    <P className="!mb-0 text-gray-800 !text-center">{t.objectives}</P>
                  </div>

                  <div className="mx-auto max-w-3xl rounded-xl border border-black/10 bg-white p-5 text-center md:p-7">
                    <p className="mb-2 text-sm font-bold uppercase tracking-wide text-[#0900FF]">
                      {t.ownershipLabel}
                    </p>
                    <P className="!mb-0 text-gray-800 !text-center">{t.ownership}</P>
                  </div>

                  <div className="flow-root space-y-10 pt-20 md:space-y-12 md:pt-28">
                    {t.sections.map((section, index) => (
                      <div
                        key={index}
                        className="border-t border-black/10 py-10 md:py-12 first:border-t-0 first:pt-0"
                      >
                        <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 md:gap-10">
                          <div className="flex flex-row items-start gap-4 md:gap-6">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#0900FF] bg-white text-sm font-bold text-[#0900FF]">
                              {index + 1}
                            </div>
                            <H3 className="!mb-0 min-w-0 flex-1 !text-left !text-lg md:!text-xl lg:!text-2xl !leading-snug font-bold text-gray-900 pt-1.5">
                              {section.title}
                            </H3>
                          </div>
                          <ul className="w-full list-none space-y-4 pl-0 text-left" role="list">
                            {section.bullets.map((bullet, i) => (
                              <CheckboxRow key={i}>{bullet}</CheckboxRow>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </Wrapper>
        </div>
      </Section>

      <Section style={{ paddingTop: 0 }}>
        <Wrapper>
          <div className="relative w-full min-h-[240px] max-h-[78vh] aspect-[16/10] overflow-hidden rounded-xl">
            <Image
              src="/NASDAQ.jpg"
              alt="Fund Longevity rally at Nasdaq, Times Square"
              fill
              className="object-cover"
              style={{ objectPosition: 'right top' }}
              sizes="(max-width: 600px) calc(100vw - 1.5rem), (max-width: 1280px) calc(100vw - 6rem), 1152px"
              priority
            />
          </div>
        </Wrapper>
      </Section>

      <Section>
        <Wrapper>
          <HowCanYouHelp locale={locale} />
        </Wrapper>
      </Section>
      <CopyLinkButton />
    </div>
  );
}
