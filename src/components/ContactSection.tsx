import React, { useState } from 'react';
import {
  Send,
  MessageCircle,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Phone,
  CheckCircle2,
  Edit2,
  Check,
  AlertCircle
} from 'lucide-react';
import { INITIAL_CONTACT_CONFIG, SERVICES_DATA } from '../data';
import { ContactFormData, ContactInfoConfig } from '../types';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [contactConfig, setContactConfig] = useState<ContactInfoConfig>(() => {
    const saved = localStorage.getItem('connect_biz_contact');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.whatsapp && parsed.whatsapp.includes('7030241981')) {
          return parsed;
        }
      } catch (e) {
        return INITIAL_CONTACT_CONFIG;
      }
    }
    return INITIAL_CONTACT_CONFIG;
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    serviceRequired: prefilledService || 'Website Design',
    message: ''
  });

  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [editConfig, setEditConfig] = useState<ContactInfoConfig>(contactConfig);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number to connect.');
      return;
    }
    setSubmitted(true);
  };

  const handleSaveContactConfig = () => {
    setContactConfig(editConfig);
    localStorage.setItem('connect_biz_contact', JSON.stringify(editConfig));
    setIsEditingInfo(false);
  };

  // Generate direct WhatsApp link with prefilled message
  const generateWhatsAppUrl = () => {
    const cleanNumber = contactConfig.whatsapp.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hello Connect Biz Media! 👋\n` +
      `I would like to connect my business to the digital world.\n\n` +
      `*Name:* ${formData.name || 'Business Owner'}\n` +
      `*Business Name:* ${formData.businessName || 'My Business'}\n` +
      `*Phone:* ${formData.phone || 'Contact Request'}\n` +
      `*Service Required:* ${formData.serviceRequired}\n` +
      `*Message:* ${formData.message || 'Looking for digital growth and solutions.'}`
    );
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050B18]">
      {/* Glow backgrounds */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#008CFF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#00B7FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1428] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,140,255,0.2)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B7FF]" />
            START YOUR DIGITAL JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008CFF] to-[#00B7FF]">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B8C4D9]">
            Take the first step towards building a standout digital identity. We respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0B1428]/90 border border-[#008CFF]/30 p-8 shadow-[0_10px_40px_rgba(0,140,255,0.15)] relative">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
              <h3 className="text-xl font-bold text-white">
                Contact Details
              </h3>
              <button
                onClick={() => setIsEditingInfo(!isEditingInfo)}
                className="inline-flex items-center gap-1.5 text-xs text-[#00B7FF] hover:text-white bg-[#008CFF]/15 px-2.5 py-1 rounded border border-[#008CFF]/30 transition-all"
                title="Edit Phone, Email and Social details"
              >
                <Edit2 className="w-3 h-3" />
                <span>{isEditingInfo ? 'Cancel' : 'Edit Info'}</span>
              </button>
            </div>

            {/* Editable Contact Info Form */}
            {isEditingInfo ? (
              <div className="space-y-3 mb-6 p-4 rounded-xl bg-[#050B18] border border-[#00B7FF]/40">
                <div>
                  <label className="text-[11px] text-[#B8C4D9] block">WhatsApp Number:</label>
                  <input
                    type="text"
                    value={editConfig.whatsapp}
                    onChange={(e) => setEditConfig({ ...editConfig, whatsapp: e.target.value })}
                    className="w-full bg-[#0B1428] border border-[#008CFF]/40 rounded p-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#B8C4D9] block">Email:</label>
                  <input
                    type="email"
                    value={editConfig.email}
                    onChange={(e) => setEditConfig({ ...editConfig, email: e.target.value })}
                    className="w-full bg-[#0B1428] border border-[#008CFF]/40 rounded p-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#B8C4D9] block">Location:</label>
                  <input
                    type="text"
                    value={editConfig.location}
                    onChange={(e) => setEditConfig({ ...editConfig, location: e.target.value })}
                    className="w-full bg-[#0B1428] border border-[#008CFF]/40 rounded p-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#B8C4D9] block">Facebook Link:</label>
                  <input
                    type="text"
                    value={editConfig.facebook}
                    onChange={(e) => setEditConfig({ ...editConfig, facebook: e.target.value })}
                    className="w-full bg-[#0B1428] border border-[#008CFF]/40 rounded p-1.5 text-xs text-white"
                  />
                </div>
                <div>
                  <label className="text-[11px] text-[#B8C4D9] block">Instagram Link:</label>
                  <input
                    type="text"
                    value={editConfig.instagram}
                    onChange={(e) => setEditConfig({ ...editConfig, instagram: e.target.value })}
                    className="w-full bg-[#0B1428] border border-[#008CFF]/40 rounded p-1.5 text-xs text-white"
                  />
                </div>
                <button
                  onClick={handleSaveContactConfig}
                  className="w-full py-2 bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-semibold text-xs rounded shadow"
                >
                  Save Contact Information
                </button>
              </div>
            ) : null}

            {/* Display Contact Info List */}
            <div className="space-y-6">
              {/* WhatsApp Display */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B8C4D9] uppercase tracking-wider block">
                    WhatsApp Chat
                  </span>
                  <a
                    href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-green-400 transition-colors"
                  >
                    {contactConfig.whatsapp}
                  </a>
                  <span className="text-xs text-green-400 block mt-0.5">
                    Fastest Response (Under 15 Mins)
                  </span>
                </div>
              </div>

              {/* Email Display */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center text-[#00B7FF] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B8C4D9] uppercase tracking-wider block">
                    Official Email
                  </span>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-base font-bold text-white hover:text-[#00B7FF] transition-colors break-all"
                  >
                    {contactConfig.email}
                  </a>
                </div>
              </div>

              {/* Location Display */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#008CFF]/15 border border-[#008CFF]/30 flex items-center justify-center text-[#00B7FF] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#B8C4D9] uppercase tracking-wider block">
                    Service Location
                  </span>
                  <span className="text-base font-bold text-white">
                    {contactConfig.location}
                  </span>
                  <span className="text-xs text-[#B8C4D9] block mt-0.5">
                    Serving Businesses Globally & Locally
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-semibold text-[#B8C4D9] uppercase tracking-wider block mb-3">
                Connect on Social Media
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={contactConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#050B18] border border-[#008CFF]/30 text-white hover:text-[#00B7FF] hover:border-[#00B7FF] transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href={contactConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#050B18] border border-[#008CFF]/30 text-white hover:text-[#00B7FF] hover:border-[#00B7FF] transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href={`https://wa.me/${contactConfig.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[#050B18] border border-green-500/30 text-green-400 hover:bg-green-500/10 transition-all"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Marathi Tagline Footer inside Box */}
            <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#008CFF]/15 to-transparent border border-[#008CFF]/30">
              <p className="text-xs font-semibold text-[#00B7FF]">
                "तुमचा व्यवसाय — आमची Digital Connection."
              </p>
              <p className="text-[11px] text-[#B8C4D9] mt-1">
                Direct phone consultation and personalized strategy sessions available.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0B1428]/90 border border-[#008CFF]/30 p-8 shadow-[0_10px_40px_rgba(0,140,255,0.15)]">
            <h3 className="text-2xl font-bold text-white mb-2">
              Send an Inquiry
            </h3>
            <p className="text-sm text-[#B8C4D9] mb-6">
              Fill out the form below to receive a customized digital proposal.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#050B18] border border-[#00B7FF] text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400 text-green-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-[#B8C4D9] max-w-md mx-auto">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Our digital strategy team will contact you shortly regarding{' '}
                  <strong className="text-[#00B7FF]">{formData.serviceRequired}</strong>.
                </p>

                {/* Instant WhatsApp Action for the User */}
                <div className="pt-4">
                  <a
                    id="contact-whatsapp-direct-link"
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send this directly via WhatsApp Now →</span>
                  </a>
                </div>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      businessName: '',
                      phone: '',
                      email: '',
                      serviceRequired: 'Website Design',
                      message: ''
                    });
                  }}
                  className="mt-3 block mx-auto text-xs text-[#B8C4D9] underline hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-900/30 border border-red-500/50 text-red-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-[#B8C4D9] block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Anand Jadhav"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00B7FF] focus:shadow-[0_0_15px_rgba(0,183,255,0.3)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8C4D9] block mb-1.5">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      placeholder="e.g. Jadhav Electronics"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00B7FF] focus:shadow-[0_0_15px_rgba(0,183,255,0.3)] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-[#B8C4D9] block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00B7FF] focus:shadow-[0_0_15px_rgba(0,183,255,0.3)] transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#B8C4D9] block mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. anand@jadhav.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00B7FF] focus:shadow-[0_0_15px_rgba(0,183,255,0.3)] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#B8C4D9] block mb-1.5">
                    Service Required
                  </label>
                  <select
                    name="serviceRequired"
                    value={formData.serviceRequired}
                    onChange={handleInputChange}
                    className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00B7FF] focus:shadow-[0_0_15px_rgba(0,183,255,0.3)] transition-all"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.title} className="bg-[#0B1428] text-white">
                        {s.title}
                      </option>
                    ))}
                    <option value="Complete Digital Package" className="bg-[#0B1428] text-white">
                      Complete Digital Package (All-in-One)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-[#B8C4D9] block mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Tell us about your business goals, target audience, or requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#00B7FF] focus:shadow-[0_0_15px_rgba(0,183,255,0.3)] transition-all"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <button
                    id="contact-send-message-btn"
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 py-4 px-8 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-bold text-sm tracking-wider shadow-[0_0_25px_rgba(0,140,255,0.4)] hover:shadow-[0_0_35px_rgba(0,183,255,0.7)] hover:scale-[1.01] transition-all cursor-pointer"
                  >
                    <span>SEND MESSAGE →</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <a
                    id="contact-whatsapp-quick-btn"
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-[#050B18] hover:bg-green-950/40 text-green-400 border border-green-500/40 text-xs font-bold transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
