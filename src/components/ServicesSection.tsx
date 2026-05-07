import React from 'react';
import { Calendar, User, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesSection() {
  return (
    <section className="bg-gray-50 py-4 md:py-8 border-b border-gray-100">
      <div className="container mx-auto max-w-[1400px] px-4">
        {/* Bento Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          
          {/* Service 1 - Clinic */}
          <Link to="/book-appointment" className="col-span-2 lg:col-span-1 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl md:rounded-2xl p-5 md:p-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start group cursor-pointer hover:shadow-xl hover:border-green-400 transition-all">
            <div className="bg-green-100 p-3 md:p-4 rounded-full text-green-700 mb-4 sm:mb-0 sm:mr-6 lg:mb-4 lg:mr-0 xl:mb-0 xl:mr-6 group-hover:scale-110 group-hover:bg-pink-50 transition-transform">
              <Calendar className="w-6 h-6 md:w-8 md:h-8 group-hover:text-pink-500" />
            </div>
            <div className="flex-1 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-base md:text-xl font-extrabold text-gray-900 mb-2 group-hover:text-green-700 leading-tight">Book Clinic Appointment</h3>
                <p className="text-gray-500 text-xs md:text-sm mb-4 leading-relaxed line-clamp-2 md:line-clamp-none">
                  Consult with our expert nutritionists & dietitians. Available in-branch or online based on your schedule.
                </p>
              </div>
              <span className="text-pink-500 font-bold text-xs md:text-sm uppercase tracking-wider flex items-center group-hover:underline mt-auto">
                Book Now <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </span>
            </div>
          </Link>

          {/* Service 2 - About Us */}
          <Link to="/about" className="col-span-1 bg-gradient-to-br from-pink-50 to-white border border-pink-200 rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start group cursor-pointer hover:shadow-xl hover:border-pink-400 transition-all">
            <div className="hidden sm:block bg-pink-100 p-3 md:p-4 rounded-full text-pink-600 mb-4 sm:mb-0 sm:mr-6 lg:mb-4 lg:mr-0 xl:mb-0 xl:mr-6 group-hover:scale-110 group-hover:bg-green-50 transition-transform">
              <User className="w-6 h-6 md:w-8 md:h-8 group-hover:text-green-600" />
            </div>
            <div className="flex-1 flex flex-col h-full">
              <div className="sm:hidden bg-pink-100 p-2.5 rounded-full text-pink-600 mb-3 w-max self-start group-hover:scale-110 transition-transform">
                <User className="w-5 h-5 group-hover:text-green-600" />
              </div>
              <h3 className="text-sm md:text-xl font-extrabold text-gray-900 mb-1.5 md:mb-2 group-hover:text-pink-600 leading-tight">About The Clinic</h3>
              <p className="text-gray-500 text-[10px] md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3 md:line-clamp-none flex-1">
                Meet Dr. Esther. Discover Century Wellness, our values, clinic, and our commitment to your health.
              </p>
              <span className="text-green-600 font-bold text-[10px] md:text-sm uppercase tracking-wider flex items-center group-hover:underline mt-auto">
                Discover More <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </span>
            </div>
          </Link>

          {/* Service 3 - Packages */}
          <Link to="/packages" className="col-span-1 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start group cursor-pointer hover:shadow-xl transition-all">
            <div className="hidden sm:block bg-gray-200 p-3 md:p-4 rounded-full text-gray-700 mb-4 sm:mb-0 sm:mr-6 lg:mb-4 lg:mr-0 xl:mb-0 xl:mr-6 group-hover:scale-110 transition-transform">
              <User className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <div className="flex-1 flex flex-col h-full">
              <div className="sm:hidden bg-gray-200 p-2.5 rounded-full text-gray-700 mb-3 w-max self-start group-hover:scale-110 transition-transform">
                <User className="w-5 h-5" />
              </div>
              <h3 className="text-sm md:text-xl font-extrabold text-gray-900 mb-1.5 md:mb-2 leading-tight">Health Packages</h3>
              <p className="text-gray-500 text-[10px] md:text-sm mb-3 md:mb-4 leading-relaxed line-clamp-3 md:line-clamp-none flex-1">
                Complete weight loss programs, Keto plans, and body transformation challenges tailored for you.
              </p>
              <span className="text-gray-900 font-bold text-[10px] md:text-sm uppercase tracking-wider flex items-center group-hover:underline mt-auto">
                View Packages <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </span>
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
}
