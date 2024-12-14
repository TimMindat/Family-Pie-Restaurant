import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { categories } from '../data/categories';
import { VisualMenuLayout } from '../components/menu/VisualMenuLayout';

const VisualMenuPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100/50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {translations.menu.title[language]}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {translations.menu.description[language]}
          </p>
        </div>
      </div>
      
      <VisualMenuLayout categories={categories} />
    </div>
  );
};

export default VisualMenuPage;