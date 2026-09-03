import React from 'react';
import { ArrowRight, Sparkles, PhoneCall, MessageCircle } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenQuote: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-[#050B18]">
      {/* Powerful blue glowing background orb & spotlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-[#08183A] to-[#050B18] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#008CFF] to-[#00B7FF] opacity-25 blur-[120px] rounded-full pointer-events-none" />

      {/* Cyber line pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(#008CFF 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Glow Box container */}
        <div className="rounded-3xl bg-[#0B1428]/85 backdrop-blur-2xl border-2 border-[#008CFF]/50 p-8 sm:p-14 shadow-[0_0_60px_rgba(0,140,255,0.35)] relative overflow-hidden">
          {/* Subtle top laser bar */}
          <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-[#00B7FF] to-transparent shadow-[0_0_15px_#00B7FF]" />

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Ready to Grow Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] via-[#00B7FF] to-white glow-text-blue">
              Business Online?
            </span>
          </h2>

          {/* Marathi Headline Callout */}
          <div className="mb-4">
            <span className="inline-block text-2xl sm:text-3xl font-bold text-[#00B7FF] glow-text-blue">
              "आज तुमचा व्यवसाय Digital जगाशी Connect करा."
            </span>
          </div>

          {/* English supporting text */}
          <p className="text-base sm:text-lg text-[#B8C4D9] max-w-2xl mx-auto mb-10 leading-relaxed">
            Let's build your professional digital presence and connect your business with more customers.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              id="final-cta-quote-btn"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,140,255,0.5)] hover:shadow-[0_0_45px_rgba(0,183,255,0.8)] hover:scale-105 transition-all cursor-pointer"
            >
              <span>GET FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="final-cta-contact-btn"
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#050B18] hover:bg-[#081530] text-white border border-[#008CFF]/50 hover:border-[#00B7FF] text-sm font-semibold tracking-wide transition-all shadow-md"
            >
              <span>CONTACT US</span>
              <PhoneCall className="w-4 h-4 text-[#00B7FF]" />
            </a>
          </div>

          {/* Main Closing Statement */}
          <div className="pt-8 border-t border-white/10 flex flex-col items-center">
            <span className="text-xl sm:text-2xl font-black tracking-widest text-white">
              CONNECT<span className="text-[#00B7FF]">BIZ</span> MEDIA
            </span>
            <span className="text-sm sm:text-base font-semibold text-[#00B7FF] mt-1.5">
              "तुमचा व्यवसाय — आमची Digital Connection."
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
