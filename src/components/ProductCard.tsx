import React from 'react';
import { Product } from '../types/product';
import { formatPrice } from '../utils/formatters';
import { ProductVariants } from './ProductVariants';
import { useLanguage } from '../contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">
            {language === 'ar' ? product.nameAr : product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-gray-600 mt-1">
              {product.description}
            </p>
          )}
        </div>
        {!product.variants && (
          <div className="text-right">
            <span className="font-medium text-orange-600">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through block">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        )}
      </div>
      {product.variants && <ProductVariants variants={product.variants} />}
    </div>
  );
};