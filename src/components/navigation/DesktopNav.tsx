import React from 'react';
import { NavLink } from './NavLink';
import { NAV_ITEMS } from './constants';
import { useLanguage } from '../../contexts/LanguageContext';

export const DesktopNav: React.FC = () => {
  const { isRTL } = useLanguage();
  
  return (
    <nav className="hidden md:flex items-center space-x-4">
      <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-2`}>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.key} item={item} />
        ))}
      </div>
    </nav>
  );
};