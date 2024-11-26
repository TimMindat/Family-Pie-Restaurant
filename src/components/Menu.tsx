import React from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Menu = () => {
  const { language } = useLanguage();

  return (
    <section id="menu" className="py-20 bg-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {translations.menu.title[language]}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.menu.description[language]}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/eeon9KJNrsY"
              title="Family Pie Menu"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://take.app/familypie"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors duration-200"
            >
              {translations.menu.orderButton[language]}
              <ExternalLink className="mr-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;