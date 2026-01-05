'use client';

import React from 'react';

import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import type { Locale } from '@/lib/types';
import { FlagEN, FlagSV } from '@/lib/icons';
import { Overlay } from './Overlay';

interface LanguageDropdownProps {
  currentLocale: Locale;
}

export function LanguageDropdown({ currentLocale }: LanguageDropdownProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const switchLanguage = (newLocale: Locale): void => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, '') || '/';
    const newPath = `/${newLocale}${pathWithoutLocale}`;
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Change language"
      >
        {currentLocale === 'en' ? <FlagEN /> : <FlagSV />}
        <span className="uppercase font-inter text-sm font-medium">{currentLocale}</span>
      </button>

      {isOpen && (
        <Overlay isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[120px] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => switchLanguage(Locale.EN)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                currentLocale === Locale.EN ? 'bg-blue-50' : ''
              }`}
            >
              <FlagEN />
              <span className="font-inter text-sm">English</span>
            </button>
            <button
              onClick={() => switchLanguage(Locale.SV)}
              className={`w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                currentLocale === Locale.SV ? 'bg-blue-50' : ''
              }`}
            >
              <FlagSV />
              <span className="font-inter text-sm">Svenska</span>
            </button>
          </div>
        </Overlay>
      )}
    </div>
  );
}

