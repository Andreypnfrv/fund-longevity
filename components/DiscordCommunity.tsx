import React from 'react';
import { Button } from './Button';
import { DiscordIcon } from '@/lib/icons';
import { Size } from '@/lib/theme';

interface DiscordCommunityProps {
  label: string;
  variant?: 'button' | 'link';
  size?: Size;
}

export function DiscordCommunity({ label, variant = 'button', size = Size.XL }: DiscordCommunityProps): React.ReactElement {
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
      <Button size={size} rightIcon="mdi:discord">{label}</Button>
    </a>
  );
}
