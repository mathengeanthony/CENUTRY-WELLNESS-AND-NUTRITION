import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Search } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="mb-6">
              <span className="text-3xl font-extrabold tracking-tighter text-green-700 leading-none flex flex-col">
                <span className="mb-[-4px]">CENTURY</span>
                <span className="text-pink-500 text-xl uppercase tracking-widest">Wellness</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium">
              Century Nutrition & Wellness Shop is a premier health food store dedicated to your well-being. Located in Rongai, we deal in high-quality food supplements from trusted global brands, edible seeds and nuts, enriched flours, and natural spices and herbs. We provide nutritional solutions for all ages, from infants to seniors, ensuring our community has access to the best in wellness and vitality.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-pink-500 hover:text-white transition shadow-sm">
                <Facebook className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-pink-500 hover:text-white transition shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-pink-500 hover:text-white transition shadow-sm">
                <Twitter className="w-5 h-5 fill-current" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 hover:bg-pink-500 hover:text-white transition shadow-sm">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6 border-l-4 border-pink-500 pl-3">Inside Century</h3>
            <ul className="space-y-3 text-sm font-semibold text-gray-600">
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> About Us</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Success Stories</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Store Locator</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Careers</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Privacy Policy</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6 border-l-4 border-pink-500 pl-3">Support</h3>
            <ul className="space-y-3 text-sm font-semibold text-gray-600">
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> My Account</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Track Order</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Returns & Replacements</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Shipping Policies</a></li>
              <li><a href="#" className="hover:text-pink-500 transition flex items-center"><span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span> Help & FAQ</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-tight text-gray-900 mb-6 border-l-4 border-pink-500 pl-3">Contact Us</h3>
            <ul className="space-y-4 text-sm font-semibold text-gray-600">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                <span>Kunjam Arcade, Ground Floor, Suite 7<br/>Along Magadi Road (Next to Mariakani Hospital)<br/>Rongai</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span>0715 457 885 | 0736 921 630</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                <span>support@centurywellness.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-2xl p-8 lg:p-12 text-white flex flex-col md:flex-row items-center justify-between mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
          
          <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left relative z-10 w-full md:w-1/2">
            <h3 className="text-2xl lg:text-3xl font-black uppercase italic tracking-tight mb-2">Join Century Rewards</h3>
            <p className="text-green-100 font-medium text-sm md:text-base">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
          </div>
          <div className="w-full md:w-1/2 relative flex z-10 shadow-lg">
            <input 
              type="email" 
              placeholder="Enter your email address..." 
              className="w-full px-6 py-4 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-500 border-none font-medium"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-r-lg font-black uppercase tracking-widest transition text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between items-center md:text-left text-sm text-gray-500 font-semibold">
          <p>© {new Date().getFullYear()} Century Wellness & Nutrition. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex justify-center items-center space-x-6">
            <span className="flex items-center text-pink-600"><span className="w-8 h-5 bg-blue-900 rounded mx-1 block relative overflow-hidden"><span className="absolute inset-y-0 w-1/3 bg-red-600 right-0"></span><span className="absolute inset-y-0 w-1/3 bg-white left-1/3"></span></span> VISA</span>
            <span className="flex items-center text-pink-600"><span className="w-8 h-5 bg-red-500 rounded-full mx-1 relative overflow-hidden"><span className="absolute w-6 h-6 bg-yellow-400 rounded-full -right-2 top-0 mix-blend-multiply"></span></span> MasterCard</span>
            <span className="flex items-center text-pink-600 px-2 py-0.5 border border-gray-300 rounded text-xs font-black">Tabby</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
