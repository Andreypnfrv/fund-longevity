import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Locale } from '@/lib/types';

const locales = [Locale.EN, Locale.SV];

export function middleware(request: NextRequest): NextResponse {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getLocale(request) ?? Locale.EN;
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

function getLocale(request: NextRequest): Locale | null {
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage?.includes('sv')) {
    return Locale.SV;
  }
  return null;
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};


