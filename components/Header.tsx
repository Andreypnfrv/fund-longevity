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
    { href: '/asks', key: 'asks' },
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
        <Wrapper className="h-full !px-3 min-[600px]:!px-12">
          <div 
            className={cn(
              "relative w-full h-full flex items-center",
              !isHomePage && "border-b border-gray-300"
            )}
            style={{ height: '64px' }}
          >
            <div className="flex flex-row items-center w-full h-full min-w-0 flex overflow-x-auto lg:justify-evenly lg:overflow-visible">
              <nav className="flex items-center h-full gap-0 flex-1 min-w-0 overflow-x-auto lg:overflow-visible lg:justify-evenly">
                {navLinks.map((link) => (
                  <div key={link.href} className="flex-shrink-0 lg:flex-1 lg:flex-shrink flex items-center h-full">
                    <Link href={link.href} locale={locale} className="no-underline w-full h-full flex items-center">
                      <Button 
                        fill={Fill.Ghost} 
                        size={Size.XXL}
                        className={cn(
                          "w-full h-full text-left justify-start rounded-none whitespace-nowrap",
                          "hover:bg-[#1e3a5f]/10",
                          isActive(link.href) && "bg-[#1e3a5f]/15"
                        )}
                        style={{
                          color: '#1e3a5f',
                          fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                          height: '56px',
                          maxHeight: '56px',
                          paddingLeft: 10,
                          paddingRight: 10,
                        }}
                      >
                        {translate(link.key as keyof typeof globalTranslations.nav)}
                      </Button>
                    </Link>
                  </div>
                ))}
              </nav>
              <div className="flex-shrink-0 flex items-center h-full min-w-[4rem]">
                <LanguageDropdown
                  currentLocale={locale}
                  triggerWrapperClassName="h-full w-full min-w-[4rem]"
                  triggerClassName="w-full h-full flex items-center gap-2 text-left justify-start rounded-none hover:bg-[#1e3a5f]/10 transition-colors font-semibold bg-transparent border-0 cursor-pointer"
                  triggerStyle={{
                    color: '#1e3a5f',
                    fontSize: 'clamp(0.875rem, 2vw, 1.5rem)',
                    height: '56px',
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                />
              </div>
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

