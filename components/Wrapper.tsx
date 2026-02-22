import React, { type ReactNode, type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface WrapperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Wrapper({ children, className = '', style }: WrapperProps): React.ReactElement {
  return (
    <div 
      className={cn('w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24', className)} 
      style={style}
    >
      {children}
    </div>
  );
}

