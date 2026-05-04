import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ChevronDown } from 'lucide-react';
import { CATEGORIES, BRANDS } from '../data';

// Extended mock data for subcategories
const CATEGORY_DETAILS = CATEGORIES.map((cat, index) => ({
  ...cat,
  subcategories: index === 0 ? [
    { id: 'sub1', name: 'Proteins', count: 5 },
    { id: 'sub2', name: 'BCAA', count: 0 },
    { id: 'sub3', name: 'Amino & EAAS', count: 0 },
    { id: 'sub4', name: 'Glutamine', count: 0 },
    { id: 'sub5', name: 'Pre-Workout', count: 3 },
    { id: 'sub6', name: 'Post-Workout', count: 0 },
    { id: 'sub7', name: 'Intra-Workout', count: 2 },
    { id: 'sub8', name: 'Creatine', count: 3 },
    { id: 'sub9', name: 'Testosterone Boosters', count: 3 },
  ] : [
    { id: `sub${index}_1`, name: 'All Products', count: Math.floor(Math.random() * 20) + 1 }
  ]
}));

export default function ShopByCategory() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'categories' | 'brands'>('categories');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATEGORIES[0].id);

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const selectedCategoryData = CATEGORY_DETAILS.find(c => c.id === selectedCategoryId) || CATEGORY_DETAILS[0];

  return (
    <div className="bg-gray-50 flex-1 flex flex-col">
      {/* Top Secondary Nav / Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 hidden md:block">
        <div className="container mx-auto max-w-[1400px] px-4 flex items-center space-x-6 overflow-x-auto text-sm font-semibold text-gray-600">
          <button 
            onClick={() => setActiveTab('categories')}
            className={`py-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'categories' ? 'border-pink-500 text-pink-500' : 'border-transparent hover:text-gray-900'}`}
          >
            All Categories
          </button>
          <button 
            onClick={() => setActiveTab('brands')}
            className={`py-4 whitespace-nowrap border-b-2 transition-colors ${activeTab === 'brands' ? 'border-pink-500 text-pink-500' : 'border-transparent hover:text-gray-900'}`}
          >
            Shop by Brand
          </button>
          <Link to="/branches" className="py-4 whitespace-nowrap cursor-pointer hover:text-gray-900">Branches</Link>
          <Link to="/packages" className="py-4 whitespace-nowrap cursor-pointer hover:text-gray-900">Healthy Package</Link>
          <Link to="/book-appointment" className="py-4 whitespace-nowrap cursor-pointer hover:text-gray-900">Book Appointment</Link>
          <Link to="/offers" className="py-4 whitespace-nowrap cursor-pointer hover:text-gray-900">Offers & Discounts</Link>
        </div>
      </div>
      
      {/* Mobile Tabs */}
      <div className="md:hidden bg-white border-b border-gray-200 flex">
        <button 
          onClick={() => setActiveTab('categories')}
          className={`flex-1 py-3 text-sm font-bold uppercase transition-colors ${activeTab === 'categories' ? 'bg-pink-50 text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'}`}
        >
          Categories
        </button>
        <button 
          onClick={() => setActiveTab('brands')}
          className={`flex-1 py-3 text-sm font-bold uppercase transition-colors ${activeTab === 'brands' ? 'bg-pink-50 text-pink-500 border-b-2 border-pink-500' : 'text-gray-500'}`}
        >
          Brands
        </button>
      </div>

      <div className="container mx-auto max-w-[1400px] bg-white flex-1 flex flex-row shadow-sm">
        {activeTab === 'categories' ? (
          <>
            {/* Left Sidebar - Categories */}
            <div className="w-[35%] sm:w-[30%] md:w-1/3 lg:w-1/4 border-r border-gray-200 overflow-y-auto shrink-0" style={{ maxHeight: 'calc(100vh - 140px)' }}>
              {CATEGORY_DETAILS.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                  className={`w-full flex items-center justify-between p-3 md:p-4 border-b border-gray-100 transition-colors text-left ${
                    selectedCategoryId === category.id 
                      ? 'bg-purple-800 text-white' 
                      : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className={`w-6 h-6 md:w-10 md:h-10 shrink-0 rounded-sm overflow-hidden bg-white flex items-center justify-center p-0.5 md:p-1 ${selectedCategoryId === category.id ? 'opacity-90' : ''}`}>
                      <img src={category.image} alt={category.name} className="w-full h-full object-cover rounded-sm" />
                    </div>
                    <span className="font-semibold text-[9px] sm:text-[11px] md:text-sm leading-tight pr-1">{category.name}</span>
                  </div>
                  {selectedCategoryId === category.id && (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Content - Subcategories */}
            <div className="flex-1 bg-gray-50 p-2 md:p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
              <div className="space-y-2 md:space-y-3">
                {selectedCategoryData.subcategories.map((sub) => (
                  <div key={sub.id} className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex items-center justify-between cursor-pointer hover:border-pink-300 hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-2 md:gap-4">
                       <div className="w-6 h-6 md:w-8 md:h-8 rounded shrink-0 bg-gray-100 p-0.5 md:p-1 flex items-center justify-center">
                         <img src={selectedCategoryData.image} alt="" className="w-full h-full object-cover opacity-80" />
                       </div>
                       <span className="font-semibold text-gray-800 group-hover:text-pink-600 transition-colors text-xs md:text-base leading-tight">{sub.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 md:gap-3">
                      {sub.count > 0 && (
                        <span className="bg-gray-100 text-gray-500 text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-sm">{sub.count}</span>
                      )}
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-pink-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Brands Tab Content */
          <div className="flex-1 p-3 md:p-6 bg-white w-full">
            <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight text-gray-900 border-l-4 border-pink-500 px-2 md:px-3">Top Brands</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
              {BRANDS.map((brand, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-2 md:p-4 flex flex-col items-center justify-center hover:border-green-500 hover:shadow-md md:hover:shadow-xl transition-all cursor-pointer group aspect-square">
                  <div className="w-full h-8 md:h-16 flex items-center justify-center mb-1 md:mb-3">
                    <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-center text-gray-700 group-hover:text-green-700 uppercase leading-tight">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
