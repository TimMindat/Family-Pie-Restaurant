import React from 'react';
import { categories } from '../data/categories';
import { CategorySection } from './CategorySection';

const ProductListing: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <CategorySection key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductListing;