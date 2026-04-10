import React from 'react';
import { DiscordIcon } from '@/lib/icons';
import { discordUrl } from '@/lib/config';
import { cn } from '@/lib/utils';

interface DiscordCommunityProps {
  label: string;
  variant?: 'button' | 'link';
  className?: string;
}

export function DiscordCommunity({ label, variant = 'button', className }: DiscordCommunityProps): React.ReactElement {
  if (variant === 'link') {
    return (
      <a
        href={discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('inline-flex items-center gap-2 text-[#0900FF] hover:text-[#0900FF]/80', className)}
      >
        <DiscordIcon />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      href={discordUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'no-underline flex h-14 min-h-14 max-h-14 w-full min-w-0 items-center justify-center gap-2 rounded-lg !px-5 !py-0 text-center text-base font-semibold leading-none text-white transition-colors duration-200',
        className
      )}
      style={{ backgroundColor: '#0900FF', boxShadow: '0 4px 6px rgba(9, 0, 255, 0.3)' }}
    >
      <span className="whitespace-nowrap">{label}</span>
      <DiscordIcon />
    </a>
  );
}
