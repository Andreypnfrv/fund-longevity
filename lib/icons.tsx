import React from 'react';
import { Icon } from '@iconify/react';

export function FlagEN(): React.ReactElement {
  return <Icon icon="flag:us-4x3" width={24} height={24} />;
}

export function FlagSV(): React.ReactElement {
  return <Icon icon="flag:se-4x3" width={24} height={24} />;
}

type DiscordIconProps = {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  className?: string;
};

export function DiscordIcon({
  size = 24,
  width,
  height,
  className,
}: DiscordIconProps): React.ReactElement {
  return (
    <Icon
      icon="mdi:discord"
      width={width ?? size}
      height={height ?? size}
      className={className}
    />
  );
}

