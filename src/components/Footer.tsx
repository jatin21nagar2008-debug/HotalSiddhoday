import React from 'react';
import { RoyalLogo } from './RoyalLogo';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { MapPin, Phone, Mail, Clock, ArrowUp, MessageSquare, Globe, Share2 } from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040b0e] text-[#faf8f5] border-t border-[#d4af37]/25 pt-16 sm:pt-20 pb-10 overflow-hidden">
      {/* Decorative top gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <RoyalLogo size="md" />
            <p className="font-serif italic text-xs sm:text-sm text-[#c5a059]">
              "{HOTEL_CONFIG.tagline}"
            </p>
            <p className="text-xs text-[#c8bead] leading-relaxed font-light">
              Harda's foremost luxury property on NH-59A, Indore Road. Offering 28 tranquil rooms & suites, rooftop dining at Aaura Restaurant & Grill, and grand event banquets.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => openWhatsAppGeneral('General Concierge Support')}
                className="p-2.5 rounded-full border border-[#d4af37]/40 bg-[#0a1922] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#081820] transition-all cursor-pointer shadow-md"
                title="WhatsApp Concierge"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                className="p-2.5 rounded-full border border-white/20 bg-[#0a1922] text-[#faf8f5] hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                title="Call Front Desk"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={HOTEL_CONFIG.contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-white/20 bg-[#0a1922] text-[#faf8f5] hover:text-[#d4af37] hover:border-[#d4af37] transition-all"
                title="Google Maps Location"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#c8bead]">
              <li><a href="#home" className="hover:text-[#d4af37] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#d4af37] transition-colors">About Property</a></li>
              <li><a href="#rooms" className="hover:text-[#d4af37] transition-colors">Rooms & Suites</a></li>
              <li><a href="#restaurant" className="hover:text-[#d4af37] transition-colors">Aaura Dining</a></li>
              <li><a href="#banquets" className="hover:text-[#d4af37] transition-colors">Banquets & Lawn</a></li>
              <li><a href="#gallery" className="hover:text-[#d4af37] transition-colors">Hotel Gallery</a></li>
              <li><a href="#amenities" className="hover:text-[#d4af37] transition-colors">Amenities</a></li>
              <li><a href="#booking" className="hover:text-[#d4af37] transition-colors">Book Your Stay</a></li>
            </ul>
          </div>

          {/* Room Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Room Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-[#c8bead]">
              {HOTEL_CONFIG.rooms.map((room) => (
                <li key={room.id}>
                  <a href="#rooms" className="hover:text-[#d4af37] transition-colors flex items-center justify-between">
                    <span>{room.name}</span>
                    <span className="text-[10px] text-[#8c7355]">{room.size}</span>
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/[0.04]">
                <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block">Dining:</span>
                <a href="#restaurant" className="text-xs text-[#faf8f5] hover:text-[#d4af37] transition-colors">
                  Aaura Restaurant & Grill (Pure Veg & Jain)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Contact & Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#c8bead]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>{HOTEL_CONFIG.contact.address.full}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <a href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`} className="hover:text-[#d4af37]">
                  {HOTEL_CONFIG.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span>Front Desk: {HOTEL_CONFIG.contact.timings.frontDesk}</span>
              </div>
              <div className="text-[11px] text-[#8c7355] pt-1">
                Check-in: {HOTEL_CONFIG.contact.timings.checkIn} | Check-out: {HOTEL_CONFIG.contact.timings.checkOut}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8c7355]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {HOTEL_CONFIG.name}, Harda. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] text-[#c8bead]">Luxury Hospitality on NH-59A, Indore Road</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-white/10 hover:border-[#d4af37] text-[#c8bead] hover:text-[#d4af37] transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 text-[11px]"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
