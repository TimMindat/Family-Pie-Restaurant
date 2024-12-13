import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FloatingPizza } from './FloatingPizza';
import { Confetti } from './Confetti';
import { SocialIcons } from './SocialIcons';

export const GiveawayBanner: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const pizzaCount = 8;

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-xl">
      {/* Desktop banner */}
      <div className="hidden md:block h-[400px] relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        {Array.from({ length: pizzaCount }).map((_, i) => (
          <FloatingPizza key={i} index={i} />
        ))}
        <Confetti />

        <div className="relative h-full flex flex-col items-center justify-center px-8 text-center">
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-lg px-6 py-2 mb-6">
            <span className="text-white font-semibold">
              {language === 'ar' ? 'عرض محدود' : 'Limited Time Offer'}
            </span>
          </div>

          <h2 className="text-5xl font-bold text-white mb-6 text-shadow-lg">
            {language === 'ar' ? '🍕 اربح بيتزا مجانية! 🍕' : '🍕 Win a Free Pizza! 🍕'}
          </h2>
          
          <p className="text-2xl text-white mb-4 max-w-2xl">
            {language === 'ar'
              ? 'شارك، منشن، وتابع صفحاتنا لتحصل على بيتزا مجانية!'
              : 'Share, Tag, and Follow to Claim Your Free Pizza!'}
          </p>
          
          <p className="text-xl text-orange-300 font-medium mb-8">
            {language === 'ar'
              ? 'متاح: 6-9 صباحاً | 1-3 ظهراً | 4-6 مساءً'
              : 'Available: 6-9 AM | 1-3 PM | 4-6 PM'}
          </p>

          <button
            className="group relative px-10 py-4 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-xl hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            <span>{language === 'ar' ? '🎉 شارك الآن' : '🎉 Join Now'}</span>
          </button>
        </div>

        <SocialIcons />
      </div>

      {/* Mobile banner */}
      <div className="md:hidden h-[500px] relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1595854341625-f33ee10dbf94"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
        </div>

        {Array.from({ length: Math.floor(pizzaCount / 2) }).map((_, i) => (
          <FloatingPizza key={i} index={i} />
        ))}
        <Confetti count={25} />

        <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
          <div className="bg-orange-500/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-6">
            <span className="text-white font-semibold">
              {language === 'ar' ? 'عرض محدود' : 'Limited Time Offer'}
            </span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6 text-shadow-lg">
            {language === 'ar' ? '🍕 اربح بيتزا مجانية! 🍕' : '🍕 Win a Free Pizza! 🍕'}
          </h2>
          
          <p className="text-xl text-white mb-4">
            {language === 'ar'
              ? 'شارك، وسم، وتابع لتحصل على بيتزا مجانية!'
              : 'Share, Tag, and Follow to Claim Your Free Pizza!'}
          </p>
          
          <p className="text-lg text-orange-300 font-medium mb-8">
            {language === 'ar'
              ? 'متاح: 6-9 صباحاً | 1-3 ظهراً | 4-6 مساءً'
              : 'Available: 6-9 AM | 1-3 PM | 4-6 PM'}
          </p>

          <button
            className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 bg-white/20 animate-shimmer" />
            <span>{language === 'ar' ? '🎉 شارك الآن' : '🎉 Join Now'}</span>
          </button>
        </div>

        <SocialIcons />
      </div>
    </div>
  );
};