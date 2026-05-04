import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-green-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 z-10 pr-0 md:pr-12 text-center md:text-left mb-8 md:mb-0">
            <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-xs font-bold tracking-wider uppercase mb-6 border border-pink-200">
              Mega Sale Active
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
              Fuel Your <br/>
              <span className="text-green-600">Greatness</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Discover top-tier sports nutrition, vitamins, and supplements to achieve your absolute best body.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg transition shadow-lg shadow-pink-500/30">
                Shop Premium
              </button>
              <button className="bg-white hover:bg-gray-50 text-green-700 px-8 py-4 rounded-full font-bold text-lg transition shadow border border-gray-200">
                View Deals
              </button>
            </div>
          </div>

          {/* Hero Images Group */}
          <div className="w-full md:w-1/2 relative min-h-[400px] flex items-center justify-center">
            {/* Background Blob/Circle */}
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000 right-0 top-0"></div>
            
            {/* Main Hero Elements (Abstract placement since we lack transparent PNGs) */}
            <div className="relative z-10 w-full max-w-md bg-white p-4 rounded-2xl shadow-2xl border border-gray-100 transform rotate-[-3deg] hover:rotate-0 transition duration-500">
               <img 
                 src="https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=800&q=80" 
                 alt="Premium Supplements" 
                 className="rounded-xl w-full object-cover h-[300px]"
               />
               <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-4 rounded-full w-24 h-24 flex items-center justify-center flex-col shadow-xl">
                 <span className="text-sm font-medium leading-none">UP TO</span>
                 <span className="text-3xl font-extrabold leading-none">50%</span>
                 <span className="text-xs font-bold">OFF</span>
               </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Slider Controls mock */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        <button className="w-3 h-3 rounded-full bg-green-600"></button>
        <button className="w-3 h-3 rounded-full bg-green-300"></button>
        <button className="w-3 h-3 rounded-full bg-green-300"></button>
      </div>
    </div>
  );
}
