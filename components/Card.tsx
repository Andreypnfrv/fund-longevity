import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps): React.ReactElement {
  return (
    <div className={cn('border border-gray-300 rounded-lg p-8 bg-white', className)}>
      {children}
    </div>
  );
}

