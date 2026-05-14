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
  categoryId?: string;
  subcategory?: string;
  description?: string;
  dossier?: string;
  isPublic?: boolean;
  category?: string;
  productNo?: string;
  currentPrice?: number;
  offerPrice?: number;
  percentageDiscount?: number;
  availability?: string;
  clinicalDossier?: string;
  activeIngredients?: string;
  usageAndWarnings?: string;
  qualityAssurance?: string;
  images?: string[];
}

export const CATEGORIES = [
  { id: '1', name: 'Digestive Health', image: '/brand_category_images/category-icon_digestive-health_512x512.png' },
  { id: '2', name: 'Bone & Joint Support', image: '/brand_category_images/category-icon_bone-and-joint-support_512x512.png' },
  { id: '3', name: 'Immune Support', image: '/brand_category_images/category-icon_immune-support_512x512.png' },
  { id: '4', name: 'Family Care', image: '/brand_category_images/category-icon_family-care_512x512.png' },
  { id: '5', name: 'Specialized Health', image: '/brand_category_images/category-icon_specialized-health_512x512.png' },
  { id: '6', name: 'Fitness & Weight', image: '/brand_category_images/category-icon_fitness-and-weight_512x512.png' },
  { id: '7', name: 'Pantry & Nutrition', image: '/brand_category_images/category-icon_pantry-and-nutrition_512x512.png' },
];

export const BRANDS = [
  { name: 'Natures Aid', logo: '/brand_category_images/brand-logo_natures-aid.png' },
  { name: 'Quest', logo: '/brand_category_images/brand-logo_quest.png' },
  { name: 'Webber Naturals', logo: '/brand_category_images/brand-logo_webber-naturals.png' },
  { name: 'Now Foods', logo: '/brand_category_images/brand-logo_now-foods.jpeg' },
  { name: 'Higher Nature', logo: '/brand_category_images/brand-logo_higher-nature.png' },
  { name: 'Hemani', logo: '/brand_category_images/brand-logo_hamdard.png' }, // wait, brand-logo_hamdard vs brand-logo_hemani? Hemani missing in uploaded files... ah wait. We have 9 logos for 10 brands? Let me check again.
  { name: "Nature's Truth", logo: '/brand_category_images/brand-logo_natures-truth.jpeg' },
  { name: 'Hamdard', logo: '/brand_category_images/brand-logo_hamdard.png' },
  { name: 'Natural Factors', logo: '/brand_category_images/brand-logo_natural-factors.jpeg' },
  { name: 'Power Health', logo: '/brand_category_images/brand-logo_power-health.png' },
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
  { id: '1', name: 'Natures Aid Mini Drops Multivitamins - 50ml', brand: 'Natures Aid', price: 1200, oldPrice: 1500, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 145, categoryId: '4', subcategory: 'Infants & Babies' },
  { id: '2', name: 'Natures Aid Mini Drops DHA - 50ml', brand: 'Natures Aid', price: 1400, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 90, categoryId: '4', subcategory: 'Infants & Babies' },
  { id: '3', name: 'Natures Aid Superstars Immune Support - 60s', brand: 'Natures Aid', price: 1800, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.9, reviews: 110, categoryId: '3', subcategory: 'Kids Immune Support' },
  { id: '4', name: 'Quest Omega 3 Fish Oil - 90 capsules', brand: 'Quest', price: 3185, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.5, reviews: 840, categoryId: '5', subcategory: 'Heart Health' },
  { id: '5', name: 'Webber Natural Biotin 5000 mcg 60 caps', brand: 'Webber Naturals', price: 2550, oldPrice: 2850, image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 320, categoryId: '5', subcategory: 'Skin & Beauty' },
  { id: '6', name: 'Now Collagen Peptides Powder - 227g', brand: 'Now Foods', price: 3900, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 512, categoryId: '2', subcategory: 'Collagen' },
  { id: '7', name: 'Now Ashwagandha 450 mg 90 caps', brand: 'Now Foods', price: 2100, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 230, categoryId: '5', subcategory: 'Vitality' },
  { id: '8', name: 'Quest Mega B Complex - 30 tabs', brand: 'Quest', price: 1800, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 210, categoryId: '5', subcategory: 'Vitamins' },
  { id: '9', name: 'Quest OAD Zinc Plus - 30 tabs', brand: 'Quest', price: 1500, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 150, categoryId: '3', subcategory: 'Minerals' },
  { id: '10', name: 'Higher Nature Collagen Tablets - 90 tabs', brand: 'Higher Nature', price: 3500, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', rating: 4.5, reviews: 300, categoryId: '2', subcategory: 'Collagen' },
  { id: '11', name: 'Now Melatonin 3 mg 60 caps', brand: 'Now Foods', price: 1600, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 410, categoryId: '5', subcategory: 'Sleep' },
  { id: '12', name: 'Quest OAD Osteo - 30 tabs', brand: 'Quest', price: 2000, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.5, reviews: 190, categoryId: '2', subcategory: 'Bone Health' },
  { id: '13', name: 'Hemani Blackseed Oil - 125ml', brand: 'Hemani', price: 2600, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.4, reviews: 120, categoryId: '7', subcategory: 'Oils' },
  { id: '14', name: 'Higher Nature Msm Glucosamine Joint Complex - 90 tabs', brand: 'Higher Nature', price: 4050, oldPrice: 4800, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.9, reviews: 89, categoryId: '2', subcategory: 'Cartilage Supplements' },
  { id: '15', name: 'Nature\'s Truth Sleep Melatonin 10 mg 70 tabs', brand: 'Nature\'s Truth', price: 2450, image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=400&q=80', rating: 4.2, reviews: 67, categoryId: '5', subcategory: 'Sleep' },
  { id: '16', name: 'Hamdard Safi - 100ml', brand: 'Hamdard', price: 1560, oldPrice: 1950, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 450, categoryId: '1', subcategory: 'Detox' },
  { id: '17', name: 'Quest Acidophilus Plus - 90 caps', brand: 'Quest', price: 2800, image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 310, categoryId: '1', subcategory: 'Probiotics' },
  { id: '18', name: 'Quest Enzyme Digest - 135 tabs', brand: 'Quest', price: 2400, image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 290, categoryId: '1', subcategory: 'Enzymes' },
  { id: '19', name: 'Natural Factors Chromium & Vanadium 125 mcg 90 caps', brand: 'Natural Factors', price: 3200, image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 35, categoryId: '6', subcategory: 'Diet & Weight Loss' },
  { id: '20', name: 'Quest OAD Iron Plus - 30 tabs', brand: 'Quest', price: 1600, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 210, categoryId: '5', subcategory: 'Minerals' },
  { id: '21', name: 'Quest OAD Immune C - 30 tabs', brand: 'Quest', price: 1600, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 155, categoryId: '3', subcategory: 'Vitamin C' },
  { id: '22', name: 'Quest Vitamin C & Zinc & Rosehips - 20 tabs', brand: 'Quest', price: 1200, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 400, categoryId: '3', subcategory: 'Vitamin C' },
  { id: '23', name: 'Quest Evening Primrose 1000 mg 30 caps', brand: 'Quest', price: 2100, image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 180, categoryId: '5', subcategory: 'Women Health' },
  { id: '24', name: 'Now Horny Goat Weed Extract 750 mg 90 tabs', brand: 'Now Foods', price: 3400, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', rating: 4.5, reviews: 310, categoryId: '5', subcategory: 'Sexual Health' },
  { id: '25', name: 'Now Maca 500 mg 100 caps', brand: 'Now Foods', price: 2700, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 420, categoryId: '5', subcategory: 'Sexual Health' },
  { id: '26', name: 'Now Stinging Nettle Root Extract 250 mg 90 caps', brand: 'Now Foods', price: 2400, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 150, categoryId: '5', subcategory: 'Men Health' },
  { id: '27', name: 'PH Chromium Picolinate 200 ug 90 tabs', brand: 'Power Health', price: 2100, image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80', rating: 4.5, reviews: 120, categoryId: '6', subcategory: 'Diet & Weight Loss' },
  { id: '28', name: 'Webber Naturals Magnesium Bisglycinate 200 mg 60 caps', brand: 'Webber Naturals', price: 2800, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 500, categoryId: '2', subcategory: 'Minerals' },
  { id: '29', name: 'Natural Factors Vitamin E 400 IU 90 softgels', brand: 'Natural Factors', price: 2900, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 240, categoryId: '3', subcategory: 'Antioxidants' },
  { id: '30', name: 'Natures Aid Co-Enzymes Q10 - 30 softgels', brand: 'Natures Aid', price: 2500, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 190, categoryId: '5', subcategory: 'Heart Health' },
  { id: '31', name: 'Power Health Odourless Garlic - 90 caps', brand: 'Power Health', price: 1500, image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=400&q=80', rating: 4.5, reviews: 80, categoryId: '3', subcategory: 'Immune Boosters' },
  { id: '32', name: 'Natures Aid Flaxseed Oil 1000 mg 90 softgels', brand: 'Natures Aid', price: 2200, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 310, categoryId: '7', subcategory: 'Oils' },
  { id: '33', name: 'Now Vitamin D3 1000 IU 180 softgels', brand: 'Now Foods', price: 1900, image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80', rating: 4.9, reviews: 850, categoryId: '3', subcategory: 'Vitamins' },
  { id: '34', name: 'Now Omega 3 1000 mg 30 softgels', brand: 'Now Foods', price: 1700, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 620, categoryId: '5', subcategory: 'Heart Health' },
  { id: '35', name: 'Now Omega 3 6 9 - 100 softgels', brand: 'Now Foods', price: 3100, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 480, categoryId: '5', subcategory: 'Heart Health' },
  { id: '36', name: 'Quest Super Omega 3 6 9 - 90 caps', brand: 'Quest', price: 3400, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 390, categoryId: '5', subcategory: 'Heart Health' },
  { id: '37', name: 'Natures Aid Calcium, Magnesium & Vit D3 - 90 tabs', brand: 'Natures Aid', price: 2100, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.7, reviews: 450, categoryId: '2', subcategory: 'Calcium' },
  { id: '38', name: 'Quest Vitamin B12 500 ug 60 tabs', brand: 'Quest', price: 1600, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.6, reviews: 290, categoryId: '5', subcategory: 'Vitamins' },
  { id: '39', name: 'Natures Aid Vitamin B Complex - 90 tabs', brand: 'Natures Aid', price: 1900, image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80', rating: 4.8, reviews: 520, categoryId: '5', subcategory: 'Vitamins' }
];

