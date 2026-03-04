import React from 'react';
import { Icon } from '@iconify/react';

export function FlagEN(): React.ReactElement {
  return <Icon icon="flag:gb-4x3" width={24} height={24} />;
}

export function FlagSV(): React.ReactElement {
  return <Icon icon="flag:se-4x3" width={24} height={24} />;
}

export function FlagDE(): React.ReactElement {
  return <Icon icon="flag:de-4x3" width={24} height={24} />;
}

export function FlagFR(): React.ReactElement {
  return <Icon icon="flag:fr-4x3" width={24} height={24} />;
}

export function FlagES(): React.ReactElement {
  return <Icon icon="flag:es-4x3" width={24} height={24} />;
}

export function FlagIT(): React.ReactElement {
  return <Icon icon="flag:it-4x3" width={24} height={24} />;
}

export function FlagNL(): React.ReactElement {
  return <Icon icon="flag:nl-4x3" width={24} height={24} />;
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

