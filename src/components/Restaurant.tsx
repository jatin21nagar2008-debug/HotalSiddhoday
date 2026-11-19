import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { Sparkles, Utensils, Clock, Flame, Leaf, Wine, CalendarCheck, PhoneCall } from 'lucide-react';
import { TableBookingModal } from './TableBookingModal';

export const Restaurant: React.FC = () => {
  const [isTableModalOpen, setIsTableModalOpen] = useState(false);

  return (
    <section id="restaurant" className="relative py-20 sm:py-28 bg-[#081820] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#0d222e] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            Fine Rooftop Dining
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Aaura <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Restaurant & Grill</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            {HOTEL_CONFIG.restaurant.description}
          </motion.p>
        </div>

        {/* Feature Banner: Rooftop Ambiance + Pure Veg & Jain Commitment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Main Visual with overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] aspect-[16/10] group"
          >
            <img
              src={HOTEL_CONFIG.restaurant.heroImage}
              alt="Aaura Rooftop Dining"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081820]/85 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <span className="font-serif text-xs uppercase tracking-[0.2em] text-[#d4af37] block mb-1">
                Rooftop Ambiance • Open Sky Vistas
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#faf8f5] font-light">
                Dine Under the Stars of Harda
              </h3>
            </div>
          </motion.div>

          {/* Right Feature Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >
            {/* Jain & Pure Veg Badge Box */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-[#0d222e] to-[#0a1922] border border-[#d4af37]/40 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4af37]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-2.5 mb-3">
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="font-serif text-sm uppercase tracking-widest text-[#d4af37] font-semibold">
                  Pure Veg & Jain Special Menu
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#c8bead] leading-relaxed font-light mb-4">
                We take immense pride in serving dedicated <strong className="text-[#faf8f5]">100% Pure Vegetarian</strong> cuisine, along with a specialized <strong className="text-[#faf8f5]">Jain Menu</strong> prepared strictly without onion, garlic, or underground roots upon request, ensuring utmost spiritual purity and taste.
              </p>

              <div className="flex flex-wrap gap-2">
                <span className="text-[10px] tracking-wider uppercase bg-[#123342] text-[#eadaad] px-2.5 py-1 rounded border border-white/5">
                  ✓ Separate Jain Preparation
                </span>
                <span className="text-[10px] tracking-wider uppercase bg-[#123342] text-[#eadaad] px-2.5 py-1 rounded border border-white/5">
                  ✓ Clay Oven Tandoor
                </span>
                <span className="text-[10px] tracking-wider uppercase bg-[#123342] text-[#eadaad] px-2.5 py-1 rounded border border-white/5">
                  ✓ Farm Fresh Produce
                </span>
              </div>
            </div>

            {/* Operating Times & Services */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#0d222e] border border-white/[0.06]">
                <Clock className="w-4 h-4 text-[#d4af37] mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block">Operating Hours</span>
                <span className="text-xs font-semibold text-[#faf8f5]">{HOTEL_CONFIG.restaurant.timings}</span>
              </div>

              <div className="p-4 rounded-lg bg-[#0d222e] border border-white/[0.06]">
                <Flame className="w-4 h-4 text-[#d4af37] mb-2" />
                <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block">Signature Style</span>
                <span className="text-xs font-semibold text-[#faf8f5]">Sizzlers & Live Grills</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => setIsTableModalOpen(true)}
                className="flex-1 py-3.5 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.18em] text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-[#07080a]" />
                <span>Reserve a Rooftop Table</span>
              </button>

              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                className="py-3.5 px-5 rounded border border-[#d4af37]/40 text-xs font-serif uppercase tracking-wider text-[#d4af37] hover:bg-[#d4af37]/10 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Curated Rooftop Atmosphere & Spaces */}
        <div className="mt-14">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light">
              Rooftop Spaces & Dining Atmosphere
            </h3>
            <p className="text-xs text-[#c5a059] tracking-widest uppercase mt-1">
              Private Cabanas • Open Sun Deck • Gazebo Dining • Starlit Nights
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOTEL_CONFIG.restaurant.foodImages.map((dish, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="group relative rounded-xl overflow-hidden bg-[#0d222e] border border-white/[0.08] hover:border-[#d4af37]/40 transition-all duration-300 shadow-lg flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#07151c]/80 to-transparent" />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <h4 className="font-serif text-base text-[#faf8f5] group-hover:text-[#d4af37] transition-colors font-medium">
                    {dish.title}
                  </h4>
                  <p className="text-xs text-[#c8bead] mt-1 font-light line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Table Booking Modal */}
      <TableBookingModal
        isOpen={isTableModalOpen}
        onClose={() => setIsTableModalOpen(false)}
      />
    </section>
  );
};
