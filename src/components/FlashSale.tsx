import React, { useState, useEffect } from 'react';
import { Clock, ShoppingCart } from 'lucide-react';
import { useProducts } from '../ProductsContext';
import ProductCard from './ProductCard';

export default function FlashSale() {
  const { products, loading } = useProducts();
  const [timeLeft, setTimeLeft] = useState(4 * 3600 + 45 * 60 + 12); // Default to 4h 45m 12s

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (num: number) => num.toString().padStart(2, '0');

  if (loading) {
     return <section className="pt-2 pb-8 md:py-10 bg-pink-50 flex items-center justify-center min-h-[400px]">Loading deals...</section>;
  }

  // Taking first 5 products for flash sale
  const flashProducts = products.slice(4, 9);
  
  return (
    <section className="pt-2 pb-8 md:py-10 bg-pink-50">
      <div className="container mx-auto max-w-[1400px] px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-pink-100 overflow-hidden flex flex-col xl:flex-row">
          
          {/* Flash Sale Banner / Timer Side */}
          <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white p-8 xl:w-1/4 flex flex-col justify-center items-center text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
            <div className="relative z-10 w-full">
              <div className="inline-flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6">
                <Clock className="w-4 h-4 animate-pulse" />
                <span className="uppercase font-bold text-sm tracking-wider">Ending Soon</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-2">Deal of <br/> the Day</h2>
              <p className="text-pink-100 font-medium mb-8">Grab them before they are gone!</p>
              
              {/* Countdown Timer */}
              <div className="flex justify-center space-x-3 mb-8">
                <div className="bg-white text-pink-600 rounded-lg p-3 w-16 shadow-inner">
                  <span className="block text-2xl font-black">{pad(hours)}</span>
                  <span className="block text-[10px] uppercase font-bold text-gray-500 mt-1">Hours</span>
                </div>
                <div className="text-2xl font-black text-white self-center">:</div>
                <div className="bg-white text-pink-600 rounded-lg p-3 w-16 shadow-inner">
                  <span className="block text-2xl font-black">{pad(minutes)}</span>
                  <span className="block text-[10px] uppercase font-bold text-gray-500 mt-1">Mins</span>
                </div>
                <div className="text-2xl font-black text-white self-center">:</div>
                <div className="bg-white text-pink-600 rounded-lg p-3 w-16 shadow-inner">
                  <span className="block text-2xl font-black animate-pulse">{pad(seconds)}</span>
                  <span className="block text-[10px] uppercase font-bold text-gray-500 mt-1">Secs</span>
                </div>
              </div>

              
              <button className="bg-white text-pink-600 hover:bg-gray-100 w-full py-4 rounded-full font-black uppercase tracking-widest transition shadow-lg">
                View All Deals
              </button>
            </div>
          </div>

          {/* Flash Sale Products Grid */}
          <div className="xl:w-3/4 p-6 md:p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {flashProducts.map(product => (
                <ProductCard key={`flash-${product.id}`} product={product} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
