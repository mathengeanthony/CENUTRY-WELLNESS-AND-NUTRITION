import React, { useRef, useEffect } from 'react';
import { CATEGORIES } from '../data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const displayCategories = [...CATEGORIES, ...CATEGORIES, ...CATEGORIES, ...CATEGORIES];

export default function CategoryGrid() {
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
    <section className="pt-2 pb-2 md:py-8 bg-gray-50 border-y border-gray-100 relative">
      <div className="container mx-auto max-w-[1400px] px-4 relative">
        <div className="flex justify-between items-center mb-4 md:mb-8">
          <div className="flex items-center gap-3">
            <h2 className="text-xl md:text-3xl font-black text-gray-900 tracking-tight uppercase">Shop by <span className="text-pink-500">Category</span></h2>
            <Link to="/shop-by-category" state={{ activeTab: 'categories' }} className="font-bold text-[10px] md:text-sm text-pink-500 hover:text-green-700 hover:underline uppercase block md:hidden">View All</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/shop-by-category" state={{ activeTab: 'categories' }} className="font-bold text-xs md:text-sm text-pink-500 hover:text-green-700 hover:underline uppercase hidden md:block">View All</Link>
            <div className="hidden md:flex gap-2">
              <button 
                onClick={scrollLeft}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition bg-white"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollRight}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-pink-500 hover:text-pink-500 transition bg-white"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          {/* Mobile Arrows (absolute positioning over content) */}
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
            {displayCategories.map((category, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer shrink-0 snap-start w-28 md:w-36 lg:w-40">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow-md mb-4 overflow-hidden bg-white flex items-center justify-center border hover:border-pink-500 group-hover:shadow-xl transition-all duration-300 relative border-gray-200">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-[80%] h-[80%] object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-xs md:text-sm font-bold text-gray-700 text-center uppercase tracking-tight group-hover:text-green-700 transition-colors px-2 leading-tight">
                  {category.name}
                </span>
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
