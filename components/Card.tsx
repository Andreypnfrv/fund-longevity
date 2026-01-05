import React, { type ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps): React.ReactElement {
  return (
    <div className={`border border-gray-300 rounded-lg p-6 bg-white ${className}`}>
      {children}
    </div>
  );
}

