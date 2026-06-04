/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback } from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Problem from './components/Problem';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import StickyFooter from './components/StickyFooter';

export default function App() {
  // Calendly link as requested
  const CALENDLY_LINK = "https://calendly.com/conexsent/30min";

  const handleCtaClick = useCallback(() => {
    // Tracking call as requested
    if (typeof (window as any).fbq === 'function') {
      (window as any).fbq('track', 'Lead');
    }
    window.open(CALENDLY_LINK, '_blank');
  }, []);

  return (
    <div className="min-h-screen bg-[#050508]">
      <main className="flex flex-col items-center">
        <Hero onCtaClick={handleCtaClick} />
        <SocialProof onCtaClick={handleCtaClick} />
        <Problem onCtaClick={handleCtaClick} />
        <About onCtaClick={handleCtaClick} />
        <FAQ />
        <FinalCTA onCtaClick={handleCtaClick} />
      </main>

      <StickyFooter onCtaClick={handleCtaClick} />
    </div>
  );
}
