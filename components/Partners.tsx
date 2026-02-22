import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Locale } from '@/lib/types';
import type { Partner } from '@/lib/config';

interface PartnersProps {
  locale: Locale;
  title: string;
  partners: Partner[];
}

function PartnerCard({ children, className = '', logo }: { children: ReactNode; className?: string; logo?: string | undefined }): React.ReactElement {
  return (
    <div className={cn('rounded p-8 bg-white hover:bg-gray-100 transition-all duration-200 ease-in-out h-full min-h-[320px] flex flex-col', className)}>
      {logo && (
        <div 
          className="w-full h-[150px] mb-8"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      {children}
    </div>
  );
}

export function Partners({ locale: _locale, title, partners }: PartnersProps) {
  return (
    <section>
      <div className="text-center py-8 md:py-12 mb-8">
        <div className="inline-block">
          <div className="flex flex-col items-start gap-1 md:gap-2">
            <div className="flex flex-row items-baseline gap-2 md:gap-4 flex-wrap">
              <div className="text-5xl md:text-7xl lg:text-8xl font-black leading-none" style={{
                background: 'linear-gradient(135deg, #000 0%, #333 50%, #000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>
                {title.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {partners.map((partner, index) => {
          const cardContent = (
            <>
              <h3 className="text-lg md:text-xl font-semibold mb-2">{partner.name}</h3>
              {partner.description && (
                <p className="text-sm text-gray-600 whitespace-pre-line">{partner.description}</p>
              )}
            </>
          );
          
          const cardProps = partner.logo ? { logo: partner.logo } : {};
          
          return partner.url ? (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <PartnerCard {...cardProps} className="items-center text-center cursor-pointer">
                {cardContent}
              </PartnerCard>
            </a>
          ) : (
            <PartnerCard key={index} {...cardProps} className="items-center text-center">
              {cardContent}
            </PartnerCard>
          );
        })}
      </div>
    </section>
  );
}

