import { LOCALES } from '@/lib/types';
import HomePage from '@/app/[lang]/page';
import WhyPage from '@/app/[lang]/why/page';
import AsksPage from '@/app/[lang]/asks/page';
import MessagesPage from '@/app/[lang]/messages/page';
import AboutPage from '@/app/[lang]/about/page';

interface AllPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export default async function AllPage({ params }: AllPageProps): Promise<JSX.Element> {
  const { lang } = await params;
  const pageParams = Promise.resolve({ lang });

  return (
    <div>
      <section id="home">
        <HomePage params={pageParams} />
      </section>
      <section id="why">
        <WhyPage params={pageParams} />
      </section>
      <section id="asks">
        <AsksPage params={pageParams} />
      </section>
      <section id="messages">
        <MessagesPage params={pageParams} />
      </section>
      <section id="about">
        <AboutPage params={pageParams} />
      </section>
    </div>
  );
}

