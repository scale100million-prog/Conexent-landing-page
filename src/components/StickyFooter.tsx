import { useState, useEffect } from 'react';
import { Zap, Clock } from 'lucide-react';

interface StickyFooterProps {
  onCtaClick: () => void;
}

export default function StickyFooter({ onCtaClick }: StickyFooterProps) {
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClick = () => {
    onCtaClick();
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#0A0A10]/95 backdrop-blur-[16px] border-t-2 border-white/5 shadow-[0_-4px_32px_rgba(0,0,0,0.5)] py-3.5 sm:py-4 flex items-center">
      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 flex flex-row items-center justify-center sm:justify-between gap-4 sm:gap-8">
        {/* Left: Timer Group (Hidden on mobile, flex on sm+) */}
        <div className="hidden sm:flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/15 flex items-center justify-center">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary fill-primary" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="font-mono text-[18px] sm:text-[22px] font-extrabold text-primary tabular-nums leading-none">
                {formatTime(timeLeft)}
              </span>
            </div>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-[#94A3B8] font-bold">
              LIMITED-TIME OFFER
            </span>
          </div>
        </div>

        {/* Right: CTA Button - Shifting to fill more space, centered on mobile */}
        <button
          onClick={() => { (window as any).fbq('track', 'Lead'); handleClick(); }}
          className="w-full sm:flex-1 max-w-[580px] sm:max-w-[500px] bg-[#121216] border border-white/10 border-b-[3px] border-b-sky-400 rounded-[20px] p-2 shadow-[0_10px_25px_-5px_rgba(14,165,233,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-center"
        >
          <div className="w-full bg-primary rounded-[14px] py-3 px-4 sm:py-3.5 sm:px-6 flex flex-col items-center justify-center gap-1">
            <span className="text-white font-extrabold uppercase tracking-[0.04em] text-[18px] sm:text-[19px] md:text-[21px] leading-tight">
              APPLY NOW!
            </span>
            <span className="text-white font-bold uppercase tracking-[0.02em] text-[9.5px] sm:text-[10px] md:text-[11px] opacity-95 leading-none">
              (LIMITED TO ONLY 8 NEW CLIENTS PER MONTH)
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
