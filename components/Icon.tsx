import React from 'react';
import { Icon as IconifyIcon } from '@iconify/react';

type IconProps = {
  icon: string;
  className?: string;
  width?: number | string;
  height?: number | string;
};

export function Icon({ icon, className, width, height }: IconProps): React.ReactElement {
  return <IconifyIcon icon={icon} className={className} width={width} height={height} />;
}

