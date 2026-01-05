import React, { type ReactNode } from 'react';
import { H1, P } from './Typography';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  children,
  variant = 'primary',
}: HeroProps): React.ReactElement {
  const heightClass = variant === 'primary' ? 'min-h-screen' : 'min-h-[60vh]';
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div
      className={`relative ${heightClass} flex items-center justify-center`}
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-blue-600 bg-opacity-80" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <H1 className="mb-4 text-white">{title}</H1>
        {subtitle && <P className="text-lg text-white opacity-90">{subtitle}</P>}
        {children}
      </div>
    </div>
  );
}

