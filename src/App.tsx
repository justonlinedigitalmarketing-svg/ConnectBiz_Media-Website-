/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsRibbon } from './components/StatsRibbon';
import { ServicesSection } from './components/ServicesSection';
import { WhyUsSection } from './components/WhyUsSection';
import { ProcessSection } from './components/ProcessSection';
import { PortfolioSection } from './components/PortfolioSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState<string>('Website Design');

  const handleOpenQuote = (serviceName?: string) => {
    if (serviceName) {
      setSelectedServiceForQuote(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleAudienceSelect = (audienceTitle: string) => {
    // Scroll smoothly to contact or open quote with audience preselected
    setSelectedServiceForQuote(`${audienceTitle} Package`);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050B18] text-white flex flex-col selection:bg-[#008CFF] selection:text-white">
      {/* Sticky Navigation */}
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {/* Hero Section with Realistic Workspace Visual */}
        <Hero onOpenQuote={() => handleOpenQuote()} />

        {/* Dark Blue Premium Statistics Banner (Editable) */}
        <StatsRibbon onOpenQuote={() => handleOpenQuote()} />

        {/* Services Section with 6 Glassmorphism Cards */}
        <ServicesSection onSelectService={(serviceTitle) => handleOpenQuote(serviceTitle)} />

        {/* Why Connect Biz Media Section */}
        <WhyUsSection />

        {/* How We Work 4-Step Process Section */}
        <ProcessSection />

        {/* Recent Work Portfolio Grid with Filter Mockups */}
        <PortfolioSection onOpenQuote={() => handleOpenQuote()} />

        {/* Digital Solutions for Every Growing Business Target Audience Cards */}
        <TargetAudienceSection onSelectAudience={handleAudienceSelect} />

        {/* What Our Clients Say Testimonials (Clearly Marked Editable Placeholders) */}
        <TestimonialsSection />

        {/* Final CTA Section with Neon Glow Background & Marathi Tagline */}
        <FinalCtaSection onOpenQuote={() => handleOpenQuote()} />

        {/* Contact Section with Inquiry Form & WhatsApp */}
        <ContactSection prefilledService={selectedServiceForQuote} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Free Quote Calculator Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedServiceForQuote}
      />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
