import type { ReactNode } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { NavigationProvider } from '@/components/NavigationProvider';
import { getLocaleFromLang } from '@/lib/types';
import '../globals.css';

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LayoutProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  return (
    <NavigationProvider locale={locale}>
      <div className="flex flex-col min-h-screen">
        <Header locale={locale} />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
      </div>
    </NavigationProvider>
  );
}


