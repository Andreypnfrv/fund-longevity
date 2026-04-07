'use client';

import React, { useEffect, useState } from 'react';
import type { Locale } from '@/lib/types';
import { Link } from './Link';
import { cn } from '@/lib/utils';
import { navigationColors } from '@/lib/theme';

interface SidebarItem {
  id: string;
  label: string;
  href: string;
}

interface SidebarProps {
  locale: Locale;
  items: SidebarItem[];
  activeId?: string;
}

export function Sidebar({ locale, items, activeId: propActiveId }: SidebarProps): React.ReactElement {
  const [activeId, setActiveId] = useState<string | undefined>(propActiveId || items[0]?.id);

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            const headerHeight = 64;
            const offset = 20;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerHeight - offset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    scrollToHash();

    const updateActiveId = () => {
      const headerHeight = 64;
      const threshold = headerHeight + 20;
      const sections = items.map((item, index) => {
        const element = document.getElementById(item.id);
        if (!element) return null;
        const rect = element.getBoundingClientRect();
        return {
          id: item.id,
          top: rect.top,
          index,
        };
      }).filter(Boolean) as Array<{ id: string; top: number; index: number }>;

      const visibleSections = sections.filter(s => s.top < window.innerHeight && s.top >= -100);
      
      if (visibleSections.length === 0) {
        const lastSection = sections[sections.length - 1];
        if (lastSection && lastSection.top < 0) {
          setActiveId(lastSection.id);
        }
        return;
      }

      const topmostSection = visibleSections.reduce((prev, curr) => 
        curr.top < prev.top ? curr : prev
      );

      if (topmostSection.top > threshold) {
        setActiveId(topmostSection.id);
      } else {
        const nextSection = visibleSections
          .filter(s => s.index > topmostSection.index && s.top > threshold)
          .sort((a, b) => a.index - b.index)[0];
        
        if (nextSection) {
          setActiveId(nextSection.id);
        } else {
          setActiveId(topmostSection.id);
        }
      }
    };

    updateActiveId();

    const handleHashChange = () => {
      scrollToHash();
      updateActiveId();
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', updateActiveId, { passive: true });

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', updateActiveId);
    };
  }, [items]);

  const currentActiveId = propActiveId || activeId;

  return (
    <aside className="hidden lg:block w-64 shrink-0 border-l border-gray-200 sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-y-auto overscroll-contain [scrollbar-gutter:stable]">
      <nav className="pr-1 pb-2">
        <ul className="space-y-6">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                locale={locale}
                className={cn(
                  'block w-full px-3 py-3 rounded-md text-xl transition-colors',
                  currentActiveId === item.id
                    ? navigationColors.active
                    : navigationColors.inactive
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

