import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import ProductListing from '../components/ProductListing';

const MenuPage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <div className="bg-orange-50 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4">
            {translations.menu.title[language]}
          </h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto">
            {translations.menu.description[language]}
          </p>
        </div>
      </div>
      <ProductListing />
    </div>
  );
};

export default MenuPage;