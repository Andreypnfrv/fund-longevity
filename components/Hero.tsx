'use client';

import React, { useEffect, useRef } from 'react';
import { H1, P } from './Typography';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({
  backgroundImage,
}: HeroProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer) return;

    let raf = 0;
    const speed = 0.25;

    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const y = (window.scrollY - containerTop) * speed;
      layer.style.transform = `translate3d(0, ${Math.round(y)}px, 0) scale(1.15)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-hidden">
      <div
        ref={layerRef}
        className="absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          willChange: 'transform',
          transformOrigin: 'center bottom',
          transform: 'translate3d(0, 0, 0) scale(1.15)',
        }}
      />
    </div>
  );
}

interface SecondaryHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function SecondaryHero({
  title,
  subtitle,
  backgroundImage,
}: SecondaryHeroProps): React.ReactElement {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!backgroundImage) return;

    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer) return;

    let raf = 0;
    const speed = 0.2;

    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const containerTop = rect.top + window.scrollY;
      const y = (window.scrollY - containerTop) * speed;
      layer.style.transform = `translate3d(0, ${Math.round(y)}px, 0) scale(1.15)`;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [backgroundImage]);

  const backgroundStyle = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }
    : {};

  return (
    <div
      ref={containerRef}
      className="relative min-h-[40vh] flex items-center justify-center"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 bg-blue-600 bg-opacity-80" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <H1 display className="mb-4 text-white whitespace-pre-line">{title}</H1>
        {subtitle && <P className="text-xl text-white opacity-90">{subtitle}</P>}
      </div>
    </div>
  );
}

