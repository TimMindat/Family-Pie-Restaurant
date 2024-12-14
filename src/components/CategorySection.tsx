import React from 'react';
import { Category } from '../types/product';
import { ProductCard } from './ProductCard';
import { useLanguage } from '../contexts/LanguageContext';

interface CategorySectionProps {
  category: Category;
}

export const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  const { language } = useLanguage();

  return (
    <div className="mb-12 last:mb-0">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
        {language === 'ar' ? category.nameAr : category.name}
      </h2>
      <div className="space-y-6">
        {category.products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};