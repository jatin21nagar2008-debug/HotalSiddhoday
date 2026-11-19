import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Bed, Users, Maximize2, Shield, PhoneCall, Calendar, Sparkles } from 'lucide-react';
import { RoomData, HOTEL_CONFIG } from '../config/hotelConfig';
import { openWhatsAppGeneral } from '../utils/whatsapp';

interface RoomModalProps {
  room: RoomData | null;
  onClose: () => void;
  onBookRoom: (room: RoomData) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onBookRoom }) => {
  if (!room) return null;

  const [selectedImage, setSelectedImage] = useState(room.featuredImage);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#051016]/95">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#0d222e] border border-[#d4af37]/50 rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(2,8,12,0.98)] max-h-[90vh] flex flex-col"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#07080a]/80 text-[#faf8f5] hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37] transition-colors focus:outline-none cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full border border-[#d4af37]/40 bg-[#13161d] text-[10px] uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  {room.category}
                </span>
                {room.popular && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#d4af37] text-[#07080a] text-[10px] uppercase tracking-wider font-bold">
                    Guest Favorite
                  </span>
                )}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#faf8f5] font-light">
                {room.name}
              </h2>
              <p className="font-serif italic text-sm sm:text-base text-[#c5a059] mt-1">
                "{room.tagline}"
              </p>
            </div>

            {/* Gallery Section */}
            <div className="space-y-3">
              <div className="relative rounded-lg overflow-hidden aspect-[16/9] border border-white/10">
                <img
                  src={selectedImage}
                  alt={room.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />
              </div>

              {/* Thumbnails */}
              {room.galleryImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                  {room.galleryImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedImage(img)}
                      className={`relative w-20 h-14 rounded-md overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                        selectedImage === img ? 'border-[#d4af37] scale-105' : 'border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`${room.name} ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-lg bg-[#13161d] border border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <Maximize2 className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <div className="text-[10px] uppercase text-[#8c7355]">Room Size</div>
                  <div className="text-xs font-semibold text-[#faf8f5]">{room.size}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <div className="text-[10px] uppercase text-[#8c7355]">Occupancy</div>
                  <div className="text-xs font-semibold text-[#faf8f5]">{room.occupancy}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Bed className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <div className="text-[10px] uppercase text-[#8c7355]">Bedding</div>
                  <div className="text-xs font-semibold text-[#faf8f5]">{room.bedType}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <div className="text-[10px] uppercase text-[#8c7355]">Tariff</div>
                  <div className="text-xs font-semibold text-[#d4af37]">From {room.startingPrice}</div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-serif text-lg text-[#faf8f5] mb-2 font-light">Room Overview</h3>
              <p className="text-sm text-[#c8bead] leading-relaxed font-light">
                {room.description}
              </p>
            </div>

            {/* Inclusions & Amenities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#c5a059] mb-3 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> Room Amenities
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {room.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#faf8f5]/90">
                      <Check className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-sm uppercase tracking-widest text-[#c5a059] mb-3 font-semibold flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" /> Distinct Features
                </h3>
                <ul className="space-y-1.5">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#c8bead]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing note */}
            <div className="p-3 rounded bg-[#13161d]/50 border border-white/[0.04] text-[11px] text-[#8c7355]">
              * Note: {room.priceNote}. Tariffs are subject to availability and seasonal peak dates. Check-in: {HOTEL_CONFIG.contact.timings.checkIn} | Check-out: {HOTEL_CONFIG.contact.timings.checkOut}.
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  onClose();
                  openWhatsAppGeneral(`Booking inquiry for ${room.name}`);
                }}
                className="w-full sm:w-auto px-5 py-2.5 rounded border border-[#d4af37]/50 text-xs uppercase tracking-wider text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp Enquiry</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookRoom(room);
                }}
                className="w-full sm:w-auto px-7 py-2.5 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.18em] text-xs font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)] cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#07080a]" />
                <span>Book This Room</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
