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
      className={cn('w-full mx-auto px-3 min-[600px]:px-12', className)} 
      style={style}
    >
      {children}
    </div>
  );
}

