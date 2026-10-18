import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'nav' | 'footer' | 'mobile';
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'nav', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'footer') {
    return (
      <div className={`inline-flex items-center gap-1.5 p-1 bg-white/10 rounded border border-white/10 ${className}`}>
        <Languages className="w-3.5 h-3.5 text-[#D5B77A] ml-1" />
        <button
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
            language === 'en'
              ? 'bg-[#168C8C] text-white'
              : 'text-white/70 hover:text-white'
          }`}
          aria-pressed={language === 'en'}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
            language === 'hi'
              ? 'bg-[#168C8C] text-white'
              : 'text-white/70 hover:text-white'
          }`}
          aria-pressed={language === 'hi'}
        >
          हिन्दी
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 bg-white border border-[#10253F]/15 rounded-md shadow-2xs ${className}`}
      role="group"
      aria-label="Language switcher"
    >
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
          language === 'en'
            ? 'bg-[#10253F] text-white shadow-xs'
            : 'text-[#10253F]/70 hover:text-[#10253F]'
        }`}
        aria-pressed={language === 'en'}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
          language === 'hi'
            ? 'bg-[#10253F] text-white shadow-xs'
            : 'text-[#10253F]/70 hover:text-[#10253F]'
        }`}
        aria-pressed={language === 'hi'}
      >
        हिन्दी
      </button>
    </div>
  );
};
