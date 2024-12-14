import { Category } from '../types/product';

export const categories: Category[] = [
  {
    id: 'pizza',
    name: 'Pizza',
    nameAr: 'البيتزا',
    products: [
      {
        name: 'Margherita Pizza',
        nameAr: 'بيتزا مارجريتا',
        variants: [
          { size: 'Large', price: 22, originalPrice: 25 },
          { size: 'Medium', price: 17, originalPrice: 20 },
          { size: 'Small', price: 13, originalPrice: 15 }
        ]
      },
      {
        name: 'Pepperoni Pizza',
        nameAr: 'بيتزا ببروني',
        variants: [
          { size: 'Large', price: 24, originalPrice: 30 },
          { size: 'Medium', price: 20, originalPrice: 25 },
          { size: 'Small', price: 16, originalPrice: 20 }
        ]
      },
      {
        name: 'Barbecue Pizza',
        nameAr: 'بيتزا باربكيو',
        variants: [
          { size: 'Large', price: 26, originalPrice: 30 },
          { size: 'Medium', price: 22, originalPrice: 25 },
          { size: 'Small', price: 17, originalPrice: 20 }
        ]
      },
      {
        name: 'Beef Bacon Pizza',
        nameAr: 'بيتزا بيف بيكون',
        variants: [
          { size: 'Large', price: 30, originalPrice: 35 },
          { size: 'Medium', price: 26, originalPrice: 30 },
          { size: 'Small', price: 22, originalPrice: 25 }
        ]
      },
      {
        name: 'Tuna Pizza',
        nameAr: 'بيتزا تونا',
        variants: [
          { size: 'Large', price: 26, originalPrice: 30 },
          { size: 'Medium', price: 22, originalPrice: 25 },
          { size: 'Small', price: 17, originalPrice: 20 }
        ]
      },
      {
        name: 'Vegetable Pizza',
        nameAr: 'بيتزا خضار',
        variants: [
          { size: 'Large', price: 18, originalPrice: 28 },
          { size: 'Medium', price: 20, originalPrice: 23 },
          { size: 'Small', price: 16, originalPrice: 18 }
        ]
      },
      {
        name: 'Dynamite Pizza',
        nameAr: 'بيتزا ديناميت',
        variants: [
          { size: 'Large', price: 26, originalPrice: 30 },
          { size: 'Medium', price: 22, originalPrice: 25 },
          { size: 'Small', price: 17, originalPrice: 20 }
        ]
      },
      {
        name: 'Shrimp Pizza',
        nameAr: 'بيتزا روبيان / جمبري',
        variants: [
          { size: 'Large', price: 30, originalPrice: 35 },
          { size: 'Medium', price: 26, originalPrice: 30 },
          { size: 'Small', price: 22, originalPrice: 25 }
        ]
      },
      {
        name: 'Salmon Pizza',
        nameAr: 'بيتزا سالمون',
        variants: [
          { size: 'Large', price: 35 },
          { size: 'Medium', price: 30 },
          { size: 'Small', price: 25 }
        ]
      },
      {
        name: 'Sausage Pizza',
        nameAr: 'بيتزا سجق',
        variants: [
          { size: 'Large', price: 26, originalPrice: 30 },
          { size: 'Medium', price: 22, originalPrice: 25 },
          { size: 'Small', price: 17, originalPrice: 20 }
        ]
      },
      {
        name: 'Fillet Steak Pizza',
        nameAr: 'بيتزا فيليه استيك',
        variants: [
          { size: 'Large', price: 30, originalPrice: 35 },
          { size: 'Medium', price: 26, originalPrice: 30 },
          { size: 'Small', price: 11, originalPrice: 25 }
        ]
      },
      {
        name: 'Minced Meat Pizza',
        nameAr: 'بيتزا لحم مفروم',
        variants: [
          { size: 'Large', price: 26, originalPrice: 30 },
          { size: 'Medium', price: 22, originalPrice: 25 },
          { size: 'Small', price: 17, originalPrice: 20 }
        ]
      },
      {
        name: 'Mixed Cheese Pizza',
        nameAr: 'بيتزا مشكل جبن',
        variants: [
          { size: 'Large', price: 24, originalPrice: 28 },
          { size: 'Medium', price: 20, originalPrice: 23 },
          { size: 'Small', price: 16, originalPrice: 18 }
        ]
      },
      {
        name: 'Pizza Strips',
        nameAr: 'بيتزا استريس',
        variants: [
          { size: 'Large', price: 26, originalPrice: 30 },
          { size: 'Medium', price: 22, originalPrice: 25 },
          { size: 'Small', price: 17, originalPrice: 20 }
        ]
      },
      {
        name: 'Ranch Pizza',
        nameAr: 'بيتزا الرانش',
        variants: [
          { size: 'Large', price: 30 },
          { size: 'Medium', price: 25 },
          { size: 'Small', price: 20 }
        ]
      },
      {
        name: 'Family Pizza',
        nameAr: 'بيتزا الفطيرة العائلية',
        variants: [
          { size: 'Family Size', price: 40 }
        ]
      }
    ]
  },
  {
    id: 'pies',
    name: 'Pies',
    nameAr: 'الفطائر',
    products: [
      {
        name: 'Akkawi Cheese Pie',
        nameAr: 'فطيرة جبن عكاوي',
        price: 8,
        originalPrice: 9
      },
      {
        name: 'Cheese with Zaatar Pie',
        nameAr: 'فطيرة جبنة مع الزعتر',
        price: 8,
        originalPrice: 9
      },
      {
        name: 'Zaatar Pie',
        nameAr: 'فطيرة زعتر',
        price: 5,
        originalPrice: 6
      },
      {
        name: 'Spinach Pie',
        nameAr: 'فطيرة سبانخ',
        price: 5,
        originalPrice: 6
      },
      {
        name: 'Muhammara Pie',
        nameAr: 'فطيرة محمرة',
        price: 5,
        originalPrice: 6
      },
      {
        name: 'Labneh Pie',
        nameAr: 'فطيرة لبنة',
        price: 5.5,
        originalPrice: 9
      },
      {
        name: 'Labneh and Zaatar Pie',
        nameAr: 'فطيرة لبنة وزعتر',
        price: 8,
        originalPrice: 9
      },
      {
        name: 'Labneh and Honey Pie',
        nameAr: 'فطيرة لبنة وعسل',
        price: 8,
        originalPrice: 9
      },
      {
        name: 'Kashkaval Cheese Pie',
        nameAr: 'فطيرة جبنة قشقوان',
        price: 10,
        originalPrice: 12
      },
      {
        name: 'Mozzarella Cheese Pie',
        nameAr: 'فطيرة جبن موزريلا',
        price: 8,
        originalPrice: 9
      },
      {
        name: 'Cream Cheese Pie',
        nameAr: 'فطيرة جبن كريمي',
        price: 6,
        originalPrice: 9
      },
      {
        name: "Nightingale's Nest Pie",
        nameAr: 'فطيرة عش البلبل',
        price: 10,
        originalPrice: 12
      },
      {
        name: 'Meat Pie with Cheese',
        nameAr: 'فطيرة لحم بعجين وجبن',
        price: 9,
        originalPrice: 10
      },
      {
        name: 'Halloumi Pie',
        nameAr: 'فطيرة حلومي',
        price: 10,
        originalPrice: 12
      },
      {
        name: 'Egg and Cheese Pie',
        nameAr: 'فطيرة بيض وجبن',
        price: 9,
        originalPrice: 10
      },
      {
        name: 'Meat Pie with Pomegranate Molasses',
        nameAr: 'فطيرة لحم بعجين بدبس الرمان',
        price: 9,
        originalPrice: 10
      }
    ]
  },
  {
    id: 'burgers',
    name: 'Burgers',
    nameAr: 'البرجر',
    products: [
      {
        name: 'Beef Burger Meal',
        nameAr: 'وجبة برجر لحم',
        price: 13,
        originalPrice: 15
      },
      {
        name: 'Chicken Burger Meal',
        nameAr: 'وجبة برجر دجاج',
        price: 13,
        originalPrice: 15
      }
    ]
  },
  {
    id: 'sides',
    name: 'Sides',
    nameAr: 'الإضافات',
    products: [
      {
        name: 'French Fries',
        nameAr: 'بطاطس فريز',
        price: 5
      },
      {
        name: 'Crunchy Fries',
        nameAr: 'بطاطس كرانشي',
        price: 7,
        originalPrice: 8
      },
      {
        name: 'Add Cheese Stuffed Crust',
        nameAr: 'إضافة اطراف جبن',
        price: 4
      }
    ]
  },
  {
    id: 'beverages',
    name: 'Beverages',
    nameAr: 'المشروبات',
    products: [
      {
        name: 'Large Soft Drink',
        nameAr: 'مشروبات غازية كبيرة',
        price: 3
      },
      {
        name: 'Small Soft Drink',
        nameAr: 'مشروبات غازية صغيرة',
        price: 3
      },
      {
        name: 'Al Rabie Orange Juice',
        nameAr: 'عصير برتقال الربيع',
        price: 2.5
      },
      {
        name: 'Large Water',
        nameAr: 'ماء كبير',
        price: 1
      },
      {
        name: 'Small Water',
        nameAr: 'ماء صغير',
        price: 0.5
      }
    ]
  },
  {
    id: 'sauces',
    name: 'Sauces',
    nameAr: 'الصوصات',
    products: [
      {
        name: 'Hot Sauce',
        nameAr: 'صوص حار',
        price: 1
      },
      {
        name: 'Ranch',
        nameAr: 'رانش',
        price: 1
      },
      {
        name: 'Barbecue',
        nameAr: 'باربكيو',
        price: 1
      },
      {
        name: 'Dynamite',
        nameAr: 'ديناميت',
        price: 1
      },
      {
        name: 'Cheddar',
        nameAr: 'شيدر',
        price: 1
      },
      {
        name: 'Ketchup',
        nameAr: 'كاتشب',
        price: 1
      },
      {
        name: 'Mayonnaise',
        nameAr: 'مايونيز',
        price: 1
      }
    ]
  }
];