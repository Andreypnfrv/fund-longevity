'use client';

import React, { useRef, useEffect } from 'react';

interface GenerationsHeroProps {
  images: [string, string, string];
}

export function GenerationsHero({
  images,
}: GenerationsHeroProps): React.ReactElement {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const currentIndexRef = useRef(1);
  const isTransitioningRef = useRef(false);

  const extendedImages = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: window.innerWidth,
        behavior: 'auto',
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTransitioningRef.current || !scrollContainerRef.current) return;
      
      isTransitioningRef.current = true;
      currentIndexRef.current += 1;
      
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: currentIndexRef.current * window.innerWidth,
          behavior: 'smooth',
        });
      }
      
      setTimeout(() => {
        isTransitioningRef.current = false;
        if (scrollContainerRef.current && currentIndexRef.current >= extendedImages.length - 1) {
          scrollContainerRef.current.scrollTo({
            left: window.innerWidth,
            behavior: 'auto',
          });
          currentIndexRef.current = 1;
        }
      }, 800);
    }, 5000);

    return () => clearInterval(interval);
  }, [extendedImages.length]);

  return (
    <div className="relative w-full h-[min(50vh,400px)] md:h-[80dvh]">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: 'x mandatory',
          height: '100%',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center flex items-center justify-center"
            style={{
              width: '100vw',
              height: '100%',
              paddingLeft: 'clamp(1rem, 4vw, 5rem)',
              paddingRight: 'clamp(1rem, 4vw, 5rem)',
              boxSizing: 'border-box',
            }}
          >
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
