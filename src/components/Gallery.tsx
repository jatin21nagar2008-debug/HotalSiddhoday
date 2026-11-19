import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: 'all', label: 'All Photographs' },
    { id: 'exterior', label: 'Exterior' },
    { id: 'rooms', label: 'Rooms & Suites' },
    { id: 'restaurant', label: 'Aaura Dining & Food' },
    { id: 'banquets', label: 'Banquets & Event Lawn' },
  ];

  const filteredItems = activeCategory === 'all'
    ? HOTEL_CONFIG.gallery
    : HOTEL_CONFIG.gallery.filter(item => item.category === activeCategory);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -380, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 380, behavior: 'smooth' });
    }
  };

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handleNext, handlePrev]);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-[#081820] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#0d222e] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            Visual Splendor
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Palatial <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Gallery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            Explore authentic property photographs, luxury suite interiors, Aaura rooftop culinary spaces, and celebratory banquet venues.
          </motion.p>
        </div>

        {/* Filter Tabs & Scroll Controls Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setLightboxIndex(null);
                  if (scrollContainerRef.current) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                  }
                }}
                className={`px-4 py-2 rounded-full text-xs font-serif tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#d4af37] text-[#081820] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-[#0d222e] text-[#faf8f5]/80 hover:text-[#d4af37] border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Slider Prev / Next Arrow Controls */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] uppercase tracking-wider text-[#c5a059] font-medium mr-1">
              Scroll Gallery
            </span>
            <button
              onClick={scrollLeft}
              aria-label="Scroll Left"
              className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#0d222e] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#081820] transition-all cursor-pointer shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll Right"
              className="w-10 h-10 rounded-full border border-[#d4af37]/40 bg-[#0d222e] text-[#d4af37] flex items-center justify-center hover:bg-[#d4af37] hover:text-[#081820] transition-all cursor-pointer shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Reel */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x pb-6 pt-2 select-none"
          style={{ scrollbarWidth: 'thin' }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] w-[300px] sm:w-[380px] shrink-0 snap-start bg-[#0d222e] border border-white/[0.08] hover:border-[#d4af37]/70 cursor-pointer shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Category Pill Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 rounded-full bg-[#081820]/90 border border-[#d4af37]/40 text-[9px] uppercase tracking-wider text-[#d4af37] font-medium shadow-md">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Lightbox Trigger Icon */}
              <div className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#081820]/90 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Bottom Information Card */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#081820] via-[#081820]/75 to-transparent flex flex-col justify-end p-4">
                <h4 className="font-serif text-base text-[#faf8f5] font-light">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#c8bead] mt-0.5 line-clamp-1 font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator Subtitle */}
        <div className="text-center mt-3">
          <p className="text-[11px] uppercase tracking-widest text-[#8c7355]">
            ← Drag or Click Arrows to View All Gallery Photos →
          </p>
        </div>
      </div>

      {/* Full-Screen Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && filteredItems[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#051016]/98 flex flex-col justify-between p-4 sm:p-8"
          >
            {/* Top Bar with counter & close */}
            <div className="flex items-center justify-between z-10">
              <span className="text-xs uppercase tracking-[0.2em] text-[#d4af37] font-semibold">
                Photo {lightboxIndex + 1} of {filteredItems.length} • {filteredItems[lightboxIndex].categoryLabel}
              </span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-2.5 rounded-full bg-white/10 hover:bg-[#d4af37] text-[#faf8f5] hover:text-[#07080a] transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Central Image with Prev / Next */}
            <div className="relative flex-1 flex items-center justify-center my-auto px-4 sm:px-12">
              {/* Prev Button */}
              <button
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-[#07151c] border border-white/20 text-[#faf8f5] hover:text-[#d4af37] hover:border-[#d4af37] transition-colors focus:outline-none cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Lightbox Image */}
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="max-w-5xl max-h-[75vh] rounded-lg overflow-hidden border border-[#d4af37]/30 shadow-2xl"
              >
                <img
                  src={filteredItems[lightboxIndex].image}
                  alt={filteredItems[lightboxIndex].title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </motion.div>

              {/* Next Button */}
              <button
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
                className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-[#07151c] border border-white/20 text-[#faf8f5] hover:text-[#d4af37] hover:border-[#d4af37] transition-colors focus:outline-none cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption */}
            <div className="text-center z-10 max-w-xl mx-auto">
              <h3 className="font-serif text-lg sm:text-xl text-[#faf8f5] font-light">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs text-[#c8bead] mt-1 font-light">
                {filteredItems[lightboxIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
