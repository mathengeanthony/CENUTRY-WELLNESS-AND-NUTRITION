import React from 'react';

export default function Packages() {
  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="container mx-auto max-w-[1400px] px-4">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter border-l-8 border-green-600 pl-6">Health Packages</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">Complete weight loss programs, Keto plans, and body transformation challenges tailored for you.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Weight Loss Kickstart", price: "KSh 9,900/mo", color: "pink" },
            { title: "Advanced Keto Plan", price: "KSh 14,900/mo", color: "green" },
            { title: "Body Transformation", price: "KSh 19,900/mo", color: "purple" }
          ].map((pkg, i) => (
            <div key={i} className={`bg-white p-8 rounded-2xl shadow-sm border-t-4 border-${pkg.color}-500 hover:shadow-xl transition flex flex-col`}>
              <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">{pkg.title}</h3>
              <div className={`text-4xl font-black text-${pkg.color}-600 mb-6`}>{pkg.price}</div>
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-center text-sm text-gray-600"><span className={`text-${pkg.color}-500 mr-2`}>✓</span> Personalized Diet Plan</li>
                <li className="flex items-center text-sm text-gray-600"><span className={`text-${pkg.color}-500 mr-2`}>✓</span> Weekly Consultations</li>
                <li className="flex items-center text-sm text-gray-600"><span className={`text-${pkg.color}-500 mr-2`}>✓</span> Supplement Discounts</li>
              </ul>
              <button className={`w-full py-4 bg-${pkg.color}-50 text-${pkg.color}-600 font-bold uppercase rounded-lg hover:bg-${pkg.color}-100 transition`}>Subscribe Now</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
