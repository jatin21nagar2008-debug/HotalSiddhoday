import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronDown, Compass, Sparkles, MapPin } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';

interface HeroProps {
  onBookClick: () => void;
  onExploreRoomsClick: () => void;
  onQuickBookCheck: (params: { checkIn: string; checkOut: string; guests: string; category: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onBookClick, 
  onExploreRoomsClick,
  onQuickBookCheck
}) => {
  const [quickCheckIn, setQuickCheckIn] = React.useState('');
  const [quickCheckOut, setQuickCheckOut] = React.useState('');
  const [quickGuests, setQuickGuests] = React.useState('2 Adults');
  const [quickCategory, setQuickCategory] = React.useState('Super Deluxe Room');

  // Set default dates (today & tomorrow)
  React.useEffect(() => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const format = (d: Date) => d.toISOString().split('T')[0];
    setQuickCheckIn(format(today));
    setQuickCheckOut(format(tomorrow));
  }, []);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onQuickBookCheck({
      checkIn: quickCheckIn,
      checkOut: quickCheckOut,
      guests: quickGuests,
      category: quickCategory
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pb-16 overflow-hidden">
      {/* Background Image with Cinematic Ken Burns Zoom & Subtle Parallax */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 16, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85')`,
            backgroundPosition: 'center 40%'
          }}
        />
        {/* Crisp Luxury Gradient Overlays - Clean, bright, and legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081820] via-[#081820]/35 to-[#081820]/45" />
      </div>

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        {/* Location & Heritage Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/50 bg-[#0d222e] mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="font-sans text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#f7f0df] font-medium">
            NH-59A Indore Road • Harda, MP
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
        </motion.div>

        {/* Hotel Name Typography */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mb-4"
        >
          <span className="font-serif uppercase tracking-[0.35em] text-xs sm:text-sm text-[#c5a059] block mb-2 font-semibold">
            Welcome To
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] text-[#faf8f5] leading-[1.15]">
            Hotel <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#fbf8f0] via-[#d4af37] to-[#c5a059]">Siddhoday Palace</span>
          </h1>
        </motion.div>

        {/* Animated Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="max-w-3xl mx-auto mb-10"
        >
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#eadaad] mb-3">
            "{HOTEL_CONFIG.tagline}"
          </p>
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#c8bead] tracking-wide leading-relaxed font-light">
            {HOTEL_CONFIG.subtitle}
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-12"
        >
          {/* Primary CTA: Book Your Stay */}
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm border border-[#d4af37] bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#d4af37] text-[#081820] font-serif uppercase tracking-[0.2em] text-xs font-bold shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.7)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4 text-[#081820]" />
            <span>Book Your Stay</span>
          </button>

          {/* Secondary CTA: Explore Rooms */}
          <button
            onClick={onExploreRoomsClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-sm border border-[#d4af37]/60 bg-[#0d222e] hover:bg-[#123342] text-[#faf8f5] hover:text-[#d4af37] font-serif uppercase tracking-[0.2em] text-xs font-semibold transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group shadow-lg"
          >
            <Compass className="w-4 h-4 text-[#d4af37] group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore Rooms & Suites</span>
          </button>
        </motion.div>
      </div>

      {/* Quick Booking Strip (Bottom of Hero) - Solid Sharp Luxury Card Without Blur */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.95 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full"
      >
        <div className="rounded-lg p-4 sm:p-5 bg-[#0d222e] border border-[#d4af37]/50 shadow-[0_20px_50px_rgba(2,8,12,0.95)]">
          <form onSubmit={handleQuickSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 items-end">
            {/* Check-in */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#d4af37]" /> Check-In
              </label>
              <input
                type="date"
                value={quickCheckIn}
                onChange={(e) => setQuickCheckIn(e.target.value)}
                className="w-full bg-[#07151c] border border-white/15 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                required
              />
            </div>

            {/* Check-out */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium mb-1.5 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-[#d4af37]" /> Check-Out
              </label>
              <input
                type="date"
                value={quickCheckOut}
                onChange={(e) => setQuickCheckOut(e.target.value)}
                className="w-full bg-[#07151c] border border-white/15 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
                required
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium mb-1.5">
                Guests
              </label>
              <select
                value={quickGuests}
                onChange={(e) => setQuickGuests(e.target.value)}
                className="w-full bg-[#123342] border border-white/10 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults">2 Adults</option>
                <option value="2 Adults + 1 Child">2 Adults + 1 Child</option>
                <option value="3 Adults">3 Adults</option>
                <option value="4 Guests (Family)">4 Guests (Family)</option>
              </select>
            </div>

            {/* Room Category */}
            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium mb-1.5">
                Room Category
              </label>
              <select
                value={quickCategory}
                onChange={(e) => setQuickCategory(e.target.value)}
                className="w-full bg-[#123342] border border-white/10 rounded px-3 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37] transition-colors"
              >
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Super Deluxe Room">Super Deluxe Room</option>
                <option value="Premium Room">Premium Room</option>
                <option value="Suite Room">Suite Room</option>
              </select>
            </div>

            {/* Check Button */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.16em] text-xs font-bold hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.3)]"
              >
                Check & Book
              </button>
            </div>
          </form>
        </div>

        {/* Elegant Scroll Indicator */}
        <div className="flex flex-col items-center justify-center mt-6">
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-[10px] uppercase tracking-[0.3em] text-[#8c7355] hover:text-[#d4af37] transition-colors"
          >
            <span>Discover The Property</span>
            <ChevronDown className="w-4 h-4 text-[#d4af37] animate-bounce" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
