import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../data';
import { ArrowRight } from 'lucide-react';

interface ProductGridProps {
  title: string;
  products: Product[];
  actionLabel?: string;
}

export default function ProductGrid({ title, products, actionLabel = "View All Deals" }: ProductGridProps) {
  return (
    <section className="py-4 md:py-10 bg-white">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-200 pb-2 md:pb-3 mb-4 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight uppercase px-4 border-l-4 border-green-600">
              {title}
            </h2>
          </div>
          <button className="mt-4 md:mt-0 flex items-center text-pink-500 hover:text-green-700 font-bold uppercase text-sm tracking-wider transition group">
            {actionLabel} 
            <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grid */}
        {/* Added lg:grid-cols-5 mapping to correctly scale the products for a wide screen */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
