import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Layout,
  TrendingUp,
  ShoppingCart,
  Headphones,
  CheckCircle2,
  Zap,
  Globe,
  BarChart3
} from 'lucide-react';
import heroWorkspaceImg from '../assets/images/hero_workspace_1788447613214.jpg';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const quickHighlights = [
    {
      icon: Layout,
      title: 'Website Design',
      sub: 'Modern & Fast',
      active: false
    },
    {
      icon: TrendingUp,
      title: 'SEO & Growth',
      sub: '+68% Inquiries',
      active: true
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce',
      sub: 'Shop & Catalog',
      active: false
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      sub: 'Dedicated Partner',
      active: false
    }
  ];

  return (
    <section
      id="home"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#050B18]"
    >
      {/* Background glow effects & digital network lines */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#008CFF]/20 via-[#00B7FF]/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-40 -left-40 w-96 h-96 bg-[#008CFF]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-60 -right-40 w-96 h-96 bg-[#00B7FF]/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Cyber grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          {/* Marathi Tagline & Small Heading Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1428] border border-[#008CFF]/40 shadow-[0_0_20px_rgba(0,140,255,0.2)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00B7FF] animate-ping" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#00B7FF] uppercase">
              DIGITAL SOLUTIONS FOR MODERN BUSINESSES
            </span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-xs font-medium text-white/90">
              "तुमचा व्यवसाय — आमची Digital Connection."
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
            Connect Your Business to the{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] via-[#00B7FF] to-white glow-text-blue inline-block">
              Digital World.
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-[#B8C4D9] max-w-2xl mx-auto leading-relaxed mb-8">
            Your customers are online. Is your business ready to connect with them?
            Connect Biz Media helps businesses build a professional digital identity through
            websites, branding, social media, content and digital growth solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-free-quote-btn"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-bold text-sm tracking-wide shadow-[0_0_30px_rgba(0,140,255,0.4)] hover:shadow-[0_0_40px_rgba(0,183,255,0.7)] hover:scale-[1.02] transition-all cursor-pointer"
            >
              <span>GET FREE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              id="hero-explore-services-btn"
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0B1428]/80 hover:bg-[#0B1428] text-white border border-[#008CFF]/40 hover:border-[#00B7FF] text-sm font-semibold tracking-wide transition-all"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4 text-[#00B7FF]" />
            </a>
          </div>

          {/* Subtext Trust Pill */}
          <div className="mt-6 flex items-center justify-center gap-6 text-xs text-[#B8C4D9]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
              <span>Modern UI/UX</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
              <span>Fast 0.8s Loading</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00B7FF]" />
              <span>Dedicated Support</span>
            </div>
          </div>
        </div>

        {/* Hero Realistic Business Workspace Visual */}
        <div className="relative max-w-5xl mx-auto">
          {/* Neon Frame Glow */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-[#008CFF] via-[#00B7FF] to-[#008CFF] rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000"></div>

          {/* Visual Container */}
          <div className="relative rounded-2xl overflow-hidden border border-[#008CFF]/30 bg-[#0B1428] shadow-[0_20px_60px_-15px_rgba(0,140,255,0.3)]">
            {/* Top Workspace status bar */}
            <div className="bg-[#070D1E] px-4 py-3 border-b border-[#008CFF]/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                <span className="ml-3 text-xs text-[#B8C4D9] font-mono hidden sm:inline">
                  https://connectbizmedia.com — Official Digital Growth Suite
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#00B7FF]">
                <span className="w-2 h-2 rounded-full bg-[#00B7FF] animate-pulse" />
                <span>Live Workspace</span>
              </div>
            </div>

            {/* Generated Photorealistic Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden">
              <img
                src={heroWorkspaceImg}
                alt="Connect Biz Media Modern Business Workspace with Laptop & Analytics"
                className="w-full h-full object-cover object-center transform hover:scale-[1.01] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Dynamic Overlay Elements matching reference style */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent opacity-90 pointer-events-none" />

              {/* Floating Live Metric Card 1: Top Right */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-[#0B1428]/85 backdrop-blur-md border border-[#008CFF]/40 rounded-xl p-3 sm:p-4 shadow-[0_10px_30px_rgba(0,140,255,0.25)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#008CFF]/20 border border-[#008CFF]/50 flex items-center justify-center text-[#00B7FF]">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-[#B8C4D9]">Digital Growth</div>
                  <div className="text-base sm:text-lg font-bold text-white flex items-center gap-1">
                    <span>+68% Leads</span>
                    <span className="text-[10px] text-green-400 bg-green-950/60 px-1 rounded">
                      ROI 4.2x
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Live Metric Card 2: Top Left */}
              <div className="hidden sm:flex absolute top-6 left-6 bg-[#0B1428]/85 backdrop-blur-md border border-[#008CFF]/40 rounded-xl p-3 shadow-[0_10px_30px_rgba(0,140,255,0.25)] items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00B7FF] animate-ping" />
                <span className="text-xs font-semibold text-white">
                  Grow Your Business Online
                </span>
              </div>
            </div>

            {/* Quick 4-Pillar Glass Cards Bar matching reference photo */}
            <div className="p-4 sm:p-6 bg-[#0B1428]/95 border-t border-[#008CFF]/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {quickHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-3 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col items-center text-center group cursor-pointer ${
                        item.active
                          ? 'bg-gradient-to-b from-[#008CFF]/30 to-[#0B1428] border-[#00B7FF] shadow-[0_0_25px_rgba(0,183,255,0.3)]'
                          : 'bg-[#070D1E]/90 border-[#008CFF]/20 hover:border-[#008CFF]/60 hover:bg-[#0B1428]'
                      }`}
                      onClick={onOpenQuote}
                    >
                      <div
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-2 ${
                          item.active
                            ? 'bg-[#008CFF] text-white shadow-[0_0_15px_rgba(0,183,255,0.5)]'
                            : 'bg-[#008CFF]/15 text-[#00B7FF] group-hover:bg-[#008CFF] group-hover:text-white transition-colors'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#B8C4D9] mt-0.5">
                        {item.sub}
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-[#008CFF]" />
                        <span className="w-1 h-1 rounded-full bg-[#00B7FF]" />
                        <span className="w-1 h-1 rounded-full bg-[#008CFF]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sub-bar tags */}
              <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#B8C4D9]">
                <span className="text-[#00B7FF]">Modern</span>
                <span>•</span>
                <span className="text-white">Fast</span>
                <span>•</span>
                <span className="text-[#00B7FF]">Secure</span>
                <span>•</span>
                <span className="text-white">Scalable</span>
                <span>•</span>
                <span className="text-[#00B7FF]">Result-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
