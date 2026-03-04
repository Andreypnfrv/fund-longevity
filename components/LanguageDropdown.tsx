'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useRouter, usePathname } from 'next/navigation';
import { Locale } from '@/lib/types';
import { FlagEN, FlagSV, FlagDE, FlagFR, FlagES, FlagIT, FlagNL } from '@/lib/icons';
import { getLocalizedPath } from '@/lib/paths';
import { Dropdown } from './Dropdown';

interface LanguageDropdownProps {
  currentLocale: Locale;
  triggerClassName?: string;
  triggerStyle?: React.CSSProperties;
  triggerWrapperClassName?: string;
}

export function LanguageDropdown({ currentLocale, triggerClassName, triggerStyle, triggerWrapperClassName }: LanguageDropdownProps): React.ReactElement {
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

  const localeFlags: Record<Locale, React.ReactNode> = {
    [Locale.EN]: <FlagEN />,
    [Locale.SV]: <FlagSV />,
    [Locale.DE]: <FlagDE />,
    [Locale.FR]: <FlagFR />,
    [Locale.ES]: <FlagES />,
    [Locale.IT]: <FlagIT />,
    [Locale.NL]: <FlagNL />,
  };
  const localeLabels: Record<Locale, string> = {
    [Locale.EN]: 'English',
    [Locale.SV]: 'Svenska',
    [Locale.DE]: 'Deutsch',
    [Locale.FR]: 'Français',
    [Locale.ES]: 'Español',
    [Locale.IT]: 'Italiano',
    [Locale.NL]: 'Nederlands',
  };

  const trigger = (
    <button
      className={triggerClassName ?? "flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-colors"}
      style={triggerStyle}
      aria-label="Change language"
    >
      {localeFlags[currentLocale]}
      <Icon icon="lucide:chevron-down" width={16} height={16} />
    </button>
  );

  const items = (Object.values(Locale) as Locale[]).map((loc) => ({
    label: (
      <>
        {localeFlags[loc]}
        <span className="text-base">{localeLabels[loc]}</span>
      </>
    ),
    onClick: () => switchLanguage(loc),
    isActive: currentLocale === loc,
  }));

  return (
    <Dropdown
      trigger={trigger}
      items={items}
      placement="bottom-end"
      {...(triggerWrapperClassName !== undefined && { triggerWrapperClassName })}
    />
  );
}

