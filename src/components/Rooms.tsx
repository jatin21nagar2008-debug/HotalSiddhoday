import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOTEL_CONFIG, RoomData } from '../config/hotelConfig';
import { Bed, Users, Maximize2, ArrowRight, Sparkles } from 'lucide-react';
import { RoomModal } from './RoomModal';

interface RoomsProps {
  onSelectRoomForBooking: (room: RoomData) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onSelectRoomForBooking }) => {
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredRooms = filterCategory === 'all'
    ? HOTEL_CONFIG.rooms
    : HOTEL_CONFIG.rooms.filter(r => r.category.toLowerCase() === filterCategory.toLowerCase());

  return (
    <section id="rooms" className="relative py-20 sm:py-28 bg-[#0a1f28] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/30 bg-[#123342] text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#c5a059] mb-4"
          >
            <Sparkles className="w-3 h-3 text-[#d4af37]" />
            Accommodations
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Distinctive <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Rooms & Suites</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            Each of our 28 rooms across 4 bespoke categories is tailored to ensure restful silence, regal refinement, and modern hospitality.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          <button
            onClick={() => setFilterCategory('all')}
            className={`px-4 py-1.5 rounded-full text-xs font-serif tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-[#d4af37] text-[#07080a] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                : 'bg-[#13161d] text-[#faf8f5]/80 hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37]/40'
            }`}
          >
            All Accommodations ({HOTEL_CONFIG.rooms.length})
          </button>
          {HOTEL_CONFIG.rooms.map((room) => (
            <button
              key={room.id}
              onClick={() => setFilterCategory(room.category)}
              className={`px-4 py-1.5 rounded-full text-xs font-serif tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer ${
                filterCategory.toLowerCase() === room.category.toLowerCase()
                  ? 'bg-[#d4af37] text-[#07080a] font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                  : 'bg-[#13161d] text-[#faf8f5]/80 hover:text-[#d4af37] border border-white/10 hover:border-[#d4af37]/40'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Rooms Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredRooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-b from-[#0d222e] to-[#07151c] border border-white/[0.08] hover:border-[#d4af37]/50 transition-all duration-500 shadow-[0_15px_40px_rgba(2,8,12,0.9)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.2)] flex flex-col"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={room.featuredImage}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#07151c]/80 to-transparent" />

                {/* Category Badge - Solid Sharp, No Blur */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full border border-[#d4af37]/50 bg-[#081820] text-[10px] uppercase tracking-[0.2em] text-[#d4af37] font-semibold shadow-md">
                    {room.category}
                  </span>
                </div>

                {/* Popular Pill if applicable */}
                {room.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-[#d4af37] text-[#081820] text-[10px] uppercase tracking-wider font-bold shadow-md">
                      Recommended
                    </span>
                  </div>
                )}

                {/* Central Price Badge */}
                <div className="absolute bottom-4 right-4 z-10 text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#c8bead] block">Starting Tariff</span>
                  <span className="font-serif text-xl sm:text-2xl font-light text-[#faf8f5]">
                    {room.startingPrice} <span className="text-xs text-[#d4af37] font-sans font-normal">/ night</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] group-hover:text-[#d4af37] transition-colors duration-300 font-light">
                      {room.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#c8bead] leading-relaxed mb-6 font-light line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Meta Specs */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-lg bg-[#07151c] border border-white/[0.04] mb-2">
                    <div className="flex items-center gap-2">
                      <Maximize2 className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="text-xs text-[#faf8f5]">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="text-xs text-[#faf8f5]">{room.occupancy}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="text-xs text-[#faf8f5] truncate">{room.bedType}</span>
                    </div>
                  </div>
                </div>

                {/* Actions Bar */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedRoom(room)}
                    className="text-xs uppercase tracking-[0.2em] font-serif font-semibold text-[#faf8f5] hover:text-[#d4af37] transition-colors py-2 flex items-center gap-1.5 group/btn cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#d4af37] group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onSelectRoomForBooking(room)}
                    className="px-5 py-2.5 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37]/20 to-[#c5a059]/20 hover:from-[#d4af37] hover:to-[#c5a059] hover:text-[#07080a] text-xs font-serif uppercase tracking-[0.16em] font-bold text-[#faf8f5] transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] cursor-pointer"
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <RoomModal
        room={selectedRoom}
        onClose={() => setSelectedRoom(null)}
        onBookRoom={(room) => {
          setSelectedRoom(null);
          onSelectRoomForBooking(room);
        }}
      />
    </section>
  );
};
