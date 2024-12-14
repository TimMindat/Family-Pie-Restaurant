import { LucideIcon } from 'lucide-react';

export interface NavItem {
  key: string;
  href: string;
  icon?: LucideIcon;
  isExternal?: boolean;
  isPrimary?: boolean;
}

export interface NavigationState {
  isOpen: boolean;
  isTransitioning: boolean;
  currentLanguage: 'en' | 'ar';
}

export type NavItemTranslation = {
  [key: string]: {
    en: string;
    ar: string;
  };
};