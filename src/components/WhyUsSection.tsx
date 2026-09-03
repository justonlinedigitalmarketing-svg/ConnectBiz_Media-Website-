import React from 'react';
import { WHY_CHOOSE_DATA } from '../data';
import { Award, Palette, BadgePercent, Rocket, CheckCircle2, ShieldCheck } from 'lucide-react';
import { WhyFeatureItem } from '../types';

export const WhyUsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'Palette':
        return Palette;
      case 'BadgePercent':
        return BadgePercent;
      case 'Rocket':
      default:
        return Rocket;
    }
  };

  return (
    <section id="why-us" className="relative py-24 bg-[#0B1428]/40 border-y border-[#008CFF]/15">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#008CFF]/10 blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#050B18] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <ShieldCheck className="w-4 h-4 text-[#00B7FF]" />
            ONE BUSINESS. ONE DIGITAL PARTNER.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              Connect Biz Media?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9] leading-relaxed">
            From website design and branding to social media, Google Business and digital content,
            get your essential digital solutions from one trusted partner.
          </p>
        </div>

        {/* 4 Feature Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_DATA.map((item: WhyFeatureItem) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.number}
                id={`why-block-${item.number}`}
                className="relative rounded-2xl bg-[#0B1428]/90 border border-[#008CFF]/25 hover:border-[#00B7FF] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_8px_30px_rgba(0,140,255,0.12)] hover:shadow-[0_15px_45px_rgba(0,183,255,0.25)] group"
              >
                {/* Number Watermark in Background */}
                <div className="absolute top-4 right-4 text-4xl font-extrabold text-white/5 font-mono group-hover:text-[#00B7FF]/15 transition-colors select-none">
                  {item.number}
                </div>

                <div>
                  {/* Icon & Number Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#008CFF]/20 border border-[#008CFF]/40 flex items-center justify-center text-[#00B7FF] group-hover:bg-[#008CFF] group-hover:text-white transition-all shadow-[0_0_15px_rgba(0,140,255,0.25)]">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#00B7FF] px-2.5 py-1 rounded-md bg-[#050B18] border border-[#008CFF]/20">
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00B7FF] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#B8C4D9] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-[#00B7FF]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="font-medium">100% Quality Guaranteed</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Marathi Cultural Value Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#050B18] via-[#0D1E3F] to-[#050B18] border border-[#008CFF]/30 p-6 text-center max-w-3xl mx-auto shadow-[0_0_30px_rgba(0,140,255,0.15)]">
          <p className="text-lg sm:text-xl font-bold text-white">
            "तुमचा व्यवसाय — आमची Digital Connection."
          </p>
          <p className="mt-2 text-xs sm:text-sm text-[#B8C4D9]">
            We understand the exact aspirations of local businesses and deliver world-class digital execution that speaks to your customers.
          </p>
        </div>
      </div>
    </section>
  );
};
