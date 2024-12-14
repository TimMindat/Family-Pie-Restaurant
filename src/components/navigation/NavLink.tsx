import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { NAV_TRANSLATIONS } from './constants';
import { NavItem } from './types';

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ item, onClick }) => {
  const location = useLocation();
  const { language, isRTL } = useLanguage();
  const isActive = location.pathname === item.href;
  const Icon = item.icon;

  const linkClasses = `
    flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200
    ${isRTL ? 'flex-row-reverse' : ''}
    ${isActive 
      ? 'text-orange-500 bg-orange-50' 
      : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50/50'}
  `;

  if (item.isExternal) {
    return (
      <a
        href={item.href}
        className={linkClasses}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span className="font-medium">{NAV_TRANSLATIONS[item.key][language]}</span>
      </a>
    );
  }

  return (
    <Link to={item.href} className={linkClasses} onClick={onClick}>
      {Icon && <Icon className="w-5 h-5" />}
      <span className="font-medium">{NAV_TRANSLATIONS[item.key][language]}</span>
    </Link>
  );
};