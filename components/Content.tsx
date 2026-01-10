import React, { type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContentProps {
  children: ReactNode;
  className?: string;
}

export function Content({ children, className = '' }: ContentProps): React.ReactElement {
  return (
    <div className={cn('flex-1 flex flex-col gap-16 pb-16', className)}>
      {children}
    </div>
  );
}
