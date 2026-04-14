'use client';

import React, { useState } from 'react';
import type { Locale } from '@/lib/types';
import { useTranslations } from '@/lib/useTranslations';
import { globalTranslations } from '@/lib/translations';
import { Icon } from './Icon';

export function CopyLinkButton({ locale }: { locale: Locale }): React.ReactElement {
  const { translate } = useTranslations(globalTranslations.common, locale);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50 group">
      <button
        onClick={handleCopy}
        className="w-14 h-14 rounded-full bg-black/30 backdrop-blur-md border border-white/30 text-white flex items-center justify-center hover:bg-black/40 transition-all duration-200 shadow-lg"
        aria-label={translate('copyPageLink')}
      >
        {copied ? (
          <Icon icon="lucide:check" width={24} height={24} />
        ) : (
          <Icon icon="lucide:link" width={24} height={24} />
        )}
      </button>
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-black/80 backdrop-blur-sm text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {copied ? translate('pageLinkCopied') : translate('copyPageLink')}
      </div>
    </div>
  );
}

export function CopyTextButton({
  textToCopy,
  idleLabel,
  copiedLabel,
  className,
}: {
  textToCopy: string;
  idleLabel: string;
  copiedLabel: string;
  className?: string;
}): React.ReactElement {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  };

  return (
    <button type="button" onClick={handleCopy} className={className} aria-label={idleLabel}>
      {copied ? copiedLabel : idleLabel}
    </button>
  );
}
