import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTEL_CONFIG, ReviewItem } from '../config/hotelConfig';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles, MapPin } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = HOTEL_CONFIG.testimonials;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Auto-advance every 7 seconds
  useEffect(() => {
    const timer = setInterval(nextReview, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = reviews[currentIndex];

  return (
    <section className="relative py-20 sm:py-28 bg-[#0a1f28] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Guest Experiences
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Words of <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Appreciation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-xl mx-auto"
          >
            Authentic reflections from business professionals, visiting families, and wedding celebrants who experienced Hotel Siddhoday Palace.
          </motion.p>
        </div>

        {/* Carousel Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0d222e] to-[#0a1922] border border-[#d4af37]/30 p-8 sm:p-12 shadow-[0_20px_50px_rgba(2,8,12,0.9)]">
          <Quote className="w-12 h-12 text-[#d4af37]/20 absolute top-8 right-8 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              {/* Star Rating */}
              <div className="flex gap-1 text-[#d4af37]">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Highlight Quote Title */}
              <h3 className="font-serif italic text-lg sm:text-2xl text-[#f7f0df] max-w-2xl font-light">
                "{current.highlight}"
              </h3>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-[#c8bead] leading-relaxed max-w-2xl font-light">
                {current.review}
              </p>

              {/* Guest Meta */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col items-center">
                <span className="font-serif text-base font-semibold text-[#faf8f5]">
                  {current.guestName}
                </span>
                <div className="flex items-center gap-2 text-xs text-[#c5a059] mt-0.5">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#d4af37]" /> {current.city}
                  </span>
                  <span>•</span>
                  <span>{current.stayType}</span>
                  <span>•</span>
                  <span className="text-[#8c7355]">{current.date}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls: Prev / Next buttons */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
            <button
              onClick={prevReview}
              className="p-2.5 rounded-full border border-white/10 hover:border-[#d4af37] text-[#faf8f5] hover:text-[#d4af37] transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === i ? 'w-8 bg-[#d4af37]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextReview}
              className="p-2.5 rounded-full border border-white/10 hover:border-[#d4af37] text-[#faf8f5] hover:text-[#d4af37] transition-colors focus:outline-none cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
