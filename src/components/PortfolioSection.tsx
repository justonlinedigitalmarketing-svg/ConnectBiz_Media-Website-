import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';
import {
  ExternalLink,
  Sparkles,
  ArrowRight,
  Eye,
  CheckCircle2,
  Layers,
  X
} from 'lucide-react';
import { PortfolioItem } from '../types';
import portfolioHeroImg from '../assets/images/portfolio_showcase_1788447638234.jpg';

interface PortfolioSectionProps {
  onOpenQuote: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenQuote }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'website', label: 'Business Website' },
    { id: 'social', label: 'Social Media' },
    { id: 'branding', label: 'Promotional Creative' },
    { id: 'google', label: 'Google Business' },
    { id: 'content', label: 'Business Reels & Ads' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? PORTFOLIO_DATA
      : PORTFOLIO_DATA.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 bg-[#050B18]">
      {/* Ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#008CFF]/10 blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1428] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <Sparkles className="w-4 h-4 text-[#00B7FF]" />
            PROVEN RESULTS & CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              Recent Work
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9]">
            Explore how we connect local enterprises and brands with high-converting digital platforms.
          </p>
        </div>

        {/* Feature Showcase Banner */}
        <div className="relative mb-16 rounded-2xl overflow-hidden border border-[#008CFF]/30 bg-[#0B1428] shadow-[0_0_50px_rgba(0,140,255,0.2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
              <span className="text-xs font-mono font-bold text-[#00B7FF] tracking-widest uppercase mb-2">
                Featured Creative Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Full-Stack Brand & Web Transformation
              </h3>
              <p className="text-sm text-[#B8C4D9] leading-relaxed mb-6">
                A modern visual ecosystem combining high-converting website design, unified social media branding, Google Maps authority, and viral business reels.
              </p>
              <div className="space-y-2 mb-8">
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
                  <span>Responsive Web & Mobile Architecture</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
                  <span>Verified Google Business Local Boost</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white">
                  <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
                  <span>High-Converting Reels & Promotional Creatives</span>
                </div>
              </div>
              <button
                id="portfolio-banner-quote-btn"
                onClick={onOpenQuote}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-semibold text-xs tracking-wider shadow-[0_0_20px_rgba(0,140,255,0.4)] hover:shadow-[0_0_30px_rgba(0,183,255,0.7)] transition-all"
              >
                <span>VIEW OUR WORK →</span>
              </button>
            </div>
            <div className="lg:col-span-7 h-full min-h-[300px] relative overflow-hidden">
              <img
                src={portfolioHeroImg}
                alt="Connect Biz Media Portfolio Mockup Showcase"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B1428] via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              id={`portfolio-filter-${tab.id}`}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white shadow-[0_0_20px_rgba(0,140,255,0.4)]'
                  : 'bg-[#0B1428] text-[#B8C4D9] hover:text-white border border-[#008CFF]/20 hover:border-[#008CFF]/50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              id={`portfolio-card-${item.id}`}
              className="group rounded-2xl bg-[#0B1428]/90 border border-[#008CFF]/25 hover:border-[#00B7FF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-[0_10px_30px_rgba(0,140,255,0.1)] hover:shadow-[0_15px_40px_rgba(0,183,255,0.25)]"
            >
              {/* Card Visual Header Mockup Screen */}
              <div className="relative h-48 bg-gradient-to-br from-[#050B18] via-[#0D1C38] to-[#070E22] p-5 flex flex-col justify-between border-b border-[#008CFF]/20 overflow-hidden">
                {/* Tech grid overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#008CFF_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                <div className="absolute top-2 right-2 w-24 h-24 bg-[#00B7FF]/15 rounded-full blur-xl pointer-events-none" />

                <div className="flex items-center justify-between relative z-10">
                  <span className="text-[11px] font-mono font-bold text-[#00B7FF] px-2.5 py-1 rounded-md bg-[#050B18]/90 border border-[#008CFF]/40">
                    {item.categoryLabel}
                  </span>
                  <span className="text-xs font-bold text-green-400 bg-green-950/70 border border-green-500/30 px-2 py-0.5 rounded-full">
                    {item.metrics}
                  </span>
                </div>

                {/* Simulated UI Screen Graphic */}
                <div className="relative z-10 bg-[#070D1E]/90 border border-[#008CFF]/30 rounded-xl p-3 shadow-lg transform group-hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-1.5 mb-2 pb-1.5 border-b border-white/5">
                    <span className="w-2 h-2 rounded-full bg-red-400/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                    <span className="w-2 h-2 rounded-full bg-green-400/80" />
                    <span className="ml-2 text-[10px] text-[#B8C4D9] font-mono truncate">
                      {item.mockupTag}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 w-3/4 bg-gradient-to-r from-[#008CFF] to-transparent rounded" />
                    <div className="h-1.5 w-1/2 bg-white/20 rounded" />
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#00B7FF] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B8C4D9] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Feature Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {item.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[11px] text-[#E2E8F0] bg-[#050B18] px-2.5 py-1 rounded-md border border-white/10"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center gap-1.5 text-xs text-[#00B7FF] hover:text-white font-semibold transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={onOpenQuote}
                    className="inline-flex items-center gap-1 text-xs text-[#B8C4D9] hover:text-white font-medium cursor-pointer"
                  >
                    <span>Get Similar Work</span>
                    <ArrowRight className="w-3 h-3 text-[#008CFF]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            id="portfolio-view-work-cta-btn"
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0B1428] hover:bg-[#008CFF] text-white border border-[#008CFF]/50 hover:border-transparent text-sm font-bold tracking-wider transition-all shadow-[0_0_25px_rgba(0,140,255,0.3)] hover:shadow-[0_0_35px_rgba(0,183,255,0.6)] cursor-pointer"
          >
            <span>VIEW OUR WORK →</span>
          </button>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B18]/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0B1428] border border-[#00B7FF]/50 rounded-2xl p-6 shadow-[0_0_50px_rgba(0,140,255,0.4)]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#050B18] text-[#B8C4D9] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono font-bold text-[#00B7FF] px-2.5 py-1 rounded bg-[#050B18] border border-[#008CFF]/40">
              {selectedProject.categoryLabel}
            </span>

            <h3 className="text-2xl font-bold text-white mt-3 mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-sm text-[#B8C4D9] mb-4">
              {selectedProject.description}
            </p>

            <div className="p-3 rounded-xl bg-[#050B18] border border-[#008CFF]/30 mb-4">
              <div className="text-xs text-[#00B7FF] font-semibold mb-1">
                Demonstrated Impact:
              </div>
              <div className="text-lg font-bold text-green-400">
                {selectedProject.metrics}
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <div className="text-xs font-bold text-white uppercase tracking-wider">
                Delivered Capabilities:
              </div>
              {selectedProject.features.map((feat, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-[#E2E8F0]">
                  <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setSelectedProject(null);
                onOpenQuote();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-bold text-sm shadow-[0_0_20px_rgba(0,140,255,0.4)]"
            >
              Start Your Project Similar to This →
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
