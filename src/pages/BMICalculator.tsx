import React, { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      const heightInMeters = h / 100;
      setBmi(w / (heightInMeters * heightInMeters));
    }
  };

  const getStatus = (value: number) => {
    if (value < 18.5) return 'Underweight';
    if (value < 25) return 'Normal weight';
    if (value < 30) return 'Overweight';
    return 'Obese';
  };

  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="container mx-auto max-w-[1400px] px-4 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter text-center">BMI <span className="text-green-600">Calculator</span></h1>
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Height (cm)</label>
                <input 
                  type="number" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" 
                  placeholder="175" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Weight (kg)</label>
                <input 
                  type="number" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" 
                  placeholder="70" 
                />
              </div>
            </div>
            
            <button 
              type="button" 
              onClick={calculateBMI}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold uppercase py-4 rounded-lg transition shadow-lg"
            >
              Calculate BMI
            </button>
            
            <div className="mt-8 p-6 bg-pink-50 border border-pink-100 rounded-xl text-center">
              <span className="block text-sm font-bold text-pink-600 uppercase tracking-widest mb-2">Your BMI</span>
              <span className="block text-5xl font-black text-gray-900 tracking-tighter">
                {bmi ? bmi.toFixed(1) : '--'}
              </span>
              {bmi ? (
                <p className="text-sm font-bold text-gray-700 mt-4 uppercase">Status: <span className="text-pink-600">{getStatus(bmi)}</span></p>
              ) : (
                <p className="text-sm text-gray-500 mt-4">Enter your height and weight to see your result.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
