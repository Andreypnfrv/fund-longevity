import React from 'react';
import { DiscordIcon } from '@/lib/icons';
import { discordUrl } from '@/lib/config';

interface DiscordCommunityProps {
  label: string;
  variant?: 'button' | 'link';
}

export function DiscordCommunity({ label, variant = 'button' }: DiscordCommunityProps): React.ReactElement {
  
  if (variant === 'link') {
    return (
      <a
        href={discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#0900FF] hover:text-[#0900FF]/80"
      >
        <DiscordIcon />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className="inline-flex items-center gap-2 text-white rounded-lg font-semibold px-8 py-4 text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: '#0900FF', boxShadow: '0 4px 6px rgba(9, 0, 255, 0.3)' }}>
        <span>{label}</span>
        <DiscordIcon />
      </div>
    </a>
  );
}
