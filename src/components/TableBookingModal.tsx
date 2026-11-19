import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Utensils, CheckCircle } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { openWhatsAppTableBooking, TableBookingPayload } from '../utils/whatsapp';

interface TableBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TableBookingModal: React.FC<TableBookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<TableBookingPayload>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '07:30 PM',
    guests: '2 Guests',
    dietaryPreference: 'Pure Vegetarian Delicacies',
    specialNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppTableBooking(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051016]/95">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-[#0d222e] border border-[#d4af37]/50 rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(2,8,12,0.98)] p-6 sm:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#07151c] text-[#faf8f5] hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37] transition-colors focus:outline-none cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-10 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-[#faf8f5] font-light">Table Request Dispatched!</h3>
              <p className="text-xs text-[#c8bead] max-w-sm mx-auto">
                Your reservation enquiry for Aaura Restaurant & Grill has been opened in WhatsApp with our captain. We look forward to hosting you!
              </p>
            </div>
          ) : (
            <>
              <div className="mb-5">
                <div className="relative h-28 rounded-lg overflow-hidden border border-[#d4af37]/30 mb-3 shadow-md">
                  <img
                    src="./images/aaura-lounge-dining.jpg"
                    alt="Aaura Rooftop Dining"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d222e] via-[#0d222e]/40 to-transparent" />
                  <div className="absolute bottom-2 left-3">
                    <span className="font-serif text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                      Aaura Restaurant & Grill • Harda
                    </span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light">
                  Reserve Your Rooftop Table
                </h3>
                <p className="text-xs text-[#c8bead] mt-0.5">
                  Experience open-air rooftop dining, private cabanas, and pure vegetarian & Jain specialties.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Agrawal"
                      className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded px-2.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                      Time *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded px-2.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="12:30 PM (Lunch)">12:30 PM (Lunch)</option>
                      <option value="01:30 PM (Lunch)">01:30 PM (Lunch)</option>
                      <option value="07:00 PM (Dinner)">07:00 PM (Dinner)</option>
                      <option value="07:30 PM (Dinner)">07:30 PM (Dinner)</option>
                      <option value="08:30 PM (Dinner)">08:30 PM (Dinner)</option>
                      <option value="09:30 PM (Late Dinner)">09:30 PM (Late Dinner)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                      Party Size
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded px-2.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value="2 Guests">2 Guests</option>
                      <option value="3-4 Guests">3-4 Guests</option>
                      <option value="5-8 Guests">5-8 Guests (Family)</option>
                      <option value="10+ Large Party">10+ Large Party</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Dietary Preference
                  </label>
                  <select
                    value={formData.dietaryPreference}
                    onChange={(e) => setFormData({ ...formData, dietaryPreference: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Pure Vegetarian Delicacies">Pure Vegetarian Delicacies</option>
                    <option value="Dedicated Jain Food (Zero Onion / Garlic / Root)">Dedicated Jain Food (Zero Onion / Garlic / Root)</option>
                    <option value="Tandoor & Sizzler Special">Tandoor & Sizzler Special</option>
                    <option value="All Cuisines Welcome">All Cuisines Welcome</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Special Occasion or Seating Requests
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="e.g. Birthday anniversary dinner, prefer rooftop edge table..."
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.2em] text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] cursor-pointer"
                >
                  Confirm Table Reservation via WhatsApp
                </button>
              </form>
            </>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
