import React, { useState } from 'react';
import { Menu as MenuIcon, Phone, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, isRTL } = useLanguage();

  const navItems = [
    { name: translations.navigation.home[language], href: '#home' },
    { name: translations.navigation.menu[language], href: '#menu' },
    { name: translations.navigation.deals[language], href: '#deals' },
    { name: translations.navigation.orderOnline[language], href: '#order' },
    { name: translations.navigation.contact[language], href: '#contact' },
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center">
            <img
              src="https://i.imgur.com/GumPsYq.png"
              alt={translations.restaurantName[language]}
              className="h-16 w-auto"
            />
          </a>

          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <LanguageToggle />
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://wa.me/966558088546"
              className="flex items-center text-green-600 hover:text-green-700"
            >
              <Phone className="w-5 h-5 mr-2" />
              <span>{translations.hero.whatsapp[language]}</span>
            </a>
            <a
              href="https://take.app/familypie"
              className={`bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center ${
                isRTL ? 'flex-row-reverse' : ''
              }`}
            >
              <ShoppingBag className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {translations.orderOnline[language]}
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <LanguageToggle />
              <a
                href="https://wa.me/966558088546"
                className="flex items-center text-green-600 hover:text-green-700"
              >
                <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                <span>{translations.hero.whatsapp[language]}</span>
              </a>
              <a
                href="https://take.app/familypie"
                className={`bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}
              >
                <ShoppingBag className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {translations.orderOnline[language]}
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;