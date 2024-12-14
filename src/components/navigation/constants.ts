import { Home, Menu as MenuIcon, FileText, Phone, ShoppingBag } from 'lucide-react';
import { NavItem, NavItemTranslation } from './types';

export const NAV_ITEMS: NavItem[] = [
  { key: 'home', href: '/', icon: Home },
  { key: 'menu', href: '/menu', icon: MenuIcon },
  { key: 'visualMenu', href: '/visual-menu', icon: FileText },
  { key: 'deals', href: '/#deals', icon: ShoppingBag },
  { key: 'contact', href: '/#contact', icon: Phone }
];

export const NAV_TRANSLATIONS: NavItemTranslation = {
  home: {
    en: 'Home',
    ar: 'الرئيسية'
  },
  menu: {
    en: 'Menu',
    ar: 'القائمة'
  },
  visualMenu: {
    en: 'Visual Menu',
    ar: 'القائمة المصورة'
  },
  deals: {
    en: 'Deals',
    ar: 'العروض'
  },
  contact: {
    en: 'Contact',
    ar: 'اتصل بنا'
  }
};