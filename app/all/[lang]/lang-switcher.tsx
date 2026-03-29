'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';
import { Locale } from '@/lib/types';
import { FlagEN, FlagSV, FlagDE, FlagFR, FlagES, FlagIT, FlagNL, FlagCS } from '@/lib/icons';
import { Dropdown } from '@/components/Dropdown';

interface AllLangSwitcherProps {
  currentLocale: Locale;
}

const localeFlags: Record<Locale, React.ReactNode> = {
  [Locale.EN]: <FlagEN />,
  [Locale.SV]: <FlagSV />,
  [Locale.DE]: <FlagDE />,
  [Locale.FR]: <FlagFR />,
  [Locale.ES]: <FlagES />,
  [Locale.IT]: <FlagIT />,
  [Locale.NL]: <FlagNL />,
  [Locale.CS]: <FlagCS />,
};

const localeLabels: Record<Locale, string> = {
  [Locale.EN]: 'English',
  [Locale.SV]: 'Svenska',
  [Locale.DE]: 'Deutsch',
  [Locale.FR]: 'Français',
  [Locale.ES]: 'Español',
  [Locale.IT]: 'Italiano',
  [Locale.NL]: 'Nederlands',
  [Locale.CS]: 'Čeština',
};

export function AllLangSwitcher({ currentLocale }: AllLangSwitcherProps): React.ReactElement {
  const router = useRouter();

  const switchLanguage = (newLocale: Locale): void => {
    if (newLocale !== currentLocale) {
      router.push(`/all/${newLocale}`);
    }
  };

  const trigger = (
    <button
      className="flex items-center gap-2 px-3 py-2 rounded-md bg-white/90 hover:bg-white shadow transition-colors"
      // i18n-allow
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
    <div className="fixed top-4 right-4 z-50">
      <Dropdown trigger={trigger} items={items} placement="bottom-end" />
    </div>
  );
}

