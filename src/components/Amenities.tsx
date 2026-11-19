import React from 'react';
import { motion } from 'framer-motion';
import { HOTEL_CONFIG, AmenityItem } from '../config/hotelConfig';
import { 
  Wifi, 
  Wind, 
  Car, 
  Bell, 
  Utensils, 
  ArrowUpDown, 
  Zap, 
  Shirt, 
  Gamepad2, 
  Briefcase,
  Sparkles
} from 'lucide-react';

export const Amenities: React.FC = () => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#d4af37] transition-transform duration-300 group-hover:scale-110" };
    switch (iconName) {
      case 'Wifi': return <Wifi {...props} />;
      case 'Wind': return <Wind {...props} />;
      case 'Car': return <Car {...props} />;
      case 'Bell': return <Bell {...props} />;
      case 'Utensils': return <Utensils {...props} />;
      case 'ArrowUpDown': return <ArrowUpDown {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'Shirt': return <Shirt {...props} />;
      case 'Gamepad2': return <Gamepad2 {...props} />;
      case 'Briefcase': return <Briefcase {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="amenities" className="relative py-20 sm:py-28 bg-[#0a1f28] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
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
            Signature Comforts
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Amenities & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">World-Class Facilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            Designed for uncompromised guest well-being, seamless corporate connectivity, and royal leisure throughout your stay in Harda.
          </motion.p>
        </div>

        {/* 10 Verified Facilities Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {HOTEL_CONFIG.amenities.map((item: AmenityItem, index: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative p-6 rounded-xl bg-gradient-to-b from-[#0d222e] to-[#07151c] border border-white/[0.06] hover:border-[#d4af37]/50 transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(212,175,55,0.18)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[#07151c] border border-[#d4af37]/30 flex items-center justify-center group-hover:border-[#d4af37] transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  {item.badge && (
                    <span className="text-[9px] uppercase tracking-wider text-[#c5a059] bg-[#07151c] border border-white/10 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-base sm:text-lg text-[#faf8f5] group-hover:text-[#d4af37] transition-colors font-medium mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-[#c8bead] leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative gold accent line */}
              <div className="mt-5 pt-3 border-t border-white/[0.04]">
                <span className="text-[10px] uppercase tracking-widest text-[#8c7355] group-hover:text-[#d4af37] transition-colors">
                  Hotel Siddhoday Palace
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
