import React from 'react';
import { motion } from 'framer-motion';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { ShieldCheck, MapPin, Sparkles, UtensilsCrossed, Building2, BedDouble } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-[#081820] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header Tag */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#0d2733] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            About The Palace
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-5"
          >
            A Sanctuary of Grandeur & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Royal Warmth</span> in Harda
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto"
          />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column: Palatial Narrative & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="font-serif uppercase tracking-[0.25em] text-xs text-[#c5a059] font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#d4af37]" /> NH-59A Indore Road, Harda
            </span>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light leading-snug mb-6">
              Where Highway Convenience Meets Royal Hospitality
            </h3>

            <p className="text-sm sm:text-base text-[#c8bead] leading-relaxed mb-6 font-light">
              Situated prominently on <strong className="text-[#faf8f5] font-medium">NH-59A (Indore Road)</strong> directly in front of Khatri Marriage Garden, <strong className="text-[#d4af37] font-medium">Hotel Siddhoday Palace</strong> stands as Harda's premier hospitality benchmark. Crafted to serve business executives, highway wayfarers, and celebratory families alike, the property pairs palatial charm with modern tranquility.
            </p>

            <p className="text-sm text-[#c8bead] leading-relaxed mb-8 font-light">
              From our thoughtfully appointed 28 guest rooms across four distinct categories to the celebrated panoramic views and pure vegetarian and authentic Jain delicacies at <strong className="text-[#faf8f5] font-medium">Aaura Restaurant and Grill</strong>, every detail is engineered for memorable comfort.
            </p>

            {/* Core Feature List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.08]">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#13161d] border border-[#d4af37]/30 text-[#d4af37] mt-0.5">
                  <BedDouble className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#faf8f5]">Spacious Accommodations</h4>
                  <p className="text-xs text-[#8c7355] mt-0.5">Soundproofed rooms with custom bedding & climate control.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#13161d] border border-[#d4af37]/30 text-[#d4af37] mt-0.5">
                  <UtensilsCrossed className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#faf8f5]">Aaura Rooftop Dining</h4>
                  <p className="text-xs text-[#8c7355] mt-0.5">Sizzlers, tandoori grills, pure Veg & Jain specialty cuisine.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#13161d] border border-[#d4af37]/30 text-[#d4af37] mt-0.5">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#faf8f5]">Banquets & Event Lawn</h4>
                  <p className="text-xs text-[#8c7355] mt-0.5">Tailored venues for royal weddings and corporate seminars.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#13161d] border border-[#d4af37]/30 text-[#d4af37] mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#faf8f5]">Complete Peace of Mind</h4>
                  <p className="text-xs text-[#8c7355] mt-0.5">100% power backup, on-site parking & 24-hr security.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Hotel Photography Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            {/* Primary Main Image (Grand Architecture) */}
            <div className="relative rounded-lg overflow-hidden border border-[#d4af37]/35 shadow-[0_20px_50px_rgba(2,8,12,0.9)] aspect-[4/3] group bg-[#0d2733]">
              <img
                src="./hotel-exterior.jpg"
                alt="Hotel Siddhoday Palace Facade"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081820]/85 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5">
                <span className="font-serif text-xs uppercase tracking-widest text-[#d4af37] block">
                  NH-59A Indore Road, Harda
                </span>
                <p className="font-serif text-lg text-[#faf8f5] font-light">
                  Grand Architecture & Tranquil Stay Experience
                </p>
              </div>
            </div>

            {/* Overlapping Secondary Image (Verified Reception & Lounge) */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-64 rounded-lg overflow-hidden border-2 border-[#d4af37]/60 shadow-[0_15px_35px_rgba(0,0,0,0.9)] aspect-[4/3] bg-[#0d2733] group">
              <img
                src="./images/hotel-lobby-lounge.jpg"
                alt="Hotel Siddhoday Palace Reception Lounge"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#081820]/80 to-transparent flex items-end p-3">
                <span className="text-[10px] uppercase tracking-wider text-[#eadaad] font-semibold">
                  Reception & Guest Lounge
                </span>
              </div>
            </div>

            {/* Ornamental Frame Border */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border-t-2 border-r-2 border-[#d4af37]/40 pointer-events-none -z-10" />
          </motion.div>
        </div>

        {/* Verified Property Statistics Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-[#d4af37]/20"
        >
          {HOTEL_CONFIG.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-lg bg-gradient-to-b from-[#123342]/80 to-[#0d2733]/80 border border-white/[0.06] hover:border-[#d4af37]/40 transition-all duration-300 text-center group"
            >
              <div className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-[#fbf8f0] via-[#d4af37] to-[#c5a059] mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#c8bead] font-medium">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-[#d4af37]/30 group-hover:w-20 group-hover:bg-[#d4af37] transition-all duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
