import { redirect } from 'next/navigation';
import { LOCALES } from '@/lib/types';

interface AllPageProps {
  params: Promise<{ lang: string }>;
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ lang: locale }));
}

export default async function AllPage({ params }: AllPageProps): Promise<never> {
  const { lang } = await params;
  redirect(`/${lang}`);
}

