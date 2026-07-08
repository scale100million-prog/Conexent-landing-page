import React from 'react';
import { motion } from 'motion/react';

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const handleClick = () => {
    onCtaClick();
  };

  return (
    <section className="bg-gradient-to-b from-[#09090C] to-[#050508] w-full text-white relative overflow-hidden">
      {/* Elite Black Top Banner */}
      <div className="hidden sm:block w-full bg-[#000000] border-b border-white/[0.08] py-3.5 px-4 text-center relative z-20">
        <div className="max-w-[1240px] mx-auto flex items-center justify-center">
          <p className="text-[15px] md:text-[16px] font-medium text-white/95 tracking-[0.01em] sm:tracking-[0.02em]">
            Only for D2C Brands Stuck at <span className="whitespace-nowrap text-white font-semibold">₹3–5L/Month</span>
          </p>
        </div>
      </div>

      {/* Brand-consistent Mobile Top Banner (Bordered, does not touch screen edges) */}
      <div className="block sm:hidden px-4 pt-4 relative z-20">
        <div className="w-full bg-[#000000] border border-white/10 rounded-[14px] py-3 px-4 text-center shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
          <p className="text-[12px] min-[375px]:text-[13px] font-medium text-white/95 tracking-[0.012em] leading-normal">
            Only for D2C Brands Stuck at <span className="whitespace-nowrap text-white font-semibold">₹3–5L/Month</span>
          </p>
        </div>
      </div>

      {/* Decorative background glow */}
      <div className="ambient-glow" />
      
      <div className="vsl-container flex flex-col items-center relative z-10 px-4 sm:px-12 pt-10 sm:pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full"
        >

          {/* Headline */}
          <h1 className="heading-vsl mb-3 sm:mb-[24px]">
            Scale to <span className="text-primary">₹1-2 Crore/Month</span> profitably <span className="text-primary">without blowing up CAC.</span>
          </h1>

          {/* Subheadline */}
          <p className="subheading-vsl mb-6 sm:mb-[48px] !text-[#E2E8F0]">
            We build growth engines that increase revenue and profitability together. <span className="text-primary font-semibold">Done for you.</span> Proven across <span className="text-primary font-semibold">765+ brands.</span> <span className="text-primary font-semibold">₹100Cr+ Generated.</span>
          </p>

          {/* Video Container Wrapper with Handwritten Hint */}
          <div className="relative w-full max-w-[960px] mb-6 sm:mb-[36px]">
            {/* Styled "Watch the Video" helper text and curved pointer arrow (desktop only) */}
            <div className="hidden lg:block absolute -right-40 top-[-24px] text-primary pointer-events-none select-none">
              <span className="font-serif italic text-primary text-[15px] tracking-wide block transform rotate-12">
                Watch the Video
              </span>
              <svg 
                width="72" 
                height="62" 
                viewBox="0 0 72 62" 
                fill="none" 
                className="mt-1 ml-6 transform -rotate-12 opacity-80"
              >
                <path 
                  d="M10 10C35 15 55 45 15 52" 
                  stroke="#FF6B00" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  fill="none"
                />
                <path 
                  d="M25 44L12 52L20 60" 
                  stroke="#FF6B00" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  fill="none"
                />
              </svg>
            </div>

            {/* Video Container */}
            <div className="video-container !max-w-[800px]">
              <wistia-player media-id="ig831n53mi" aspect="1.7777777777777777"></wistia-player>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => { (window as any).fbq('track', 'Lead'); handleClick(); }}
            className="w-full max-w-[580px] mx-auto bg-[#121216] border border-white/10 border-b-[3px] border-b-sky-400 rounded-[24px] p-2.5 shadow-[0_15px_35px_-5px_rgba(14,165,233,0.25)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/50 text-center"
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
        </motion.div>
      </div>
    </section>
  );
}

