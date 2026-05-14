import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Zap, Award, LayoutGrid } from 'lucide-react';

const BANNERS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80",
    badge: "Flash Deal",
    title: "Summer",
    highlight: "Shred",
    desc: "Up to 60% off on all fat burners and Keto essentials + Free Smart Shaker.",
    btnText: "Shop Sale"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1920&q=80",
    badge: "Proteins",
    title: "Premium",
    highlight: "Whey",
    desc: "Build muscle with our top tier whey protein isolates. Multiple flavors available.",
    btnText: "Discover Whey"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1920&q=80",
    badge: "Vitamins",
    title: "Daily",
    highlight: "Wellness",
    desc: "Boost your immunity with our extensive range of vitamins and minerals. Support your body naturally.",
    btnText: "Explore Vitamins"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=1920&q=80",
    badge: "Joint Care",
    title: "Active",
    highlight: "Joints",
    desc: "Glucosamine & Chondroitin complexes to keep you moving comfortably every day.",
    btnText: "Shop Joint Support"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1920&q=80",
    badge: "Performance",
    title: "Explosive",
    highlight: "Energy",
    desc: "Pre-workouts formulated to push your limits and maximize every session.",
    btnText: "Get Energetic"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&q=80",
    badge: "Dietary",
    title: "Keto",
    highlight: "Essentials",
    desc: "Stay in ketosis effortlessly with our range of low-carb, high-fat supplements.",
    btnText: "Shop Keto"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=1920&q=80",
    badge: "Gut Health",
    title: "Happy",
    highlight: "Biome",
    desc: "Probiotics and digestive enzymes to support your digestive health optimally.",
    btnText: "Explore Probiotics"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80",
    badge: "Recovery",
    title: "Nighttime",
    highlight: "Repair",
    desc: "ZMA and sleep support formulas for enhanced muscle recovery while you rest.",
    btnText: "Shop Recovery"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1564149504298-00c351fd7f16?auto=format&fit=crop&w=1920&q=80",
    badge: "Brain Health",
    title: "Mental",
    highlight: "Focus",
    desc: "Nootropics and Omega-3s clinically proven to enhance cognitive clarity and focus.",
    btnText: "Boost Focus"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1920&q=80",
    badge: "Mens Health",
    title: "Vitality",
    highlight: "Boost",
    desc: "Testosterone support and men's multi-vitamins for everyday peak performance.",
    btnText: "Shop Men's"
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1920&q=80",
    badge: "Womens Health",
    title: "Radiant",
    highlight: "Glow",
    desc: "Collagen, Biotin & specialized multivitamins to support women's unique health needs.",
    btnText: "Shop Women's"
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1551847677-dc82d762e1fd?auto=format&fit=crop&w=1920&q=80",
    badge: "Pantry",
    title: "Healthy",
    highlight: "Snacks",
    desc: "Guilt-free protein bars and healthy snacks to satisfy your cravings any time.",
    btnText: "View Snacks"
  }
];

export default function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % BANNERS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      {/* Scrolling Marquee */}
      <div className="bg-pink-600 text-white py-2 overflow-hidden flex whitespace-nowrap w-full">
        <div className="animate-marquee inline-block font-bold tracking-widest uppercase text-xs md:text-sm will-change-transform">
          {/* First set */}
          <span className="mx-4"><Zap className="inline w-4 h-4 mr-1 text-yellow-300" /> MEGA SALE 50% OFF</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FREE SHIPPING ON ORDERS OVER KSh 5,000</span>
          <span className="mx-4">•</span>
          <span className="mx-4">NEW WHEY ISOLATE FLAVORS</span>
          <span className="mx-4">•</span>
          <span className="mx-4"><Zap className="inline w-4 h-4 mr-1 text-yellow-300" /> MEGA SALE 50% OFF</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FREE SHIPPING ON ORDERS OVER KSh 5,000</span>
          <span className="mx-4">•</span>
          <span className="mx-4">NEW WHEY ISOLATE FLAVORS</span>
          
          {/* Second set (duplicate for seamless loop) */}
          <span className="mx-4">•</span>
          <span className="mx-4"><Zap className="inline w-4 h-4 mr-1 text-yellow-300" /> MEGA SALE 50% OFF</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FREE SHIPPING ON ORDERS OVER KSh 5,000</span>
          <span className="mx-4">•</span>
          <span className="mx-4">NEW WHEY ISOLATE FLAVORS</span>
          <span className="mx-4">•</span>
          <span className="mx-4"><Zap className="inline w-4 h-4 mr-1 text-yellow-300" /> MEGA SALE 50% OFF</span>
          <span className="mx-4">•</span>
          <span className="mx-4">FREE SHIPPING ON ORDERS OVER KSh 5,000</span>
          <span className="mx-4">•</span>
          <span className="mx-4">NEW WHEY ISOLATE FLAVORS</span>
        </div>
      </div>

      <div className="group relative">
        {/* Slider */}
        <div className="w-full overflow-hidden flex relative h-[260px] sm:h-[300px] md:h-[380px] lg:h-[460px]">
          {BANNERS.map((banner, index) => (
            <div 
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={banner.image} 
                alt={banner.title} 
                className="w-full h-full object-cover object-center absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
              
              <div className="container mx-auto max-w-[1400px] px-6 md:px-8 relative h-full flex items-center">
                <div className="text-white max-w-xl py-4 sm:py-8 md:py-12">
                  <span className="inline-block px-2.5 py-1 bg-pink-500 text-white font-bold text-[9px] md:text-[11px] xl:text-xs tracking-widest uppercase mb-2 md:mb-3 rounded-sm leading-none">
                    {banner.badge}
                  </span>
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-1.5 md:mb-3 uppercase leading-none tracking-tight shadow-sm">
                    {banner.title} <br/><span className="text-green-400">{banner.highlight}</span>
                  </h1>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-3 md:mb-6 font-light max-w-[280px] sm:max-w-xs md:max-w-md line-clamp-2 md:line-clamp-none text-gray-100">
                    {banner.desc}
                  </p>
                  <button className="bg-pink-500 hover:bg-pink-600 text-white text-[10px] sm:text-xs md:text-sm font-bold px-4 py-2 md:px-8 md:py-3.5 uppercase tracking-widest transition flex items-center shadow-lg">
                    {banner.btnText} <ChevronRight className="ml-1 md:ml-2 w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows for Slider */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/30 hover:bg-white flex items-center justify-center rounded-full text-white hover:text-pink-500 transition opacity-0 group-hover:opacity-100 backdrop-blur-sm shadow-xl z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 rotate-180" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/30 hover:bg-white flex items-center justify-center rounded-full text-white hover:text-pink-500 transition opacity-0 group-hover:opacity-100 backdrop-blur-sm shadow-xl z-20"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Slider dots */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 md:space-x-3 z-30 bg-black/30 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-sm">
            {BANNERS.map((_, index) => (
              <button 
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-6 md:w-8 bg-pink-500' : 'w-2 md:w-3 bg-white hover:bg-pink-300'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons Below Slider */}
      <div className="bg-white border-b border-gray-200 relative z-20 shadow-sm">
        <div className="container flex mx-auto max-w-[1400px] divide-x divide-gray-100">
           <Link to="/shop-by-category" state={{ activeTab: 'brands' }} className="flex-1 py-2.5 md:py-3.5 px-2 flex flex-row items-center justify-center hover:bg-pink-50 transition text-black hover:text-pink-600 group gap-1.5 md:gap-2.5">
              <Award className="w-4 h-4 md:w-5 md:h-5 text-black group-hover:text-pink-500 transition-colors" />
              <span className="text-[10px] md:text-[11px] lg:text-xs font-black uppercase tracking-widest mt-0.5">Shop By Brand</span>
           </Link>
           <Link to="/shop-by-category" state={{ activeTab: 'categories' }} className="flex-1 py-2.5 md:py-3.5 px-2 flex flex-row items-center justify-center hover:bg-green-50 transition text-black hover:text-green-700 group gap-1.5 md:gap-2.5">
              <LayoutGrid className="w-4 h-4 md:w-5 md:h-5 text-black group-hover:text-green-600 transition-colors" />
              <span className="text-[10px] md:text-[11px] lg:text-xs font-black uppercase tracking-widest mt-0.5">Shop By Category</span>
           </Link>
        </div>
      </div>

    </div>
  );
}
