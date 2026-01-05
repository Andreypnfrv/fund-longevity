'use client';

import { useEffect } from 'react';
import React, { type ReactNode } from 'react';

interface OverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
}

export function Overlay({ isOpen, onClose, children, className = '' }: OverlayProps): React.ReactElement | null {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 ${className}`}
      onClick={onClose}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      }}
      aria-label="Close overlay"
    >
      {children}
    </div>
  );
}

