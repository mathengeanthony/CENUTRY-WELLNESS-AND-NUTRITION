import React, { useState } from 'react';
import { MapPin, Truck, MessageCircle, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const { cart, cartTotal, clearCart, updateQuantity, removeFromCart } = useCart();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('M-Pesa on Delivery');

  const delivery = 300;
  const total = cartTotal + delivery;

  const handleWhatsAppCheckout = (e: React.MouseEvent) => {
    e.preventDefault();
    
    let message = `*NEW ORDER* 🛒\n\n`;
    message += `*Customer Details*\n`;
    message += `Name: ${firstName || '[Not Provided]'} ${lastName || ''}\n`;
    message += `Phone: ${phone || '[Not Provided]'}\n`;
    message += `Address: ${address || '[Not Provided]'}\n\n`;
    
    message += `*Order Items*\n`;
    cart.forEach(item => {
      message += `- ${item.name} (x${item.qty}) - KSh ${(item.price * item.qty).toLocaleString()}\n`;
    });
    
    message += `\n*Payment Method*: ${paymentMethod}\n`;
    message += `*Subtotal*: KSh ${cartTotal.toLocaleString()}\n`;
    message += `*Delivery*: KSh ${delivery.toLocaleString()}\n`;
    message += `*Total*: KSh ${total.toLocaleString()}\n\n`;
    message += `Please confirm my order.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254707147774?text=${encodedMessage}`, '_blank');
    
    // Optional: Only clear cart if needed, mostly whatsapp takes them away, so we can clean up
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="flex-1 bg-gray-50 flex items-center justify-center py-20 px-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center max-w-lg w-full border border-gray-100">
          <div className="bg-pink-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 tracking-tight">Your Cart is Empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet. Discover our premium clinical supplements today.</p>
          <Link to="/shop-by-category" className="bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

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
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Last Name</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Phone Number</label>
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500" placeholder="+254 7XX XXX XXX" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase mb-2">Delivery Address / Location</label>
                  <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm focus:outline-none focus:border-green-500 mb-2" rows={3} placeholder="Enter your full delivery address within Kenya..."></textarea>
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
                  <input type="radio" name="payment" value="M-Pesa on Delivery" checked={paymentMethod === 'M-Pesa on Delivery'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-green-600 w-5 h-5 focus:ring-green-500" />
                  <span className="ml-3 font-bold text-green-900">M-Pesa on Delivery</span>
                </label>
                <label className="flex items-center p-3 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" value="Cash on Delivery" checked={paymentMethod === 'Cash on Delivery'} onChange={(e) => setPaymentMethod(e.target.value)} className="text-green-600 w-5 h-5 focus:ring-green-500" />
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
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const fallback = "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80";
                          if (e.currentTarget.src !== fallback) {
                            e.currentTarget.src = fallback;
                          }
                        }}
                        className="w-12 h-12 object-contain mix-blend-multiply" 
                      />
                    </div>
                    <div className="flex-1 text-sm flex flex-col">
                      <p className="font-bold text-gray-800 line-clamp-2">{item.name}</p>
                      <p className="text-[10px] text-gray-500 mb-1 uppercase font-semibold">{item.brand}</p>
                      <div className="flex justify-between items-center mt-auto">
                        <div className="flex items-center space-x-2">
                          <button onClick={() => updateQuantity(item.cartItemId, -1)} className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded font-bold">-</button>
                          <span className="font-semibold text-gray-600 text-xs w-4 text-center">{item.qty}</span>
                          <button onClick={() => updateQuantity(item.cartItemId, 1)} className="w-6 h-6 flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-600 rounded font-bold">+</button>
                          <button onClick={() => removeFromCart(item.cartItemId)} className="w-6 h-6 flex items-center justify-center text-red-400 hover:text-red-600 hover:bg-red-50 rounded transition ml-2">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <span className="font-black text-green-700">KSh {(item.price * item.qty).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm font-semibold text-gray-600">
                  <span>Subtotal</span>
                  <span>KSh {cartTotal.toLocaleString()}</span>
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

              {/* Confirm Your Order Button With WhatsApp Icon */}
              <button 
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 px-2 rounded-xl font-black uppercase text-[15px] sm:text-base tracking-wider flex items-center justify-center transition shadow-lg group mb-3 outline-none"
              >
                <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform fill-current" /> Confirm Order via WhatsApp
              </button>

              <button 
                onClick={() => document.getElementById('delivery-details')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full bg-white border border-green-600 text-green-700 hover:bg-green-50 py-4 px-2 rounded-xl font-black uppercase text-[15px] sm:text-base tracking-wider flex items-center justify-center transition shadow-sm group lg:hidden"
              >
                <MapPin className="w-5 h-5 mr-2" /> Delivery Details
              </button>
              
              <p className="text-[10px] text-gray-400 mt-4 text-center font-medium leading-relaxed">
                By clicking "Confirm Order via WhatsApp", you will be connected securely to our sales team to arrange payment, verify your delivery address and finalize your order.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
