import React, { useState } from 'react';
import { ShoppingCart, Star, CheckCircle } from 'lucide-react';
import { Product } from '../data';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

export default function ProductCard({ product }: { product: Product; key?: React.Key }) {
  const currentPrice = product.currentPrice || product.price || 0;
  const offerPrice = product.offerPrice || product.oldPrice;
  const discount = product.percentageDiscount || (offerPrice ? Math.round(((offerPrice - currentPrice) / offerPrice) * 100) : 0);
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 flex flex-col h-full relative transition-all duration-300 hover:shadow-xl hover:border-pink-200 group">
      <Link to={`/product/${product.id}`} className="absolute inset-0 z-[1]"></Link>
      
      <div className="p-3 flex flex-col flex-1 relative z-[2] pointer-events-none">
        
        {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 flex-wrap max-w-[60%]">
        {product.discountText ? (
           <span className="bg-pink-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 flex-shrink-0 uppercase shadow-sm leading-none">
             {product.discountText}
           </span>
        ) : discount > 0 ? (
          <span className="bg-pink-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 flex-shrink-0 uppercase shadow-sm leading-none">
            Save {discount}%
          </span>
        ) : null}
        
        {product.isNew && (
          <span className="bg-green-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 w-max uppercase shadow-sm leading-none">
            New
          </span>
        )}
        {product.isKeto && (
          <span className="bg-blue-500 text-white text-[9px] sm:text-[10px] font-bold px-2 py-1 w-max uppercase shadow-sm leading-none">
            Keto
          </span>
        )}
      </div>

      {/* Image */}
      <div className="relative aspect-square w-full mb-3 overflow-hidden bg-white flex items-center justify-center p-2 rounded-md">
        <img 
          src={(product.images && product.images[0]) || product.image || ""} 
          alt={product.name} 
          referrerPolicy="no-referrer"
          onError={(e) => {
            const fallback = "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80";
            if (e.currentTarget.src !== fallback) {
              e.currentTarget.src = fallback;
            }
          }}
          className="object-contain h-[90%] w-[90%] group-hover:scale-110 transition-transform duration-500"
        />
        {/* Quick Add overlay */}
        <div className="absolute bottom-2 inset-x-2 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 z-20 hidden lg:block pointer-events-auto">
           <button onClick={handleAddToCart} className={`w-full ${added ? 'bg-green-600 text-white border-green-600' : 'bg-white/95 text-green-700 hover:bg-green-700 hover:text-white border-green-700'} backdrop-blur border py-2 rounded font-bold text-[11px] xl:text-xs transition shadow-lg flex justify-center items-center uppercase tracking-wide`}>
             {added ? <><CheckCircle className="w-4 h-4 mr-1.5" /> Added</> : <><ShoppingCart className="w-4 h-4 mr-1.5" /> Add to Cart</>}
           </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 text-left w-full h-full">
        <div className="flex justify-between items-start mb-1.5 min-h-[16px]">
          <span className="text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none bg-gray-50 px-1.5 py-0.5 rounded truncate max-w-[70%]">{product.brand}</span>
          <div className="flex items-center text-yellow-400 bg-yellow-50 px-1 py-0.5 rounded flex-shrink-0">
            <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
            <span className="text-[9px] sm:text-[10px] text-gray-600 ml-1 font-bold leading-none">{product.rating}</span>
          </div>
        </div>
        
        <h3 className="text-xs sm:text-sm font-semibold text-gray-900 mb-2 line-clamp-2 leading-snug group-hover:text-green-700 transition-colors flex-1">
          {product.name}
        </h3>
        
        {/* Price & Actions */}
        <div className="mt-auto flex items-end justify-between gap-1 pt-2 border-t border-gray-50">
          <div className="flex flex-col justify-end min-h-[32px]">
            {offerPrice ? (
              <span className="text-[10px] sm:text-xs text-gray-400 line-through font-semibold mb-0.5 leading-none">KSh {offerPrice.toLocaleString()}</span>
            ) : null}
            <span className="text-sm sm:text-lg font-black text-green-700 leading-none truncate max-w-[120px]">
              KSh {currentPrice.toLocaleString()}
            </span>
          </div>
           
           {/* Cart icon mobile */}
           <button onClick={handleAddToCart} className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${added ? 'bg-green-500 text-white border-green-600' : 'bg-pink-50 text-pink-500 hover:bg-pink-500 hover:text-white border-pink-100'} flex items-center justify-center transition lg:hidden shadow-sm border flex-shrink-0 pointer-events-auto`}>
             {added ? <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <ShoppingCart className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
           </button>
        </div>
      </div>
      </div>
    </div>
  );
}
