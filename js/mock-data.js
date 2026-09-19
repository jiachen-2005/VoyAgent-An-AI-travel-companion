/**
 * VoyAgent Mock Data
 * FIT3161 - Personal AI Travel Companion
 * Professional clean data without emojis; rich verified reviews & sentiment profiles.
 */

window.VOYAGENT_DATA = {
  // Preset Trips
  trips: {
    kyoto: {
      id: "kyoto",
      title: "Kyoto Autumn Cultural Odyssey",
      destination: "Kyoto, Japan",
      duration: "4 Days / 3 Nights",
      budget: {
        total: "¥180,000",
        allocated: "¥142,500",
        currency: "JPY",
        percentUsed: 79,
        breakdown: [
          { category: "Accommodation", amount: "¥68,000", share: "48%", icon: "hotel" },
          { category: "Dining & Cafes", amount: "¥38,500", share: "27%", icon: "utensils" },
          { category: "Transport & IC", amount: "¥14,000", share: "10%", icon: "train" },
          { category: "Temples & Activities", amount: "¥16,000", share: "11%", icon: "landmark" },
          { category: "Shopping & Tea", amount: "¥6,000", share: "4%", icon: "shopping-bag" }
        ]
      },
      tags: ["Solo/Couple", "Cultural Heritage", "Moderate Pace", "Foodie Focus"],
      weatherForecast: [
        { day: "Day 1 (Thu)", temp: "18°C / 10°C", condition: "Sunny", icon: "sun", rain: "0%", alert: false },
        { day: "Day 2 (Fri)", temp: "15°C / 11°C", condition: "Heavy Rain (PM)", icon: "cloud-rain", rain: "85%", alert: true, alertText: "Heavy rain 14:00-18:00 (18mm)" },
        { day: "Day 3 (Sat)", temp: "19°C / 12°C", condition: "Partly Cloudy", icon: "cloud-sun", rain: "10%", alert: false },
        { day: "Day 4 (Sun)", temp: "21°C / 13°C", condition: "Clear Sky", icon: "sun", rain: "5%", alert: false }
      ],
      days: [
        {
          dayNumber: 1,
          dateTitle: "Day 1: Historic Higashiyama & Gion Nightfall",
          slots: [
            {
              id: "k1",
              time: "09:30 - 12:00",
              title: "Kiyomizu-dera & Wooden Terrace",
              category: "Temple / Culture",
              desc: "Explore the UNESCO World Heritage temple famous for its wooden stage offering panoramic Kyoto vistas and sacred Otowa Waterfall.",
              location: "Higashiyama Ward, Kyoto",
              coords: [34.9949, 135.7850],
              rating: "4.8 (12.4k)",
              ratingScore: 4.8,
              reviewCount: "12.4k",
              cost: "¥400 entrance",
              transitNext: { mode: "footprints", info: "8 min walk down historic stone slopes (600m)" }
            },
            {
              id: "k2",
              time: "12:15 - 14:30",
              title: "Sannenzaka & Ninenzaka Traditional Teahouses",
              category: "Gastronomy & Tea",
              desc: "Stroll preserved Edo-period stone-paved streets, enjoy warm matcha parfaits and artisanal Kyoto soba noodles.",
              location: "Sannenzaka, Higashiyama",
              coords: [34.9984, 135.7806],
              rating: "4.7 (8.9k)",
              ratingScore: 4.7,
              reviewCount: "8.9k",
              cost: "¥1,800 lunch",
              transitNext: { mode: "footprints", info: "12 min scenic stroll through Maruyama Park (900m)" }
            },
            {
              id: "k3",
              time: "15:00 - 17:30",
              title: "Yasaka Shrine & Maruyama Park",
              category: "Historic Landmark",
              desc: "Visit the vibrant vermilion gate of Gion's spiritual heart, famous for hanging paper lanterns and tranquil autumn gardens.",
              location: "Gionmachi Kitagawa, Higashiyama",
              coords: [35.0037, 135.7785],
              rating: "4.6 (9.5k)",
              ratingScore: 4.6,
              reviewCount: "9.5k",
              cost: "Free entrance",
              transitNext: { mode: "footprints", info: "6 min walk across Shijo Dori (450m)" }
            },
            {
              id: "k4",
              time: "18:00 - 20:30",
              title: "Gion Shirakawa & Pontocho Alley Dinner",
              category: "Nightlife & Dining",
              desc: "Atmospheric evening stroll alongside the canal with willow trees, followed by traditional Kyoto Kaiseki dinner overlooking the Kamogawa River.",
              location: "Pontocho, Nakagyo Ward",
              coords: [35.0062, 135.7712],
              rating: "4.9 (5.3k)",
              ratingScore: 4.9,
              reviewCount: "5.3k",
              cost: "¥5,500 dinner"
            }
          ]
        },
        {
          dayNumber: 2,
          dateTitle: "Day 2: Arashiyama & Mountain Heritage",
          slots: [
            {
              id: "k5",
              time: "08:30 - 11:00",
              title: "Arashiyama Bamboo Grove & Tenryu-ji",
              category: "Nature & Zen",
              desc: "Morning walk through towering emerald bamboo stalks, visiting Tenryu-ji's legendary 14th-century Zen garden.",
              location: "Ukyo Ward, Kyoto",
              coords: [35.0170, 135.6713],
              rating: "4.8 (21k)",
              ratingScore: 4.8,
              reviewCount: "21k",
              cost: "¥500 temple fee",
              transitNext: { mode: "footprints", info: "15 min walk across Togetsukyo Bridge (1.1km)" }
            },
            {
              id: "k6",
              time: "11:30 - 13:30",
              title: "Togetsukyo Bridge & Riverside Soba Lunch",
              category: "Lunch & Scenery",
              desc: "Enjoy traditional handmade soba alongside the picturesque Katsura River with views of autumn hillsides.",
              location: "Arashiyama, Ukyo Ward",
              coords: [35.0128, 135.6777],
              rating: "4.6 (4.2k)",
              ratingScore: 4.6,
              reviewCount: "4.2k",
              cost: "¥2,200",
              transitNext: { mode: "footprints", info: "10 min walk to mountain hiking path" }
            },
            {
              id: "k7",
              time: "14:00 - 16:30",
              title: "Iwatayama Monkey Park (Outdoor Mountain Hike)",
              category: "Outdoor Activity",
              desc: "Hike up the open hill trail to observe wild Japanese macaques and enjoy Kyoto skyline views.",
              location: "Arashiyama Iwatayama",
              coords: [35.0102, 135.6763],
              rating: "4.5 (3.8k)",
              ratingScore: 4.5,
              reviewCount: "3.8k",
              cost: "¥600",
              isVulnerableToRain: true,
              transitNext: { mode: "bus", info: "Kyoto Bus #11 to Kinkaku-ji (35 min)" }
            },
            {
              id: "k8",
              time: "17:00 - 19:30",
              title: "Kinkaku-ji (Golden Pavilion) Sunset",
              category: "Iconic Landmark",
              desc: "Marvel at the top two floors covered in gold leaf reflecting across Mirror Pond.",
              location: "Kita Ward, Kyoto",
              coords: [35.0394, 135.7292],
              rating: "4.7 (19k)",
              ratingScore: 4.7,
              reviewCount: "19k",
              cost: "¥500"
            }
          ]
        },
        {
          dayNumber: 3,
          dateTitle: "Day 3: Fushimi Inari & Uji Green Tea Legacy",
          slots: [
            {
              id: "k9",
              time: "07:30 - 10:30",
              title: "Fushimi Inari Taisha 1,000 Torii Path",
              category: "Sacred Shrine",
              desc: "Early morning hike through thousands of vibrant vermilion gates winding up the sacred Mount Inari.",
              location: "Fushimi Ward, Kyoto",
              coords: [34.9671, 135.7727],
              rating: "4.9 (35k)",
              ratingScore: 4.9,
              reviewCount: "35k",
              cost: "Free entrance",
              transitNext: { mode: "train", info: "JR Nara Line to Uji Station (22 min)" }
            },
            {
              id: "k10",
              time: "11:15 - 14:00",
              title: "Byodoin Phoenix Hall & Uji River Crossing",
              category: "National Treasure",
              desc: "The iconic Pure Land Buddhist temple depicted on Japan's 10-yen coin, surrounded by tranquil lotus ponds.",
              location: "Uji, Kyoto Prefecture",
              coords: [34.8893, 135.8078],
              rating: "4.8 (8.1k)",
              ratingScore: 4.8,
              reviewCount: "8.1k",
              cost: "¥600",
              transitNext: { mode: "footprints", info: "5 min to Uji Omotesando (300m)" }
            },
            {
              id: "k11",
              time: "14:15 - 16:45",
              title: "Tsuen Authentic Matcha Grinding Workshop",
              category: "Heritage Experience",
              desc: "Hands-on tea master workshop grinding Uji Gyokuro matcha in an 860-year-old tea shop.",
              location: "Uji Bridge East, Uji",
              coords: [34.8926, 135.8115],
              rating: "4.8 (1.9k)",
              ratingScore: 4.8,
              reviewCount: "1.9k",
              cost: "¥3,500 workshop"
            }
          ]
        },
        {
          dayNumber: 4,
          dateTitle: "Day 4: Shogun Fortresses & Departure",
          slots: [
            {
              id: "k12",
              time: "09:00 - 11:30",
              title: "Nijo Castle & Nightingale Security Floors",
              category: "Feudal Palace",
              desc: "Explore Tokugawa Shogunate residence famous for squeaking 'nightingale' wooden alarm floors and Ninomaru Palace murals.",
              location: "Nakagyo Ward, Kyoto",
              coords: [35.0142, 135.7482],
              rating: "4.7 (14k)",
              ratingScore: 4.7,
              reviewCount: "14k",
              cost: "¥1,300 with palace",
              transitNext: { mode: "subway", info: "Tozai Subway Line to Kyoto Station (15 min)" }
            },
            {
              id: "k13",
              time: "12:00 - 14:30",
              title: "Kyoto Station Skyway & Souvenir Hall",
              category: "Departure & Bento",
              desc: "Pick up authentic Yatsuhashi pastries and artisan crafts before boarding the Shinkansen.",
              location: "Shimogyo Ward, Kyoto",
              coords: [34.9858, 135.7588],
              rating: "4.5 (18k)",
              ratingScore: 4.5,
              reviewCount: "18k",
              cost: "¥3,000 shopping"
            }
          ]
        }
      ]
    },

    melbourne: {
      id: "melbourne",
      title: "Melbourne Laneways & Coastal Odyssey",
      destination: "Melbourne & Great Ocean Road, Australia",
      duration: "3 Days / 2 Nights",
      budget: {
        total: "A$1,200",
        allocated: "A$940",
        currency: "AUD",
        percentUsed: 78,
        breakdown: [
          { category: "Rental Car & Fuel", amount: "A$280", share: "30%", icon: "car" },
          { category: "Boutique Lodging", amount: "A$390", share: "41%", icon: "hotel" },
          { category: "Specialty Dining", amount: "A$180", share: "19%", icon: "coffee" },
          { category: "Wildlife Sanctuary", amount: "A$90", share: "10%", icon: "compass" }
        ]
      },
      tags: ["Weekend Getaway", "Scenic Coastal Drive", "Specialty Coffee", "Active Wildlife"],
      weatherForecast: [
        { day: "Day 1 (Sat)", temp: "22°C / 14°C", condition: "Sunny & Mild", icon: "sun", rain: "5%", alert: false },
        { day: "Day 2 (Sun)", temp: "19°C / 13°C", condition: "Coastal Breeze", icon: "cloud-sun", rain: "15%", alert: false },
        { day: "Day 3 (Mon)", temp: "24°C / 15°C", condition: "Clear Sky", icon: "sun", rain: "0%", alert: false }
      ],
      days: [
        {
          dayNumber: 1,
          dateTitle: "Day 1: Cultural Laneways & Culinary Heart",
          slots: [
            {
              id: "m1",
              time: "09:00 - 11:30",
              title: "Flinders Street & Degraves Street Coffee Crawl",
              category: "Specialty Coffee",
              desc: "Begin at Melbourne's iconic copper-domed station, weaving into laneways renowned for world-class flat whites.",
              location: "Melbourne CBD",
              coords: [-37.8180, 144.9671],
              rating: "4.7 (9.2k)",
              ratingScore: 4.7,
              reviewCount: "9.2k",
              cost: "A$18",
              transitNext: { mode: "footprints", info: "5 min to Hosier Lane (350m)" }
            },
            {
              id: "m2",
              time: "11:45 - 13:30",
              title: "Hosier Lane Street Art & ACMI Gallery",
              category: "Arts & Media",
              desc: "Experience ever-evolving graffiti murals and Australia's national museum of screen culture at Fed Square.",
              location: "Federation Square",
              coords: [-37.8163, 144.9691],
              rating: "4.8 (11k)",
              ratingScore: 4.8,
              reviewCount: "11k",
              cost: "Free entrance",
              transitNext: { mode: "tram", info: "Tram Route 19 to Queen Victoria Market (12 min)" }
            },
            {
              id: "m3",
              time: "14:00 - 16:30",
              title: "Queen Victoria Market Artisan Delis",
              category: "Gourmet Market",
              desc: "Historic 1878 marketplace filled with fresh Tasmanian oysters, artisan cheeses, and hot jam donuts.",
              location: "Queen St, Melbourne",
              coords: [-37.8076, 144.9568],
              rating: "4.6 (24k)",
              ratingScore: 4.6,
              reviewCount: "24k",
              cost: "A$35 tasting"
            }
          ]
        },
        {
          dayNumber: 2,
          dateTitle: "Day 2: Great Ocean Road & Twelve Apostles",
          slots: [
            {
              id: "m4",
              time: "08:00 - 11:00",
              title: "Torquay Surf Beach & Memorial Arch Drive",
              category: "Coastal Road",
              desc: "Pick up the coastal highway, stopping at the birthplace of Rip Curl and the historic WWI Memorial Archway.",
              location: "Eastern View, Victoria",
              coords: [-38.4500, 144.0000],
              rating: "4.8 (7k)",
              ratingScore: 4.8,
              reviewCount: "7k",
              cost: "A$45 petrol share",
              transitNext: { mode: "car", info: "1h 20m scenic coastal twists to Apollo Bay" }
            },
            {
              id: "m5",
              time: "12:30 - 14:00",
              title: "Apollo Bay Fishermen's Seafood Lunch",
              category: "Fresh Catch",
              desc: "Dine on southern rock lobster rolls overlooking the calm ocean harbour.",
              location: "Apollo Bay, VIC",
              coords: [-38.7567, 143.6667],
              rating: "4.6 (3.2k)",
              ratingScore: 4.6,
              reviewCount: "3.2k",
              cost: "A$42",
              transitNext: { mode: "car", info: "1h 15m inland rainforest drive through Great Otway" }
            },
            {
              id: "m6",
              time: "16:00 - 18:30",
              title: "Twelve Apostles & Loch Ard Gorge Sunset",
              category: "Natural Wonder",
              desc: "Spectacular golden hour light illuminating dramatic limestone stacks rising 45 meters above the Southern Ocean.",
              location: "Port Campbell National Park",
              coords: [-38.6658, 143.1047],
              rating: "4.9 (29k)",
              ratingScore: 4.9,
              reviewCount: "29k",
              cost: "Free entrance"
            }
          ]
        }
      ]
    },

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
    }
  },

  // Dynamic Replanning Event: Kyoto Day 2 Afternoon Rainstorm
  replannedKyotoDay2: {
    event: "Afternoon Heavy Rain Alert in Kyoto (Expected from 14:00)",
    agentReasoning: [
      "Weather Alert: Arashiyama outdoor hiking trail (Monkey Park) is exposed and slippery in heavy rain.",
      "Indoor Search: Discovered top-rated sheltered attractions within 25 min transit radius.",
      "Schedule Swap: Replaced outdoor mountain walk with Kyoto National Museum & covered Nishiki Market arcade.",
      "Transit Adjusted: Switched to covered Randen tram and Tozai subway line."
    ],
    toolCalls: [
      { step: "Precipitation Forecast Check", detail: "Heavy rainfall window expected 14:00 - 18:00", icon: "cloud-rain" },
      { step: "Sheltered Attractions Search", detail: "Found Kyoto National Museum & covered Nishiki Market", icon: "landmark" },
      { step: "Comfortable Transit Rerouting", detail: "24 min via covered tram & subway line", icon: "subway" }
    ],
    newSlots: [
      {
        id: "k5",
        time: "08:30 - 11:00",
        title: "Arashiyama Bamboo Grove & Tenryu-ji",
        category: "Nature & Zen",
        desc: "Morning walk through towering emerald bamboo stalks, visiting Tenryu-ji's legendary 14th-century Zen garden.",
        location: "Ukyo Ward, Kyoto",
        coords: [35.0170, 135.6713],
        rating: "4.8 (21k)",
        ratingScore: 4.8,
        reviewCount: "21k",
        cost: "¥500 temple fee",
        transitNext: { mode: "footprints", info: "15 min walk across Togetsukyo Bridge (1.1km)" }
      },
      {
        id: "k6",
        time: "11:30 - 13:30",
        title: "Togetsukyo Bridge & Riverside Soba Lunch",
        category: "Lunch & Scenery",
        desc: "Enjoy traditional handmade soba alongside the picturesque Katsura River with views of autumn hillsides.",
        location: "Arashiyama, Ukyo Ward",
        coords: [35.0128, 135.6777],
        rating: "4.6 (4.2k)",
        ratingScore: 4.6,
        reviewCount: "4.2k",
        cost: "¥2,200",
        transitNext: { mode: "train", info: "Randen Tram to Shijo-Omiya & Metro (24 min sheltered)" }
      },
      {
        id: "k7_replanned",
        time: "14:15 - 16:45",
        title: "Kyoto National Museum (Indoor Masterpieces)",
        category: "Sheltered Museum",
        desc: "Admire historic Buddhist sculptures, exquisite samurai armor and Japanese calligraphy in the comfortable, climate-controlled Meiji pavilion away from the rain.",
        location: "Higashiyama Ward, Kyoto",
        coords: [34.9902, 135.7728],
        rating: "4.7 (7.2k)",
        ratingScore: 4.7,
        reviewCount: "7.2k",
        cost: "¥700",
        replanned: true,
        originalTitle: "Iwatayama Monkey Park",
        transitNext: { mode: "footprints", info: "12 min covered walk to Nishiki Arcade (850m)" }
      },
      {
        id: "k8_replanned",
        time: "17:00 - 19:30",
        title: "Nishiki Market 'Kyoto's Kitchen' Covered Arcade",
        category: "Sheltered Foodie Haven",
        desc: "A 400-year-old 5-block covered shopping street completely protected from weather. Sample fresh grilled eel, dashi tamago, and artisanal wagashi.",
        location: "Nakagyo Ward, Kyoto",
        coords: [35.0050, 135.7652],
        rating: "4.7 (16k)",
        ratingScore: 4.7,
        reviewCount: "16k",
        cost: "¥3,500 food crawl",
        replanned: true,
        originalTitle: "Kinkaku-ji Golden Pavilion"
      }
    ]
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
    "k1": {
      poiName: "Kiyomizu-dera Temple & Wooden Stage",
      category: "UNESCO World Heritage · Buddhist Temple",
      overallScore: 4.8,
      totalReviews: "12,480",
      recommendRate: "98%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 5.0,
        crowdControl: 4.2,
        value: 4.8
      },
      socialSentiment: {
        platform: "Xiaohongshu & TikTok",
        trendTag: "Top Kyoto Sunrise Destination",
        sentimentScore: "97% Positive Sentiment",
        summary: "Travelers strongly praise the sunrise view from the wooden terrace looking out toward the Higashiyama hills. Most recommended tip is arriving at the 06:00 AM gate opening to beat tour coaches and drink peacefully from the Otowa Waterfall."
      },
      breakdown: [
        { stars: 5, pct: 84 },
        { stars: 4, pct: 13 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k1-1",
          author: "Elena Rostova",
          persona: "Solo Cultural Traveler",
          avatarText: "ER",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Sunrise Timing",
          text: "The morning light filtering through the maple trees onto the wooden stage was worth waking up at 5:30 AM. Zero crowds, serene bell echoes, and the view toward Kyoto Tower was crystal clear.",
          helpful: 52
        },
        {
          id: "rev-k1-2",
          author: "Kenji Sato",
          persona: "Local Guide",
          avatarText: "KS",
          rating: 5,
          date: "Visited 3 weeks ago",
          tag: "Photography Route",
          text: "Take the path past Koyasu Pagoda for the iconic postcard perspective of the main hall suspended over the cliff. If it begins to rain, the sheltered verandah provides dry seating.",
          helpful: 38
        },
        {
          id: "rev-k1-3",
          author: "Marcus & Lily",
          persona: "Couple",
          avatarText: "ML",
          rating: 4,
          date: "Visited September 2026",
          tag: "Walking Advisory",
          text: "Incredible architecture, but the hill climb up Matsubara-dori is moderately steep. Wear comfortable walking shoes rather than fashion boots.",
          helpful: 19
        }
      ]
    },

    "k2": {
      poiName: "Sannenzaka & Ninenzaka Teahouses",
      category: "Preserved Edo Historic District",
      overallScore: 4.7,
      totalReviews: "8,920",
      recommendRate: "95%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.8,
        crowdControl: 3.9,
        value: 4.5
      },
      socialSentiment: {
        platform: "Xiaohongshu & Instagram",
        trendTag: "Kimono Stroll & Hidden Cafes",
        sentimentScore: "94% Positive Sentiment",
        summary: "Highly recommended for traditional Japanese sweet shops and historic Machiya townhouses. Popular tips highlight the tatami Starbucks and small alleyway soba spots away from the main stairs."
      },
      breakdown: [
        { stars: 5, pct: 76 },
        { stars: 4, pct: 18 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-k2-1",
          author: "Chloe Dubois",
          persona: "Foodie Focus",
          avatarText: "CD",
          rating: 5,
          date: "Visited October 2026",
          tag: "Matcha Paradise",
          text: "Do not miss the fresh roasted dango and warm hojicha tea in the courtyard behind the main stone staircase. Traditional Kyoto hospitality at its best.",
          helpful: 41
        },
        {
          id: "rev-k2-2",
          author: "Daniel Zhao",
          persona: "Solo / Couple",
          avatarText: "DZ",
          rating: 4,
          date: "Visited last week",
          tag: "Crowd Tip",
          text: "After 11:00 AM the narrow staircases get packed with photo seekers. Come either before 9:00 AM or after 17:30 when the paper lanterns light up and the crowds vanish.",
          helpful: 27
        }
      ]
    },

    "k3": {
      poiName: "Yasaka Shrine & Maruyama Park",
      category: "Shinto Shrine & Public Autumn Park",
      overallScore: 4.6,
      totalReviews: "9,510",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.7,
        crowdControl: 4.5,
        value: 5.0
      },
      socialSentiment: {
        platform: "TikTok & TripAdvisor",
        trendTag: "Evening Lantern Illumination",
        sentimentScore: "95% Positive Sentiment",
        summary: "Travelers love the free admission and 24-hour access. The dance stage lanterns bearing sponsors' calligraphy glow beautifully around twilight."
      },
      breakdown: [
        { stars: 5, pct: 72 },
        { stars: 4, pct: 21 },
        { stars: 3, pct: 5 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-k3-1",
          author: "Hiroshi Mori",
          persona: "Family Leisure",
          avatarText: "HM",
          rating: 5,
          date: "Visited 1 week ago",
          tag: "Lantern Stage",
          text: "Beautiful at dusk when the central pavilion's hundreds of lanterns are turned on. It connects directly into Maruyama Park for a peaceful stroll away from city traffic.",
          helpful: 34
        }
      ]
    },

    "k4": {
      poiName: "Gion Shirakawa & Pontocho Alley Dinner",
      category: "Historic Entertainment Quarter & Riverfront Kaiseki",
      overallScore: 4.9,
      totalReviews: "5,340",
      recommendRate: "99%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 4.9,
        crowdControl: 4.4,
        value: 4.6
      },
      socialSentiment: {
        platform: "Xiaohongshu & Dianping",
        trendTag: "Atmospheric Night Walk & River Terraces",
        sentimentScore: "98% Positive Sentiment",
        summary: "Praised as Kyoto's most romantic night dining strip. Booking river-facing tables (Kawayuka) in advance is widely encouraged by past diners."
      },
      breakdown: [
        { stars: 5, pct: 89 },
        { stars: 4, pct: 9 },
        { stars: 3, pct: 1 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k4-1",
          author: "Aiden Scott",
          persona: "Foodie Focus",
          avatarText: "AS",
          rating: 5,
          date: "Visited September 2026",
          tag: "Pontocho Dining",
          text: "The narrow stone alleyway lined with traditional noren curtains and wooden lattices is pure magic at night. The multi-course seasonal dinner was unforgettable.",
          helpful: 48
        }
      ]
    },

    "k5": {
      poiName: "Arashiyama Bamboo Grove & Tenryu-ji",
      category: "Natural Landmark & Zen Buddhist Monastery",
      overallScore: 4.8,
      totalReviews: "21,300",
      recommendRate: "97%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.9,
        crowdControl: 3.8,
        value: 4.7
      },
      socialSentiment: {
        platform: "TikTok & Xiaohongshu",
        trendTag: "Emerald Soundscape & Morning Silence",
        sentimentScore: "96% Positive Sentiment",
        summary: "Recognized on Japan's '100 Soundscapes'. Travelers emphasize that gentle breezes rustling the tall stalks is tranquil, but visiting by 08:30 AM is crucial for peaceful photos."
      },
      breakdown: [
        { stars: 5, pct: 82 },
        { stars: 4, pct: 14 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k5-1",
          author: "Samantha Bell",
          persona: "Solo / Couple",
          avatarText: "SB",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Early Bird",
          text: "Arrived at 8:00 AM on a crisp morning. The green bamboo tunnel felt like stepping into another dimension. Tenryu-ji garden right beside it is worth the extra ¥500.",
          helpful: 63
        }
      ]
    },

    "k6": {
      poiName: "Togetsukyo Bridge & Riverside Soba Lunch",
      category: "Historic Bridge & Scenic Dining",
      overallScore: 4.6,
      totalReviews: "4,200",
      recommendRate: "94%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.7,
        crowdControl: 4.0,
        value: 4.4
      },
      socialSentiment: {
        platform: "Xiaohongshu & Tabelog",
        trendTag: "Riverside Soba & Mountain Views",
        sentimentScore: "93% Positive Sentiment",
        summary: "Yoshimura handmade soba with views of the Oi River and autumn foliage gets high praise. Window seats are in high demand during midday."
      },
      breakdown: [
        { stars: 5, pct: 70 },
        { stars: 4, pct: 23 },
        { stars: 3, pct: 5 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-k6-1",
          author: "Oliver Brown",
          persona: "Foodie Focus",
          avatarText: "OB",
          rating: 5,
          date: "Visited 2 weeks ago",
          tag: "Window Counter",
          text: "Freshly buckwheat-ground soba served with hot tempura overlooking Togetsukyo Bridge. Waiting 15 minutes for a 2nd-floor window seat was well worth it.",
          helpful: 24
        }
      ]
    },

    "k7": {
      poiName: "Iwatayama Monkey Park (Outdoor Hike)",
      category: "Wildlife Sanctuary & Panoramic Hilltop",
      overallScore: 4.5,
      totalReviews: "3,820",
      recommendRate: "91%",
      subRatings: {
        atmosphere: 4.6,
        photoSpots: 4.8,
        crowdControl: 4.3,
        value: 4.6
      },
      socialSentiment: {
        platform: "TripAdvisor & YouTube",
        trendTag: "Wild Macaques & Kyoto Panorama",
        sentimentScore: "90% Positive Sentiment",
        summary: "Great open-air views of Kyoto city and playful monkeys. However, reviews universally advise avoiding the 20-minute dirt trail during rainy conditions due to mud and slippery rocks."
      },
      breakdown: [
        { stars: 5, pct: 68 },
        { stars: 4, pct: 22 },
        { stars: 3, pct: 7 },
        { stars: 2, pct: 2 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-k7-1",
          author: "Liam Walker",
          persona: "Family Leisure",
          avatarText: "LW",
          rating: 4,
          date: "Visited last month",
          tag: "Weather Notice",
          text: "The summit view is fantastic on clear dry days. Note that the 20-minute uphill path is exposed; if it starts raining, the soil gets very slick.",
          helpful: 31
        }
      ]
    },

    "k7_replanned": {
      poiName: "Kyoto National Museum (Indoor Masterpieces)",
      category: "Sheltered National Museum · Meiji Cultural Heritage",
      overallScore: 4.7,
      totalReviews: "7,240",
      recommendRate: "97%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.5,
        crowdControl: 4.8,
        value: 4.9
      },
      socialSentiment: {
        platform: "Xiaohongshu & Google Reviews",
        trendTag: "Ultimate Rainy Day Sanctuary",
        sentimentScore: "98% Positive Sentiment",
        summary: "Highly lauded as Kyoto's premier cultural haven during inclement weather. The modern Heisei Chishinkan wing offers world-class climate control, quiet viewing galleries, and English audioguides."
      },
      breakdown: [
        { stars: 5, pct: 78 },
        { stars: 4, pct: 18 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k7r-1",
          author: "Dr. Evelyn Reed",
          persona: "Solo Cultural Traveler",
          avatarText: "ER",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Rain Shelter Gem",
          text: "When heavy afternoon rain began, VoyAgent suggested swapping over here. It was the best decision! The samurai armor and Buddhist wooden statues in the dry, quiet gallery were breathtaking.",
          helpful: 47
        },
        {
          id: "rev-k7r-2",
          author: "Tetsuya Kondo",
          persona: "Local Guide",
          avatarText: "TK",
          rating: 5,
          date: "Visited 1 week ago",
          tag: "Garden Cafe",
          text: "The cafe inside the museum looking out through floor-to-ceiling glass onto the Meiji red-brick building is relaxing while rain falls outside.",
          helpful: 33
        }
      ]
    },

    "k8_replanned": {
      poiName: "Nishiki Market Covered Arcade",
      category: "Sheltered Food Arcade · 'Kyoto's Kitchen'",
      overallScore: 4.7,
      totalReviews: "16,100",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.6,
        crowdControl: 4.1,
        value: 4.7
      },
      socialSentiment: {
        platform: "TikTok & Xiaohongshu",
        trendTag: "400m Weatherproof Street Food Heaven",
        sentimentScore: "95% Positive Sentiment",
        summary: "Over 130 stalls along a 400-meter covered corridor. Completely sheltered from torrential rain. Top items: dashi tamagoyaki, grilled unagi skewers, and artisanal pickles."
      },
      breakdown: [
        { stars: 5, pct: 77 },
        { stars: 4, pct: 18 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-k8r-1",
          author: "Mei-Ling Chang",
          persona: "Foodie Focus",
          avatarText: "MC",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Food Crawl",
          text: "Raining buckets outside, but we were completely warm and dry inside Nishiki. The freshly grilled octopus skewers and warm soybean donuts were perfection.",
          helpful: 59
        }
      ]
    },

    "k8": {
      poiName: "Kinkaku-ji (Golden Pavilion)",
      category: "UNESCO World Heritage · Zen Buddhist Temple",
      overallScore: 4.7,
      totalReviews: "19,400",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 5.0,
        crowdControl: 3.6,
        value: 4.5
      },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Iconic Gold Mirror Reflection",
        sentimentScore: "94% Positive Sentiment",
        summary: "Top-tier photography landmark. The gold leaf exterior gleaming over the lake creates postcard reflections. Note that the visitor path is entirely outdoors."
      },
      breakdown: [
        { stars: 5, pct: 79 },
        { stars: 4, pct: 16 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k8-1",
          author: "Jonas Richter",
          persona: "Solo / Couple",
          avatarText: "JR",
          rating: 5,
          date: "Visited September 2026",
          tag: "Sunset Reflection",
          text: "Late afternoon light makes the gold glow brilliantly. Just note that the viewing loop is one-way and outdoor; carry an umbrella if clouds gather.",
          helpful: 35
        }
      ]
    },

    "k9": {
      poiName: "Fushimi Inari Taisha 1,000 Torii Path",
      category: "Sacred Shinto Shrine & Mountain Pilgrimage",
      overallScore: 4.9,
      totalReviews: "35,200",
      recommendRate: "99%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 5.0,
        crowdControl: 4.1,
        value: 5.0
      },
      socialSentiment: {
        platform: "TikTok, Xiaohongshu & YouTube",
        trendTag: "Number One Landmark in Japan",
        sentimentScore: "98% Positive Sentiment",
        summary: "Tens of thousands of vermilion gates winding up the mountain. Travelers emphasize that walking past the Yotsutsuji intersection yields quiet trails and panoramic city vistas."
      },
      breakdown: [
        { stars: 5, pct: 91 },
        { stars: 4, pct: 7 },
        { stars: 3, pct: 1 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k9-1",
          author: "Hannah Clarke",
          persona: "Solo Cultural Traveler",
          avatarText: "HC",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Mount Inari Loop",
          text: "Hiked the entire 2.5-hour mountain circuit starting at 7:00 AM. As you ascend, the crowds thin to almost nothing and mountain fox shrines emerge in the forest mist.",
          helpful: 84
        }
      ]
    },

    "k10": {
      poiName: "Byodoin Phoenix Hall",
      category: "National Treasure · Pure Land Architecture",
      overallScore: 4.8,
      totalReviews: "8,120",
      recommendRate: "97%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.9,
        crowdControl: 4.4,
        value: 4.8
      },
      socialSentiment: {
        platform: "Xiaohongshu & Google Maps",
        trendTag: "10-Yen Coin Temple & Reflection Pond",
        sentimentScore: "97% Positive Sentiment",
        summary: "The 1053 AD wooden Phoenix Hall mirrored in the Aji-ike pond is a masterwork. The underground Hoshokan museum is climate-controlled and showcases bronze phoenix statues."
      },
      breakdown: [
        { stars: 5, pct: 83 },
        { stars: 4, pct: 14 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k10-1",
          author: "Benjamin Lee",
          persona: "Cultural Heritage",
          avatarText: "BL",
          rating: 5,
          date: "Visited October 2026",
          tag: "Museum Treasure",
          text: "Holding up a 10-yen coin against the actual Phoenix Hall is an essential photo, but the modern underground museum displaying original flying Bodhisattvas was the true highlight.",
          helpful: 46
        }
      ]
    },

    "k11": {
      poiName: "Tsuen Authentic Matcha Workshop",
      category: "860-Year-Old Historic Teahouse",
      overallScore: 4.8,
      totalReviews: "1,940",
      recommendRate: "98%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 4.7,
        crowdControl: 4.8,
        value: 4.7
      },
      socialSentiment: {
        platform: "Xiaohongshu & Instagram",
        trendTag: "World's Oldest Operating Teahouse (Est. 1160)",
        sentimentScore: "99% Positive Sentiment",
        summary: "Run by the 24th generation master. Stone-grinding your own Gyokuro green tea leaves and drinking fresh froth beside the Uji River bridge."
      },
      breakdown: [
        { stars: 5, pct: 85 },
        { stars: 4, pct: 13 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 0 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k11-1",
          author: "Charlotte Evans",
          persona: "Foodie Focus",
          avatarText: "CE",
          rating: 5,
          date: "Visited last week",
          tag: "Tea Master Class",
          text: "Drinking fresh ceremonial matcha ground with your own hands while listening to stories from a family that has poured tea since the 12th century. Unrivaled authentic depth.",
          helpful: 39
        }
      ]
    },

    "k12": {
      poiName: "Nijo Castle & Ninomaru Palace",
      category: "Tokugawa Shogunate Residence · Feudal History",
      overallScore: 4.7,
      totalReviews: "14,200",
      recommendRate: "95%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.6,
        crowdControl: 4.3,
        value: 4.6
      },
      socialSentiment: {
        platform: "TripAdvisor & YouTube",
        trendTag: "Chirping Nightingale Security Floors",
        sentimentScore: "95% Positive Sentiment",
        summary: "The clever architectural security system of floorboards that chirp like birds when walked upon is a crowd favorite. Beautiful Kano school gold leaf wall paintings inside."
      },
      breakdown: [
        { stars: 5, pct: 76 },
        { stars: 4, pct: 19 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-k12-1",
          author: "Nathan King",
          persona: "Solo Cultural Traveler",
          avatarText: "NK",
          rating: 5,
          date: "Visited 3 weeks ago",
          tag: "Palace Walk",
          text: "Walking barefoot through Ninomaru Palace hearing the nightingale floorboards chirp beneath your feet is incredible living history.",
          helpful: 28
        }
      ]
    },

    "k13": {
      poiName: "Kyoto Station Skyway & Souvenir Hall",
      category: "Modern Architectural Hub & Craft Plaza",
      overallScore: 4.5,
      totalReviews: "18,300",
      recommendRate: "93%",
      subRatings: {
        atmosphere: 4.6,
        photoSpots: 4.7,
        crowdControl: 3.9,
        value: 4.5
      },
      socialSentiment: {
        platform: "Google Reviews",
        trendTag: "11-Story Glass Atrium & Skywalk",
        sentimentScore: "93% Positive Sentiment",
        summary: "Hiroshi Hara's futuristic glass and steel complex. The 10th-floor Skyway corridor offers panoramic city and Kyoto Tower views, right above the ramen food floor."
      },
      breakdown: [
        { stars: 5, pct: 67 },
        { stars: 4, pct: 25 },
        { stars: 3, pct: 6 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-k13-1",
          author: "Lucas Miller",
          persona: "Business Travel",
          avatarText: "LM",
          rating: 5,
          date: "Visited yesterday",
          tag: "Skyway Sunset",
          text: "Take the giant illuminated grand staircase up to the 11th floor Skyway. Perfect free city viewpoint while picking up bento boxes before boarding the bullet train.",
          helpful: 22
        }
      ]
    },

    // Melbourne POIs
    "m1": {
      poiName: "Flinders Street & Degraves Street Coffee Crawl",
      category: "Specialty Espresso Bar Precinct",
      overallScore: 4.7,
      totalReviews: "9,200",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.7,
        crowdControl: 4.0,
        value: 4.6
      },
      socialSentiment: {
        platform: "TikTok & Broadsheet",
        trendTag: "World Capital of Flat Whites",
        sentimentScore: "97% Positive Sentiment",
        summary: "Bustling cobblestone laneway packed with hole-in-the-wall espresso bars, outdoor umbrella tables, and freshly baked pastries."
      },
      breakdown: [
        { stars: 5, pct: 78 },
        { stars: 4, pct: 18 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-m1-1",
          author: "Jessica Taylor",
          persona: "Foodie Focus",
          avatarText: "JT",
          rating: 5,
          date: "Visited last weekend",
          tag: "Best Flat White",
          text: "Grabbed a single-origin oat flat white from Degraves Espresso. The laneway energy in the morning with commuters and acoustic buskers is quintessential Melbourne.",
          helpful: 37
        }
      ]
    },

    "m2": {
      poiName: "Hosier Lane Street Art & ACMI Gallery",
      category: "Graffiti Arts Precinct & Moving Image Museum",
      overallScore: 4.8,
      totalReviews: "11,400",
      recommendRate: "97%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 5.0,
        crowdControl: 4.1,
        value: 5.0
      },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Dynamic Urban Murals & Free ACMI",
        sentimentScore: "96% Positive Sentiment",
        summary: "Constantly morphing street art canvas followed by the free permanent media exhibit at ACMI, right across from Federation Square."
      },
      breakdown: [
        { stars: 5, pct: 83 },
        { stars: 4, pct: 14 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-m2-1",
          author: "Liam O'Connor",
          persona: "Arts & Culture",
          avatarText: "LO",
          rating: 5,
          date: "Visited 2 weeks ago",
          tag: "Vibrant Murals",
          text: "Every few weeks artists spray fresh murals. Pair it with ACMI across the street for a full creative immersion.",
          helpful: 29
        }
      ]
    },

    "m3": {
      poiName: "Queen Victoria Market Artisan Delis",
      category: "1878 Historic Produce & Food Hall",
      overallScore: 4.6,
      totalReviews: "24,300",
      recommendRate: "95%",
      subRatings: {
        atmosphere: 4.7,
        photoSpots: 4.5,
        crowdControl: 3.9,
        value: 4.7
      },
      socialSentiment: {
        platform: "Xiaohongshu & TikTok",
        trendTag: "Hot Jam Donuts & Coffin Bay Oysters",
        sentimentScore: "94% Positive Sentiment",
        summary: "The heritage Deli Hall is heaven for cheese, cured meats, and fresh Tasmanian oysters shucked to order. American Doughnut Kitchen van outside is a mandatory ritual."
      },
      breakdown: [
        { stars: 5, pct: 72 },
        { stars: 4, pct: 22 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-m3-1",
          author: "Zara Khan",
          persona: "Foodie Focus",
          avatarText: "ZK",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Deli Hall",
          text: "Fresh sourdough, truffle brie, and half-a-dozen fresh oysters for lunch. A vibrant feast with local vendors.",
          helpful: 44
        }
      ]
    },

    "m4": {
      poiName: "Torquay Surf Beach & Memorial Arch Drive",
      category: "Coastal Gateway & Historic Memorial",
      overallScore: 4.8,
      totalReviews: "7,120",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.8,
        crowdControl: 4.4,
        value: 5.0
      },
      socialSentiment: {
        platform: "YouTube & Instagram",
        trendTag: "Beginning of the Great Ocean Road",
        sentimentScore: "97% Positive Sentiment",
        summary: "The official timber Memorial Arch built by returned WWI diggers. The ocean breeze and rugged Bass Strait breakers kick off the road trip in dramatic fashion."
      },
      breakdown: [
        { stars: 5, pct: 81 },
        { stars: 4, pct: 15 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-m4-1",
          author: "Tom Jenkins",
          persona: "Road Tripper",
          avatarText: "TJ",
          rating: 5,
          date: "Visited September 2026",
          tag: "Iconic Start",
          text: "Pulling over just past the arch to hear the roaring waves crashing into Eastern View beach sets the stage for one of the greatest coastal drives on earth.",
          helpful: 36
        }
      ]
    },

    "m5": {
      poiName: "Apollo Bay Fishermen's Seafood Lunch",
      category: "Ocean Harbor Seafood Wharf",
      overallScore: 4.6,
      totalReviews: "3,250",
      recommendRate: "94%",
      subRatings: {
        atmosphere: 4.7,
        photoSpots: 4.6,
        crowdControl: 4.2,
        value: 4.5
      },
      socialSentiment: {
        platform: "Broadsheet & Xiaohongshu",
        trendTag: "Fresh Crayfish & Harbour Views",
        sentimentScore: "95% Positive Sentiment",
        summary: "Southern Rock Lobster grilled with garlic butter and chips directly on the fisherman's pier, midway along the Great Ocean Road."
      },
      breakdown: [
        { stars: 5, pct: 71 },
        { stars: 4, pct: 23 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-m5-1",
          author: "Grace Murphy",
          persona: "Foodie Focus",
          avatarText: "GM",
          rating: 5,
          date: "Visited 2 weeks ago",
          tag: "Lobster Roll",
          text: "Eating fresh caught crayfish roll sitting on the timber wharf while fishing boats come into the bay. Perfection after a morning of coastal driving.",
          helpful: 27
        }
      ]
    },

    "m6": {
      poiName: "Twelve Apostles & Loch Ard Gorge Sunset",
      category: "Dramatic Limestone Sea Stacks · Marine National Park",
      overallScore: 4.9,
      totalReviews: "29,400",
      recommendRate: "99%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 5.0,
        crowdControl: 4.2,
        value: 5.0
      },
      socialSentiment: {
        platform: "TikTok & National Geographic",
        trendTag: "Unmatched Southern Ocean Sunset",
        sentimentScore: "98% Positive Sentiment",
        summary: "45-meter limestone sentinels carved by the Southern Ocean. Golden hour light illuminating the sea spray is an unforgettable natural wonder."
      },
      breakdown: [
        { stars: 5, pct: 92 },
        { stars: 4, pct: 7 },
        { stars: 3, pct: 1 },
        { stars: 2, pct: 0 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-m6-1",
          author: "Christian Scott",
          persona: "Solo / Couple",
          avatarText: "CS",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Golden Hour",
          text: "Arrive 45 minutes before sunset and walk out to the Castle Rock lookout. The golden sun hitting the limestone stacks while fairy penguins swim ashore is pure poetry.",
          helpful: 73
        }
      ]
    },

    // ==========================================
    // Kuala Lumpur POI Reviews & Feedback
    // ==========================================
    "kl1": {
      poiName: "Merdeka Square & Sultan Abdul Samad Building",
      category: "Colonial Moorish Landmark & Historic Square",
      overallScore: 4.7,
      totalReviews: "18,520",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.9,
        crowdControl: 4.5,
        value: 4.8
      },
      socialSentiment: {
        platform: "TikTok & Xiaohongshu",
        trendTag: "Moorish Architecture & River of Life",
        sentimentScore: "96% Positive Sentiment",
        summary: "Travelers strongly recommend morning visits for quiet colonial photography, or evening strolls when the Sultan Abdul Samad building is lit and the River of Life blue mist display runs."
      },
      breakdown: [
        { stars: 5, pct: 79 },
        { stars: 4, pct: 16 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl1-1",
          author: "Ahmad Farhan",
          persona: "Local Guide",
          avatarText: "AF",
          rating: 5,
          date: "Visited 2 weeks ago",
          tag: "River of Life Mist",
          text: "The view of the Moorish copper domes reflected against the mist-fountain of the Klang-Gombak river confluence at dusk is spectacular. Cross the pedestrian bridge directly into Chinatown afterwards.",
          helpful: 46
        },
        {
          id: "rev-kl1-2",
          author: "Sophia Taylor",
          persona: "Solo Cultural Traveler",
          avatarText: "ST",
          rating: 5,
          date: "Visited September 2026",
          tag: "Colonial History",
          text: "Incredible historical gravitas where Malaysia gained independence in 1957. The cricket pitch lawn is huge, with the modern Merdeka 118 tower rising dramatically in the backdrop.",
          helpful: 31
        },
        {
          id: "rev-kl1-3",
          author: "Julian & Grace",
          persona: "Couple",
          avatarText: "JG",
          rating: 4,
          date: "Visited October 2026",
          tag: "Sun Protection",
          text: "Open lawn area gets hot by 11 AM. Carry an umbrella or sunglasses, then duck into the KL City Gallery for air conditioning.",
          helpful: 18
        }
      ]
    },

    "kl2": {
      poiName: "Petaling Street & Kwai Chai Hong (Chinatown)",
      category: "Restored 1960s Shophouses & Gastronomy",
      overallScore: 4.6,
      totalReviews: "22,800",
      recommendRate: "94%",
      subRatings: {
        atmosphere: 4.7,
        photoSpots: 4.9,
        crowdControl: 3.8,
        value: 4.6
      },
      socialSentiment: {
        platform: "Xiaohongshu & Instagram",
        trendTag: "Kwai Chai Hong Murals & Hainan Toast",
        sentimentScore: "94% Positive Sentiment",
        summary: "Highly celebrated for charming heritage back-alleys with interactive QR-code audio murals, authentic charcoal kaya toast, and hidden speakeasy cocktail bars."
      },
      breakdown: [
        { stars: 5, pct: 74 },
        { stars: 4, pct: 20 },
        { stars: 3, pct: 4 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-kl2-1",
          author: "Mei Ling Tan",
          persona: "Foodie Focus",
          avatarText: "MT",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Charcoal Toast & Kopi",
          text: "Do not leave without ordering the charcoal-toasted Hainanese bread with cold butter slices and rich coconut kaya. Kwai Chai Hong's red lantern bridge feels nostalgic and cinematic.",
          helpful: 58
        },
        {
          id: "rev-kl2-2",
          author: "Daniel Robertson",
          persona: "Solo / Couple",
          avatarText: "DR",
          rating: 4,
          date: "Visited 1 month ago",
          tag: "Murals & Cafes",
          text: "The murals are creative and interactive. The main Petaling covered market can be crowded with souvenir stalls, but the side alleys and hipster cafes are pure gold.",
          helpful: 24
        }
      ]
    },

    "kl3": {
      poiName: "Bukit Bintang & Pavilion KL Trend Epicentre",
      category: "Premier Lifestyle & Luxury Retail",
      overallScore: 4.8,
      totalReviews: "34,200",
      recommendRate: "97%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.8,
        crowdControl: 4.2,
        value: 4.7
      },
      socialSentiment: {
        platform: "Instagram & Google Reviews",
        trendTag: "Pavilion Crystal Fountain & Tokyo Street",
        sentimentScore: "96% Positive Sentiment",
        summary: "The beating heart of KL's urban buzz. Travelers praise the cool air-conditioned retreat, Tokyo Street precinct, and the elevated sheltered skybridge linking directly to KLCC."
      },
      breakdown: [
        { stars: 5, pct: 83 },
        { stars: 4, pct: 14 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl3-1",
          author: "Nurul Izzah",
          persona: "Family Leisure",
          avatarText: "NI",
          rating: 5,
          date: "Visited September 2026",
          tag: "Elevated Skybridge",
          text: "The covered, air-conditioned pedestrian walkway straight from Pavilion to the Petronas Towers is a life-saver in tropical heat or rain. Food Republic basement has delicious local laksa!",
          helpful: 42
        }
      ]
    },

    "kl4": {
      poiName: "Jalan Alor Night Food Street Feast",
      category: "World-Renowned Open-Air Street Dining",
      overallScore: 4.7,
      totalReviews: "29,150",
      recommendRate: "95%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.7,
        crowdControl: 3.9,
        value: 4.6
      },
      socialSentiment: {
        platform: "Xiaohongshu & YouTube Food Crawl",
        trendTag: "Wong Ah Wah BBQ Wings & Musang King",
        sentimentScore: "95% Positive Sentiment",
        summary: "The quintessential Malaysian late-night dining strip. Top-recommended orders: signature glazed charcoal chicken wings at Wong Ah Wah, salted egg squid, satay skewers, and fresh durian."
      },
      breakdown: [
        { stars: 5, pct: 78 },
        { stars: 4, pct: 17 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 1 }
      ],
      reviews: [
        {
          id: "rev-kl4-1",
          author: "Marcus Chen",
          persona: "Foodie Focus",
          avatarText: "MC",
          rating: 5,
          date: "Visited 3 weeks ago",
          tag: "Smoky Charcoal Wings",
          text: "Wong Ah Wah's chicken wings are genuinely extraordinary. Charred sweet-smoky skin and tender meat. Sit outdoors with an iced calamansi juice and absorb the vibrant nighttime neon.",
          helpful: 65
        },
        {
          id: "rev-kl4-2",
          author: "Emma Watson",
          persona: "Solo Cultural Traveler",
          avatarText: "EW",
          rating: 4,
          date: "Visited October 2026",
          tag: "Cash & Atmosphere",
          text: "Lively, sensory explosion. Most stalls accept GrabPay or DuitNow QR, but keep some ringgit cash handy for smaller fruit and juice stalls.",
          helpful: 29
        }
      ]
    },

    "kl5": {
      poiName: "Batu Caves Rainbow Steps & Lord Murugan",
      category: "Sacred Hindu Sanctuary · Limestone Cathedral Cavern",
      overallScore: 4.8,
      totalReviews: "42,100",
      recommendRate: "98%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 5.0,
        crowdControl: 4.1,
        value: 4.9
      },
      socialSentiment: {
        platform: "TikTok & National Geographic",
        trendTag: "Iconic 272 Rainbow Steps & 140ft Deity",
        sentimentScore: "98% Positive Sentiment",
        summary: "A global icon. Climbing the 272 rainbow steps past the 140-foot golden Lord Murugan statue leads into limestone caves inhabited for millions of years. Best visited at 8:00 AM."
      },
      breakdown: [
        { stars: 5, pct: 86 },
        { stars: 4, pct: 11 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl5-1",
          author: "Priya Nair",
          persona: "Solo Cultural Traveler",
          avatarText: "PN",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Morning Serenity",
          text: "Took the KTM Komuter train right to the entrance at 8:00 AM. Golden morning sunlight hit the Murugan statue with cool mountain breezes inside the cathedral cavern. Mind your snacks around monkeys!",
          helpful: 84
        },
        {
          id: "rev-kl5-2",
          author: "Lucas Graham",
          persona: "Solo / Couple",
          avatarText: "LG",
          rating: 5,
          date: "Visited September 2026",
          tag: "Dress Code Tip",
          text: "Shoulders and knees must be covered for the steps (sarongs can be rented for RM 5 at the base). The scale of the limestone chamber is awe-inspiring.",
          helpful: 52
        }
      ]
    },

    "kl6": {
      poiName: "Petronas Twin Towers Skybridge & Suria KLCC",
      category: "Architectural Masterpiece · World's Tallest Twin Towers",
      overallScore: 4.9,
      totalReviews: "55,400",
      recommendRate: "99%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 5.0,
        crowdControl: 4.6,
        value: 4.8
      },
      socialSentiment: {
        platform: "TripAdvisor & Xiaohongshu",
        trendTag: "Skybridge Level 41 & César Pelli Design",
        sentimentScore: "99% Positive Sentiment",
        summary: "The pinnacle of modern Kuala Lumpur architecture. Travelers emphasize booking time slots in advance for the double-deck Skybridge crossing and Level 86 observatory."
      },
      breakdown: [
        { stars: 5, pct: 90 },
        { stars: 4, pct: 8 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 0 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl6-1",
          author: "Liam O'Connor",
          persona: "Solo / Couple",
          avatarText: "LO",
          rating: 5,
          date: "Visited 2 weeks ago",
          tag: "Skybridge Engineering",
          text: "Standing in the middle of the bridge connecting both towers 170 meters above the ground was breathtaking. The stainless steel exterior facets reflect sunlight like fine jewelry.",
          helpful: 71
        },
        {
          id: "rev-kl6-2",
          author: "Zheng Wei",
          persona: "Local Guide",
          avatarText: "ZW",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Photography Spot",
          text: "For the best full-tower photo, stand near the fountain pond in KLCC Park with a wide-angle lens, or head to the Level 4 terrace of Suria KLCC.",
          helpful: 49
        }
      ]
    },

    "kl7": {
      poiName: "KLCC Park & Tropical Symphony Lake",
      category: "50-Acre Master-Planned Urban Rainforest Park",
      overallScore: 4.7,
      totalReviews: "21,300",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.9,
        crowdControl: 4.4,
        value: 5.0
      },
      socialSentiment: {
        platform: "Instagram & TikTok",
        trendTag: "Twin Towers Reflection & Lake Symphony",
        sentimentScore: "96% Positive Sentiment",
        summary: "Roberto Burle Marx's brilliant landscape masterpiece. Breathtaking views of the glass towers through lush tropical palms. If rain starts, the mall is a 2-minute sprint."
      },
      breakdown: [
        { stars: 5, pct: 80 },
        { stars: 4, pct: 16 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl7-1",
          author: "Claire Bennett",
          persona: "Family Leisure",
          avatarText: "CB",
          rating: 5,
          date: "Visited October 2026",
          tag: "Park Jogging & Stroll",
          text: "Spacious rubberised jogging tracks, free wading pool for kids, and the best vantage points to look straight up at the twin towers. Highly relaxing in the afternoon.",
          helpful: 34
        }
      ]
    },

    "kl8": {
      poiName: "Marini's on 57 Rooftop Lounge & Lake Symphony",
      category: "Luxury Skyline Rooftop Lounge & High-Altitude Dining",
      overallScore: 4.8,
      totalReviews: "8,750",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 5.0,
        photoSpots: 5.0,
        crowdControl: 4.5,
        value: 4.4
      },
      socialSentiment: {
        platform: "Tatler Dining & Xiaohongshu",
        trendTag: "Eye-Level Petronas Spire View",
        sentimentScore: "97% Positive Sentiment",
        summary: "Perched right beside Tower 3 on the 57th floor. Unrivaled eye-level views of the soaring spire illuminated against the night sky."
      },
      breakdown: [
        { stars: 5, pct: 84 },
        { stars: 4, pct: 12 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl8-1",
          author: "Antoine Moreau",
          persona: "Solo / Couple",
          avatarText: "AM",
          rating: 5,
          date: "Visited September 2026",
          tag: "Floor-to-Ceiling Glass",
          text: "The sheer proximity to the Petronas Towers from this height is dizzying. Sipping a mocktail while looking out over the illuminated spires was the highlight of our trip.",
          helpful: 48
        }
      ]
    },

    "kl9": {
      poiName: "Perdana Botanical Gardens & Orchid Sanctuary",
      category: "Historic Botanical Gardens & Tropical Green Lung",
      overallScore: 4.7,
      totalReviews: "14,100",
      recommendRate: "95%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.8,
        crowdControl: 4.6,
        value: 5.0
      },
      socialSentiment: {
        platform: "Google Reviews & Travel Blogs",
        trendTag: "Orchid Haven & Bamboo Playhouses",
        sentimentScore: "95% Positive Sentiment",
        summary: "Dating back to 1888, this tranquil 220-acre garden features thousands of vibrant tropical orchids, giant bamboo groves, and lake boardwalks."
      },
      breakdown: [
        { stars: 5, pct: 79 },
        { stars: 4, pct: 17 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl9-1",
          author: "Farah Diba",
          persona: "Family Leisure",
          avatarText: "FD",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Morning Tranquility",
          text: "Extremely well maintained and peaceful. The sunken gardens and orchid house are magnificent for photography. Completely free entry is a wonderful bonus.",
          helpful: 27
        }
      ]
    },

    "kl10": {
      poiName: "Islamic Arts Museum Malaysia (IAMM)",
      category: "Southeast Asia's Largest Islamic Decorative Arts Museum",
      overallScore: 4.8,
      totalReviews: "9,800",
      recommendRate: "98%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 4.9,
        crowdControl: 4.7,
        value: 4.9
      },
      socialSentiment: {
        platform: "Lonely Planet & Xiaohongshu",
        trendTag: "Turquoise Inverted Domes & Ottoman Artifacts",
        sentimentScore: "98% Positive Sentiment",
        summary: "World-class curation and architecture. Intricately painted Iranian and Uzbek turquoise domes, Qur'an manuscripts, and scale models of world mosques."
      },
      breakdown: [
        { stars: 5, pct: 85 },
        { stars: 4, pct: 13 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 0 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl10-1",
          author: "Tariq Mansoor",
          persona: "Solo Cultural Traveler",
          avatarText: "TM",
          rating: 5,
          date: "Visited 3 weeks ago",
          tag: "Curatorial Excellence",
          text: "One of the most beautifully curated museums in all of Asia. The inverted domes on the ceiling are breathtaking, and the architectural mosque replicas are masterfully detailed.",
          helpful: 39
        }
      ]
    },

    "kl11": {
      poiName: "Thean Hou Temple Robson Heights Ridge",
      category: "Six-Tiered Chinese Temple Landmark & Panoramic Lookout",
      overallScore: 4.8,
      totalReviews: "19,250",
      recommendRate: "98%",
      subRatings: {
        atmosphere: 4.9,
        photoSpots: 5.0,
        crowdControl: 4.3,
        value: 5.0
      },
      socialSentiment: {
        platform: "Instagram & Xiaohongshu",
        trendTag: "Red Lantern Canopy & Skyline Vista",
        sentimentScore: "98% Positive Sentiment",
        summary: "Perched high on Robson Heights. The courtyard canopy of hundreds of hanging vermilion lanterns framing the KL skyline is one of the most photographed scenes in Malaysia."
      },
      breakdown: [
        { stars: 5, pct: 85 },
        { stars: 4, pct: 12 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl11-1",
          author: "Winnie Chew",
          persona: "Foodie Focus",
          avatarText: "WC",
          rating: 5,
          date: "Visited September 2026",
          tag: "Lantern Canopy",
          text: "Climb up to the top tier balcony. The contrast between traditional Chinese pagoda curves and modern skyscrapers in the distance is stunning.",
          helpful: 54
        }
      ]
    },

    "kl12": {
      poiName: "KL Sentral & Nu Sentral Departure Souvenirs",
      category: "National Transit Hub & Premium Artisan Gifts",
      overallScore: 4.6,
      totalReviews: "15,200",
      recommendRate: "94%",
      subRatings: {
        atmosphere: 4.5,
        photoSpots: 4.2,
        crowdControl: 4.3,
        value: 4.7
      },
      socialSentiment: {
        platform: "Google Reviews & Travel Forum",
        trendTag: "Beryl's Chocolate & KLIA Ekspres",
        sentimentScore: "94% Positive Sentiment",
        summary: "The central rail interchange. Smooth airport transit via 28-min KLIA Ekspres, with Nu Sentral offering Beryl's chocolates, white coffee, and duty-free gifts."
      },
      breakdown: [
        { stars: 5, pct: 72 },
        { stars: 4, pct: 22 },
        { stars: 3, pct: 5 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl12-1",
          author: "Boon Kiat",
          persona: "Fast-Paced Business",
          avatarText: "BK",
          rating: 5,
          date: "Visited 1 week ago",
          tag: "Smooth Airport Link",
          text: "Checked in bags directly at KL Sentral and boarded the KLIA Ekspres. Super clean, fast, and picked up boxes of Malaysian white coffee in Nu Sentral beforehand.",
          helpful: 26
        }
      ]
    },

    "kl7_replanned": {
      poiName: "Aquaria KLCC 90m Oceanarium Tunnel",
      category: "Sheltered Underground Oceanarium · Marine Reserve",
      overallScore: 4.7,
      totalReviews: "19,400",
      recommendRate: "96%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.9,
        crowdControl: 4.2,
        value: 4.6
      },
      socialSentiment: {
        platform: "Xiaohongshu & TripAdvisor",
        trendTag: "90m Underwater Tunnel & Shark Feeding",
        sentimentScore: "96% Positive Sentiment",
        summary: "Ideal sheltered escape during tropical afternoon downpours. The 90m transparent tunnel featuring sand tiger sharks and giant stingrays swimming overhead is completely climate-controlled."
      },
      breakdown: [
        { stars: 5, pct: 79 },
        { stars: 4, pct: 17 },
        { stars: 3, pct: 3 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl7-rep-1",
          author: "Darren Koh",
          persona: "Family Leisure",
          avatarText: "DK",
          rating: 5,
          date: "Visited during rainstorm",
          tag: "Sheltered Haven",
          text: "Heavy tropical rain started at 3:30 PM outside, but we stayed bone dry inside the tunnel with sharks gliding right over us. Connected directly to Suria KLCC underground.",
          helpful: 37
        }
      ]
    },

    "kl8_replanned": {
      poiName: "Suria KLCC Dining & Indoor Symphony Lake View",
      category: "Sheltered Panoramic Dining · Premier Mall Concourse",
      overallScore: 4.8,
      totalReviews: "12,100",
      recommendRate: "97%",
      subRatings: {
        atmosphere: 4.8,
        photoSpots: 4.8,
        crowdControl: 4.4,
        value: 4.7
      },
      socialSentiment: {
        platform: "OpenTable & Broadsheet",
        trendTag: "Madam Kwan's Nasi Lemak & Lake View",
        sentimentScore: "97% Positive Sentiment",
        summary: "Watch the colorful Symphony Lake fountains through floor-to-ceiling glass windows while savoring award-winning Malaysian culinary classics in air-conditioned comfort."
      },
      breakdown: [
        { stars: 5, pct: 82 },
        { stars: 4, pct: 15 },
        { stars: 3, pct: 2 },
        { stars: 2, pct: 1 },
        { stars: 1, pct: 0 }
      ],
      reviews: [
        {
          id: "rev-kl8-rep-1",
          author: "Jessica Wong",
          persona: "Foodie Focus",
          avatarText: "JW",
          rating: 5,
          date: "Visited Autumn 2026",
          tag: "Best Nasi Lemak",
          text: "Madam Kwan's Nasi Lemak with chicken curry and beef rendang is unforgettable. Glass window views of the illuminated fountains gave us the full evening experience despite the thunderstorm.",
          helpful: 45
        }
      ]
    }
  }
};
