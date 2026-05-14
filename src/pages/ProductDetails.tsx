import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Info, Activity, ShieldCheck, Heart, Award, ChevronDown, ChevronUp, PhoneCall, Clock, Tag, Package, CheckCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { useProducts } from '../ProductsContext';
import ReactMarkdown from 'react-markdown';
import { useCart } from '../CartContext';

const CUSTOMER_REVIEWS = [
  { name: "Wanjiku N.", rating: 5, date: "2 weeks ago", text: "Amazing results! Started seeing a difference after just one week. The pharmacist was also very helpful with dosage instructions." },
  { name: "Kamau K.", rating: 5, date: "1 month ago", text: "Good product, genuine and well packaged. Fast delivery too in Nairobi." },
  { name: "Atieno O.", rating: 5, date: "2 months ago", text: "I've been looking for this everywhere. So glad Century Wellness has it in stock. Very effective." },
  { name: "Kipkemboi C.", rating: 5, date: "3 months ago", text: "Excellent quality supplement. Has really helped boost my energy levels throughout the day." },
  { name: "Muthoni W.", rating: 5, date: "3 months ago", text: "Highly recommend for anyone dealing with this specific deficiency. Very pure." },
  { name: "Omondi J.", rating: 5, date: "4 months ago", text: "Best value for money. Quality is unmatched and the support from Dr. Esther was incredible." },
  { name: "Naliaka M.", rating: 5, date: "5 months ago", text: "My go-to supplement. Always fresh, well-sealed and authentic. Thank you Century Wellness!" },
  { name: "Mutua M.", rating: 5, date: "5 months ago", text: "Superb product. It is exactly what my body needed. I can already feel the difference." }
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string>('');
  const [added, setAdded] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (!isPaused && carouselRef.current) {
      intervalId = setInterval(() => {
        const carousel = carouselRef.current;
        if (carousel) {
          const itemWidth = carousel.firstElementChild?.clientWidth || 0;
          const gap = 16;
          const scrollStep = itemWidth + gap;
          
          if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - scrollStep) {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            carousel.scrollBy({ left: scrollStep, behavior: 'smooth' });
          }
        }
      }, 2000);
    }

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const toggleAccordion = (id: string) => {
    setOpenAccordion(prev => prev === id ? '' : id);
  };

  if (loading) {
    return <div className="bg-gray-50 flex-1 py-12 flex items-center justify-center">Loading product details...</div>;
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="bg-gray-50 flex-1 py-12 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h2>
        <button onClick={() => navigate(-1)} className="text-pink-500 font-medium hover:underline">
          Go Back
        </button>
      </div>
    );
  }

  const similarProducts = products.filter(p => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 4);

  return (
    <div className="bg-white flex-1">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 border-b border-gray-200">
        <div className="container mx-auto px-4 text-xs font-medium text-gray-500 flex items-center space-x-2">
          <button onClick={() => navigate(-1)} className="hover:text-pink-500 transition flex items-center">
            <ArrowLeft className="w-3 h-3 mr-1" /> Back
          </button>
          <span>/</span>
          <span className="hover:text-pink-500 cursor-pointer">Shop</span>
          <span>/</span>
          <span className="hover:text-pink-500 cursor-pointer">{product.brand}</span>
          <span>/</span>
          <span className="text-gray-900 truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
          
          {/* Mobile Title (hidden on desktop) */}
          <div className="w-full md:hidden flex flex-col mb-1">
            <div className="flex items-start justify-between">
              <a href="#" className="text-[10px] font-black text-pink-500 tracking-wider uppercase hover:underline mb-1">
                View more from {product.brand}
              </a>
              <button className="text-gray-400 hover:text-pink-500 transition shrink-0 -mt-1 -mr-1 p-1">
                <Heart className="w-5 h-5" />
              </button>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-gray-900 leading-tight tracking-tight pr-4">
              {product.name}
            </h1>
          </div>

          {/* Product Image & Gallery */}
          <div className="w-full md:w-1/2 flex flex-col gap-3">
            <div className="w-full flex items-center justify-center p-6 bg-gray-50 border border-gray-100 rounded-2xl relative">
               <img 
                 src={(product.images?.length ? product.images : [product.image])[activeImageIndex]} 
                 alt={product.name} 
                 referrerPolicy="no-referrer"
                 onError={(e) => {
                   const fallback = product.image || "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80";
                   if (e.currentTarget.src !== fallback) {
                     e.currentTarget.src = fallback;
                   }
                 }}
                 className="w-full max-w-[400px] h-auto object-contain mix-blend-multiply" 
               />
               {product.discountText && (
                  <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm">
                    {product.discountText}
                  </div>
                )}
                <div className={`absolute top-4 left-4 text-xs font-black uppercase px-3 py-1 rounded-full shadow-sm text-white ${product.availability === 'Out of Stock' ? 'bg-red-500' : 'bg-green-500'}`}>
                  {product.availability || "In Stock"}
                </div>
            </div>
            {/* Image Grid Selector */}
            {((product.images?.length ? product.images : [product.image]).length > 1) && (
              <div className="flex items-center justify-center gap-2">
                {(product.images?.length ? product.images : [product.image]).map((img: string, i: number) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImageIndex(i)}
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl border-2 flex items-center justify-center bg-gray-50 ${i === activeImageIndex ? 'border-pink-500' : 'border-gray-200 hover:border-pink-300'} transition-colors overflow-hidden`}
                  >
                    <img 
                      src={img} 
                      alt={`Thumbnail ${i + 1}`} 
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const fallback = "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&w=400&q=80";
                        if (e.currentTarget.src !== fallback) {
                          e.currentTarget.src = fallback;
                        }
                      }}
                      className="w-full h-full object-contain p-2 mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity" 
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col">
            
            {/* Desktop Brand & Wishlist (hidden on mobile) */}
            <div className="hidden md:flex mb-2 items-center justify-between">
              <a href="#" className="text-sm font-black text-pink-600 tracking-wider uppercase hover:underline">View more from {product.brand}</a>
              <button className="text-gray-400 hover:text-pink-500 transition">
                <Heart className="w-6 h-6" />
              </button>
            </div>
            
            {/* Desktop Title (hidden on mobile) */}
            <h1 className="hidden md:block text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4 tracking-tight">
              {product.name}
            </h1>

            <div className="flex items-center space-x-4 mb-3">
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-bold text-gray-700 ml-1.5">{product.rating}</span>
                <span className="text-sm text-gray-400 font-medium ml-1">({product.reviews} reviews)</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500 font-medium whitespace-wrap">Category: <span className="text-gray-800">{product.subcategory || product.category || "Health"}</span></span>
            </div>

            <div className="flex items-center gap-3 mb-3">
              <a href="tel:+254707147774" className="inline-flex items-center justify-center space-x-2 bg-green-50 text-green-700 py-2.5 px-5 rounded-full font-bold hover:bg-green-100 transition shadow-sm border border-green-200">
                <PhoneCall className="w-4 h-4" />
                <span className="text-sm">FREE CONSULT DR ESTHER</span>
              </a>
              <a href="https://wa.me/254707147774" target="_blank" rel="noopener noreferrer" className="relative flex h-10 w-10 items-center justify-center">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                 <div className="relative inline-flex rounded-full h-10 w-10 bg-green-500 items-center justify-center text-white shadow-sm hover:bg-green-600 transition-colors">
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                 </div>
              </a>
            </div>

            <div className="mb-4 p-4 bg-gray-50 rounded-xl border border-gray-100 flex flex-col">
              <div className="flex items-baseline space-x-3 mb-1">
                {(product.percentageDiscount || product.discountText) && (
                  <span className="bg-red-50 text-red-600 font-black px-2 py-0.5 text-sm rounded-md tracking-tight mr-1">
                     {product.percentageDiscount ? `-${product.percentageDiscount}%` : product.discountText}
                  </span>
                )}
                <span className="text-2xl md:text-3xl font-black text-pink-600">
                   KSh {((product.currentPrice ?? product.price) || 0).toLocaleString()}
                </span>
                {(product.offerPrice || product.oldPrice) && (
                  <span className="text-base text-gray-400 font-semibold line-through">
                    KSh {(product.offerPrice || product.oldPrice)?.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="text-xs font-bold text-green-700 flex items-center">
                 <ShieldCheck className="w-3.5 h-3.5 mr-1" /> Earn {product.points || Math.floor(((product.currentPrice ?? product.price) || 0) / 100)} Century Points
              </div>
            </div>

            <div className="mb-4">
              <b className="text-xs uppercase tracking-wider text-gray-500 block mb-2">Quantity</b>
              <div className="flex items-center space-x-3">
                <div className="flex items-center border-2 border-gray-200 rounded-full w-28 h-10">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="flex-1 h-full flex items-center justify-center text-gray-500 hover:text-pink-500 hover:bg-pink-50 transition rounded-l-full font-bold text-lg">-</button>
                  <span className="flex-1 font-bold text-center border-x-2 border-gray-200">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="flex-1 h-full flex items-center justify-center text-gray-500 hover:text-pink-500 hover:bg-pink-50 transition rounded-r-full font-bold text-lg">+</button>
                </div>
                <button 
                  onClick={() => {
                    if (product) {
                      addToCart(product, quantity);
                      setAdded(true);
                      setTimeout(() => setAdded(false), 2000);
                    }
                  }}
                  className={`flex-1 h-10 ${added ? 'bg-green-500 hover:bg-green-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-bold rounded-full transition shadow-md ${added ? 'shadow-green-500/20' : 'shadow-pink-500/20'} flex items-center justify-center uppercase tracking-wide text-xs`}
                >
                  {added ? (
                    <><CheckCircle className="w-4 h-4 mr-2" /> Added to Cart</>
                  ) : (
                    <><ShoppingCart className="w-4 h-4 mr-2" /> Add to Cart</>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Details */}
            <div className="border-t border-gray-100 pt-4 mt-1 space-y-3">
               <div className="flex items-start">
                 <Info className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                 <div>
                   <span className="block font-bold text-gray-900 text-sm">Description</span>
                   <div className="prose prose-sm text-sm text-gray-600 mt-1 leading-relaxed whitespace-pre-line prose-p:mb-2 prose-strong:text-gray-900">
                     <ReactMarkdown>{product.description || `A premier nutritional supplement from ${product.brand}. Designed to boost your well-being, this product ensures high-quality results when combined with a balanced diet. Supports overall vitality and health.`}</ReactMarkdown>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Extended Dossier */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="border-b border-gray-200 bg-gray-50/50 px-5 sm:px-6 py-3.5">
            <h3 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight flex items-center">
              <Activity className="w-5 h-5 text-pink-500 mr-2" />
              Product Dossier
            </h3>
          </div>
          
          <div className="flex flex-col">
            {/* Overview Accordion */}
            <div className="border-b border-gray-200">
               <button 
                 onClick={() => toggleAccordion('overview')}
                 className="w-full px-5 sm:px-6 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus-visible:bg-gray-50"
               >
                 <span className="flex items-center font-bold text-gray-900 text-sm sm:text-base">
                    <Info className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" /> Clinical Dossier
                 </span>
                 {openAccordion === 'overview' ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
               </button>
               {openAccordion === 'overview' && (
                 <div className="px-5 sm:px-6 pb-4 pt-4 animate-in fade-in duration-300">
                     <div className="prose prose-sm text-gray-600 max-w-none prose-ul:pl-0 prose-ul:list-inside prose-ul:space-y-2 prose-li:marker:text-green-500 prose-headings:font-bold prose-headings:text-gray-900 whitespace-pre-line">
                        {product.clinicalDossier || product.dossier ? (
                          <ReactMarkdown>{product.clinicalDossier || product.dossier || ""}</ReactMarkdown>
                        ) : (
                          <>
                            <p>
                              Century Wellness prioritizes products that meet stringent clinical efficacy standards. 
                              This product from {product.brand} has been added to our catalog because it demonstrates 
                              exceptional purity profiles and reliable results. 
                            </p>
                            <p className="mt-4">
                              Our in-house quality assurance team verifies that the manufacturing processes align with 
                              modern Good Manufacturing Practices (GMP). While individual results may vary based on 
                              metabolic factors, the baseline nutritional support provides a strong foundation for health.
                            </p>
                          </>
                        )}
                     </div>
                 </div>
               )}
            </div>

            {/* Ingredients Accordion */}
            <div className="border-b border-gray-200">
               <button 
                 onClick={() => toggleAccordion('ingredients')}
                 className="w-full px-5 sm:px-6 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus-visible:bg-gray-50"
               >
                 <span className="flex items-center font-bold text-gray-900 text-sm sm:text-base">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" /> Active Ingredients
                 </span>
                 {openAccordion === 'ingredients' ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
               </button>
               {openAccordion === 'ingredients' && (
                 <div className="px-5 sm:px-6 pb-4 pt-1 animate-in fade-in duration-300">
                     <p className="text-sm text-gray-600 mb-4">A breakdown of the primary active compounds in this formulation per standard serving.</p>
                     <div className="prose prose-sm text-gray-600 max-w-none prose-ul:pl-0 prose-ul:list-inside prose-ul:space-y-2 prose-li:marker:text-pink-500 whitespace-pre-line">
                        <ReactMarkdown>{product.activeIngredients || "No ingredients listed."}</ReactMarkdown>
                     </div>
                 </div>
               )}
            </div>

            {/* Usage Accordion */}
            <div className="border-b border-gray-200">
               <button 
                 onClick={() => toggleAccordion('usage')}
                 className="w-full px-5 sm:px-6 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus-visible:bg-gray-50"
               >
                 <span className="flex items-center font-bold text-gray-900 text-sm sm:text-base">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" /> Usage & Warnings
                 </span>
                 {openAccordion === 'usage' ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
               </button>
               {openAccordion === 'usage' && (
                 <div className="px-5 sm:px-6 pb-4 pt-1 animate-in fade-in duration-300">
                     <div className="prose prose-sm text-gray-600 max-w-none prose-ul:pl-0 prose-ul:list-inside prose-ul:space-y-2 prose-li:marker:text-red-500 whitespace-pre-line">
                        <ReactMarkdown>{product.usageAndWarnings || "Take one (1) serving daily with food. Consult a doctor before use."}</ReactMarkdown>
                     </div>
                 </div>
               )}
            </div>

            {/* Certifications Accordion */}
            <div>
               <button 
                 onClick={() => toggleAccordion('certifications')}
                 className="w-full px-5 sm:px-6 py-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus-visible:bg-gray-50"
               >
                 <span className="flex items-center font-bold text-gray-900 text-sm sm:text-base">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500 mr-3" /> Quality Assurance
                 </span>
                 {openAccordion === 'certifications' ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />}
               </button>
               {openAccordion === 'certifications' && (
                 <div className="px-5 sm:px-6 pb-4 pt-1 animate-in fade-in duration-300">
                     <p className="text-sm text-gray-600 mb-4">{product.qualityAssurance || "This product aims to meet the rigorous clinical standards upheld by Century Wellness."}</p>
                     
                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 text-center">
                       <div className="flex flex-col items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                         <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-2">
                           <ShieldCheck className="w-5 h-5" />
                         </div>
                         <span className="text-[11px] font-bold text-gray-900 uppercase">GMP Certified</span>
                         <span className="text-[9px] text-gray-500 mt-0.5">Facility Standards</span>
                       </div>
                       
                       <div className="flex flex-col items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                         <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                           <Activity className="w-5 h-5" />
                         </div>
                         <span className="text-[11px] font-bold text-gray-900 uppercase">Lab Tested</span>
                         <span className="text-[9px] text-gray-500 mt-0.5">Purity Verified</span>
                       </div>
                       
                       <div className="flex flex-col items-center p-3 bg-gray-50 rounded-xl border border-gray-100">
                         <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-2">
                           <Star className="w-5 h-5" />
                         </div>
                         <span className="text-[11px] font-bold text-gray-900 uppercase">Premium</span>
                         <span className="text-[9px] text-gray-500 mt-0.5">Sourcing</span>
                       </div>
                     </div>
                 </div>
               )}
            </div>

          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mt-8 md:mt-10 overflow-hidden relative group">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mb-4">Customer Reviews</h2>
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-4 hide-scrollbar pb-4 snap-x snap-mandatory pr-4 md:pr-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {CUSTOMER_REVIEWS.map((review, i) => (
              <div key={i} className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-white p-5 rounded-2xl border border-gray-100 shadow-sm shrink-0 snap-center sm:snap-start flex flex-col hover:border-pink-200 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                     <div className="w-8 h-8 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-xs">{review.name.charAt(0)}</div>
                     <div>
                       <span className="block text-sm font-bold text-gray-900">{review.name}</span>
                       <span className="block text-[10px] text-gray-500">{review.date}</span>
                     </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className={`w-3.5 h-3.5 ${star <= review.rating ? 'fill-current' : 'text-gray-200'}`} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mt-2">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mt-6 md:mt-8">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {similarProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
