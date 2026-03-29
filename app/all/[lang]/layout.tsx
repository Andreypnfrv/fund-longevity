import type { ReactNode } from 'react';
import { NavigationProvider } from '@/components/NavigationProvider';
import { getLocaleFromLang } from '@/lib/types';
import { AllLangSwitcher } from './lang-switcher';

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function AllLayout({ children, params }: LayoutProps): Promise<JSX.Element> {
  const { lang } = await params;
  const locale = getLocaleFromLang(lang);

  return (
    <NavigationProvider locale={locale}>
      <AllLangSwitcher currentLocale={locale} />
      <main>{children}</main>
    </NavigationProvider>
  );
}

