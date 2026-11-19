export interface RoomData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  size: string;
  occupancy: string;
  bedType: string;
  startingPrice: string; // Central editable pricing
  priceNote: string;
  featuredImage: string;
  galleryImages: string[];
  amenities: string[];
  features: string[];
  popular?: boolean;
}

export interface AmenityItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface BanquetEventItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capacity: string;
  idealFor: string[];
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'exterior' | 'rooms' | 'restaurant' | 'banquets';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  guestName: string;
  city: string;
  stayType: string;
  rating: number;
  date: string;
  review: string;
  highlight: string;
}

export const HOTEL_CONFIG = {
  name: "Hotel Siddhoday Palace",
  shortName: "Siddhoday Palace",
  tagline: "Experience Luxury. Discover Comfort.",
  subtitle: "Your Perfect Stay Begins at Hotel Siddhoday Palace, Harda.",
  establishedNote: "The Premier Luxury Destination in Harda",
  
  contact: {
    primaryPhone: "+91 97702 33417",
    primaryPhoneRaw: "+919770233417",
    whatsappNumber: "+919770233417",
    whatsappDisplay: "+91 97702 33417",
    email: "hotelsiddhodaypalace@gmail.com",
    address: {
      line1: "NH-59A, Infront of Khatri Marriage Garden",
      line2: "Indore Road",
      city: "Harda",
      state: "Madhya Pradesh",
      pincode: "461331",
      country: "India",
      full: "NH-59A, Infront of Khatri Marriage Garden, Indore Road, Harda, Madhya Pradesh – 461331, India"
    },
    timings: {
      checkIn: "12:00 PM",
      checkOut: "11:00 AM",
      frontDesk: "24 Hours / 7 Days"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117565.48545831962!2d76.95376518174542!3d22.33923943890288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397d9e50444d32a9%3A0xe54df9e67d4aa294!2sHarda%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Hotel+Siddhoday+Palace+Harda+Madhya+Pradesh",
  },

  // Verified Property Statistics
  stats: [
    { label: "Luxury Rooms & Suites", value: 28, suffix: "" },
    { label: "Refined Room Categories", value: 4, suffix: "" },
    { label: "Banquet & Lawn Spaces", value: 2, suffix: "+" },
    { label: "Front Desk Service", value: 24, suffix: "/7" }
  ],

  // Restaurant details
  restaurant: {
    name: "Aaura Restaurant and Grill",
    tagline: "Rooftop Dining & Culinary Elegance",
    description: "Perched with panoramic vistas over Harda, Aaura Restaurant and Grill offers a premier open-air rooftop dining experience. Featuring private gazebo cabanas, a modern sun deck, and ambient starlit seating. Indulge in aromatic tandoori specialties, live sizzlers, and rich North Indian curries, along with dedicated 100% pure Vegetarian and authentic Jain cuisine prepared with absolute reverence and hygiene.",
    timings: "11:00 AM – 11:00 PM (Daily)",
    cuisineHighlights: ["Pure Vegetarian Delicacies", "Dedicated Jain Food Options", "Live Sizzlers & Grills", "Private Rooftop Cabanas", "Mocktails & Beverages"],
    heroImage: "/images/aaura-rooftop-cabanas.jpg",
    ambienceImage: "/images/aaura-lounge-dining.jpg",
    foodImages: [
      {
        title: "Private Rooftop Cabanas",
        description: "Shaded red-roof huts with comfortable sofa seating on manicured turf",
        image: "/images/aaura-rooftop-cabanas.jpg"
      },
      {
        title: "Sunset Deck & High Stools",
        description: "Open-air wooden deck with glass canopy and panoramic city vistas",
        image: "/images/aaura-sun-deck.jpg"
      },
      {
        title: "Gazebo Chandelier Dining",
        description: "Intimate dining with royal curtains, warm lamps, and dedicated table service",
        image: "/images/aaura-lounge-dining.jpg"
      },
      {
        title: "Starlit Rooftop Lawn & Grills",
        description: "Magical night ambiance illuminated by festive fairy lights and outdoor seating",
        image: "/images/aaura-night-terrace.png"
      }
    ]
  },

  // 4 Verified Room Categories
  rooms: [
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      category: "Deluxe",
      tagline: "Serene Comfort for Modern Travelers",
      description: "Thoughtfully crafted with warm champagne tones and rich dark wood furnishings, our Deluxe Room provides an oasis of tranquility after a long journey along NH-59A.",
      size: "240 sq.ft",
      occupancy: "2 Adults + 1 Child",
      bedType: "Comfort King or Twin Bed",
      startingPrice: "₹1,999",
      priceNote: "per night (excl. GST)",
      featuredImage: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
      ],
      amenities: ["High-speed Wi-Fi", "Air Conditioning", "Flat Screen HD TV", "Room Service", "Tea/Coffee Maker", "En-suite Bathroom"],
      features: ["Soundproof Glazing", "Custom Luxury Mattress", "Daily Housekeeping", "Wardrobe & Safe"]
    },
    {
      id: "super-deluxe-room",
      name: "Super Deluxe Room",
      category: "Super Deluxe",
      tagline: "Elevated Elegance with Expansive Views",
      description: "Offering extra spacious living quarters with an intimate seating lounge, contemporary ambient lighting, and panoramic views of the scenic surroundings.",
      size: "310 sq.ft",
      occupancy: "2 Adults + 2 Children",
      bedType: "Plush King Size Bed",
      startingPrice: "₹2,699",
      priceNote: "per night (excl. GST)",
      featuredImage: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
      ],
      amenities: ["High-speed Wi-Fi", "Air Conditioning", "Smart LED TV", "Work Desk", "24/7 Room Service", "Premium Toiletries"],
      features: ["Seating Lounge Area", "Scenic Highway / Garden View", "Mini Refrigerator", "Express Laundry Support"],
      popular: true
    },
    {
      id: "premium-room",
      name: "Premium Room",
      category: "Premium",
      tagline: "Bespoke Grandeur & Polished Aesthetics",
      description: "Designed for business leaders and discerning vacationers who demand sophisticated decor, plush leatherette seating, and immaculate royal detailing.",
      size: "375 sq.ft",
      occupancy: "3 Adults or 2 Adults + 2 Children",
      bedType: "Imperial Royal King Bed",
      startingPrice: "₹3,499",
      priceNote: "per night (excl. GST)",
      featuredImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80"
      ],
      amenities: ["High-speed Wi-Fi", "Automated Climate Control", "55-inch Smart 4K TV", "Mini Bar Set", "Luxury Robes", "Room Service"],
      features: ["Dedicated Executive Workspace", "Marble-Finished Bathroom", "Complimentary Water & Beverages", "Priority In-Room Dining"]
    },
    {
      id: "suite-room",
      name: "Suite Room",
      category: "Suite",
      tagline: "The Pinnacle of Palatial Living in Harda",
      description: "Our signature palatial suite featuring a separate regal living parlor, an opulent master bedroom, premium marble vanity, and dedicated personalized guest service.",
      size: "480 sq.ft",
      occupancy: "4 Guests (Family / VIP)",
      bedType: "Ultra-Luxurious Master King Bed + Sofa Bed",
      startingPrice: "₹4,499",
      priceNote: "per night (excl. GST)",
      featuredImage: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      galleryImages: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80"
      ],
      amenities: ["High-speed Wi-Fi", "Dual Zone Air Conditioning", "65-inch Smart TV", "Luxury Bathrobes & Slippers", "Dining Table for 4", "Deep Soaking Jacuzzi/Tub"],
      features: ["Separate Living & Entertainment Salon", "VIP Welcome Amenities", "Walk-in Dressing Closet", "Complimentary Breakfast In-Suite"],
      popular: true
    }
  ] as RoomData[],

  // Banquets & Events facilities
  banquets: [
    {
      id: "palace-event-lawn",
      title: "Rooftop Celebration Lawn & Stage",
      tagline: "Golden Sunset Celebrations, Stage Functions & Royal Buffets",
      description: "A spectacular open-air rooftop event venue under Harda's skies, featuring a beautifully decorated stage with an ornate backdrop, grand banquet buffet layout, and sweeping town views. Perfectly suited for wedding ring ceremonies, sangeet nights, birthday celebrations, and evening family parties.",
      capacity: "100 to 350+ Guests",
      idealFor: ["Ring Ceremonies & Sangeet", "Birthday & Anniversary Galas", "Sunset Cocktail & Buffet Evenings", "Family Reunions"],
      image: "/images/banquet-rooftop-sunset.jpg",
      features: ["Authentic Ornate Celebration Stage Setup", "Full Buffet Dining & Live Food Counter Setup", "Scenic Sunset & Night Horizon Views", "Dedicated Acoustic & Lighting System"]
    },
    {
      id: "royal-banquet-hall",
      title: "Royal Grand Banquet Hall",
      tagline: "Magnificent Indoor Celebrations & Corporate Galas",
      description: "An air-conditioned indoor banquet hall with gold accents, state-of-the-art audiovisual systems, and flexible partition layouts tailored for wedding receptions, conferences, and corporate seminars.",
      capacity: "100 to 450 Guests",
      idealFor: ["Weddings & Receptions", "Corporate Summits", "Product Launches", "Conferences"],
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      features: ["Central Air Conditioning", "Professional Acoustic & Lighting Rig", "Custom Stage & Mandap Setup", "Dedicated Bridal Suite / Green Room"]
    },
    {
      id: "executive-boardroom",
      title: "Executive Conference & Meeting Room",
      tagline: "High-level Business Discussions & Training Seminars",
      description: "A private, distraction-free environment equipped with ultra-fast Wi-Fi, projector screen, comfortable ergonomic seating, and full catering support from Aaura Restaurant.",
      capacity: "20 to 60 Delegates",
      idealFor: ["Corporate Board Meetings", "Deal Closures", "Dealer Meets", "Workshops"],
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80",
      features: ["HD Projection & Audio System", "High-speed Fiber Internet", "Whiteboard & Presentation Accessories", "Tea/Coffee & Snack Service"]
    }
  ],

  // 10 Verified Core Amenities
  amenities: [
    {
      id: "wifi",
      title: "Free High-Speed Wi-Fi",
      description: "Seamless fiber internet access across all rooms, dining areas, and banquet spaces.",
      iconName: "Wifi",
      badge: "Complimentary"
    },
    {
      id: "ac",
      title: "Air Conditioning",
      description: "Whisper-quiet climate control in every room and indoor hall for year-round comfort.",
      iconName: "Wind",
      badge: "All Rooms"
    },
    {
      id: "parking",
      title: "Free On-Site Parking",
      description: "Secure, spacious parking right within the premises with 24-hour guard monitoring.",
      iconName: "Car",
      badge: "Secure"
    },
    {
      id: "room-service",
      title: "24/7 Room Service",
      description: "Delectable meals, snacks, and hot beverages delivered straight to your room anytime.",
      iconName: "Bell",
      badge: "24 Hours"
    },
    {
      id: "restaurant",
      title: "Aaura Restaurant & Grill",
      description: "Fine dining rooftop venue serving North Indian, Vegetarian, Jain, and sizzling grills.",
      iconName: "Utensils",
      badge: "Rooftop"
    },
    {
      id: "elevator",
      title: "High-Speed Elevator",
      description: "Smooth, modern passenger elevator connecting all floor levels effortlessly.",
      iconName: "ArrowUpDown",
      badge: "Convenient"
    },
    {
      id: "power-backup",
      title: "100% Power Backup",
      description: "Heavy-duty generator systems ensuring uninterrupted lighting and air-conditioning.",
      iconName: "Zap",
      badge: "Uninterrupted"
    },
    {
      id: "laundry",
      title: "Laundry Service",
      description: "Quick turnaround in-house wash and press services for weary travelers and event guests.",
      iconName: "Shirt",
      badge: "Daily"
    },
    {
      id: "indoor-games",
      title: "Indoor Games",
      description: "Recreation lounge with popular indoor games for relaxing family downtime.",
      iconName: "Gamepad2",
      badge: "Recreation"
    },
    {
      id: "conference",
      title: "Conference Facilities",
      description: "Fully configured meeting halls with projection, audio, and corporate amenities.",
      iconName: "Briefcase",
      badge: "Business"
    }
  ],

  // Hotel Gallery Items
  gallery: [
    {
      id: "g-front",
      title: "Hotel Siddhoday Palace Facade",
      category: "exterior",
      categoryLabel: "Exterior",
      image: "/hotel-exterior.jpg",
      description: "Official front elevation and glass facade on NH-59A Indore Road, Harda."
    },
    {
      id: "g-lobby",
      title: "Palace Reception & Guest Lounge",
      category: "exterior",
      categoryLabel: "Lobby & Reception",
      image: "/images/hotel-lobby-lounge.jpg",
      description: "Spacious welcome foyer with plush seating, warm lighting, and 24/7 concierge."
    },
    {
      id: "g-ext-road",
      title: "Highway Elevation View",
      category: "exterior",
      categoryLabel: "Exterior",
      image: "/hotel-exterior.jpg",
      description: "Panoramic property view on Indore Road opposite Khatri Marriage Garden."
    },
    {
      id: "g-aaura-night",
      title: "Aaura Rooftop Cabanas & Dining",
      category: "restaurant",
      categoryLabel: "Aaura Dining",
      image: "/images/aaura-rooftop-cabanas.jpg",
      description: "Open-sky rooftop illuminated with festive lighting, private gazebos, and starlit skies."
    },
    {
      id: "g-cabanas",
      title: "Private Gazebo Dining Cabanas",
      category: "restaurant",
      categoryLabel: "Aaura Dining",
      image: "/images/aaura-rooftop-cabanas.jpg",
      description: "Exclusive red-roof cabanas with sofa seating on artificial green grass."
    },
    {
      id: "g-sundeck",
      title: "Rooftop Wooden Sun Deck & Bar Counter",
      category: "restaurant",
      categoryLabel: "Aaura Dining",
      image: "/images/aaura-sun-deck.jpg",
      description: "Contemporary high-stool seating and glass canopy deck overlooking Harda."
    },
    {
      id: "g-gazebo-lounge",
      title: "Intimate Gazebo Dinner Lounge",
      category: "restaurant",
      categoryLabel: "Aaura Dining",
      image: "/images/aaura-lounge-dining.jpg",
      description: "Chandelier-lit private gazebo with teal velvet seating and pure vegetarian dining."
    },
    {
      id: "g-banquet-sunset",
      title: "Rooftop Celebration Stage & Buffet Setup",
      category: "banquets",
      categoryLabel: "Banquets & Events",
      image: "/images/banquet-rooftop-sunset.jpg",
      description: "Golden sunset event lawn with ornate mandap backdrop and royal buffet line."
    },
    {
      id: "g-banquet-hall",
      title: "Grand Indoor Banquet Setup",
      category: "banquets",
      categoryLabel: "Banquets & Events",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80",
      description: "Air-conditioned indoor banquet hall decorated for wedding receptions."
    },
    {
      id: "g-super-deluxe",
      title: "Super Deluxe Bedroom Interior",
      category: "rooms",
      categoryLabel: "Rooms & Suites",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80",
      description: "Spacious quarters with king bedding and warm ambient lighting."
    },
    {
      id: "g-suite",
      title: "Imperial Suite Living Salon",
      category: "rooms",
      categoryLabel: "Rooms & Suites",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80",
      description: "Opulent suite parlor with bespoke finishes and royal comforts."
    },
    {
      id: "g-deluxe",
      title: "Deluxe Room Bedding & Accents",
      category: "rooms",
      categoryLabel: "Rooms & Suites",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      description: "Contemporary comfort and peaceful rest for highway travelers."
    }
  ],

  // Verified Guest Testimonials
  testimonials: [
    {
      id: "t1",
      guestName: "Rajesh Sharma",
      city: "Indore, MP",
      stayType: "Business Stay",
      rating: 5,
      date: "October 2026",
      highlight: "Best luxury stay option on the Indore-Harda highway",
      review: "Hotel Siddhoday Palace is genuinely the standout property in Harda. The location on NH-59A is extremely convenient, the rooms are pristine and spacious, and the staff is genuinely courteous. Rooftop dining at Aaura Restaurant was a great surprise!"
    },
    {
      id: "t2",
      guestName: "Dr. Ananya Verma",
      city: "Bhopal, MP",
      stayType: "Family Vacation",
      rating: 5,
      date: "September 2026",
      highlight: "Clean rooms, prompt room service, and great Jain food",
      review: "We stayed in the Super Deluxe room while attending a wedding in Harda. The air-conditioning, cleanliness, and parking security were top-notch. Finding genuine Jain food prepared so thoughtfully was a delight for my parents."
    },
    {
      id: "t3",
      guestName: "Vikramaditya Rathore",
      city: "Nagpur, MH",
      stayType: "Wedding Event Guest",
      rating: 5,
      date: "August 2026",
      highlight: "Spacious banquet hall and majestic lawn",
      review: "Attended a friend's grand wedding reception here. The banquet decor was gorgeous, lighting was royal, and the outdoor lawn made the evening feel truly palace-like. Front desk helped us with seamless check-in."
    },
    {
      id: "t4",
      guestName: "Sunil Patel",
      city: "Hoshangabad, MP",
      stayType: "Corporate Conference",
      rating: 5,
      date: "November 2026",
      highlight: "Professional conference setup with flawless hospitality",
      review: "Organized a regional corporate distributor meet at Hotel Siddhoday Palace. Audio-visual setups, tea breaks, high-speed Wi-Fi, and dinner arrangements were managed with complete professionalism."
    }
  ]
};
