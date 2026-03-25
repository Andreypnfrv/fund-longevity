import React from 'react';
import { H3 } from './Typography';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  title: string;
}

export function Logo({ className, title }: LogoProps): React.ReactElement {
  return (
      <H3 
      display={false}
      className={cn(
        'font-bold', 'line-height-1',
        className
      )}
      style={{ marginBottom: 0, color: '#0900FF' }}
      >
        {title}
      </H3>
  );
}

