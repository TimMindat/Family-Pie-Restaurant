import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero = () => {
  const { language, isRTL } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 bg-gradient-to-r from-orange-50 to-orange-100"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt={translations.restaurantName[language]}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {translations.restaurantName[language]} – {translations.tagline[language]}
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            {translations.hero.description[language]}
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
            <a
              href="#menu"
              className={`bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center ${
                isRTL ? 'flex-row-reverse' : ''
              }`}
            >
              {translations.viewMenu[language]}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </a>
            <a
              href="https://take.app/familypie"
              className={`bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center ${
                isRTL ? 'flex-row-reverse' : ''
              }`}
            >
              {translations.orderOnline[language]}
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
            </a>
          </div>

          <div className="mt-8 bg-orange-500 px-6 py-3 rounded-lg inline-block">
            <p className="text-lg font-semibold">
              {translations.specialOffer[language]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;