import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import LanguageToggle from './LanguageToggle';
import { DesktopNav } from './navigation/DesktopNav';
import { MobileNav } from './navigation/MobileNav';
import { NavigationProvider } from './navigation/NavigationContext';

const Header: React.FC = () => {
  const { language, isRTL } = useLanguage();

  return (
    <NavigationProvider>
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img
                src="https://i.imgur.com/GumPsYq.png"
                alt={translations.restaurantName[language]}
                className="h-16 w-auto"
              />
            </Link>

            <DesktopNav />

            <div className="hidden md:flex items-center space-x-4">
              <LanguageToggle />
              <a
                href="https://wa.me/966558088546"
                className="flex items-center text-green-600 hover:text-green-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span>{translations.hero.whatsapp[language]}</span>
              </a>
              <a
                href="https://take.app/familypie"
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors duration-200 flex items-center ${
                  isRTL ? 'flex-row-reverse' : ''
                }`}
              >
                <ShoppingBag className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {translations.orderOnline[language]}
              </a>
            </div>

            <MobileNav />
          </div>
        </div>
      </header>
    </NavigationProvider>
  );
};

export default Header;