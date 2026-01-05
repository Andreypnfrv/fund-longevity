'use client';

import React from 'react';

import type { Locale } from '@/lib/types';
import { Link } from './Link';

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

export function Sidebar({ locale, items, activeId }: SidebarProps): React.ReactElement {
  return (
    <aside className="w-64 border-r border-gray-200 pr-6">
      <nav className="sticky top-24">
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                locale={locale}
                className={`block px-4 py-2 rounded-md font-inter text-sm transition-colors ${
                  activeId === item.id
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
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

