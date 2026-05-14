import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, ChevronDown, ArrowLeft } from 'lucide-react';
import { CATEGORIES, BRANDS } from '../data';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../ProductsContext';

export default function ShopByCategory() {
  const location = useLocation();
  const { products, loading } = useProducts();
  const [activeTab, setActiveTab] = useState<'categories' | 'brands'>('categories');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>(CATEGORIES[0].id);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  // Dynamically generate category details from products
  const CATEGORY_DETAILS = useMemo(() => {
    return CATEGORIES.map((cat) => {
      const categoryProducts = products.filter(p => p.categoryId === cat.id);
      
      // Group by subcategory
      const subcategoryMap = categoryProducts.reduce((acc: Record<string, number>, product) => {
        const subName = product.subcategory || 'Other';
        if (!acc[subName]) {
          acc[subName] = 0;
        }
        acc[subName]++;
        return acc;
      }, {});
      
      const subcategories = Object.entries(subcategoryMap).map(([name, count], index) => ({
        id: `${cat.id}-sub-${index}`,
        name,
        count: count as number
      }));
      
      // Fallback if empty
      if (subcategories.length === 0) {
        subcategories.push({ id: `${cat.id}-sub-none`, name: 'All Products', count: 0 });
      }

      return {
        ...cat,
        subcategories
      };
    });
  }, [products]);

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  // Reset subcategory when main category changes
  useEffect(() => {
    setSelectedSubcategory(null);
  }, [selectedCategoryId]);

  if (loading) {
     return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  const selectedCategoryData = CATEGORY_DETAILS.find(c => c.id === selectedCategoryId) || CATEGORY_DETAILS[0];

  const renderCategoryProducts = () => {
    const filteredProducts = products.filter(
      p => p.categoryId === selectedCategoryId && (!selectedSubcategory || p.subcategory === selectedSubcategory || (selectedSubcategory === 'All Products' && !p.subcategory))
    );

    return (
      <div className="flex-1 bg-gray-50 p-3 md:p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
        <button 
          onClick={() => setSelectedSubcategory(null)}
          className="flex items-center text-sm font-bold text-pink-500 mb-4 hover:text-pink-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to Subcategories
        </button>
        <h3 className="text-xl font-bold mb-4 text-gray-900 border-l-4 border-green-500 pl-3">
          {selectedSubcategory}
        </h3>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-500 mb-2 font-medium">No products available in this subcategory yet.</p>
            <p className="text-sm text-gray-400">Check back later for new arrivals.</p>
          </div>
        )}
      </div>
    );
  };

  const renderBrandProducts = () => {
    const filteredProducts = products.filter(p => p.brand === selectedBrand);

    return (
      <div className="flex-1 p-3 md:p-6 bg-white w-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
        <button 
          onClick={() => setSelectedBrand(null)}
          className="flex items-center text-sm font-bold text-pink-500 mb-4 hover:text-pink-600 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-1" /> Back to All Brands
        </button>
        <h3 className="text-2xl font-black mb-6 tracking-tight text-gray-900 border-l-4 border-pink-500 px-3 uppercase">
          {selectedBrand}
        </h3>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-xl border border-gray-100">
            <p className="text-gray-500 mb-2 font-medium">No products listed under {selectedBrand} yet.</p>
            <p className="text-sm text-gray-400">We are restocking soon.</p>
          </div>
        )}
      </div>
    );
  };

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
            onClick={() => { setActiveTab('brands'); setSelectedBrand(null); }}
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
          onClick={() => { setActiveTab('brands'); setSelectedBrand(null); }}
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
                      <img src={category.image} alt={category.name} className="w-[80%] h-[80%] object-contain rounded-sm" />
                    </div>
                    <span className="font-semibold text-[9px] sm:text-[11px] md:text-sm leading-tight pr-1">{category.name}</span>
                  </div>
                  {selectedCategoryId === category.id && (
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white/70" />
                  )}
                </button>
              ))}
            </div>

            {/* Right Content - Subcategories or Products */}
            {selectedSubcategory ? (
              renderCategoryProducts()
            ) : (
              <div className="flex-1 bg-gray-50 p-2 md:p-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
                <div className="space-y-2 md:space-y-3">
                  {selectedCategoryData.subcategories.map((sub) => (
                    <div 
                      key={sub.id} 
                      onClick={() => setSelectedSubcategory(sub.name)}
                      className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 flex items-center justify-between cursor-pointer hover:border-pink-300 hover:shadow-md transition-shadow group"
                    >
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
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-pink-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          /* Brands Tab Content */
          selectedBrand ? (
            renderBrandProducts()
          ) : (
            <div className="flex-1 p-3 md:p-6 bg-white w-full overflow-y-auto" style={{ maxHeight: 'calc(100vh - 140px)' }}>
              <h2 className="text-lg md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight text-gray-900 border-l-4 border-pink-500 px-2 md:px-3">Top Brands</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4">
                {BRANDS.map((brand, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedBrand(brand.name)}
                    className="border border-gray-200 rounded-lg p-2 md:p-4 flex flex-col items-center justify-center hover:border-green-500 hover:shadow-md md:hover:shadow-xl transition-all cursor-pointer group aspect-square"
                  >
                    <div className="w-full h-8 md:h-16 flex items-center justify-center mb-1 md:mb-3">
                      <img src={brand.logo} alt={brand.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0" />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-center text-gray-700 group-hover:text-green-700 uppercase leading-tight">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
