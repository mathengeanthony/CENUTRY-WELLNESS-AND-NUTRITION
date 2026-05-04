import React from 'react';

export default function Branches() {
  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="container mx-auto max-w-[1400px] px-4">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter border-l-8 border-pink-500 pl-6">Our Branches</h1>
        <p className="text-gray-600 mb-8">Find a Century Wellness branch near you.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <h3 className="text-xl font-bold text-green-800 mb-2">Century Nutrition and Wellness</h3>
            <p className="text-sm text-gray-500 mb-4">Kunjam Arcade, Magadi Road, Ongata Rongai, Kenya</p>
            <p className="text-sm font-semibold text-gray-700 mb-4">+254 736 921630</p>
            <button className="text-pink-600 font-bold text-sm uppercase tracking-wider hover:underline" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>View on Map</button>
          </div>
        </div>
      </div>
    </div>
  );
}
