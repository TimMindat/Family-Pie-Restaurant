import React from 'react';
import { Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Deals = () => {
  const { language, isRTL } = useLanguage();

  const deals = [
    {
      title: translations.deals.items.burgerDeal.title[language],
      description: translations.deals.items.burgerDeal.description[language],
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
    },
    {
      title: translations.deals.items.piesDeal.title[language],
      description: translations.deals.items.piesDeal.description[language],
      image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81"
    },
    {
      title: translations.deals.items.familyDeal.title[language],
      description: translations.deals.items.familyDeal.description[language],
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591"
    }
  ];

  return (
    <section id="deals" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {translations.deals.title[language]}
          </h2>
          <p className="text-lg text-gray-600">
            {translations.deals.description[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Tag className="w-8 h-8 text-orange-500 bg-white rounded-full p-1" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {deal.description}
                </p>
                <a
                  href="https://take.app/familypie"
                  className={`inline-flex items-center text-orange-500 hover:text-orange-600 font-semibold ${
                    isRTL ? 'flex-row-reverse' : ''
                  }`}
                >
                  {translations.deals.orderNow[language]}
                  <ArrowRight className={`w-5 h-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deals;