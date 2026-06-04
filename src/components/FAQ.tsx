import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: "What exactly do you do?",
    a: "We find the exact moment buyers are losing confidence and leaving your brand without purchasing. Then we fix it. That means the look, the messaging, the page structure, and the customer journey. Every element rebuilt around one goal: closing the sale. Not delivering a design. Closing the sale."
  },
  {
    q: "How is this different from what I already tried?",
    a: "Every person you hired before was accountable for a deliverable. A logo. A campaign. A working website. Nobody was accountable for whether you actually sold more. We are. If conversion does not improve within 30 days of going live we keep working at no extra cost. That commitment is in writing before we begin."
  },
  {
    q: "My product is good. Why is it not selling online?",
    a: "Selling in person works because trust builds naturally through conversation. Online your brand has 3 seconds to build that same trust before a buyer decides whether to stay or leave. Most fashion, skincare and ecommerce brands are not built to do that. That is exactly the problem we fix."
  },
  {
    q: "How do I know this time will be different?",
    a: "We look at your brand on the call before you decide anything. We tell you exactly where buyers are losing confidence and leaving. You will understand your own conversion problem more clearly in 30 minutes than you do right now. If we are the right fit we talk next steps. If we are not, you still leave with a clear picture of exactly what needs fixing."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0F0F1A] w-full px-4 sm:px-12 border-t border-white/5">
      <div className="vsl-container flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center w-full"
        >
          <div className="section-label mb-[20px]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="mx-3">SECTION 5 — FAQ</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          <h2 className="section-heading mb-[40px]">
            Everything You Need <br />
            <span className="text-primary">Before We Start.</span>
          </h2>

          <div className="w-full max-w-[860px] flex flex-col gap-[12px]">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#12121E] rounded-[16px] border border-white/5 overflow-hidden shadow-lg transition-all hover:bg-[#151525]"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-[24px_28px] text-left hover:bg-[#18182B]/30 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[17px] font-bold text-white pr-8 leading-tight">{faq.q}</span>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${openIndex === index ? 'bg-primary border-primary text-white' : 'bg-transparent border-white/10 text-[#9090AA]'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="px-[28px] pb-[24px]">
                        <p className="text-[16px] text-[#94A3B8] leading-[1.75] border-t border-white/5 pt-[16px]">
                          {faq.a}
                         </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
