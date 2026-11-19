import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  Send, 
  CheckCircle, 
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { openWhatsAppGeneral } from '../utils/whatsapp';

export const LocationContact: React.FC = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Property Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsAppGeneral(`Contact Enquiry from ${contactForm.name} (${contactForm.phone}): ${contactForm.message || contactForm.subject}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({
        name: '',
        phone: '',
        email: '',
        subject: 'General Property Inquiry',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#081820] text-[#faf8f5] overflow-hidden border-t border-[#d4af37]/15">
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
            Location & Concierge
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-5xl font-light tracking-wide text-[#faf8f5] leading-tight mb-4"
          >
            Connect with <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#f7f0df] via-[#d4af37] to-[#c5a059]">Siddhoday Palace</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm text-[#c8bead] font-light max-w-2xl mx-auto"
          >
            Located conveniently on NH-59A, Indore Road, Harda. Reach out to our 24/7 front desk team for room bookings, event reservations, or route guidance.
          </motion.p>
        </div>

        {/* 2-Column: Left info cards & Map; Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Property Coordinates & Direct Contacts */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address & Quick Actions Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0a1922] border border-[#d4af37]/35 shadow-xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-[#0d222e] border border-[#d4af37]/30 text-[#d4af37] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#c5a059] font-medium block mb-1">
                    Hotel Address
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl text-[#faf8f5] font-light">
                    {HOTEL_CONFIG.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#c8bead] mt-1 leading-relaxed font-light">
                    {HOTEL_CONFIG.contact.address.full}
                  </p>
                </div>
              </div>

              {/* Contact numbers & hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.06]">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block mb-1">
                    Phone Inquiries
                  </span>
                  <a
                    href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                    className="text-sm font-semibold text-[#faf8f5] hover:text-[#d4af37] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{HOTEL_CONFIG.contact.primaryPhone}</span>
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8c7355] block mb-1">
                    Front Desk Timings
                  </span>
                  <div className="text-xs text-[#faf8f5] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{HOTEL_CONFIG.contact.timings.frontDesk}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Directions, Call, WhatsApp */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={HOTEL_CONFIG.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] py-2.5 px-4 rounded border border-[#d4af37] bg-[#d4af37]/20 hover:bg-[#d4af37] text-[#d4af37] hover:text-[#07080a] text-xs font-serif uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                  className="flex-1 min-w-[140px] py-2.5 px-4 rounded border border-white/20 bg-[#0d222e] hover:border-[#d4af37] text-xs font-serif uppercase tracking-wider text-[#faf8f5] hover:text-[#d4af37] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Click to Call</span>
                </a>

                <button
                  onClick={() => openWhatsAppGeneral('Hotel Reservation and Location inquiry')}
                  className="w-full py-2.5 px-4 rounded border border-emerald-500/50 bg-emerald-950/40 hover:bg-emerald-600 hover:text-white text-emerald-400 text-xs font-serif uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl aspect-[16/9] relative">
              <iframe
                title="Hotel Siddhoday Palace Location Map"
                src={HOTEL_CONFIG.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(110%)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 rounded-2xl bg-gradient-to-b from-[#0d222e] to-[#0a1922] border border-[#d4af37]/40 p-6 sm:p-8 shadow-xl">
            <div className="mb-6">
              <span className="font-serif text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block mb-1">
                Direct Message
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#faf8f5] font-light">
                Send Us a Message
              </h3>
              <p className="text-xs text-[#c8bead] mt-1 font-light">
                Have a question regarding corporate stays, room block bookings, or wedding dates? Send a message and our reservations desk will assist you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37]">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <h4 className="font-serif text-xl text-[#faf8f5]">Message Sent via WhatsApp</h4>
                <p className="text-xs text-[#c8bead] max-w-sm mx-auto">
                  Thank you! Your message has been prepared for Hotel Siddhoday Palace front desk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priyanshu Dubey"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 97702 33417"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Inquiry Subject
                  </label>
                  <select
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  >
                    <option value="General Property Inquiry">General Property Inquiry</option>
                    <option value="Room Reservations & Tariffs">Room Reservations & Tariffs</option>
                    <option value="Aaura Restaurant Dining">Aaura Restaurant Dining</option>
                    <option value="Wedding & Banquet Booking">Wedding & Banquet Booking</option>
                    <option value="Corporate Meeting & Stay Package">Corporate Meeting & Stay Package</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#c5a059] block mb-1 font-medium">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How may our front desk assist you today?"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-[#07151c] border border-white/10 rounded-lg px-3.5 py-2 text-xs text-[#faf8f5] focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.2em] text-xs font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#07080a]" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
