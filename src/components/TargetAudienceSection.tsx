import React from 'react';
import { TARGET_AUDIENCE_DATA } from '../data';
import {
  Store,
  Zap,
  MapPin,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Sparkles,
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { TargetAudienceItem } from '../types';

interface TargetAudienceSectionProps {
  onSelectAudience: (title: string) => void;
}

export const TargetAudienceSection: React.FC<TargetAudienceSectionProps> = ({
  onSelectAudience
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Store':
        return Store;
      case 'Zap':
        return Zap;
      case 'MapPin':
        return MapPin;
      case 'ShoppingBag':
        return ShoppingBag;
      case 'Briefcase':
        return Briefcase;
      case 'GraduationCap':
        return GraduationCap;
      case 'Sparkles':
        return Sparkles;
      case 'TrendingUp':
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="target-audience" className="relative py-24 bg-[#0B1428]/30 border-t border-[#008CFF]/15">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#050B18] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF]" />
            TAILORED FOR LOCAL & NATIONAL VENTURES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Digital Solutions for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              Every Growing Business
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9]">
            Whether you operate a neighborhood shop or a fast-scaling startup, we tailor your digital presence for maximum customer acquisition.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TARGET_AUDIENCE_DATA.map((item: TargetAudienceItem) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                id={`audience-card-${item.id}`}
                onClick={() => onSelectAudience(item.title)}
                className="group relative rounded-2xl bg-[#0B1428]/80 hover:bg-[#0B1428] border border-[#008CFF]/20 hover:border-[#00B7FF] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,140,255,0.08)] hover:shadow-[0_10px_30px_rgba(0,183,255,0.2)] cursor-pointer"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center text-[#00B7FF] group-hover:bg-[#008CFF] group-hover:text-white transition-all mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#00B7FF] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#B8C4D9] leading-relaxed mb-4">
                    {item.subtitle}
                  </p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.recommendedServices.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] text-[#00B7FF] bg-[#050B18] px-2 py-0.5 rounded border border-[#008CFF]/30"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#00B7FF] group-hover:text-white">
                    <span>Enquire Package</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
