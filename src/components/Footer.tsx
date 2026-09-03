import React from 'react';
import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Sparkles
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Website Design', href: '#services' },
    { label: 'Social Media', href: '#services' },
    { label: 'Branding', href: '#services' },
    { label: 'Google Business', href: '#services' },
    { label: 'Content & Reels', href: '#services' },
    { label: 'Digital Growth', href: '#services' },
  ];

  return (
    <footer id="main-footer" className="relative bg-[#030711] border-t border-[#008CFF]/20 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#008CFF]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#008CFF] to-[#00B7FF] flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(0,140,255,0.4)]">
                <div className="w-full h-full bg-[#050B18] rounded-[10px] flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00B7FF]" />
                    <span className="w-4 h-[2px] bg-gradient-to-r from-[#00B7FF] to-[#008CFF]" />
                    <span className="w-2 h-2 rounded-full border border-[#008CFF] bg-[#050B18]" />
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider text-white">
                CONNECT<span className="text-[#00B7FF]">BIZ</span> MEDIA
              </span>
            </div>

            <p className="text-lg font-bold text-[#00B7FF]">
              "तुमचा व्यवसाय — आमची Digital Connection."
            </p>

            <p className="text-sm text-[#B8C4D9] max-w-sm leading-relaxed">
              Empowering small businesses, local enterprises, startups and growing brands with high-converting websites, branding, social media, and digital marketing excellence.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-9 h-9 rounded-lg bg-[#0B1428] border border-[#008CFF]/30 text-white hover:text-[#00B7FF] hover:border-[#00B7FF] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-lg bg-[#0B1428] border border-[#008CFF]/30 text-white hover:text-[#00B7FF] hover:border-[#00B7FF] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn page"
                className="w-9 h-9 rounded-lg bg-[#0B1428] border border-[#008CFF]/30 text-white hover:text-[#00B7FF] hover:border-[#00B7FF] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/917030241981"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp chat"
                className="w-9 h-9 rounded-lg bg-[#0B1428] border border-green-500/30 text-green-400 hover:bg-green-500/20 flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold text-[#00B7FF] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#B8C4D9] hover:text-white hover:text-[#00B7FF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-semibold text-[#00B7FF] uppercase tracking-wider mb-4">
              Our Digital Services
            </h4>
            <ul className="grid grid-cols-2 gap-2.5">
              {serviceLinks.map((srv) => (
                <li key={srv.label}>
                  <a
                    href={srv.href}
                    className="text-sm text-[#B8C4D9] hover:text-white hover:text-[#00B7FF] transition-colors"
                  >
                    {srv.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-3 rounded-xl bg-[#0B1428] border border-[#008CFF]/25">
              <span className="text-xs text-[#00B7FF] font-semibold block mb-1">
                Maharashtra Digital Desk
              </span>
              <span className="text-xs text-[#B8C4D9]">
                Connecting Pune, Mumbai, Nashik, Nagpur & all growing regional business hubs.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B8C4D9]">
          <p id="footer-copyright">
            © 2026 Connect Biz Media. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[#00B7FF]">
              "तुमचा व्यवसाय — आमची Digital Connection."
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#0B1428] hover:bg-[#008CFF] text-white transition-colors"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
