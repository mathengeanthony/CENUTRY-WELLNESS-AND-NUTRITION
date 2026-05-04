import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Phone, Menu, ChevronDown, MapPin, Smartphone, HelpCircle, Gift, PhoneCall, Sun, Moon, Stethoscope, FileText, LayoutGrid, Award, Calendar, Activity, Package } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // UI toggle, won't enforce full app dark mode

  return (
    <>
    <header className="bg-white w-full border-b border-gray-200">
      {/* Topmost Info Bar */}
      <div className="bg-green-700 text-white text-[11px] py-1.5 hidden md:block">
        <div className="container mx-auto max-w-[1400px] px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a href="#" className="flex items-center hover:text-pink-200"><Smartphone className="w-3 h-3 mr-1" /> Download App</a>
            <a href="tel:+254736921630" className="flex items-center hover:text-pink-200"><Phone className="w-3 h-3 mr-1" /> Customer Service: +254 736 921630</a>
          </div>
          <div className="flex items-center space-x-5">
            <Link to="/branches" className="hover:text-pink-200 flex items-center"><MapPin className="w-3 h-3 mr-1" /> Find a Branch</Link>
            <a href="#" className="hover:text-pink-200 flex items-center"><HelpCircle className="w-3 h-3 mr-1" /> Contact Us</a>
            <Link to="/checkout" className="hover:text-pink-200">Track Order</Link>
            <div className="border-l border-green-500 pl-5 flex items-center cursor-pointer hover:text-pink-200">
              <img src="https://flagcdn.com/w20/us.png" alt="US" className="w-4 h-3 mr-2" />
              English <ChevronDown className="w-3 h-3 ml-1" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="py-4 lg:py-5">
        <div className="container mx-auto max-w-[1400px] px-4 flex flex-wrap justify-between items-center gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0 mr-4 lg:mr-8">
            <span className="text-2xl lg:text-4xl font-extrabold tracking-tighter text-green-700 leading-none flex flex-col">
              <span className="mb-[-4px]">CENTURY</span>
              <span className="text-pink-500 text-lg lg:text-2xl uppercase tracking-widest">Wellness</span>
            </span>
          </Link>

          {/* Search Bar - Center */}
          <div className="hidden lg:flex flex-col flex-1 max-w-3xl relative mx-4">
            <div className="flex w-full border-2 border-green-600 rounded-full overflow-hidden shadow-sm">
              <div className="w-48 bg-gray-50 border-r border-gray-200 px-4 flex items-center justify-between cursor-pointer text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                <span className="truncate">All Categories</span>
                <ChevronDown className="w-4 h-4 text-gray-500 ml-2 flex-shrink-0" />
              </div>
              <input 
                type="text" 
                placeholder="Search for products, brands or ingredients..." 
                className="flex-1 px-4 py-2.5 text-sm focus:outline-none placeholder-gray-400"
              />
              <button className="px-8 bg-pink-500 hover:bg-pink-600 text-white transition flex items-center justify-center font-bold">
                <Search className="w-5 h-5" />
              </button>
            </div>
            {/* Desktop Action Buttons Below Search */}
            <div className="flex items-center space-x-3 mt-3 ml-4">
              <Link to="/book-appointment" className="flex items-center text-[11px] font-bold text-green-700 bg-green-50 px-3 py-1.5 rounded-full hover:bg-green-100 transition uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5 mr-1.5" /> Consult A Doctor
              </Link>
              <button className="flex items-center text-[11px] font-bold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full hover:bg-pink-100 transition uppercase tracking-wider">
                <FileText className="w-3.5 h-3.5 mr-1.5" /> Upload Prescription
              </button>
            </div>
          </div>

          {/* User Actions - Right */}
          <div className="flex items-center space-x-3 sm:space-x-4 lg:space-x-7 text-green-700 ml-auto xl:ml-0">
            
            {/* Light / Dark Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 lg:w-6 lg:h-6" /> : <Moon className="w-5 h-5 lg:w-6 lg:h-6" />}
            </button>

            {/* Icons */}
            <a href="https://wa.me/123456789" className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition text-green-500" title="WhatsApp">
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </a>
            <a href="tel:+254736921630" className="p-1.5 sm:p-2 rounded-full hover:bg-gray-100 transition" title="Call">
              <PhoneCall className="w-5 h-5 lg:w-6 lg:h-6" />
            </a>

            <div className="hidden sm:flex flex-col items-end cursor-pointer group">
              <span className="text-[11px] text-gray-500 uppercase font-medium">Hello, Sign in</span>
              <span className="text-sm border-b border-transparent group-hover:text-pink-500 transition-colors flex items-center font-bold">
                My Account <User className="w-5 h-5 ml-1.5" />
              </span>
            </div>
            
            <Link to="/checkout" className="relative flex items-center group hover:opacity-80 transition cursor-pointer">
              <div className="relative md:mr-3">
                <ShoppingCart className="w-7 h-7 lg:w-8 lg:h-8 text-green-700 group-hover:text-pink-500 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-[11px] w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center rounded-full font-bold border-2 border-white">3</span>
              </div>
              <div className="hidden md:flex flex-col items-start min-w-[70px]">
                <span className="text-[11px] text-gray-500 uppercase font-medium">My Cart</span>
                <span className="text-sm font-extrabold text-pink-500">KSh 18,450</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search and Buttons */}
        <div className="px-4 mt-4 lg:hidden w-full relative space-y-3">
          <div className="flex border-2 border-green-600 rounded-full overflow-hidden">
            <input 
              type="text" 
              placeholder="Search products, brands..." 
              className="flex-1 px-4 py-2 text-sm focus:outline-none"
            />
            <button className="px-4 bg-pink-500 text-white flex items-center justify-center">
              <Search className="w-5 h-5" />
            </button>
          </div>
          {/* Mobile Action Buttons Below Search */}
          <div className="flex items-center space-x-2">
            <Link to="/book-appointment" className="flex flex-1 justify-center items-center text-[10px] sm:text-[11px] font-bold text-green-700 bg-green-50 px-2 sm:px-3 py-2 rounded-full hover:bg-green-100 transition uppercase tracking-wider text-center leading-tight">
              <Stethoscope className="w-3.5 h-3.5 mr-1" /> Consult Dr
            </Link>
            <button className="flex flex-1 justify-center items-center text-[10px] sm:text-[11px] font-bold text-pink-600 bg-pink-50 px-2 sm:px-3 py-2 rounded-full hover:bg-pink-100 transition uppercase tracking-wider text-center leading-tight">
              <FileText className="w-3.5 h-3.5 mr-1" /> Upload Prescription
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Row */}
      <nav className="bg-green-700 text-white hidden lg:block border-b-4 border-pink-500 relative z-20 shadow-md">
        <div className="container mx-auto max-w-[1400px] flex">
          {/* Shop By Categories Dropdown Header */}
          <div className="bg-pink-500 flex items-center cursor-pointer min-w-[280px] pl-6 pr-4 py-3.5 hover:bg-pink-600 transition group relative">
            <Menu className="w-6 h-6 mr-3" />
            <span className="font-bold tracking-wide uppercase text-sm">Shop By Category</span>
            <ChevronDown className="w-4 h-4 ml-auto" />
            
            {/* Absolute Dropdown Example (Mock) */}
            <div className="absolute top-full left-0 w-full bg-white text-gray-800 shadow-xl border border-gray-200 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <ul className="py-2">
                <li className="px-6 py-2 hover:bg-pink-50 text-sm font-semibold flex justify-between items-center text-green-700">Proteins <ChevronDown className="w-3 h-3 -rotate-90" /></li>
                <li className="px-6 py-2 hover:bg-pink-50 text-sm font-semibold flex justify-between items-center text-green-700">Vitamins & Minerals <ChevronDown className="w-3 h-3 -rotate-90" /></li>
                <li className="px-6 py-2 hover:bg-pink-50 text-sm font-semibold flex justify-between items-center text-green-700">Weight Management <ChevronDown className="w-3 h-3 -rotate-90" /></li>
                <li className="px-6 py-2 hover:bg-pink-50 text-sm font-semibold flex justify-between items-center text-green-700">Sports Nutrition <ChevronDown className="w-3 h-3 -rotate-90" /></li>
                <li className="px-6 py-2 hover:bg-pink-50 text-sm font-semibold flex justify-between items-center text-green-700">Healthy Foods <ChevronDown className="w-3 h-3 -rotate-90" /></li>
              </ul>
            </div>
          </div>
          
          <ul className="flex items-center text-[13px] font-bold tracking-wide uppercase flex-1 px-4 justify-start space-x-1 lg:space-x-3 xl:space-x-4">
            <li className="px-3 py-3.5 hover:text-pink-300 cursor-pointer transition"><Link to="/offers">Exclusive Offers</Link></li>
            <li className="px-3 py-3.5 border-l border-green-600/50 hover:text-pink-300 cursor-pointer transition">Top Brands</li>
            <li className="px-3 py-3.5 border-l border-green-600/50 hover:text-pink-300 cursor-pointer transition">Proteins</li>
            <li className="px-3 py-3.5 border-l border-green-600/50 hover:text-pink-300 cursor-pointer transition">Vitamins & Health</li>
            <li className="px-3 py-3.5 border-l border-green-600/50 hover:text-pink-300 cursor-pointer transition">Healthy Foods</li>
            <li className="px-3 py-3.5 border-l border-green-600/50 hover:text-pink-300 cursor-pointer transition">Keto Diet</li>
            <li className="px-3 py-3.5 border-l border-green-600/50 hover:text-pink-300 cursor-pointer transition">Equipments</li>
            <li className="px-3 py-3.5 border-l border-green-600/50 text-pink-300 cursor-pointer transition flex items-center ml-auto">
              <Gift className="w-4 h-4 mr-1.5" /> Rewards
            </li>
          </ul>
        </div>
      </nav>

      {/* Primary Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)}></div>
          <div className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-white overflow-y-auto z-10">
            <div className="p-4 bg-green-700 text-white flex justify-between items-center sticky top-0">
              <span className="font-bold text-lg uppercase">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-1">✕</button>
            </div>
            <div className="py-2 font-semibold">
              <Link to="/offers" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 border-b text-pink-600">Offers & Discounts</Link>
              <Link to="/shop-by-category" state={{ activeTab: 'categories' }} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 border-b">Shop By Category</Link>
              <Link to="/shop-by-category" state={{ activeTab: 'brands' }} onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 border-b">Top Brands</Link>
              <Link to="/book-appointment" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 border-b">Book Clinic Appointment</Link>
              <a href="#" className="block px-4 py-3 border-b">Articles & Advice</a>
              <Link to="/packages" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 border-b">Health Packages</Link>
              <Link to="/bmi-calculator" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 border-b">BMI Calculator</Link>
            </div>
            <div className="p-4 bg-gray-50 mt-4 h-full">
              <div className="font-bold mb-2 uppercase tracking-tight text-gray-500 text-sm">Account Settings</div>
              <a href="#" className="block py-2 text-gray-800 font-bold">Sign In / Register</a>
              <a href="#" className="block py-4 text-gray-600 mt-4 border-t border-gray-200 flex items-center font-bold">
                <Phone className="w-4 h-4 mr-2" /> +254 736 921630
              </a>
            </div>
          </div>
        </div>
      )}
    </header>

    {/* Secondary Fixed Bottom Header (Mobile Only) */}
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 px-1 pb-safe">
      <div className="flex justify-between items-center h-28">
        <Link to="/shop-by-category" state={{ activeTab: 'categories' }} className="flex flex-col items-center justify-center flex-1 text-black hover:text-green-700 transition">
          <LayoutGrid className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
          <span className="text-[10px] sm:text-xs font-black uppercase text-center leading-none">Categories</span>
        </Link>
        <Link to="/shop-by-category" state={{ activeTab: 'brands' }} className="flex flex-col items-center justify-center flex-1 text-black hover:text-pink-600 transition">
          <Award className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
          <span className="text-[10px] sm:text-xs font-black uppercase text-center leading-none">Brands</span>
        </Link>
        
        {/* Prominent floating center action */}
        <Link to="/book-appointment" className="flex flex-col items-center justify-center w-16 sm:w-20 transition relative -top-6">
          <div className="relative mb-2">
            <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-75"></div>
            <div className="relative bg-pink-500 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white">
               <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            </div>
          </div>
          <span className="text-[11px] sm:text-xs font-black uppercase text-center leading-none text-pink-600">Book</span>
        </Link>

        <Link to="/packages" className="flex flex-col items-center justify-center flex-1 text-black hover:text-green-700 transition">
          <Package className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
          <span className="text-[10px] sm:text-xs font-black uppercase text-center leading-none">Packages</span>
        </Link>
        <Link to="/bmi-calculator" className="flex flex-col items-center justify-center flex-1 text-black hover:text-green-700 transition">
          <Activity className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
          <span className="text-[10px] sm:text-xs font-black uppercase text-center leading-none">BMI</span>
        </Link>
        <button onClick={() => setIsMenuOpen(true)} className="flex flex-col items-center justify-center flex-1 text-black hover:text-green-700 transition">
          <Menu className="w-5 h-5 sm:w-6 sm:h-6 mb-2" />
          <span className="text-[10px] sm:text-xs font-black uppercase text-center leading-none">Menu</span>
        </button>
      </div>
    </div>
    </>
  );
}
