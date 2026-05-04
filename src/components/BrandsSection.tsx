import React, { useRef, useEffect } from 'react';
import { BRANDS } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const displayBrands = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS];

export default function BrandsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth } = scrollRef.current;
        const setWidth = scrollWidth / 4;
        
        if (scrollLeft >= setWidth * 2) {
          scrollRef.current.scrollTo({ left: scrollLeft - setWidth, behavior: 'auto' });
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (scrollRef.current) {
                scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
              }
            });
          });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-4 pb-2 md:py-8 bg-white border-y border-gray-100 relative">
      <div className="container mx-auto max-w-[1400px] px-4 relative">
        <div className="flex justify-between items-end mb-4 md:mb-8 border-b border-gray-200 pb-2 md:pb-3">
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase px-3 md:px-4 border-l-4 border-pink-500">Top Brands</h2>
            <Link to="/shop-by-category" state={{ activeTab: 'brands' }} className="font-bold text-[10px] md:text-sm text-green-700 hover:text-pink-500 hover:underline uppercase block md:hidden">View All</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/shop-by-category" state={{ activeTab: 'brands' }} className="font-bold text-xs md:text-sm text-green-700 hover:text-pink-500 hover:underline uppercase hidden md:block">View All</Link>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition bg-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition bg-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          {/* Mobile Arrows */}
          <button 
            onClick={scrollLeft}
            className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 shadow-md flex items-center justify-center bg-white/90 z-10 hover:text-pink-500"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto hide-scrollbar gap-4 md:gap-6 snap-x snap-mandatory pb-4"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {displayBrands.map((brand, i) => (
              <div key={i} className="bg-white border hover:border-green-500 rounded-lg p-6 flex items-center justify-center shrink-0 snap-start w-32 md:w-48 lg:w-56 aspect-[3/2] cursor-pointer shadow-sm hover:shadow-md transition-all">
                 <div className="text-center">
                   <span className="block font-black text-lg md:text-xl text-gray-300 group-hover:text-green-700 transition uppercase tracking-tighter">
                     {brand.name}
                   </span>
                 </div>
              </div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-gray-200 shadow-md flex items-center justify-center bg-white/90 z-10 hover:text-pink-500"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
