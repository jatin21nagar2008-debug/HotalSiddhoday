import React, { useState, useEffect } from 'react';
import { RoyalLogo } from './RoyalLogo';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { HOTEL_CONFIG } from '../config/hotelConfig';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'rooms', 'restaurant', 'banquets', 'gallery', 'amenities', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Rooms & Suites', href: '#rooms', id: 'rooms' },
    { label: 'Restaurant', href: '#restaurant', id: 'restaurant' },
    { label: 'Banquets & Events', href: '#banquets', id: 'banquets' },
    { label: 'Gallery', href: '#gallery', id: 'gallery' },
    { label: 'Amenities', href: '#amenities', id: 'amenities' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#06141c] border-b border-[#d4af37]/30 shadow-[0_4px_25px_rgba(0,0,0,0.85)] ${
          isScrolled ? 'py-3' : 'py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="group focus:outline-none"
            >
              <RoyalLogo size={isScrolled ? 'sm' : 'md'} />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 py-1 ${
                      isActive ? 'text-[#d4af37]' : 'text-[#faf8f5]/80 hover:text-[#d4af37]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                className="hidden xl:flex items-center gap-2 text-xs uppercase tracking-wider text-[#c5a059] hover:text-[#f7f0df] transition-colors"
                title="Call Front Desk"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="font-semibold">{HOTEL_CONFIG.contact.primaryPhone}</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="relative group overflow-hidden px-5 py-2.5 rounded-sm border border-[#d4af37] bg-gradient-to-r from-[#d4af37]/20 via-[#c5a059]/30 to-[#d4af37]/20 hover:from-[#d4af37] hover:to-[#c5a059] transition-all duration-500 shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-2 font-serif tracking-[0.18em] uppercase text-xs font-bold text-[#faf8f5] group-hover:text-[#07080a] transition-colors duration-300">
                  <Calendar className="w-3.5 h-3.5 text-[#d4af37] group-hover:text-[#07080a] transition-colors duration-300" />
                  Book Now
                </span>
                <span className="absolute inset-0 bg-[#d4af37] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3 py-1.5 rounded border border-[#d4af37] bg-[#d4af37]/10 text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold"
              >
                Book
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#faf8f5] hover:text-[#d4af37] focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#d4af37]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-50 bg-[#081820] flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
          >
            {/* Header in Drawer */}
            <div className="flex items-center justify-between pb-6 border-b border-[#2c3342]/60">
              <RoyalLogo size="sm" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-[#d4af37]/40 text-[#faf8f5] hover:text-[#d4af37] focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav list */}
            <nav className="flex flex-col gap-5 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between text-base font-serif tracking-[0.15em] uppercase text-[#faf8f5] hover:text-[#d4af37] py-2 border-b border-white/[0.04] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-[#d4af37]/60" />
                </a>
              ))}
            </nav>

            {/* Bottom Contact & Action */}
            <div className="pt-6 border-t border-[#2c3342]/60 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded border border-[#d4af37] bg-gradient-to-r from-[#d4af37] to-[#c5a059] text-[#07080a] font-serif uppercase tracking-[0.2em] text-xs font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              >
                Book Your Stay
              </button>

              <div className="flex items-center justify-between text-xs text-[#c8bead]">
                <a
                  href={`tel:${HOTEL_CONFIG.contact.primaryPhoneRaw}`}
                  className="flex items-center gap-2 hover:text-[#d4af37]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>{HOTEL_CONFIG.contact.primaryPhone}</span>
                </a>
                <span className="text-[10px] text-[#8c7355] uppercase tracking-wider">Harda, MP</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
