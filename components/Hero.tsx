import React, { type ReactNode } from 'react';
import { H1, P } from './Typography';

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function Hero({
  title,
  subtitle,
  backgroundImage,
  children,
}: HeroProps): React.ReactElement {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={backgroundStyle}
    >
      {!backgroundImage && <div className="absolute inset-0 bg-blue-600 bg-opacity-80" />}
      <div className="absolute bottom-0 left-0 bg-blue-600 p-8 md:p-12 lg:p-16 z-10" style={{ marginBottom: '240px', marginLeft: '120px' }}>
        <H1 display className="text-white text-4xl md:text-6xl lg:text-8xl font-bold mb-4">{title}</H1>
        {subtitle && <P className="text-white text-xl md:text-3xl lg:text-4xl font-medium">{subtitle}</P>}
      </div>
      {children}
    </div>
  );
}

interface SecondaryHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
}

export function SecondaryHero({
  title,
  subtitle,
  backgroundImage,
  children,
}: SecondaryHeroProps): React.ReactElement {
  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div
      className="relative min-h-[40vh] flex items-center justify-center"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-blue-600 bg-opacity-80" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <H1 display className="mb-4 text-white whitespace-pre-line">{title}</H1>
        {subtitle && <P className="text-xl text-white opacity-90">{subtitle}</P>}
        {children}
      </div>
    </div>
  );
}

