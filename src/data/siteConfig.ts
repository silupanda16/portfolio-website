export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  iconName: string;
  badge?: string;
  features: string[];
  imageUrl: string;
}

export interface BrandItem {
  name: string;
  category?: string;
}

export interface ReviewItem {
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  service: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  description: string;
}

export const siteConfig = {
  business: {
    name: "S.S. Services",
    legalName: "S.S. Services - Appliance Repair Solutions",
    tagline: "Berhampur's Trusted AC, Refrigerator, Washing Machine & TV Experts",
    founder: "Silu Panda",
    experienceYears: 10,
    experienceLabel: "10+ Years of Field Experience",
    satisfiedClients: "5,000+",
    turnaroundTime: "60–90 Mins",
    guaranteeText: "100% Genuine Spare Parts",
    email: "silupanda16@gmail.com",
    primaryPhone: "9040423413",
    primaryPhoneDisplay: "+91 90404 23413",
    whatsappNumber: "9040423413",
    whatsappDefaultMessage: "Hello Silu bhai, I need appliance repair/installation service in Berhampur. Please check availability.",
    primaryAddress: "Medical Bank Colony 5th Lane, Berhampur, Ganjam, Odisha - 760004",
    secondaryAddress: "Bapuji Nagar Junction, Berhampur, Ganjam, Odisha - 760004",
    city: "Berhampur",
    district: "Ganjam",
    state: "Odisha",
    pincode: "760004",
    country: "India",
    serviceHours: "Mon – Sun: 8:00 AM – 9:00 PM (Emergency Call Support Available)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15124.939023223164!2d84.786561!3d19.314962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3d501062b14643%3A0xe5433d7b9e07d3b0!2sBank%20Colony%2C%20Brahmapur%2C%20Odisha%20760004!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    mapDirectUrl: "https://maps.google.com/?q=Medical+Bank+Colony+Berhampur+Odisha+760004",
    developerCredit: {
      text: "Designed and developed by",
      name: "ganeshsahu",
      displayName: "Ganesh Sahu",
      url: "https://gamified-portfolio-one.vercel.app/"
    }
  },

  hero: {
    badge: "⚡ Fast & Reliable Doorstep Repair in Berhampur",
    title: "Air Conditioners, Fridges, Washers & Smart TVs",
    highlightText: "Repaired & Installed at Your Doorstep",
    subtitle: "Over a decade of hands-on expertise fixing ACs, Refrigerators, Washing Machines & Smart TVs across Berhampur. Original company parts, quick arrival, and transparent diagnosis.",
    heroImage: "/images/heroimage.jpeg",
    primaryCtaText: "Call Silu: 9040423413",
    secondaryCtaText: "Book via WhatsApp",
    statBadges: [
      { value: "10+", label: "Years Experience" },
      { value: "5000+", label: "Appliances Fixed" },
      { value: "60-90 Min", label: "Doorstep Arrival" },
      { value: "100%", label: "Genuine Parts" }
    ]
  },

  // Brands trending in the Indian Market
  brands: [
    { name: "Samsung" },
    { name: "LG" },
    { name: "Voltas" },
    { name: "Godrej" },
    { name: "Whirlpool" },
    { name: "Blue Star" },
    { name: "Carrier" },
    { name: "Lloyd" },
    { name: "Electrolux" },
    { name: "MarQ" },
    { name: "BenQ" },
    { name: "IFB" },
    { name: "Haier" },
    { name: "Bosch" },
    { name: "Panasonic" },
    { name: "Sony" },
    { name: "Hitachi" },
    { name: "TCL" },
    { name: "Xiaomi" }
  ],

  services: [
    {
      id: "ac-service",
      title: "Air Conditioner (AC) Service & Repair",
      shortDesc: "Complete cooling solutions for Split, Window & Inverter ACs including jet-pump deep cleaning, eco gas refill, and PCB diagnostics.",
      iconName: "AirVent",
      badge: "Summer Essential",
      features: [
        "Split & Window AC Installation & Uninstallation",
        "R32 / R410A / R22 Eco Gas Charging & Leak Testing",
        "Indoor & Outdoor Deep Water-Jet Cleaning",
        "Inverter PCB Board Repair & Sensor Replacement",
        "Compressor & Fan Motor Troubleshooting"
      ],
      imageUrl: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "refrigerator-service",
      title: "Refrigerator & Deep Freezer Repair",
      shortDesc: "Fast doorstep troubleshooting for Single Door, Double Door, Side-by-Side & Inverter chillers with genuine replacement parts.",
      iconName: "Refrigerator",
      badge: "Same-Day Fix",
      features: [
        "Cooling Coil & Gas Refilling with Precision Leak Detection",
        "Thermostat, Defrost Timer & Sensor Fixes",
        "Inverter Compressor Relay & Capacitor Repair",
        "Door Gasket Replacement & Drainage De-clogging",
        "Single / Double / Multi-Door & Deep Freezer care"
      ],
      imageUrl: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "washing-machine",
      title: "Washing Machine Repair & Service",
      shortDesc: "Expert diagnosis for Front Load, Top Load & Semi-Automatic washers. Fixing spinning, drainage, bearing, and electronic card faults.",
      iconName: "Disc",
      badge: "Popular Service",
      features: [
        "Front Load & Top Load Drum Bearing Repair",
        "Water Inlet Valve & Drain Pump Replacement",
        "Motor Belt, Pulsator & Agitator Service",
        "Electronic PCB Motherboard Repair",
        "Excessive Vibration & Noise Elimination"
      ],
      imageUrl: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "tv-repair",
      title: "Smart LED / LCD TV Repair & Mounting",
      shortDesc: "Precision repairs for all branded Smart TVs: LED backlight replacement, sound/video synchronization, and sturdy wall mounting.",
      iconName: "Tv",
      badge: "Home Entertainment",
      features: [
        "LED Backlight Strip Replacement (Sound OK, No Picture)",
        "Power Supply Board & Motherboard Servicing",
        "HDMI / Display Port / Audio Jack Replacement",
        "Heavy-duty Swivel & Tilt Wall Mount Installation",
        "Display Lines / Flickering Screen Assessment"
      ],
      imageUrl: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80"
    }
  ],

  trustPillars: [
    {
      title: "10+ Years On-Field Experience",
      desc: "Silu Panda has tackled over 5,000+ complex appliance issues across Berhampur homes and businesses.",
      iconName: "Award"
    },
    {
      title: "Prompt Doorstep Service",
      desc: "We understand non-cooling fridges or summer AC breakdowns are urgent. Arriving at your doorstep in 60 to 90 minutes.",
      iconName: "Clock"
    },
    {
      title: "100% Genuine Spare Parts",
      desc: "We only use original brand-approved relays, capacitors, motors, and cooling coils for maximum equipment durability.",
      iconName: "ShieldCheck"
    },
    {
      title: "Transparent & Fair Pricing",
      desc: "No hidden charges. Clear diagnostic estimate provided before starting any repair work.",
      iconName: "BadgePercent"
    },
    {
      title: "On-Spot Testing & Verification",
      desc: "Every repaired appliance is fully tested in front of you to guarantee optimal performance before leaving.",
      iconName: "CheckCircle2"
    },
    {
      title: "Cash & UPI Accepted",
      desc: "Pay easily after successful testing using Google Pay, PhonePe, Paytm, or Cash on Delivery.",
      iconName: "Smartphone"
    }
  ],

  testimonials: [
    {
      name: "Pradeep Mohapatra",
      location: "Medical Bank Colony, Berhampur",
      rating: 5,
      date: "Last week",
      service: "Split AC Gas Refill & Jet Cleaning",
      comment: "My Voltas 1.5 Ton AC wasn't cooling during peak heat. Called Silu bhai at 10 AM, he arrived by 11:15 AM! Found a minor leak, fixed it, and refilled gas. Cooling like new now. Very polite and honest guy."
    },
    {
      name: "Sunita Patnaik",
      location: "Bapuji Nagar, Berhampur",
      rating: 5,
      date: "2 weeks ago",
      service: "LG Washing Machine Drum Noise",
      comment: "Local company service center quoted ₹4,500 and 10 days waiting for drum bearing. Silu inspected it on the same day and replaced the worn bearing with genuine part at nearly half the price. Highly recommended!"
    },
    {
      name: "Debashish Tripathy",
      location: "Courtpeta, Berhampur",
      rating: 5,
      date: "1 month ago",
      service: "Samsung Double-Door Refrigerator",
      comment: "Refrigerator top freezer was working but bottom cabin wasn't chilling. S.S. Services replaced the faulty defrost timer and sensor within an hour. Professional work and reasonable charges."
    },
    {
      name: "Kailash Sahu",
      location: "Gochhikar Street, Berhampur",
      rating: 5,
      date: "3 weeks ago",
      service: "Smart LED TV Backlight & Wall Mount",
      comment: "Sound was working but screen was totally black on my 43-inch LED TV. Silu diagnosed the faulty backlight strips and repaired it neatly on the same day. Saved me from buying a new TV!"
    }
  ],

  faqs: [
    {
      question: "Which appliances do you repair and service?",
      answer: "We specialize exclusively in Air Conditioners (Split, Window, Inverter), Refrigerators (Single/Double Door, Inverter, Deep Freezers), Washing Machines (Front Load, Top Load, Semi-Automatic), and Smart LED/LCD Televisions."
    },
    {
      question: "Which areas in and around Berhampur do you cover for doorstep repair?",
      answer: "We provide doorstep services throughout Berhampur including Medical Bank Colony, Bapuji Nagar, Courtpeta, Giri Road, Lochapada, Gate Bazar, Gosaninuagaon, Ankoli, engineering college areas, and surrounding regions within a 15 km radius."
    },
    {
      question: "How fast can you arrive after I book a service?",
      answer: "For standard urgent repairs (like non-cooling refrigerators or AC breakdowns), our technician usually reaches your doorstep within 60 to 90 minutes. You can also schedule a specific morning or evening slot as per your convenience."
    },
    {
      question: "Do you use genuine spare parts for brands like Samsung, LG, Voltas, and Godrej?",
      answer: "Yes, 100%. We only source and fit manufacturer-approved genuine spare parts (capacitors, relays, thermostats, fan motors, PCB boards, and eco-friendly refrigerants like R32 and R410A) to ensure durability and safety."
    },
    {
      question: "How transparent is your pricing before work begins?",
      answer: "Silu inspects your appliance first, clearly explains what component is damaged, and gives you a clear upfront estimate before starting any work. No hidden costs or surprise fees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all convenient Indian payment modes including Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm, BHIM), and direct bank transfers after you verify that the appliance is working perfectly."
    },
    {
      question: "How do I book an appointment with Silu?",
      answer: "The quickest way is to call directly at 9040423413 or tap the floating WhatsApp button to send your address and appliance issue. We confirm availability immediately."
    }
  ]
};
