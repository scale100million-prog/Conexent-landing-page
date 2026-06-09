import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, TrendingUp, ArrowUpRight, X, ZoomIn } from 'lucide-react';

interface Metric {
  label: string;
  before: string;
  after: string;
  increase: string;
}

interface CaseStudy {
  brand: string;
  website: string;
  category: string;
  timeframe: string;
  beforeImg: string;
  afterImg: string;
  description: string;
  metrics: {
    revenue: Metric;
    orders: Metric;
    conversion: Metric;
    sessions: Metric;
  };
}

const caseStudies: CaseStudy[] = [
  {
    brand: "Manka Creations",
    website: "mankacreations.com",
    category: "Handcrafted Jewellery",
    timeframe: "60 days",
    beforeImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Manka%20Jewellry%20Before.png",
    afterImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Manka%20Jewellry%20After.png",
    description: "Rebuilt the brand identity and website experience around buyer trust. Same product, completely new conversion system.",
    metrics: {
      revenue: { label: "Revenue", before: "₹22.8K", after: "₹348K", increase: "+1,426%" },
      orders: { label: "Orders", before: "23", after: "364", increase: "+1,483%" },
      conversion: { label: "Conversion Rate", before: "1.2%", after: "4.31%", increase: "+259%" },
      sessions: { label: "Sessions", before: "2,268", after: "6,739", increase: "+197%" }
    }
  },
  {
    brand: "TitanPan",
    website: "gettitanpan.com",
    category: "Cookware — D2C",
    timeframe: "30 days",
    beforeImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Titan%20Pan%20Before.png",
    afterImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Titan%20Pan%20After.png",
    description: "Redesigned the entire customer journey from ad click to checkout. Fixed the funnel, not the ads.",
    metrics: {
      revenue: { label: "Revenue", before: "$52K", after: "$239K", increase: "+360%" },
      orders: { label: "Orders", before: "179", after: "1,559", increase: "+771%" },
      conversion: { label: "Conversion Rate", before: "0.87%", after: "27.13%", increase: "+3,018%" },
      sessions: { label: "Sessions", before: "19K", after: "37K", increase: "+95%" }
    }
  },
  {
    brand: "Derma Relief",
    website: "getdermarelief.com",
    category: "Health and Wellness",
    timeframe: "30 days",
    beforeImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Derma%20Before.png",
    afterImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Derma%20After.png",
    description: "Restructured product pages around buying psychology and removed friction across the entire purchase flow.",
    metrics: {
      revenue: { label: "Revenue", before: "$3,083", after: "$12,500", increase: "+305%" },
      orders: { label: "Orders", before: "84", after: "310", increase: "+269%" },
      conversion: { label: "Conversion Rate", before: "1.47%", after: "4.39%", increase: "+199%" },
      sessions: { label: "Sessions", before: "2,709", after: "6,329", increase: "+134%" }
    }
  },
  {
    brand: "Auybovan",
    website: "auybovan.com",
    category: "Skincare",
    timeframe: "60 days",
    beforeImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Auybovan%20Before.png",
    afterImg: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Auybovan%20After.png",
    description: "Rebuilt the brand experience and funnel architecture. Traffic barely changed. Revenue exploded.",
    metrics: {
      revenue: { label: "Revenue", before: "$20.9K", after: "$144K", increase: "+589%" },
      orders: { label: "Orders", before: "261", after: "1,854", increase: "+610%" },
      conversion: { label: "Conversion Rate", before: "0.84%", after: "4.98%", increase: "+493%" },
      sessions: { label: "Sessions", before: "31K", after: "36K", increase: "+16%" }
    }
  }
];

const testimonials = [
  {
    name: "Akash Verma",
    photo: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Akash%20verma.jpeg",
    badge: "Fashion & Lifestyle Brand",
    designation: "Founder, Thyne",
    quote: "Conexsent transformed how our brand is perceived. Their campaigns improved our visual presence, drove stronger engagement, increased website traffic, and delivered measurable results from our ad campaigns."
  },
  {
    name: "Indranil Chakraborty",
    photo: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/indranil%20chakraborty.jpeg",
    badge: "AI-Powered Production Studio",
    designation: "Founder & CEO, Scene Matter Studios",
    quote: "Their work was invaluable in establishing our visual presence during our AI-production journey. They built credibility, improved campaign performance, and helped us attract new clients consistently."
  },
  {
    name: "Rashmi Dhankar",
    photo: "https://raw.githubusercontent.com/scale100million-prog/my-images/main/Rashmi%20Dhankar.jpeg",
    badge: "D2C Fashion Brand",
    designation: "Founder, Gladragz",
    quote: "Partnering with Conexsent was one of the best decisions we made. They helped us produce premium content at scale, strengthened our brand image, and drove significantly stronger marketing results."
  }
];

interface SocialProofProps {
  onCtaClick: () => void;
}

export default function SocialProof({ onCtaClick }: SocialProofProps) {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  const handleClick = () => {
    onCtaClick();
  };

  return (
    <section className="bg-[#0B0B12] w-full px-4 sm:px-12 border-t border-white/5 pt-2 sm:pt-16 pb-16 sm:pb-24">
      <div className="vsl-container flex flex-col items-center">

        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full"
        >
          {/* Since 2021 Header Block */}
          <div className="text-[17px] min-[375px]:text-[18px] sm:text-[21px] font-normal text-white/95 tracking-[0.02em] mb-4 text-center">
            Since 2021
          </div>

          <h2 className="text-[25px] min-[375px]:text-[27px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-medium tracking-[-0.02em] sm:tracking-[-0.025em] leading-[1.3] sm:leading-[1.2] text-center max-w-[960px] mx-auto mb-6 text-[#94A3B8]">
            India’s 1st <span className="text-primary font-semibold">Done-For-You</span> Brand Transformation Partner Built Exclusively For <span className="text-[#E2E8F0] font-normal">Ecommerce Founders</span>
          </h2>

          <p className="text-[13.5px] min-[375px]:text-[14.5px] sm:text-[16.5px] md:text-[17.5px] text-[#A1A1B2] leading-[1.65] text-center font-normal tracking-[0.012em] max-w-[850px] mx-auto mb-[28px]">
            We have rebuilt and scaled brands for 765+ fashion, skincare and ecommerce founders across 10 countries — founders who were getting traffic, spending on ads, and still not selling. Until we fixed their store.
          </p>

          <div className="w-full text-center px-4 mb-16">
            <span className="inline text-[13.5px] min-[375px]:text-[14.5px] sm:text-[16px] font-medium text-slate-100 tracking-[0.015em] underline decoration-primary decoration-[1.5px] underline-offset-[7px] sm:underline-offset-[9px] leading-[2.1] sm:leading-[2.4]">
              Built in India. Proven Worldwide. Trusted by Ecommerce Founders.
            </span>
          </div>

          {/* Testimonials Section */}
          <div className="w-full flex flex-col items-center mt-4 mb-24 max-w-[1240px] mx-auto px-4 sm:px-0">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[26px] min-[375px]:text-[28px] sm:text-[34px] md:text-[38px] font-bold text-white tracking-tight mb-12 text-center"
            >
              What Our Clients Say
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
              {testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className="flex flex-col items-center bg-[#11111A]/90 hover:bg-[#151522] border border-[#FF6B00]/15 hover:border-primary/45 transition-all duration-300 rounded-[32px] p-6 sm:p-8 relative shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_44px_rgba(255,107,0,0.15)] text-center group"
                >
                  {/* Profile Photo Area with overlapping Badge */}
                  <div className="relative mb-8 flex flex-col items-center">
                    <div className="w-[170px] h-[170px] sm:w-[190px] sm:h-[190px] rounded-[24px] overflow-hidden border border-white/[0.06] bg-[#161622] relative shadow-inner">
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-1" />
                      <img 
                        src={testimonial.photo} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Badge overlapping bottom of photo */}
                    <div className="absolute -bottom-2 bg-[#FF6B00] text-white text-[9px] sm:text-[9.5px] font-bold uppercase tracking-[0.05em] px-4 py-1.5 rounded-lg border border-primary/20 shadow-[0_4px_14px_rgba(255,107,0,0.3)] whitespace-nowrap select-none z-10">
                      {testimonial.badge}
                    </div>
                  </div>

                  {/* Name */}
                  <h4 className="font-extrabold text-[19px] sm:text-[21px] text-white tracking-tight leading-none mb-1.5 mt-3">
                    {testimonial.name}
                  </h4>

                  {/* Designation */}
                  <p className="text-[12.5px] sm:text-[13px] text-zinc-400 font-medium font-sans mb-6 leading-relaxed">
                    {testimonial.designation}
                  </p>

                  {/* Quote text */}
                  <p className="text-zinc-300 text-[13px] sm:text-[13.5px] italic leading-relaxed font-sans mt-auto border-t border-white/[0.04] pt-5 w-full">
                    "{testimonial.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] mb-[44px] items-stretch w-full max-w-[1240px] text-left">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col justify-between bg-[#11111A]/90 hover:bg-[#151522] border border-[#FF6B00]/15 hover:border-primary/45 transition-all duration-300 rounded-[32px] p-6 sm:p-8 relative shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_44px_rgba(255,107,0,0.1)]"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="font-extrabold text-[20px] sm:text-[23px] text-white tracking-tight leading-none mb-1.5">
                        {study.brand}
                      </h3>
                      <span className="text-[11px] uppercase tracking-wider font-extrabold text-zinc-400 font-mono">
                        {study.category}
                      </span>
                    </div>
                    
                    {/* Timeframe Badge */}
                    <span className="flex items-center gap-1 px-3 py-1 text-[11px] font-bold text-primary bg-primary/10 rounded-full border border-primary/20 shrink-0 select-none">
                      <Calendar className="w-3.5 h-3.5" />
                      {study.timeframe}
                    </span>
                  </div>

                  {/* Screenshots Display: Side-by-side on desktop (768px and above) */}
                  <div className="hidden md:grid grid-cols-2 gap-4 mb-6">
                    {/* Before Screenshot */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 font-mono">Before Fix</span>
                      <div 
                        onClick={() => setSelectedImage({ src: study.beforeImg, alt: `${study.brand} - Before Fix` })}
                        className="relative h-[180px] sm:h-[195px] rounded-xl overflow-hidden border border-white/5 shadow-inner bg-black/40 cursor-pointer group transition-all duration-300 hover:border-white/20 select-none"
                      >
                        <img
                          src={study.beforeImg}
                          alt={`${study.brand} Before`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top filter grayscale max-h-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="bg-black/60 p-2.5 rounded-full border border-white/10 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                            <ZoomIn className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-zinc-500 text-center select-none mt-1 font-medium hover:text-zinc-400 transition-colors cursor-pointer" onClick={() => setSelectedImage({ src: study.beforeImg, alt: `${study.brand} - Before Fix` })}>
                        🔍 Click to view full screenshot
                      </span>
                    </div>

                    {/* After Screenshot */}
                    <div className="flex flex-col gap-1.5">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-primary font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse mr-0.5"></span>
                        After Fix
                      </span>
                      <div 
                        onClick={() => setSelectedImage({ src: study.afterImg, alt: `${study.brand} - After Fix` })}
                        className="relative h-[180px] sm:h-[195px] rounded-xl overflow-hidden border border-primary/25 shadow-[0_4px_24px_rgba(255,107,0,0.12)] bg-black/40 cursor-pointer group transition-all duration-300 hover:border-primary/50 select-none"
                      >
                        <img
                          src={study.afterImg}
                          alt={`${study.brand} After`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top max-h-full transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <div className="bg-black/60 p-2.5 rounded-full border border-primary/25 backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-lg">
                            <ZoomIn className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                      </div>
                      <span className="text-[11px] text-zinc-500 text-center select-none mt-1 font-medium hover:text-zinc-400 transition-colors cursor-pointer" onClick={() => setSelectedImage({ src: study.afterImg, alt: `${study.brand} - After Fix` })}>
                        🔍 Click to view full screenshot
                      </span>
                    </div>
                  </div>

                  {/* Screenshots Display: Draggable compare slider on mobile - Removed completely per user request */}

                  {/* Clean Before & After Numbers Comparison Table on Mobile (below 768px i.e. < md) */}
                  <div className="block md:hidden mb-6 bg-black/40 rounded-2xl border border-white/[0.04] overflow-hidden p-5">
                    <div className="flex flex-col divide-y divide-white/[0.06]">
                      {Object.values(study.metrics).map((metric, idx) => (
                        <div key={idx} className={`flex flex-col py-4.5 ${idx === 0 ? 'pt-0' : ''} ${idx === 3 ? 'pb-0' : ''}`}>
                          <div className="flex items-center justify-between w-full">
                            {/* Label on the left */}
                            <span className="text-[13px] font-bold text-zinc-400 font-sans select-none">
                              {metric.label}
                            </span>
                            
                            {/* Before and After values on the right */}
                            <div className="flex items-center gap-1.5 select-none">
                              {/* Before Number in grey */}
                              <span className="text-[14px] font-medium text-zinc-500 font-mono tracking-tight line-through decoration-zinc-600/40">
                                {metric.before}
                              </span>
                              
                              {/* Small spacer arrow */}
                              <span className="text-zinc-600 text-xs font-mono">→</span>
                              
                              {/* After Number in bold orange */}
                              <span className="text-[16px] font-black text-primary font-mono tracking-tight">
                                {metric.after}
                              </span>
                            </div>
                          </div>
                          
                          {/* Growth percentage badge below the row in green */}
                          <div className="flex justify-end mt-1.5">
                            <span className="text-[9.5px] font-mono font-extrabold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/10 select-none">
                              {metric.increase} Growth
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 2x2 Metric Grid - Hidden on mobile to avoid redundancy, visible on desktop */}
                  <div className="hidden md:grid grid-cols-2 gap-3 mb-6">
                    {Object.entries(study.metrics).map(([key, metric]) => (
                      <div key={key} className="bg-black/30 p-3.5 rounded-2xl border border-white/[0.03] flex flex-col justify-between">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10.5px] font-mono uppercase tracking-[0.03em] text-zinc-400">
                            {metric.label}
                          </span>
                        </div>

                        {/* Metric Transformation */}
                        <div className="flex items-baseline gap-1.5 mt-1 flex-wrap">
                          <span className="text-zinc-500 text-[12.5px] sm:text-[13.5px] font-mono line-through shrink-0">
                            {metric.before}
                          </span>
                          <span className="text-zinc-600 font-bold text-xs sm:text-sm shrink-0">→</span>
                          <span className="text-primary font-black text-[15px] sm:text-[18px] font-mono tracking-tight shrink-0">
                            {metric.after}
                          </span>
                        </div>

                        {/* Percent Badge */}
                        <div className="mt-1.5 pt-1.5 border-t border-white/[0.02] flex items-center justify-between">
                          <span className="text-[10px] font-extrabold text-emerald-400 font-sans tracking-wide">
                            {metric.increase} Growth
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Short description on mobile only (moved below numbers, centered) */}
                <p className="block md:hidden text-zinc-400 text-xs italic mt-1 mb-5 leading-relaxed font-sans font-medium text-center">
                  {study.description}
                </p>

                {/* Card Footer - Website URL (Static/Unclickable) */}
                <div className="mt-2 pt-4 border-t border-white/[0.04] flex items-center justify-between">
                  <span className="text-[11px] text-zinc-500 font-mono">Case Study Store</span>
                  <span className="text-xs font-semibold text-zinc-400 font-mono select-none">
                    {study.website}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="w-full flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => { (window as any).fbq('track', 'Lead'); handleClick(); }}
              className="w-full max-w-[580px] bg-[#121216] border border-white/10 border-b-[3px] border-b-sky-400 rounded-[24px] p-2.5 shadow-[0_15px_35px_-5px_rgba(14,165,233,0.25)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 text-center"
            >
              <div className="w-full bg-primary rounded-[16px] py-3.5 px-4 sm:py-4 sm:px-6 flex flex-col items-center justify-center gap-1">
                <span className="text-white font-extrabold uppercase tracking-[0.04em] text-[19px] sm:text-[22px] md:text-[24px] leading-tight">
                  APPLY NOW!
                </span>
                <span className="text-white font-bold uppercase tracking-[0.02em] text-[10px] sm:text-[11.5px] md:text-[12px] opacity-95">
                  (LIMITED TO ONLY 3 NEW CLIENTS PER MONTH)
                </span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Interactive Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-6 backdrop-blur-md cursor-zoom-out select-none"
          >
            {/* Float Close Button - Float top right viewport */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] bg-zinc-900/90 hover:bg-zinc-800 text-white hover:text-primary transition-all duration-200 p-3 rounded-full border border-white/10 shadow-lg cursor-pointer flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary/50"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Centered Lightbox Card wrapper (Scrolls internally if image is extremely tall) */}
            <motion.div
              initial={{ scale: 0.94, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] md:max-h-[90vh] overflow-y-auto rounded-2xl flex flex-col items-center bg-[#0C0C14] border border-white/10 shadow-2xl p-2 sm:p-4 cursor-default scrollbar-thin scrollbar-thumb-zinc-800"
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-contain rounded-lg shadow-inner select-none"
              />
              <div className="mt-4 pb-2 text-center w-full">
                <span className="text-zinc-200 text-xs sm:text-[13.5px] font-bold tracking-wide font-mono uppercase bg-zinc-900/50 px-3.5 py-1.5 rounded-full border border-white/[0.03]">
                  {selectedImage.alt}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
