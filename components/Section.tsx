import React, { type ReactNode } from 'react';
import { Wrapper } from './Wrapper';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  id?: string;
}

export function Section({ children, className = '', wrapperClassName = '', id }: SectionProps): React.ReactElement {
  return (
    <section 
      id={id}
      className={cn('w-full flex flex-row justify-center', className)}
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <Wrapper className={wrapperClassName}>
        {children}
      </Wrapper>
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
