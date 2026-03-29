import React, { type ReactNode, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export function Section({ children, className = '', id, style }: SectionProps): React.ReactElement {
  return (
    <section 
      id={id}
      className={cn('w-full flex flex-row justify-center', className)}
      style={{ paddingTop: '10px', paddingBottom: '10px', ...style }}
    >
      {children}
    </section>
  );
}


interface TextSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
}

export function TextSection({ children, id, className = '' }: TextSectionProps): React.ReactElement {
  return (
    <section id={id} className={cn('flex flex-col gap-4', className)}>
      {children}
    </section>
  );
}
