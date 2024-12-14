import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Product } from '../../types/product';
import { formatPrice } from '../../utils/formatters';

interface VisualMenuItemProps {
  product: Product;
}

export const VisualMenuItem: React.FC<VisualMenuItemProps> = ({ product }) => {
  const { language, isRTL } = useLanguage();
  
  return (
    <div className="relative group">
      <div className="p-4 rounded-lg transition-colors duration-200 hover:bg-orange-900/5">
        {/* Product Name and Price */}
        <div className="flex justify-between items-baseline gap-4">
          <h3 className={`text-lg font-semibold text-orange-900 ${
            isRTL ? 'font-[Noto Kufi Arabic]' : 'font-serif'
          }`}>
            {language === 'ar' ? product.nameAr : product.name}
          </h3>
          <div className="border-b border-dotted border-orange-900/20 flex-grow mt-2" />
          {!product.variants && (
            <div className="flex flex-col items-end">
              <span className="text-orange-800 font-medium whitespace-nowrap">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-orange-800/60 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Variants */}
        {product.variants && (
          <div className="mt-2 space-y-1">
            {product.variants.map((variant, index) => (
              <div key={index} className="flex justify-between items-baseline text-sm gap-4">
                <span className="text-orange-800/80">{variant.size}</span>
                <div className="border-b border-dotted border-orange-900/10 flex-grow" />
                <div className="flex flex-col items-end">
                  <span className="text-orange-800">
                    {formatPrice(variant.price)}
                  </span>
                  {variant.originalPrice && (
                    <span className="text-xs text-orange-800/60 line-through">
                      {formatPrice(variant.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};