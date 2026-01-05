'use client';

import React, { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from '@/lib/types';

interface NavigationContextValue {
  locale: Locale;
}

const NavigationContext = createContext<NavigationContextValue | null>(null);

interface NavigationProviderProps {
  locale: Locale;
  children: ReactNode;
}

export function NavigationProvider({ locale, children }: NavigationProviderProps): React.ReactElement {
  return (
    <NavigationContext.Provider value={{ locale }}>{children}</NavigationContext.Provider>
  );
}

export function useNavigationContext(): NavigationContextValue {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigationContext must be used within NavigationProvider');
  }
  return context;
}

