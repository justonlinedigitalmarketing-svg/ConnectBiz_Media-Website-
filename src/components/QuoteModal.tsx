import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Sparkles,
  MessageCircle,
  ArrowRight,
  Calculator,
  ShieldCheck
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>(() =>
    initialService ? [initialService] : ['Website Design']
  );
  const [businessType, setBusinessType] = useState<string>('Small Business');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const toggleService = (srvTitle: string) => {
    if (selectedServices.includes(srvTitle)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srvTitle));
      }
    } else {
      setSelectedServices([...selectedServices, srvTitle]);
    }
  };

  const businessTypes = [
    'Small Business',
    'Startup',
    'Local Retail Shop',
    'Professional / Consultant',
    'Service Provider',
    'Growing Brand'
  ];

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello Connect Biz Media! 🚀\n` +
      `I would like to request a Free Quote.\n\n` +
      `*Name:* ${name || 'Business Owner'}\n` +
      `*Phone:* ${phone || 'Not provided'}\n` +
      `*Business Type:* ${businessType}\n` +
      `*Selected Services:* ${selectedServices.join(', ')}\n` +
      `*Notes:* ${notes || 'Looking for quick turnaround & digital consultation.'}\n\n` +
      `"तुमचा व्यवसाय — आमची Digital Connection."`
    );
    window.open(`https://wa.me/917030241981?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B18]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0B1428] border-2 border-[#008CFF]/50 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,140,255,0.4)] my-8">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#050B18] text-[#B8C4D9] hover:text-white border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400 text-green-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">
              Quote Request Received!
            </h3>
            <p className="text-sm text-[#B8C4D9] max-w-md mx-auto">
              Thank you, <strong className="text-white">{name}</strong>. Our senior digital consultant will review your selected services ({selectedServices.join(', ')}) and contact you within 2 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={handleWhatsAppSend}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Connect via WhatsApp Now →</span>
              </button>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="block mx-auto text-xs text-[#B8C4D9] hover:text-white underline mt-4"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#050B18] border border-[#008CFF]/40 text-[#00B7FF] text-xs font-semibold uppercase mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Instant Digital Quote Calculator</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Get Your Free Customized Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#B8C4D9] mt-1">
                Select your required digital services to get transparent, high-ROI business solutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection Pills */}
              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2.5">
                  1. Choose Services Required (Click to select):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = selectedServices.includes(srv.title);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.title)}
                        className={`p-3 rounded-xl text-left border transition-all text-xs font-medium cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#008CFF]/20 to-[#00B7FF]/20 border-[#00B7FF] text-white shadow-[0_0_15px_rgba(0,183,255,0.3)]'
                            : 'bg-[#050B18] border-[#008CFF]/20 text-[#B8C4D9] hover:border-[#008CFF]/50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold">{srv.title}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#00B7FF]" />}
                        </div>
                        <span className="text-[10px] text-[#B8C4D9] line-clamp-1">
                          Card {srv.number}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Business Stage */}
              <div>
                <label className="text-xs font-bold text-white uppercase tracking-wider block mb-2.5">
                  2. Business Type:
                </label>
                <div className="flex flex-wrap gap-2">
                  {businessTypes.map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setBusinessType(type)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                        businessType === type
                          ? 'bg-[#008CFF] text-white font-semibold shadow-[0_0_10px_rgba(0,140,255,0.5)]'
                          : 'bg-[#050B18] text-[#B8C4D9] border border-[#008CFF]/20 hover:border-white/20'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#B8C4D9] block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#B8C4D9] block mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-xs text-[#B8C4D9] block mb-1">
                  Specific Requirements or Questions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Need urgent delivery in 5 days or eCommerce store setup"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#050B18] border border-[#008CFF]/30 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#00B7FF]"
                />
              </div>

              {/* Marathi reassurance pill */}
              <div className="p-3 rounded-xl bg-[#050B18] border border-[#008CFF]/20 flex items-center gap-2 text-xs text-[#B8C4D9]">
                <ShieldCheck className="w-4 h-4 text-[#00B7FF] shrink-0" />
                <span>"तुमचा व्यवसाय — आमची Digital Connection." Guaranteed free quote & strategy review.</span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#008CFF] to-[#00B7FF] text-white font-bold text-xs tracking-wider shadow-[0_0_20px_rgba(0,140,255,0.4)] hover:shadow-[0_0_30px_rgba(0,183,255,0.7)] transition-all cursor-pointer"
                >
                  GET FREE QUOTE →
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#050B18] hover:bg-green-950/40 border border-green-500/50 text-green-400 font-bold text-xs transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
