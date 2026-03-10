import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Locale } from '@/lib/types';
import type { Partner } from '@/lib/config';

interface PartnersProps {
  locale: Locale;
  title: string;
  subtitle?: string;
  partners: Partner[];
}

function PartnerCard({ children, className = '', logo, logoSize }: { children: ReactNode; className?: string; logo?: string | undefined; logoSize?: 'small' | 'medium' | 'normal' | 'large' }): React.ReactElement {
  const logoHeight = logoSize === 'small' ? 'h-[63px]' : logoSize === 'medium' ? 'h-[105px]' : logoSize === 'large' ? 'h-[200px]' : 'h-[150px]';
  return (
    <div className={cn('rounded p-8 bg-white hover:bg-gray-100 transition-all duration-200 ease-in-out h-full min-h-[320px] flex flex-col justify-between', className)}>
      <div className="flex flex-1 flex-row items-center justify-center w-full">
        {logo && (
          <div
            className={cn('w-full', logoHeight)}
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        )}
      </div>
      <div className="flex-shrink-0 w-full">{children}</div>
    </div>
  );
}

export function Partners({ locale: _locale, title, subtitle, partners }: PartnersProps) {
  return (
    <section>
      <div className="text-center py-8 md:py-12 mb-8">
        <div className="inline-block">
          <div className="flex flex-col items-start gap-1 md:gap-2">
            <div className="flex flex-row items-baseline gap-2 md:gap-4 flex-wrap">
              <div className="font-black leading-none" style={{
                fontSize: 'clamp(1.25rem, 4vw + 0.75rem, 3.5rem)',
                background: 'linear-gradient(135deg, #000 0%, #333 50%, #000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.02em',
              }}>
                {title.toUpperCase()}
              </div>
            </div>
            {subtitle && <p className="text-xl md:text-2xl text-gray-600 mt-12 max-w-2xl leading-snug">{subtitle}</p>}
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
          
          const cardProps =
            partner.logo
              ? { logo: partner.logo, ...(partner.logoSize != null && { logoSize: partner.logoSize }) }
              : {};

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

