import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Category } from '../../types/product';
import { VisualMenuSection } from './VisualMenuSection';
import { Utensils } from 'lucide-react';
import { MENU_TRANSLATIONS } from './constants';
import { menuStyles } from './styles';

interface VisualMenuLayoutProps {
  categories: Category[];
}

export const VisualMenuLayout: React.FC<VisualMenuLayoutProps> = ({ categories }) => {
  const { language, isRTL } = useLanguage();
  const translations = MENU_TRANSLATIONS[language];
  const titleFont = menuStyles.menuTitle[language];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className={`relative ${menuStyles.paperBackground} ${menuStyles.decorativeBorder} rounded-lg p-8 md:p-12 shadow-2xl`}>
        {/* Decorative corners */}
        <MenuCorners />

        {/* Header */}
        <MenuHeader 
          title={translations.menuTitle}
          tagline={translations.tagline}
          titleFont={titleFont}
        />

        {/* Menu Sections */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <VisualMenuSection 
              key={category.id} 
              category={category}
              isLast={index === categories.length - 1}
            />
          ))}
        </div>

        {/* Footer */}
        <MenuFooter vatNote={translations.vatNote} />
      </div>
    </div>
  );
};

const MenuCorners = () => (
  <>
    <div className={`absolute top-0 left-0 ${menuStyles.decorativeCorner} border-t border-l -translate-x-2 -translate-y-2`} />
    <div className={`absolute top-0 right-0 ${menuStyles.decorativeCorner} border-t border-r translate-x-2 -translate-y-2`} />
    <div className={`absolute bottom-0 left-0 ${menuStyles.decorativeCorner} border-b border-l -translate-x-2 translate-y-2`} />
    <div className={`absolute bottom-0 right-0 ${menuStyles.decorativeCorner} border-b border-r translate-x-2 translate-y-2`} />
  </>
);

interface MenuHeaderProps {
  title: string;
  tagline: string;
  titleFont: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ title, tagline, titleFont }) => (
  <div className="text-center mb-12">
    <div className="flex justify-center mb-4">
      <Utensils className="w-12 h-12 text-orange-800" />
    </div>
    <h1 className={`text-4xl md:text-5xl font-bold text-orange-900 mb-4 ${titleFont}`}>
      {title}
    </h1>
    <div className={menuStyles.sectionDivider + " mx-auto mb-4"} />
    <p className="text-orange-800/80 italic">{tagline}</p>
  </div>
);

interface MenuFooterProps {
  vatNote: string;
}

const MenuFooter: React.FC<MenuFooterProps> = ({ vatNote }) => (
  <div className="mt-16 text-center">
    <div className={menuStyles.sectionDivider + " mx-auto mb-4"} />
    <p className="text-orange-800/60 text-sm italic">{vatNote}</p>
  </div>
);