import React from 'react';
import { ARTICLES } from '../data';
import { ArrowRight, Calendar } from 'lucide-react';

export default function ArticlesSection() {
  return (
    <section className="py-6 md:py-10 bg-white">
      <div className="container mx-auto max-w-[1400px] px-4">
        <div className="flex justify-between items-end mb-4 md:mb-8 border-b border-gray-200 pb-2 md:pb-3">
          <h2 className="text-2xl font-black text-gray-900 tracking-tight uppercase px-4 border-l-4 border-green-600">Health & Diet Articles</h2>
          <a href="#" className="font-bold text-sm text-pink-500 hover:text-green-700 hover:underline uppercase">View All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ARTICLES.map((article) => (
            <div key={article.id} className="group cursor-pointer">
              <div className="relative h-48 md:h-64 rounded-xl overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pink-600 rounded">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500 font-semibold mb-2">
                <Calendar className="w-3 h-3 mr-1" /> {article.date}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-green-700 transition">
                {article.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                Discover the best tips and professional advice from our top dietitians to help you achieve your goals faster.
              </p>
              <div className="text-pink-500 font-bold text-sm flex items-center group-hover:underline">
                Read More <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
