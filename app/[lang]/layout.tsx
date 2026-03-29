import { redirect } from 'next/navigation';

interface LayoutProps {
  children: never;
  params: Promise<{ lang: string }>;
}

export default async function LangLayout({ params }: LayoutProps): Promise<never> {
  const { lang } = await params;
  redirect(`/all/${lang}`);
}


