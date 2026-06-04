import React from 'react';
import { motion } from 'motion/react';
import { Target, Zap, Users } from 'lucide-react';

interface AboutProps {
  onCtaClick: () => void;
}

const stats = [
  { value: "+140%", label: "Average Conversion", sub: "Increase within first 30 days", icon: <Zap className="w-5 h-5 text-primary" /> },
  { value: "30 Days", label: "Fixed Implementation", sub: "Measurable results guaranteed", icon: <Target className="w-5 h-5 text-primary" /> },
  { value: "8 Brands", label: "Monthly Capacity", sub: "Deep senior-level involvement", icon: <Users className="w-5 h-5 text-primary" /> }
];

export default function About({ onCtaClick }: AboutProps) {
  const handleClick = () => {
    onCtaClick();
  };

  return (
    <section className="bg-[#0A0A10] w-full px-4 sm:px-12 border-t border-white/5">
      <div className="vsl-container flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center w-full"
        >
          <div className="section-label mb-[20px]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="mx-3">SECTION 4 — ABOUT US</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          <h2 className="section-heading mb-[28px]">
            We Are Not Another Agency That Delivers Something And Walks Away. <br />
            We Are Accountable For One Thing: <span className="text-primary">Your Conversion.</span>
          </h2>

          <div className="flex flex-col gap-[20px] text-[14px] sm:text-[15px] md:text-[16px] text-[#8E8E9F] leading-[1.65] font-normal text-center max-w-[700px] mx-auto mb-[44px]">
            <p>
              Every founder who comes to us has already paid for work that did not move the sale. A freelancer. An agency. Sometimes both. Sometimes more. Something was delivered every single time. The conversion never followed.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px] w-full max-w-[900px] mb-[44px]">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-[28px] rounded-[20px] border border-white/5 bg-[#12121E] shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <span className="text-primary font-bold text-[11px] uppercase tracking-[0.2em] mb-4">{stat.label}</span>
                <span className="text-[22px] font-bold text-white mb-2">{stat.value}</span>
                <span className="text-[13px] text-[#9090AA] leading-tight">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
          
          <div className="w-full max-w-[800px] mb-[44px]">
            <div className="p-[40px] bg-[#12121E]/50 rounded-[24px] border border-white/5 text-center">
                <p className="text-[17px] sm:text-[19px] font-normal italic text-[#E5E7EB] leading-relaxed tracking-wide">
                  "Nobody looked at the brand the way the buyer looks at it. Nobody mapped the exact moment the sale breaks. Nobody stayed after delivery to make sure the numbers actually moved."
                </p>
            </div>
          </div>

          <div className="w-full flex justify-center">
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
                  (LIMITED TO ONLY 8 NEW CLIENTS PER MONTH)
                </span>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
