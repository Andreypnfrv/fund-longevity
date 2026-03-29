import { redirect } from 'next/navigation';
import { Locale } from '@/lib/types';

export default function RootPage(): never {
  redirect(`/all/${Locale.EN}`);
}
