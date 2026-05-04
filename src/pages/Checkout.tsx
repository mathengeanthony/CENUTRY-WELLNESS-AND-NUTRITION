import React from 'react';
import { Phone, MapPin, Truck } from 'lucide-react';

export default function Checkout() {
  const cartItems = [
    { id: 1, name: "100% Gold Standard Whey Protein 5lbs", brand: "Optimum Nutrition", price: 10400, qty: 1, image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=400&q=80" },
    { id: 2, name: "C4 Original Pre-Workout 60 Servings", brand: "Cellucor", price: 4550, qty: 1, image: "https://images.unsplash.com/photo-1579722820308-d74e571900a9?auto=format&fit=crop&w=400&q=80" },
    { id: 3, name: "Platinum Multivitamin - 90 Tablets", brand: "MuscleTech", price: 3185, qty: 1, image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80" }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const delivery = 300;
  const total = subtotal + delivery;

  return (
    <div className="flex-1 bg-gray-50 py-12">
      <div className="container mx-auto max-w-[1400px] px-4">
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 uppercase tracking-tighter border-l-8 border-pink-500 pl-6">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Form & Delivery Details */}
          <div className="lg:w-2/3 flex flex-col gap-6 order-2 lg:order-1">
            <div id="delivery-details" className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col order-2 lg:order-1 shadow-sm">
              <h2 className="text-xl font-bold uppercase mb-6 text-gray-800 flex items-center border-b pb-4"><MapPin className="mr-2 text-green-600" /> Delivery Details</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">First Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="+254 7XX XXX XXX" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Delivery Address / Location</label>
                  <textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500 mb-2" rows={3} placeholder="Enter your full delivery address within Kenya..."></textarea>
                  <button type="button" className="w-full flex items-center justify-center py-3 bg-blue-50 text-blue-700 font-bold uppercase text-sm rounded-lg border border-blue-200 hover:bg-blue-100 transition">
                    <MapPin className="w-4 h-4 mr-2" />
                    Submit Google Map Location Pin
                  </button>
                </div>
              </form>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 order-1 lg:order-2">
              <h2 className="text-xl font-bold uppercase mb-6 text-gray-800 flex items-center border-b pb-4"><Truck className="mr-2 text-green-600" /> Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center p-3 border border-green-500 bg-green-50 rounded-xl cursor-pointer">
                  <input type="radio" name="payment" defaultChecked className="text-green-600 w-5 h-5 focus:ring-green-500" />
                  <span className="ml-3 font-bold text-green-900">M-Pesa on Delivery</span>
                </label>
                <label className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="text-green-600 w-5 h-5 focus:ring-green-500" />
                  <span className="ml-3 font-bold text-gray-700">Cash on Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Cart Order Summary */}
          <div className="lg:w-1/3 order-1 lg:order-2">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-12">
              <h2 className="text-xl font-bold uppercase mb-6 text-gray-800 border-b pb-4 shrink-0">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-1 text-sm">
                      <p className="font-bold text-gray-800 line-clamp-2">{item.name}</p>
                      <p className="text-[10px] text-gray-500 mb-1 uppercase font-semibold">{item.brand}</p>
                      <div className="flex justify-between items-center mt-1">
                        <span className="font-semibold text-gray-600">Qty: {item.qty}</span>
                        <span className="font-black text-green-700">KSh {item.price.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm font-semibold text-gray-600">
                  <span>Subtotal</span>
                  <span>KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-gray-600">
                  <span>Delivery Fee</span>
                  <span>KSh {delivery.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-black text-gray-900 border-t border-gray-200 pt-3">
                  <span>Total</span>
                  <span className="text-pink-600">KSh {total.toLocaleString()}</span>
                </div>
              </div>

              {/* Confirm Your Order Button With Call Icon */}
              <a 
                href="tel:+254736921630" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-2 rounded-xl font-black uppercase text-[15px] sm:text-base tracking-wider flex items-center justify-center transition shadow-lg group mb-3"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform fill-current" /> Confirm Your Order
              </a>

              <button 
                onClick={() => document.getElementById('delivery-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white border border-green-600 text-green-700 hover:bg-green-50 py-4 px-2 rounded-xl font-black uppercase text-[15px] sm:text-base tracking-wider flex items-center justify-center transition shadow-sm group lg:hidden"
              >
                <MapPin className="w-5 h-5 mr-2" /> Delivery Details
              </button>
              
              <p className="text-[10px] text-gray-400 mt-4 text-center font-medium leading-relaxed">
                By clicking "Confirm Your Order", you will be connected via phone Call to our sales team to verify your delivery address and fulfill the order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
