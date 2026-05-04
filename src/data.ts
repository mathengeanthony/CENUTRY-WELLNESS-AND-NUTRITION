export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  points?: number; // DrNutrition has loyalty points
  discountText?: string;
  isKeto?: boolean;
  isVegan?: boolean;
}

export const CATEGORIES = [
  { id: '1', name: 'Proteins', image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=200&q=80' },
  { id: '2', name: 'Vitamins & Health', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=200&q=80' },
  { id: '3', name: 'Weight Management', image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=200&q=80' },
  { id: '4', name: 'Sports Nutrition', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=200&q=80' },
  { id: '5', name: 'Healthy Foods', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=200&q=80' },
  { id: '6', name: 'Keto Diet', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=200&q=80' },
  { id: '7', name: 'Sports Accessories', image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=200&q=80' },
  { id: '8', name: 'Personal Care', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=200&q=80' },
];

export const BRANDS = [
  { name: 'Laperva', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80' },
  { name: 'Optimum Nutrition', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80' },
  { name: 'MuscleTech', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80' },
  { name: 'Cellucor', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80' },
  { name: 'Kevin Levrone', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80' },
  { name: 'BSN', logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=150&q=80' },
];

export const ARTICLES = [
  {
    id: 'a1',
    title: 'How to build lean muscle mass in 30 days',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80',
    date: 'Dec 12, 2023',
    category: 'Fitness',
  },
  {
    id: 'a2',
    title: 'Top 5 Vitamin C supplements for Immunity',
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80',
    date: 'Jan 05, 2024',
    category: 'Health',
  },
  {
    id: 'a3',
    title: 'The ultimate guide to Keto Diet',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80',
    date: 'Jan 15, 2024',
    category: 'Diet Central',
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '100% Gold Standard Whey Protein 5lbs',
    brand: 'Optimum Nutrition',
    price: 10400,
    oldPrice: 13000,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviews: 1245,
    isNew: true,
    points: 80,
    discountText: '20% OFF'
  },
  {
    id: 'p2',
    name: 'Platinum Multivitamin - 90 Tablets',
    brand: 'MuscleTech',
    price: 3185,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    reviews: 840,
    points: 25,
  },
  {
    id: 'p3',
    name: 'C4 Original Pre-Workout 60 Servings',
    brand: 'Cellucor',
    price: 4550,
    oldPrice: 5850,
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80',
    rating: 4.7,
    reviews: 3200,
    points: 35,
    discountText: 'Buy 1 Get 1 Free'
  },
  {
    id: 'p4',
    name: 'AminoX BCAA Recovery',
    brand: 'BSN',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80',
    rating: 4.6,
    reviews: 512,
    points: 30,
  },
  {
    id: 'p5',
    name: 'ISO100 Hydrolyzed Protein Isolate',
    brand: 'Dymatize',
    price: 11050,
    oldPrice: 14300,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviews: 890,
    points: 85,
    discountText: '15% OFF'
  },
  {
    id: 'p6',
    name: 'Century Wellness Omega-3 Fish Oil',
    brand: 'Century Wellness',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80',
    rating: 4.4,
    reviews: 120,
    isNew: true,
    points: 20
  },
  {
    id: 'p7',
    name: 'Laperva Triple Mass Gainer 15lbs',
    brand: 'Laperva',
    price: 15600,
    oldPrice: 19500,
    image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviews: 450,
    points: 120,
    discountText: 'Save KSh 3,900'
  },
  {
    id: 'p8',
    name: 'Laperva Keto Bar Chocolate 60g',
    brand: 'Laperva',
    price: 450,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80',
    rating: 4.2,
    reviews: 67,
    points: 3,
    isKeto: true
  }
];
