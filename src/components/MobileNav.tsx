import React from 'react';
import { Home, Menu as MenuIcon, Phone, ShoppingBag, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const MobileNav = () => {
  const { language, isRTL } = useLanguage();

  const navItems = [
    {
      name: translations.navigation.home[language],
      href: '#home',
      icon: Home
    },
    {
      name: translations.navigation.menu[language],
      href: '#menu',
      icon: MenuIcon
    },
    {
      name: translations.orderOnline[language],
      href: '#order',
      icon: ShoppingBag,
      primary: true
    },
    {
      name: translations.hero.whatsapp[language],
      href: 'https://wa.me/966558088546',
      icon: Phone,
      isExternal: true
    },
    {
      name: translations.navigation.social[language],
      href: '#social',
      icon: Share2
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            className={`flex flex-col items-center justify-center flex-1 h-full ${
              item.primary
                ? 'text-orange-500'
                : 'text-gray-600 hover:text-orange-500'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{item.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;