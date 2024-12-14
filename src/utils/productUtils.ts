import { Product } from '../types/product';

export const extractNameParts = (fullName: string): { name: string; nameAr: string } => {
  const parts = fullName.split(' - ');
  if (parts.length === 2) {
    return {
      name: parts[1].trim(),
      nameAr: parts[0].trim()
    };
  }
  return {
    name: fullName,
    nameAr: fullName
  };
};

export const groupVariantsByProduct = (products: any[]): Product[] => {
  const productMap = new Map();

  products.forEach(item => {
    if (!item['Product Name']) return;
    
    const { name, nameAr } = extractNameParts(item['Product Name']);
    const productKey = name.toLowerCase();

    if (!productMap.has(productKey)) {
      productMap.set(productKey, {
        name,
        nameAr,
        visibility: item.Visibility,
        variants: item['Variant Name'] ? [] : undefined,
        price: item['Variant Name'] ? undefined : Number(item.Price),
        originalPrice: item['Original Price'] ? Number(item['Original Price']) : undefined
      });
    }

    if (item['Variant Name']) {
      const product = productMap.get(productKey);
      if (!product.variants) product.variants = [];
      product.variants.push({
        size: item['Variant Name'],
        price: Number(item.Price),
        originalPrice: item['Original Price'] ? Number(item['Original Price']) : undefined
      });
    }
  });

  return Array.from(productMap.values());
};

export const sortProducts = (products: Product[]): Product[] => {
  return [...products].sort((a, b) => a.name.localeCompare(b.name));
};