'use client';

import { UserProvider } from '@auth0/nextjs-auth0/client';
import { TranslationProvider } from '@/contexts/TranslationContext';

interface AuthProviderProps {
  children: React.ReactNode;
  defaultLocale?: string;
}

export function AuthProvider({ children, defaultLocale = 'en' }: AuthProviderProps) {
  return (
    <UserProvider>
      <TranslationProvider defaultLocale={defaultLocale}>
        {children}
      </TranslationProvider>
    </UserProvider>
  );
}
