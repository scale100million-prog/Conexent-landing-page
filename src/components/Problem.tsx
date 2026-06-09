import React from 'react';
import { motion } from 'motion/react';

interface ProblemProps {
  onCtaClick: () => void;
}

export default function Problem({ onCtaClick }: ProblemProps) {
  const handleClick = () => {
    onCtaClick();
  };

  return (
    <section className="bg-[#050508] w-full px-4 sm:px-12 border-t border-white/5">
      <div className="vsl-container flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 16 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center text-center w-full"
        >
          <div className="section-label mb-[20px] !bg-white/10 !border-white/10 !text-[#9090AA]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="mx-3">SECTION 3 — THE PROBLEM</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          <h2 className="section-heading mb-[28px]">
            The Problem Is Not Your Product. It Is Not Your Ads Either. <br />
            <span className="text-primary">It Is The 3 Seconds After The Click.</span>
          </h2>
          
          <div className="flex flex-col gap-[20px] text-[14px] sm:text-[15px] md:text-[16px] text-[#8E8E9F] leading-[1.65] font-normal max-w-[680px] mx-auto">
            <p>
              When a buyer lands on your fashion, skincare or ecommerce store, they make a decision before they read a single word. Before they see the price. Before they look at the product description.
            </p>
            
            <p className="text-white font-medium text-[18px] md:text-[21px] tracking-tight leading-relaxed py-5 border-y border-white/5">
              They ask themselves one question: <span className="text-primary">does this brand feel worth trusting?</span>
            </p>

            <p>
              That decision happens in 3 seconds. And it is the one moment nobody you have paid has ever actually looked at.
            </p>

            <p className="text-white font-medium">
              The freelancer delivered a logo. The agency delivered ad clicks. The developer delivered a working store. Every single time something was delivered. Every single time the sale did not follow.
            </p>

            <p className="text-white font-semibold uppercase tracking-wider text-[15px] sm:text-[16px]">
              Because nobody was responsible for the sale. Only the deliverable.
            </p>

            <p className="text-primary font-semibold text-[20px] sm:text-[22px] md:text-[24px] tracking-tight pt-4">
              That 3 second moment is where we start.
            </p>
          </div>

          <div className="w-full mt-[44px] flex justify-center">
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
    </section>
  );
}
