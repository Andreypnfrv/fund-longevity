'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';

import type { Locale } from '@/lib/types';
import { Logo } from './Logo';
import { Link } from './Link';
import { Button } from './Button';
import { LanguageDropdown } from './LanguageDropdown';
import { Wrapper } from './Wrapper';
import { Overlay } from './Overlay';
import { Icon } from './Icon';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { Fill, Size, navigationColors } from '@/lib/theme';
import { cn } from '@/lib/utils';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.nav, locale);
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathWithoutLocale = pathname.replace(/^\/[^/]+/, '') || '/';
  const isHomePage = pathWithoutLocale === '/' || pathWithoutLocale === '';

  const isActive = (path: string): boolean => {
    const normalizedPath = pathWithoutLocale.endsWith('/') ? pathWithoutLocale.slice(0, -1) : pathWithoutLocale;
    const normalizedTarget = path === '/' ? '/' : path;
    return normalizedPath === normalizedTarget;
  };

  const navLinks = [
    { href: '/', key: 'home' },
    { href: '/why', key: 'why' },
    { href: '/demonstrations', key: 'demonstrations' },
    { href: '/asks', key: 'asks' },
    { href: '/join', key: 'join' },
    { href: '/about', key: 'about' },
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header 
        className={cn(
          `flex flex-row justify-center items-center z-40`,
          isHomePage ? 'absolute top-0 left-0 right-0 pt-4' : 'sticky top-0 bg-white'
        )}
        style={{
          height: isHomePage ? 'auto' : 'auto',
          minHeight: isHomePage ? 'auto' : '80px',
        }}
      >
        <Wrapper className={isHomePage ? 'h-full' : 'h-full'}>
          <div 
            className={cn(
              "relative w-full h-full flex items-center",
              isHomePage ? "rounded-full px-6 py-3" : "",
              !isHomePage && "border-b border-gray-300"
            )}
            style={isHomePage ? {
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              height: '64px',
            } : {}}
          >
            <div 
              className={cn(
                "flex flex-row items-center w-full h-full",
                isHomePage ? "justify-center" : "justify-between gap-4 min-w-0"
              )}
            >
                {!isHomePage && (
                  <Link href="/" locale={locale} className="flex-shrink-0">
                    <Logo />
                  </Link>
                )}
              
              <nav className={cn(
                "hidden lg:flex items-center min-w-0 flex-1 justify-center",
                isHomePage ? "gap-8 text-white" : "gap-2"
              )}>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} locale={locale} className="no-underline">
                    <Button 
                      fill={Fill.Ghost} 
                      size={isHomePage ? Size.XXL : Size.XL}
                      className={cn(
                        isActive(link.href) ? navigationColors.active : navigationColors.inactive,
                        isHomePage && "text-white hover:text-white hover:bg-white/20",
                        isHomePage && isActive(link.href) && "bg-white/30 text-white",
                        isHomePage && "overflow-hidden"
                      )}
                      style={isHomePage ? {
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                        color: 'white',
                        fontSize: '1.5rem',
                        paddingLeft: '2.5rem',
                        paddingRight: '2.5rem',
                        paddingTop: '0.75rem',
                        paddingBottom: '0.75rem',
                        height: '56px',
                        maxHeight: '56px',
                      } : {}}
                    >
                      {translate(link.key as keyof typeof globalTranslations.nav)}
                    </Button>
                  </Link>
                ))}
              </nav>

              {!isHomePage && (
                <div className="flex items-center gap-2 lg:hidden">
                  <button
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    <Icon icon="lucide:menu" width={24} height={24} />
                  </button>
                  <LanguageDropdown currentLocale={locale} />
                </div>
              )}
              {!isHomePage && (
                <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
                  <LanguageDropdown currentLocale={locale} />
                </div>
              )}
              {isHomePage && (
                <div className="flex items-center gap-2 absolute right-6 lg:hidden">
                  <button
                    className="p-2 rounded-md hover:bg-white/20 transition-colors text-white"
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                    style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}
                  >
                    <Icon icon="lucide:menu" width={24} height={24} />
                  </button>
                  <LanguageDropdown currentLocale={locale} />
                </div>
              )}
              {isHomePage && (
                <div className="hidden lg:flex items-center gap-2 absolute right-6">
                  <LanguageDropdown currentLocale={locale} />
                </div>
              )}
            </div>
          </div>
        </Wrapper>
      </header>

      <Overlay isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
        <div
          className="fixed inset-0 bg-white shadow-xl z-50 overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <Logo />
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <Icon icon="lucide:x" width={24} height={24} />
            </button>
          </div>
          <nav className="flex flex-col flex-1 items-center justify-center p-4 gap-2">
            {navLinks.map((link) => (
              <div key={link.href} onClick={handleLinkClick}>
                <Link
                  href={link.href}
                  locale={locale}
                  className="no-underline"
                >
                  <Button
                    fill={Fill.Ghost}
                    size={Size.LG}
                    className={cn(
                      'justify-center',
                      isActive(link.href) ? navigationColors.active : navigationColors.inactive
                    )}
                  >
                    {translate(link.key as keyof typeof globalTranslations.nav)}
                  </Button>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </Overlay>
    </>
  );
}

