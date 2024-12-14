import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Menu as MenuIcon, Phone, ShoppingBag, Share2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const MobileNav = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const navItems = [
    {
      name: translations.navigation.home[language],
      href: '/',
      icon: Home
    },
    {
      name: translations.navigation.menu[language],
      href: '/visual-menu',
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
        {navItems.map((item) => {
          const Component = item.isExternal ? 'a' : Link;
          const props = item.isExternal ? {
            href: item.href,
            target: '_blank',
            rel: 'noopener noreferrer'
          } : {
            to: item.href
          };

          return (
            <Component
              key={item.href}
              {...props}
              className={`flex flex-col items-center justify-center flex-1 h-full ${
                item.primary
                  ? 'text-orange-500'
                  : location.pathname === item.href
                  ? 'text-orange-500'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              <item.icon className="w-6 h-6 mb-1" />
              <span className="text-xs">{item.name}</span>
            </Component>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;