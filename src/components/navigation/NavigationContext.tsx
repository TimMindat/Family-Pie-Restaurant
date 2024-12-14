import React, { createContext, useContext, useEffect, useState } from 'react';
import { NavigationState } from './types';

interface NavigationContextType extends NavigationState {
  toggleMenu: () => void;
  closeMenu: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<NavigationState>({
    isOpen: false,
    isTransitioning: false,
    currentLanguage: 'ar'
  });

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setState(prev => ({ ...prev, currentLanguage: savedLanguage as 'en' | 'ar' }));
    }
  }, []);

  const toggleMenu = () => {
    setState(prev => ({ ...prev, isOpen: !prev.isOpen }));
  };

  const closeMenu = () => {
    setState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <NavigationContext.Provider value={{ ...state, toggleMenu, closeMenu }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};