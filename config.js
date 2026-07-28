window.APP_CONFIG = {
  meta: {
    mode: "demo",
    leadId: "my-island-kitchen",
    demoExpiresAt: "2026-08-31T23:59:59-07:00",
    contactName: "Nida Desmarais",
    contactEmail: "Hilevelassoc@gmail.com"
  },

  business: {
    name: "My Island Kitchen",
    tagline: "Island Fusion Cuisine · French Technique",
    phone: "(458) 212-1115",
    email: "Hilevelassoc@gmail.com",
    logo: "axiommaster3.webp"
  },

  branding: {
    primary: "#F4791F",
    accent: "#00A6A6",
    theme: "aurora",
    neon: { on: true, color: "match", width: 3 }
  },

  modules: {
    hero: true,
    stats: true,
    services: true,
    hours: true,
    reviews: true,
    about: true,
    contact: true,
    bookingForm: true,
    nav: true,
    faq: false,
    gallery: false
  },

  content: {
    hero: {
      headline: "Island Fusion, Done Right",
      subtext: "Flavors from across the islands, built on French technique — served hot at Area 61 Taphouse in Grants Pass.",
      buttons: [
        { label: "See Menu", icon: "utensils", link: "#services" },
        { label: "Order on DoorDash", icon: "shopping-bag", link: "https://www.doordash.com/store/my-island-kitchen-merlin-28252021" }
      ]
    },

    stats: [
      { icon: "star", value: "4.6", label: "DoorDash Rating" },
      { icon: "users", value: "200+", label: "Orders Rated" },
      { icon: "map-pin", value: "Area 61", label: "Grants Pass" }
    ],

    services: [
      { name: "Plate", price: "$18", icon: "utensils", desc: "Our signature plate — the #1 most-liked item." },
      { name: "Fried Rice Plate", price: "$18", icon: "utensils", desc: "Add firecracker shrimp. Huge portion, easily feeds more than one." },
      { name: "Teriyaki Chicken Slices", price: "$18", icon: "drumstick", desc: "Island teriyaki chicken, tender and flavorful." },
      { name: "Poke Bowl", price: "$19", icon: "fish", desc: "Fresh poke — shoyu or spicy aioli." },
      { name: "Fried Rice Bowl", price: "$14", icon: "utensils", desc: "Fusion fried rice bowl packed with flavor." },
      { name: "Fusion Nachos", price: "$10", icon: "layers", desc: "Loaded fusion nachos — add shrimp or beef." },
      { name: "Fusion Fries", price: "Ask", icon: "layers", desc: "Loaded fries — add shrimp or beef. Big enough to be a meal." },
      { name: "Calamari Strips", price: "Ask", icon: "fish", desc: "Crispy calamari with house cocktail sauce." },
      { name: "Blistered Green Beans", price: "Ask", icon: "leaf", desc: "House side — a customer favorite." },
      { name: "Spam Musubi", price: "Ask", icon: "utensils", desc: "Classic island snack, done right." },
      { name: "Bao Buns", price: "Ask", icon: "utensils", desc: "Island-style bao with slaw & pickled veg." },
      { name: "Mac & Cheese + Asian BBQ Chicken", price: "Ask", icon: "utensils", desc: "Shareable, large portion. Comfort meets island." }
    ],

    hours: [
      { day: "Monday", time: "11:00 AM – 8:40 PM" },
      { day: "Tuesday", time: "11:00 AM – 8:40 PM" },
      { day: "Wednesday", time: "11:00 AM – 8:40 PM" },
      { day: "Thursday", time: "11:00 AM – 8:40 PM" },
      { day: "Friday", time: "11:00 AM – 8:40 PM" },
      { day: "Saturday", time: "11:00 AM – 8:40 PM" },
      { day: "Sunday", time: "Confirm" }
    ],

    reviews: [
      { rating: 5, name: "Lea R.", text: "The Fried Rice Plate with firecracker shrimp was amazing and HUGE — fed me three times. Calamari Strips were delicious. Worth every penny!" },
      { rating: 5, name: "Melissa L.", text: "This place is amazing. The Spam Musubi was PERFECT and the Fried Rice Bowl just as delicious. Some of the best food I've had in GP in a decade." },
      { rating: 5, name: "Sarah B.", text: "Portions are generous and everything was well packaged. The Poke Bowl was fresh and absolutely delicious!" }
    ],

    about: {
      heading: "About My Island Kitchen",
      body: "My Island Kitchen is an island fusion food truck combining flavors from different islands using classic French technique. Find us at Area 61 Taphouse in Grants Pass with indoor & outdoor seating and entertainment. Sister truck to Coastal Cravings."
    },

    nav: [
      { label: "Menu", icon: "utensils", link: "#services" },
      { label: "Book", icon: "calendar-check", link: "#book" },
      { label: "Call", icon: "phone", link: "tel:(458) 212-1115" },
      { label: "Find Us", icon: "map-pin", link: "#contact" }
    ]
  },

  forms: {
    endpoint: "https://formspree.io/f/mlgqzdlr"
  },

  orb: {
    on: true,
    label: "AXIOM",
    teaser: {
      delay: 2500,
      messages: [
        "📲 Tap AXIOM to add us to your home screen",
        "🌺 Ask me today's menu or hours",
        "⚡ Order or call with one tap",
        "✨ This app works offline too"
      ]
    }
  },

  reception: {
    greeting: "Aloha! Welcome to My Island Kitchen at Area 61 Taphouse. Want today's menu, our location, or hours?",
    quickButtons: [
      { label: "📖 See the menu", text: "What's on the menu?" },
      { label: "📍 Where are you?", text: "Where are you located?" },
      { label: "🕐 What are your hours?", text: "What are your hours?" },
      { label: "📲 Add to my phone", action: "install" }
    ],
    bookingNotify: "https://formspree.io/f/mlgqzdlr",
    knowledge: {
      persona: "You are the friendly AI host for My Island Kitchen, an island fusion food truck using French technique, located at Area 61 Taphouse, 3400 Merlin Road, Grants Pass OR. Hours are roughly 11am–8:40pm daily. Be warm and casual with island hospitality. Help with menu highlights (plates, poke bowls, fusion nachos, calamari, bao buns), location, hours, and ordering via DoorDash, dine-in, or takeout. The menu rotates and specials change — if asked about an item or exact price you don't see listed, invite them to call (458) 212-1115 or check Instagram @myislandkitchen_merlin. Never invent prices or hours you weren't given.",
      address: "3400 Merlin Road, Grants Pass, OR (Area 61 Taphouse)",
      phone: "(458) 212-1115",
      ordering: "DoorDash, dine-in, or takeout"
    }
  }
};
