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
      className={cn('w-full mx-auto', className)} 
      style={{
        paddingLeft: 'clamp(1rem, 4vw, 5rem)',
        paddingRight: 'clamp(1rem, 4vw, 5rem)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

