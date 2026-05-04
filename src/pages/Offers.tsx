import React from 'react';

export default function Offers() {
  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="container mx-auto max-w-[1400px] px-4">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter border-l-8 border-pink-500 pl-6">Offers & Discounts</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { discount: "50% OFF", title: "Summer Shred Sale", code: "SUMMER50" },
            { discount: "BUY 1 GET 1", title: "Whey Protein Tubs", code: "BOGOWHEY" },
            { discount: "20% OFF", title: "All Pre-Workouts", code: "PRE20" }
          ].map((offer, i) => (
            <div key={i} className="bg-gradient-to-br from-pink-500 to-pink-700 text-white p-8 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
              <div className="relative z-10 text-center">
                <div className="text-4xl font-black mb-2 tracking-tighter">{offer.discount}</div>
                <h3 className="text-xl font-bold uppercase mb-6 text-pink-100">{offer.title}</h3>
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider block mb-1">Use Code</span>
                  <span className="text-2xl font-mono font-bold tracking-widest">{offer.code}</span>
                </div>
                <button className="w-full bg-white text-pink-600 font-bold uppercase py-3 rounded-lg hover:bg-gray-100 transition">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
