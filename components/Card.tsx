import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps): React.ReactElement {
  return (
    <div className={cn('border-2 border-black rounded-lg p-8 bg-white shadow-md', className)}>
      {children}
    </div>
  );
}

