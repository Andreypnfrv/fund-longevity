'use client';

import { useEffect, useRef } from 'react';
import React, { type ReactNode } from 'react';
import { Overlay } from './Overlay';
import { Button } from './Button';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Dialog({ isOpen, onClose, title, children, className = '' }: DialogProps): React.ReactElement | null {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && dialogRef.current) {
      const focusableElements = dialogRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement | null;
      firstElement?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onClose={onClose}>
      <div
        className="fixed inset-0 flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          ref={dialogRef}
          className={`bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'dialog-title' : undefined}
        >
          <div className="p-6">
            {title && (
              <h2 id="dialog-title" className="text-2xl font-bold mb-4">
                {title}
              </h2>
            )}
            {children}
            <div className="mt-6 flex justify-end">
              <Button onClick={onClose}>Close</Button>
            </div>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

