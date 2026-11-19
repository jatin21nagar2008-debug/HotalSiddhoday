import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { openWhatsAppGeneral } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppGeneral(userMsg || 'Website Visitor Enquiry');
    setUserMsg('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Chat Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 15 }}
            className="mb-3 w-80 sm:w-88 rounded-2xl bg-[#0d222e] border border-[#d4af37]/40 shadow-[0_20px_50px_rgba(2,8,12,0.95)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#0a1922] to-[#123342] p-4 border-b border-[#d4af37]/20 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#faf8f5]">Palace Concierge</h4>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online • 24/7 Front Desk
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#c8bead] hover:text-[#faf8f5] focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 space-y-3">
              <div className="bg-[#07151c] rounded-lg p-3 text-xs text-[#faf8f5] border border-white/5">
                <p className="font-light leading-relaxed">
                  Namaste! Welcome to <strong className="text-[#d4af37]">Hotel Siddhoday Palace</strong>, Harda. How may we assist your stay, dining, or banquet requirements today?
                </p>
                <span className="text-[9px] text-[#8c7355] block mt-1.5">Front Desk Team • +91 97702 33417</span>
              </div>

              {/* Quick links */}
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => {
                    openWhatsAppGeneral('Room availability inquiry');
                    setIsOpen(false);
                  }}
                  className="text-[10px] bg-[#1a1e27] hover:bg-[#d4af37]/20 text-[#eadaad] border border-white/5 hover:border-[#d4af37]/30 px-2.5 py-1 rounded-full transition-colors"
                >
                  Check Room Rates
                </button>
                <button
                  onClick={() => {
                    openWhatsAppGeneral('Aaura Restaurant table inquiry');
                    setIsOpen(false);
                  }}
                  className="text-[10px] bg-[#1a1e27] hover:bg-[#d4af37]/20 text-[#eadaad] border border-white/5 hover:border-[#d4af37]/30 px-2.5 py-1 rounded-full transition-colors"
                >
                  Aaura Restaurant
                </button>
                <button
                  onClick={() => {
                    openWhatsAppGeneral('Wedding & banquet inquiry');
                    setIsOpen(false);
                  }}
                  className="text-[10px] bg-[#1a1e27] hover:bg-[#d4af37]/20 text-[#eadaad] border border-white/5 hover:border-[#d4af37]/30 px-2.5 py-1 rounded-full transition-colors"
                >
                  Banquet Enquiry
                </button>
              </div>

              {/* Custom message input */}
              <form onSubmit={handleSend} className="flex gap-2 pt-1">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  className="flex-1 bg-[#07151c] border border-white/10 rounded-lg px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                />
                <button
                  type="submit"
                  className="p-2 rounded-lg bg-[#d4af37] text-[#081820] hover:brightness-110 transition-all cursor-pointer"
                  title="Send via WhatsApp"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-3.5 rounded-full bg-gradient-to-tr from-emerald-600 via-emerald-500 to-[#d4af37] text-white shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_35px_rgba(212,175,55,0.45)] transition-all duration-300 transform hover:scale-105 cursor-pointer focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsating Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-30 pointer-events-none" />

        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}

        {/* Hover Tooltip when closed */}
        {!isOpen && (
          <span className="hidden sm:block absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-md bg-[#0d222e] border border-[#d4af37]/40 text-xs font-serif tracking-wider text-[#faf8f5] whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with Front Desk
          </span>
        )}
      </button>
    </div>
  );
};
