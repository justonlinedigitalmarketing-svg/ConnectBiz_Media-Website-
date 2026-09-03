import React from 'react';
import { SERVICES_DATA } from '../data';
import {
  Layout,
  Share2,
  Sparkles,
  MapPin,
  Film,
  TrendingUp,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return Layout;
      case 'Share2':
        return Share2;
      case 'Sparkles':
        return Sparkles;
      case 'MapPin':
        return MapPin;
      case 'Film':
        return Film;
      case 'TrendingUp':
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#050B18]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00B7FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1428] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF]" />
            OUR DIGITAL SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Complete{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              Digital Solutions
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9]">
            Everything your business needs to build, manage and grow its digital presence.
          </p>
        </div>

        {/* 6 Glassmorphism Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service: ServiceItem) => {
            const IconComponent = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative rounded-2xl bg-[#0B1428]/80 backdrop-blur-xl border border-[#008CFF]/25 hover:border-[#00B7FF]/70 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,140,255,0.1)] hover:shadow-[0_20px_50px_rgba(0,140,255,0.25)]"
              >
                {/* Subtle top-corner electric glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#008CFF]/10 rounded-full blur-2xl group-hover:bg-[#00B7FF]/20 transition-all pointer-events-none" />

                <div>
                  {/* Top Bar: Card Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#008CFF]/20 to-[#0B1428] border border-[#008CFF]/40 flex items-center justify-center text-[#00B7FF] group-hover:text-white group-hover:border-[#00B7FF] group-hover:bg-[#008CFF] transition-all shadow-[0_0_20px_rgba(0,140,255,0.2)]">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-sm font-mono font-bold text-[#00B7FF]/70 group-hover:text-[#00B7FF] tracking-wider px-3 py-1 rounded-full bg-[#050B18] border border-[#008CFF]/20">
                      CARD {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#00B7FF] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#B8C4D9] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-8 pt-4 border-t border-white/5">
                    <div className="text-xs font-semibold text-[#00B7FF] uppercase tracking-wider mb-2">
                      Key Deliverables:
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E2E8F0]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00B7FF] shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <button
                  id={`service-select-btn-${service.id}`}
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#070D1E] hover:bg-gradient-to-r hover:from-[#008CFF] hover:to-[#00B7FF] text-white border border-[#008CFF]/30 hover:border-transparent text-xs font-semibold tracking-wide transition-all cursor-pointer group/btn"
                >
                  <span>REQUEST THIS SERVICE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00B7FF] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
