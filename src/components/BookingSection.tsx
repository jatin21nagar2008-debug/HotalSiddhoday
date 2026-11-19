import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTEL_CONFIG, RoomData } from '../config/hotelConfig';
import { 
  Calendar, 
  Users, 
  Bed, 
  Mail, 
  Phone, 
  User, 
  Sparkles, 
  CheckCircle, 
  ShieldCheck, 
  AlertCircle,
  Copy,
  Clock,
  ExternalLink
} from 'lucide-react';
import { openWhatsAppBooking, BookingPayload } from '../utils/whatsapp';

interface BookingSectionProps {
  initialRoom?: RoomData | null;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
  initialCategory?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialRoom,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
  initialCategory,
}) => {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingPayload>({
    checkIn: initialCheckIn || today,
    checkOut: initialCheckOut || tomorrow,
    guests: 2,
    rooms: 1,
    category: initialRoom?.name || initialCategory || 'Super Deluxe Room',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationReceipt, setConfirmationReceipt] = useState<{
    referenceId: string;
    payload: BookingPayload;
    nights: number;
    timestamp: string;
  } | null>(null);

  // Sync if props update
  useEffect(() => {
    if (initialRoom) {
      setFormData(prev => ({ ...prev, category: initialRoom.name }));
    }
  }, [initialRoom]);

  useEffect(() => {
    if (initialCheckIn) setFormData(prev => ({ ...prev, checkIn: initialCheckIn }));
    if (initialCheckOut) setFormData(prev => ({ ...prev, checkOut: initialCheckOut }));
    if (initialCategory) setFormData(prev => ({ ...prev, category: initialCategory }));
  }, [initialCheckIn, initialCheckOut, initialCategory]);

  const validate = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Please provide the primary guest name.';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Please provide a valid contact number.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 10) {
      errors.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!formData.checkIn) {
      errors.checkIn = 'Check-in date is required.';
    }

    if (!formData.checkOut) {
      errors.checkOut = 'Check-out date is required.';
    } else if (new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      errors.checkOut = 'Check-out must be at least one day after check-in.';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const calculateNights = (): number => {
    try {
      const d1 = new Date(formData.checkIn);
      const d2 = new Date(formData.checkOut);
      const diffTime = Math.abs(d2.getTime() - d1.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 1;
    } catch {
      return 1;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const nights = calculateNights();
    const referenceId = `HSP-${Math.floor(100000 + Math.random() * 900000)}`;

    // Submit via verified WhatsApp reservation flow
    openWhatsAppBooking(formData);

    setConfirmationReceipt({
      referenceId,
      payload: { ...formData },
      nights,
      timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    });

    setIsSubmitting(false);
  };

  return (
    <section id="booking" className="relative py-20 sm:py-28 bg-[#081820] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#0d222e] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            Official Reservation Engine
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Reserve Your <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Palace Stay</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            Direct reservations guarantee our best seasonal tariff, priority room allocation, and personal front desk assistance.
          </motion.p>
        </div>

        {/* Booking Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl bg-gradient-to-b from-[#0d222e] to-[#081820] border border-[#d4af37]/40 p-6 sm:p-10 shadow-[0_25px_60px_rgba(2,8,12,0.95)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Stage 1: Dates & Rooms */}
            <div>
              <h3 className="font-serif text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4" /> 1. Stay Dates & Accommodation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Check In */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                    Check-In Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={today}
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                      required
                    />
                  </div>
                  {formErrors.checkIn && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.checkIn}
                    </p>
                  )}
                </div>

                {/* Check Out */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                    Check-Out Date *
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      min={formData.checkIn || today}
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                      required
                    />
                  </div>
                  {formErrors.checkOut && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.checkOut}
                    </p>
                  )}
                </div>

                {/* Room Category */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                    Room Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                  >
                    {HOTEL_CONFIG.rooms.map((r) => (
                      <option key={r.id} value={r.name}>
                        {r.name} (from {r.startingPrice})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests & Rooms */}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                      Guests
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-2.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                      <option value={5}>5+ Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                      Rooms
                    </label>
                    <select
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: Number(e.target.value) })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-2.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    >
                      <option value={1}>1 Room</option>
                      <option value={2}>2 Rooms</option>
                      <option value={3}>3 Rooms</option>
                      <option value={4}>4+ Rooms</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2: Guest Details */}
            <div className="pt-4 border-t border-white/[0.08]">
              <h3 className="font-serif text-sm uppercase tracking-widest text-[#d4af37] font-semibold mb-4 flex items-center gap-2">
                <User className="w-4 h-4" /> 2. Primary Guest Details
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Guest Name */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="e.g. Vikram Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                      required
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                    Phone Number (WhatsApp) *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      placeholder="+91 97702 33417"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                      required
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="vikram@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                  </div>
                  {formErrors.email && (
                    <p className="text-[10px] text-red-400 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {formErrors.email}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1.5 font-medium">
                Special Requests or Estimated Arrival Time (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Late check-in after 8 PM, extra pillow set, pure Jain food preference at Aaura..."
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            {/* Important Disclaimer Note */}
            <div className="p-3.5 rounded-lg bg-[#07151c] border border-[#d4af37]/20 flex items-start gap-3 text-xs text-[#c8bead]">
              <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
              <p>
                <strong className="text-[#faf8f5]">Direct Booking Guarantee:</strong> Clicking "Submit Reservation Enquiry" routes your structured request immediately to Hotel Siddhoday Palace's official front desk (+91 97702 33417). Our reservations manager will personally confirm availability and honor best rates.
              </p>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-lg border border-[#d4af37] bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#d4af37] text-[#07080a] font-serif uppercase tracking-[0.22em] text-sm font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all cursor-pointer hover:brightness-105 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#07080a]" />
                <span>Submit Reservation Enquiry via WhatsApp</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Confirmation & Summary Receipt Modal */}
      <AnimatePresence>
        {confirmationReceipt && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#051016]/95">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0d222e] border border-[#d4af37] rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8"
            >
              {/* Top Insignia */}
              <div className="text-center pb-5 border-b border-white/[0.08]">
                <div className="w-12 h-12 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
                  Official Reservation Slip
                </span>
                <h3 className="font-serif text-2xl text-[#faf8f5] font-light">
                  Enquiry Dispatched Successfully
                </h3>
                <span className="text-xs font-mono text-[#c5a059] mt-1 block">
                  Reference: {confirmationReceipt.referenceId}
                </span>
              </div>

              {/* Summary Breakdown */}
              <div className="py-4 space-y-2.5 text-xs text-[#faf8f5]">
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-[#8c7355]">Guest Name:</span>
                  <span className="font-medium">{confirmationReceipt.payload.name}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-[#8c7355]">Contact Phone:</span>
                  <span>{confirmationReceipt.payload.phone}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-[#8c7355]">Room Category:</span>
                  <span className="text-[#d4af37] font-medium">{confirmationReceipt.payload.category}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-[#8c7355]">Dates:</span>
                  <span>
                    {confirmationReceipt.payload.checkIn} → {confirmationReceipt.payload.checkOut} ({confirmationReceipt.nights} Night{confirmationReceipt.nights > 1 ? 's' : ''})
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.04]">
                  <span className="text-[#8c7355]">Rooms / Guests:</span>
                  <span>
                    {confirmationReceipt.payload.rooms} Room(s) • {confirmationReceipt.payload.guests} Guest(s)
                  </span>
                </div>
              </div>

              {/* Notice */}
              <div className="p-3 rounded bg-[#13161d] border border-white/[0.06] text-[11px] text-[#c8bead] leading-relaxed mb-6">
                <strong>Next Step:</strong> Your WhatsApp message has been generated for Hotel Siddhoday Palace Reservations (+91 97702 33417). Our front desk team will reply with your room confirmation and check-in details.
              </div>

              {/* Modal Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={() => openWhatsAppBooking(confirmationReceipt.payload)}
                  className="flex-1 py-2.5 rounded bg-[#d4af37] text-[#07080a] font-serif uppercase tracking-wider text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Reopen WhatsApp</span>
                </button>
                <button
                  onClick={() => setConfirmationReceipt(null)}
                  className="px-5 py-2.5 rounded border border-white/20 text-xs uppercase tracking-wider text-[#faf8f5] hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
