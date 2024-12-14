import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';
import { NAV_ITEMS } from './constants';
import { useNavigation } from './NavigationContext';
import { useLanguage } from '../../contexts/LanguageContext';

export const MobileNav: React.FC = () => {
  const { isOpen, toggleMenu, closeMenu } = useNavigation();
  const { isRTL } = useLanguage();

  return (
    <>
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMenu} />
      )}

      {/* Mobile menu panel */}
      <div
        className={`
          fixed inset-y-0 w-64 bg-white z-50 transition-transform duration-300 ease-in-out md:hidden
          ${isRTL ? 'right-0' : 'left-0'}
          ${isOpen ? 'translate-x-0' : `${isRTL ? 'translate-x-full' : '-translate-x-full'}`}
        `}
      >
        <div className="flex flex-col h-full pt-20 pb-6">
          <div className="flex-1 overflow-y-auto px-4">
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.key} item={item} onClick={closeMenu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};