import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { Sparkles, Users, Check, Calendar, Phone, Send, CheckCircle, PartyPopper } from 'lucide-react';
import { openWhatsAppEventEnquiry, EventEnquiryPayload } from '../utils/whatsapp';

export const Banquets: React.FC = () => {
  const [activeVenue, setActiveVenue] = useState(HOTEL_CONFIG.banquets[0].id);
  const [formData, setFormData] = useState<EventEnquiryPayload>({
    name: '',
    phone: '',
    eventType: 'Wedding Function & Reception',
    date: '',
    guests: '150 - 300 Guests',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppEventEnquiry(formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  const currentVenue = HOTEL_CONFIG.banquets.find(v => v.id === activeVenue) || HOTEL_CONFIG.banquets[0];

  return (
    <section id="banquets" className="relative py-20 sm:py-28 bg-[#0a1f28] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
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
            Grand Celebrations & Summits
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Banquets, Lawns & <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Event Venues</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            From fairytale wedding pheras and lavish sangeet galas to distinguished corporate summits, Hotel Siddhoday Palace offers the premier event spaces in Harda.
          </motion.p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {HOTEL_CONFIG.banquets.map((venue) => (
            <button
              key={venue.id}
              onClick={() => setActiveVenue(venue.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-serif tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer ${
                activeVenue === venue.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#081820] font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#0d222e] text-[#faf8f5]/80 hover:text-[#d4af37] border border-white/10'
              }`}
            >
              {venue.title}
            </button>
          ))}
        </div>

        {/* Active Venue Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center mb-20 p-6 sm:p-8 rounded-2xl bg-[#0d222e] border border-[#d4af37]/35 shadow-xl">
          {/* Venue Image */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden aspect-[16/10] border border-[#d4af37]/30 shadow-xl relative group">
            <img
              src={currentVenue.image}
              alt={currentVenue.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#081820]/80 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-serif text-xs uppercase tracking-widest text-[#d4af37]">
                Capacity: {currentVenue.capacity}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#faf8f5] font-light">
                {currentVenue.title}
              </h3>
            </div>
          </div>

          {/* Venue Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              <span className="font-serif italic text-sm text-[#c5a059] block mb-2">
                "{currentVenue.tagline}"
              </span>
              <p className="text-xs sm:text-sm text-[#c8bead] leading-relaxed font-light mb-5">
                {currentVenue.description}
              </p>

              {/* Ideal For Tags */}
              <div className="mb-5">
                <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block mb-2">Ideal For</span>
                <div className="flex flex-wrap gap-2">
                  {currentVenue.idealFor.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-[#07151c] text-[11px] text-[#faf8f5] border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block mb-2">Venue Inclusions</span>
                <ul className="space-y-2">
                  {currentVenue.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-[#faf8f5]/90">
                      <Check className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08]">
              <a
                href="#event-enquiry"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded border border-[#d4af37] bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#07080a] text-xs font-serif uppercase tracking-[0.18em] font-semibold transition-all duration-300"
              >
                <PartyPopper className="w-4 h-4" />
                <span>Enquire For This Venue</span>
              </a>
            </div>
          </div>
        </div>

        {/* Dedicated Event Enquiry Form */}
        <div id="event-enquiry" className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-b from-[#0d222e] to-[#081820] border border-[#d4af37]/40 p-6 sm:p-10 shadow-[0_20px_50px_rgba(2,8,12,0.9)]">
          <div className="text-center mb-8">
            <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-1">
              Event Concierge
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light">
              Plan Your Royal Event at Siddhoday Palace
            </h3>
            <p className="text-xs text-[#c8bead] mt-1 max-w-lg mx-auto">
              Share your celebration details below. Our events manager will connect directly to provide venue availability and personalized packages.
            </p>
          </div>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                <CheckCircle className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-xl text-[#faf8f5]">Event Request Dispatched via WhatsApp</h4>
              <p className="text-xs text-[#c8bead] max-w-sm mx-auto">
                Thank you, {formData.name}. Our event coordination team has received your details and will assist you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Customer / Host Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Solanki"
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 97702 33417"
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="Wedding Functions & Reception">Wedding Functions & Reception</option>
                    <option value="Sangeet & Ring Ceremony">Sangeet & Ring Ceremony</option>
                    <option value="Birthday Celebrations">Birthday Celebrations</option>
                    <option value="Corporate Events & Seminars">Corporate Events & Seminars</option>
                    <option value="Business Meetings & Conferences">Business Meetings & Conferences</option>
                    <option value="Community / Family Gathering">Community / Family Gathering</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Tentative Event Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                    Number of Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded px-3 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="50 - 100 Guests">50 - 100 Guests</option>
                    <option value="100 - 250 Guests">100 - 250 Guests</option>
                    <option value="250 - 500 Guests">250 - 500 Guests</option>
                    <option value="500 - 800+ Guests">500 - 800+ Guests (Grand Lawn)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1">
                  Message & Specific Catering Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention any specific requirements, such as mandap decor, sound system, Pure Veg / Jain catering, or room blocks needed..."
                  className="w-full bg-[#07151c] border border-white/10 rounded px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-[#8c7355]">
                  * Direct transmission to Front Desk Event Desk (+91 97702 33417)
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.2em] text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#07080a]" />
                  <span>Submit Event Enquiry via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
