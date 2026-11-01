import { TravelPackage } from "./types";

export const worldDestinations: TravelPackage[] = [
  {
    "id": "bali-paradise",
    "title": "Bali Paradise",
    "country": "Indonesia",
    "location": "Ubud & Seminyak, Bali",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 1299,
    "rating": 4.9,
    "reviewsCount": 234,
    "departureDate": "05/15/2026",
    "imageUrl": "/images/bali.webp",
    "gallery": [
      "/images/bali.webp",
      "/images/santorini.webp",
      "/images/kyoto.webp",
      "/images/venice.webp"
    ],
    "overview": "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury beachfront accommodation, private sunset dinners, and a guided sunrise trek up Mount Batur.",
    "highlights": [
      "Sunrise trek to Mount Batur",
      "Traditional Balinese spa treatment",
      "Luxury beachfront accommodation",
      "Private beach dinner experience",
      "Visit Uluwatu Temple at sunset"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Denpasar & Luxury Villa Check-in",
        "desc": "Private airport transfer to your beachfront resort in Seminyak followed by a welcome Balinese dinner."
      },
      {
        "day": 2,
        "title": "Cultural Tour of Ubud & Sacred Monkey Forest",
        "desc": "Explore the artist village of Ubud, visit the iconic Sacred Monkey Forest and royal palace."
      },
      {
        "day": 3,
        "title": "Mount Batur Sunrise Hike & Hot Springs",
        "desc": "Early morning trek with breakfast overlooking the volcanic caldera, followed by rejuvenating thermal springs."
      },
      {
        "day": 4,
        "title": "Tegalalang Rice Terraces & Coffee Plantation",
        "desc": "Walk through UNESCO-protected rice terraces, experience jungle swings, and sample authentic Luwak coffee."
      },
      {
        "day": 5,
        "title": "Nusa Penida Day Trip & Snorkeling",
        "desc": "Speedboat excursion to Kelingking Beach and Crystal Bay for snorkeling with manta rays."
      },
      {
        "day": 6,
        "title": "Traditional Balinese Spa & Sunset at Uluwatu",
        "desc": "2-hour holistic massage therapy followed by a cliffside kecak fire dance at Uluwatu Temple."
      },
      {
        "day": 7,
        "title": "Souvenir Shopping & Departure",
        "desc": "Free morning for beachside relaxation, souvenir shopping, and transfer to Ngurah Rai International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "venice-riviera",
    "title": "Venice & Italian Riviera",
    "country": "Italy",
    "location": "Venice & Cinque Terre",
    "category": "Cultural",
    "duration": "7 Days / 6 Nights",
    "price": 2700,
    "rating": 4.8,
    "reviewsCount": 189,
    "departureDate": "06/10/2026",
    "imageUrl": "/images/venice.webp",
    "gallery": [
      "/images/venice.webp",
      "/images/bali.webp",
      "/images/swiss-alps.webp"
    ],
    "overview": "Glide through the historic canals of Venice on a private gondola and wander through the colorful cliffside villages of Cinque Terre overlooking the Mediterranean.",
    "highlights": [
      "Private romantic gondola canal cruise",
      "Cinque Terre coastal train & hiking pass",
      "Murano glassblowing artisan masterclass",
      "Wine tasting in Tuscan hillside vineyards",
      "Boutique hotel stays in historic palazzos"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Venice & Grand Canal Cruise",
        "desc": "Private water taxi to St. Marks square hotel."
      },
      {
        "day": 2,
        "title": "Doges Palace & Hidden Venice Walking Tour",
        "desc": "VIP access to the secret archives and Bridge of Sighs."
      },
      {
        "day": 3,
        "title": "Murano & Burano Island Excursion",
        "desc": "Private boat ride to the lace-makers of Burano and glassblowers of Murano."
      },
      {
        "day": 4,
        "title": "Scenic High-Speed Train to Cinque Terre",
        "desc": "Check in at Monterosso al Mare overlooking the azure sea."
      },
      {
        "day": 5,
        "title": "Hiking the Sentiero Azzurro Trail",
        "desc": "Hike between Vernazza and Corniglia with pesto cooking class."
      },
      {
        "day": 6,
        "title": "Private Sunset Yacht Charter",
        "desc": "Sail along the Ligurian coastline with prosecco and local seafood."
      },
      {
        "day": 7,
        "title": "Genoa Transfer & Farewell Departure",
        "desc": "Scenic transfer for departure flights."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "kyoto-blossom",
    "title": "Kyoto Blossom & Heritage",
    "country": "Japan",
    "location": "Kyoto & Nara",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1850,
    "rating": 4.9,
    "reviewsCount": 312,
    "departureDate": "07/01/2026",
    "imageUrl": "/images/kyoto.webp",
    "gallery": [
      "/images/kyoto.webp",
      "/images/bali.webp",
      "/images/swiss-alps.webp"
    ],
    "overview": "Immerse yourself in Japans ancient soul. Walk through thousands of vermilion Torii gates at Fushimi Inari, experience a traditional tea ceremony, and see the tranquil bamboo groves of Arashiyama.",
    "highlights": [
      "Fushimi Inari morning guided walk",
      "Authentic matcha tea ceremony with geiko",
      "Arashiyama bamboo grove and monkey park",
      "Nara deer park & Todai-ji Great Buddha",
      "Stay in a luxury traditional Ryokan with onsen"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kyoto Arrival & Ryokan Onsen Welcome",
        "desc": "Check in to traditional machiya hotel and unwind in therapeutic natural thermal baths."
      },
      {
        "day": 2,
        "title": "Fushimi Inari Shrine & Kiyomizu-dera",
        "desc": "Explore thousands of bright orange gates and historic cliffside wooden temples."
      },
      {
        "day": 3,
        "title": "Arashiyama Bamboo Forest & Sagano Railway",
        "desc": "Stroll through towering emerald bamboo groves followed by scenic river train ride."
      },
      {
        "day": 4,
        "title": "Nara Ancient Capital & Friendly Deer Park",
        "desc": "Day trip to feed sacred sika deer and behold Japans largest bronze Buddha statue."
      },
      {
        "day": 5,
        "title": "Tea Ceremony & Gion Geisha District Evening",
        "desc": "Masterclass in matcha whisking and sunset walking tour through preserved lantern-lit alleys."
      },
      {
        "day": 6,
        "title": "Bullet Train Transfer & Sayonara Japan",
        "desc": "High-speed Shinkansen connection to Tokyo or Kansai International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "swiss-alps-adventure",
    "title": "Swiss Alps Adventure",
    "country": "Switzerland",
    "location": "Zermatt & Interlaken",
    "category": "Mountain",
    "duration": "7 Days / 6 Nights",
    "price": 2950,
    "rating": 4.7,
    "reviewsCount": 145,
    "departureDate": "08/14/2026",
    "imageUrl": "/images/swiss-alps.webp",
    "gallery": [
      "/images/swiss-alps.webp",
      "/images/nepal.webp",
      "/images/venice.webp"
    ],
    "overview": "Breathtaking alpine vistas, snow-capped peaks, and pristine mountain air. Ride the Glacier Express and take the cable car up to the Matterhorn Glacier Paradise.",
    "highlights": [
      "Glacier Express scenic panoramic train journey",
      "Matterhorn Glacier Paradise cable car ride",
      "Jungfraujoch - Top of Europe expedition",
      "Lake Brienz kayaking and boat tour",
      "Authentic Swiss fondue dinner in a mountain chalet"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zurich Arrival & Rail to Interlaken",
        "desc": "Scenic mountain rail ride and check-in to chalet hotel with alpine views."
      },
      {
        "day": 2,
        "title": "Jungfraujoch Top of Europe Rail Tour",
        "desc": "Ascend to Europes highest railway station inside ancient glaciers."
      },
      {
        "day": 3,
        "title": "Grindelwald First & Cliff Walk",
        "desc": "Thrilling cliff walkway suspended over breathtaking mountain valleys."
      },
      {
        "day": 4,
        "title": "Glacier Express to Zermatt",
        "desc": "Legendary panoramic rail ride across 291 bridges and 91 tunnels."
      },
      {
        "day": 5,
        "title": "Matterhorn Glacier Paradise Ascent",
        "desc": "Cable car up to 3,883 meters with 360-degree vistas of Swiss, French, and Italian Alps."
      },
      {
        "day": 6,
        "title": "Alpine Cheese & Wine Fondue Experience",
        "desc": "Evening fondue tasting in a traditional timber chalet with local valais wines."
      },
      {
        "day": 7,
        "title": "Geneva Transfer & Alpine Farewell",
        "desc": "Scenic lake-side departure train to Geneva International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "santorini-sunset",
    "title": "Santorini Sunset Dream",
    "country": "Greece",
    "location": "Oia & Fira, Cyclades",
    "category": "Luxury",
    "duration": "5 Days / 4 Nights",
    "price": 1600,
    "rating": 4.8,
    "reviewsCount": 210,
    "departureDate": "09/05/2026",
    "imageUrl": "/images/santorini.webp",
    "gallery": [
      "/images/santorini.webp",
      "/images/bali.webp",
      "/images/venice.webp"
    ],
    "overview": "Whitewashed cubist villas, cobalt blue domes, and world-famous golden sunsets over the Aegean caldera. Unwind in your private infinity plunge pool.",
    "highlights": [
      "Private catamaran sunset cruise with BBQ",
      "Wine tasting at volcanic clifftop estate",
      "Akrotiri prehistoric archaeological excavation tour",
      "Private infinity cave pool villa in Oia",
      "Helicopter flight over the caldera"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Thira & Oia Clifftop Check-In",
        "desc": "Private VIP transfer to your luxury cave suite overlooking the caldera."
      },
      {
        "day": 2,
        "title": "Catamaran Sailing & Red Beach Swimming",
        "desc": "Semi-private sailing cruise with snorkeling in thermal sulfur springs and fresh seafood."
      },
      {
        "day": 3,
        "title": "Fira to Oia Clifftop Caldera Trek",
        "desc": "Iconic 10km ridge hike offering uninterrupted views of the Aegean Sea."
      },
      {
        "day": 4,
        "title": "Assyrtiko Wine Tasting & Sunset Dinner",
        "desc": "Visit century-old underground volcanic wineries followed by sunset dinner in Oia."
      },
      {
        "day": 5,
        "title": "Boutique Shopping & Departure",
        "desc": "Morning stroll through whitewashed alleys and airport speedboat transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "himalayan-expedition",
    "title": "Himalayan Expedition",
    "country": "Nepal",
    "location": "Kathmandu & Annapurna",
    "category": "Adventure",
    "duration": "10 Days / 9 Nights",
    "price": 2100,
    "rating": 4.9,
    "reviewsCount": 98,
    "departureDate": "10/12/2026",
    "imageUrl": "/images/nepal.webp",
    "gallery": [
      "/images/nepal.webp",
      "/images/swiss-alps.webp",
      "/images/bali.webp"
    ],
    "overview": "Trek through ancient rhododendron forests, prayer-flag laden suspension bridges, and dramatic mountain valleys with up-close views of the worlds highest peaks.",
    "highlights": [
      "Poon Hill sunrise panorama over Annapurna range",
      "Explore UNESCO world heritage sites in Kathmandu",
      "Serene boating on Pokharas Phewa Lake",
      "Mountain tea house cultural stays with Sherpas",
      "Scenic mountain flight past Mount Everest"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kathmandu Arrival & Durbar Square",
        "desc": "Welcome to Nepal with airport transfer and heritage walking tour."
      },
      {
        "day": 2,
        "title": "Scenic Flight to Pokhara & Phewa Lake",
        "desc": "Fly along the Himalayan wall into the lake paradise of Pokhara."
      },
      {
        "day": 3,
        "title": "Trek to Ulleri via Tikhedhunga Steps",
        "desc": "Begin trekking through traditional Gurung mountain farming villages."
      },
      {
        "day": 4,
        "title": "Ghorepani Rhododendron Forest Trail",
        "desc": "Ascend through lush bamboo and ancient mossy forests to Ghorepani."
      },
      {
        "day": 5,
        "title": "Poon Hill Golden Sunrise at 3,210m",
        "desc": "Early morning hike for unforgettable 360-degree views of Dhaulagiri and Annapurna."
      },
      {
        "day": 6,
        "title": "Trek Down to Ghandruk Cultural Village",
        "desc": "Explore local handicraft museums and stone-paved alleys in Ghandruk."
      },
      {
        "day": 7,
        "title": "Return Drive to Pokhara & Relax",
        "desc": "Private jeep transfer back to Pokhara for lakeside cafes and massage."
      },
      {
        "day": 8,
        "title": "Kathmandu Valley Temples & Stupas",
        "desc": "Visit Boudhanath and Swayambhunath Monkey Temple."
      },
      {
        "day": 9,
        "title": "Mount Everest Scenic Flight",
        "desc": "Sunrise aircraft flight getting within touching distance of Everests summit."
      },
      {
        "day": 10,
        "title": "Farewell Nepal & International Departure",
        "desc": "Transfer to Tribhuvan International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "paris-romance",
    "title": "Paris Romance & Art",
    "country": "France",
    "location": "Paris & Versailles",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 2400,
    "rating": 4.9,
    "reviewsCount": 420,
    "departureDate": "05/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Experience the quintessential City of Light. Ascend the Eiffel Tower at sunset, tour the Louvre masterpieces with an art historian, and cruise the Seine under sparkling bridges.",
    "highlights": [
      "Skip-the-line Eiffel Tower summit access",
      "Private Louvre & Musee d Orsay curated tour",
      "Seine River gourmet champagne dinner cruise",
      "Palace of Versailles Hall of Mirrors day trip",
      "Montmartre artisan bakery & wine tasting walk"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Bienvenue a Paris & Seine Cruise",
        "desc": "Check in to luxury boutique hotel near Saint-Germain and enjoy sunset Seine cruise."
      },
      {
        "day": 2,
        "title": "Louvre Masterpieces & Tuileries Gardens",
        "desc": "VIP morning access to the Mona Lisa followed by tea at Angelina."
      },
      {
        "day": 3,
        "title": "Montmartre & Sacre-Coeur Bohemian Walk",
        "desc": "Explore historic artist studios, vineyards, and panorama of Paris from Sacre-Coeur."
      },
      {
        "day": 4,
        "title": "Palace of Versailles Royal Day Trip",
        "desc": "Marvel at royal gilded state apartments and fountains in the vast gardens."
      },
      {
        "day": 5,
        "title": "Eiffel Tower Sunset & Michelin Dinner",
        "desc": "Exclusive summit champagne toast followed by culinary dinner experience."
      },
      {
        "day": 6,
        "title": "Champs-Elysees Shopping & Departure",
        "desc": "Morning patisserie tasting and chauffeur transfer to CDG Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "rome-ancient-wonders",
    "title": "Rome & Ancient Wonders",
    "country": "Italy",
    "location": "Rome & Vatican City",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1950,
    "rating": 4.8,
    "reviewsCount": 380,
    "departureDate": "06/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Step into history across three millennia. Walk the Colosseum gladiatorial arena floor, behold the Sistine Chapel frescoes, and toss a coin in the Trevi Fountain.",
    "highlights": [
      "Colosseum arena floor & Roman Forum VIP tour",
      "Vatican Museums & Sistine Chapel early access",
      "Trastevere evening food tour with wine pairings",
      "Pantheon & Piazza Navona historical walk",
      "Authentic carbonara masterclass with local chef"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Arrival in Eternal City & Trevi Fountain",
        "desc": "Check-in to historic center hotel and evening walk past floodlit Trevi fountain."
      },
      {
        "day": 2,
        "title": "Colosseum & Roman Forum Exploration",
        "desc": "Walk where emperors and gladiators stood with an archaeologist guide."
      },
      {
        "day": 3,
        "title": "Vatican City & Sistine Chapel Grand Tour",
        "desc": "Witness Michelangelos Sistine Chapel ceiling and St. Peters Basilica."
      },
      {
        "day": 4,
        "title": "Trastevere Alleys & Culinary Masterclass",
        "desc": "Taste artisanal cheeses, fresh pasta, and gelato across lively Trastevere piazzas."
      },
      {
        "day": 5,
        "title": "Villa Borghese & Italian Farewell",
        "desc": "Stroll garden galleries before private transfer to Fiumicino Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "tokyo-neon-heritage",
    "title": "Tokyo Neon & Modern Pulse",
    "country": "Japan",
    "location": "Tokyo & Mount Fuji",
    "category": "Luxury",
    "duration": "7 Days / 6 Nights",
    "price": 2650,
    "rating": 4.9,
    "reviewsCount": 295,
    "departureDate": "06/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Where cutting-edge futurism harmonizes with centuries of Zen tranquility. Cross Shibuya Scramble, dine in Shinjuku Michelin sushi bars, and admire Mount Fuji.",
    "highlights": [
      "Shibuya Crossing & teamLab Planets immersive art",
      "Akihabara tech district & historic Asakusa Senso-ji",
      "Private Tsukiji outer market sushi masterclass",
      "Hakone hot springs & Mount Fuji panoramic cruise",
      "Rooftop observation deck at Shibuya Sky"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tokyo Metropolis Arrival & Shibuya Sky",
        "desc": "Arrive at Haneda/Narita and take in neon cityscape from 230 meters up."
      },
      {
        "day": 2,
        "title": "Ancient Senso-ji Temple & Modern Akihabara",
        "desc": "Contrast Tokyos oldest temple with the pulsating center of electronics and anime."
      },
      {
        "day": 3,
        "title": "Tsukiji Seafood Tour & teamLab Planets",
        "desc": "Sample sea urchin and wagyu before stepping into digital crystal art oceans."
      },
      {
        "day": 4,
        "title": "Mount Fuji & Hakone Onsen Day Tour",
        "desc": "Bullet train to Lake Ashi pirate boat cruise with views of majestic Mount Fuji."
      },
      {
        "day": 5,
        "title": "Shinjuku Omoide Yokocho & Robot City",
        "desc": "Walk lantern-lit izakaya alleyways and experience futuristic entertainment."
      },
      {
        "day": 6,
        "title": "Ginza High-End Shopping & Kaiseki Dinner",
        "desc": "Indulge in 10-course seasonal Japanese dining in premier Ginza."
      },
      {
        "day": 7,
        "title": "Sayonara Tokyo Departure",
        "desc": "Airport limousine transfer for your onward flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "new-york-skyline",
    "title": "New York Skyline & Broadway",
    "country": "United States",
    "location": "Manhattan & Brooklyn",
    "category": "Luxury",
    "duration": "6 Days / 5 Nights",
    "price": 2800,
    "rating": 4.8,
    "reviewsCount": 350,
    "departureDate": "07/15/2026",
    "imageUrl": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The energy of the capital of the world. Walk Central Park, view Manhattan from The Edge, enjoy VIP Broadway musical seats, and stroll the Brooklyn Bridge.",
    "highlights": [
      "Top-tier orchestra seats to hit Broadway show",
      "The Edge glass-floor observation deck experience",
      "Statue of Liberty & Ellis Island private ferry",
      "Guided Central Park bicycle & historical walking tour",
      "Sunset walking crossing across Brooklyn Bridge to DUMBO"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Manhattan Arrival & Times Square Lights",
        "desc": "Check in to luxury Midtown hotel and absorb the glowing theater district energy."
      },
      {
        "day": 2,
        "title": "Statue of Liberty & Financial District Walk",
        "desc": "Ferry past Lady Liberty, Wall Street bull, and the 9/11 Memorial."
      },
      {
        "day": 3,
        "title": "The High Line, Chelsea Market & The Edge",
        "desc": "Stroll elevated urban gardens followed by open-air sky deck views at Hudson Yards."
      },
      {
        "day": 4,
        "title": "Central Park & Metropolitan Museum of Art",
        "desc": "Rowboats at the Lake and ancient Egyptian temples inside the MET."
      },
      {
        "day": 5,
        "title": "Brooklyn Bridge & Evening Broadway Show",
        "desc": "Iconic bridge skyline photography and premium musical performance."
      },
      {
        "day": 6,
        "title": "Fifth Avenue Shopping & Departure",
        "desc": "Chauffeur transfer to JFK or Newark International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "dubai-desert-luxury",
    "title": "Dubai Luxury & Desert Safari",
    "country": "United Arab Emirates",
    "location": "Dubai & Palm Jumeirah",
    "category": "Luxury",
    "duration": "6 Days / 5 Nights",
    "price": 3100,
    "rating": 4.9,
    "reviewsCount": 265,
    "departureDate": "08/01/2026",
    "imageUrl": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Ultimate modern luxury in the Arabian Gulf. Ascend Burj Khalifa level 148, dune-bash in red desert sands, and unwind in private overwater villas on Palm Jumeirah.",
    "highlights": [
      "Burj Khalifa At The Top SKY VIP access",
      "Luxury 4x4 desert dune safari with falconry show",
      "Private yacht cruise around Dubai Marina & Palm",
      "Helicopter scenic flight over the World Islands",
      "Shopping at the Dubai Mall and gold & spice souks"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dubai Arrival & Marina Walk Sunset",
        "desc": "Chauffeur transfer to 5-star Palm Jumeirah resort with Arabian Sea vistas."
      },
      {
        "day": 2,
        "title": "Burj Khalifa Top Floor & Dubai Fountain",
        "desc": "Look out from the worlds tallest building and watch evening water shows."
      },
      {
        "day": 3,
        "title": "VIP Desert Safari & Bedouin Camp BBQ",
        "desc": "Sunset camel riding, dune bashing, and starlit feast with cultural performances."
      },
      {
        "day": 4,
        "title": "Private Luxury Yacht Charter at Palm",
        "desc": "Swim in calm waters with champagne lunch against the Ain Dubai backdrop."
      },
      {
        "day": 5,
        "title": "Old Dubai Abra Ride & Gold/Spice Souks",
        "desc": "Traditional wooden boat crossing across Dubai Creek into bustling historic markets."
      },
      {
        "day": 6,
        "title": "Luxury Spa Day & Airport Transfer",
        "desc": "Indulgent hammam treatment before VIP transfer to Dubai International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "cairo-pyramids",
    "title": "Cairo & Great Pyramids",
    "country": "Egypt",
    "location": "Cairo, Giza & Nile",
    "category": "Cultural",
    "duration": "7 Days / 6 Nights",
    "price": 1750,
    "rating": 4.8,
    "reviewsCount": 310,
    "departureDate": "09/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Unlock 5,000 years of civilization. Stand before the Great Sphinx, explore the Grand Egyptian Museum, and sail a traditional felucca along the legendary Nile River.",
    "highlights": [
      "Private tour inside the Great Pyramid of Giza",
      "Grand Egyptian Museum & King Tut treasures",
      "Sunset camel trek across the Giza desert plateau",
      "Traditional wooden felucca sailing on the Nile",
      "Khan el-Khalili bazaar spice and artisan walking tour"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Welcome to Cairo & Nile River Hotel",
        "desc": "Private transfer to 5-star hotel with balcony views over the Nile."
      },
      {
        "day": 2,
        "title": "Pyramids of Giza & The Great Sphinx",
        "desc": "Private Egyptologist guidance through Khufu, Khafre, and the enigmatic Sphinx."
      },
      {
        "day": 3,
        "title": "Grand Egyptian Museum Treasure Galleries",
        "desc": "Behold the golden mask and royal chariots of Pharaoh Tutankhamun."
      },
      {
        "day": 4,
        "title": "Saqqara Step Pyramid & Ancient Memphis",
        "desc": "Discover the oldest stone structure in history in the quiet desert necropolis."
      },
      {
        "day": 5,
        "title": "Historic Islamic Cairo & Khan el-Khalili",
        "desc": "Walk medieval gate towers and shop copper lanterns and perfumes in 14th-century souks."
      },
      {
        "day": 6,
        "title": "Sunset Felucca Sail & Nile Dinner Cruise",
        "desc": "Relax under billowing white canvas on the Nile with Egyptian folk entertainment."
      },
      {
        "day": 7,
        "title": "Cairo Departure",
        "desc": "Assisted transfer to Cairo International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "cape-town-safari",
    "title": "Cape Town & Garden Route",
    "country": "South Africa",
    "location": "Cape Town & Stellenbosch",
    "category": "Adventure",
    "duration": "8 Days / 7 Nights",
    "price": 2450,
    "rating": 4.9,
    "reviewsCount": 215,
    "departureDate": "10/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Where two oceans meet rugged mountains. Ascend Table Mountain by cable car, visit the Boulders Beach penguin colony, and taste fine Pinotage wine in Stellenbosch.",
    "highlights": [
      "Table Mountain revolving cable car ascent",
      "Boulders Beach African penguin colony walk",
      "Cape of Good Hope nature reserve coastal drive",
      "Stellenbosch & Franschhoek vineyard wine tram",
      "Big Five game safari reserve day excursion"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Cape Town Arrival & Waterfront Check-In",
        "desc": "Arrive in the Mother City and settle into V&A Waterfront luxury accommodation."
      },
      {
        "day": 2,
        "title": "Table Mountain & Colorful Bo-Kaap Tour",
        "desc": "360-degree Atlantic panoramas from the summit and cultural cape Malay tasting."
      },
      {
        "day": 3,
        "title": "Cape Peninsula Drive & Boulders Penguins",
        "desc": "Drive Chapmans Peak cliff road and walk boardwalks beside wild penguins."
      },
      {
        "day": 4,
        "title": "Cape Point & Good Hope Lighthouse",
        "desc": "Hike rugged cliffs where the dramatic Atlantic and Indian Oceans converge."
      },
      {
        "day": 5,
        "title": "Cape Winelands Tram in Franschhoek",
        "desc": "Hop-on hop-off open-air wine tram through rolling emerald valleys."
      },
      {
        "day": 6,
        "title": "Private Game Reserve Big Five Safari",
        "desc": "Open-vehicle game drive spotting lions, elephants, rhinos, and giraffes."
      },
      {
        "day": 7,
        "title": "Kirstenbosch Botanical Gardens Canopy Walk",
        "desc": "Walk among the treetops with Table Mountains eastern slopes above."
      },
      {
        "day": 8,
        "title": "Sunset Signal Hill & Cape Town Departure",
        "desc": "Chauffeur transfer to Cape Town International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "rio-de-janeiro",
    "title": "Rio de Janeiro & Copacabana",
    "country": "Brazil",
    "location": "Rio de Janeiro",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 1890,
    "rating": 4.8,
    "reviewsCount": 178,
    "departureDate": "11/02/2026",
    "imageUrl": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The marvelous city of golden sands and forested peaks. Stand beneath Christ the Redeemer, ride the cable car up Sugarloaf Mountain, and dance samba in Lapa.",
    "highlights": [
      "Christ the Redeemer train ascent to Corcovado",
      "Sugarloaf Mountain panoramic cable car journey",
      "Copacabana & Ipanema luxury beachfront stay",
      "Tijuca National Park tropical rainforest jeep tour",
      "Samba dance class and live bossa nova club night"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Rio Arrival & Ipanema Beachfront",
        "desc": "Check-in overlooking Ipanema beach with refreshing caipirinhas."
      },
      {
        "day": 2,
        "title": "Corcovado & Christ the Redeemer",
        "desc": "Cogwheel train through Tijuca rainforest to the wonder of the world."
      },
      {
        "day": 3,
        "title": "Sugarloaf Mountain Sunset & Urca Walk",
        "desc": "Glass cable car ride with breathtaking sunset over Guanabara Bay."
      },
      {
        "day": 4,
        "title": "Santa Teresa & Selaron Mosaic Steps",
        "desc": "Explore historic tram-lined artist quarter and colorful ceramic staircase."
      },
      {
        "day": 5,
        "title": "Tijuca Rainforest Waterfalls & Wildlife",
        "desc": "Open-top jeep excursion spotting toucans, monkeys, and hidden forest waterfalls."
      },
      {
        "day": 6,
        "title": "Copacabana Beach Club Relaxation",
        "desc": "Free day for beachside loungers, coconut water, and sunset churrascaria dinner."
      },
      {
        "day": 7,
        "title": "Galeao Airport Transfer & Farewell",
        "desc": "Chauffeur transfer for your international return flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "sydney-harbour",
    "title": "Sydney Harbour & Coastal Walks",
    "country": "Australia",
    "location": "Sydney & Blue Mountains",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 2750,
    "rating": 4.9,
    "reviewsCount": 240,
    "departureDate": "11/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Sun-soaked lifestyle on the worlds finest natural harbour. Tour inside the iconic Sydney Opera House, take the ferry to Manly, and hike the Blue Mountains.",
    "highlights": [
      "Sydney Opera House architectural & concert hall tour",
      "Sydney Harbour Bridge Climb panoramic summit",
      "Bondi to Coogee clifftop coastal walk",
      "Blue Mountains Three Sisters & Scenic World rail",
      "Manly Beach scenic ferry cruise at sunset"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Sydney Arrival & Circular Quay Views",
        "desc": "Check in to harbour-view luxury suite with direct sights of the Opera House."
      },
      {
        "day": 2,
        "title": "Sydney Opera House Tour & The Rocks Walk",
        "desc": "Discover the engineering marvel and Sydneys historic cobblestone birthplace."
      },
      {
        "day": 3,
        "title": "Sydney Harbour Bridge Climb",
        "desc": "Scale the iconic coat hanger bridge 134 meters above sparkling water."
      },
      {
        "day": 4,
        "title": "Bondi to Bronte & Coogee Coastal Walk",
        "desc": "Ocean rock pools, crashing surf waves, and beachfront flat white coffee."
      },
      {
        "day": 5,
        "title": "Blue Mountains National Park Day Tour",
        "desc": "Ancient eucalyptus forest vistas, waterfalls, and the Three Sisters rock peaks."
      },
      {
        "day": 6,
        "title": "Manly Ferry & Northern Beaches Sunset",
        "desc": "Iconic yellow-and-green ferry ride and seaside dining at Manly wharf."
      },
      {
        "day": 7,
        "title": "Farewell Australia & Kingsford Smith Transfer",
        "desc": "Assisted airport transfer for your departure flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "machu-picchu",
    "title": "Machu Picchu & Sacred Valley",
    "country": "Peru",
    "location": "Cusco, Sacred Valley & Machu Picchu",
    "category": "Adventure",
    "duration": "8 Days / 7 Nights",
    "price": 2350,
    "rating": 4.9,
    "reviewsCount": 310,
    "departureDate": "05/25/2026",
    "imageUrl": "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The lost citadel of the Incas shrouded in Andean cloud forest. Explore Cusco cobblestone palaces, ride the panoramic Vistadome train, and stand in awe of Machu Picchu.",
    "highlights": [
      "Private sunrise tour of Machu Picchu citadel",
      "Panoramic Hiram Bingham / Vistadome train journey",
      "Sacred Valley weaving villages & Pisac ruins",
      "Ollantaytambo fortress and Moray agricultural terraces",
      "Historic colonial Cusco walking tour and alpaca encounters"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Lima to Cusco & Ancient Capital Welcome",
        "desc": "Acclimate with coca tea in a restored 16th-century monastery hotel in Cusco."
      },
      {
        "day": 2,
        "title": "Cusco Plaza de Armas & Sacsayhuaman",
        "desc": "Marvel at colossal interlocking Incan stone megaliths overlooking the city."
      },
      {
        "day": 3,
        "title": "Sacred Valley of the Incas & Pisac Market",
        "desc": "Explore vibrant artisan textile markets and mountainside agricultural terraces."
      },
      {
        "day": 4,
        "title": "Moray Concentric Rings & Maras Salt Mines",
        "desc": "Witness thousands of geometric pink salt evaporation ponds fed by natural brine."
      },
      {
        "day": 5,
        "title": "Vistadome Train to Aguas Calientes",
        "desc": "Glass-ceiling train winding along the foaming Urubamba River through cloud forests."
      },
      {
        "day": 6,
        "title": "Machu Picchu Lost Citadel Sunrise",
        "desc": "Watch the mist lift from the mountain citadel with an expert archaeologist guide."
      },
      {
        "day": 7,
        "title": "Return to Cusco & Farewell Andean Banquet",
        "desc": "Scenic train ride back to Cusco for celebratory traditional Peruvian cuisine."
      },
      {
        "day": 8,
        "title": "Flight to Lima & International Departure",
        "desc": "Domestic connection for onward global flights."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "iceland-aurora",
    "title": "Iceland Northern Lights & Glaciers",
    "country": "Iceland",
    "location": "Reykjavik, Vik & Golden Circle",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 2600,
    "rating": 4.8,
    "reviewsCount": 195,
    "departureDate": "10/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Land of fire and ice under emerald dancing auroras. Soak in the geothermal Blue Lagoon, walk behind roaring waterfalls, and explore blue crystal ice caves.",
    "highlights": [
      "Nightly guided Northern Lights aurora hunting tours",
      "Blue Lagoon geothermal spa premium experience",
      "Golden Circle: Gullfoss, Geysir & Thingvellir",
      "South Coast black sand beach at Reynisfjara",
      "Vatnajokull glacier walk with crampons & ice axes"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Keflavik Arrival & Blue Lagoon Soak",
        "desc": "Bathe in mineral-rich milky cyan waters surrounded by black volcanic moss fields."
      },
      {
        "day": 2,
        "title": "Golden Circle Geysir & Gullfoss Waterfall",
        "desc": "Watch Strokkur geyser erupt 30m high and walk the continental tectonic rift."
      },
      {
        "day": 3,
        "title": "Seljalandsfoss & Skogafoss Waterfalls",
        "desc": "Walk behind the curtain of falling water and feel the mist of South Coast giants."
      },
      {
        "day": 4,
        "title": "Reynisfjara Black Sands & Diamond Beach",
        "desc": "Gaze at basalt sea stacks and sparkling icebergs glistening on volcanic black sand."
      },
      {
        "day": 5,
        "title": "Crystal Ice Cave Exploration & Aurora Hunt",
        "desc": "Step into deep electric blue glacial caves before an evening under northern lights."
      },
      {
        "day": 6,
        "title": "Reykjavik City Walk & Departure",
        "desc": "Colorful corrugated street walk and transfer to Keflavik Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "maldives-overwater",
    "title": "Maldives Overwater Bliss",
    "country": "Maldives",
    "location": "North Male Atoll",
    "category": "Beach",
    "duration": "6 Days / 5 Nights",
    "price": 3400,
    "rating": 5.0,
    "reviewsCount": 185,
    "departureDate": "11/12/2026",
    "imageUrl": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Pure barefoot luxury in turquoise lagoons. Stay in private overwater bungalows with glass floor panels, direct ocean access, and underwater fine dining.",
    "highlights": [
      "Private luxury overwater villa with plunge pool",
      "Seaplane scenic flight across emerald coral atolls",
      "Snorkeling with sea turtles and gentle reef sharks",
      "Underwater restaurant dining experience 5m submerged",
      "Private sunset dolphin cruise with champagne"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Male Arrival & Seaplane Transfer to Resort",
        "desc": "Aerial panoramas of turquoise rings before touchdown on private resort lagoon."
      },
      {
        "day": 2,
        "title": "House Reef Snorkeling & Sun Deck Lounging",
        "desc": "Step straight from your private villa ladder into crystal clear coral gardens."
      },
      {
        "day": 3,
        "title": "Submerged Ocean Dining & Coral Restoration",
        "desc": "360-degree glass dining experience watching tropical reef life swim past."
      },
      {
        "day": 4,
        "title": "Sunset Dolphin Watching Catamaran Sail",
        "desc": "Spot pods of spinner dolphins jumping in golden sunset ocean waves."
      },
      {
        "day": 5,
        "title": "Overwater Spa & Sandbank Candlelit Dinner",
        "desc": "Couples aromatherapy massage and private isolated sandbank dining under stars."
      },
      {
        "day": 6,
        "title": "Seaplane Return & International Departure",
        "desc": "Scenic seaplane connection to Velana International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "london-royal-heritage",
    "title": "London Royal Heritage",
    "country": "United Kingdom",
    "location": "London & Windsor",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 2550,
    "rating": 4.8,
    "reviewsCount": 270,
    "departureDate": "06/22/2026",
    "imageUrl": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Royal pageantry and modern British culture. Visit the Tower of London Crown Jewels, witness Changing of the Guard, and day-trip to Windsor Castle.",
    "highlights": [
      "Tower of London & Crown Jewels early access",
      "Windsor Castle state apartments royal day tour",
      "Traditional afternoon tea at The Ritz London",
      "Westminster Abbey royal tombs & poet corner walk",
      "Thames river cruise past Big Ben & Tower Bridge"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "London Arrival & Thames Evening Stroll",
        "desc": "Check-in to Mayfair hotel and walk past the illuminated London Eye."
      },
      {
        "day": 2,
        "title": "Buckingham Palace & Westminster Abbey",
        "desc": "Watch the Changing of the Guard and stand where British monarchs are crowned."
      },
      {
        "day": 3,
        "title": "Tower of London & Afternoon Tea at The Ritz",
        "desc": "View the glittering Crown Jewels followed by classic scones and finger sandwiches."
      },
      {
        "day": 4,
        "title": "Windsor Castle Royal Residence Day Trip",
        "desc": "Tour the oldest inhabited castle in the world and St. Georges Chapel."
      },
      {
        "day": 5,
        "title": "British Museum & West End Theater Show",
        "desc": "See the Rosetta Stone and enjoy award-winning West End theater drama."
      },
      {
        "day": 6,
        "title": "Covent Garden & Heathrow Departure",
        "desc": "Browse market crafts before private transfer to Heathrow Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "banff-rockies",
    "title": "Banff & Canadian Rockies",
    "country": "Canada",
    "location": "Banff & Lake Louise, Alberta",
    "category": "Mountain",
    "duration": "7 Days / 6 Nights",
    "price": 2850,
    "rating": 4.9,
    "reviewsCount": 165,
    "departureDate": "07/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Turquoise glacial lakes framed by towering Rocky Mountain peaks. Canoe Moraine Lake, drive the Icefields Parkway, and relax in Banff Upper Hot Springs.",
    "highlights": [
      "Canoeing on the iridescent turquoise waters of Moraine Lake",
      "Lake Louise lakeshore trail & historic Fairmont chateau",
      "Columbia Icefield glacier all-terrain Ice Explorer tour",
      "Banff Gondola summit view over six mountain ranges",
      "Wildlife spotting for elk, bighorn sheep, and grizzly bears"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Calgary Arrival & Scenic Drive to Banff",
        "desc": "Arrive in Alberta and drive through the dramatic Rocky Mountain front range."
      },
      {
        "day": 2,
        "title": "Banff Townsite & Sulphur Mountain Gondola",
        "desc": "Take the cable car to 2,281 meters and soak in geothermal hot springs."
      },
      {
        "day": 3,
        "title": "Lake Louise & Lake Agnes Tea House Hike",
        "desc": "Admire the iconic glacier backdrop and hike to a rustic wooden alpine tea house."
      },
      {
        "day": 4,
        "title": "Moraine Lake & Valley of the Ten Peaks",
        "desc": "Paddle cedar canoes on the worlds most photographed turquoise glacial water."
      },
      {
        "day": 5,
        "title": "Icefields Parkway & Athabasca Glacier Walk",
        "desc": "Travel one of the worlds most scenic highways and walk directly on ancient ice."
      },
      {
        "day": 6,
        "title": "Johnston Canyon Catwalks & Lower Falls",
        "desc": "Hike steel catwalks suspended inside dramatic limestone canyon gorges."
      },
      {
        "day": 7,
        "title": "Bow Valley Scenic Drive & Calgary Departure",
        "desc": "Scenic morning drive back to Calgary International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "amalfi-coast-capri",
    "title": "Amalfi Coast & Capri Escape",
    "country": "Italy",
    "location": "Positano, Amalfi & Capri",
    "category": "Luxury",
    "duration": "6 Days / 5 Nights",
    "price": 3200,
    "rating": 4.9,
    "reviewsCount": 210,
    "departureDate": "06/28/2026",
    "imageUrl": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Cliff-hugging pastel villages, lemon groves, and sparkling sapphire seas. Private yacht charter to the Blue Grotto of Capri and clifftop dining in Positano.",
    "highlights": [
      "Private speedboat cruise around Isle of Capri & Faraglioni",
      "Swim inside the glowing Blue & Green Sea Grottos",
      "Boutique cliffside hotel stay in Positano with sea balcony",
      "Path of the Gods clifftop panoramic hiking trail",
      "Limoncello tasting in private Sorrento lemon orchards"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Naples Arrival & Transfer to Positano",
        "desc": "Scenic winding coastal drive to your cliffside terrace overlooking the Mediterranean."
      },
      {
        "day": 2,
        "title": "Positano Beach & Boutiques Walk",
        "desc": "Explore cascading bougainvillea alleys, linen stores, and Spiaggia Grande."
      },
      {
        "day": 3,
        "title": "Private Capri Day Cruise & Blue Grotto",
        "desc": "Sail past the iconic Faraglioni rock arches and swim in azure sea caves."
      },
      {
        "day": 4,
        "title": "Path of the Gods Scenic Trek & Ravello",
        "desc": "Hike the clifftop ridge followed by romantic gardens of Villa Rufolo in Ravello."
      },
      {
        "day": 5,
        "title": "Amalfi Cathedral & Lemon Farm Feast",
        "desc": "Visit 9th-century Arab-Norman cathedral and enjoy fresh handmade pasta with lemons."
      },
      {
        "day": 6,
        "title": "Naples Transfer & Departure",
        "desc": "Private chauffeur transfer to Naples International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "barcelona-gaudi",
    "title": "Barcelona Gaud\u00ed & Mediterranean",
    "country": "Spain",
    "location": "Barcelona & Costa Brava",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1980,
    "rating": 4.8,
    "reviewsCount": 260,
    "departureDate": "07/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Whimsical modernist architecture meeting sun-drenched Catalan beaches. Skip the line at Sagrada Fam\u00edlia, stroll the Gothic Quarter, and savor tapas at La Boqueria.",
    "highlights": [
      "Sagrada Fam\u00edlia tower access & architectural guided tour",
      "Park G\u00fcell colorful mosaic terraces & city views",
      "Gothic Quarter & El Born evening tapas & sangria crawl",
      "La Boqueria market culinary chef tour",
      "Catamaran sailing along the Barcelona coastline"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Barcelona Arrival & Passeig de Gr\u00e0cia",
        "desc": "Check-in near Casa Batll\u00f3 and stroll past illuminated modernist facades."
      },
      {
        "day": 2,
        "title": "Sagrada Fam\u00edlia & Recinte Modernista",
        "desc": "Step into Gaud\u00eds forest of stone columns and breathtaking stained glass light."
      },
      {
        "day": 3,
        "title": "Park G\u00fcell & Gr\u00e0cia Neighborhood",
        "desc": "Panoramic vistas of the city and Mediterranean from mosaic serpentine benches."
      },
      {
        "day": 4,
        "title": "Gothic Quarter & Evening Tapas Tour",
        "desc": "Wander Roman city walls and sample jam\u00f3n ib\u00e9rico and patatas bravas."
      },
      {
        "day": 5,
        "title": "Barceloneta Beach & Sunset Sail",
        "desc": "Relax on Mediterranean sands followed by private sailboat tour with cava."
      },
      {
        "day": 6,
        "title": "Montju\u00efc Castle & El Prat Departure",
        "desc": "Cable car up Montju\u00efc mountain before transfer to Barcelona Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "queenstown-adventure",
    "title": "Queenstown Alpine Adrenaline",
    "country": "New Zealand",
    "location": "Queenstown & Milford Sound",
    "category": "Adventure",
    "duration": "7 Days / 6 Nights",
    "price": 2700,
    "rating": 4.9,
    "reviewsCount": 175,
    "departureDate": "11/15/2026",
    "imageUrl": "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The adventure capital of the planet framed by The Remarkables mountain range and crystal Lake Wakatipu. Cruise Milford Sound and experience thrilling canyon jet boats.",
    "highlights": [
      "Milford Sound nature cruise beneath sheer glacier cliffs",
      "Shotover River high-speed canyon jet boat ride",
      "Skyline Gondola & Luge tracks overlooking Lake Wakatipu",
      "Central Otago Pinot Noir boutique winery tour",
      "Scenic flight over Southern Alps snowfields"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Queenstown Arrival & Lakeside Check-In",
        "desc": "Arrive in scenic Otago and stroll the vibrant lakeside restaurant promenade."
      },
      {
        "day": 2,
        "title": "Skyline Gondola & Shotover Jet Thrill",
        "desc": "Panoramic cable car vistas followed by 360-degree spins in river canyons."
      },
      {
        "day": 3,
        "title": "Milford Sound Expedition",
        "desc": "Scenic drive through Homer Tunnel and cruise under cascading glacier waterfalls."
      },
      {
        "day": 4,
        "title": "Arrowtown Gold Mining Village & River Trail",
        "desc": "Historic 1860s cottages and tranquil river walking tracks."
      },
      {
        "day": 5,
        "title": "Gibbston Valley Wine Tour & Bungee Watching",
        "desc": "World-class cool-climate Pinot Noir and Kawarau Bridge historic jump site."
      },
      {
        "day": 6,
        "title": "TSS Earnslaw Vintage Steamship & Farm",
        "desc": "Cruise across Lake Wakatipu to high country sheep station for gourmet BBQ."
      },
      {
        "day": 7,
        "title": "Scenic Alpine Farewell & Departure",
        "desc": "Transfer to Queenstown Airport with mountain takeoff views."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "serengeti-safari",
    "title": "Serengeti Great Migration",
    "country": "Tanzania",
    "location": "Serengeti & Ngorongoro Crater",
    "category": "Adventure",
    "duration": "7 Days / 6 Nights",
    "price": 3600,
    "rating": 5.0,
    "reviewsCount": 160,
    "departureDate": "08/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Witness natures greatest spectacle. Millions of wildebeest and zebras crossing endless savannas, pride of lions resting on kopjes, and the extinct Ngorongoro volcanic crater.",
    "highlights": [
      "Sunrise hot air balloon flight over Serengeti plains",
      "Full-day game drive across Ngorongoro Crater floor",
      "Track the Great Migration herds and Mara River crossings",
      "Stay in luxury eco-tented camps under star-filled skies",
      "Cultural visit with traditional Maasai tribal warriors"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kilimanjaro Arrival & Fly to Serengeti",
        "desc": "Bush plane flight landing in the heart of endless golden grasslands."
      },
      {
        "day": 2,
        "title": "Central Serengeti Big Cat Safari",
        "desc": "Spot leopards in acacia trees and cheetahs stalking gazelles on the plains."
      },
      {
        "day": 3,
        "title": "Sunrise Balloon Safari & Champagne Breakfast",
        "desc": "Float silently over herds of elephants and zebras in morning golden light."
      },
      {
        "day": 4,
        "title": "The Great Migration Tracking",
        "desc": "Follow thundering herds of wildebeest across rivers and valleys."
      },
      {
        "day": 5,
        "title": "Drive to Ngorongoro Conservation Area",
        "desc": "Scenic climb to the crater rim with breathtaking views down into the caldera."
      },
      {
        "day": 6,
        "title": "Ngorongoro Crater Floor Safari",
        "desc": "Dense wildlife haven with black rhinos, hippos, flamingos, and massive tuskers."
      },
      {
        "day": 7,
        "title": "Arusha Transfer & International Departure",
        "desc": "Fly back to Kilimanjaro Airport for departure."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "phuket-phi-phi",
    "title": "Phuket & Phi Phi Island Cruise",
    "country": "Thailand",
    "location": "Phuket, Phi Phi & Phang Nga",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 1350,
    "rating": 4.8,
    "reviewsCount": 340,
    "departureDate": "11/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Soaring emerald limestone karsts rising out of calm Andaman waters. Island-hop by speedboat to Maya Bay, sea canoe in hidden lagoons, and relax on white sands.",
    "highlights": [
      "Speedboat island tour to Phi Phi Don & Maya Bay",
      "Phang Nga Bay sea canoeing through James Bond Island caves",
      "Private beachfront pool villa resort in Phuket",
      "Old Phuket Town Sino-Portuguese heritage food tour",
      "Ethical elephant sanctuary interactive morning visit"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Phuket Arrival & Luxury Resort Welcome",
        "desc": "Private transfer to cliffside resort in Kata Noi with sunset Andaman views."
      },
      {
        "day": 2,
        "title": "Phi Phi Islands & Maya Bay Snorkeling",
        "desc": "Explore iconic Maya Bay and snorkel with vibrant tropical parrotfish."
      },
      {
        "day": 3,
        "title": "Phang Nga Bay & Sea Cave Canoeing",
        "desc": "Paddle through dark tidal limestone caves into tranquil sunlit lagoons."
      },
      {
        "day": 4,
        "title": "Ethical Elephant Sanctuary Morning",
        "desc": "Feed, walk beside, and bathe rescued elephants in natural jungle pools."
      },
      {
        "day": 5,
        "title": "Old Phuket Town & Big Buddha Viewpoint",
        "desc": "Pastel shophouse walking tour and panoramic island views from Big Buddha."
      },
      {
        "day": 6,
        "title": "Sunset Catamaran Cruise to Promthep Cape",
        "desc": "Golden hour sailing with fresh grilled seafood and swimming."
      },
      {
        "day": 7,
        "title": "Thai Spa & Phuket International Departure",
        "desc": "Traditional Thai massage before transfer to Phuket Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "petra-wadi-rum",
    "title": "Petra & Wadi Rum Desert Voyage",
    "country": "Jordan",
    "location": "Amman, Petra, Wadi Rum & Dead Sea",
    "category": "Adventure",
    "duration": "7 Days / 6 Nights",
    "price": 2200,
    "rating": 4.9,
    "reviewsCount": 180,
    "departureDate": "10/22/2026",
    "imageUrl": "https://images.unsplash.com/photo-1579606032834-d40770b4ac7a?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1579606032834-d40770b4ac7a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Walk through the narrow Siq canyon as the rose-red Treasury of Petra emerges before your eyes. Camp under martian skies in Wadi Rum and float in the Dead Sea.",
    "highlights": [
      "Walk the 1.2km candlelit Siq to Petra Treasury by Night",
      "Hike up 850 steps to the colossal Petra Monastery (Ad-Deir)",
      "4x4 desert safari across the red dunes of Wadi Rum",
      "Overnight glamping in luxury Martian dome desert tents",
      "Effortless floating in the mineral-rich hypersaline Dead Sea"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Amman Arrival & Roman Theater",
        "desc": "Welcome to Jordan with airport transfer and ancient citadel sunset views."
      },
      {
        "day": 2,
        "title": "King\u2019s Highway & Arrival in Wadi Musa (Petra)",
        "desc": "Drive through scenic desert canyons to the gates of Petra."
      },
      {
        "day": 3,
        "title": "Full Day Exploring Rose-Red City of Petra",
        "desc": "Walk the Siq, marvel at the Treasury, Royal Tombs, and climb to the Monastery."
      },
      {
        "day": 4,
        "title": "Wadi Rum 4x4 Safari & Martian Camp",
        "desc": "Jeep tour through towering red sandstone monoliths and Bedouin tea by fire."
      },
      {
        "day": 5,
        "title": "Desert Sunrise & Drive to Dead Sea",
        "desc": "Camel ride at dawn before descending to the lowest point on Earth (-430m)."
      },
      {
        "day": 6,
        "title": "Floating in Dead Sea & Mud Treatment",
        "desc": "Weightless floating in therapeutic mineral water and luxury resort spa."
      },
      {
        "day": 7,
        "title": "Amman Airport Transfer & Farewell",
        "desc": "Private transfer to Queen Alia International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "maui-hawaii",
    "title": "Maui & Hawaiian Volcanoes",
    "country": "United States",
    "location": "Maui & Haleakala, Hawaii",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 3150,
    "rating": 4.9,
    "reviewsCount": 225,
    "departureDate": "09/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Pacific paradise of cascading waterfalls, black sand beaches, and volcanic craters. Drive the iconic Road to Hana and watch the sunrise above the clouds on Haleakal\u0101.",
    "highlights": [
      "Haleakal\u0101 National Park sunrise above the clouds at 10,000 ft",
      "Scenic drive along the legendary winding Road to Hana",
      "Snorkeling at Molokini crater marine reserve with green turtles",
      "Authentic beachfront Polynesian luau and fire knife dance",
      "Whale watching catamaran cruise (seasonal) in Maalaea Bay"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Kahului Arrival & Wailea Resort Check-in",
        "desc": "Fresh flower lei greeting and oceanfront check-in in sunny south Maui."
      },
      {
        "day": 2,
        "title": "Molokini Crater Catamaran Snorkel",
        "desc": "Crystal water with 150-ft visibility and dozens of tropical fish species."
      },
      {
        "day": 3,
        "title": "The Road to Hana Epic Scenic Drive",
        "desc": "620 curves, 59 bridges, bamboo forests, and waterfalls plunging into pools."
      },
      {
        "day": 4,
        "title": "Waianapanapa Black Sand Beach & Sea Caves",
        "desc": "Dramatic contrast of jet-black volcanic pebbles and emerald rainforest."
      },
      {
        "day": 5,
        "title": "Haleakal\u0101 Volcano Sunrise & Upcountry Farms",
        "desc": "Early morning golden light across volcanic cinder cones and lavender fields."
      },
      {
        "day": 6,
        "title": "Kaanapali Beach Lounging & Sunset Luau",
        "desc": "Traditional roast pig feast, Polynesian storytelling, and ukulele music."
      },
      {
        "day": 7,
        "title": "Aloha Maui & Kahului Airport Departure",
        "desc": "Transfer to OGG Airport for your return flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "dubrovnik-adriatic",
    "title": "Dubrovnik & Adriatic Coast",
    "country": "Croatia",
    "location": "Dubrovnik & Kor\u010dula",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1900,
    "rating": 4.8,
    "reviewsCount": 210,
    "departureDate": "06/15/2026",
    "imageUrl": "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The Pearl of the Adriatic surrounded by medieval stone ramparts. Walk atop centuries-old fortress walls, kayak around Lokrum Island, and swim in clear turquoise seas.",
    "highlights": [
      "Walk the 2km historic medieval city walls of Dubrovnik",
      "Cable car to Mount Sr\u0111 for panoramic Adriatic sunset",
      "Sea kayaking tour around Lokrum Island and hidden sea caves",
      "Day trip cruise to the Elaphiti Islands (Kolo\u010dep, \u0160ipan, Lopud)",
      "Fresh seafood and Dinga\u010d wine tasting in Dalmatian taverns"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dubrovnik Arrival & Stradun Evening Walk",
        "desc": "Check in to luxury hotel overlooking Old Town and walk polished limestone streets."
      },
      {
        "day": 2,
        "title": "City Walls Walking Tour & Fort Lovrijenac",
        "desc": "Panoramic views of terracotta roofs and crashing blue waves below."
      },
      {
        "day": 3,
        "title": "Sea Kayaking to Betina Cave & Lokrum",
        "desc": "Paddle under sheer fortress cliffs into isolated pebble beaches."
      },
      {
        "day": 4,
        "title": "Elaphiti Islands Three-Island Boat Cruise",
        "desc": "Swim in hidden bays, explore olive groves, and enjoy fresh grilled sea bass."
      },
      {
        "day": 5,
        "title": "Mount Sr\u0111 Cable Car & Farewell Dalmatian Dinner",
        "desc": "Sunset cocktails at the summit overlooking the Dalmatian archipelago."
      },
      {
        "day": 6,
        "title": "Dubrovnik Airport Transfer & Departure",
        "desc": "Chauffeur transfer for your flight home."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "prague-golden-spires",
    "title": "Prague Castle & Golden Spires",
    "country": "Czech Republic",
    "location": "Prague & \u010cesk\u00fd Krumlov",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1450,
    "rating": 4.8,
    "reviewsCount": 245,
    "departureDate": "09/01/2026",
    "imageUrl": "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Fairy-tale city of a hundred spires. Cross Charles Bridge at dawn, tour the ancient courtyards of Prague Castle, and marvel at the 600-year-old Astronomical Clock.",
    "highlights": [
      "Charles Bridge dawn photography tour",
      "Prague Castle complex & St. Vitus Cathedral",
      "Old Town Square & Astronomical Clock mechanical show",
      "Day excursion to UNESCO medieval gem \u010cesk\u00fd Krumlov",
      "Historic river cruise on the Vltava with Czech craft beer"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Prague Arrival & Old Town Square",
        "desc": "Settle into historic center hotel and watch the Astronomical Clock chime."
      },
      {
        "day": 2,
        "title": "Charles Bridge & Prague Castle Grounds",
        "desc": "Walk past baroque statues and explore Gothic stained glass in St. Vitus."
      },
      {
        "day": 3,
        "title": "\u010cesk\u00fd Krumlov Fairytale Castle Day Trip",
        "desc": "Meander winding cobblestone streets wrapped by the horseshoe Vltava river."
      },
      {
        "day": 4,
        "title": "Jewish Quarter History & Vltava Cruise",
        "desc": "Visit preserved synagogues and enjoy twilight boat cruise under bridge arches."
      },
      {
        "day": 5,
        "title": "Pet\u0159\u00edn Hill Views & V\u00e1clav Havel Departure",
        "desc": "Panoramic city overlook before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "taj-mahal-rajasthan",
    "title": "Taj Mahal & Royal Rajasthan",
    "country": "India",
    "location": "Delhi, Agra & Jaipur",
    "category": "Cultural",
    "duration": "7 Days / 6 Nights",
    "price": 1650,
    "rating": 4.9,
    "reviewsCount": 380,
    "departureDate": "10/15/2026",
    "imageUrl": "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The iconic Golden Triangle of India. Stand before the white marble monument of love at sunrise, ride up to Amber Fort, and explore the Pink City of Jaipur.",
    "highlights": [
      "Sunrise private tour of the Taj Mahal in Agra",
      "Agra Fort red sandstone royal palaces & Yamuna views",
      "Amber Fort hilltop palace and mirror mosaic hall in Jaipur",
      "Hawa Mahal (Palace of Winds) & City Palace museum",
      "Old Delhi rickshaw ride through Chandni Chowk spice markets"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Delhi Arrival & Luxury Heritage Hotel",
        "desc": "Welcome to India with traditional marigold garland and private transfer."
      },
      {
        "day": 2,
        "title": "Old & New Delhi City Tour",
        "desc": "Rickshaw through bustling spices, visit Jama Masjid and India Gate."
      },
      {
        "day": 3,
        "title": "Express Train to Agra & Agra Fort",
        "desc": "Travel to the Mughal capital and explore emperor Shah Jahans palace."
      },
      {
        "day": 4,
        "title": "Taj Mahal Sunrise & Drive to Jaipur",
        "desc": "Watch the white marble glow pink in morning light before driving to the Pink City."
      },
      {
        "day": 5,
        "title": "Amber Fort & Jal Mahal Water Palace",
        "desc": "Ascend hilltop ramparts to explore Sheesh Mahal and scenic lake palaces."
      },
      {
        "day": 6,
        "title": "Hawa Mahal, City Palace & Textile Crafts",
        "desc": "Photograph honeycomb pink facade and observe hand block-printing artisans."
      },
      {
        "day": 7,
        "title": "Return to Delhi & International Departure",
        "desc": "Chauffeur transfer to Indira Gandhi International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "norwegian-fjords",
    "title": "Norwegian Fjords Grand Voyage",
    "country": "Norway",
    "location": "Bergen & Geirangerfjord",
    "category": "Mountain",
    "duration": "7 Days / 6 Nights",
    "price": 2890,
    "rating": 4.9,
    "reviewsCount": 190,
    "departureDate": "07/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Deep blue glacier-carved waterways surrounded by vertical granite walls and roaring waterfalls. Cruise UNESCO Geirangerfjord and ride the Fl\u00e5m railway.",
    "highlights": [
      "Geirangerfjord scenic fjord cruise past Seven Sisters waterfalls",
      "Fl\u00e5m Railway steep mountain rail journey through snow peaks",
      "N\u00e6r\u00f8yfjord electric zero-emission quiet fjord sailing",
      "Bryggen Hanseatic wharf colorful wooden houses in Bergen",
      "Stegastein viewpoint platform suspended 650m above the fjord"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Bergen Arrival & Bryggen Wharf Walk",
        "desc": "Check-in in the fjord capital and explore historic UNESCO timber warehouses."
      },
      {
        "day": 2,
        "title": "Fl\u00e5m Railway & N\u00e6r\u00f8yfjord Cruise",
        "desc": "Ascend through dramatic gorges on the worlds steepest standard-gauge railway."
      },
      {
        "day": 3,
        "title": "Stegastein Lookout & Aurland Fjord",
        "desc": "Step onto panoramic glass cantilevered platform hovering over deep fjord water."
      },
      {
        "day": 4,
        "title": "Geirangerfjord UNESCO Cruise",
        "desc": "Sail past sheer cliffs and cascading Seven Sisters and Suitor waterfalls."
      },
      {
        "day": 5,
        "title": "Eagle Road & Trollstigen Mountain Pass",
        "desc": "Eleven dramatic hairpin bends with panoramic mountain and valley views."
      },
      {
        "day": 6,
        "title": "Fjord Kayaking & Briksdal Glacier Excursion",
        "desc": "Paddle calm waters and walk to the foot of blue glacial tongues."
      },
      {
        "day": 7,
        "title": "Bergen Return & Flesland Airport Departure",
        "desc": "Scenic train return for your outbound flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "seychelles-sanctuary",
    "title": "Seychelles Granite Sanctuary",
    "country": "Seychelles",
    "location": "Mah\u00e9, Praslin & La Digue",
    "category": "Beach",
    "duration": "8 Days / 7 Nights",
    "price": 3500,
    "rating": 5.0,
    "reviewsCount": 140,
    "departureDate": "10/08/2026",
    "imageUrl": "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Pink granite boulders, powdery silver beaches, and rare giant tortoises. Unwind on Anse Source d Argent and explore the primeval palm forest of Vall\u00e9e de Mai.",
    "highlights": [
      "Bicycle tour to iconic Anse Source d\u2019Argent in La Digue",
      "UNESCO Vall\u00e9e de Mai forest home of the rare Coco de Mer",
      "Catamaran sailing between uninhabited tropical granite islands",
      "Meet wild Aldabra giant tortoises roaming freely",
      "Private beachfront villa with personal butler service"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Mah\u00e9 Arrival & Ferry to Praslin Island",
        "desc": "Scenic catamaran transfer to secluded luxury beach resort in Praslin."
      },
      {
        "day": 2,
        "title": "Anse Lazio Beach & Snorkeling",
        "desc": "Swim in calm turquoise waters ranked among the finest beaches on Earth."
      },
      {
        "day": 3,
        "title": "Vall\u00e9e de Mai Prehistoric Palm Forest",
        "desc": "Guided walk through ancient jungle to see the unique Coco de Mer nuts."
      },
      {
        "day": 4,
        "title": "La Digue Island Bike Tour & Giant Tortoises",
        "desc": "Cycle past vanilla plantations to granite boulders of Anse Source d Argent."
      },
      {
        "day": 5,
        "title": "Curieuse Island Marine Park Excursion",
        "desc": "Feed giant Aldabra tortoises and snorkel over vibrant coral gardens."
      },
      {
        "day": 6,
        "title": "Catamaran Cruise & BBQ on Uninhabited Isle",
        "desc": "Fresh grilled red snapper and tropical fruit on secluded white sands."
      },
      {
        "day": 7,
        "title": "Mah\u00e9 Island Victoria Market Tour",
        "desc": "Explore vibrant colonial clocktower and Creole spice markets."
      },
      {
        "day": 8,
        "title": "Seychelles Farewell & Departure",
        "desc": "VIP lounge transfer at Mah\u00e9 International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "bora-bora-lagoon",
    "title": "Bora Bora Lagoon Resort",
    "country": "French Polynesia",
    "location": "Bora Bora & Mount Otemanu",
    "category": "Luxury",
    "duration": "6 Days / 5 Nights",
    "price": 3800,
    "rating": 5.0,
    "reviewsCount": 160,
    "departureDate": "09/12/2026",
    "imageUrl": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The jewel of the South Pacific. Overwater bungalows perched above fifty shades of blue, with the dramatic emerald peak of Mount Otemanu standing sentinel.",
    "highlights": [
      "Luxury overwater bungalow with direct lagoon ladder",
      "Snorkel with gentle stingrays and blacktip reef sharks",
      "Canoe breakfast delivered right to your villa balcony",
      "4x4 Jeep tour around Mount Otemanu volcanic ridge",
      "Sunset catamaran cruise with Polynesian ukulele music"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tahiti to Bora Bora Flight & Boat Arrival",
        "desc": "Spectacular aerial views of the barrier reef before private boat check-in."
      },
      {
        "day": 2,
        "title": "Shark & Stingray Lagoon Snorkel Safari",
        "desc": "Wade in waist-deep warm turquoise waters with friendly marine life."
      },
      {
        "day": 3,
        "title": "Canoe Breakfast & Spa Pampering",
        "desc": "Fresh tropical breakfast delivered by outrigger canoe to your sundeck."
      },
      {
        "day": 4,
        "title": "Mount Otemanu 4x4 Off-Road Adventure",
        "desc": "Ascend rugged trails for sweeping panoramas across the entire lagoon."
      },
      {
        "day": 5,
        "title": "Private Motu Picnic & Sunset Champagne",
        "desc": "Isolated islet lunch with grilled mahi-mahi and coconut water."
      },
      {
        "day": 6,
        "title": "Polynesian Farewell & Departure",
        "desc": "Boat transfer to Bora Bora Airport for flight to Papeete."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "lake-como-bellagio",
    "title": "Lake Como & Bellagio Retreat",
    "country": "Italy",
    "location": "Bellagio, Varenna & Como",
    "category": "Luxury",
    "duration": "5 Days / 4 Nights",
    "price": 2650,
    "rating": 4.9,
    "reviewsCount": 210,
    "departureDate": "06/12/2026",
    "imageUrl": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Aristocratic villas, botanical waterfront gardens, and Alpine peaks mirrored in glassy waters. Cruise on a vintage wooden Riva boat between Bellagio and Varenna.",
    "highlights": [
      "Private classic Riva wooden motorboat lake tour",
      "Villa del Balbianello gardens and historic film location",
      "Boutique lakefront hotel stay in picturesque Bellagio",
      "Ferry hopping between Varenna, Menaggio, and Tremezzo",
      "Wine and artisan cheese tasting on a private terrace"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Milan to Lake Como & Bellagio Arrival",
        "desc": "Private transfer to lakefront grand hotel in the Pearl of Lake Como."
      },
      {
        "day": 2,
        "title": "Villa del Balbianello & Villa Carlotta",
        "desc": "Walk classical terraced gardens filled with azaleas and ancient statues."
      },
      {
        "day": 3,
        "title": "Vintage Riva Boat Private Cruise",
        "desc": "Glide past grand palazzos and celebrity villas in style with prosecco."
      },
      {
        "day": 4,
        "title": "Varenna Fishermans Walk & Castello di Vezio",
        "desc": "Explore cobblestone alleys and medieval fortress with lake vistas."
      },
      {
        "day": 5,
        "title": "Como Town Silk Boutiques & Departure",
        "desc": "Morning scenic ferry ride before transfer to Milan Malpensa Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "marrakech-medina",
    "title": "Marrakech Medina & Atlas Magic",
    "country": "Morocco",
    "location": "Marrakech & High Atlas Mountains",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1600,
    "rating": 4.8,
    "reviewsCount": 275,
    "departureDate": "10/02/2026",
    "imageUrl": "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Ochre palaces, fragrant spice souks, and snow-dusted Atlas mountains. Stay in a peaceful courtyard riad, wander Jardin Majorelle, and taste saffron tagines.",
    "highlights": [
      "Stay in an authentic luxury traditional mosaic riad",
      "Jardin Majorelle & Yves Saint Laurent museum visit",
      "Guided labyrinth walking tour of Marrakech souks",
      "Jemaa el-Fnaa night square food stalls and musicians",
      "High Atlas Mountains & Berber village day excursion"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Marrakech Arrival & Traditional Riad Tea",
        "desc": "Check-in to mosaic courtyard riad with fresh mint tea and almond pastries."
      },
      {
        "day": 2,
        "title": "Bahia Palace & Koutoubia Mosque Grounds",
        "desc": "Admire intricate zellij tilework, carved cedar wood, and fragrant gardens."
      },
      {
        "day": 3,
        "title": "Jardin Majorelle & Souk Artisan Walking Tour",
        "desc": "Cobalt blue botanical gardens followed by spice and leather craftsmen."
      },
      {
        "day": 4,
        "title": "High Atlas Mountains & Ourika Valley Day Trip",
        "desc": "Hike past mountain streams and have lunch in a Berber mudbrick village."
      },
      {
        "day": 5,
        "title": "Moroccan Cooking Class & Luxury Hammam Spa",
        "desc": "Learn to make slow-cooked lamb tagine followed by eucalyptus scrub."
      },
      {
        "day": 6,
        "title": "Jemaa el-Fnaa Farewell & Menara Departure",
        "desc": "Morning market shopping and transfer to Marrakech Menara Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "cappadocia-balloons",
    "title": "Cappadocia Balloon Magic",
    "country": "Turkey",
    "location": "G\u00f6reme & Fairy Chimneys",
    "category": "Adventure",
    "duration": "5 Days / 4 Nights",
    "price": 1550,
    "rating": 4.9,
    "reviewsCount": 330,
    "departureDate": "09/25/2026",
    "imageUrl": "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Hundreds of vibrant hot air balloons rising over surreal volcanic fairy chimneys at dawn. Stay in an authentic cave hotel carved into ancient tufa rock.",
    "highlights": [
      "Sunrise hot air balloon flight over Love & Rose Valleys",
      "Unique luxury cave hotel suite carved into volcanic rock",
      "Derinkuyu underground city 8 levels subterranean tour",
      "G\u00f6reme Open Air Museum Byzantine fresco cave churches",
      "ATV quad bike sunset tour through sword-shaped valleys"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Nev\u015fehir/Kayseri Arrival & Cave Suite Check-In",
        "desc": "Arrive in G\u00f6reme and settle into your luxury stone cave suite."
      },
      {
        "day": 2,
        "title": "Sunrise Hot Air Balloon Flight",
        "desc": "Drift over surreal honeycomb rock towers with champagne toast upon landing."
      },
      {
        "day": 3,
        "title": "Derinkuyu Underground City & Ihlara Canyon",
        "desc": "Explore ancient subterranean tunnels and hike along a lush canyon river."
      },
      {
        "day": 4,
        "title": "G\u00f6reme Open Air Museum & Pottery Masterclass",
        "desc": "See 1,000-year-old painted cave churches and try Avanos red clay pottery."
      },
      {
        "day": 5,
        "title": "Uchisar Castle View & Departure",
        "desc": "Panoramas from Cappadocias highest rock citadel before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "victoria-falls-zambezi",
    "title": "Victoria Falls & Zambezi River",
    "country": "Zimbabwe",
    "location": "Victoria Falls & Zambezi National Park",
    "category": "Adventure",
    "duration": "5 Days / 4 Nights",
    "price": 2150,
    "rating": 4.8,
    "reviewsCount": 150,
    "departureDate": "08/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The Smoke That Thunders. Stand before the worlds largest sheet of falling water, take a scenic helicopter flight through the gorge, and cruise the Zambezi.",
    "highlights": [
      "Guided walk along Victoria Falls rainforest viewpoints",
      "Flight of Angels helicopter tour over the falls and gorge",
      "Luxury sunset river cruise on the mighty Zambezi",
      "Chobe National Park Botswana full-day elephant safari",
      "Boma traditional dinner and drumming cultural show"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Victoria Falls Arrival & Rainforest Walk",
        "desc": "Witness the thunderous mist and permanent rainbows over the 108m drop."
      },
      {
        "day": 2,
        "title": "Helicopter Flight of Angels & Gorge Views",
        "desc": "Aerial perspective of the deep zigzagging Batoka Gorge below."
      },
      {
        "day": 3,
        "title": "Chobe National Park Day Safari (Botswana)",
        "desc": "Boat safari viewing massive elephant herds swimming across the Chobe River."
      },
      {
        "day": 4,
        "title": "Zambezi Sunset Cruise & Hippo Spotting",
        "desc": "Watch hippos and crocodiles with cocktails as the African sun sets red."
      },
      {
        "day": 5,
        "title": "Craft Market & Victoria Falls Departure",
        "desc": "Shop carved wooden animals before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "galapagos-cruise",
    "title": "Galapagos Islands Wildlife Cruise",
    "country": "Ecuador",
    "location": "Santa Cruz & San Crist\u00f3bal",
    "category": "Adventure",
    "duration": "8 Days / 7 Nights",
    "price": 3750,
    "rating": 5.0,
    "reviewsCount": 135,
    "departureDate": "11/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The living museum of evolutionary biology. Swim alongside playful sea lions, marvel at marine iguanas, and walk among giant Galapagos tortoises.",
    "highlights": [
      "Snorkel with playful sea lions, sea turtles, and penguins",
      "Charles Darwin Research Station giant tortoise nursery",
      "Walk on volcanic lava flows beside blue-footed boobies",
      "Luxury yacht expedition with onboard naturalist scientists",
      "Tortuga Bay pristine white beach and marine iguana sanctuary"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Baltra Arrival & Santa Cruz Highlands",
        "desc": "See giant tortoises grazing in their lush natural mountain habitat."
      },
      {
        "day": 2,
        "title": "Tortuga Bay & Marine Iguana Lagoon",
        "desc": "Kayak with white-tip reef sharks and walk past basking prehistoric iguanas."
      },
      {
        "day": 3,
        "title": "North Seymour Island Wildlife Walk",
        "desc": "Observe nesting blue-footed boobies and magnificent frigatebirds."
      },
      {
        "day": 4,
        "title": "Bartolom\u00e9 Island & Pinnacle Rock",
        "desc": "Hike to the summit for the most iconic view in the entire archipelago."
      },
      {
        "day": 5,
        "title": "South Plaza & Santa Fe Snorkel",
        "desc": "Swim through schools of rays and meet yellow land iguanas under cacti."
      },
      {
        "day": 6,
        "title": "San Crist\u00f3bal Island Kicker Rock",
        "desc": "Deep water snorkeling along the colossal sheer volcanic sea stack."
      },
      {
        "day": 7,
        "title": "Interpretation Center & Sea Lion Beach",
        "desc": "Learn human history of the islands and photograph sea lion pups."
      },
      {
        "day": 8,
        "title": "Flight to Quito / Guayaquil & Departure",
        "desc": "Return flight to mainland Ecuador."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "costa-rica-rainforest",
    "title": "Costa Rica Rainforest Safari",
    "country": "Costa Rica",
    "location": "Arenal Volcano & Monteverde",
    "category": "Adventure",
    "duration": "7 Days / 6 Nights",
    "price": 1850,
    "rating": 4.9,
    "reviewsCount": 230,
    "departureDate": "06/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The biodiversity heart of Central America. Zipline through misty cloud forest canopies, soak in volcanic hot springs beneath Arenal, and spot sloths and toucans.",
    "highlights": [
      "Monteverde Cloud Forest hanging suspension bridges walk",
      "Canopy ziplining across 2 miles of virgin rainforest",
      "Arenal Volcano thermal mineral hot spring eco-resort soak",
      "La Fortuna waterfall hike and swimming pool",
      "Guided night walk for tree frogs, sloths, and kinkajous"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "San Jos\u00e9 Arrival & Scenic Drive to Arenal",
        "desc": "Drive through lush coffee plantations to luxury volcanic hot spring lodge."
      },
      {
        "day": 2,
        "title": "Arenal Volcano National Park Lava Trail",
        "desc": "Hike over 1968 lava flow rocks with views of the iconic cone volcano."
      },
      {
        "day": 3,
        "title": "La Fortuna Waterfall & Tabac\u00f3n Hot Springs",
        "desc": "Descend 500 steps to 70m waterfall and unwind in natural river rapids."
      },
      {
        "day": 4,
        "title": "Lake Arenal Boat Crossing to Monteverde",
        "desc": "Scenic lake cruise and mountain ascent into cool misty cloud forests."
      },
      {
        "day": 5,
        "title": "Hanging Bridges & Canopy Zipline Thrill",
        "desc": "Walk above the forest canopy and soar on the Superman zipline cable."
      },
      {
        "day": 6,
        "title": "Organic Coffee & Chocolate Farm Tour",
        "desc": "Harvest, roast, and taste authentic artisanal Costa Rican beans."
      },
      {
        "day": 7,
        "title": "San Jos\u00e9 Transfer & Pura Vida Departure",
        "desc": "Chauffeur transfer to Juan Santamar\u00eda International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "lofoten-arctic",
    "title": "Lofoten Islands Arctic Dream",
    "country": "Norway",
    "location": "Reine, Hamn\u00f8y & Svolv\u00e6r",
    "category": "Mountain",
    "duration": "6 Days / 5 Nights",
    "price": 2750,
    "rating": 4.9,
    "reviewsCount": 140,
    "departureDate": "08/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Dramatic razor-sharp peaks plunging directly into Arctic seas. Stay in traditional red rorbu fishermen cabins on stilts and experience the midnight sun.",
    "highlights": [
      "Stay in a historic restored waterfront red Rorbu cabin",
      "Reinebringen steep ridge hike with 360-degree fjord panoramas",
      "Midnight sun or Northern Lights photography masterclass",
      "White-tailed sea eagle safari in Trollfjord by RIB boat",
      "Henningsv\u00e6r fishing village and football pitch on rocky islet"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Evenes/Bod\u00f8 Flight & Ferry to Lofoten",
        "desc": "Arrive across the Vestfjorden to the dramatic wall of Lofoten peaks."
      },
      {
        "day": 2,
        "title": "Reine Fjord & Reinebringen Summit Hike",
        "desc": "Climb 1,560 stone Sherpa steps for the most famous mountain view in Norway."
      },
      {
        "day": 3,
        "title": "Hamn\u00f8y Bridge & Ramberg White Sand Beach",
        "desc": "Photograph iconic red stilt cabins and stroll turquoise Arctic waters."
      },
      {
        "day": 4,
        "title": "Trollfjord RIB Speedboat & Sea Eagle Safari",
        "desc": "Zoom through narrow granite passages watching giant eagles dive for fish."
      },
      {
        "day": 5,
        "title": "Henningsv\u00e6r Culture & Cod Stockfish Tasting",
        "desc": "Explore art galleries, cafes, and wooden drying racks by the ocean."
      },
      {
        "day": 6,
        "title": "Arctic Farewell & Svolv\u00e6r Departure",
        "desc": "Transfer for your return flight home."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "great-barrier-reef",
    "title": "Great Barrier Reef Coral Wonders",
    "country": "Australia",
    "location": "Cairns & Port Douglas",
    "category": "Beach",
    "duration": "6 Days / 5 Nights",
    "price": 2600,
    "rating": 4.9,
    "reviewsCount": 210,
    "departureDate": "07/28/2026",
    "imageUrl": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The largest living structure on Planet Earth. Snorkel over electric purple and golden corals on the Outer Reef, meet clownfish, and explore the ancient Daintree Rainforest.",
    "highlights": [
      "High-speed luxury catamaran cruise to Agincourt Outer Reef",
      "Scenic helicopter flight over the Heart Reef and coral cays",
      "Scuba diving and marine biologist guided coral tour",
      "Daintree Rainforest & Mossman Gorge Indigenous Dreamtime walk",
      "Port Douglas Four Mile Beach tropical relaxation"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Cairns Arrival & Coastal Drive to Port Douglas",
        "desc": "Spectacular seaside drive between rainforest mountains and the Coral Sea."
      },
      {
        "day": 2,
        "title": "Outer Great Barrier Reef Expedition",
        "desc": "Snorkel pristine coral bommies with sea turtles, giant clams, and rays."
      },
      {
        "day": 3,
        "title": "Heart Reef Helicopter Flight",
        "desc": "See the natural heart-shaped coral formation from the air in brilliant turquoise."
      },
      {
        "day": 4,
        "title": "Daintree Rainforest & Cape Tribulation",
        "desc": "Walk where the worlds oldest rainforest directly touches the coral reef."
      },
      {
        "day": 5,
        "title": "Mossman Gorge & Kuku Yalanji Culture",
        "desc": "Traditional smoke cleansing ceremony and swimming in crystal freshwater river pools."
      },
      {
        "day": 6,
        "title": "Cairns Lagoon & Departure",
        "desc": "Transfer to Cairns Airport for your flight home."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "edinburgh-highlands",
    "title": "Edinburgh & Scottish Highlands",
    "country": "United Kingdom",
    "location": "Edinburgh & Isle of Skye",
    "category": "Cultural",
    "duration": "7 Days / 6 Nights",
    "price": 2300,
    "rating": 4.8,
    "reviewsCount": 240,
    "departureDate": "08/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Ancient volcanic crags crowned with stone fortresses and misty highland glens. Walk the Royal Mile, ride the Jacobite steam train, and explore the dramatic Isle of Skye.",
    "highlights": [
      "Edinburgh Castle perched atop extinct Castle Rock",
      "Royal Mile historic closes & Holyrood Palace walking tour",
      "Jacobite Steam Train crossing the iconic Glenfinnan Viaduct",
      "Isle of Skye Fairy Pools & Old Man of Storr hike",
      "Single malt Scotch whisky distillery tour & tasting"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Edinburgh Arrival & Old Town Cobblestones",
        "desc": "Check-in to historic boutique hotel and walk the Royal Mile at twilight."
      },
      {
        "day": 2,
        "title": "Edinburgh Castle & Scotch Whisky Experience",
        "desc": "View the Scottish Crown Jewels and learn single malt barrel aging."
      },
      {
        "day": 3,
        "title": "Drive Through Glencoe to Fort William",
        "desc": "Dramatic mountain pass through the tragic and breathtaking valley of Glencoe."
      },
      {
        "day": 4,
        "title": "Jacobite Steam Train to Mallaig",
        "desc": "The real Hogwarts Express crossing Glenfinnan Viaduct overlooking Loch Shiel."
      },
      {
        "day": 5,
        "title": "Isle of Skye & Old Man of Storr",
        "desc": "Hike among iconic jagged rock pinnacles and swim in the blue Fairy Pools."
      },
      {
        "day": 6,
        "title": "Eilean Donan Castle & Loch Ness",
        "desc": "Photograph Scotlands most romantic water castle and search for Nessie."
      },
      {
        "day": 7,
        "title": "Return to Edinburgh & Departure",
        "desc": "Transfer to Edinburgh Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "lake-bled-slovenia",
    "title": "Lake Bled & Julian Alps",
    "country": "Slovenia",
    "location": "Bled, Bohinj & Triglav",
    "category": "Mountain",
    "duration": "5 Days / 4 Nights",
    "price": 1400,
    "rating": 4.9,
    "reviewsCount": 160,
    "departureDate": "06/08/2026",
    "imageUrl": "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Emerald alpine lake with a fairytale island church and cliffside medieval castle. Row a traditional wooden pletna boat and hike the stunning Vintgar Gorge.",
    "highlights": [
      "Traditional wooden Pletna boat ride to Bled Island church",
      "Ring the wishing bell in the 17th-century island belltower",
      "Bled Castle cliffside terrace overlooking the entire lake",
      "Vintgar Gorge elevated wooden boardwalks over rushing waters",
      "Lake Bohinj & Vogel cable car into Triglav National Park"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Ljubljana to Lake Bled Arrival",
        "desc": "Arrive in Slovenia and taste the famous Bled cream cake (krem\u0161nita)."
      },
      {
        "day": 2,
        "title": "Pletna Boat to Island & Bled Castle",
        "desc": "Glide across mirror waters to the island and explore cliff fortress museums."
      },
      {
        "day": 3,
        "title": "Vintgar Gorge Canyon Walk",
        "desc": "Hike through 1.6km canyon with waterfalls and turquoise swirling pools."
      },
      {
        "day": 4,
        "title": "Lake Bohinj & Vogel Mountain Viewpoint",
        "desc": "Ride the cable car to 1,535m for panoramas over Julian Alps peaks."
      },
      {
        "day": 5,
        "title": "Ljubljana Capital Walk & Departure",
        "desc": "Explore dragon bridges and riverside cafes before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "fiji-coral-coast",
    "title": "Fiji Coral Coast Sanctuary",
    "country": "Fiji",
    "location": "Viti Levu & Mamanuca Islands",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 2400,
    "rating": 4.9,
    "reviewsCount": 190,
    "departureDate": "10/30/2026",
    "imageUrl": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Warm South Pacific hospitality, coconut palm fringed white beaches, and kaleidoscopic coral reefs. Take part in a kava welcoming ceremony and cruise the Mamanucas.",
    "highlights": [
      "Private thatched beachfront Bure bungalow with outdoor shower",
      "Mamanuca Islands sailing catamaran and sandbank snorkeling",
      "Traditional Kava welcome ceremony and Lovo underground feast",
      "Sigatoka River safari jet boat tour to remote highland village",
      "Sunset fire dancers and Fijian acoustic guitar serenades"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Nadi Arrival & Coral Coast Bula Welcome",
        "desc": "Warm Bula greeting and transfer to beachfront resort on the Coral Coast."
      },
      {
        "day": 2,
        "title": "Coral Reef Snorkeling & Paddleboarding",
        "desc": "Explore calm barrier reef lagoons teeming with blue starfish and coral."
      },
      {
        "day": 3,
        "title": "Sigatoka River Jet Boat Village Safari",
        "desc": "Speed upstream through lush rainforest to meet authentic village chiefs."
      },
      {
        "day": 4,
        "title": "Mamanuca Islands Catamaran Cruise",
        "desc": "Island-hop to Castaway Island and snorkel along outer drop-offs."
      },
      {
        "day": 5,
        "title": "Lovo Feast & Fire Dancing Cultural Night",
        "desc": "Taste meats and root vegetables cooked underground on hot river stones."
      },
      {
        "day": 6,
        "title": "Rainforest Waterfall Trek & Coconut Spa",
        "desc": "Swim beneath jungle waterfalls and enjoy pure Fiji botanical massage."
      },
      {
        "day": 7,
        "title": "Farewell Fiji & Nadi Airport Transfer",
        "desc": "Isa Lei farewell song and transfer to Nadi International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "cartagena-colonial",
    "title": "Cartagena Colonial Charm",
    "country": "Colombia",
    "location": "Cartagena & Rosario Islands",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1500,
    "rating": 4.8,
    "reviewsCount": 220,
    "departureDate": "11/25/2026",
    "imageUrl": "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Bougainvillea-draped wooden balconies, brightly colored colonial facades, and Caribbean ocean breezes. Walk inside 400-year-old stone walls and boat to the Rosario Islands.",
    "highlights": [
      "Walking tour of UNESCO Walled City & Getseman\u00ed street art",
      "Speedboat day trip to Rosario Islands white sand coral cays",
      "San Felipe de Barajas fortress tunnel exploration",
      "Sunset cocktails atop the historic ramparts at Caf\u00e9 del Mar",
      "Colombian coffee and rum tasting masterclass"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Cartagena Arrival & Walled City Check-in",
        "desc": "Check-in to a converted 17th-century colonial mansion with courtyard pool."
      },
      {
        "day": 2,
        "title": "Walled City Alleys & Flower Balconies",
        "desc": "Stroll cobblestone plazas and photograph vibrant houses and palenqueras."
      },
      {
        "day": 3,
        "title": "Rosario Islands Coral Beach Day Trip",
        "desc": "Speedboat to idyllic Caribbean island beach clubs for fresh lobster and mojitos."
      },
      {
        "day": 4,
        "title": "San Felipe Fortress & Getseman\u00ed Murals",
        "desc": "Explore colossal Spanish fortress tunnels and vibrant bohemian street art."
      },
      {
        "day": 5,
        "title": "Coffee & Rum Tasting Masterclass",
        "desc": "Sample single-origin Colombian coffees and aged tropical sugarcane rums."
      },
      {
        "day": 6,
        "title": "Rafael N\u00fa\u00f1ez Airport Departure",
        "desc": "Morning tropical fruit breakfast and airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "zanzibar-spice",
    "title": "Zanzibar Spice & Turquoise",
    "country": "Tanzania",
    "location": "Stone Town & Nungwi",
    "category": "Beach",
    "duration": "7 Days / 6 Nights",
    "price": 1700,
    "rating": 4.9,
    "reviewsCount": 180,
    "departureDate": "12/01/2026",
    "imageUrl": "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1568454537842-d933259bb258?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Exotic spice island where Arabian, Persian, and Swahili cultures merge. Explore Stone Town carved brass doors and relax on white sands beside wooden dhow boats.",
    "highlights": [
      "UNESCO Stone Town maze alleys and carved wooden doors",
      "Organic spice plantation tour smelling cloves, nutmeg & vanilla",
      "Traditional wooden dhow sunset sailing cruise",
      "Nungwi beach relaxation and sea turtle sanctuary visit",
      "Snorkeling at Mnemba Atoll with wild dolphins"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zanzibar Arrival & Stone Town Heritage Riad",
        "desc": "Settle into historic Swahili hotel and listen to evening calls to prayer."
      },
      {
        "day": 2,
        "title": "Stone Town Walking Tour & Forodhani Market",
        "desc": "Visit the Sultan Palace, House of Wonders, and taste Zanzibar pizza."
      },
      {
        "day": 3,
        "title": "Spice Plantation Tour & Drive to Nungwi Beach",
        "desc": "Taste fresh cinnamon, cardamom, and coconut before heading to north beaches."
      },
      {
        "day": 4,
        "title": "Mnemba Atoll Coral Reef Snorkel",
        "desc": "Speedboat to pristine marine reserve with dolphins and vibrant coral walls."
      },
      {
        "day": 5,
        "title": "Traditional Dhow Sunset Sail",
        "desc": "Billowing white sails across the Indian Ocean as the sky turns orange and purple."
      },
      {
        "day": 6,
        "title": "Jozani Forest Red Colobus Monkeys",
        "desc": "Walk boardwalks through mangroves to spot endemic rare red monkeys."
      },
      {
        "day": 7,
        "title": "Zanzibar Airport Transfer & Departure",
        "desc": "Chauffeur transfer for your international return flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "havana-classic",
    "title": "Havana Retro Cars & Salsa",
    "country": "Cuba",
    "location": "Old Havana & Vi\u00f1ales",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1450,
    "rating": 4.7,
    "reviewsCount": 195,
    "departureDate": "11/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1500759285222-a95626b934cb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce3?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "A living time capsule of 1950s American convertibles, pastel neoclassical architecture, live Buena Vista salsa music, and world-renowned tobacco valleys.",
    "highlights": [
      "Convertible 1950s vintage American classic car city cruise",
      "Old Havana (Habana Vieja) four historic plazas walking tour",
      "Vi\u00f1ales Valley day trip to traditional tobacco drying farms",
      "Salsa dance lesson with a local professional instructor",
      "Hemingway footsteps tour: El Floridita & La Bodeguita del Medio"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Havana Arrival & Malec\u00f3n Ocean Drive",
        "desc": "Check-in to boutique casa particular and watch waves crash on the Malec\u00f3n seawall."
      },
      {
        "day": 2,
        "title": "Vintage Convertible Car Tour of City",
        "desc": "Ride through Miramar, Revolution Square, and Vedado in a hot pink Chevrolet."
      },
      {
        "day": 3,
        "title": "Old Havana 4 Historic Plazas Walk",
        "desc": "Explore Plaza de la Catedral, San Francisco, and sample fresh guarapo cane juice."
      },
      {
        "day": 4,
        "title": "Vi\u00f1ales Valley Tobacco Farm Excursion",
        "desc": "See dramatic limestone mogote hills and watch cigars hand-rolled by farmers."
      },
      {
        "day": 5,
        "title": "Salsa Lesson & Buena Vista Social Club Show",
        "desc": "Master basic steps and enjoy evening live Afro-Cuban jazz and salsa orchestra."
      },
      {
        "day": 6,
        "title": "Jos\u00e9 Mart\u00ed Airport Transfer & Departure",
        "desc": "Morning coffee at Caf\u00e9 El Escorial before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "st-moritz-luxury",
    "title": "St. Moritz Ski & Alpine Luxury",
    "country": "Switzerland",
    "location": "Engadin Valley & Corviglia",
    "category": "Mountain",
    "duration": "6 Days / 5 Nights",
    "price": 3400,
    "rating": 4.9,
    "reviewsCount": 130,
    "departureDate": "12/15/2026",
    "imageUrl": "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1491557345352-5929e343eb89?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The cradle of winter tourism. Pristine champagne powder snow, horse racing on frozen lakes, world-class Michelin dining, and boutique designer shopping.",
    "highlights": [
      "Bernina Express panoramic rail journey through UNESCO glacier pass",
      "Corviglia & Diavolezza ski resort lift passes",
      "Horse-drawn carriage ride through snow-covered Val Fex",
      "Thermal mineral spa relaxation overlooking frozen Lake St. Moritz",
      "Fine dining in Michelin-starred alpine chalets"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zurich to St. Moritz via Albula Railway",
        "desc": "Travel over soaring stone viaducts to the Engadin Valleys glamorous resort."
      },
      {
        "day": 2,
        "title": "Corviglia Mountain Skiing & Snowshoeing",
        "desc": "Glide down pristine alpine slopes in brilliant winter sunshine."
      },
      {
        "day": 3,
        "title": "Bernina Express to Italian Alps Border",
        "desc": "Ride Europes highest mountain rail pass over glaciers and frozen lakes."
      },
      {
        "day": 4,
        "title": "Horse-Drawn Sleigh Ride in Val Fex",
        "desc": "Snuggle under wool blankets through car-free fairytale winter valleys."
      },
      {
        "day": 5,
        "title": "Lake St. Moritz Walk & Luxury Spa",
        "desc": "Walk on the frozen lake trail and soak in outdoor heated panoramic hydrotherapy pools."
      },
      {
        "day": 6,
        "title": "Zurich Transfer & Departure",
        "desc": "First-class rail return to Zurich Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "patagonia-torres",
    "title": "Patagonia Torres del Paine Trek",
    "country": "Chile",
    "location": "Puerto Natales & Torres del Paine",
    "category": "Mountain",
    "duration": "8 Days / 7 Nights",
    "price": 3100,
    "rating": 5.0,
    "reviewsCount": 165,
    "departureDate": "11/08/2026",
    "imageUrl": "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The end of the earth where granite towers pierce glacial skies. Hike to the base of the colossal granite Horns, cruise past calving icebergs, and see guanacos roam.",
    "highlights": [
      "Trek to the Base of the Towers (Mirador Las Torres) lagoon",
      "Boat navigation past the electric blue wall of Grey Glacier",
      "French Valley amphitheater hike beneath hanging glaciers",
      "Stay in luxury sustainable eco-domes with mountain vistas",
      "Observe wild guanacos, flamingos, and soaring Andean condors"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Punta Arenas Arrival & Drive to Natales",
        "desc": "Welcome to Chilean Patagonia and transfer past sweeping pampa grasslands."
      },
      {
        "day": 2,
        "title": "Enter Torres del Paine National Park",
        "desc": "See Pehoe Lake and check-in to eco-dome lodge facing the granite horns."
      },
      {
        "day": 3,
        "title": "Base of the Towers Epic Trek",
        "desc": "Ascend through beech forest and glacial boulder moraine to the turquoise lake."
      },
      {
        "day": 4,
        "title": "Grey Glacier Boat Navigation",
        "desc": "Cruise across iceberg-filled waters up to the colossal 30-meter ice cliff."
      },
      {
        "day": 5,
        "title": "French Valley Dramatic Amphitheater",
        "desc": "Listen to roaring avalanches from hanging glaciers safe across the valley."
      },
      {
        "day": 6,
        "title": "Salto Grande Waterfall & Pehoe Lookout",
        "desc": "Witness churning glacial waters connecting two massive turquoise lakes."
      },
      {
        "day": 7,
        "title": "Return to Puerto Natales & Lamb BBQ Feast",
        "desc": "Celebratory Patagonian asado lamb roast with Carmenere wine."
      },
      {
        "day": 8,
        "title": "Punta Arenas Airport & Departure",
        "desc": "Transfer for your return flights."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "halong-bay-cruise",
    "title": "Halong Bay Emerald Karst Cruise",
    "country": "Vietnam",
    "location": "Halong Bay & Lan Ha Bay",
    "category": "Adventure",
    "duration": "5 Days / 4 Nights",
    "price": 1250,
    "rating": 4.8,
    "reviewsCount": 310,
    "departureDate": "10/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Thousands of towering limestone islands jutting out of tranquil jade-green waters. Sail aboard a luxury wooden junk boat, kayak through sea grottos, and explore caves.",
    "highlights": [
      "Overnight luxury cruise aboard a boutique wooden junk boat",
      "Kayak through Dark & Bright caves into tranquil enclosed lagoons",
      "Hike up Ti Top Island for 360-degree panoramic bay views",
      "Explore Sung Sot (Surprise) Cave stalactite chambers",
      "Sunset squid fishing and morning Tai Chi on the open sundeck"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hanoi Arrival & Old Quarter Street Food",
        "desc": "Explore bustling 36 guilds and savor authentic steaming pho bo and egg coffee."
      },
      {
        "day": 2,
        "title": "Limousine to Halong Bay & Embarkation",
        "desc": "Board your private-balcony luxury cabin as the ship sails into the limestone karsts."
      },
      {
        "day": 3,
        "title": "Kayaking Sea Grottos & Sung Sot Cave",
        "desc": "Paddle under low limestone arches and climb into cathedral-sized stone chambers."
      },
      {
        "day": 4,
        "title": "Ti Top Island Beach & Cooking Demonstration",
        "desc": "Swim in calm bay waters and learn to roll fresh Vietnamese spring rolls."
      },
      {
        "day": 5,
        "title": "Disembarkation & Hanoi Noi Bai Departure",
        "desc": "Morning Tai Chi session and expressway transfer to Hanoi Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "mount-fuji-hakone",
    "title": "Mount Fuji & Hakone Onsen",
    "country": "Japan",
    "location": "Hakone & Fuji Five Lakes",
    "category": "Mountain",
    "duration": "5 Days / 4 Nights",
    "price": 1780,
    "rating": 4.9,
    "reviewsCount": 260,
    "departureDate": "06/02/2026",
    "imageUrl": "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The sacred symmetrical volcanic cone of Mount Fuji mirrored in serene mountain lakes. Soak in sulfur hot springs and cruise Lake Ashi aboard a pirate ship.",
    "highlights": [
      "Chureito Pagoda postcard viewpoint of Mount Fuji",
      "Lake Ashi scenic cruise with floating red Torii gate views",
      "Owakudani volcanic valley active sulfur vents & black eggs",
      "Stay in a traditional luxury Ryokan with private onsen bath",
      "Hakone Open-Air Museum sculpture park in the mountains"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Tokyo to Lake Kawaguchiko Arrival",
        "desc": "Scenic train ride to Fuji Five Lakes and check-in to lakeside onsen ryokan."
      },
      {
        "day": 2,
        "title": "Chureito Pagoda & Lake Saiko Heritage",
        "desc": "Iconic five-story pagoda framed by cherry trees and Mount Fuji."
      },
      {
        "day": 3,
        "title": "Hakone Ropeway & Owakudani Valley",
        "desc": "Cable car over steaming sulfuric vents and eat black eggs boiled in minerals."
      },
      {
        "day": 4,
        "title": "Lake Ashi Cruise & Hakone Shrine",
        "desc": "Photograph the famous vermilion gate standing directly in the blue lake."
      },
      {
        "day": 5,
        "title": "Romancecar Train Return to Tokyo",
        "desc": "Scenic panoramic train journey back to Shinjuku or Tokyo Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "plitvice-lakes",
    "title": "Plitvice Lakes Waterfall Haven",
    "country": "Croatia",
    "location": "Plitvice Lakes National Park",
    "category": "Adventure",
    "duration": "5 Days / 4 Nights",
    "price": 1400,
    "rating": 4.8,
    "reviewsCount": 190,
    "departureDate": "07/12/2026",
    "imageUrl": "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Sixteen cascading crystal terraced lakes connected by hundreds of roaring waterfalls. Walk wooden boardwalks hovering inches above crystal-clear emerald waters.",
    "highlights": [
      "Walk the wooden boardwalks across Upper & Lower Lakes",
      "Veliki Slap (Great Waterfall) 78-meter sheer plunge",
      "Silent electric boat ride across the largest lake (Kozjak)",
      "Pristine beech forests teeming with brown bears and deer",
      "Stay in an authentic mountain timber chalet with local cuisine"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zagreb Arrival & Scenic Drive to Plitvice",
        "desc": "Scenic drive through Croatian countryside to national park lodge."
      },
      {
        "day": 2,
        "title": "Lower Lakes Exploration & Veliki Slap",
        "desc": "Walk alongside turquoise travertine dams and dramatic canyons."
      },
      {
        "day": 3,
        "title": "Upper Lakes Boardwalks & Lake Kozjak Boat",
        "desc": "Electric boat sail and boardwalks surrounded by cascading waterfalls."
      },
      {
        "day": 4,
        "title": "Rastoke Watermill Village Day Trip",
        "desc": "Explore fairytale village built directly atop rushing waterfall streams."
      },
      {
        "day": 5,
        "title": "Return to Zagreb & Airport Departure",
        "desc": "Chauffeur transfer for your international flight home."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "salar-de-uyuni",
    "title": "Salar de Uyuni Salt Flats",
    "country": "Bolivia",
    "location": "Uyuni & Eduardo Avaroa Reserve",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 1650,
    "rating": 4.9,
    "reviewsCount": 210,
    "departureDate": "05/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The worlds largest salt flat transforming into a colossal natural mirror of the sky. Stay in a hotel constructed entirely from salt blocks and photograph flamingos.",
    "highlights": [
      "Sunset and star-gazing mirror reflection photography",
      "Incahuasi Island giant thousand-year-old cacti",
      "Stay in an authentic hotel built completely from pure salt blocks",
      "Red Lagoon (Laguna Colorada) with thousands of James flamingos",
      "Sol de Ma\u00f1ana bubbling geysers and mineral thermal pools"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "La Paz Flight to Uyuni & Salt Hotel Check-In",
        "desc": "Land on the altiplano and check into your hotel built with salt brick walls and beds."
      },
      {
        "day": 2,
        "title": "Train Cemetery & Infinite White Salt Flats",
        "desc": "Explore 19th-century steam trains before driving out into pure blinding white salt."
      },
      {
        "day": 3,
        "title": "Incahuasi Cactus Island & Mirror Sunset",
        "desc": "Hike among towering giant cacti and watch the sky mirror seamlessly onto the ground."
      },
      {
        "day": 4,
        "title": "Laguna Colorada & Flamingo Colonies",
        "desc": "Drive through volcanic deserts to blood-red mineral lakes filled with wild flamingos."
      },
      {
        "day": 5,
        "title": "Geysers Sol de Ma\u00f1ana & Polques Hot Springs",
        "desc": "Bathe in 38C thermal pools at 4,400 meters surrounded by freezing mountain air."
      },
      {
        "day": 6,
        "title": "Uyuni Return & Flight to La Paz Departure",
        "desc": "Flight connection for your international departure."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "interlaken-alpine",
    "title": "Interlaken Paragliding & Lakes",
    "country": "Switzerland",
    "location": "Interlaken, Lauterbrunnen & M\u00fcrren",
    "category": "Mountain",
    "duration": "6 Days / 5 Nights",
    "price": 2800,
    "rating": 4.9,
    "reviewsCount": 240,
    "departureDate": "07/25/2026",
    "imageUrl": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Nestled between turquoise Lake Thun and Lake Brienz beneath the Eiger, M\u00f6nch, and Jungfrau. Paraglide above the valley and hike past 72 Lauterbrunnen waterfalls.",
    "highlights": [
      "Tandem paragliding flight landing in H\u00f6hematte park",
      "Lauterbrunnen Valley of 72 waterfalls walking tour",
      "Schilthorn Piz Gloria 007 revolving summit restaurant",
      "Lake Brienz scenic steamboat cruise with turquoise waters",
      "Car-free alpine cliff village of M\u00fcrren and Gimmelwald"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Zurich to Interlaken Rail & Lakefront Hotel",
        "desc": "Scenic train between two lakes and check-in to traditional chalet resort."
      },
      {
        "day": 2,
        "title": "Tandem Paragliding & Harder Kulm View",
        "desc": "Soar like a bird with pilots before sunset funicular up Harder Kulm."
      },
      {
        "day": 3,
        "title": "Lauterbrunnen Waterfalls & Tr\u00fcmmelbach Falls",
        "desc": "Witness glacier waterfalls thundering inside subterranean mountain caves."
      },
      {
        "day": 4,
        "title": "Schilthorn Cable Car & Piz Gloria 007",
        "desc": "Revolving panoramic summit where James Bond On Her Majestys Secret Service was filmed."
      },
      {
        "day": 5,
        "title": "Lake Brienz Steamboat & Giessbach Falls",
        "desc": "Historic paddle steamer cruise and walk behind roaring forest waterfalls."
      },
      {
        "day": 6,
        "title": "Scenic Rail Transfer to Zurich Airport",
        "desc": "Departure rail connection directly to Zurich Airport terminal."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "whitsundays-beach",
    "title": "Whitsunday Islands & Whitehaven",
    "country": "Australia",
    "location": "Airlie Beach & Hamilton Island",
    "category": "Beach",
    "duration": "6 Days / 5 Nights",
    "price": 2700,
    "rating": 4.9,
    "reviewsCount": 215,
    "departureDate": "09/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Pure 98% white silica sands that never get hot under the tropical sun. Sail through turquoise swirling tides at Hill Inlet and relax in Hamilton Island luxury.",
    "highlights": [
      "Whitehaven Beach & Hill Inlet swirling turquoise sands tour",
      "Scenic flight over Heart Reef and the Great Barrier Reef",
      "Hamilton Island golf buggy exploration and Catseye Beach",
      "Snorkeling fringing coral reefs at Hook Island & Chalkies Beach",
      "Sunset catamaran sailing with Australian sparkling wine"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Hamilton Island Flight & Buggy Check-in",
        "desc": "Land directly on tropical island resort and explore with your private buggy."
      },
      {
        "day": 2,
        "title": "Ocean Rafting to Hill Inlet & Whitehaven Beach",
        "desc": "Marvel at the shifting swirling turquoise water and sink toes in pure silica sand."
      },
      {
        "day": 3,
        "title": "Heart Reef Scenic Seaplane Flight",
        "desc": "Fly over the world-famous natural heart coral and land on calm reef lagoons."
      },
      {
        "day": 4,
        "title": "Hook Island Coral Reef Snorkeling",
        "desc": "Encounter sea turtles, giant trevally, and colorful brain corals."
      },
      {
        "day": 5,
        "title": "One Tree Hill Sunset & Marina Dining",
        "desc": "Cocktails at island peak followed by fresh seafood at the marina."
      },
      {
        "day": 6,
        "title": "Hamilton Island Airport & Departure",
        "desc": "Direct flight connection to Sydney or Brisbane."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "lisbon-sintra",
    "title": "Lisbon Yellow Trams & Sintra Palaces",
    "country": "Portugal",
    "location": "Lisbon & Sintra",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1650,
    "rating": 4.8,
    "reviewsCount": 210,
    "departureDate": "06/14/2026",
    "imageUrl": "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Vintage yellow tram 28 clattering up Alfama cobblestones, melancholic fado music, and fairytale pastel castles in the misty pines of Sintra.",
    "highlights": [
      "Ride vintage Tram 28 through medieval Alfama",
      "Pena Palace vibrant fairytale castle & park in Sintra",
      "Past\u00e9is de Bel\u00e9m original custard tart tasting",
      "Tagus River sunset sailboat cruise with vinho verde",
      "Historic Bel\u00e9m Tower and Jer\u00f3nimos Monastery tour"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Lisbon Arrival & Miradouro Sunset",
        "desc": "Check-in to Chiado boutique hotel and take in rooftop views over red tile roofs."
      },
      {
        "day": 2,
        "title": "Alfama Alleys & Fado Evening",
        "desc": "Wander Roman and Moorish alleys followed by traditional live fado dinner."
      },
      {
        "day": 3,
        "title": "Sintra Pena Palace & Quinta da Regaleira",
        "desc": "Explore initiation wells and colorful Romanticist hilltop royal palaces."
      },
      {
        "day": 4,
        "title": "Bel\u00e9m Maritime History & Past\u00e9is",
        "desc": "Visit Discoveries Monument and taste fresh warm cinnamon custard tarts."
      },
      {
        "day": 5,
        "title": "Cascais Seaside Promenade & Cabo da Roca",
        "desc": "Stand at the westernmost point of continental Europe over roaring Atlantic waves."
      },
      {
        "day": 6,
        "title": "Lisbon Portela Airport Departure",
        "desc": "Morning bica espresso and private airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "vienna-classical",
    "title": "Vienna Imperial Palaces & Opera",
    "country": "Austria",
    "location": "Vienna & Wachau Valley",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1850,
    "rating": 4.9,
    "reviewsCount": 180,
    "departureDate": "07/15/2026",
    "imageUrl": "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1541849546-216549ae216d?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Grand Habsburg imperial boulevard palaces, classical Mozart and Strauss concerts, and traditional gilded coffeehouse culture with Sachertorte.",
    "highlights": [
      "Sch\u00f6nbrunn Palace imperial state apartments & gardens",
      "St. Stephen\u2019s Cathedral Gothic tower and crypts",
      "Classical Mozart & Strauss evening chamber concert",
      "Traditional Viennese coffeehouse Sachertorte tasting",
      "Danube River cruise through terraced Wachau vineyards"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Vienna Arrival & Ringstra\u00dfe Evening",
        "desc": "Check-in near the Opera and walk the illuminated grand imperial boulevard."
      },
      {
        "day": 2,
        "title": "Sch\u00f6nbrunn Palace & Gloriette Gardens",
        "desc": "Tour Empress Sisis summer palace and stroll Baroque Neptune fountains."
      },
      {
        "day": 3,
        "title": "Belvedere Palace & Klimt Masterpieces",
        "desc": "Behold Gustav Klimts The Kiss in the Upper Belvedere gallery."
      },
      {
        "day": 4,
        "title": "Wachau Valley & Melk Benedictine Abbey",
        "desc": "Scenic Danube river cruise through apricot orchards and baroque abbeys."
      },
      {
        "day": 5,
        "title": "Vienna State Opera & Schwechat Departure",
        "desc": "Morning pastry at Caf\u00e9 Central before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "seville-flamenco",
    "title": "Seville & Andalusian Flamenco",
    "country": "Spain",
    "location": "Seville & C\u00f3rdoba",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1550,
    "rating": 4.8,
    "reviewsCount": 195,
    "departureDate": "05/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1558642084-fd07fae5282e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Orange blossoms, Moorish arches, and raw fiery flamenco guitar in the heart of Andalusia. Visit the Royal Alc\u00e1zar and colossal Seville Cathedral.",
    "highlights": [
      "Royal Alc\u00e1zar Mud\u00e9jar palace courtyards & gardens",
      "Seville Cathedral & climb the Giralda bell tower",
      "Authentic passionate flamenco show in Triana quarter",
      "Plaza de Espa\u00f1a monumental semi-circular palace walk",
      "Day trip to the Great Mosque-Cathedral (Mezquita) in C\u00f3rdoba"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Seville Arrival & Santa Cruz Quarter",
        "desc": "Check into restored 18th-century palace in the Jewish Quarter."
      },
      {
        "day": 2,
        "title": "Royal Alc\u00e1zar & Cathedral of Seville",
        "desc": "Admire Moorish tilework and stand before Christopher Columbus tomb."
      },
      {
        "day": 3,
        "title": "C\u00f3rdoba Mezquita Mosque-Cathedral Excursion",
        "desc": "High-speed rail to walk through 856 red-and-white striped arches."
      },
      {
        "day": 4,
        "title": "Plaza de Espa\u00f1a & Triana Flamenco Night",
        "desc": "Rowboats in the canal followed by intimate guitar and flamenco dance."
      },
      {
        "day": 5,
        "title": "Metropol Parasol & San Pablo Departure",
        "desc": "Walk atop wooden mushroom canopy before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "meteora-monasteries",
    "title": "Meteora Monasteries & Cliffs",
    "country": "Greece",
    "location": "Kalabaka & Meteora",
    "category": "Mountain",
    "duration": "4 Days / 3 Nights",
    "price": 1350,
    "rating": 4.9,
    "reviewsCount": 160,
    "departureDate": "06/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Centuries-old Eastern Orthodox monasteries perched impossibly atop gigantic natural sandstone rock pillars rising sheer above the Thessalian plain.",
    "highlights": [
      "Visit Holy Monastery of Great Meteoron & Varlaam",
      "Golden hour sunset photography tour from clifftop viewpoints",
      "Hike hidden hermit caves and Byzantine footpaths",
      "Scenic train journey through mainland Greece mountain valleys",
      "Traditional Greek mountain tavern dining with local wines"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Athens to Kalabaka Train Arrival",
        "desc": "Travel through mainland Greece and check into mountain view hotel."
      },
      {
        "day": 2,
        "title": "Great Meteoron & Varlaam Monasteries",
        "desc": "Climb carved rock staircases to view ancient frescoes and rope nets."
      },
      {
        "day": 3,
        "title": "Roussanou & Sunset Rock Panorama",
        "desc": "Panoramic vistas as late afternoon sun bathes towering monoliths in gold."
      },
      {
        "day": 4,
        "title": "Return Train to Athens & Departure",
        "desc": "Scenic train return to Athens International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "cliffs-of-moher",
    "title": "Cliffs of Moher & Wild Atlantic Way",
    "country": "Ireland",
    "location": "Galway & County Clare",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 1890,
    "rating": 4.8,
    "reviewsCount": 215,
    "departureDate": "07/08/2026",
    "imageUrl": "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Dramatic 700-foot sheer Atlantic sea cliffs, emerald rolling hills, historic stone castles, and lively traditional fiddle sessions in colorful Galway pubs.",
    "highlights": [
      "Cliffs of Moher cliff edge walking trail & O\u2019Brien\u2019s Tower",
      "Aran Islands ferry to Inis M\u00f3r prehistoric Dun Aengus fort",
      "Connemara National Park rugged peat bogs and Kylemore Abbey",
      "Galway Latin Quarter live Celtic folk music pub crawl",
      "The Burren limestone karst moonscape exploration"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Dublin to Galway Scenic Drive",
        "desc": "Cross the green heart of Ireland to lively bohemian Galway bay."
      },
      {
        "day": 2,
        "title": "Cliffs of Moher & The Burren Coastal Drive",
        "desc": "Gaze over crashing Atlantic surf and seabird colonies on sheer cliffs."
      },
      {
        "day": 3,
        "title": "Aran Islands Ferry & Dun Aengus Fort",
        "desc": "Cycle past dry stone walls to a 3,000-year-old cliffside stone ring fort."
      },
      {
        "day": 4,
        "title": "Kylemore Abbey & Connemara Fjord",
        "desc": "Victorian walled gardens nestled beneath brooding Connemara mountains."
      },
      {
        "day": 5,
        "title": "Galway Buskers & Craft Beer Tasting",
        "desc": "Enjoy lively street performers and authentic Irish stew with local stout."
      },
      {
        "day": 6,
        "title": "Shannon/Dublin Airport Departure",
        "desc": "Private transfer for departure flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "neuschwanstein-bavaria",
    "title": "Neuschwanstein Castle & Bavarian Alps",
    "country": "Germany",
    "location": "F\u00fcssen & Munich",
    "category": "Mountain",
    "duration": "5 Days / 4 Nights",
    "price": 1720,
    "rating": 4.9,
    "reviewsCount": 230,
    "departureDate": "08/12/2026",
    "imageUrl": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "King Ludwig IIs fairytale castle rising above forested alpine crags, crystal alpine lakes, and traditional Bavarian beer gardens in historic Munich.",
    "highlights": [
      "Neuschwanstein Castle interior tour & Marienbr\u00fccke bridge view",
      "Hohenschwangau royal childhood castle overlooking Alpsee",
      "Munich Marienplatz Glockenspiel and English Garden walk",
      "Traditional Bavarian beer hall dinner with live oompah band",
      "Linderhof Palace rococo gold halls & Venus Grotto"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Munich Arrival & Bavarian Beer Garden",
        "desc": "Arrive in Bavaria and toast with pretzels and wheat beer in Munich."
      },
      {
        "day": 2,
        "title": "Drive Alpine Road to F\u00fcssen & Alpsee Lake",
        "desc": "Scenic mountain highway into the foothills of the Allg\u00e4u Alps."
      },
      {
        "day": 3,
        "title": "Neuschwanstein & Marienbr\u00fccke Gorge",
        "desc": "Walk the suspension footbridge for the iconic fairytale castle photo."
      },
      {
        "day": 4,
        "title": "Linderhof Palace & Oberammergau Murals",
        "desc": "Explore painted chalet facades and secluded baroque royal palace."
      },
      {
        "day": 5,
        "title": "Munich Airport Transfer & Departure",
        "desc": "Chauffeur transfer to Munich International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "florence-tuscany",
    "title": "Florence Renaissance & Tuscan Hills",
    "country": "Italy",
    "location": "Florence, Siena & Chianti",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 2250,
    "rating": 4.9,
    "reviewsCount": 290,
    "departureDate": "06/25/2026",
    "imageUrl": "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The birthplace of the Renaissance. Stand before Michelangelos David, climb Brunelleschis Duomo, and drive through rolling cypress-lined Tuscan vineyards.",
    "highlights": [
      "Accademia Gallery VIP entry for Michelangelo\u2019s David",
      "Climb Brunelleschi\u2019s dome atop Florence Cathedral (Duomo)",
      "Uffizi Gallery Botticelli & Leonardo da Vinci tour",
      "Chianti wine tasting and pecorino cheese farm lunch",
      "Siena Piazza del Campo and medieval hilltop towers"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Florence Arrival & Ponte Vecchio Sunset",
        "desc": "Check-in to historic center palazzo and walk past jewelers on Ponte Vecchio."
      },
      {
        "day": 2,
        "title": "The Duomo & Accademia David Tour",
        "desc": "Climb 463 steps inside the dome and gaze at the masterpiece of sculpture."
      },
      {
        "day": 3,
        "title": "Uffizi Gallery & Boboli Gardens",
        "desc": "Admire The Birth of Venus followed by shaded renaissance royal gardens."
      },
      {
        "day": 4,
        "title": "Chianti Wine Route & San Gimignano Towers",
        "desc": "Drive through rolling vineyards and explore 14 medieval stone skyscraper towers."
      },
      {
        "day": 5,
        "title": "Siena Cathedral & Piazza del Campo",
        "desc": "Visit the black-and-white marble cathedral and historic horse race plaza."
      },
      {
        "day": 6,
        "title": "Piazzale Michelangelo & Florence Departure",
        "desc": "Panoramic farewell photo over Florence before airport transfer."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "grand-canyon-arizona",
    "title": "Grand Canyon & Arizona Red Rocks",
    "country": "United States",
    "location": "Sedona & Grand Canyon South Rim",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 2100,
    "rating": 4.9,
    "reviewsCount": 260,
    "departureDate": "09/14/2026",
    "imageUrl": "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "A mile-deep gorge carved by the Colorado River across two billion years of geological history. Watch sunrise over the rim and explore Sedona vortex red rock spires.",
    "highlights": [
      "Helicopter scenic flight through the depths of Grand Canyon",
      "Watch golden sunrise and sunset from Mather & Hopi Points",
      "Pink Jeep off-road adventure on Sedonas Broken Arrow trail",
      "Hike Bright Angel Trail into the canyon plateau",
      "Stargazing under certified Dark Sky canyon night skies"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Phoenix Arrival & Drive to Sedona Red Rocks",
        "desc": "Drive through Saguaro cactus desert to red sandstone cathedral rocks."
      },
      {
        "day": 2,
        "title": "Sedona Red Rock Vortex Jeep Tour",
        "desc": "Thrilling 4x4 crawl over sandstone slickrock and meditation vortexes."
      },
      {
        "day": 3,
        "title": "Oak Creek Canyon Drive to Grand Canyon",
        "desc": "Ascend through pine forests to the South Rim of the natural wonder."
      },
      {
        "day": 4,
        "title": "Grand Canyon Helicopter Flight & Rim Walk",
        "desc": "Fly over the Dragon Corridor and look down at roaring Colorado River rapids."
      },
      {
        "day": 5,
        "title": "Bright Angel Trail & Desert View Watchtower",
        "desc": "Descend into the canyon and climb Mary Colters historic stone watchtower."
      },
      {
        "day": 6,
        "title": "Phoenix Sky Harbor Airport Departure",
        "desc": "Scenic return drive to Phoenix for departure."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "yosemite-california",
    "title": "Yosemite & Giant Sequoias",
    "country": "United States",
    "location": "Yosemite Valley & Mariposa Grove",
    "category": "Mountain",
    "duration": "5 Days / 4 Nights",
    "price": 1950,
    "rating": 4.9,
    "reviewsCount": 240,
    "departureDate": "06/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Granite icons El Capitan and Half Dome rising above roaring Yosemite Falls, alpine meadows, and 3,000-year-old giant sequoia trees in the Sierra Nevada.",
    "highlights": [
      "Tunnel View iconic panorama of El Capitan and Half Dome",
      "Yosemite Falls hike - highest measured waterfall in North America",
      "Walk among 500 giant sequoia ancient trees in Mariposa Grove",
      "Glacier Point sunset viewpoint 3,200 feet above the valley floor",
      "Watch world-class rock climbers on the sheer face of El Capitan"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "San Francisco to Yosemite Valley",
        "desc": "Drive through Gold Rush country and enter through the dramatic Tunnel View."
      },
      {
        "day": 2,
        "title": "Yosemite Valley Waterfalls & Meadow Stroll",
        "desc": "Feel the mist of Lower Yosemite Fall and Bridalveil Fall."
      },
      {
        "day": 3,
        "title": "Glacier Point Sunset & Half Dome View",
        "desc": "Stand on the edge of the granite abyss looking directly across at Half Dome."
      },
      {
        "day": 4,
        "title": "Mariposa Grove of Giant Sequoias",
        "desc": "Walk beneath the Grizzly Giant tree with a 30-foot trunk diameter."
      },
      {
        "day": 5,
        "title": "San Francisco Airport Departure",
        "desc": "Return drive across the Central Valley to SFO Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "vancouver-whistler",
    "title": "Vancouver & Whistler Mountain",
    "country": "Canada",
    "location": "Vancouver & Whistler, BC",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 2400,
    "rating": 4.8,
    "reviewsCount": 185,
    "departureDate": "07/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1559511260-66a65e0982d5?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559511260-66a65e0982d5?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Ocean city framed by coastal rainforest and snowy peaks. Walk the Capilano Suspension Bridge, drive the Sea-to-Sky Highway, and ride the Peak 2 Peak gondola.",
    "highlights": [
      "Drive the breathtaking Sea-to-Sky ocean fjord highway",
      "Peak 2 Peak 360-degree gondola between Whistler & Blackcomb",
      "Capilano Suspension Bridge treetop walk over temperate rainforest",
      "Stanley Park seawall bicycle ride around totem poles",
      "Granville Island artisan public market food tasting tour"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Vancouver Arrival & Coal Harbour Seawall",
        "desc": "Check-in to waterfront hotel watching seaplanes land against mountain backdrops."
      },
      {
        "day": 2,
        "title": "Stanley Park & Granville Island Food Tour",
        "desc": "Cycle through massive cedar trees and sample smoked wild salmon."
      },
      {
        "day": 3,
        "title": "Sea-to-Sky Highway to Whistler Resort",
        "desc": "Drive along Howe Sound past Shannon Falls to the Olympic alpine village."
      },
      {
        "day": 4,
        "title": "Whistler Peak 2 Peak Gondola",
        "desc": "World record breaking cable car spanning 4.4km suspended high between summits."
      },
      {
        "day": 5,
        "title": "Capilano Suspension Bridge & Gastown Steam Clock",
        "desc": "Sway 230 feet above the river before an evening in historic cobblestone Gastown."
      },
      {
        "day": 6,
        "title": "Vancouver YVR Airport Departure",
        "desc": "Assisted transfer for your departure flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "tulum-cenotes",
    "title": "Tulum Mayan Ruins & Cenotes",
    "country": "Mexico",
    "location": "Tulum & Riviera Maya",
    "category": "Beach",
    "duration": "6 Days / 5 Nights",
    "price": 1650,
    "rating": 4.8,
    "reviewsCount": 275,
    "departureDate": "11/14/2026",
    "imageUrl": "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Ancient Mayan stone temples perched on ocean cliffs above turquoise Caribbean waters, subterranean freshwater cenotes, and bohemian beachfront eco-resorts.",
    "highlights": [
      "Tulum clifftop Mayan fortress overlooking the Caribbean Sea",
      "Swim and snorkel in the crystal underground Gran Cenote",
      "Chich\u00e9n Itz\u00e1 UNESCO pyramid day trip with archaeologist guide",
      "Bohemian beachfront jungle eco-resort with plunge pool",
      "Sian Ka\u2019an Biosphere reserve boat tour through emerald canals"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Canc\u00fan to Tulum & Jungle Resort Check-in",
        "desc": "Private transfer to bohemian boutique cabana hotel on Tulum beach."
      },
      {
        "day": 2,
        "title": "Tulum Ruins Sunrise & Clifftop Beach Swim",
        "desc": "Beat the crowds to see El Castillo glowing pink above turquoise waters."
      },
      {
        "day": 3,
        "title": "Sacred Cenotes Snorkeling Expedition",
        "desc": "Swim under hanging stalactites in crystal freshwater limestone caverns."
      },
      {
        "day": 4,
        "title": "Chich\u00e9n Itz\u00e1 Pyramid & Valladolid Colonial Town",
        "desc": "Marvel at the astronomical shadow serpent on El Castillo pyramid."
      },
      {
        "day": 5,
        "title": "Sian Ka\u2019an Biosphere Lagoon Float",
        "desc": "Drift down Mayan-carved freshwater mangrove channels with life jackets."
      },
      {
        "day": 6,
        "title": "Canc\u00fan International Airport Departure",
        "desc": "Chauffeur transfer for your flight home."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "oaxaca-culture",
    "title": "Oaxaca Culture & Mezcal Trail",
    "country": "Mexico",
    "location": "Oaxaca City & Monte Alb\u00e1n",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1400,
    "rating": 4.9,
    "reviewsCount": 200,
    "departureDate": "10/28/2026",
    "imageUrl": "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The culinary and cultural soul of Mexico. Taste world-famous seven moles, tour artisanal smoky mezcal palenques, and explore Zapotec ruins at Monte Alb\u00e1n.",
    "highlights": [
      "Monte Alb\u00e1n mountaintop ancient Zapotec archaeological zone",
      "Oaxaca central market mole, tlayuda, and cacao tasting",
      "Artisanal smoky mezcal distillery tour in Santiago Matatl\u00e1n",
      "Hierve el Agua petrified mineral waterfalls and infinity pools",
      "Alebrije wood carving and Zapotec hand-woven rug masterclass"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Oaxaca Arrival & Santo Domingo Plaza",
        "desc": "Check-in to historic colonial courtyard hotel and stroll the bustling Z\u00f3calo."
      },
      {
        "day": 2,
        "title": "Monte Alb\u00e1n Mountaintop Pyramids",
        "desc": "360-degree valley views from the flattened mountain acropolis of the Zapotecs."
      },
      {
        "day": 3,
        "title": "Traditional Mole Cooking Class & Market Tour",
        "desc": "Grind roasted chiles, cacao, and spices on volcanic stone metates."
      },
      {
        "day": 4,
        "title": "Hierve el Agua Mineral Springs & Mezcal Trail",
        "desc": "Bathe on the cliff edge before sampling smoky single-agave mezcals."
      },
      {
        "day": 5,
        "title": "Oaxaca Airport Transfer & Departure",
        "desc": "Morning hot chocolate at Rito Chocolater\u00eda before departure."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "buenos-aires-iguazu",
    "title": "Buenos Aires & Iguazu Falls",
    "country": "Argentina",
    "location": "Buenos Aires & Iguazu",
    "category": "Adventure",
    "duration": "7 Days / 6 Nights",
    "price": 2350,
    "rating": 4.9,
    "reviewsCount": 220,
    "departureDate": "11/10/2026",
    "imageUrl": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The Paris of South America with passionate tango and prime bife de chorizo, paired with the thunderous 275 waterfalls of Iguazu in the subtropical jungle.",
    "highlights": [
      "Devils Throat (Garganta del Diablo) catwalk over Iguazu Falls",
      "Zodiac speedboat ride directly into the spray of the falls",
      "Intimate VIP tango show and orchestra in San Telmo",
      "Recoleta Cemetery & Evita Per\u00f3n mausoleum walk",
      "Traditional Argentine Asado feast with Malbec wine pairings"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Buenos Aires Arrival & Recoleta Walk",
        "desc": "Check in to luxury hotel in refined Recoleta and walk Parisian boulevards."
      },
      {
        "day": 2,
        "title": "Plaza de Mayo, La Boca & Evening Tango Show",
        "desc": "See the pink presidential palace and colorful Caminito zinc houses."
      },
      {
        "day": 3,
        "title": "Flight to Iguazu & Jungle Resort Check-in",
        "desc": "Fly north into the lush rainforest where toucans and coatis roam."
      },
      {
        "day": 4,
        "title": "Iguazu Falls Argentine Side & Devils Throat",
        "desc": "Walk 1km suspended boardwalks over the thundering horseshoe chasm."
      },
      {
        "day": 5,
        "title": "Great Adventure Speedboat Under Waterfalls",
        "desc": "Drenching boat ride into the base of the colossal San Mart\u00edn waterfall."
      },
      {
        "day": 6,
        "title": "Flight Back to Buenos Aires & Palermo Dinner",
        "desc": "Evening prime dry-aged steak dinner in trendy Palermo Soho."
      },
      {
        "day": 7,
        "title": "Ezeiza International Airport Departure",
        "desc": "Transfer for your return international flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "seoul-k-culture",
    "title": "Seoul K-Culture & Ancient Palaces",
    "country": "South Korea",
    "location": "Seoul & DMZ",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 2050,
    "rating": 4.9,
    "reviewsCount": 320,
    "departureDate": "10/05/2026",
    "imageUrl": "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Where five royal Joseon dynasty palaces meet ultra-modern skyscraper tech and world-famous K-food markets. Wear traditional Hanbok in Gyeongbokgung.",
    "highlights": [
      "Gyeongbokgung Palace changing of the guard wearing Hanbok",
      "Bukchon Hanok traditional wooden village walking tour",
      "Gwangjang Market sizzling bindaetteok and street food safari",
      "N Seoul Tower sunset panorama from Namsan Mountain",
      "Exclusive DMZ border tour and Third Infiltration Tunnel"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Incheon Arrival & Myeongdong Night Market",
        "desc": "Check-in to central Seoul hotel and taste grilled lobster tail street food."
      },
      {
        "day": 2,
        "title": "Gyeongbokgung Palace & Bukchon Hanok Village",
        "desc": "Dress in silky Hanbok attire to enter royal palace gates and photo spots."
      },
      {
        "day": 3,
        "title": "Demilitarized Zone (DMZ) Guided Tour",
        "desc": "Peer into North Korea from Dora Observatory and walk border tunnels."
      },
      {
        "day": 4,
        "title": "Gangnam District & Coex Starfield Library",
        "desc": "Explore trendy Gangnam K-pop street and towering 13-meter book wall."
      },
      {
        "day": 5,
        "title": "Hongdae Youth Street & Korean BBQ Feast",
        "desc": "Watch street dancers and indulge in sizzling pork belly with soju."
      },
      {
        "day": 6,
        "title": "AREX Express to Incheon Airport",
        "desc": "High-speed rail to Incheon for departure."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "beijing-great-wall",
    "title": "Beijing Great Wall & Forbidden City",
    "country": "China",
    "location": "Beijing & Mutianyu",
    "category": "Cultural",
    "duration": "6 Days / 5 Nights",
    "price": 1950,
    "rating": 4.8,
    "reviewsCount": 240,
    "departureDate": "09/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Walk along the undulating stone watchtowers of the Great Wall snaking across rugged mountain ridges, and tour the 9,999-room imperial Forbidden City.",
    "highlights": [
      "Mutianyu Great Wall cable car ascent and thrilling toboggan slide",
      "Forbidden City (Imperial Palace) & Tiananmen Square VIP tour",
      "Temple of Heaven park morning Tai Chi demonstration",
      "Traditional Beijing roast duck banquet at historic restaurant",
      "Rickshaw ride through narrow ancient Hutong courtyards"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Beijing Capital Arrival & Hutong Hotel",
        "desc": "Check into restored courtyard Siheyuan hotel and enjoy welcome tea."
      },
      {
        "day": 2,
        "title": "Tiananmen Square & The Forbidden City",
        "desc": "Walk through the Meridian Gate into the palace where 24 emperors ruled."
      },
      {
        "day": 3,
        "title": "Mutianyu Great Wall Hike & Toboggan",
        "desc": "Walk along ancient stone watchtowers with mountain views as far as the eye can see."
      },
      {
        "day": 4,
        "title": "Summer Palace & Imperial Marble Boat",
        "desc": "Stroll the Long Corridor beside Kunming Lake and walk the 17-arch bridge."
      },
      {
        "day": 5,
        "title": "Temple of Heaven & Crispy Peking Duck Dinner",
        "desc": "Visit circular Hall of Prayer for Good Harvests followed by chef-carved roast duck."
      },
      {
        "day": 6,
        "title": "Beijing Daxing Airport Departure",
        "desc": "Private transfer for departure flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "guilin-li-river",
    "title": "Guilin Karst Peaks & Li River",
    "country": "China",
    "location": "Guilin & Yangshuo",
    "category": "Mountain",
    "duration": "5 Days / 4 Nights",
    "price": 1600,
    "rating": 4.9,
    "reviewsCount": 180,
    "departureDate": "10/12/2026",
    "imageUrl": "https://images.unsplash.com/photo-1537536965476-eb3478950d26?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1537536965476-eb3478950d26?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Like stepping into a Chinese watercolor painting. Cruise the Li River past emerald limestone karst peaks, water buffaloes, and cormorant fishermen.",
    "highlights": [
      "Li River luxury cruise from Guilin to Yangshuo",
      "Traditional cormorant bird night fishing demonstration",
      "Bicycle tour through emerald rice paddies and bamboo groves",
      "Reed Flute Cave glowing subterranean limestone palace",
      "Impression Sanjie Liu outdoor light show on the water"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Guilin Arrival & Elephant Trunk Hill",
        "desc": "Arrive in scenic Guangxi and see the iconic rock arch drinking from the river."
      },
      {
        "day": 2,
        "title": "Li River Cruise past Karst Pinnacles",
        "desc": "Sail 4 hours through scenery depicted on the Chinese 20-yuan banknote."
      },
      {
        "day": 3,
        "title": "Yangshuo Countryside Bike Ride & Bamboo Raft",
        "desc": "Drift down the quiet Yulong River on two-man hand-poled bamboo rafts."
      },
      {
        "day": 4,
        "title": "Moon Hill & Night Light Show",
        "desc": "Climb through the natural stone moon arch before colossal river theater show."
      },
      {
        "day": 5,
        "title": "Guilin Airport Transfer & Departure",
        "desc": "Transfer for your return flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "hoi-an-lanterns",
    "title": "Hoi An Ancient Lantern Town",
    "country": "Vietnam",
    "location": "Hoi An & Da Nang",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1200,
    "rating": 4.9,
    "reviewsCount": 260,
    "departureDate": "11/08/2026",
    "imageUrl": "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Thousands of glowing silk lanterns reflected in the Thu B\u1ed3n River, 16th-century Japanese covered bridges, golden yellow merchant shophouses, and tailor shops.",
    "highlights": [
      "Release candlelit paper lanterns onto the Thu B\u1ed3n River",
      "Walk across the 400-year-old Japanese Covered Bridge",
      "Custom bespoke silk tailoring experience within 24 hours",
      "Bicycle ride to Tra Que organic vegetable farming village",
      "Golden Bridge colossal stone hands in Ba Na Hills day trip"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Da Nang Flight & Transfer to Hoi An",
        "desc": "Check-in to riverside boutique resort and take evening walk under glowing lanterns."
      },
      {
        "day": 2,
        "title": "Ancient Town Shophouses & Cooking Class",
        "desc": "Tour preserved Chinese assembly halls and learn to make crispy banh xeo."
      },
      {
        "day": 3,
        "title": "Ba Na Hills & Golden Bridge Giant Hands",
        "desc": "Cable car high above mountain clouds to walk along the giant stone hands."
      },
      {
        "day": 4,
        "title": "An Bang Beach Relaxation & Tailor Fittings",
        "desc": "Morning beachside relaxation followed by final fittings for custom suits and dresses."
      },
      {
        "day": 5,
        "title": "Da Nang International Airport Departure",
        "desc": "Short transfer for departure flight."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "angkor-wat-temples",
    "title": "Angkor Wat & Khmer Mysteries",
    "country": "Cambodia",
    "location": "Siem Reap & Angkor",
    "category": "Cultural",
    "duration": "5 Days / 4 Nights",
    "price": 1400,
    "rating": 4.9,
    "reviewsCount": 290,
    "departureDate": "11/20/2026",
    "imageUrl": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The largest religious monument in the world. Watch dawn break over the five lotus towers of Angkor Wat, see giant jungle banyan tree roots strangle Ta Prohm.",
    "highlights": [
      "Sunrise over the lotus reflection ponds of Angkor Wat",
      "Ta Prohm jungle temple intertwined with colossal strangler fig roots",
      "Bayon temple with 216 enigmatic smiling stone faces of Avalokiteshvara",
      "Tuk-tuk temple hopping through grand sandstone moats and gates",
      "Tonle Sap floating village boat cruise at sunset"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Siem Reap Arrival & Sunset Temple View",
        "desc": "Welcome with private tuk-tuk transfer to French colonial courtyard hotel."
      },
      {
        "day": 2,
        "title": "Angkor Wat Dawn & Bayon Smiling Faces",
        "desc": "Early morning sunrise over central towers followed by ancient Khmer stone carvings."
      },
      {
        "day": 3,
        "title": "Ta Prohm (Tomb Raider) & Banteay Srei",
        "desc": "Marvel at tree roots crushing stone walls and pink sandstone intricate carvings."
      },
      {
        "day": 4,
        "title": "Tonle Sap Lake Floating Village & Stilt Houses",
        "desc": "Boat through floating schools, markets, and flooded mangrove forests."
      },
      {
        "day": 5,
        "title": "Artisans Angkor Workshop & Departure",
        "desc": "Observe silk weavers and stone carvers before transfer to Siem Reap Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "sri-lanka-sigiriya",
    "title": "Sigiriya Rock & Ella Highlands",
    "country": "Sri Lanka",
    "location": "Sigiriya, Kandy & Ella",
    "category": "Adventure",
    "duration": "7 Days / 6 Nights",
    "price": 1550,
    "rating": 4.9,
    "reviewsCount": 210,
    "departureDate": "10/18/2026",
    "imageUrl": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "Ascend the colossal 660-foot granite Lion Rock fortress of Sigiriya, ride the blue train through emerald Ceylon tea plantations, and photograph the Nine Arches Bridge.",
    "highlights": [
      "Climb Sigiriya Lion Rock ancient sky palace fortress",
      "Iconic blue scenic train journey from Kandy to Ella",
      "Walk the Nine Arches stone railway bridge through tea fields",
      "Temple of the Sacred Tooth Relic cultural evening in Kandy",
      "Minneriya National Park elephant gathering safari"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Colombo Arrival & Drive to Cultural Triangle",
        "desc": "Arrive and transfer to luxury eco-lodge near the ancient citadel."
      },
      {
        "day": 2,
        "title": "Sigiriya Rock Fortress & Minneriya Safari",
        "desc": "Climb past ancient frescoes to the summit and watch wild elephant herds."
      },
      {
        "day": 3,
        "title": "Dambulla Cave Temples & Scenic Drive to Kandy",
        "desc": "Five cave sanctuaries filled with Buddha statues and golden paint."
      },
      {
        "day": 4,
        "title": "Kandy Tooth Relic Temple & Botanical Gardens",
        "desc": "Royal botanical garden giant bamboo trees and sacred tooth temple ceremony."
      },
      {
        "day": 5,
        "title": "World-Famous Blue Train to Ella",
        "desc": "Hang out of open doors as train curves past misty tea carpeted hills."
      },
      {
        "day": 6,
        "title": "Nine Arches Bridge & Little Adam\u2019s Peak",
        "desc": "Watch the train steam over the viaduct and hike for panoramic gap views."
      },
      {
        "day": 7,
        "title": "Return to Colombo & Airport Departure",
        "desc": "Scenic descent back to Bandaranaike International Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "kruger-safari",
    "title": "Kruger National Park Big Five Safari",
    "country": "South Africa",
    "location": "Greater Kruger & Sabi Sands",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 3200,
    "rating": 5.0,
    "reviewsCount": 175,
    "departureDate": "09/02/2026",
    "imageUrl": "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "One of Africas greatest wildlife sanctuaries. Open-vehicle morning and night game drives tracking lions, leopards, white rhinos, elephants, and cape buffaloes.",
    "highlights": [
      "Twice-daily open-top 4x4 game drives with master trackers",
      "High concentration of wild leopards in private Sabi Sands reserve",
      "Luxury safari lodge with private plunge pool overlooking waterhole",
      "Bushwalk with armed rangers learning animal tracks and flora",
      "Boma fireside dinners under brilliant Southern Cross stars"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Johannesburg Flight to Kruger & Sunset Safari",
        "desc": "Bush plane flight landing directly on private lodge airstrip."
      },
      {
        "day": 2,
        "title": "Dawn & Dusk Big Five Game Drives",
        "desc": "Track pride of lions on morning hunt and spotlight leopards at night."
      },
      {
        "day": 3,
        "title": "Guided Bushwalk & Waterhole Relaxation",
        "desc": "Feel the African earth on foot before watching elephants drink from deck."
      },
      {
        "day": 4,
        "title": "Full Day Kruger Deep Wilderness Exploration",
        "desc": "Cross river bridges viewing hippos, crocodiles, and cheetahs on open plains."
      },
      {
        "day": 5,
        "title": "Rhino Conservation & Farewell Boma Feast",
        "desc": "Learn anti-poaching conservation followed by traditional South African braai."
      },
      {
        "day": 6,
        "title": "Morning Safari & Flight to Johannesburg",
        "desc": "Final sunrise drive before connecting flight to O.R. Tambo Airport."
      }
    ],
    "isFeatured": true
  },
  {
    "id": "masai-mara-kenya",
    "title": "Masai Mara Wildlife Reserve",
    "country": "Kenya",
    "location": "Masai Mara National Reserve",
    "category": "Adventure",
    "duration": "6 Days / 5 Nights",
    "price": 3100,
    "rating": 5.0,
    "reviewsCount": 230,
    "departureDate": "08/22/2026",
    "imageUrl": "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    "gallery": [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80"
    ],
    "overview": "The jewel of East Africa. Endless golden savannas dotted with acacia trees, Mara River crossings with massive crocodiles, and majestic black-maned lions.",
    "highlights": [
      "Hot air balloon safari at dawn floating above migrating herds",
      "Mara River crossing viewpoints watching wildebeest braving crocodiles",
      "Luxury tented camp with private veranda over the Talek River",
      "Visit traditional Maasai village and learn ancient spear throwing",
      "Full-day game drive with picnic lunch under lone acacia trees"
    ],
    "itinerary": [
      {
        "day": 1,
        "title": "Nairobi Flight to Masai Mara Airstrip",
        "desc": "Scenic flight over the Great Rift Valley into the heart of the reserve."
      },
      {
        "day": 2,
        "title": "Full Day Mara Safari & Big Cat Tracking",
        "desc": "Follow lion prides and spot cheetah coalitions stalking across open grass."
      },
      {
        "day": 3,
        "title": "Sunrise Hot Air Balloon & Bush Breakfast",
        "desc": "Silent sunrise aerial views followed by champagne and eggs in the wild."
      },
      {
        "day": 4,
        "title": "Mara River Crossing & Hippo Pools",
        "desc": "Watch hundreds of wildebeests leap into the river past giant crocodiles."
      },
      {
        "day": 5,
        "title": "Maasai Manyatta Village Experience",
        "desc": "Traditional high-jumping Adumu dance and fire-making cultural exchange."
      },
      {
        "day": 6,
        "title": "Morning Safari & Fly to Nairobi Departure",
        "desc": "Return flight to Wilson Airport and transfer to Jomo Kenyatta Airport."
      }
    ],
    "isFeatured": true
  }
];
