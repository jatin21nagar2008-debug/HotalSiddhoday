import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rooms } from './components/Rooms';
import { Restaurant } from './components/Restaurant';
import { Banquets } from './components/Banquets';
import { Gallery } from './components/Gallery';
import { Amenities } from './components/Amenities';
import { BookingSection } from './components/BookingSection';
import { Testimonials } from './components/Testimonials';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { RoomData } from './config/hotelConfig';

export default function App() {
  // States for cross-component booking flow
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState<RoomData | null>(null);
  const [quickBookingParams, setQuickBookingParams] = useState<{
    checkIn: string;
    checkOut: string;
    guests: string;
    category: string;
  } | null>(null);

  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToRooms = () => {
    const el = document.getElementById('rooms');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectRoom = (room: RoomData) => {
    setSelectedRoomForBooking(room);
    scrollToBooking();
  };

  const handleQuickBookCheck = (params: {
    checkIn: string;
    checkOut: string;
    guests: string;
    category: string;
  }) => {
    setQuickBookingParams(params);
    scrollToBooking();
  };

  return (
    <div className="min-h-screen bg-[#081820] text-[#faf8f5] selection:bg-[#d4af37] selection:text-[#081820]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={scrollToBooking} />

      {/* Main Page Flow */}
      <main>
        {/* Full-screen Hero Section */}
        <Hero
          onBookClick={scrollToBooking}
          onExploreRoomsClick={scrollToRooms}
          onQuickBookCheck={handleQuickBookCheck}
        />

        {/* About Hotel & Verified Statistics */}
        <About />

        {/* 4 Room Categories & Detail Modals */}
        <Rooms onSelectRoomForBooking={handleSelectRoom} />

        {/* Aaura Restaurant and Grill (Rooftop Dining & Jain/Veg Specialties) */}
        <Restaurant />

        {/* Banquets, Lawns & Dedicated Event Enquiry Form */}
        <Banquets />

        {/* Hotel Gallery & Fullscreen Lightbox */}
        <Gallery />

        {/* 10 Verified Core Amenities & Facilities */}
        <Amenities />

        {/* Official Booking Interface with WhatsApp Submission & Receipt */}
        <BookingSection
          initialRoom={selectedRoomForBooking}
          initialCheckIn={quickBookingParams?.checkIn}
          initialCheckOut={quickBookingParams?.checkOut}
          initialGuests={quickBookingParams?.guests}
          initialCategory={quickBookingParams?.category}
        />

        {/* Customer Testimonials Carousel */}
        <Testimonials />

        {/* Location & Contact Section */}
        <LocationContact />
      </main>

      {/* Luxury Royal Footer */}
      <Footer />

      {/* Floating WhatsApp Concierge */}
      <FloatingWhatsApp />
    </div>
  );
}
