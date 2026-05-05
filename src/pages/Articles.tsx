import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Play, ArrowRight, CheckCircle2 } from 'lucide-react';

const TRENDING_ARTICLES = [
  {
    title: "Allyson Felix Shares Tips on How to Recover Like an Olympian",
    category: "Wellness",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=200&h=150"
  },
  {
    title: "These are the Best Fabrics for Sensitive Skin",
    category: "Skin Care",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=200&h=150"
  },
  {
    title: "The Supplements You Might Need While Taking GLP-1s",
    category: "GLP-1s",
    image: "https://images.unsplash.com/photo-1584308666744-24d5e4a317eb?auto=format&fit=crop&q=80&w=200&h=150"
  },
  {
    title: "Stress Hack: Vagus Nerve Stimulators Are Worth the Hype",
    category: "Reviews",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=200&h=150"
  }
];

const RECOMMENDED_READS = [
  {
    title: "Our Favorite Mexican-Inspired Recipes",
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "Does Vitamin C Actually Work for Colds?",
    image: "https://images.unsplash.com/photo-1588611130424-d2e7b1735edc?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "Parent with Chronic Migraine? Try These 10 Tips",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "Advocating for Yourself as a Person of Color with Psoriasis",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "17 of the Best Foods to Relieve Constipation",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=300&h=200"
  },
  {
    title: "The Best Prebiotics for 2026, According to Our Experts",
    image: "https://images.unsplash.com/photo-1584308666744-24d5e4a317eb?auto=format&fit=crop&q=80&w=300&h=200"
  }
];

const VIDEOS = [
  { title: "7 Types of Exercises to Relieve Constipation", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=300&h=200" },
  { title: "What Every Psoriasis Patient Needs To Know About Flares and Stress", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=200" },
  { title: "Parkinson's Disease: 5 Progression Stages", image: "https://images.unsplash.com/photo-1551847677-dc82d762e1fd?auto=format&fit=crop&q=80&w=300&h=200" },
  { title: "Chronic Spontaneous Urticaria Facts and Resources", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=300&h=200" }
];

export default function Articles() {
  const [activeTab, setActiveTab] = useState('Top Reads');

  return (
    <div className="bg-white min-h-screen">
      {/* Container wrapper */}
      <div className="container mx-auto px-4 lg:px-8 max-w-[1400px] py-10 space-y-16">
        
        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] xl:aspect-[16/9]">
              <img 
                src="https://images.unsplash.com/photo-1548680371-2edb95f271ac?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover" 
                alt="Mental Health Stress Reset" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent flex items-end p-6 md:p-10">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-teal-800 font-bold text-sm md:text-xl shadow-lg border border-teal-200 inline-block mb-4 relative overflow-hidden group">
                  <span className="relative z-10 flex items-center">
                    <span className="animate-pulse mr-2 text-red-500">🔥</span> 
                    14 DAY STRESS RESET 
                    <span className="ml-2 group-hover:scale-125 transition-transform duration-300 transform inline-block relative -top-1">🐉</span>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="text-teal-600 font-bold text-sm tracking-widest uppercase">Mental Health</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 leading-tight tracking-tight">
                Day 4: Exercise Your Way to Less Stress with These Simple Routines
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mt-4 max-w-3xl">
                Learn about the benefits of exercise for your mental health and which types can help with stress reduction.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="text-teal-500 mr-2 text-2xl">📈</span> Trending
            </h2>
            <div className="flex flex-col gap-6">
              {TRENDING_ARTICLES.map((article, idx) => (
                <div key={idx} className="flex gap-4 group cursor-pointer">
                  <div className="w-24 h-24 md:w-32 md:h-24 flex-shrink-0 rounded-2xl overflow-hidden shadow-sm">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-teal-600 font-bold text-xs tracking-wider uppercase mb-1">{article.category}</span>
                    <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug group-hover:text-teal-700 transition">{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subscription Banners */}
        <div className="space-y-6">
          {[1,2,3].map((item) => (
            <div key={item} className="bg-[#eef5f4] rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition">
              <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">The best of health and wellness</h2>
                <p className="text-slate-600 mt-3 mb-6 max-w-md">We do the research so you don't have to. Stay in the know with the latest in health and wellness.</p>
                <div className="flex flex-col sm:flex-row gap-2 max-w-md">
                  <input type="email" placeholder="Enter your email" className="px-5 py-3.5 rounded-full flex-1 border border-teal-200 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition" />
                  <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3.5 px-8 rounded-full transition whitespace-nowrap">JOIN NOW</button>
                </div>
                <p className="text-xs text-slate-400 mt-3">Your privacy is important to us.</p>
              </div>
              <div className="md:w-1/3 flex-shrink-0 relative min-h-[250px] md:min-h-0 bg-teal-100/50">
                 {/* Decorative background element */}
                 <div className="absolute inset-0 bg-gradient-to-r from-[#eef5f4] via-transparent to-transparent z-10 hidden md:block"></div>
                 <img src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600&h=600&fit=facearea&facepad=3`} alt="Happy person" className="absolute right-0 bottom-0 top-0 h-full w-full object-cover rounded-tl-full md:rounded-tl-none md:rounded-l-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b pb-4">Century Wellness Tools</h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Healthy eating block */}
            <div className="lg:col-span-7 bg-[#daeff1] rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-center shadow-sm">
              <div className="relative z-10 max-w-md text-center mx-auto md:text-left md:mx-0">
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Healthy eating, simplified</h3>
                <p className="text-slate-700 text-lg mb-8">Take charge of your nutrition with guidance on meal planning, diets, supplements, and more from our dietitians and nutritionists.</p>
                <button className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-3 md:py-4 px-8 rounded-full transition shadow-lg w-full sm:w-auto">Visit Nutrition Hub</button>
              </div>
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=400" className="absolute -bottom-10 -right-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-8 border-white shadow-xl rotate-12 opacity-90" alt="Healthy salad" />
            </div>

            {/* Smaller specific tools */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {[
                { title: "Recipe Hub", desc: "Try 400+ recipes for different dietary preferences" },
                { title: "Macronutrient Calculator", desc: "Calculate your daily carb, protein, and fat goals" },
                { title: "Calorie Calculator", desc: "Learn how many calories you need for your weight goals" }
              ].map((tool, idx) => (
                <div key={idx} className="bg-[#e9f4f3] rounded-3xl p-6 flex items-center justify-between group cursor-pointer hover:bg-teal-50 transition shadow-sm border border-transparent hover:border-teal-200">
                  <div className="pr-4">
                    <h4 className="text-teal-700 font-bold text-sm mb-1">{tool.title}</h4>
                    <p className="text-slate-800 font-bold leading-tight">{tool.desc}</p>
                  </div>
                  <div className="bg-white text-teal-700 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all shadow-sm">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              ))}
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            {[
              { title: "Pill Identifier", desc: "Identify an unknown tablet or capsule" },
              { title: "GLP-1 Resource", desc: "Compare places to buy Ozempic online" },
              { title: "FindCare", desc: "Find local doctors who accept your insurance" }
            ].map((tool, idx) => (
              <div key={idx} className="bg-teal-700 text-white rounded-3xl p-8 flex items-center justify-between group cursor-pointer hover:bg-teal-800 transition shadow-sm">
                <div>
                  <h4 className="font-bold mb-1 opacity-90 text-sm">{tool.title}</h4>
                  <p className="font-bold leading-snug">{tool.desc}</p>
                </div>
                <div className="bg-white text-teal-700 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition shadow-sm ml-4">
                   <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            ))}
          </div>

          {/* Drug Directory */}
          <div className="mt-6 bg-[#2a7a78] rounded-3xl overflow-hidden shadow-sm relative min-h-[300px]">
            <div className="absolute inset-0 right-1/2 bg-teal-800 z-0 skew-x-12 origin-top"></div>
            <div className="relative z-10 flex flex-col md:flex-row items-center p-8 md:p-12 lg:p-16 h-full">
              <div className="md:w-1/2 flex flex-col items-start text-white mb-8 md:mb-0 pb-8 md:pb-0 z-20 mx-auto text-center md:text-left">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">Drug Directory: A to Z</h3>
                <p className="text-teal-100 text-lg mb-8 max-w-sm mx-auto md:mx-0">Learn everything you need to know about specific prescriptions and over-the-counter medications.</p>
                <button className="bg-white text-teal-800 hover:bg-gray-100 font-bold py-3.5 px-8 rounded-full transition shadow-lg w-full sm:w-auto">Search drugs</button>
              </div>
              <div className="md:w-1/2 relative min-h-[200px] w-full mt-8 md:mt-0 flex justify-center items-center">
                <img 
                  src="https://images.unsplash.com/photo-1584308666744-24d5e4a317eb?auto=format&fit=crop&q=80&w=400" 
                  className="rounded-2xl shadow-2xl rotate-6 w-full max-w-[280px] md:max-w-[320px] object-cover ring-4 ring-teal-400/30" 
                  alt="Medications" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1550572017-edb799299440?auto=format&fit=crop&q=80&w=200" 
                  className="absolute -top-10 -left-10 w-24 h-24 md:w-32 md:h-32 rounded-full shadow-xl border-4 border-white object-cover hidden sm:block" 
                  alt="Pills" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Reads */}
        <div>
           <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 border-b pb-4">Recommended reads</h2>
           {/* Tabs */}
           <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
             {['Top Reads', 'Fitness', 'Mental Well-Being', 'Product Reviews', 'Recipes', 'Skin Care'].map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full font-bold text-sm transition ${activeTab === tab ? 'bg-teal-700 text-white' : 'bg-gray-100 text-slate-600 hover:bg-gray-200'}`}
                >
                  {tab}
                </button>
             ))}
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
             {RECOMMENDED_READS.map((article, idx) => (
               <div key={idx} className="group cursor-pointer flex flex-col">
                 <div className="rounded-2xl overflow-hidden w-full aspect-[3/2] mb-4 shadow-sm border border-gray-100">
                   <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h3 className="font-bold text-slate-800 text-lg leading-snug group-hover:text-teal-700 transition flex-1">{article.title}</h3>
               </div>
             ))}
           </div>
        </div>

        {/* Trust Banner */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 border-b pb-4">Why you can trust us on your health journey</h2>
          <div className="bg-white rounded-3xl overflow-hidden flex flex-col lg:flex-row gap-0 lg:gap-10 items-stretch">
            <div className="lg:w-1/2 rounded-3xl overflow-hidden h-64 lg:h-auto min-h-[300px]">
              <img src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Health Professional" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center py-8 lg:py-12 px-2 lg:px-8 space-y-8">
              <div className="border-l-4 border-teal-600 pl-6">
                <h3 className="font-extrabold text-2xl text-slate-900 mb-3">For you, by experts</h3>
                <p className="text-slate-600 text-lg font-medium">Experienced health writers break down complex topics so your choices feel clearer.</p>
              </div>
              <div className="border-l-4 border-gray-200 pl-6 opacity-60 hover:opacity-100 transition cursor-pointer">
                <h3 className="font-extrabold text-2xl text-slate-400 mb-3">Built to move you forward</h3>
              </div>
              <div className="border-l-4 border-gray-200 pl-6 opacity-60 hover:opacity-100 transition cursor-pointer">
                <h3 className="font-extrabold text-2xl text-slate-400 mb-3">Reviewed by professionals</h3>
              </div>
              <div className="border-l-4 border-gray-200 pl-6 opacity-60 hover:opacity-100 transition cursor-pointer">
                <h3 className="font-extrabold text-2xl text-slate-400 mb-3">Always up to date</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Videos */}
        <div>
          <div className="flex justify-between items-end border-b pb-4 mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Latest videos</h2>
            <a href="#" className="text-teal-700 font-bold hover:underline mb-1 whitespace-nowrap">View all videos</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {VIDEOS.map((video, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="rounded-2xl overflow-hidden aspect-video relative shadow-sm mb-4 border border-gray-100">
                  <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-slate-800 ml-1" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-slate-800 text-[15px] leading-tight group-hover:text-teal-700 transition">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
