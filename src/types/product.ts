export interface Product {
  id?: string;
  name: string;
  nameAr: string;
  price: number;
  originalPrice?: number;
  description?: string;
  variants?: {
    size: string;
    price: number;
    originalPrice?: number;
  }[];
  visibility?: 'VISIBLE' | 'HIDDEN';
}

export interface Category {
  id: string;
  name: string;
  nameAr: string;
  products: Product[];
}