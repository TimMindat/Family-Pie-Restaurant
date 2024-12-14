import React from 'react';
import { Product } from '../types/product';
import { formatPrice } from '../utils/formatters';

interface ProductVariantsProps {
  variants: NonNullable<Product['variants']>;
}

export const ProductVariants: React.FC<ProductVariantsProps> = ({ variants }) => (
  <div className="mt-3 space-y-2">
    {variants.map((variant, index) => (
      <div
        key={index}
        className="flex justify-between items-center text-sm"
      >
        <span className="text-gray-600">{variant.size}</span>
        <div className="text-right">
          <span className="font-medium text-orange-600">
            {formatPrice(variant.price)}
          </span>
          {variant.originalPrice && (
            <span className="text-sm text-gray-400 line-through block">
              {formatPrice(variant.originalPrice)}
            </span>
          )}
        </div>
      </div>
    ))}
  </div>
);