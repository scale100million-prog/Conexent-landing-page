import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';

interface FinalCTAProps {
  onCtaClick: () => void;
}

export default function FinalCTA({ onCtaClick }: FinalCTAProps) {
  const handleClick = () => {
    onCtaClick();
  };

  return (
    <section className="bg-[#050508] w-full px-4 sm:px-12 border-t border-white/5">
      <div className="vsl-container flex flex-col items-center !pb-[200px] sm:!pb-[240px] md:!pb-[280px]">
        <motion.div
           initial={{ opacity: 0, y: 16 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col items-center text-center w-full"
        >
          <div className="section-label mb-[20px]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="mx-3">SECTION 6 — FINAL STEP</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          <h2 className="section-heading mb-[24px]">
            Your Product Is Good Enough To Sell. <br />
            <span className="text-primary">Your Brand Is Not Built To Close It Yet.</span>
          </h2>

          <div className="flex flex-col gap-[20px] text-[14px] sm:text-[15px] md:text-[16px] text-[#8E8E9F] leading-[1.65] font-normal mb-[40px] max-w-[600px] mx-auto">
            <p>
              Every month this sits unfixed is another month of paying for traffic that lands and leaves. Another month of ₹10L - ₹20L walking out the door quietly.
            </p>
            <p>
              The buyers are already coming. The product is already strong. The only thing missing is a brand built to close cold traffic into paying customers.
            </p>
            <p className="text-primary font-semibold text-[17px] sm:text-[18px] tracking-wide uppercase">
              That is what we build.
            </p>
          </div>

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
                (LIMITED TO ONLY 8 NEW CLIENTS PER MONTH)
              </span>
            </div>
          </motion.button>
          
          <p className="text-[13px] sm:text-[14px] text-[#6B6B8A] mt-6 max-w-[600px] mx-auto">
            We look at your brand, find exactly where the sale is breaking, and tell you what needs to change. No pitch. No pressure. No follow up if you say no. Just 30 minutes and a clear answer either way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
