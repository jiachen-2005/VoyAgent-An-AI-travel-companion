/**
 * VoyAgent Mock Data
 * FIT3161 - Personal AI Travel Companion (Malaysia Exclusively)
 * Authentic verified reviews, realistic pricing (MYR), & multi-region Malaysian travel profiles.
 */

window.VOYAGENT_DATA = {
  // Preset Trips for Malaysia
  trips: {
    kl: {
      id: "kl",
      title: "Kuala Lumpur Cultural Tapestry & Modern Skyline",
      destination: "Kuala Lumpur, Malaysia",
      duration: "3 Days / 2 Nights",
      budget: {
        total: "RM 2,500",
        allocated: "RM 1,980",
        currency: "MYR",
        percentUsed: 79,
        breakdown: [
          { category: "Lodging (Bukit Bintang / KLCC)", amount: "RM 950", share: "48%", icon: "hotel" },
          { category: "Street Food & Dining", amount: "RM 520", share: "26%", icon: "utensils" },
          { category: "Grab & LRT/MRT Transit", amount: "RM 190", share: "10%", icon: "train" },
          { category: "Twin Towers & Cultural Passes", amount: "RM 220", share: "11%", icon: "landmark" },
          { category: "Batu Caves & Artisan Crafts", amount: "RM 100", share: "5%", icon: "shopping-bag" }
        ]
      },
      tags: ["Foodie Focus", "Urban Skyline", "Cultural Heritage", "Tropical Exploration"],
      weatherForecast: [
        { day: "Day 1 (Fri)", temp: "32°C / 24°C", condition: "Partly Cloudy", icon: "cloud-sun", rain: "20%", alert: false },
        { day: "Day 2 (Sat)", temp: "31°C / 24°C", condition: "Tropical Shower (PM)", icon: "cloud-rain", rain: "75%", alert: true, alertText: "Monsoon shower expected 15:30-17:30 (32mm)" },
        { day: "Day 3 (Sun)", temp: "33°C / 25°C", condition: "Sunny & Humid", icon: "sun", rain: "10%", alert: false }
      ],
      days: [
        {
          dayNumber: 1,
          dateTitle: "Day 1: Historic Core, River of Life & Hawker Street Feasts",
          slots: [
            {
              id: "kl1",
              time: "09:00 - 11:30",
              title: "Merdeka Square & Sultan Abdul Samad Building",
              category: "Colonial Heritage",
              desc: "Admire the iconic 1897 Moorish copper domes, the 95-meter flagpole at historic Merdeka Square, and the mist-shrouded River of Life confluence at Masjid Jamek.",
              location: "Jalan Raja, City Centre",
              coords: [3.1486, 101.6944],
              rating: "4.7 (18.5k)",
              ratingScore: 4.7,
              reviewCount: "18.5k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "8 min walk across heritage pedestrian bridge to Chinatown (600m)" }
            },
            {
              id: "kl2",
              time: "11:45 - 14:15",
              title: "Petaling Street & Kwai Chai Hong (Chinatown)",
              category: "Heritage & Gastronomy",
              desc: "Wander through restored 1960s pre-war shophouses, nostalgic interactive street murals, and heritage cafes serving Hainanese kopi, charcoal kaya toast, and claypot chicken rice.",
              location: "Chinatown, Kuala Lumpur",
              coords: [3.1438, 101.6980],
              rating: "4.6 (22.8k)",
              ratingScore: 4.6,
              reviewCount: "22.8k",
              cost: "RM 35 lunch & kopi",
              transitNext: { mode: "subway", info: "MRT Pasar Seni to Bukit Bintang Station (6 min)" }
            },
            {
              id: "kl3",
              time: "15:00 - 17:45",
              title: "Bukit Bintang & Pavilion KL Trend Epicentre",
              category: "Modern Retail & Lifestyle",
              desc: "Experience Kuala Lumpur's vibrant premier shopping district, featuring the world-famous Liuli Crystal Fountain, international designer flagship stores, and artisanal bakeries.",
              location: "Bukit Bintang, KL",
              coords: [3.1485, 101.7135],
              rating: "4.8 (34k)",
              ratingScore: 4.8,
              reviewCount: "34k",
              cost: "Free exploration",
              transitNext: { mode: "footprints", info: "5 min walk through Changkat to Jalan Alor (350m)" }
            },
            {
              id: "kl4",
              time: "18:15 - 20:45",
              title: "Jalan Alor Street Food Night Feast",
              category: "Street Food Haven",
              desc: "Bustling open-air street dining under glowing red lanterns. Sample legendary charcoal-grilled chicken wings at Wong Ah Wah, spicy chili butter crab, satay skewers, and fresh Musang King durian.",
              location: "Jalan Alor, Bukit Bintang",
              coords: [3.1458, 101.7088],
              rating: "4.7 (29.1k)",
              ratingScore: 4.7,
              reviewCount: "29.1k",
              cost: "RM 65 dinner feast"
            }
          ]
        },
        {
          dayNumber: 2,
          dateTitle: "Day 2: Sacred Rainbow Steps & Iconic Twin Towers Skyline",
          slots: [
            {
              id: "kl5",
              time: "08:30 - 11:30",
              title: "Batu Caves Rainbow Steps & Temple Caverns",
              category: "Sacred Hindu Sanctuary",
              desc: "Climb the world-famous 272 vibrant rainbow-painted limestone steps towering beneath the 140-foot golden Lord Murugan statue, leading into awe-inspiring cathedral limestone caverns.",
              location: "Gombak, Selangor",
              coords: [3.2379, 101.6840],
              rating: "4.8 (42k)",
              ratingScore: 4.8,
              reviewCount: "42k",
              cost: "Free entrance",
              transitNext: { mode: "train", info: "KTM Komuter from Batu Caves to KL Sentral, LRT to KLCC (35 min)" }
            },
            {
              id: "kl6",
              time: "12:30 - 15:00",
              title: "Petronas Twin Towers Skybridge & Suria KLCC",
              category: "Architectural Icon",
              desc: "Marvel at the world's tallest twin towers designed by César Pelli. Step onto the double-deck Skybridge at Level 41 (170m) and the Level 86 observatory deck offering jaw-dropping 360° city panoramas.",
              location: "KLCC, Kuala Lumpur",
              coords: [3.1579, 101.7116],
              rating: "4.9 (55k)",
              ratingScore: 4.9,
              reviewCount: "55k",
              cost: "RM 98 Skybridge ticket",
              transitNext: { mode: "footprints", info: "3 min scenic walk through mall concourse to KLCC Park (200m)" }
            },
            {
              id: "kl7",
              time: "15:30 - 17:45",
              title: "KLCC Park & Tropical Symphony Lake",
              category: "Urban Oasis & Garden",
              desc: "Relax in a 50-acre master-planned tropical park with lush indigenous rainforest trees, landscaped walking paths, and pristine reflection viewpoints looking back at the gleaming towers.",
              location: "KLCC Park, Kuala Lumpur",
              coords: [3.1553, 101.7139],
              rating: "4.7 (21k)",
              ratingScore: 4.7,
              reviewCount: "21k",
              cost: "Free entrance",
              isVulnerableToRain: true,
              transitNext: { mode: "footprints", info: "5 min walk to Marini's on 57 / Petronas Tower 3 (350m)" }
            },
            {
              id: "kl8",
              time: "18:15 - 20:45",
              title: "Marini's on 57 Rooftop Lounge & Lake Symphony",
              category: "Skyline Lounge & Dining",
              desc: "Perched on the 57th floor directly adjacent to Tower 3, enjoy craft mocktails and Italian bites while watching the magical Lake Symphony musical fountain light show beneath the glittering skyline.",
              location: "Petronas Tower 3, Level 57",
              coords: [3.1565, 101.7118],
              rating: "4.8 (8.7k)",
              ratingScore: 4.8,
              reviewCount: "8.7k",
              cost: "RM 120 evening lounge"
            }
          ]
        },
        {
          dayNumber: 3,
          dateTitle: "Day 3: Tropical Botanical Rainforest & Heritage Temples",
          slots: [
            {
              id: "kl9",
              time: "08:30 - 11:00",
              title: "Perdana Botanical Gardens & Orchid Sanctuary",
              category: "Tropical Rainforest Park",
              desc: "Stroll through Kuala Lumpur's lush heritage parkland featuring thousands of blooming tropical orchids, giant bamboo groves, sunken fountains, and calm lily-pad lakes.",
              location: "Jalan Kebun Bunga, KL",
              coords: [3.1432, 101.6854],
              rating: "4.7 (14k)",
              ratingScore: 4.7,
              reviewCount: "14k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "7 min shaded walk to Islamic Arts Museum (500m)" }
            },
            {
              id: "kl10",
              time: "11:15 - 13:45",
              title: "Islamic Arts Museum Malaysia (IAMM)",
              category: "World-Class Museum",
              desc: "Southeast Asia's largest museum of Islamic art, featuring turquoise glazed domes, intricate Ottoman calligraphic scrolls, Mughal royal jewelry, and miniature architectural mosque models.",
              location: "Jalan Lembah, Tasik Perdana",
              coords: [3.1417, 101.6897],
              rating: "4.8 (9.8k)",
              ratingScore: 4.8,
              reviewCount: "9.8k",
              cost: "RM 20 museum pass",
              transitNext: { mode: "car", info: "10 min Grab car ride up to Robson Heights (4.2km)" }
            },
            {
              id: "kl11",
              time: "14:15 - 16:30",
              title: "Thean Hou Temple Robson Heights Ridge",
              category: "Cultural Landmark Temple",
              desc: "A stunning six-tiered Hainanese temple honoring goddess Mazu, adorned with hundreds of glowing red lanterns, ornate dragon roof ridges, and sweeping panoramic views of the city skyline.",
              location: "Lorong Bellamy, Robson Heights",
              coords: [3.1218, 101.6868],
              rating: "4.8 (19.2k)",
              ratingScore: 4.8,
              reviewCount: "19.2k",
              cost: "Free entrance",
              transitNext: { mode: "car", info: "12 min Grab car to KL Sentral Transit Terminal (3.8km)" }
            },
            {
              id: "kl12",
              time: "17:00 - 19:00",
              title: "KL Sentral & Nu Sentral Departure Souvenirs",
              category: "Transit Hub & Gourmet Gifts",
              desc: "Pick up authentic Malaysian treats including Beryl's artisan chocolates, OldTown white coffee, and Royal Selangor pewter before boarding the 28-minute non-stop KLIA Ekspres to the airport.",
              location: "KL Sentral Hub, Brickfields",
              coords: [3.1342, 101.6861],
              rating: "4.6 (15k)",
              ratingScore: 4.6,
              reviewCount: "15k",
              cost: "RM 85 gifts & KLIA train"
            }
          ]
        }
      ]
    },

    penang: {
      id: "penang",
      title: "Penang UNESCO Heritage & Culinary Trail",
      destination: "Penang, Malaysia",
      duration: "4 Days / 3 Nights",
      budget: {
        total: "RM 2,200",
        allocated: "RM 1,820",
        currency: "MYR",
        percentUsed: 83,
        breakdown: [
          { category: "Lodging (George Town Shophouse)", amount: "RM 960", share: "53%", icon: "hotel" },
          { category: "Street Food & Peranakan Dining", amount: "RM 520", share: "28%", icon: "utensils" },
          { category: "Grab & Rapid Penang Transit", amount: "RM 160", share: "9%", icon: "train" },
          { category: "Penang Hill Funicular & Passes", amount: "RM 120", share: "7%", icon: "landmark" },
          { category: "Nutmeg & Tambun Confectionery", amount: "RM 60", share: "3%", icon: "shopping-bag" }
        ]
      },
      tags: ["Foodie Capital", "UNESCO Heritage", "Colonial History", "Scenic Views"],
      weatherForecast: [
        { day: "Day 1 (Thu)", temp: "31°C / 25°C", condition: "Sunny & Breezy", icon: "sun", rain: "10%", alert: false },
        { day: "Day 2 (Fri)", temp: "30°C / 24°C", condition: "Coastal Shower (PM)", icon: "cloud-rain", rain: "70%", alert: true, alertText: "Coastal shower expected 15:00-17:00 (25mm)" },
        { day: "Day 3 (Sat)", temp: "32°C / 25°C", condition: "Clear & Humid", icon: "cloud-sun", rain: "15%", alert: false },
        { day: "Day 4 (Sun)", temp: "31°C / 25°C", condition: "Tropical Sunshine", icon: "sun", rain: "10%", alert: false }
      ],
      days: [
        {
          dayNumber: 1,
          dateTitle: "Day 1: Historic George Town Shophouses & Street Food Haven",
          slots: [
            {
              id: "pen1",
              time: "09:00 - 11:30",
              title: "Pinang Peranakan Mansion & Heritage Courtyard",
              category: "Baba Nyonya Heritage",
              desc: "Step inside a sumptuous 19th-century emerald-green mansion showcasing over 1,000 antique Peranakan artifacts, gold-leaf woodwork, English floor tiles, and intricate porcelain dinnerware.",
              location: "Church Street, George Town",
              coords: [5.4180, 100.3406],
              rating: "4.8 (14.2k)",
              ratingScore: 4.8,
              reviewCount: "14.2k",
              cost: "RM 25 entry",
              transitNext: { mode: "footprints", info: "6 min walk through heritage streets to Armenian St (450m)" }
            },
            {
              id: "pen2",
              time: "11:45 - 14:15",
              title: "Armenian Street Murals & Heritage Coffee",
              category: "UNESCO Street Murals",
              desc: "Explore Ernest Zacharevic's world-famous 'Kids on Bicycle' street mural, quirky steel-rod caricatures, antique toy museums, and artisanal cold brew coffee shops.",
              location: "Armenian Street, George Town",
              coords: [5.4150, 100.3375],
              rating: "4.7 (21.5k)",
              ratingScore: 4.7,
              reviewCount: "21.5k",
              cost: "Free exploration",
              transitNext: { mode: "footprints", info: "7 min walk towards the waterfront (550m)" }
            },
            {
              id: "pen3",
              time: "15:00 - 17:30",
              title: "Clan Jetties (Chew Jetty) Stilt Village",
              category: "Historic Maritime Stilt Settlement",
              desc: "Wander along historic 19th-century wooden boardwalks suspended above tidal waters, built by early Chinese immigrant clans with temple shrines and sea breeze.",
              location: "Weld Quay, George Town",
              coords: [5.4128, 100.3400],
              rating: "4.6 (18.1k)",
              ratingScore: 4.6,
              reviewCount: "18.1k",
              cost: "Free exploration",
              transitNext: { mode: "footprints", info: "8 min walk to Chulia Street culinary corridor (600m)" }
            },
            {
              id: "pen4",
              time: "18:00 - 20:30",
              title: "Chulia Street & Kimberley Street Night Food Feast",
              category: "Legendary Street Food",
              desc: "Feast on Penang's most iconic Michelin Bib Gourmand hawker dishes: smoky wok-hei Char Kway Teow with duck egg, spicy sour Assam Laksa, and duck meat Koay Chiap.",
              location: "Chulia Street, George Town",
              coords: [5.4169, 100.3340],
              rating: "4.8 (26.4k)",
              ratingScore: 4.8,
              reviewCount: "26.4k",
              cost: "RM 45 hawker feast"
            }
          ]
        },
        {
          dayNumber: 2,
          dateTitle: "Day 2: Sacred Hilltop Pagodas & Rainforest Biosphere Canopy",
          slots: [
            {
              id: "pen5",
              time: "08:30 - 11:30",
              title: "Kek Lok Si Temple & Pagoda of 10,000 Buddhas",
              category: "Buddhist Monastery Complex",
              desc: "Southeast Asia's largest Buddhist temple complex atop Crane Hill, featuring the 7-tier Ban Po Thar Pagoda, ponds with hundreds of sacred tortoises, and a 30m bronze Guanyin statue.",
              location: "Air Itam, Penang",
              coords: [5.3995, 100.2736],
              rating: "4.8 (32.8k)",
              ratingScore: 4.8,
              reviewCount: "32.8k",
              cost: "RM 6 incline lift",
              transitNext: { mode: "car", info: "10 min Grab car ride to Penang Hill Lower Station (3.2km)" }
            },
            {
              id: "pen6",
              time: "12:00 - 14:45",
              title: "Penang Hill Funicular & The Habitat Biosphere",
              category: "Hilltop Nature & UNESCO Biosphere",
              desc: "Ride the Swiss-engineered funicular railway 833 meters above sea level. Walk the Curtis Crest tree-top canopy walk overlooking lush 130-million-year-old virgin rainforest.",
              location: "Bukit Bendera, Penang",
              coords: [5.4246, 100.2690],
              rating: "4.7 (28.9k)",
              ratingScore: 4.7,
              reviewCount: "28.9k",
              cost: "RM 30 funicular ticket",
              transitNext: { mode: "footprints", info: "3 min scenic garden path to David Brown's terrace (180m)" }
            },
            {
              id: "pen7",
              time: "15:00 - 17:00",
              title: "David Brown's Hilltop Tea Terrace & Garden",
              category: "Colonial Afternoon Tea",
              desc: "Relax in a quintessential British colonial garden restaurant on strawberry hill, sipping English breakfast tea and warm scones with panoramic views over George Town and the Penang Strait.",
              location: "Penang Hill Summit",
              coords: [5.4239, 100.2681],
              rating: "4.6 (6.5k)",
              ratingScore: 4.6,
              reviewCount: "6.5k",
              cost: "RM 55 afternoon tea",
              transitNext: { mode: "train", info: "Funicular descent + 15 min Grab to Gurney Drive (8.5km)" }
            },
            {
              id: "pen8",
              time: "18:00 - 20:30",
              title: "Gurney Drive Hawker Centre & Seafront Promenade",
              category: "Coastal Dining & Night Promenade",
              desc: "Sample Penang Rojak, crispy oyster omelette (Oh Chien), and nutmeg juice along Penang's premier seafront hawker hub while feeling the cool Malacca Strait sea breeze.",
              location: "Gurney Drive, George Town",
              coords: [5.4398, 100.3090],
              rating: "4.7 (22k)",
              ratingScore: 4.7,
              reviewCount: "22k",
              cost: "RM 50 dinner"
            }
          ]
        },
        {
          dayNumber: 3,
          dateTitle: "Day 3: Coastal Spice Gardens & White Sand Beach",
          slots: [
            {
              id: "pen9",
              time: "09:00 - 11:30",
              title: "Tropical Spice Garden & Eco Trails",
              category: "Botanical Living Museum",
              desc: "Discover over 500 species of exotic spices, herbs, and tropical flora nestled in a secluded coastal valley. Walk shaded fern groves and breathe in fragrant cinnamon and lemongrass.",
              location: "Teluk Bahang, Penang",
              coords: [5.4633, 100.2290],
              rating: "4.7 (7.2k)",
              ratingScore: 4.7,
              reviewCount: "7.2k",
              cost: "RM 31 garden ticket",
              transitNext: { mode: "car", info: "5 min Grab drive to Entopia (2.1km)" }
            },
            {
              id: "pen13",
              time: "11:45 - 13:45",
              title: "Entopia by Penang Butterfly Farm",
              category: "Tropical Sanctuary & Butterfly Aviary",
              desc: "A massive glass dome aviary home to over 15,000 free-flying tropical butterflies, cascading waterfalls, living cocoon discovery stations, and lush indoor rainforest flora.",
              location: "Teluk Bahang, Penang",
              coords: [5.4646, 100.2248],
              rating: "4.8 (11.5k)",
              ratingScore: 4.8,
              reviewCount: "11.5k",
              cost: "RM 45 entry pass",
              transitNext: { mode: "car", info: "8 min coastal Grab drive to Batu Ferringhi (5km)" }
            },
            {
              id: "pen10",
              time: "14:15 - 17:30",
              title: "Batu Ferringhi Beach & Waterfront Lounge",
              category: "Tropical Coast & White Sand",
              desc: "Unwind on golden sands framed by casuarina trees. Enjoy fresh chilled coconut water and local seafood laksa overlooking gentle emerald waves.",
              location: "Batu Ferringhi Coast",
              coords: [5.4746, 100.2470],
              rating: "4.6 (16.5k)",
              ratingScore: 4.6,
              reviewCount: "16.5k",
              cost: "RM 35 lunch & refreshments",
              transitNext: { mode: "footprints", info: "3 min walk to night market street (150m)" }
            },
            {
              id: "pen14",
              time: "18:00 - 20:30",
              title: "Batu Ferringhi Night Market & Seafood Grill",
              category: "Beachfront Night Market & Dining",
              desc: "Browse colorful artisan beach stalls under palm trees and feast on charcoal-grilled fresh tiger prawns, sambal stingray, and tropical fruit smoothies along the coast.",
              location: "Jalan Batu Ferringhi",
              coords: [5.4741, 100.2460],
              rating: "4.7 (19k)",
              ratingScore: 4.7,
              reviewCount: "19k",
              cost: "RM 55 seafood dinner"
            }
          ]
        },
        {
          dayNumber: 4,
          dateTitle: "Day 4: Colonial Bastions, Heritage Clan Houses & Souvenirs",
          slots: [
            {
              id: "pen11",
              time: "09:00 - 11:00",
              title: "Fort Cornwallis & Queen Victoria Memorial Clock",
              category: "Colonial Bastion & Maritime Beacon",
              desc: "Explore the star-shaped fort built by Captain Francis Light in 1786, the bronze Seri Rambai cannon, gunpowder magazine, and the 60-foot diamond jubilee clock tower.",
              location: "Padang Kota Lama, George Town",
              coords: [5.4206, 100.3440],
              rating: "4.6 (11.8k)",
              ratingScore: 4.6,
              reviewCount: "11.8k",
              cost: "RM 20 entrance",
              transitNext: { mode: "footprints", info: "7 min walk into heritage quarter to Khoo Kongsi (550m)" }
            },
            {
              id: "pen15",
              time: "11:15 - 13:30",
              title: "Khoo Kongsi Leong San Tong Clan Temple",
              category: "Grand Chinese Clan Temple Architecture",
              desc: "Regarded as the most magnificent Chinese clan temple in Southeast Asia, adorned with intricate stone pillar dragons, gold-leaf gables, and 1906 guild hall heritage.",
              location: "Cannon Square, George Town",
              coords: [5.4144, 100.3364],
              rating: "4.9 (16.2k)",
              ratingScore: 4.9,
              reviewCount: "16.2k",
              cost: "RM 15 entrance",
              transitNext: { mode: "footprints", info: "8 min walk to Chowrasta Market (650m)" }
            },
            {
              id: "pen12",
              time: "14:00 - 16:00",
              title: "Chowrasta Market Local Confectionery & Tea",
              category: "Heritage Market & Artisan Souvenirs",
              desc: "Stock up on authentic Penang gifts: freshly baked Ghee Hiang baby tambun biscuits, preserved nutmeg slices, Belacan shrimp paste, and White Kopi before heading to the airport.",
              location: "Penang Road, George Town",
              coords: [5.4168, 100.3315],
              rating: "4.6 (13.4k)",
              ratingScore: 4.6,
              reviewCount: "13.4k",
              cost: "RM 40 gifts & snacks",
              transitNext: { mode: "car", info: "25 min Grab ride to Penang International Airport (16km)" }
            },
            {
              id: "pen16",
              time: "16:30 - 18:30",
              title: "Penang International Airport (PIA) Departure Hub",
              category: "Aviation Hub & Duty Free Concourse",
              desc: "Board flights connecting to Kuala Lumpur, Singapore, or regional destinations, concluding an unforgettable 4-day culinary, nature, and cultural journey across Penang.",
              location: "Bayan Lepas, Penang",
              coords: [5.2971, 100.2768],
              rating: "4.6 (12.8k)",
              ratingScore: 4.6,
              reviewCount: "12.8k",
              cost: "Free departure"
            }
          ]
        }
      ]
    },

    melaka: {
      id: "melaka",
      title: "Melaka Historic Straits Port & Peranakan Trail",
      destination: "Melaka, Malaysia",
      duration: "3 Days / 2 Nights",
      budget: {
        total: "RM 1,200",
        allocated: "RM 960",
        currency: "MYR",
        percentUsed: 80,
        breakdown: [
          { category: "Lodging (Riverside Heritage Hotel)", amount: "RM 460", share: "48%", icon: "hotel" },
          { category: "Nyonya Dining & Jonker Street Bites", amount: "RM 310", share: "32%", icon: "utensils" },
          { category: "Melaka River Cruise & Trishaw", amount: "RM 90", share: "9%", icon: "train" },
          { category: "Museum Passes & St. Paul's Hill", amount: "RM 50", share: "5%", icon: "landmark" },
          { category: "Gula Melaka & Artisan Handcrafts", amount: "RM 50", share: "5%", icon: "shopping-bag" }
        ]
      },
      tags: ["UNESCO Straits Port", "Peranakan Heritage", "Historic Architecture", "Riverfront Charm"],
      weatherForecast: [
        { day: "Day 1 (Thu)", temp: "32°C / 24°C", condition: "Sunny & Warm", icon: "sun", rain: "10%", alert: false },
        { day: "Day 2 (Fri)", temp: "31°C / 24°C", condition: "Afternoon Drizzle (PM)", icon: "cloud-rain", rain: "60%", alert: true, alertText: "Brief coastal shower 16:00-17:30 (15mm)" },
        { day: "Day 3 (Sat)", temp: "33°C / 25°C", condition: "Tropical Sunshine", icon: "sun", rain: "5%", alert: false }
      ],
      days: [
        {
          dayNumber: 1,
          dateTitle: "Day 1: Dutch Red Square, Colonial Fortress & Jonker Night Market",
          slots: [
            {
              id: "mel1",
              time: "09:00 - 11:15",
              title: "Dutch Square (Red Square) & Christ Church",
              category: "Colonial Dutch Architecture",
              desc: "Stand amid terracotta-red colonial structures built by the Dutch in the 17th-18th century, including Christ Church (1753), the Stadthuys museum, and the Queen Victoria Fountain.",
              location: "Bandar Hilir, Melaka",
              coords: [2.1942, 102.2492],
              rating: "4.8 (28.5k)",
              ratingScore: 4.8,
              reviewCount: "28.5k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "4 min walk through shaded gardens up St. Paul's Hill (250m)" }
            },
            {
              id: "mel2",
              time: "11:30 - 13:45",
              title: "A Famosa (Porta de Santiago) & St. Paul's Church",
              category: "Portuguese Colonial Fortress",
              desc: "Explore the ruins of the Portuguese fortress built in 1511 by Afonso de Albuquerque, and climb St. Paul's Hill for expansive views over the Malacca Strait and ancient tombstones.",
              location: "Jalan Kota, Bandar Hilir",
              coords: [2.1925, 102.2497],
              rating: "4.7 (24k)",
              ratingScore: 4.7,
              reviewCount: "24k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "6 min walk across historic bridge to Jonker Street (400m)" }
            },
            {
              id: "mel3",
              time: "14:15 - 16:30",
              title: "Baba & Nyonya Heritage Museum",
              category: "Peranakan Townhouse Mansion",
              desc: "Discover three adjoining pre-war heritage terrace townhouses restored with Victorian Dutch tiles, gilded blackwood mother-of-pearl furniture, and opulent silk Kebayas.",
              location: "Jalan Tun Tan Cheng Lock, Melaka",
              coords: [2.1963, 102.2464],
              rating: "4.8 (9.6k)",
              ratingScore: 4.8,
              reviewCount: "9.6k",
              cost: "RM 18 guided tour",
              transitNext: { mode: "footprints", info: "2 min walk into Jonker Street (150m)" }
            },
            {
              id: "mel4",
              time: "17:30 - 20:30",
              title: "Jonker Street Night Market & Chicken Rice Balls",
              category: "Historic Night Market & Food",
              desc: "Sample iconic Hainanese steamed chicken with fragrant hand-rolled rice balls, Peranakan Popiah with crispy pork lard, grilled coconut otak-otak, and icy shaved Cendol with smoky Gula Melaka.",
              location: "Jalan Hang Jebat (Jonker Walk)",
              coords: [2.1975, 102.2472],
              rating: "4.8 (38.2k)",
              ratingScore: 4.8,
              reviewCount: "38.2k",
              cost: "RM 45 night dinner"
            }
          ]
        },
        {
          dayNumber: 2,
          dateTitle: "Day 2: Historic River Navigation & Maritime Galleon Museum",
          slots: [
            {
              id: "mel5",
              time: "09:30 - 11:30",
              title: "Melaka River Cruise & Waterfront Murals",
              category: "Riverfront Heritage Navigation",
              desc: "Embark on a gentle 45-minute cruise along the historic trading canal once lined with spice warehouses. Admire restored shophouses painted with colorful Malaysian murals.",
              location: "Muara Jetty, Melaka River",
              coords: [2.1948, 102.2483],
              rating: "4.7 (22.5k)",
              ratingScore: 4.7,
              reviewCount: "22.5k",
              cost: "RM 30 riverboat pass",
              transitNext: { mode: "footprints", info: "4 min walk to Maritime Museum (300m)" }
            },
            {
              id: "mel6",
              time: "11:45 - 14:00",
              title: "Flora de la Mar Maritime Museum (Replica Galleon)",
              category: "Maritime History Museum",
              desc: "Step aboard an impressive 34-meter tall life-sized replica of the Portuguese galleon Flora de la Mar, housing historical trade charts, porcelain cargo, and maritime navigational relics.",
              location: "Jalan Merdeka, Bandar Hilir",
              coords: [2.1917, 102.2465],
              rating: "4.6 (14k)",
              ratingScore: 4.6,
              reviewCount: "14k",
              cost: "RM 12 museum entry",
              transitNext: { mode: "car", info: "7 min Grab ride upriver to Kampung Morten (2.2km)" }
            },
            {
              id: "mel7",
              time: "14:30 - 16:45",
              title: "Kampung Morten Traditional Malay Heritage Village",
              category: "Living Malay Cultural Hamlet",
              desc: "Known as a living museum, this traditional Malay village on the riverbank features ornate carved timber stilt houses with colorful ceramic staircases and lush tropical potted plants.",
              location: "Kampung Morten, Melaka",
              coords: [2.2028, 102.2505],
              rating: "4.7 (7.8k)",
              ratingScore: 4.7,
              reviewCount: "7.8k",
              cost: "Free entrance",
              transitNext: { mode: "car", info: "12 min Grab ride to Straits Floating Mosque (4.8km)" }
            },
            {
              id: "mel8",
              time: "17:15 - 19:45",
              title: "Melaka Straits Mosque (Masjid Selat Melaka) Sunset",
              category: "Floating Sanctuary & Sunset Haven",
              desc: "Built on stilts above the sea on Pulau Melaka, this modern mosque blends Middle Eastern and Malay architecture. At high tide, it appears to float serenely on the glowing sunset waters.",
              location: "Pulau Melaka, Melaka",
              coords: [2.1772, 102.2506],
              rating: "4.9 (19.8k)",
              ratingScore: 4.9,
              reviewCount: "19.8k",
              cost: "Free entrance"
            }
          ]
        },
        {
          dayNumber: 3,
          dateTitle: "Day 3: Straits Panorama & Traditional Confectionery Crafts",
          slots: [
            {
              id: "mel9",
              time: "09:30 - 11:30",
              title: "Menara Taming Sari 360° Revolving Tower",
              category: "Revolving Panoramic Observatory",
              desc: "Ascend 110 meters into the air inside a Swiss-designed air-conditioned revolving glass cabin, offering 360-degree views of Melaka city, the Straits of Malacca, and historic St. Paul's Hill.",
              location: "Jalan Merdeka, Bandar Hilir",
              coords: [2.1908, 102.2476],
              rating: "4.6 (15.2k)",
              ratingScore: 4.6,
              reviewCount: "15.2k",
              cost: "RM 23 observatory pass",
              transitNext: { mode: "footprints", info: "9 min walk to Harmony Street (650m)" }
            },
            {
              id: "mel10",
              time: "11:45 - 13:45",
              title: "Cheng Hoon Teng Temple & Harmony Street",
              category: "Oldest Taoist Sanctuary (1645)",
              desc: "Malaysia's oldest functioning Chinese temple, renowned for exquisite lacquerwork and ridge dragons. Situated along Jalan Tokong alongside historic mosques and Hindu shrines.",
              location: "Jalan Tokong, Melaka",
              coords: [2.1979, 102.2458],
              rating: "4.8 (8.9k)",
              ratingScore: 4.8,
              reviewCount: "8.9k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "3 min walk to San Shu Gong souvenir flagship (200m)" }
            },
            {
              id: "mel11",
              time: "14:15 - 16:30",
              title: "San Shu Gong Traditional Confectionery House",
              category: "Historic Confectionery & Gula Melaka Treats",
              desc: "Pick up authentic Melaka delicacies: pure Nyonya Gula Melaka palm sugar cylinders, durian dodol, pineapple tarts, and freshly prepared bowl of shaved durian cendol upstairs.",
              location: "Jalan Hang Jebat, Jonker Walk",
              coords: [2.1956, 102.2481],
              rating: "4.7 (12.3k)",
              ratingScore: 4.7,
              reviewCount: "12.3k",
              cost: "RM 35 gifts & snacks",
              transitNext: { mode: "car", info: "15 min Grab to Melaka Sentral (4.5km)" }
            },
            {
              id: "mel12",
              time: "17:00 - 18:30",
              title: "Melaka Sentral Regional Departure Hub",
              category: "Regional Express Bus Terminal",
              desc: "Board frequent luxury express coaches direct to Kuala Lumpur (2 hours) or Singapore (4 hours), concluding a deeply enriching journey along Malaysia's historic trading strait.",
              location: "Peringgit, Melaka",
              coords: [2.2216, 102.2498],
              rating: "4.5 (8.1k)",
              ratingScore: 4.5,
              reviewCount: "8.1k",
              cost: "RM 30 express bus"
            }
          ]
        }
      ]
    },

    kotakinabalu: {
      id: "kotakinabalu",
      title: "Kota Kinabalu Borneo Nature & Island Escape",
      destination: "Kota Kinabalu, Sabah, Malaysia",
      duration: "3 Days / 2 Nights",
      budget: {
        total: "RM 2,200",
        allocated: "RM 1,750",
        currency: "MYR",
        percentUsed: 80,
        breakdown: [
          { category: "Lodging (Waterfront / Kundasang)", amount: "RM 820", share: "47%", icon: "hotel" },
          { category: "Fresh Seafood & Kadazan Dining", amount: "RM 480", share: "27%", icon: "utensils" },
          { category: "Island Speedboat & Mountain Van", amount: "RM 240", share: "14%", icon: "train" },
          { category: "Marine Park & Canopy Walk Passes", amount: "RM 130", share: "7%", icon: "landmark" },
          { category: "Sabah Pearl & Artisan Souvenirs", amount: "RM 80", share: "5%", icon: "shopping-bag" }
        ]
      },
      tags: ["Borneo Nature", "Marine Park", "Mount Kinabalu", "Fresh Seafood"],
      weatherForecast: [
        { day: "Day 1 (Thu)", temp: "31°C / 24°C", condition: "Sunny & Island Breeze", icon: "sun", rain: "10%", alert: false },
        { day: "Day 2 (Fri)", temp: "22°C / 16°C", condition: "Highland Mist & Cloud", icon: "cloud-rain", rain: "40%", alert: false },
        { day: "Day 3 (Sat)", temp: "32°C / 25°C", condition: "Coastal Sunshine", icon: "sun", rain: "10%", alert: false }
      ],
      days: [
        {
          dayNumber: 1,
          dateTitle: "Day 1: Coral Islands & World-Renowned Tanjung Aru Sunset",
          slots: [
            {
              id: "kk1",
              time: "09:00 - 10:30",
              title: "Jesselton Point Ferry Terminal & Marine Hub",
              category: "Historic Maritime Pier",
              desc: "Historic British North Borneo colonial port terminal. Board comfortable twin-engine speedboats slicing across emerald waters towards the protected marine park islands.",
              location: "Jalan Haji Saman, Kota Kinabalu",
              coords: [5.9912, 116.0792],
              rating: "4.7 (11.5k)",
              ratingScore: 4.7,
              reviewCount: "11.5k",
              cost: "RM 35 boat transfer",
              transitNext: { mode: "boat", info: "15 min speedboat across crystal coral sea (6km)" }
            },
            {
              id: "kk2",
              time: "11:00 - 14:30",
              title: "Tunku Abdul Rahman Marine Park (Manukan Island)",
              category: "Coral Island & Snorkeling Reserve",
              desc: "Relax on powdery white sand beaches and snorkel amid thriving shallow coral reefs home to clownfish, blue sea stars, and parrotfish in turquoise tropical waters.",
              location: "Manukan Island, Sabah",
              coords: [5.9744, 116.0076],
              rating: "4.8 (21k)",
              ratingScore: 4.8,
              reviewCount: "21k",
              cost: "RM 25 conservation pass",
              transitNext: { mode: "boat", info: "Speedboat return to city, 15 min Grab to Tanjung Aru (9km)" }
            },
            {
              id: "kk3",
              time: "16:30 - 18:45",
              title: "Tanjung Aru Beach Sunset Promenade",
              category: "World Top 10 Sunset Coast",
              desc: "Experience Sabah's world-famous fiery sunset, with sky shifting from incandescent gold to vivid purple over the South China Sea. Enjoy fresh avocado and mango smoothies.",
              location: "Tanjung Aru, Kota Kinabalu",
              coords: [5.9485, 116.0450],
              rating: "4.9 (35.2k)",
              ratingScore: 4.9,
              reviewCount: "35.2k",
              cost: "Free entrance",
              transitNext: { mode: "car", info: "10 min Grab car to Waterfront Night Market (5km)" }
            },
            {
              id: "kk4",
              time: "19:15 - 21:30",
              title: "Kota Kinabalu Waterfront & Night Food Market",
              category: "Seafood Feast & Night Market",
              desc: "Feast on live charcoal-grilled tiger prawns, sambal stingray, spicy squid skewers, and Kadazan Hinava raw fish salad while watching illuminated fishing boats return.",
              location: "Jalan Tun Fuad Stephens, KK",
              coords: [5.9818, 116.0722],
              rating: "4.7 (24.1k)",
              ratingScore: 4.7,
              reviewCount: "24.1k",
              cost: "RM 65 seafood dinner"
            }
          ]
        },
        {
          dayNumber: 2,
          dateTitle: "Day 2: Mount Kinabalu Foothills, Canopy Walk & Highland Breeze",
          slots: [
            {
              id: "kk5",
              time: "08:00 - 11:00",
              title: "Kinabalu UNESCO National Park Headquarters",
              category: "UNESCO World Heritage Foothills",
              desc: "Marvel at the majestic granite peaks of 4,095m Mount Kinabalu towering above mist-laden valleys. Walk guided botanical trails featuring rare wild pitcher plants and native orchids.",
              location: "Ranau, Sabah",
              coords: [6.0069, 116.5414],
              rating: "4.9 (18.6k)",
              ratingScore: 4.9,
              reviewCount: "18.6k",
              cost: "RM 50 park pass",
              transitNext: { mode: "car", info: "35 min scenic mountain drive to Poring Hot Springs (28km)" }
            },
            {
              id: "kk6",
              time: "11:45 - 14:15",
              title: "Poring Hot Springs & Treetop Canopy Walkway",
              category: "Lowland Rainforest & Treetop Walk",
              desc: "Walk suspended 40 meters above the jungle floor on rope bridges between giant Menggaris trees, followed by soaking in soothing natural sulphur mineral pools.",
              location: "Poring, Ranau",
              coords: [5.9675, 116.7039],
              rating: "4.7 (14.2k)",
              ratingScore: 4.7,
              reviewCount: "14.2k",
              cost: "RM 20 canopy walk",
              transitNext: { mode: "car", info: "30 min mountain drive to Desa Dairy Farm (22km)" }
            },
            {
              id: "kk7",
              time: "15:00 - 16:45",
              title: "Desa Cattle Dairy Farm ('Sabah\'s New Zealand')",
              category: "Highland Pasture & Scenic Viewpoint",
              desc: "Lush green rolling pastures nestled right against the towering rocky wall of Mount Kinabalu. Savor fresh gelato, bottled Jersey milk, and cheese pudding.",
              location: "Kundasang Highlands",
              coords: [5.9806, 116.5908],
              rating: "4.8 (27.5k)",
              ratingScore: 4.8,
              reviewCount: "27.5k",
              cost: "RM 5 entrance & gelato",
              transitNext: { mode: "car", info: "8 min drive down to Kundasang market (3.5km)" }
            },
            {
              id: "kk8",
              time: "17:15 - 19:30",
              title: "Kundasang Highland Market & Mountain Rest",
              category: "Alpine Market & Cool Climate Haven",
              desc: "Breathe crisp 18°C mountain air while browsing fresh highland strawberries, sweet corn, and honey. Enjoy a steaming hotpot dinner before returning down the range.",
              location: "Kundasang Town, Ranau",
              coords: [5.9863, 116.5772],
              rating: "4.6 (12k)",
              ratingScore: 4.6,
              reviewCount: "12k",
              cost: "RM 45 hotpot dinner"
            }
          ]
        },
        {
          dayNumber: 3,
          dateTitle: "Day 3: City Heritage, Floating Mosque & Waterfront Artisan Pearls",
          slots: [
            {
              id: "kk9",
              time: "09:00 - 11:15",
              title: "Kota Kinabalu City Mosque ('Floating Mosque')",
              category: "Contemporary Islamic Architecture",
              desc: "A stunning white and blue modern sanctuary surrounded by a man-made saltwater lagoon. Its reflection on the calm water creates a mesmerizing floating illusion.",
              location: "Likas Bay, Kota Kinabalu",
              coords: [5.9959, 116.1080],
              rating: "4.8 (19.4k)",
              ratingScore: 4.8,
              reviewCount: "19.4k",
              cost: "RM 10 rental & visit",
              transitNext: { mode: "car", info: "10 min Grab ride to Signal Hill (4.2km)" }
            },
            {
              id: "kk10",
              time: "11:45 - 13:30",
              title: "Signal Hill Eco Observatory Platform",
              category: "Panoramic City & Ocean Lookout",
              desc: "Perched atop the highest hill within the CBD, offering 180° sweeping views over the city grid, Likas Bay, and the offshore islands of Tunku Abdul Rahman Park.",
              location: "Signal Hill, Kota Kinabalu",
              coords: [5.9868, 116.0799],
              rating: "4.6 (9.1k)",
              ratingScore: 4.6,
              reviewCount: "9.1k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "7 min walk downhill to Handicraft Market (500m)" }
            },
            {
              id: "kk11",
              time: "14:00 - 16:30",
              title: "Sabah Handicraft Market (Sabah Pearls & Sompoton)",
              category: "Artisan Crafts & Freshwater Pearls",
              desc: "Famous for genuine Sabah saltwater and freshwater pearl jewelry, handwoven Rungus beaded necklaces, bamboo Sompoton instruments, and rich Tenom coffee beans.",
              location: "Jalan Tun Fuad Stephens, KK",
              coords: [5.9809, 116.0715],
              rating: "4.6 (16.2k)",
              ratingScore: 4.6,
              reviewCount: "16.2k",
              cost: "RM 60 gifts & coffee",
              transitNext: { mode: "car", info: "15 min Grab to KK International Airport (8.5km)" }
            },
            {
              id: "kk12",
              time: "17:00 - 18:30",
              title: "Kota Kinabalu International Airport (KKIA) Hub",
              category: "Borneo Aviation Gateway",
              desc: "Board flights connecting to Kuala Lumpur, Singapore, or international hubs, finishing an unforgettable wildlife, marine, and mountain adventure across Sabah.",
              location: "KKIA Terminal 1, Kepayan",
              coords: [5.9372, 116.0512],
              rating: "4.6 (14k)",
              ratingScore: 4.6,
              reviewCount: "14k",
              cost: "Free departure"
            }
          ]
        }
      ]
    }
  },

  // Dynamic Replanning Event: Kuala Lumpur Day 2 Afternoon Tropical Shower
  replannedKlDay2: {
    event: "Monsoon Downpour Alert in Kuala Lumpur (Expected from 15:30)",
    agentReasoning: [
      "Weather Alert: KLCC Park open walking trails and lake garden exposed to intense tropical downpour.",
      "Indoor Search: Identified premium sheltered indoor attractions connected via underground air-conditioned tunnel.",
      "Schedule Swap: Replaced open outdoor lake walk with Aquaria KLCC 90m underwater oceanarium tunnel and Petrosains Discovery Centre.",
      "Transit Adjusted: Rerouted via direct covered air-conditioned pedestrian walkway."
    ],
    toolCalls: [
      { step: "Monsoon Rainfall Detection", detail: "Heavy downpour expected 15:30 - 17:30 (32mm)", icon: "cloud-rain" },
      { step: "Sheltered POI Discovery", detail: "Found Aquaria KLCC & Petrosains Discovery Centre", icon: "landmark" },
      { step: "Underground Walkway Routing", detail: "Direct covered tunnel connection under KLCC", icon: "footprints" }
    ],
    newSlots: [
      {
        id: "kl5",
        time: "08:30 - 11:30",
        title: "Batu Caves Rainbow Steps & Temple Caverns",
        category: "Sacred Hindu Sanctuary",
        desc: "Climb the world-famous 272 vibrant rainbow-painted limestone steps towering beneath the 140-foot golden Lord Murugan statue, leading into awe-inspiring cathedral limestone caverns.",
        location: "Gombak, Selangor",
        coords: [3.2379, 101.6840],
        rating: "4.8 (42k)",
        ratingScore: 4.8,
        reviewCount: "42k",
        cost: "Free entrance",
        transitNext: { mode: "train", info: "KTM Komuter from Batu Caves to KL Sentral, LRT to KLCC (35 min)" }
      },
      {
        id: "kl6",
        time: "12:30 - 15:00",
        title: "Petronas Twin Towers Skybridge & Suria KLCC",
        category: "Architectural Icon",
        desc: "Marvel at the world's tallest twin towers designed by César Pelli. Step onto the double-deck Skybridge at Level 41 (170m) and the Level 86 observatory deck offering jaw-dropping 360° city panoramas.",
        location: "KLCC, Kuala Lumpur",
        coords: [3.1579, 101.7116],
        rating: "4.9 (55k)",
        ratingScore: 4.9,
        reviewCount: "55k",
        cost: "RM 98 Skybridge ticket",
        transitNext: { mode: "footprints", info: "5 min sheltered walk via underground air-conditioned tunnel (250m)" }
      },
      {
        id: "kl7_replanned",
        time: "15:30 - 17:45",
        title: "Aquaria KLCC 90m Oceanarium Tunnel",
        category: "Sheltered Oceanarium",
        desc: "Stay completely dry inside one of Southeast Asia's premier aquariums, featuring a 90-meter transparent underwater walkway with sand tiger sharks, giant stingrays, and sea turtles swimming overhead.",
        location: "KL Convention Centre Concourse",
        coords: [3.1534, 101.7132],
        rating: "4.7 (19.4k)",
        ratingScore: 4.7,
        reviewCount: "19.4k",
        cost: "RM 75 aquarium pass",
        replanned: true,
        originalTitle: "KLCC Park & Tropical Symphony Lake",
        transitNext: { mode: "footprints", info: "Direct covered indoor link to Suria KLCC culinary level (200m)" }
      },
      {
        id: "kl8_replanned",
        time: "18:15 - 20:45",
        title: "Suria KLCC Dining & Indoor Symphony Lake View",
        category: "Sheltered Panoramic Dining",
        desc: "Dine on authentic Malaysian cuisine (Nasi Lemak & Beef Rendang) at Madam Kwan's, followed by indoor glass-front views of the musical Lake Symphony lights safely away from the tropical rain.",
        location: "Suria KLCC Level 4, Petronas Towers",
        coords: [3.1582, 101.7120],
        rating: "4.8 (12k)",
        ratingScore: 4.8,
        reviewCount: "12k",
        cost: "RM 85 dinner",
        replanned: true,
        originalTitle: "Marini's on 57 Rooftop Lounge"
      }
    ]
  },

  // =========================================================================
  // Authentic POI Ratings, Traveler Feedback & Social Sentiment Database
  // Directly implements Project Developing Guide Section 3.12 & ratings extension
  // =========================================================================
  reviews: {
    // ==========================================
    // Kuala Lumpur POI Reviews & Feedback
    // ==========================================
    "kl1": {
      poiName: "Merdeka Square & Sultan Abdul Samad Building",
      category: "Colonial Moorish Landmark & Historic Square",
      overallScore: 4.7,
      totalReviews: "18,520",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.5, value: 4.8 },
      socialSentiment: {
        platform: "TikTok & Xiaohongshu",
        trendTag: "Moorish Architecture & River of Life",
        sentimentScore: "96% Positive Sentiment",
        summary: "Travelers strongly recommend morning visits for quiet colonial photography, or evening strolls when the Sultan Abdul Samad building is lit and the River of Life blue mist display runs."
      },
      breakdown: [ { stars: 5, pct: 79 }, { stars: 4, pct: 16 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl1-1", author: "Ahmad Farhan", persona: "Local Guide", avatarText: "AF", rating: 5, date: "Visited 2 weeks ago", tag: "River of Life Mist", text: "The view of the Moorish copper domes reflected against the mist-fountain of the Klang-Gombak river confluence at dusk is spectacular. Cross the pedestrian bridge directly into Chinatown afterwards.", helpful: 46 }
      ]
    },
    "kl2": {
      poiName: "Petaling Street & Kwai Chai Hong (Chinatown)",
      category: "Heritage Shophouses & Gastronomy Hub",
      overallScore: 4.6,
      totalReviews: "22,800",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.9, crowdControl: 4.1, value: 4.7 },
      socialSentiment: {
        platform: "Instagram & Xiaohongshu",
        trendTag: "Interactive 1960s Murals & Claypot Rice",
        sentimentScore: "95% Positive Sentiment",
        summary: "Kwai Chai Hong's restored red bridge and interactive acoustic murals are a photographer favorite. Foodies recommend arriving hungry for charcoal claypot chicken rice and Pandan egg tarts."
      },
      breakdown: [ { stars: 5, pct: 74 }, { stars: 4, pct: 20 }, { stars: 3, pct: 4 }, { stars: 2, pct: 2 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl2-1", author: "Rachel Lim", persona: "Foodie Focus", avatarText: "RL", rating: 5, date: "Visited last week", tag: "Hidden Murals", text: "Scan the QR codes next to the street murals in Kwai Chai Hong to hear voice clips of 1960s street vendors. Grab iced Hainanese kopi and kaya butter toast at Bunn Choon nearby.", helpful: 39 }
      ]
    },
    "kl3": {
      poiName: "Bukit Bintang & Pavilion KL Trend Epicentre",
      category: "Premier Retail & Vibrant Urban Boulevard",
      overallScore: 4.8,
      totalReviews: "34,000",
      recommendRate: "97%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.8, crowdControl: 4.3, value: 4.6 },
      socialSentiment: {
        platform: "TikTok & Broadsheet",
        trendTag: "Pavilion Crystal Fountain & Tokyo Street",
        sentimentScore: "97% Positive Sentiment",
        summary: "The beating heart of KL's urban buzz. Travelers praise the cool air-conditioned retreat, Tokyo Street precinct, and the elevated sheltered skybridge linking directly to KLCC."
      },
      breakdown: [ { stars: 5, pct: 81 }, { stars: 4, pct: 15 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl3-1", author: "Daniel Lee", persona: "Solo / Couple", avatarText: "DL", rating: 5, date: "Visited 3 days ago", tag: "Skybridge Walkway", text: "Pavilion is enormous and pristine. Best feature is the elevated air-conditioned pedestrian walkway that takes you straight into Suria KLCC in under 12 minutes without stepping into the heat.", helpful: 51 }
      ]
    },
    "kl4": {
      poiName: "Jalan Alor Street Food Night Feast",
      category: "World-Renowned Open-Air Street Dining Hub",
      overallScore: 4.7,
      totalReviews: "29,100",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.6, crowdControl: 3.9, value: 4.7 },
      socialSentiment: {
        platform: "YouTube & Xiaohongshu",
        trendTag: "Wong Ah Wah BBQ Wings & Musang King",
        sentimentScore: "96% Positive Sentiment",
        summary: "Vibrant yellow glow of hawker signboards stretching the whole block. Reviews unanimously rate the charcoal smoked chicken wings at Wong Ah Wah and salted egg squid as must-orders."
      },
      breakdown: [ { stars: 5, pct: 78 }, { stars: 4, pct: 17 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl4-1", author: "Kenji Tanaka", persona: "Foodie Focus", avatarText: "KT", rating: 5, date: "Visited September 2026", tag: "Smoky Charcoal Wings", text: "Wong Ah Wah at the end of the street lives up to the reputation. The chicken wings have a deeply caramelized smoky skin, paired with iced sugar cane juice. Outstanding evening vibe.", helpful: 62 }
      ]
    },
    "kl5": {
      poiName: "Batu Caves Rainbow Steps & Temple Caverns",
      category: "Sacred Hindu Sanctuary & Limestone Caverns",
      overallScore: 4.8,
      totalReviews: "42,000",
      recommendRate: "98%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.1, value: 4.9 },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "272 Rainbow Steps & Lord Murugan Statue",
        sentimentScore: "98% Positive Sentiment",
        summary: "One of the most shared landmarks in Southeast Asia. Tips emphasize arriving by 08:30 AM to ascend the 272 colorful steps in the cool morning shade and watching out for playful macaque monkeys."
      },
      breakdown: [ { stars: 5, pct: 85 }, { stars: 4, pct: 12 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl5-1", author: "Siddharth Nair", persona: "Cultural Explorer", avatarText: "SN", rating: 5, date: "Visited August 2026", tag: "Morning Ascent", text: "The sheer scale of the limestone cavern ceiling with natural sunbeams piercing through is breathtaking. Dress respectfully (shoulders and knees covered for temple entry).", helpful: 58 }
      ]
    },
    "kl6": {
      poiName: "Petronas Twin Towers Skybridge & Suria KLCC",
      category: "Global Architectural Landmark · Observation Deck",
      overallScore: 4.9,
      totalReviews: "55,000",
      recommendRate: "99%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.7, value: 4.8 },
      socialSentiment: {
        platform: "Google Reviews & Xiaohongshu",
        trendTag: "Level 41 Skybridge & Level 86 Observation",
        sentimentScore: "99% Positive Sentiment",
        summary: "The definitive symbol of modern Malaysia. Booking timed entry slots at least 3-5 days in advance is universally recommended for the Level 41 bridge and Level 86 telescope deck."
      },
      breakdown: [ { stars: 5, pct: 90 }, { stars: 4, pct: 8 }, { stars: 3, pct: 1 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl6-1", author: "Emily Watson", persona: "Solo / Couple", avatarText: "EW", rating: 5, date: "Visited last month", tag: "360 Panoramic Deck", text: "Standing on the glass Skybridge suspended between the two towers was thrilling. The staff manage visitor flow with precision, so you get uninterrupted panoramic views.", helpful: 71 }
      ]
    },
    "kl7": {
      poiName: "KLCC Park & Tropical Symphony Lake",
      category: "50-Acre Master-Planned Urban Rainforest Park",
      overallScore: 4.7,
      totalReviews: "21,000",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.4, value: 4.9 },
      socialSentiment: {
        platform: "Xiaohongshu & Instagram",
        trendTag: "Best Tower Reflection Angle & Lake Symphony",
        sentimentScore: "96% Positive Sentiment",
        summary: "The prime vantage point to photograph both towers in one frame. Note that the open walking loop is fully exposed during afternoon monsoon downpours."
      },
      breakdown: [ { stars: 5, pct: 79 }, { stars: 4, pct: 16 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl7-1", author: "Hafiz Ibrahim", persona: "Family Leisure", avatarText: "HI", rating: 5, date: "Visited 3 weeks ago", tag: "Reflection Pool View", text: "Walk out onto the arched wooden bridge across Symphony Lake at 17:00 for stunning reflections of the silver towers. If rain begins, you can duck into the mall in seconds.", helpful: 34 }
      ]
    },
    "kl8": {
      poiName: "Marini's on 57 Rooftop Lounge & Lake Symphony",
      category: "Premier High-Altitude Lounge · Petronas Tower 3",
      overallScore: 4.8,
      totalReviews: "8,700",
      recommendRate: "97%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.6, value: 4.6 },
      socialSentiment: {
        platform: "Broadsheet & OpenTable",
        trendTag: "Tower Spire Close-Up & Sunset Cocktails",
        sentimentScore: "97% Positive Sentiment",
        summary: "Direct unobstructed floor-to-ceiling glass perspectives of the illuminated Petronas spires. Smart casual dress code enforced."
      },
      breakdown: [ { stars: 5, pct: 83 }, { stars: 4, pct: 13 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl8-1", author: "Claire & Thomas", persona: "Solo / Couple", avatarText: "CT", rating: 5, date: "Visited August 2026", tag: "Tower Spire Close-Up", text: "You are literally face-to-face with the gleaming stainless steel facade of Tower 2. Sunset mocktails while the sky turned magenta was unforgettable.", helpful: 48 }
      ]
    },
    "kl9": {
      poiName: "Perdana Botanical Gardens & Orchid Sanctuary",
      category: "Historic Botanical Parkland & Lake Garden",
      overallScore: 4.7,
      totalReviews: "14,200",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.7, crowdControl: 4.5, value: 4.9 },
      socialSentiment: {
        platform: "Google Reviews & TikTok",
        trendTag: "Sunken Bamboo Pavilion & Giant Ferns",
        sentimentScore: "95% Positive Sentiment",
        summary: "Peaceful morning sanctuary in the heart of Kuala Lumpur. Shaded lakeside paths and thousands of blooming orchids."
      },
      breakdown: [ { stars: 5, pct: 76 }, { stars: 4, pct: 19 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl9-1", author: "Lianne Becker", persona: "Solo Cultural Traveler", avatarText: "LB", rating: 5, date: "Visited 2 weeks ago", tag: "Morning Shaded Walk", text: "Rent a free bicycle or walk along the boardwalk. The Bamboo Playhaus structure and sunken gardens feel thousands of miles away from city traffic.", helpful: 31 }
      ]
    },
    "kl10": {
      poiName: "Islamic Arts Museum Malaysia (IAMM)",
      category: "Premier Islamic Heritage Museum · Tasik Perdana",
      overallScore: 4.8,
      totalReviews: "9,800",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.9, crowdControl: 4.8, value: 4.9 },
      socialSentiment: {
        platform: "TripAdvisor & Xiaohongshu",
        trendTag: "Turquoise Domes & Miniature Mosques",
        sentimentScore: "98% Positive Sentiment",
        summary: "Consistently rated one of Asia's finest museums. Four levels of pristine turquoise domes, Ottoman armor, Mughal jewelry, and scale models of world mosques."
      },
      breakdown: [ { stars: 5, pct: 86 }, { stars: 4, pct: 11 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl10-1", author: "Nadia Mansoor", persona: "Cultural Explorer", avatarText: "NM", rating: 5, date: "Visited last month", tag: "Architectural Models", text: "The scale model of the Taj Mahal and Mecca Masjid are breathtakingly detailed. Exceptional air-conditioning and museum cafe serving fragrant Middle Eastern tea.", helpful: 42 }
      ]
    },
    "kl11": {
      poiName: "Thean Hou Temple Robson Heights Ridge",
      category: "Six-Tiered Hainanese Sea Goddess Sanctuary",
      overallScore: 4.8,
      totalReviews: "19,200",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.3, value: 4.9 },
      socialSentiment: {
        platform: "Instagram & Xiaohongshu",
        trendTag: "Red Lantern Canopy & Skyline Vista",
        sentimentScore: "98% Positive Sentiment",
        summary: "Perched high on Robson Heights. The courtyard canopy of hundreds of hanging vermilion lanterns framing the KL skyline is one of the most photographed scenes in Malaysia."
      },
      breakdown: [ { stars: 5, pct: 85 }, { stars: 4, pct: 12 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl11-1", author: "Winnie Chew", persona: "Foodie Focus", avatarText: "WC", rating: 5, date: "Visited September 2026", tag: "Lantern Canopy", text: "Climb up to the top tier balcony. The contrast between traditional Chinese pagoda curves and modern skyscrapers in the distance is stunning.", helpful: 54 }
      ]
    },
    "kl12": {
      poiName: "KL Sentral & Nu Sentral Departure Souvenirs",
      category: "National Transit Hub & Premium Artisan Gifts",
      overallScore: 4.6,
      totalReviews: "15,200",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.5, photoSpots: 4.2, crowdControl: 4.3, value: 4.7 },
      socialSentiment: {
        platform: "Google Reviews & Travel Forum",
        trendTag: "Beryl's Chocolate & KLIA Ekspres",
        sentimentScore: "94% Positive Sentiment",
        summary: "The central rail interchange. Smooth airport transit via 28-min KLIA Ekspres, with Nu Sentral offering Beryl's chocolates, white coffee, and duty-free gifts."
      },
      breakdown: [ { stars: 5, pct: 72 }, { stars: 4, pct: 22 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl12-1", author: "Boon Kiat", persona: "Fast-Paced Business", avatarText: "BK", rating: 5, date: "Visited 1 week ago", tag: "Smooth Airport Link", text: "Checked in bags directly at KL Sentral and boarded the KLIA Ekspres. Super clean, fast, and picked up boxes of Malaysian white coffee in Nu Sentral beforehand.", helpful: 26 }
      ]
    },
    "kl7_replanned": {
      poiName: "Aquaria KLCC 90m Oceanarium Tunnel",
      category: "Sheltered Underground Oceanarium · Marine Reserve",
      overallScore: 4.7,
      totalReviews: "19,400",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.2, value: 4.6 },
      socialSentiment: {
        platform: "Xiaohongshu & TripAdvisor",
        trendTag: "90m Underwater Tunnel & Shark Feeding",
        sentimentScore: "96% Positive Sentiment",
        summary: "Ideal sheltered escape during tropical afternoon downpours. The 90m transparent tunnel featuring sand tiger sharks and giant stingrays swimming overhead is completely climate-controlled."
      },
      breakdown: [ { stars: 5, pct: 79 }, { stars: 4, pct: 17 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl7-rep-1", author: "Darren Koh", persona: "Family Leisure", avatarText: "DK", rating: 5, date: "Visited during rainstorm", tag: "Sheltered Haven", text: "Heavy tropical rain started at 3:30 PM outside, but we stayed bone dry inside the tunnel with sharks gliding right over us. Connected directly to Suria KLCC underground.", helpful: 37 }
      ]
    },
    "kl8_replanned": {
      poiName: "Suria KLCC Dining & Indoor Symphony Lake View",
      category: "Sheltered Panoramic Dining · Premier Mall Concourse",
      overallScore: 4.8,
      totalReviews: "12,100",
      recommendRate: "97%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.8, crowdControl: 4.4, value: 4.7 },
      socialSentiment: {
        platform: "OpenTable & Broadsheet",
        trendTag: "Madam Kwan's Nasi Lemak & Lake View",
        sentimentScore: "97% Positive Sentiment",
        summary: "Watch the colorful Symphony Lake fountains through floor-to-ceiling glass windows while savoring award-winning Malaysian culinary classics in air-conditioned comfort."
      },
      breakdown: [ { stars: 5, pct: 82 }, { stars: 4, pct: 15 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kl8-rep-1", author: "Jessica Wong", persona: "Foodie Focus", avatarText: "JW", rating: 5, date: "Visited Autumn 2026", tag: "Best Nasi Lemak", text: "Madam Kwan's Nasi Lemak with chicken curry and beef rendang is unforgettable. Glass window views of the illuminated fountains gave us the full evening experience despite the thunderstorm.", helpful: 45 }
      ]
    },

    // ==========================================
    // Penang POI Reviews & Feedback
    // ==========================================
    "pen1": {
      poiName: "Pinang Peranakan Mansion & Heritage Courtyard",
      category: "UNESCO World Heritage · Baba Nyonya Museum",
      overallScore: 4.8,
      totalReviews: "14,200",
      recommendRate: "97%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.4, value: 4.8 },
      socialSentiment: {
        platform: "Xiaohongshu & TripAdvisor",
        trendTag: "Emerald Courtyard & Gold Carvings",
        sentimentScore: "97% Positive Sentiment",
        summary: "Praised as the most lavishly restored Peranakan residence in Southeast Asia. Guided tours bring the fascinating Baba Nyonya culture to life."
      },
      breakdown: [ { stars: 5, pct: 83 }, { stars: 4, pct: 14 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen1-1", author: "Serena Khoo", persona: "Cultural Explorer", avatarText: "SK", rating: 5, date: "Visited last week", tag: "Antique Jewelry", text: "The intricacy of the beaded Nyonya slippers and gold-leaf doors is awe-inspiring. Taking photos in the green courtyard feels like stepping back 130 years.", helpful: 43 }
      ]
    },
    "pen2": {
      poiName: "Armenian Street Murals & Heritage Coffee",
      category: "Interactive Street Art Precinct",
      overallScore: 4.7,
      totalReviews: "21,500",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 5.0, crowdControl: 4.0, value: 4.9 },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Kids on Bicycle & Steel Wire Murals",
        sentimentScore: "96% Positive Sentiment",
        summary: "The epicenter of George Town's artistic street charm. Best visited in the morning before midday sun warms the stone alleyways."
      },
      breakdown: [ { stars: 5, pct: 78 }, { stars: 4, pct: 18 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen2-1", author: "Jonathan Teoh", persona: "Solo / Couple", avatarText: "JT", rating: 5, date: "Visited 3 weeks ago", tag: "Morning Photography", text: "Arrived at 8:30 AM and had 'Kids on Bicycle' completely to ourselves. Grabbed a rich iced White Kopi from the corner heritage shophouse right after.", helpful: 52 }
      ]
    },
    "pen3": {
      poiName: "Clan Jetties (Chew Jetty) Stilt Village",
      category: "Living Chinese Maritime Heritage Settlement",
      overallScore: 4.6,
      totalReviews: "18,100",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.8, crowdControl: 4.1, value: 4.9 },
      socialSentiment: {
        platform: "TikTok & Google Reviews",
        trendTag: "Timber Boardwalk & Sunset Harbor",
        sentimentScore: "94% Positive Sentiment",
        summary: "Rustic wooden stilt houses perched above tidal flats. Respectful quiet exploration is appreciated by the resident families."
      },
      breakdown: [ { stars: 5, pct: 73 }, { stars: 4, pct: 21 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 1 } ],
      reviews: [
        { id: "rev-pen3-1", author: "Eileen Tan", persona: "Local Guide", avatarText: "ET", rating: 5, date: "Visited September 2026", tag: "Tidal Breeze", text: "Walking out to the very end of the timber pier as fishing boats glide past with the Penang ferry in the distance is pure nostalgia.", helpful: 38 }
      ]
    },
    "pen4": {
      poiName: "Chulia Street & Kimberley Street Night Food Feast",
      category: "World Capital of Hawker Cuisine",
      overallScore: 4.8,
      totalReviews: "26,400",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.6, crowdControl: 4.0, value: 4.9 },
      socialSentiment: {
        platform: "Michelin Guide & Xiaohongshu",
        trendTag: "Char Kway Teow Duck Egg & Assam Laksa",
        sentimentScore: "98% Positive Sentiment",
        summary: "Unrivaled wok-hei smoky aroma filling the night air. The duck-egg Char Kway Teow with giant prawns and four-fruit soup are legendary."
      },
      breakdown: [ { stars: 5, pct: 84 }, { stars: 4, pct: 13 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen4-1", author: "Marcus Low", persona: "Foodie Focus", avatarText: "ML", rating: 5, date: "Visited 4 days ago", tag: "Duck Egg Char Kway Teow", text: "The uncle at Kimberley Street tosses the flat noodles over flaming charcoal with extraordinary speed. The aroma and crunch of pork lard is Michelin-worthy perfection.", helpful: 67 }
      ]
    },
    "pen5": {
      poiName: "Kek Lok Si Temple & Pagoda of 10,000 Buddhas",
      category: "Buddhist Monastery Landmark · Crane Hill",
      overallScore: 4.8,
      totalReviews: "32,800",
      recommendRate: "98%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.3, value: 4.9 },
      socialSentiment: {
        platform: "TripAdvisor & Xiaohongshu",
        trendTag: "Pagoda of Ten Thousand Buddhas & Bronze Guanyin",
        sentimentScore: "98% Positive Sentiment",
        summary: "A breathtaking architectural marvel blending Chinese, Thai, and Burmese styles. Panoramic views over Penang island from the bronze Guanyin pavilion."
      },
      breakdown: [ { stars: 5, pct: 86 }, { stars: 4, pct: 11 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen5-1", author: "Devi Raman", persona: "Cultural Explorer", avatarText: "DR", rating: 5, date: "Visited August 2026", tag: "Pagoda Climb", text: "Take the incline lift to the massive Guanyin statue, then climb the stairs inside the Pagoda of 10,000 Buddhas. The view stretches all the way to Butterworth.", helpful: 55 }
      ]
    },
    "pen6": {
      poiName: "Penang Hill Funicular & The Habitat Biosphere",
      category: "UNESCO Biosphere Reserve · Rainforest Canopy Walk",
      overallScore: 4.7,
      totalReviews: "28,900",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.2, value: 4.7 },
      socialSentiment: {
        platform: "Instagram & National Geographic",
        trendTag: "Curtis Crest Treetop Walk & Flying Squirrels",
        sentimentScore: "96% Positive Sentiment",
        summary: "Cool 21°C highland retreat high above the tropical heat. Fast 5-minute funicular train ascent followed by pristine rainforest boardwalks."
      },
      breakdown: [ { stars: 5, pct: 80 }, { stars: 4, pct: 16 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen6-1", author: "Klaus Wagner", persona: "Nature Enthusiast", avatarText: "KW", rating: 5, date: "Visited last week", tag: "360 Canopy Walk", text: "The Curtis Crest circular viewing platform at The Habitat is unmatched. We spotted dusky leaf monkeys and great hornbills right beside the canopy walk.", helpful: 44 }
      ]
    },
    "pen7": {
      poiName: "David Brown's Hilltop Tea Terrace & Garden",
      category: "Colonial British Heritage Dining",
      overallScore: 4.6,
      totalReviews: "6,500",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.8, crowdControl: 4.5, value: 4.4 },
      socialSentiment: {
        platform: "Broadsheet & Xiaohongshu",
        trendTag: "Strawberry Hill English High Tea",
        sentimentScore: "94% Positive Sentiment",
        summary: "Perched atop Strawberry Hill amidst manicured English gardens, ponds with water lilies, and sweeping panoramic views of the Penang Strait."
      },
      breakdown: [ { stars: 5, pct: 72 }, { stars: 4, pct: 22 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 1 } ],
      reviews: [
        { id: "rev-pen7-1", author: "Amanda Lee", persona: "Solo / Couple", avatarText: "AL", rating: 5, date: "Visited September 2026", tag: "Warm Scones & Clotted Cream", text: "Sitting outside on the terrace with warm Devonshire scones while the gentle mountain mist rolls across the pine trees is absolute bliss.", helpful: 29 }
      ]
    },
    "pen8": {
      poiName: "Gurney Drive Hawker Centre & Seafront Promenade",
      category: "Premier Coastal Hawker Hub",
      overallScore: 4.7,
      totalReviews: "22,000",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.6, crowdControl: 4.1, value: 4.8 },
      socialSentiment: {
        platform: "TikTok & Google Reviews",
        trendTag: "Penang Rojak & Crispy Oyster Omelette",
        sentimentScore: "95% Positive Sentiment",
        summary: "Classic Penang open-air culinary experience right along the new coastal park promenade. Generous servings of Rojak with prawn fritters."
      },
      breakdown: [ { stars: 5, pct: 77 }, { stars: 4, pct: 18 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen8-1", author: "Zainal Abidin", persona: "Foodie Focus", avatarText: "ZA", rating: 5, date: "Visited 2 weeks ago", tag: "Crispy Oyster Omelette", text: "The Oh Chien here is fried to a golden crisp with plump, juicy oysters and tangy garlic chili dip. Walking along Gurney Bay promenade afterwards was refreshing.", helpful: 36 }
      ]
    },
    "pen9": {
      poiName: "Tropical Spice Garden & Eco Trails",
      category: "Living Botanical Spice Sanctuary · Teluk Bahang",
      overallScore: 4.7,
      totalReviews: "7,200",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.8, crowdControl: 4.7, value: 4.7 },
      socialSentiment: {
        platform: "TripAdvisor & Lonely Planet",
        trendTag: "Fragrant Cinnamon Trails & Giant Bamboo",
        sentimentScore: "96% Positive Sentiment",
        summary: "A lush eight-acre bio-diverse coastal jungle featuring over 500 species of living herbs and spices. Complimentary herbal spice tea at the bamboo deck."
      },
      breakdown: [ { stars: 5, pct: 78 }, { stars: 4, pct: 18 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen9-1", author: "Claire Dumont", persona: "Nature Enthusiast", avatarText: "CD", rating: 5, date: "Visited 1 month ago", tag: "Natural Herbal Tea", text: "Audio tour was educational and enjoyable. Smelling crushed allspice and fresh nutmeg straight from the tree was fantastic.", helpful: 28 }
      ]
    },
    "pen10": {
      poiName: "Batu Ferringhi Beach & Waterfront Lounge",
      category: "Tropical Coast & Water Sports Haven",
      overallScore: 4.6,
      totalReviews: "16,500",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.7, crowdControl: 4.2, value: 4.6 },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Golden Sand & Chilled Coconut",
        sentimentScore: "94% Positive Sentiment",
        summary: "Penang's premier coastal resort strip. Warm waters, parasailing, and sunset beachfront cafes under shady casuarina pines."
      },
      breakdown: [ { stars: 5, pct: 71 }, { stars: 4, pct: 23 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen10-1", author: "Hassan Basri", persona: "Family Leisure", avatarText: "HB", rating: 5, date: "Visited 2 weeks ago", tag: "Beachfront Sunset", text: "Soft sands and gentle waves. The beach bars have comfortable bean bags right at the water's edge to watch the sun sink into the Malacca Strait.", helpful: 33 }
      ]
    },
    "pen11": {
      poiName: "Fort Cornwallis & Queen Victoria Memorial Clock",
      category: "18th-Century British Coastal Bastion",
      overallScore: 4.6,
      totalReviews: "11,800",
      recommendRate: "93%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.7, crowdControl: 4.6, value: 4.5 },
      socialSentiment: {
        platform: "Google Reviews & Heritage Forum",
        trendTag: "Seri Rambai Bronze Cannon & Diamond Jubilee Clock",
        sentimentScore: "93% Positive Sentiment",
        summary: "The site where Captain Francis Light first landed in 1786. The newly restored sea moat and harbor view make for a delightful colonial history walk."
      },
      breakdown: [ { stars: 5, pct: 70 }, { stars: 4, pct: 23 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 1 } ],
      reviews: [
        { id: "rev-pen11-1", author: "George Fletcher", persona: "History Buff", avatarText: "GF", rating: 5, date: "Visited last month", tag: "Restored Moat", text: "The historical museum inside the brick gunpowder storerooms has fascinating colonial maps. The bronze Seri Rambai cannon from 1603 is in magnificent condition.", helpful: 25 }
      ]
    },
    "pen12": {
      poiName: "Chowrasta Market Local Confectionery & Tea",
      category: "Historic Market & Authentic Penang Gifts",
      overallScore: 4.6,
      totalReviews: "13,400",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.5, photoSpots: 4.3, crowdControl: 4.1, value: 4.9 },
      socialSentiment: {
        platform: "Xiaohongshu & Local Food Blogs",
        trendTag: "Fresh Tambun Biscuits & Preserved Nutmeg",
        sentimentScore: "95% Positive Sentiment",
        summary: "The top destination for souvenir shopping before heading home. Warm baby tambun biscuits baked fresh daily and jars of Penang preserved nutmeg."
      },
      breakdown: [ { stars: 5, pct: 75 }, { stars: 4, pct: 20 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen12-1", author: "Peggy Ang", persona: "Foodie Focus", avatarText: "PA", rating: 5, date: "Visited last week", tag: "Fresh Tambun Biscuits", text: "Buy the Ghee Hiang or Him Heang biscuits directly here while they are still warm in the box. Incredible buttery flaky crust with sweet mung bean filling.", helpful: 41 }
      ]
    },

    "pen13": {
      poiName: "Entopia by Penang Butterfly Farm",
      category: "Tropical Nature Sanctuary & Butterfly Aviary",
      overallScore: 4.8,
      totalReviews: "11,500",
      recommendRate: "97%",
      subRatings: { atmosphere: 5.0, photoSpots: 4.9, crowdControl: 4.6, value: 4.7 },
      socialSentiment: {
        platform: "TripAdvisor & Xiaohongshu",
        trendTag: "15,000 Butterflies & Living Cocoon Dome",
        sentimentScore: "97% Positive Sentiment",
        summary: "Remarkable indoor-outdoor conservatory where thousands of emerald swallowtails and birdwings flutter around visitors."
      },
      breakdown: [ { stars: 5, pct: 82 }, { stars: 4, pct: 15 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen13-1", author: "Yvonne Tan", persona: "Nature Enthusiast", avatarText: "YT", rating: 5, date: "Visited last week", tag: "Free-Flying Butterflies", text: "Butterflies literally land on your hands and shoulders. The modern educational exhibits and temperature control make it a peaceful oasis.", helpful: 37 }
      ]
    },
    "pen14": {
      poiName: "Batu Ferringhi Night Market & Seafood Grill",
      category: "Beachfront Night Market & Seafood Grill",
      overallScore: 4.7,
      totalReviews: "19,000",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.6, crowdControl: 4.1, value: 4.7 },
      socialSentiment: {
        platform: "Google Reviews & TikTok",
        trendTag: "Charcoal Sambal Fish & Beachfront Stalls",
        sentimentScore: "96% Positive Sentiment",
        summary: "Breezy open-air night market along the coastal road. Fresh local seafood barbecued over glowing coals with spicy sambal sauce."
      },
      breakdown: [ { stars: 5, pct: 77 }, { stars: 4, pct: 18 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen14-1", author: "Farhan Malik", persona: "Foodie Focus", avatarText: "FM", rating: 5, date: "Visited 2 weeks ago", tag: "Sambal Tiger Prawns", text: "The grilled tiger prawns and sambal squid with fresh lime juice were fantastic. Great place to browse souvenirs and listen to acoustic music by the beach.", helpful: 41 }
      ]
    },
    "pen15": {
      poiName: "Khoo Kongsi Leong San Tong Clan Temple",
      category: "Gilded Chinese Clan Temple Heritage",
      overallScore: 4.9,
      totalReviews: "16,200",
      recommendRate: "99%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.7, value: 4.9 },
      socialSentiment: {
        platform: "UNESCO Heritage & Xiaohongshu",
        trendTag: "Stone Dragon Pillars & 1906 Gilded Gables",
        sentimentScore: "99% Positive Sentiment",
        summary: "The grandest Chinese clan house in Malaysia. Jaw-dropping level of wood and stone carvings, granite pillars, and 36 mythical statues on the roof ridges."
      },
      breakdown: [ { stars: 5, pct: 89 }, { stars: 4, pct: 9 }, { stars: 3, pct: 1 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen15-1", author: "Christopher Vance", persona: "Cultural Explorer", avatarText: "CV", rating: 5, date: "Visited September 2026", tag: "Incredible Craftsmanship", text: "The detail of the gold-leaf carvings and granite relief panels is simply astonishing. One of the finest examples of heritage architecture in Asia.", helpful: 56 }
      ]
    },
    "pen16": {
      poiName: "Penang International Airport (PIA) Departure Hub",
      category: "Aviation Gateway & Duty Free Concourse",
      overallScore: 4.6,
      totalReviews: "12,800",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.5, photoSpots: 4.1, crowdControl: 4.4, value: 4.6 },
      socialSentiment: {
        platform: "Skytrax & Google Reviews",
        trendTag: "Bayan Lepas Concourse & Local Snacks",
        sentimentScore: "94% Positive Sentiment",
        summary: "Conveniently located in Bayan Lepas, offering smooth bag drop, local confectionery shops airside, and quick boarding."
      },
      breakdown: [ { stars: 5, pct: 72 }, { stars: 4, pct: 22 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-pen16-1", author: "Li Wei Tan", persona: "Fast-Paced Business", avatarText: "LT", rating: 5, date: "Visited last week", tag: "Smooth Departure", text: "Checked in quickly and picked up last-minute boxes of Tambun biscuits airside. Very efficient airport experience.", helpful: 28 }
      ]
    },

    // ==========================================
    // Melaka POI Reviews & Feedback
    // ==========================================
    "mel1": {
      poiName: "Dutch Square (Red Square) & Christ Church",
      category: "Colonial Dutch Landmark · Stadthuys Museum",
      overallScore: 4.8,
      totalReviews: "28,500",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.2, value: 4.9 },
      socialSentiment: {
        platform: "Instagram & Xiaohongshu",
        trendTag: "Red Stadthuys & Illuminated Trishaws",
        sentimentScore: "98% Positive Sentiment",
        summary: "The unmistakable red-brick heart of Melaka. The 1753 Christ Church, Victorian fountain, and colorfully decorated musical trishaws."
      },
      breakdown: [ { stars: 5, pct: 84 }, { stars: 4, pct: 13 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel1-1", author: "Faridah Karim", persona: "Cultural Explorer", avatarText: "FK", rating: 5, date: "Visited last week", tag: "Dutch Brick Architecture", text: "The vibrant terracotta hue against the bright blue sky is iconic. Visit in early morning before tour coaches arrive for the cleanest photos.", helpful: 49 }
      ]
    },
    "mel2": {
      poiName: "A Famosa (Porta de Santiago) & St. Paul's Church",
      category: "Portuguese Colonial Bastion & St. Paul's Hill",
      overallScore: 4.7,
      totalReviews: "24,000",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.3, value: 4.9 },
      socialSentiment: {
        platform: "TripAdvisor & Heritage Forum",
        trendTag: "1511 Portuguese Gate & St. Francis Xavier Statue",
        sentimentScore: "96% Positive Sentiment",
        summary: "One of the oldest surviving European architectural relics in Asia. Climbing St. Paul's Hill rewards with harbor breezes and ancient carved Dutch tombstones."
      },
      breakdown: [ { stars: 5, pct: 79 }, { stars: 4, pct: 17 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel2-1", author: "Matthew Thorne", persona: "Solo Cultural Traveler", avatarText: "MT", rating: 5, date: "Visited 3 weeks ago", tag: "Straits Harbor Vista", text: "Touching the 500-year-old stone gate gives a palpable sense of history. The hilltop view over the modern Straits of Malacca is majestic.", helpful: 38 }
      ]
    },
    "mel3": {
      poiName: "Baba & Nyonya Heritage Museum",
      category: "Preserved 1896 Peranakan Townhouse Mansion",
      overallScore: 4.8,
      totalReviews: "9,600",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.8, crowdControl: 4.6, value: 4.8 },
      socialSentiment: {
        platform: "Xiaohongshu & Michelin Green Guide",
        trendTag: "Mother of Pearl Blackwood & Silk Kebayas",
        sentimentScore: "98% Positive Sentiment",
        summary: "A private townhouse residence impeccably maintained by descendants of the Chan family. Guided tours detail the customs and lifestyle of the Straits Chinese aristocracy."
      },
      breakdown: [ { stars: 5, pct: 85 }, { stars: 4, pct: 12 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel3-1", author: "Cynthia Neo", persona: "Cultural Explorer", avatarText: "CN", rating: 5, date: "Visited September 2026", tag: "Guided Heritage Story", text: "The guide's storytelling about the matriarchs and ancestral altar ceremonies was captivating. Essential visit for anyone interested in Peranakan heritage.", helpful: 45 }
      ]
    },
    "mel4": {
      poiName: "Jonker Street Night Market & Chicken Rice Balls",
      category: "Legendary Weekend Night Market & Street Food",
      overallScore: 4.8,
      totalReviews: "38,200",
      recommendRate: "97%",
      subRatings: { atmosphere: 5.0, photoSpots: 4.7, crowdControl: 3.8, value: 4.8 },
      socialSentiment: {
        platform: "TikTok & Xiaohongshu",
        trendTag: "Hainanese Rice Balls & Durian Cendol",
        sentimentScore: "97% Positive Sentiment",
        summary: "Bustling neon lanterns, antique shophouse stalls, live street music, and mouth-watering street eats. Rice balls with poached tender chicken are an absolute staple."
      },
      breakdown: [ { stars: 5, pct: 82 }, { stars: 4, pct: 14 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel4-1", author: "Jason Kok", persona: "Foodie Focus", avatarText: "JK", rating: 5, date: "Visited last weekend", tag: "Fragrant Rice Balls", text: "Chung Wah chicken rice balls dipped in ginger chili paste is legendary. Follow that up with coconut shake and fried radish cake as you browse the antiques.", helpful: 64 }
      ]
    },
    "mel5": {
      poiName: "Melaka River Cruise & Waterfront Murals",
      category: "Historic Waterway Boat Navigation",
      overallScore: 4.7,
      totalReviews: "22,500",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.9, crowdControl: 4.4, value: 4.7 },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Breezy Night Cruise & Illuminated Bridges",
        sentimentScore: "96% Positive Sentiment",
        summary: "A tranquil 45-minute cruise gliding past historic watermills, painted shophouses, and mangrove riverbanks. Sunset and evening cruises are especially popular."
      },
      breakdown: [ { stars: 5, pct: 79 }, { stars: 4, pct: 17 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel5-1", author: "Noreen Zakaria", persona: "Family Leisure", avatarText: "NZ", rating: 5, date: "Visited 2 weeks ago", tag: "Sunset Cruise", text: "We took the 18:30 boat from Muara Jetty. Watching the riverbank buildings light up while cool evening breezes blew was exceptionally relaxing.", helpful: 41 }
      ]
    },
    "mel6": {
      poiName: "Flora de la Mar Maritime Museum (Replica Galleon)",
      category: "34-Meter Life-Sized Portuguese Galleon Museum",
      overallScore: 4.6,
      totalReviews: "14,000",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.3, value: 4.7 },
      socialSentiment: {
        platform: "Google Reviews & Travel Blogs",
        trendTag: "Giant Ship Replica & Ancient Spice Charts",
        sentimentScore: "94% Positive Sentiment",
        summary: "Towering ship replica built on the waterfront commemorating the rich maritime spice trade history that transformed Melaka into a global trading empire."
      },
      breakdown: [ { stars: 5, pct: 72 }, { stars: 4, pct: 21 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 1 } ],
      reviews: [
        { id: "rev-mel6-1", author: "Ben Henderson", persona: "Family Leisure", avatarText: "BH", rating: 5, date: "Visited last month", tag: "Captain's Cabin", text: "Kids loved climbing through the wooden decks and exploring the cargo hold. The models illustrating the global spice routes are very well done.", helpful: 27 }
      ]
    },
    "mel7": {
      poiName: "Kampung Morten Traditional Malay Heritage Village",
      category: "Living Malay Cultural Riverfront Hamlet",
      overallScore: 4.7,
      totalReviews: "7,800",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.8, crowdControl: 4.7, value: 4.9 },
      socialSentiment: {
        platform: "Xiaohongshu & Cultural Blogs",
        trendTag: "Villa Sentosa & Carved Timber Verandahs",
        sentimentScore: "96% Positive Sentiment",
        summary: "A preserved enclave of traditional Malay wooden houses in the middle of the city. Friendly locals and authentic wooden architecture dating back to the 1920s."
      },
      breakdown: [ { stars: 5, pct: 77 }, { stars: 4, pct: 19 }, { stars: 3, pct: 3 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel7-1", author: "Azman Sani", persona: "Cultural Explorer", avatarText: "AS", rating: 5, date: "Visited 3 weeks ago", tag: "Villa Sentosa Tour", text: "Visiting Villa Sentosa felt like being welcomed into a family home. The intricate timber fretwork and breezy verandas demonstrate traditional Malay architectural genius.", helpful: 31 }
      ]
    },
    "mel8": {
      poiName: "Melaka Straits Mosque (Masjid Selat Melaka) Sunset",
      category: "Floating Sanctuary & Global Sunset Icon",
      overallScore: 4.9,
      totalReviews: "19,800",
      recommendRate: "99%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.4, value: 5.0 },
      socialSentiment: {
        platform: "Instagram & National Geographic Traveler",
        trendTag: "Floating Mosque on Stilts & Golden Hour",
        sentimentScore: "99% Positive Sentiment",
        summary: "Spectacular mosque built above the sea waves on Pulau Melaka. High tide creates an ethereal floating reflection against the setting sun."
      },
      breakdown: [ { stars: 5, pct: 89 }, { stars: 4, pct: 9 }, { stars: 3, pct: 1 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel8-1", author: "Sofia Al-Attas", persona: "Solo Cultural Traveler", avatarText: "SA", rating: 5, date: "Visited last week", tag: "Magical Sunset Glow", text: "One of the most serene sunsets on earth. The stained glass domes glow golden, and the reflection on the sea water is mesmerizing. Robes available for visitors.", helpful: 59 }
      ]
    },
    "mel9": {
      poiName: "Menara Taming Sari 360° Revolving Tower",
      category: "110-Meter Gyro Revolving Observatory",
      overallScore: 4.6,
      totalReviews: "15,200",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.6, photoSpots: 4.8, crowdControl: 4.4, value: 4.6 },
      socialSentiment: {
        platform: "TikTok & Google Reviews",
        trendTag: "360 Panoramic View & Straits Ships",
        sentimentScore: "94% Positive Sentiment",
        summary: "Seven-minute revolving ride lifting visitors 80m above ground. View extends across the entire UNESCO historic core and out to the shipping lane."
      },
      breakdown: [ { stars: 5, pct: 71 }, { stars: 4, pct: 23 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel9-1", author: "Kelvin Lim", persona: "Family Leisure", avatarText: "KL", rating: 5, date: "Visited 2 weeks ago", tag: "Full City Panorama", text: "Air-conditioned cabin turns very smoothly. Great way to orient yourself and see where the Dutch Square, river, and port connect.", helpful: 26 }
      ]
    },
    "mel10": {
      poiName: "Cheng Hoon Teng Temple & Harmony Street",
      category: "Malaysia's Oldest Operating Temple (1645)",
      overallScore: 4.8,
      totalReviews: "8,900",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 4.9, crowdControl: 4.5, value: 4.9 },
      socialSentiment: {
        platform: "TripAdvisor & Heritage Forum",
        trendTag: "Harmony Street & Historic Timber Carvings",
        sentimentScore: "98% Positive Sentiment",
        summary: "Award-winning UNESCO restoration. Situated on 'Harmony Street' within steps of Kampung Kling Mosque and Sri Poyyatha Vinayagar Moorthi Temple."
      },
      breakdown: [ { stars: 5, pct: 83 }, { stars: 4, pct: 14 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel10-1", author: "Hui Min Tan", persona: "Cultural Explorer", avatarText: "HT", rating: 5, date: "Visited last month", tag: "Harmony Street Coexistence", text: "Seeing a 380-year-old Chinese temple, historic Malay mosque, and Hindu temple standing harmoniously side-by-side along one quiet street captures the true spirit of Malaysia.", helpful: 39 }
      ]
    },
    "mel11": {
      poiName: "San Shu Gong Traditional Confectionery House",
      category: "Historic Confectionery & Gula Melaka Treats",
      overallScore: 4.7,
      totalReviews: "12,300",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.6, crowdControl: 4.1, value: 4.8 },
      socialSentiment: {
        platform: "Xiaohongshu & Food Blogs",
        trendTag: "Lao Qian White Coffee & Durian Cendol",
        sentimentScore: "96% Positive Sentiment",
        summary: "Iconic red landmark building at the entrance of Jonker Street. Famous for Lao Qian white coffee, pure Gula Melaka palm sugar, and freshly prepared cendol."
      },
      breakdown: [ { stars: 5, pct: 77 }, { stars: 4, pct: 18 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-mel11-1", author: "Mei Ling Wong", persona: "Foodie Focus", avatarText: "MW", rating: 5, date: "Visited last week", tag: "Durian Cendol Upstairs", text: "Head straight up to the 2nd-floor cafe for the rich D24 durian cendol with heavy palm sugar drizzle. Bought four cylinders of pure Gula Melaka to take home.", helpful: 42 }
      ]
    },
    "mel12": {
      poiName: "Melaka Sentral Regional Departure Hub",
      category: "Regional Express Coach Terminal",
      overallScore: 4.5,
      totalReviews: "8,100",
      recommendRate: "93%",
      subRatings: { atmosphere: 4.4, photoSpots: 4.0, crowdControl: 4.2, value: 4.8 },
      socialSentiment: {
        platform: "Google Reviews & Transit Forum",
        trendTag: "2-Hour Express Coach to KL",
        sentimentScore: "93% Positive Sentiment",
        summary: "Central intercity coach hub. Clean air-conditioned waiting hall with frequent direct services to KL TBS (Terminal Bersepadu Selatan) and KLIA."
      },
      breakdown: [ { stars: 5, pct: 68 }, { stars: 4, pct: 24 }, { stars: 3, pct: 6 }, { stars: 2, pct: 1 }, { stars: 1, pct: 1 } ],
      reviews: [
        { id: "rev-mel12-1", author: "Kamal Ariffin", persona: "Fast-Paced Business", avatarText: "KA", rating: 5, date: "Visited 2 weeks ago", tag: "Fast Transit to KL", text: "Boarded the luxury 2+1 seating express bus to KL. Left on time, smoothly reached Terminal Bersepadu Selatan in under 1 hour 50 minutes.", helpful: 24 }
      ]
    },

    // ==========================================
    // Kota Kinabalu POI Reviews & Feedback
    // ==========================================
    "kk1": {
      poiName: "Jesselton Point Ferry Terminal & Marine Hub",
      category: "Historic Maritime Pier · Speedboat Terminal",
      overallScore: 4.7,
      totalReviews: "11,500",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.8, crowdControl: 4.3, value: 4.8 },
      socialSentiment: {
        platform: "TripAdvisor & Xiaohongshu",
        trendTag: "Colonial Red Telephone Booth & Island Speedboat",
        sentimentScore: "95% Positive Sentiment",
        summary: "Historic wooden pier renovated with British North Borneo colonial styling. Efficient counter ticketing for island hopping in Tunku Abdul Rahman Park."
      },
      breakdown: [ { stars: 5, pct: 76 }, { stars: 4, pct: 19 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk1-1", author: "Nicholas Tay", persona: "Solo / Couple", avatarText: "NT", rating: 5, date: "Visited last week", tag: "Painless Island Hopping", text: "Ticketing counters are clearly numbered. Speedboat ride out to Manukan was fast, safe, and exhilarating across calm emerald sea.", helpful: 32 }
      ]
    },
    "kk2": {
      poiName: "Tunku Abdul Rahman Marine Park (Manukan Island)",
      category: "Protected Coral Marine Reserve",
      overallScore: 4.8,
      totalReviews: "21,000",
      recommendRate: "97%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.2, value: 4.8 },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Crystal Shallow Reef & Nemo Clownfish",
        sentimentScore: "97% Positive Sentiment",
        summary: "Crescent-shaped island with powdery coral sand and clear turquoise water. Snorkelers spot clownfish, parrotfish, and sea turtles just meters from the shore."
      },
      breakdown: [ { stars: 5, pct: 83 }, { stars: 4, pct: 14 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk2-1", author: "Gillian Vance", persona: "Nature Enthusiast", avatarText: "GV", rating: 5, date: "Visited September 2026", tag: "Snorkeling Near Jetty", text: "Walk 50 meters to the left of the main jetty. The coral reef is flourishing and we were surrounded by schools of sergeant major and butterfly fish.", helpful: 47 }
      ]
    },
    "kk3": {
      poiName: "Tanjung Aru Beach Sunset Promenade",
      category: "World Top 10 Sunset Destination",
      overallScore: 4.9,
      totalReviews: "35,200",
      recommendRate: "99%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.1, value: 5.0 },
      socialSentiment: {
        platform: "National Geographic & Xiaohongshu",
        trendTag: "Fiery Purple Sunset & Fresh Coconut",
        sentimentScore: "99% Positive Sentiment",
        summary: "World-renowned for theatrical skies changing through fiery gold, blazing crimson, and glowing violet over the South China Sea."
      },
      breakdown: [ { stars: 5, pct: 89 }, { stars: 4, pct: 9 }, { stars: 3, pct: 1 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk3-1", author: "Hiroshi Mori", persona: "Photographer", avatarText: "HM", rating: 5, date: "Visited 1 week ago", tag: "Unreal Sky Colors", text: "I have photographed sunsets on six continents, and Tanjung Aru easily ranks in the top three. The wet sand reflection produces sheer magic.", helpful: 68 }
      ]
    },
    "kk4": {
      poiName: "Kota Kinabalu Waterfront & Night Food Market",
      category: "Fresh Seafood Market & Kadazan Delicacies",
      overallScore: 4.7,
      totalReviews: "24,100",
      recommendRate: "96%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.6, crowdControl: 4.0, value: 4.7 },
      socialSentiment: {
        platform: "YouTube & TikTok",
        trendTag: "Grilled Sambal Stingray & Live Tiger Prawns",
        sentimentScore: "96% Positive Sentiment",
        summary: "Pick out live seafood cooked to order on smoking charcoal grills. Kadazan Hinava raw fish cured with lime and bird's eye chili is an essential local specialty."
      },
      breakdown: [ { stars: 5, pct: 78 }, { stars: 4, pct: 17 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk4-1", author: "Stanislaus Gunting", persona: "Foodie Focus", avatarText: "SG", rating: 5, date: "Visited August 2026", tag: "Hinava & Grilled Squid", text: "The charcoal-grilled sambal squid and fresh butter prawns are out of this world. Prices are clearly posted per 100g, very fair and fresh.", helpful: 53 }
      ]
    },
    "kk5": {
      poiName: "Kinabalu UNESCO National Park Headquarters",
      category: "UNESCO World Heritage · 4,095m Mountain Foothills",
      overallScore: 4.9,
      totalReviews: "18,600",
      recommendRate: "99%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.6, value: 4.8 },
      socialSentiment: {
        platform: "Lonely Planet & Discovery Channel",
        trendTag: "Granite Crown Vista & Wild Pitcher Plants",
        sentimentScore: "99% Positive Sentiment",
        summary: "Botanical wonder of Southeast Asia, home to over 5,000 vascular plant species. Crisp mountain air with jaw-dropping views of Mount Kinabalu's jagged granite peaks."
      },
      breakdown: [ { stars: 5, pct: 88 }, { stars: 4, pct: 10 }, { stars: 3, pct: 1 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk5-1", author: "Dr. Evelyn Ross", persona: "Botanist & Traveler", avatarText: "ER", rating: 5, date: "Visited September 2026", tag: "Botanical Garden Trails", text: "The Mountain Garden guided walk is superb. We saw carnivorous Nepenthes pitcher plants and tiny indigenous slipper orchids. The air is rejuvenating.", helpful: 46 }
      ]
    },
    "kk6": {
      poiName: "Poring Hot Springs & Treetop Canopy Walkway",
      category: "Lowland Dipterocarp Rainforest & Treetop Walk",
      overallScore: 4.7,
      totalReviews: "14,200",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.8, photoSpots: 4.9, crowdControl: 4.2, value: 4.7 },
      socialSentiment: {
        platform: "TripAdvisor & Xiaohongshu",
        trendTag: "40m Treetop Suspension Bridge & Sulphur Pools",
        sentimentScore: "95% Positive Sentiment",
        summary: "Suspended rope canopy walkways high in the tree canopy of ancient Menggaris trees, followed by soaking tired legs in natural mineral hot spring tubs."
      },
      breakdown: [ { stars: 5, pct: 76 }, { stars: 4, pct: 19 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk6-1", author: "Timothy Cheng", persona: "Adventure Traveler", avatarText: "TC", rating: 5, date: "Visited 3 weeks ago", tag: "Canopy Walk Adrenaline", text: "Walking across the narrow rope suspension bridge 40 meters up is thrilling. The hot springs afterwards are deeply therapeutic.", helpful: 37 }
      ]
    },
    "kk7": {
      poiName: "Desa Cattle Dairy Farm ('Sabah\'s New Zealand')",
      category: "Highland Pasture Farm · Kundasang Ridge",
      overallScore: 4.8,
      totalReviews: "27,500",
      recommendRate: "97%",
      subRatings: { atmosphere: 5.0, photoSpots: 5.0, crowdControl: 4.0, value: 4.9 },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Black-and-White Cows & Mount Kinabalu Backdrop",
        sentimentScore: "97% Positive Sentiment",
        summary: "Lush green rolling pastures nestled directly against the colossal stone wall of Mount Kinabalu. Savoring fresh gelato and milk pudding in cool 18°C breeze."
      },
      breakdown: [ { stars: 5, pct: 83 }, { stars: 4, pct: 14 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk7-1", author: "Nurul Aini", persona: "Family Leisure", avatarText: "NA", rating: 5, date: "Visited last week", tag: "Fresh Farm Gelato", text: "Looks exactly like New Zealand with Mount Kinabalu rising straight behind the green hills. The chocolate and yogurt gelato is divine.", helpful: 56 }
      ]
    },
    "kk8": {
      poiName: "Kundasang Highland Market & Mountain Rest",
      category: "Alpine Produce Market & Cool Climate Haven",
      overallScore: 4.6,
      totalReviews: "12,000",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.7, photoSpots: 4.5, crowdControl: 4.3, value: 4.9 },
      socialSentiment: {
        platform: "Google Reviews & Food Blogs",
        trendTag: "Sweet Pearl Corn & Fresh Highland Strawberries",
        sentimentScore: "95% Positive Sentiment",
        summary: "Bustling roadside market stalls filled with freshly harvested sweet Kundasang cabbage, wild highland honey, and steaming sweet corn."
      },
      breakdown: [ { stars: 5, pct: 72 }, { stars: 4, pct: 23 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk8-1", author: "Dennis Chin", persona: "Foodie Focus", avatarText: "DC", rating: 5, date: "Visited 2 weeks ago", tag: "Steaming Hotpot", text: "Having a steaming hotpot dinner in 16°C mountain air after browsing the fresh strawberry stalls is the ultimate highland comfort.", helpful: 30 }
      ]
    },
    "kk9": {
      poiName: "Kota Kinabalu City Mosque ('Floating Mosque')",
      category: "Likas Bay Contemporary Islamic Sanctuary",
      overallScore: 4.8,
      totalReviews: "19,400",
      recommendRate: "98%",
      subRatings: { atmosphere: 4.9, photoSpots: 5.0, crowdControl: 4.5, value: 4.9 },
      socialSentiment: {
        platform: "Instagram & Xiaohongshu",
        trendTag: "Blue Dome Water Reflection & Sunset Lagoon",
        sentimentScore: "98% Positive Sentiment",
        summary: "Exemplary blue and white modern Islamic architecture encircled by a calm lagoon. The mirror reflection on the water is stunning at sunrise and sunset."
      },
      breakdown: [ { stars: 5, pct: 84 }, { stars: 4, pct: 13 }, { stars: 3, pct: 2 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk9-1", author: "Farah Diba", persona: "Cultural Explorer", avatarText: "FD", rating: 5, date: "Visited last month", tag: "Lagoon Reflection", text: "Walk around the outer perimeter of the lagoon to see the entire blue dome perfectly mirrored in the water. Peaceful, immaculate, and welcoming.", helpful: 48 }
      ]
    },
    "kk10": {
      poiName: "Signal Hill Eco Observatory Platform",
      category: "City & Harbor Lookout Platform",
      overallScore: 4.6,
      totalReviews: "9,100",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.6, photoSpots: 4.8, crowdControl: 4.6, value: 5.0 },
      socialSentiment: {
        platform: "Google Reviews & Travel Forum",
        trendTag: "180° City & Island Harbor Panorama",
        sentimentScore: "94% Positive Sentiment",
        summary: "Highest viewpoint within the Kota Kinabalu CBD. Overlooking the harbor islands and Gaya Street shophouse grids."
      },
      breakdown: [ { stars: 5, pct: 70 }, { stars: 4, pct: 24 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk10-1", author: "Liam O'Connor", persona: "Solo / Couple", avatarText: "LO", rating: 5, date: "Visited 3 weeks ago", tag: "Harbor Overview", text: "Quiet pavilion with a gentle breeze. You can clearly see the speedboats departing Jesselton Point towards Sapi and Manukan islands.", helpful: 22 }
      ]
    },
    "kk11": {
      poiName: "Sabah Handicraft Market (Sabah Pearls & Sompoton)",
      category: "Artisan Handicrafts & Pearl Market",
      overallScore: 4.6,
      totalReviews: "16,200",
      recommendRate: "95%",
      subRatings: { atmosphere: 4.6, photoSpots: 4.4, crowdControl: 4.1, value: 4.8 },
      socialSentiment: {
        platform: "Xiaohongshu & Sabah Tourism",
        trendTag: "Genuine South Sea Pearls & Tenom Coffee",
        sentimentScore: "95% Positive Sentiment",
        summary: "Known locally as the Filipino Market. World-renowned for genuine Sabah saltwater and freshwater pearls, handwoven baskets, and Tenom dark-roast coffee."
      },
      breakdown: [ { stars: 5, pct: 74 }, { stars: 4, pct: 21 }, { stars: 3, pct: 4 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk11-1", author: "Jenny Koh", persona: "Foodie Focus", avatarText: "JK", rating: 5, date: "Visited last week", tag: "Pearl Jewelry Bargains", text: "The vendors will happily test real pearls for you using a flame or scraping test. Picked up beautiful freshwater pearl earrings and bags of Tenom coffee.", helpful: 43 }
      ]
    },
    "kk12": {
      poiName: "Kota Kinabalu International Airport (KKIA) Hub",
      category: "East Malaysia Aviation Gateway",
      overallScore: 4.6,
      totalReviews: "14,000",
      recommendRate: "94%",
      subRatings: { atmosphere: 4.5, photoSpots: 4.2, crowdControl: 4.4, value: 4.6 },
      socialSentiment: {
        platform: "Skytrax & Google Reviews",
        trendTag: "Smooth Security & Borneo Duty Free",
        sentimentScore: "94% Positive Sentiment",
        summary: "Modern, compact, and efficient airport terminal located just 15 minutes from Kota Kinabalu city center."
      },
      breakdown: [ { stars: 5, pct: 71 }, { stars: 4, pct: 23 }, { stars: 3, pct: 5 }, { stars: 2, pct: 1 }, { stars: 1, pct: 0 } ],
      reviews: [
        { id: "rev-kk12-1", author: "Victor Chong", persona: "Fast-Paced Business", avatarText: "VC", rating: 5, date: "Visited 2 weeks ago", tag: "Speedy Departure", text: "Security and bag drop took less than 10 minutes. Grabbed a hot bowl of Sabah Laksa airside before boarding my flight back to KL.", helpful: 29 }
      ]
    }
  }
};
