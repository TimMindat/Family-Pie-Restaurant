import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="px-4 py-2 rounded-full bg-white text-orange-500 hover:bg-orange-50 transition-colors duration-200 font-medium"
    >
      {language === 'ar' ? 'English' : 'عربي'}
    </button>
  );
};

export default LanguageToggle;