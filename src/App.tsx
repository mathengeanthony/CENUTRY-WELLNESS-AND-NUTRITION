import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ShopByCategory from './pages/ShopByCategory';
import Branches from './pages/Branches';
import Packages from './pages/Packages';
import BookAppointment from './pages/BookAppointment';
import Offers from './pages/Offers';
import BMICalculator from './pages/BMICalculator';
import Articles from './pages/Articles';

import Checkout from './pages/Checkout';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col">
      <ScrollToTop />
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop-by-category" element={<ShopByCategory />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/bmi-calculator" element={<BMICalculator />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>

      {/* Google Map Widget */}
      <section className="bg-gray-100 flex flex-col">
        <div className="w-full h-[300px] md:h-[400px]">
          <iframe 
            src="https://maps.google.com/maps?q=Kunjam%20Arcade,%20Magadi%20Road,%20Ongata%20Rongai,%20Kenya&t=&z=13&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Century Nutrition and Wellness Location"
          ></iframe>
        </div>
      </section>

      <Footer />
    </div>
  );
}
