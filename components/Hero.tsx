'use client';

import React, { useEffect, useRef } from 'react';
import { H1, P } from './Typography';
import { Wrapper } from './Wrapper';
import type { Locale } from '@/lib/types';

interface HeroProps {
  backgroundImage: string;
  locale: Locale;
  titleLine1?: string;
  titleLine2?: string;
  subtitle?: string;
}

export function Hero(props: HeroProps): React.ReactElement {
  const { backgroundImage } = props;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer) return;

    let raf = 0;
    const speed = 0.3;

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
    <div ref={containerRef} className="relative min-h-[50vh] md:min-h-screen overflow-hidden flex flex-col">
      <div
        ref={layerRef}
        className="absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          transformOrigin: 'center bottom',
          willChange: 'transform',
        }}
      />
      <div className="relative z-10 flex-1 flex items-start justify-start px-3 pt-16 md:pt-24 min-[600px]:px-4">
        <div className="relative inline-block hero-title-wrap">
          <h1 className="font-black text-left px-3 py-4 min-[600px]:px-8 uppercase whitespace-normal min-[600px]:whitespace-nowrap lg:whitespace-pre-line" style={{
            color: '#0900FF',
            fontFamily: 'var(--font-plus-jakarta), sans-serif',
            fontSize: '0.96em',
            lineHeight: '1',
            letterSpacing: '-0.02em',
          }}>
            {props.titleLine1 ?? 'FUND'}
            <span className="lg:hidden"> </span>
            <br className="hidden lg:block" />
            {props.titleLine2 ?? 'LONGEVITY'}
          </h1>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col items-end justify-end w-full px-3 pb-8 min-[600px]:px-4 lg:items-start" style={{ paddingTop: '4rem' }}>
        <p className="hero-subtitle-wrap text-white font-black w-auto whitespace-pre-line text-right ml-auto px-3 py-6 min-[600px]:px-8 lg:w-full lg:ml-0 lg:text-left" style={{ 
          fontFamily: 'var(--font-plus-jakarta), sans-serif',
          textShadow: '0 2px 4px rgba(0, 106, 167, 0.35), 0 4px 16px rgba(15, 23, 42, 0.5), 0 0 40px rgba(30, 58, 90, 0.25)',
          fontWeight: 900
        }}>
          {props.subtitle}
        </p>
      </div>
    </div>
  );
}

interface SecondaryHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
  backgroundPosition?: string;
}

export function SecondaryHero({
  title,
  subtitle,
  backgroundImage,
  height = '40vh',
  backgroundPosition = 'top center',
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

  return (
    <div
      ref={containerRef}
      className="relative flex overflow-hidden min-h-[40vh] md:min-h-[50vh]"
      style={height ? { minHeight: height } : undefined}
    >
      {backgroundImage && (
        <div
          ref={layerRef}
          className="absolute inset-0 z-0"
          aria-hidden
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: backgroundPosition,
            backgroundRepeat: 'no-repeat',
            willChange: 'transform',
            transformOrigin: backgroundPosition === 'bottom center' ? 'center bottom' : backgroundPosition === 'top center' ? 'center top' : backgroundPosition === 'top right' ? 'right top' : 'center center',
            transform: 'translate3d(0, 0, 0) scale(1.15)',
          }}
        />
      )}
      {!backgroundImage && (
        <div className="absolute inset-0 z-[1] bg-[#1e3a5f] bg-opacity-80" />
      )}
      {backgroundImage && (
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, transparent 15%)',
          }}
        />
      )}
      <div className={`absolute bottom-0 left-0 right-0 z-10 pb-4 md:pb-8 text-left ${backgroundImage ? 'text-white drop-shadow-lg' : 'text-white'}`}>
        <Wrapper>
          <H1 display className="mb-8 text-white whitespace-pre-line">{title}</H1>
          {subtitle && <P className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white opacity-90">{subtitle}</P>}
        </Wrapper>
      </div>
    </div>
  );
}

