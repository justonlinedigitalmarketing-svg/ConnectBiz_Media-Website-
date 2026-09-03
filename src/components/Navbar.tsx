import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Zap, Sparkles, MessageSquare } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050B18]/90 backdrop-blur-md border-b border-[#008CFF]/20 shadow-[0_4px_30px_rgba(0,140,255,0.1)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo with digital connection icon */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#008CFF] to-[#00B7FF] flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(0,140,255,0.4)] group-hover:shadow-[0_0_25px_rgba(0,183,255,0.6)] transition-all">
              <div className="w-full h-full bg-[#050B18] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-radial-glow opacity-60" />
                <div className="flex items-center justify-center relative z-10">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00B7FF] animate-pulse" />
                  <span className="w-4 h-[2px] bg-gradient-to-r from-[#00B7FF] to-[#008CFF]" />
                  <span className="w-2 h-2 rounded-full border border-[#008CFF] bg-[#050B18]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-wider text-white font-['Poppins']">
                  CONNECT<span className="text-[#00B7FF]">BIZ</span>
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[#008CFF]/20 text-[#00B7FF] font-semibold tracking-widest border border-[#008CFF]/40">
                  MEDIA
                </span>
              </div>
              <span className="text-[11px] text-[#B8C4D9] font-medium tracking-normal">
                तुमचा व्यवसाय — आमची Digital Connection.
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(' ', '-')}`}
                href={link.href}
                className="text-sm text-[#B8C4D9] hover:text-white font-medium transition-colors hover:text-[#00B7FF] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00B7FF] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              id="nav-free-quote-btn"
              onClick={onOpenQuote}
              className="text-xs text-[#B8C4D9] hover:text-white px-4 py-2.5 rounded-lg border border-[#008CFF]/30 hover:border-[#00B7FF] hover:bg-[#008CFF]/10 transition-all cursor-pointer font-medium"
            >
              GET FREE QUOTE →
            </button>

            <a
              id="nav-get-started-btn"
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs text-white px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#008CFF] to-[#00B7FF] hover:opacity-95 font-semibold shadow-[0_0_20px_rgba(0,140,255,0.4)] hover:shadow-[0_0_28px_rgba(0,183,255,0.6)] transition-all cursor-pointer"
            >
              <span>GET STARTED</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="nav-mobile-quote-btn"
              onClick={onOpenQuote}
              className="text-[11px] text-white px-3 py-1.5 rounded-lg bg-[#008CFF] font-semibold"
            >
              Quote
            </button>
            <button
              id="nav-mobile-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg bg-[#0B1428] border border-[#008CFF]/30 text-white hover:text-[#00B7FF]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="md:hidden bg-[#050B18]/98 backdrop-blur-xl border-b border-[#008CFF]/20 px-6 py-6 transition-all"
        >
          <div className="flex flex-col gap-4">
            <div className="text-xs text-[#00B7FF] font-medium border-b border-white/10 pb-2">
              तुमचा व्यवसाय — आमची Digital Connection.
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-white hover:text-[#00B7FF] font-medium py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-white/10">
              <button
                id="mobile-drawer-quote-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full text-center py-3 rounded-lg border border-[#008CFF]/40 text-white font-medium hover:bg-[#008CFF]/10 text-sm"
              >
                GET FREE QUOTE →
              </button>
              <a
                id="mobile-drawer-start-btn"
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-semibold text-sm shadow-[0_0_20px_rgba(0,140,255,0.4)]"
              >
                GET STARTED →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
