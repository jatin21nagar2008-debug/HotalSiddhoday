import { HOTEL_CONFIG } from '../config/hotelConfig';

export interface BookingPayload {
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  category: string;
  name: string;
  phone: string;
  email: string;
  specialRequests?: string;
}

export interface EventEnquiryPayload {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

export interface TableBookingPayload {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  dietaryPreference: string;
  specialNotes?: string;
}

export function openWhatsAppBooking(payload: BookingPayload): void {
  const message = `*HOTEL SIDDHODAY PALACE - RESERVATION ENQUIRY*
----------------------------------------
*Guest Name:* ${payload.name}
*Phone:* ${payload.phone}
*Email:* ${payload.email || 'Not provided'}

*Room Category:* ${payload.category}
*Check-in Date:* ${payload.checkIn}
*Check-out Date:* ${payload.checkOut}
*Number of Guests:* ${payload.guests}
*Number of Rooms:* ${payload.rooms}
${payload.specialRequests ? `*Special Requests:* ${payload.specialRequests}` : ''}

_Generated via Hotel Siddhoday Palace Website._
_Please confirm room availability and current best tariff._`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encoded}`;
  window.open(url, '_blank');
}

export function openWhatsAppEventEnquiry(payload: EventEnquiryPayload): void {
  const message = `*HOTEL SIDDHODAY PALACE - BANQUET & EVENT ENQUIRY*
----------------------------------------
*Host / Organizer:* ${payload.name}
*Contact Phone:* ${payload.phone}
*Event Type:* ${payload.eventType}
*Tentative Date:* ${payload.date}
*Expected Guests:* ${payload.guests}
${payload.message ? `*Requirements & Notes:* ${payload.message}` : ''}

_Generated via Hotel Siddhoday Palace Website._
_Please share banquet hall / lawn availability and custom package details._`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encoded}`;
  window.open(url, '_blank');
}

export function openWhatsAppTableBooking(payload: TableBookingPayload): void {
  const message = `*AAURA RESTAURANT & GRILL - TABLE RESERVATION*
----------------------------------------
*Guest Name:* ${payload.name}
*Contact Phone:* ${payload.phone}
*Date:* ${payload.date}
*Time:* ${payload.time}
*Guests:* ${payload.guests}
*Dietary Preference:* ${payload.dietaryPreference}
${payload.specialNotes ? `*Special Requests:* ${payload.specialNotes}` : ''}

_Generated via Hotel Siddhoday Palace Website._
_Please confirm our rooftop table reservation._`;

  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encoded}`;
  window.open(url, '_blank');
}

export function openWhatsAppGeneral(inquiryType: string = 'General Inquiry'): void {
  const message = `Hello Hotel Siddhoday Palace, I would like to inquire regarding ${inquiryType}. Please connect with me.`;
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${HOTEL_CONFIG.contact.whatsappNumber}?text=${encoded}`;
  window.open(url, '_blank');
}
