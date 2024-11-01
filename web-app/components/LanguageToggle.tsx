"use client";

import { useTranslation } from '@/contexts/TranslationContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  return (
    <div className="relative">
      {/* Desktop version */}
      <div className="hidden md:flex items-center gap-2 bg-white/80 backdrop-blur-sm p-1 rounded-full shadow-sm border border-gray-100">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === 'en'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('pt')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            language === 'pt'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          PT
        </button>
      </div>

      {/* Mobile version */}
      <button
        onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
        className="md:hidden px-3 py-1.5 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm"
      >
        <motion.span
          key={language}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          className="inline-flex items-center gap-1"
        >
          {language === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
          <span className="text-gray-400">↓</span>
        </motion.span>
      </button>
    </div>
  );
}
