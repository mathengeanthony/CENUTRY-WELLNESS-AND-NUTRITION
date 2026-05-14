import React from 'react';
import HomeHero from '../components/HomeHero';
import CategoryGrid from '../components/CategoryGrid';
import ProductGrid from '../components/ProductGrid';
import ServicesSection from '../components/ServicesSection';
import FlashSale from '../components/FlashSale';
import BrandsSection from '../components/BrandsSection';
import ArticlesSection from '../components/ArticlesSection';
import { useProducts } from '../ProductsContext';

export default function Home() {
  const { products, loading } = useProducts();
  const trendingProducts = products.slice(0, 5);
  const bestSellers = products.slice(3, 8); 

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading products...</div>;
  }

  return (
    <main>
      <HomeHero />
      <ServicesSection />
      <BrandsSection />
      <CategoryGrid />
      <FlashSale />
      <ProductGrid title="Latest & Trending Offers" products={trendingProducts} />

      {/* Full width Banner */}
      <section className="py-4 md:py-8 bg-gray-50">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="grid md:grid-cols-2 gap-4 h-[250px] md:h-[300px]">
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-green-50">
              <img src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80" alt="Mass Gainers" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center">
                <span className="bg-pink-500 text-white text-[10px] w-max px-2 py-1 font-bold uppercase tracking-wider mb-2">Mass Gainers</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-green-900 mb-2">Extreme<br/>Bulking</h3>
                <a href="#" className="font-bold underline text-green-700 mt-auto w-max">Shop Now</a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group cursor-pointer bg-pink-50">
              <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" alt="Pre-Workout" className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 p-8 flex flex-col justify-center items-end text-right">
                <span className="bg-green-600 text-white text-[10px] w-max px-2 py-1 font-bold uppercase tracking-wider mb-2">Pre-Workout</span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-pink-700 mb-2">Explosive<br/>Energy</h3>
                <a href="#" className="font-bold underline text-pink-600 mt-auto w-max">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProductGrid title="Best Sellers" products={bestSellers} />
      <ArticlesSection />

      {/* App Download Call to Action */}
      <section className="bg-green-700 py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
        <div className="container mx-auto max-w-[1400px] px-4 relative z-10 flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 md:mr-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-2">Download Our App Now!</h2>
            <p className="text-green-100 font-medium text-lg">Shop anytime, anywhere and get exclusive app-only bonuses & points.</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center transition shadow-lg border border-gray-700">
              <div className="mr-3 text-2xl">🍎</div>
              <div className="text-left">
                <div className="text-[10px] text-gray-300">Download on the</div>
                <div className="text-lg font-bold leading-none">App Store</div>
              </div>
            </button>
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center transition shadow-lg border border-gray-700">
              <div className="mr-3 text-2xl">▶️</div>
              <div className="text-left">
                <div className="text-[10px] text-gray-300">GET IT ON</div>
                <div className="text-lg font-bold leading-none">Google Play</div>
              </div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
