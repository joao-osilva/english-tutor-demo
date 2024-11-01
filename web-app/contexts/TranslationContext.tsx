'use client';

import { createContext, useContext, useState } from 'react';
import { en } from '@/translations/en';
import { pt } from '@/translations/pt';

type Language = 'en' | 'pt';
type Translations = typeof en;

interface TranslationContextType {
  t: Translations;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const value = {
    t: language === 'en' ? en : pt,
    language,
    setLanguage,
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
}
