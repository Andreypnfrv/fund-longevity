import React from 'react';
import { DiscordIcon } from '@/lib/icons';

interface DiscordCommunityProps {
  label: string;
  variant?: 'button' | 'link';
}

export function DiscordCommunity({ label, variant = 'button' }: DiscordCommunityProps): React.ReactElement {
  const discordUrl = process.env['DISCORD_URL'] ?? '';
  
  if (variant === 'link') {
    return (
      <a
        href={discordUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
      >
        <DiscordIcon />
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a href={discordUrl} target="_blank" rel="noopener noreferrer" className="no-underline">
      <div className="inline-flex items-center gap-2 text-white rounded-lg font-semibold px-8 py-4 text-lg md:text-xl transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer" style={{ backgroundColor: 'rgb(124, 58, 237)', boxShadow: '0 4px 6px rgba(124, 58, 237, 0.3)' }}>
        <span>{label}</span>
        <DiscordIcon />
      </div>
    </a>
  );
}
