import React from 'react';
import { PROCESS_DATA } from '../data';
import { MessageCircle, FileText, Cpu, TrendingUp, ArrowRight } from 'lucide-react';
import { ProcessStepItem } from '../types';

export const ProcessSection: React.FC = () => {
  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return MessageCircle;
      case '02':
        return FileText;
      case '03':
        return Cpu;
      case '04':
      default:
        return TrendingUp;
    }
  };

  return (
    <section id="process" className="relative py-24 bg-[#050B18] overflow-hidden">
      {/* Background glow streak */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#008CFF]/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1428] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF]" />
            STEP-BY-STEP METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              We Work
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9]">
            A seamless, transparent 4-step framework engineered for maximum digital impact.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Horizontal Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-[2px] bg-gradient-to-r from-[#008CFF]/20 via-[#00B7FF]/50 to-[#008CFF]/20 z-0" />

          {PROCESS_DATA.map((stepItem: ProcessStepItem, index: number) => {
            const StepIcon = getStepIcon(stepItem.step);
            return (
              <div
                key={stepItem.step}
                id={`process-step-${stepItem.step}`}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Step Node */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-[#0B1428] border-2 border-[#008CFF]/40 group-hover:border-[#00B7FF] flex items-center justify-center text-[#00B7FF] group-hover:text-white group-hover:bg-[#008CFF] transition-all duration-300 shadow-[0_0_25px_rgba(0,140,255,0.2)] group-hover:shadow-[0_0_35px_rgba(0,183,255,0.5)] group-hover:scale-110">
                    <StepIcon className="w-10 h-10" />
                  </div>
                  {/* Floating Step Number Badge */}
                  <span className="absolute -bottom-2.5 px-3 py-0.5 rounded-full bg-[#050B18] border border-[#00B7FF] text-[11px] font-mono font-extrabold text-[#00B7FF] shadow-sm">
                    {stepItem.step}
                  </span>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-[#00B7FF] transition-colors mb-2">
                  {stepItem.step} — {stepItem.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm text-[#B8C4D9] leading-relaxed max-w-[240px]">
                  {stepItem.description}
                </p>

                {/* Mobile/Tablet Arrow Indicator */}
                {index < PROCESS_DATA.length - 1 && (
                  <div className="lg:hidden mt-4 text-[#008CFF]/50">
                    <ArrowRight className="w-5 h-5 mx-auto rotate-90 sm:rotate-0" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
