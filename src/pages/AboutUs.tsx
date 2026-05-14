import React from 'react';
import { User, MapPin, Phone, Mail, Award, Clock, Star, Heart, FileText, CheckCircle2, Instagram, Facebook, Smile } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Dark Hero Section (Inspired by Image) */}
      <div 
        className="bg-green-900 text-white relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538108149393-cebb3010b14c?auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-green-950/90 z-0"></div>

        <div className="container mx-auto px-4 pt-12 pb-20 lg:pt-24 lg:pb-32 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[55%] shrink-0">
             {/* Added Pills */}
             <div className="flex gap-4 mb-4">
               <span className="bg-white/10 hover:bg-white/20 transition cursor-pointer px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white border border-green-700">Meet the Doctor</span>
               <span className="bg-white/10 hover:bg-white/20 transition cursor-pointer px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white border border-green-700">Our Clinic</span>
             </div>

             <div className="bg-white text-green-900 rounded-full py-1.5 px-3 pr-5 flex items-center shadow-[0_0_20px_rgba(255,255,255,0.1)] mb-4">
               <div className="flex -space-x-2 mr-3">
                 <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="user" className="w-full h-full object-cover"/></div>
                 <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="user" className="w-full h-full object-cover"/></div>
                 <div className="w-6 h-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="user" className="w-full h-full object-cover"/></div>
               </div>
               <span className="font-bold text-xs sm:text-sm tracking-wide">2500+ SATISFIED PATIENTS</span>
             </div>
             
             <div className="flex items-center gap-2 mb-8">
               <div className="w-8 h-8 rounded-full border border-green-700 bg-white/5 flex items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition cursor-pointer">
                  <Smile className="w-4 h-4" />
               </div>
               <span className="text-green-100 font-bold text-[10px] sm:text-xs tracking-widest pl-1 uppercase">Read client success stories</span>
             </div>

             {/* Big Headline */}
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[4.5rem] font-black uppercase tracking-tighter leading-[1.05] text-white">
                YOUR TRUSTED<br/>
                <span className="text-pink-400">PARTNER IN HEALTH</span><br/>
                AND WELLNESS
             </h1>
          </div>

          {/* Right Circular Graphic Elements */}
          <div className="relative w-full max-w-[500px] lg:max-w-[600px] lg:w-[45%] aspect-square flex items-center justify-center z-10 pointer-events-none mt-[-5%] sm:mt-[-8%] lg:mt-0 xl:mt-0 lg:ml-auto">
             {/* Faint Outer Ring */}
             <div className="absolute w-[95%] lg:w-[100%] h-[95%] lg:h-[100%] rounded-full border border-green-800"></div>
             {/* Inner Ring with glow */}
             <div className="absolute w-[80%] lg:w-[85%] h-[80%] lg:h-[85%] rounded-full border border-green-600 shadow-[0_0_30px_rgba(34,197,94,0.1)]"></div>

             {/* The glowing dot on the inner ring */}
             <div className="absolute w-[80%] lg:w-[85%] h-[80%] lg:h-[85%] animate-[spin_10s_linear_infinite]">
               <div className="absolute bottom-[5%] left-[20%] w-3.5 h-3.5 bg-pink-400 rounded-full shadow-[0_0_15px_5px_rgba(244,114,182,0.6)]"></div>
             </div>

             {/* Center image - family */}
             <div className="absolute w-[68%] lg:w-[72%] h-[68%] lg:h-[72%] rounded-full overflow-hidden z-0 shadow-2xl pointer-events-auto">
               <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" alt="Healthy fresh food" className="w-full h-full object-cover" />
             </div>

             {/* Diagram Labels */}
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="absolute top-[25%] left-[8%] lg:left-[5%] text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-green-100 bg-green-950/60 px-2 py-0.5 rounded backdrop-blur-sm">Consultation</span>
                <span className="absolute top-[25%] right-[8%] lg:right-[5%] text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-green-100 bg-green-950/60 px-2 py-0.5 rounded backdrop-blur-sm">Pharmacy</span>
                <span className="absolute top-[50%] left-[2%] lg:left-[-5%] text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-green-100 bg-green-950/60 px-2 py-0.5 rounded backdrop-blur-sm">Diagnostics</span>
                <span className="absolute top-[50%] right-[2%] lg:right-[-5%] text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-green-100 bg-green-950/60 px-2 py-0.5 rounded backdrop-blur-sm">Wellness</span>
                <span className="absolute bottom-[20%] left-[12%] lg:left-[10%] text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-green-100 bg-green-950/60 px-2 py-0.5 rounded backdrop-blur-sm">Supplements</span>
                <span className="absolute bottom-[20%] right-[12%] lg:right-[10%] text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-green-100 bg-green-950/60 px-2 py-0.5 rounded backdrop-blur-sm">Expert Care</span>
             </div>
          </div>

        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-[1200px] px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Bio / Clinic Details */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            
            {/* Meet the Doctor Section */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full md:w-1/3 flex flex-col items-center">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-pink-100 mb-6 bg-pink-50 relative shrink-0">
                  <div className="absolute inset-0 flex items-center justify-center text-pink-300">
                    <User className="w-20 h-20" />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-gray-900 text-center uppercase tracking-tight">Dr. Esther</h3>
                <p className="text-pink-600 font-bold mb-4">Lead Consultant</p>
                <a href="tel:+254707147774" className="w-full text-center bg-green-50 text-green-700 py-3 rounded-full font-bold hover:bg-green-100 transition shadow-sm border border-green-200">
                  Call for Consultation
                </a>
              </div>
              
              <div className="w-full md:w-2/3">
                <h2 className="text-3xl font-black text-gray-900 mb-6 tracking-tight">Meet the Doctor</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    With over a decade of clinical experience, Dr. Esther stands at the forefront of personalized patient care in Nairobi. Her approach combines rigorous medical science with a deep, empathetic understanding of individual patient needs.
                  </p>
                  <p>
                    Specializing in comprehensive health assessments, family care, and wellness planning, Dr. Esther believes that true health goes beyond treating symptoms—it’s about nurturing the complete well-being of the individual.
                  </p>
                  <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100 mt-6 relative">
                    <Star className="text-pink-300 w-8 h-8 absolute -top-4 -left-3 rotate-12" />
                    <p className="font-bold text-gray-900 italic">"Our mission is to empower every patient with the knowledge and care they need to live their healthiest life."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Clinic Section */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-green-600 mr-4" />
                <h2 className="text-3xl font-black text-gray-900 tracking-tight">The Clinic</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Century Wellness is a state-of-the-art facility located in the heart of Nairobi. We integrate a modern clinical practice with a fully stocked premium pharmacy to ensure that your health journey is seamless from diagnosis to recovery.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex items-start">
                   <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center shrink-0 mr-4">
                     <CheckCircle2 className="w-6 h-6 text-green-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">Premium Pharmacy</h4>
                     <p className="text-sm text-gray-500">Authentic, verified medications and supplements sourced from reputable global manufacturers.</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mr-4">
                     <CheckCircle2 className="w-6 h-6 text-blue-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">Modern Diagnostics</h4>
                     <p className="text-sm text-gray-500">Advanced diagnostic equipment ensuring accurate and timely test results.</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-12 h-12 rounded-full bg-pink-50 flex items-center justify-center shrink-0 mr-4">
                     <CheckCircle2 className="w-6 h-6 text-pink-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">Personalized Care</h4>
                     <p className="text-sm text-gray-500">Tailored treatment plans designed specifically around your unique health profile.</p>
                   </div>
                 </div>
                 <div className="flex items-start">
                   <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mr-4">
                     <CheckCircle2 className="w-6 h-6 text-amber-600" />
                   </div>
                   <div>
                     <h4 className="font-bold text-gray-900 mb-1">Nationwide Delivery</h4>
                     <p className="text-sm text-gray-500">Fast and discreet delivery of your prescriptions and health products across Kenya.</p>
                   </div>
                 </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            
            {/* Values / Accreditations (Moved above Contact) */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 flex items-center border-b border-gray-100 pb-4">
                 <Award className="w-5 h-5 text-pink-500 mr-2" />
                 Our Values
               </h3>
               
               <ul className="space-y-4">
                 <li className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center mr-3 shrink-0">
                     <span className="text-pink-600 font-bold text-xs">1</span>
                   </div>
                   <span className="font-bold text-gray-800">Uncompromising Quality</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center mr-3 shrink-0">
                     <span className="text-pink-600 font-bold text-xs">2</span>
                   </div>
                   <span className="font-bold text-gray-800">Compassionate Care</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center mr-3 shrink-0">
                     <span className="text-pink-600 font-bold text-xs">3</span>
                   </div>
                   <span className="font-bold text-gray-800">Patient Education</span>
                 </li>
                 <li className="flex items-center">
                   <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center mr-3 shrink-0">
                     <span className="text-pink-600 font-bold text-xs">4</span>
                   </div>
                   <span className="font-bold text-gray-800">Integrity & Trust</span>
                 </li>
               </ul>
            </div>

            {/* Contact & Location Info */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
               <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 flex items-center border-b border-gray-100 pb-4">
                 <MapPin className="w-5 h-5 text-green-600 mr-2" />
                 Location & Contact
               </h3>
               
               <div className="space-y-6">
                 <div className="flex items-start">
                   <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-1 shrink-0" />
                   <div>
                     <span className="block font-bold text-gray-900 text-sm">Main Branch</span>
                     <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                       P.O Box 1234 - 00100<br/>
                       Nairobi, Kenya
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex items-start">
                   <Phone className="w-5 h-5 text-gray-400 mr-3 mt-1 shrink-0" />
                   <div>
                     <span className="block font-bold text-gray-900 text-sm">Customer Service</span>
                     <p className="text-sm text-gray-600 mt-1 flex flex-col gap-1">
                       <a href="tel:+254715457885" className="hover:text-pink-600">0715 457 885</a>
                       <a href="tel:+254736921630" className="hover:text-pink-600">0736 921 630</a>
                     </p>
                   </div>
                 </div>
                 
                 <div className="flex items-start">
                   <Mail className="w-5 h-5 text-gray-400 mr-3 mt-1 shrink-0" />
                   <div>
                     <span className="block font-bold text-gray-900 text-sm">Email</span>
                     <p className="text-sm text-gray-600 mt-1">
                       <a href="mailto:info@centurywellness.co.ke" className="hover:text-pink-600">info@centurywellness.co.ke</a>
                     </p>
                   </div>
                 </div>

                 <div className="flex items-start">
                   <Clock className="w-5 h-5 text-gray-400 mr-3 mt-1 shrink-0" />
                   <div>
                     <span className="block font-bold text-gray-900 text-sm">Working Hours</span>
                     <div className="text-sm text-gray-600 mt-1 space-y-1">
                       <p className="flex justify-between w-full"><span>Mon - Fri:</span> <span className="font-medium text-gray-900">8:00 AM - 8:00 PM</span></p>
                       <p className="flex justify-between w-full"><span>Saturday:</span> <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span></p>
                       <p className="flex justify-between w-full"><span>Sunday:</span> <span className="font-medium text-gray-900 text-pink-600">Closed</span></p>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
