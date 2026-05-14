import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '../data';
import { Search as SearchIcon, ArrowLeft, Sparkles, Loader2 } from 'lucide-react';
import { useProducts } from '../ProductsContext';

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default function SearchResults() {
  const query = useQuery();
  const searchQuery = query.get('q') || '';
  const navigate = useNavigate();
  const { products, loading } = useProducts();

  const [aiLoading, setAiLoading] = useState(false);
  const [aiResults, setAiResults] = useState<Product[]>([]);
  const [aiDescription, setAiDescription] = useState<string | null>(null);

  // We still do standard literal search instantly
  const standardResults = useMemo(() => {
    if (!searchQuery) return [];
    if (loading) return [];
    const lowercaseQuery = searchQuery.toLowerCase();
    return products.filter(product => 
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.brand.toLowerCase().includes(lowercaseQuery) ||
      (product.subcategory && product.subcategory.toLowerCase().includes(lowercaseQuery))
    );
  }, [searchQuery, products, loading]);

  useEffect(() => {
    async function performAiSearch() {
      if (!searchQuery || loading) return;
      setAiLoading(true);
      setAiDescription(null);
      setAiResults([]);

      try {
        const response = await fetch('/api/search', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: searchQuery,
            products: products.map(p => ({
              id: p.id,
              name: p.name,
              categoryId: p.categoryId,
              subcategory: p.subcategory
            }))
          })
        });

        if (response.ok) {
          const data = await response.json();
          if (data.matchingProductIds && data.matchingProductIds.length > 0) {
            const mapped = data.matchingProductIds
              .map((id: string) => products.find(p => p.id === id))
              .filter(Boolean) as Product[];
            
            // Filter out items that are already in the exact match to avoid duplicates
            const newAiResults = mapped.filter(p => !standardResults.some(r => r.id === p.id));
            setAiResults(newAiResults);
            setAiDescription(data.aiMessage);
          }
        }
      } catch (err) {
        console.error("AI search failed", err);
      } finally {
        setAiLoading(false);
      }
    }

    // Debounce the call to avoid hitting the API too much on every keystroke
    const handler = setTimeout(performAiSearch, 800);
    return () => clearTimeout(handler);
  }, [searchQuery, standardResults, products, loading]);

  const searchResults = useMemo(() => {
     // Combine standard results + internal AI suggested results
     return [...standardResults, ...aiResults];
  }, [standardResults, aiResults]);

  const similarProducts = useMemo(() => {
    if (loading) return [];
    if (!searchQuery || searchResults.length >= 8) {
       // if we have lots of results, maybe just show some random
       return products.filter(p => !searchResults.some(r => r.id === p.id)).slice(0, 4);
    }
    
    // Otherwise return items from similar categories
    const resultCategories = Array.from(new Set(searchResults.map(p => p.categoryId)));
    if (resultCategories.length > 0) {
       const similar = products.filter(p => 
         resultCategories.includes(p.categoryId) && 
         !searchResults.some(r => r.id === p.id)
       );
       if (similar.length >= 4) return similar.slice(0, 4);
    }
    
    // Fallback to random popular products
    return products.filter(p => !searchResults.some(r => r.id === p.id)).sort((a,b) => b.rating - a.rating).slice(0, 4);
  }, [searchResults, searchQuery, products, loading]);

  return (
    <div className="bg-gray-50 flex-1 py-8">
      <div className="container mx-auto max-w-[1400px] px-4">
        
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm font-bold text-gray-500 mb-6 hover:text-pink-600 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-1" /> Back
        </button>

        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight flex items-center flex-wrap gap-2">
            Search Results for <span className="text-pink-500">"{searchQuery}"</span>
            {aiLoading && <Loader2 className="w-5 h-5 text-green-500 animate-spin ml-2" />}
          </h1>
          <p className="text-gray-500 mt-2 font-medium">Found {searchResults.length} product{searchResults.length !== 1 ? 's' : ''}</p>
          
          {aiDescription && (
            <div className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4 flex items-start">
              <Sparkles className="w-5 h-5 text-green-600 mr-3 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-green-800 font-medium leading-relaxed">{aiDescription}</p>
                <p className="text-xs text-green-600 mt-1">Suggested by AI Nutritionist</p>
              </div>
            </div>
          )}
        </div>

        {searchResults.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5 mb-12">
            {searchResults.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center flex flex-col items-center justify-center mb-12 shadow-sm">
            <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-4">
              <SearchIcon className="w-10 h-10 text-gray-300" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No products found for "{searchQuery}"</h2>
            <p className="text-gray-500 max-w-md mx-auto mb-6">
              We couldn't find anything matching your search. Try adjusting your spelling or using more general terms.
            </p>
            <Link to="/shop-by-category" className="bg-green-600 text-white font-bold py-3 px-8 rounded-full hover:bg-green-700 transition">
              Browse Categories
            </Link>
          </div>
        )}

        {/* Similar Products Section */}
        {similarProducts.length > 0 && (
          <div className="mt-12 border-t border-gray-200 pt-10">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mb-6">
              You Might Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
              {similarProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
