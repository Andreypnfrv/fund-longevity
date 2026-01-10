'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import { FlagEN, FlagSV } from '@/lib/icons';
import { getLocalizedPath } from '@/lib/paths';
import { Dropdown } from './Dropdown';

interface LanguageDropdownProps {
  currentLocale: Locale;
}

export function LanguageDropdown({ currentLocale }: LanguageDropdownProps): React.ReactElement {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: Locale): void => {
    if (newLocale === currentLocale) {
      return;
    }

    const pathWithoutLocale = pathname.replace(/^\/[^/]+/, '') || '/';
    const newPath = getLocalizedPath(pathWithoutLocale, newLocale);
    router.push(newPath);
  };

  const trigger = (
    <button
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"
      aria-label="Change language"
    >
      {currentLocale === 'en' ? <FlagEN /> : <FlagSV />}
      <span className="uppercase text-base font-medium">{currentLocale}</span>
      <Icon icon="lucide:chevron-down" width={16} height={16} />
    </button>
  );

  const items = [
    {
      label: (
        <>
          <FlagEN />
          <span className="text-base">English</span>
        </>
      ),
      onClick: () => switchLanguage(Locale.EN),
      isActive: currentLocale === Locale.EN,
    },
    {
      label: (
        <>
          <FlagSV />
          <span className="text-base">Svenska</span>
        </>
      ),
      onClick: () => switchLanguage(Locale.SV),
      isActive: currentLocale === Locale.SV,
    },
  ];

  return <Dropdown trigger={trigger} items={items} placement="bottom-end" />;
}

