'use client';

import React, { useEffect, useRef } from 'react';
import { H1, P } from './Typography';
import { Wrapper } from './Wrapper';
import { Button } from './Button';
import { Link } from './Link';
import { Size, Fill } from '@/lib/theme';
import type { Locale } from '@/lib/types';
import { globalTranslations } from '@/lib/translations';
import { useTranslations } from '@/lib/useTranslations';

interface HeroProps {
  backgroundImage: string;
  locale: Locale;
}

export function Hero({
  backgroundImage,
  locale,
}: HeroProps): React.ReactElement {
  const { translate: translateCommon } = useTranslations(globalTranslations.common, locale);

  return (
    <div className="relative min-h-[50vh] md:min-h-screen overflow-hidden flex flex-col">
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          transformOrigin: 'center bottom',
          transform: 'scale(1.15)',
        }}
      />
      <div className="relative z-10 flex-1 flex items-start justify-center px-4 pt-16 md:pt-24">
        <div className="relative inline-block hero-title-wrap">
          <h1 className="text-white font-black text-center px-8 py-4 relative z-10 uppercase whitespace-nowrap max-[1100px]:whitespace-normal" style={{ 
            fontSize: 'inherit',
            lineHeight: '1',
            textShadow: '0 8px 16px rgba(0, 0, 0, 0.9), 0 4px 8px rgba(0, 0, 0, 0.9)',
            letterSpacing: '-0.02em',
          }}>
            FUND<br className="hidden max-[1100px]:block" /> LONGEVITY
          </h1>
          <h1 className="absolute top-0 left-0 font-black text-center px-8 py-4 uppercase whitespace-nowrap max-[1100px]:whitespace-normal" style={{ 
            fontSize: 'inherit', 
            lineHeight: '1',
            color: 'rgb(37, 99, 235)',
            transform: 'translate(8px, 4px)',
            zIndex: 1,
            mixBlendMode: 'screen',
            letterSpacing: '-0.02em',
          }}>
            FUND<br className="hidden max-[1100px]:block" /> LONGEVITY
          </h1>
          <h1 className="absolute top-0 left-0 font-black text-center px-8 py-4 uppercase whitespace-nowrap max-[1100px]:whitespace-normal" style={{ 
            fontSize: 'inherit', 
            lineHeight: '1',
            color: 'rgb(124, 58, 237)',
            transform: 'translate(-6px, 5px)',
            zIndex: 2,
            mixBlendMode: 'screen',
            letterSpacing: '-0.02em',
          }}>
            FUND<br className="hidden max-[1100px]:block" /> LONGEVITY
          </h1>
          <h1 className="absolute top-0 left-0 font-black text-center px-8 py-4 uppercase whitespace-nowrap max-[1100px]:whitespace-normal" style={{ 
            fontSize: 'inherit', 
            lineHeight: '1',
            color: 'rgba(34, 197, 94, 0.8)',
            transform: 'translate(-4px, 3px)',
            zIndex: 3,
            mixBlendMode: 'screen',
            letterSpacing: '-0.02em',
          }}>
            FUND<br className="hidden max-[1100px]:block" /> LONGEVITY
          </h1>
        </div>
      </div>
      <div className="relative z-10 flex-1 flex flex-col items-center justify-end w-full px-4 pb-16 gap-9" style={{ paddingTop: '4rem' }}>
        <p className="text-white font-bold w-full whitespace-pre-line text-center px-8 py-6" style={{ 
          fontSize: 'clamp(1.2rem, 2vw + 1rem, 3rem)',
          textShadow: '0 0 20px rgba(59, 130, 246, 0.2), 0 0 40px rgba(59, 130, 246, 0.15), 0 4px 8px rgba(0, 0, 0, 0.9), 2px 2px 4px rgba(59, 130, 246, 0.2)',
          WebkitTextStroke: '1px rgba(59, 130, 246, 0.2)',
          fontWeight: '700'
        }}>
          Aging is by far the largest cause of suffering, death and sickness.{'\n'}It's a humanitarian emergency - that can and should be solved.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/about#localLeads" locale={locale}>
            <Button 
              size={Size.XXL}
              fill={Fill.Ghost}
              className="hover:scale-105 transition-all duration-300 rounded-full"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                paddingLeft: 'clamp(2.5rem, 5vw, 4rem)',
                paddingRight: 'clamp(2.5rem, 5vw, 4rem)',
                paddingTop: 'clamp(1.25rem, 2.5vw, 2rem)',
                paddingBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                height: 'auto',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'white',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              }}
            >
              Join us in your city
            </Button>
          </Link>
          <Link href="/why" locale={locale}>
            <Button 
              size={Size.XXL}
              fill={Fill.Ghost}
              className="hover:scale-105 transition-all duration-300 rounded-full"
              style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                paddingLeft: 'clamp(2.5rem, 5vw, 4rem)',
                paddingRight: 'clamp(2.5rem, 5vw, 4rem)',
                paddingTop: 'clamp(1.25rem, 2.5vw, 2rem)',
                paddingBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                height: 'auto',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: 'none',
                color: 'white',
                textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              }}
            >
              {translateCommon('learnMore')}
            </Button>
          </Link>
        </div>
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
        <div className="absolute inset-0 z-[1] bg-blue-600 bg-opacity-80" />
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
          <H1 display className="mb-4 text-white whitespace-pre-line">{title}</H1>
          {subtitle && <P className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white opacity-90">{subtitle}</P>}
        </Wrapper>
      </div>
    </div>
  );
}

