import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end flex-col gap-2">
      {showTooltip && (
        <div className="relative bg-[#0B1428] border border-green-500/40 text-white rounded-xl py-2 px-3.5 text-xs shadow-[0_4px_20px_rgba(0,0,0,0.5)] flex items-center gap-2 animate-bounce">
          <a
            href="https://wa.me/917030241981"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col text-left hover:opacity-90 transition-opacity cursor-pointer"
            aria-label="Chat with us on WhatsApp"
          >
            <span className="font-bold text-green-400">Chat with us!</span>
            <span className="text-[11px] text-[#B8C4D9]">तुमचा व्यवसाय Connect करा</span>
          </a>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5 ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#0B1428] border-r border-b border-green-500/40 rotate-45" />
        </div>
      )}

      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/917030241981"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-gradient-to-tr from-green-600 to-green-400 flex items-center justify-center text-white shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_40px_rgba(34,197,94,0.8)] hover:scale-110 transition-all duration-300"
      >
        <span className="absolute -inset-1 rounded-full bg-green-500 opacity-40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
