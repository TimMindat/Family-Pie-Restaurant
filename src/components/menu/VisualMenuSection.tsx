import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Category } from '../../types/product';
import { VisualMenuItem } from './VisualMenuItem';

interface VisualMenuSectionProps {
  category: Category;
  isLast: boolean;
}

export const VisualMenuSection: React.FC<VisualMenuSectionProps> = ({ category, isLast }) => {
  const { language, isRTL } = useLanguage();

  return (
    <div className="relative">
      {/* Category Header */}
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold text-orange-900 mb-2 ${
          isRTL ? 'font-[Noto Kufi Arabic]' : 'font-serif'
        }`}>
          {language === 'ar' ? category.nameAr : category.name}
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-px bg-orange-900/20" />
          <div className="w-2 h-2 rounded-full bg-orange-900/20" />
          <div className="w-12 h-px bg-orange-900/20" />
        </div>
      </div>

      {/* Menu Items */}
      <div className="grid gap-6 md:grid-cols-2">
        {category.products.map((product, index) => (
          <VisualMenuItem key={index} product={product} />
        ))}
      </div>

      {/* Section Divider */}
      {!isLast && (
        <div className="my-16 flex items-center justify-center">
          <div className="w-32 h-px bg-orange-900/20" />
          <div className="w-3 h-3 rounded-full bg-orange-900/20 mx-4" />
          <div className="w-32 h-px bg-orange-900/20" />
        </div>
      )}
    </div>
  );
};