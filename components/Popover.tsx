'use client';

import React, { type ReactNode, useRef, useEffect, useState } from 'react';

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  trigger: ReactNode;
  children: ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  className?: string;
}

export function Popover({
  isOpen,
  onClose,
  trigger,
  children,
  placement = 'bottom-start',
  className = '',
}: PopoverProps): React.ReactElement {
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;

    const updatePosition = (): void => {
      if (!triggerRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();

      let top = 0;
      let left = 0;

      if (contentRef.current) {
        const contentRect = contentRef.current.getBoundingClientRect();

        if (placement === 'bottom-start') {
          top = triggerRect.bottom + 8;
          left = triggerRect.left;
        } else if (placement === 'bottom-end') {
          top = triggerRect.bottom + 8;
          left = triggerRect.right - contentRect.width;
        } else if (placement === 'top-start') {
          top = triggerRect.top - contentRect.height - 8;
          left = triggerRect.left;
        } else if (placement === 'top-end') {
          top = triggerRect.top - contentRect.height - 8;
          left = triggerRect.right - contentRect.width;
        }
      } else {
        if (placement === 'bottom-start' || placement === 'bottom-end') {
          top = triggerRect.bottom + 8;
        } else {
          top = triggerRect.top - 100;
        }
        left = placement === 'bottom-end' || placement === 'top-end'
          ? triggerRect.right - 120
          : triggerRect.left;
      }

      setPosition({ top, left });
    };

    updatePosition();
    const rafId = requestAnimationFrame(() => {
      updatePosition();
    });

    const timeoutId = setTimeout(updatePosition, 10);

    const handleScroll = (): void => {
      onClose();
    };

    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [isOpen, placement, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent): void => {
      if (
        triggerRef.current?.contains(event.target as Node) ||
        contentRef.current?.contains(event.target as Node)
      ) {
        return;
      }
      onClose();
    };

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <div className="relative">
      <div ref={triggerRef}>{trigger}</div>
      {isOpen && (
        <div
          ref={contentRef}
          className={`fixed z-50 ${className}`}
          style={{ top: `${position.top}px`, left: `${position.left}px` }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      )}
    </div>
  );
}

