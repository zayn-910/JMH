/**
 * packages-data.js
 * ------------------------------------------------------------
 * Static dataset used by the frontend right now.
 *
 * IMPORTANT (for future maintainers):
 * When the backend/admin panel is deployed, replace the DATA export
 * below with a fetch() call to the API, e.g.:
 *
 *   async function loadPackages(){
 *     const res = await fetch(`${API_BASE_URL}/api/packages`);
 *     return res.json();
 *   }
 *
 * Keeping this file separate means only ONE file needs to change
 * to switch from static data to a live database.
 * ------------------------------------------------------------
 */

const API_BASE_URL = "http://localhost:4000"; // change to your deployed backend URL

const PACKAGES = [
  {
    id: "bali-bliss",
    title: "Bali Bliss — Beaches & Temples",
    destination: "Bali, Indonesia",
    country: "Indonesia",
    tripType: "Beach",
    duration: 6,
    price: 68999,
    rating: 4.8,
    reviews: 132,
    badge: "Bestseller",
    heroImg: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900",
      "https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=900",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=900",
      "https://images.unsplash.com/photo-1518544866330-4c657beea3f0?q=80&w=900",
      "https://images.unsplash.com/photo-1573790387438-4da905039392?q=80&w=900"
    ],
    summary: "Six days between rice terraces, cliffside temples and sunset beach clubs, with a private guide for every excursion.",
    itinerary: [
      { day: 1, title: "Arrival in Denpasar", desc: "Airport pickup, transfer to Seminyak, evening at leisure on the beach." },
      { day: 2, title: "Ubud Culture Trail", desc: "Tegalalang rice terraces, Sacred Monkey Forest, traditional Legong dance show." },
      { day: 3, title: "Temples & Waterfalls", desc: "Tirta Empul holy spring, Tegenungan waterfall, Balinese cooking class." },
      { day: 4, title: "Nusa Penida Island Hop", desc: "Speedboat to Nusa Penida — Kelingking Beach, Angel's Billabong, snorkeling." },
      { day: 5, title: "Uluwatu & Sunset", desc: "Uluwatu cliff temple, Kecak fire dance, beach club dinner in Jimbaran." },
      { day: 6, title: "Departure", desc: "Leisure morning, transfer to airport." }
    ],
    inclusions: ["5 nights 4-star accommodation", "Daily breakfast", "Private AC vehicle & driver", "Airport transfers", "All entry tickets listed in itinerary", "English-speaking local guide"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters & Hills",
    destination: "Kerala, India",
    country: "India",
    tripType: "Nature",
    duration: 5,
    price: 24999,
    rating: 4.7,
    reviews: 210,
    badge: "Family Favourite",
    heroImg: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=900",
      "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?q=80&w=900",
      "https://images.unsplash.com/photo-1602440708786-3f9b8e7c3d5c?q=80&w=900",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=900",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=900"
    ],
    summary: "Houseboat nights on the backwaters, misty tea gardens in Munnar, and a wildlife safari in Thekkady.",
    itinerary: [
      { day: 1, title: "Arrival in Kochi", desc: "Fort Kochi heritage walk, Chinese fishing nets at sunset." },
      { day: 2, title: "Munnar Hills", desc: "Drive to Munnar via spice plantations, tea museum visit." },
      { day: 3, title: "Thekkady Wildlife", desc: "Periyar Lake boat safari, spice garden tour." },
      { day: 4, title: "Alleppey Houseboat", desc: "Overnight private houseboat cruise through the backwaters." },
      { day: 5, title: "Departure", desc: "Transfer to Kochi airport." }
    ],
    inclusions: ["4 nights stay incl. 1 night houseboat", "Daily breakfast + 1 houseboat lunch/dinner", "Private AC vehicle", "All sightseeing entry fees"],
    exclusions: ["Flights to/from Kochi", "Travel insurance", "Other meals", "Personal expenses"]
  },
  {
    id: "himalaya-trek",
    title: "Himachal Himalaya Trek",
    destination: "Himachal Pradesh, India",
    country: "India",
    tripType: "Adventure",
    duration: 7,
    price: 32999,
    rating: 4.9,
    reviews: 58,
    badge: "Trekker's Pick",
    heroImg: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=900",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?q=80&w=900",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=900",
      "https://images.unsplash.com/photo-1544198365-f5d60b6d8190?q=80&w=900",
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=900"
    ],
    summary: "A guided Himalayan trek through pine forests and alpine meadows, camping under clear mountain skies.",
    itinerary: [
      { day: 1, title: "Arrival in Manali", desc: "Acclimatisation day, gear check, briefing." },
      { day: 2, title: "Trek to Base Camp", desc: "6 hr trek through pine forest to first camp." },
      { day: 3, title: "Base to Alpine Meadow", desc: "Ridge walk with panoramic Himalaya views." },
      { day: 4, title: "Summit Push", desc: "Early start for the ridge summit, return to camp." },
      { day: 5, title: "Descent Day", desc: "Trek back toward the trailhead village." },
      { day: 6, title: "Local Village & Rest", desc: "Explore a local Himachali village, hot spring soak." },
      { day: 7, title: "Departure", desc: "Transfer back to Manali, onward journey." }
    ],
    inclusions: ["6 nights camping/guesthouse", "All meals during trek", "Certified trek guide", "Camping gear & permits", "First-aid support"],
    exclusions: ["Transport to Manali", "Travel insurance", "Personal trekking gear", "Porter for personal luggage (optional add-on)"]
  },
  {
    id: "ladakh-in-my-feels",
    title: "Ladakh in My Feels (Group Tour)",
    destination: "Leh, Nubra Valley, Pangong Lake, Leh",
    country: "India",
    tripType: "Adventure",
    duration: 7,
    price: 24599,
    rating: 4.8,
    reviews: 120,
    badge: "Group Tour",
    heroImg: "https://picsum.photos/seed/ladakh-in-my-feels-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/ladakh-in-my-feels-1/900/700",
      "https://picsum.photos/seed/ladakh-in-my-feels-2/900/700",
      "https://picsum.photos/seed/ladakh-in-my-feels-3/900/700",
      "https://picsum.photos/seed/ladakh-in-my-feels-4/900/700",
      "https://picsum.photos/seed/ladakh-in-my-feels-5/900/700"
    ],
    summary: "High-altitude passes, Nubra's sand dunes and the shifting blues of Pangong Lake on a small-group road trip.",
    itinerary: [
      { day: 1, title: "Arrive in Leh", desc: "Transfer to Leh, check-in, evening at leisure to settle in." },
      { day: 2, title: "Leh Exploration", desc: "Guided sightseeing and key highlights around Leh." },
      { day: 3, title: "Arrive in Nubra Valley", desc: "Transfer to Nubra Valley, check-in, evening at leisure to settle in." },
      { day: 4, title: "Nubra Valley Exploration", desc: "Guided sightseeing and key highlights around Nubra Valley." },
      { day: 5, title: "Arrive in Pangong Lake", desc: "Transfer to Pangong Lake, check-in, evening at leisure to settle in." },
      { day: 6, title: "Arrive in Leh", desc: "Transfer to Leh, check-in, evening at leisure to settle in." },
      { day: 7, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Inner-line permits", "Oxygen support on request"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips", "Personal high-altitude medication"]
  },
  {
    id: "thailand-full-moon-party",
    title: "Thailand Full Moon Party at Koh Phangan",
    destination: "Krabi, Koh Samui, Phuket",
    country: "Thailand",
    tripType: "Beach",
    duration: 7,
    price: 43299,
    rating: 4.7,
    reviews: 145,
    badge: "Party Special",
    heroImg: "https://picsum.photos/seed/thailand-full-moon-party-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/thailand-full-moon-party-1/900/700",
      "https://picsum.photos/seed/thailand-full-moon-party-2/900/700",
      "https://picsum.photos/seed/thailand-full-moon-party-3/900/700",
      "https://picsum.photos/seed/thailand-full-moon-party-4/900/700",
      "https://picsum.photos/seed/thailand-full-moon-party-5/900/700"
    ],
    summary: "Island-hopping through Krabi, Koh Samui and Phuket, timed around the legendary Full Moon Party at Koh Phangan.",
    itinerary: [
      { day: 1, title: "Arrive in Krabi", desc: "Transfer to Krabi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Krabi Exploration", desc: "Guided sightseeing and key highlights around Krabi." },
      { day: 3, title: "Arrive in Koh Samui", desc: "Transfer to Koh Samui, check-in, evening at leisure to settle in." },
      { day: 4, title: "Koh Samui Exploration", desc: "Guided sightseeing and key highlights around Koh Samui." },
      { day: 5, title: "Arrive in Phuket", desc: "Transfer to Phuket, check-in, evening at leisure to settle in." },
      { day: 6, title: "Phuket Exploration", desc: "Guided sightseeing and key highlights around Phuket." },
      { day: 7, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Full Moon Party entry & transfer"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips", "Alcoholic beverages"]
  },
  {
    id: "langkawi-kl-6days",
    title: "Langkawi–Kuala Lumpur 6 Days",
    destination: "Langkawi, Kuala Lumpur",
    country: "Malaysia",
    tripType: "Beach",
    duration: 6,
    price: 41899,
    rating: 4.6,
    reviews: 48,
    badge: "Budget Pick",
    heroImg: "https://picsum.photos/seed/langkawi-kl-6days-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/langkawi-kl-6days-1/900/700",
      "https://picsum.photos/seed/langkawi-kl-6days-2/900/700",
      "https://picsum.photos/seed/langkawi-kl-6days-3/900/700",
      "https://picsum.photos/seed/langkawi-kl-6days-4/900/700",
      "https://picsum.photos/seed/langkawi-kl-6days-5/900/700"
    ],
    summary: "Langkawi's beaches and cable car views paired with Kuala Lumpur's skyline and markets.",
    itinerary: [
      { day: 1, title: "Arrive in Langkawi", desc: "Transfer to Langkawi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Langkawi Exploration", desc: "Guided sightseeing and key highlights around Langkawi." },
      { day: 3, title: "Langkawi Exploration", desc: "Guided sightseeing and key highlights around Langkawi." },
      { day: 4, title: "Arrive in Kuala Lumpur", desc: "Transfer to Kuala Lumpur, check-in, evening at leisure to settle in." },
      { day: 5, title: "Kuala Lumpur Exploration", desc: "Guided sightseeing and key highlights around Kuala Lumpur." },
      { day: 6, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Domestic flight Langkawi–Kuala Lumpur"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "singapore-super-saver-5days",
    title: "Singapore Super Saver 5 Days",
    destination: "Singapore",
    country: "Singapore",
    tripType: "City",
    duration: 5,
    price: 43899,
    rating: 4.7,
    reviews: 66,
    badge: "Budget Pick",
    heroImg: "https://picsum.photos/seed/singapore-super-saver-5days-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/singapore-super-saver-5days-1/900/700",
      "https://picsum.photos/seed/singapore-super-saver-5days-2/900/700",
      "https://picsum.photos/seed/singapore-super-saver-5days-3/900/700",
      "https://picsum.photos/seed/singapore-super-saver-5days-4/900/700",
      "https://picsum.photos/seed/singapore-super-saver-5days-5/900/700"
    ],
    summary: "A tightly-packed Singapore city break covering Marina Bay, Sentosa and the city's top attractions.",
    itinerary: [
      { day: 1, title: "Arrive in Singapore", desc: "Transfer to Singapore, check-in, evening at leisure to settle in." },
      { day: 2, title: "Singapore Exploration", desc: "Guided sightseeing and key highlights around Singapore." },
      { day: 3, title: "Singapore Exploration", desc: "Guided sightseeing and key highlights around Singapore." },
      { day: 4, title: "Singapore Exploration", desc: "Guided sightseeing and key highlights around Singapore." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Sentosa attraction pass"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "beach-bling-bangkok-buzz",
    title: "Beach, Bling & Bangkok Buzz",
    destination: "Pattaya, Bangkok",
    country: "Thailand",
    tripType: "Beach",
    duration: 5,
    price: 30399,
    rating: 4.5,
    reviews: 54,
    badge: "Budget Pick",
    heroImg: "https://picsum.photos/seed/beach-bling-bangkok-buzz-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/beach-bling-bangkok-buzz-1/900/700",
      "https://picsum.photos/seed/beach-bling-bangkok-buzz-2/900/700",
      "https://picsum.photos/seed/beach-bling-bangkok-buzz-3/900/700",
      "https://picsum.photos/seed/beach-bling-bangkok-buzz-4/900/700",
      "https://picsum.photos/seed/beach-bling-bangkok-buzz-5/900/700"
    ],
    summary: "Beach time in Pattaya and city energy in Bangkok — a compact, budget-friendly Thailand break.",
    itinerary: [
      { day: 1, title: "Arrive in Pattaya", desc: "Transfer to Pattaya, check-in, evening at leisure to settle in." },
      { day: 2, title: "Pattaya Exploration", desc: "Guided sightseeing and key highlights around Pattaya." },
      { day: 3, title: "Arrive in Bangkok", desc: "Transfer to Bangkok, check-in, evening at leisure to settle in." },
      { day: 4, title: "Bangkok Exploration", desc: "Guided sightseeing and key highlights around Bangkok." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "vietnam-north-south-explorer",
    title: "Vietnam North to South Explorer",
    destination: "Hanoi, Da Nang, Phu Quoc",
    country: "Vietnam",
    tripType: "City",
    duration: 8,
    price: 69399,
    rating: 4.7,
    reviews: 38,
    badge: "Complete Tour",
    heroImg: "https://picsum.photos/seed/vietnam-north-south-explorer-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/vietnam-north-south-explorer-1/900/700",
      "https://picsum.photos/seed/vietnam-north-south-explorer-2/900/700",
      "https://picsum.photos/seed/vietnam-north-south-explorer-3/900/700",
      "https://picsum.photos/seed/vietnam-north-south-explorer-4/900/700",
      "https://picsum.photos/seed/vietnam-north-south-explorer-5/900/700"
    ],
    summary: "A full-country sweep from Hanoi's old quarter to Da Nang's beaches and Phu Quoc's island resorts.",
    itinerary: [
      { day: 1, title: "Arrive in Hanoi", desc: "Transfer to Hanoi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 3, title: "Arrive in Da Nang", desc: "Transfer to Da Nang, check-in, evening at leisure to settle in." },
      { day: 4, title: "Da Nang Exploration", desc: "Guided sightseeing and key highlights around Da Nang." },
      { day: 5, title: "Da Nang Exploration", desc: "Guided sightseeing and key highlights around Da Nang." },
      { day: 6, title: "Arrive in Phu Quoc", desc: "Transfer to Phu Quoc, check-in, evening at leisure to settle in." },
      { day: 7, title: "Phu Quoc Exploration", desc: "Guided sightseeing and key highlights around Phu Quoc." },
      { day: 8, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Domestic flights between cities"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "essential-hanoi-danang",
    title: "Essential Hanoi & Da Nang",
    destination: "Hanoi, Da Nang",
    country: "Vietnam",
    tripType: "City",
    duration: 6,
    price: 41799,
    rating: 4.6,
    reviews: 42,
    badge: "Popular",
    heroImg: "https://picsum.photos/seed/essential-hanoi-danang-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/essential-hanoi-danang-1/900/700",
      "https://picsum.photos/seed/essential-hanoi-danang-2/900/700",
      "https://picsum.photos/seed/essential-hanoi-danang-3/900/700",
      "https://picsum.photos/seed/essential-hanoi-danang-4/900/700",
      "https://picsum.photos/seed/essential-hanoi-danang-5/900/700"
    ],
    summary: "Old-quarter Hanoi and the beaches and Golden Bridge of Da Nang, in one easy itinerary.",
    itinerary: [
      { day: 1, title: "Arrive in Hanoi", desc: "Transfer to Hanoi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 3, title: "Arrive in Da Nang", desc: "Transfer to Da Nang, check-in, evening at leisure to settle in." },
      { day: 4, title: "Da Nang Exploration", desc: "Guided sightseeing and key highlights around Da Nang." },
      { day: 5, title: "Da Nang Exploration", desc: "Guided sightseeing and key highlights around Da Nang." },
      { day: 6, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Domestic flight Hanoi–Da Nang"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "vietnam-complete-highlights",
    title: "Vietnam Complete Highlights Tour",
    destination: "Hanoi, Halong Bay, Da Nang",
    country: "Vietnam",
    tripType: "Adventure",
    duration: 7,
    price: 67799,
    rating: 4.7,
    reviews: 30,
    badge: "Highlights Tour",
    heroImg: "https://picsum.photos/seed/vietnam-complete-highlights-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/vietnam-complete-highlights-1/900/700",
      "https://picsum.photos/seed/vietnam-complete-highlights-2/900/700",
      "https://picsum.photos/seed/vietnam-complete-highlights-3/900/700",
      "https://picsum.photos/seed/vietnam-complete-highlights-4/900/700",
      "https://picsum.photos/seed/vietnam-complete-highlights-5/900/700"
    ],
    summary: "Hanoi's culture, an overnight Halong Bay cruise, and Da Nang's coastline in one highlights-led trip.",
    itinerary: [
      { day: 1, title: "Arrive in Hanoi", desc: "Transfer to Hanoi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 3, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 4, title: "Arrive in Halong Bay", desc: "Transfer to Halong Bay, check-in, evening at leisure to settle in." },
      { day: 5, title: "Arrive in Da Nang", desc: "Transfer to Da Nang, check-in, evening at leisure to settle in." },
      { day: 6, title: "Da Nang Exploration", desc: "Guided sightseeing and key highlights around Da Nang." },
      { day: 7, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "Halong Bay overnight cruise with meals", "Domestic flight to Da Nang"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "phu-quoc-vinwonders-combo",
    title: "Phu Quoc 4N Super Combo – VinWonders",
    destination: "Phu Quoc",
    country: "Vietnam",
    tripType: "Beach",
    duration: 5,
    price: 35199,
    rating: 4.6,
    reviews: 27,
    badge: "Beach Combo",
    heroImg: "https://picsum.photos/seed/phu-quoc-vinwonders-combo-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/phu-quoc-vinwonders-combo-1/900/700",
      "https://picsum.photos/seed/phu-quoc-vinwonders-combo-2/900/700",
      "https://picsum.photos/seed/phu-quoc-vinwonders-combo-3/900/700",
      "https://picsum.photos/seed/phu-quoc-vinwonders-combo-4/900/700",
      "https://picsum.photos/seed/phu-quoc-vinwonders-combo-5/900/700"
    ],
    summary: "A relaxed Phu Quoc island stay with VinWonders theme park and Grand World entry included.",
    itinerary: [
      { day: 1, title: "Arrive in Phu Quoc", desc: "Transfer to Phu Quoc, check-in, evening at leisure to settle in." },
      { day: 2, title: "Phu Quoc Exploration", desc: "Guided sightseeing and key highlights around Phu Quoc." },
      { day: 3, title: "Phu Quoc Exploration", desc: "Guided sightseeing and key highlights around Phu Quoc." },
      { day: 4, title: "Phu Quoc Exploration", desc: "Guided sightseeing and key highlights around Phu Quoc." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "English-speaking tour escort", "VinWonders theme park entry", "Cable car to Hon Thom Island"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "malaysia-starter-getaway",
    title: "Malaysia Starter Getaway",
    destination: "Kuala Lumpur, Malaysia",
    country: "Malaysia",
    tripType: "City",
    duration: 4,
    price: 19999,
    rating: 4.5,
    reviews: 40,
    badge: "Starting From",
    heroImg: "https://picsum.photos/seed/malaysia-starter-getaway-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/malaysia-starter-getaway-1/900/700",
      "https://picsum.photos/seed/malaysia-starter-getaway-2/900/700",
      "https://picsum.photos/seed/malaysia-starter-getaway-3/900/700",
      "https://picsum.photos/seed/malaysia-starter-getaway-4/900/700",
      "https://picsum.photos/seed/malaysia-starter-getaway-5/900/700"
    ],
    summary: "An easy, entry-level Kuala Lumpur break covering the Petronas Towers, Batu Caves and city markets.",
    itinerary: [
      { day: 1, title: "Arrive in Kuala Lumpur", desc: "Transfer to Kuala Lumpur, check-in, evening at leisure to settle in." },
      { day: 2, title: "Kuala Lumpur Exploration", desc: "Guided sightseeing and key highlights around Kuala Lumpur." },
      { day: 3, title: "Kuala Lumpur Exploration", desc: "Guided sightseeing and key highlights around Kuala Lumpur." },
      { day: 4, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "thailand-starter-getaway",
    title: "Thailand Starter Getaway",
    destination: "Bangkok, Thailand",
    country: "Thailand",
    tripType: "Beach",
    duration: 4,
    price: 24999,
    rating: 4.5,
    reviews: 60,
    badge: "Starting From",
    heroImg: "https://picsum.photos/seed/thailand-starter-getaway-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/thailand-starter-getaway-1/900/700",
      "https://picsum.photos/seed/thailand-starter-getaway-2/900/700",
      "https://picsum.photos/seed/thailand-starter-getaway-3/900/700",
      "https://picsum.photos/seed/thailand-starter-getaway-4/900/700",
      "https://picsum.photos/seed/thailand-starter-getaway-5/900/700"
    ],
    summary: "A short, budget-friendly Bangkok escape with temples, markets and easy day-trip options.",
    itinerary: [
      { day: 1, title: "Arrive in Bangkok", desc: "Transfer to Bangkok, check-in, evening at leisure to settle in." },
      { day: 2, title: "Bangkok Exploration", desc: "Guided sightseeing and key highlights around Bangkok." },
      { day: 3, title: "Bangkok Exploration", desc: "Guided sightseeing and key highlights around Bangkok." },
      { day: 4, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "singapore-starter-getaway",
    title: "Singapore Starter Getaway",
    destination: "Singapore",
    country: "Singapore",
    tripType: "City",
    duration: 5,
    price: 70000,
    rating: 4.6,
    reviews: 45,
    badge: "Starting From",
    heroImg: "https://picsum.photos/seed/singapore-starter-getaway-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/singapore-starter-getaway-1/900/700",
      "https://picsum.photos/seed/singapore-starter-getaway-2/900/700",
      "https://picsum.photos/seed/singapore-starter-getaway-3/900/700",
      "https://picsum.photos/seed/singapore-starter-getaway-4/900/700",
      "https://picsum.photos/seed/singapore-starter-getaway-5/900/700"
    ],
    summary: "A polished Singapore city break covering Marina Bay Sands, Gardens by the Bay and Sentosa.",
    itinerary: [
      { day: 1, title: "Arrive in Singapore", desc: "Transfer to Singapore, check-in, evening at leisure to settle in." },
      { day: 2, title: "Singapore Exploration", desc: "Guided sightseeing and key highlights around Singapore." },
      { day: 3, title: "Singapore Exploration", desc: "Guided sightseeing and key highlights around Singapore." },
      { day: 4, title: "Singapore Exploration", desc: "Guided sightseeing and key highlights around Singapore." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "Gardens by the Bay entry"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "bali-starter-getaway",
    title: "Bali Starter Getaway",
    destination: "Bali, Indonesia",
    country: "Indonesia",
    tripType: "Beach",
    duration: 4,
    price: 35000,
    rating: 4.6,
    reviews: 70,
    badge: "Starting From",
    heroImg: "https://picsum.photos/seed/bali-starter-getaway-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/bali-starter-getaway-1/900/700",
      "https://picsum.photos/seed/bali-starter-getaway-2/900/700",
      "https://picsum.photos/seed/bali-starter-getaway-3/900/700",
      "https://picsum.photos/seed/bali-starter-getaway-4/900/700",
      "https://picsum.photos/seed/bali-starter-getaway-5/900/700"
    ],
    summary: "A relaxed introduction to Bali — beaches, rice terraces and temple visits over a short stay.",
    itinerary: [
      { day: 1, title: "Arrive in Ubud", desc: "Transfer to Ubud, check-in, evening at leisure to settle in." },
      { day: 2, title: "Ubud Exploration", desc: "Guided sightseeing and key highlights around Ubud." },
      { day: 3, title: "Arrive in Seminyak", desc: "Transfer to Seminyak, check-in, evening at leisure to settle in." },
      { day: 4, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "vietnam-starter-getaway",
    title: "Vietnam Starter Getaway",
    destination: "Hanoi, Vietnam",
    country: "Vietnam",
    tripType: "City",
    duration: 5,
    price: 40000,
    rating: 4.5,
    reviews: 38,
    badge: "Starting From",
    heroImg: "https://picsum.photos/seed/vietnam-starter-getaway-hero/1200/800",
    gallery: [
      "https://picsum.photos/seed/vietnam-starter-getaway-1/900/700",
      "https://picsum.photos/seed/vietnam-starter-getaway-2/900/700",
      "https://picsum.photos/seed/vietnam-starter-getaway-3/900/700",
      "https://picsum.photos/seed/vietnam-starter-getaway-4/900/700",
      "https://picsum.photos/seed/vietnam-starter-getaway-5/900/700"
    ],
    summary: "An accessible first taste of Vietnam through Hanoi's old quarter and nearby highlights.",
    itinerary: [
      { day: 1, title: "Arrive in Hanoi", desc: "Transfer to Hanoi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 3, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 4, title: "Hanoi Exploration", desc: "Guided sightseeing and key highlights around Hanoi." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "coorg-misty-hills",
    title: "Coorg Misty Hills Retreat",
    destination: "Coorg, Karnataka",
    country: "India",
    tripType: "Nature",
    duration: 4,
    price: 14999,
    rating: 4.6,
    reviews: 41,
    badge: "Weekend Favourite",
    heroImg: "https://images.unsplash.com/photo-1633437805600-2c58bf56663c?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1633437805600-2c58bf56663c?q=80&w=900",
      "https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?q=80&w=900",
      "https://images.unsplash.com/photo-1586095516671-d085ff58cdd4?q=80&w=900",
      "https://images.unsplash.com/photo-1544015759-237f87d55ef3?q=80&w=900",
      "https://images.unsplash.com/photo-1654815439629-5e93cb7f74a1?q=80&w=900"
    ],
    summary: "Coffee plantations, waterfalls and misty Western Ghats viewpoints on a relaxed Coorg escape.",
    itinerary: [
      { day: 1, title: "Arrive in Madikeri", desc: "Transfer to Madikeri, check-in, evening at leisure to settle in." },
      { day: 2, title: "Madikeri Exploration", desc: "Guided sightseeing and key highlights around Madikeri." },
      { day: 3, title: "Madikeri Exploration", desc: "Guided sightseeing and key highlights around Madikeri." },
      { day: 4, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Coffee plantation walk"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "kerala-munnar-wayanad",
    title: "Kerala Highlands — Munnar & Wayanad",
    destination: "Munnar & Wayanad, Kerala",
    country: "India",
    tripType: "Nature",
    duration: 5,
    price: 19999,
    rating: 4.7,
    reviews: 55,
    badge: "Nature Special",
    heroImg: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=900",
      "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=900",
      "https://images.unsplash.com/photo-1663597675816-9b5d68952f42?q=80&w=900",
      "https://images.unsplash.com/photo-1629813538702-64c925934e19?q=80&w=900",
      "https://images.unsplash.com/photo-1591089101324-2280d9260000?q=80&w=900"
    ],
    summary: "Tea-carpeted hills in Munnar and wildlife-rich forests in Wayanad, away from the usual backwater route.",
    itinerary: [
      { day: 1, title: "Arrive in Munnar", desc: "Transfer to Munnar, check-in, evening at leisure to settle in." },
      { day: 2, title: "Munnar Exploration", desc: "Guided sightseeing and key highlights around Munnar." },
      { day: 3, title: "Arrive in Wayanad", desc: "Transfer to Wayanad, check-in, evening at leisure to settle in." },
      { day: 4, title: "Wayanad Exploration", desc: "Guided sightseeing and key highlights around Wayanad." },
      { day: 5, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Tea museum entry", "Wayanad wildlife sanctuary safari"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "ladakh-leh-valley-getaway",
    title: "Ladakh Leh Valley Getaway",
    destination: "Leh, Ladakh",
    country: "India",
    tripType: "Adventure",
    duration: 6,
    price: 27999,
    rating: 4.8,
    reviews: 47,
    badge: "Bucket List",
    heroImg: "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?q=80&w=900",
      "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?q=80&w=900",
      "https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=900",
      "https://images.unsplash.com/photo-1635255506105-b74adbd94026?q=80&w=900",
      "https://images.unsplash.com/photo-1600356033695-a003690a6351?q=80&w=900"
    ],
    summary: "A gentler Ladakh trip for couples and families — monasteries, Pangong Lake and the Leh valley at a relaxed pace.",
    itinerary: [
      { day: 1, title: "Arrive in Leh", desc: "Transfer to Leh, check-in, evening at leisure to settle in." },
      { day: 2, title: "Leh Exploration", desc: "Guided sightseeing and key highlights around Leh." },
      { day: 3, title: "Leh Exploration", desc: "Guided sightseeing and key highlights around Leh." },
      { day: 4, title: "Arrive in Pangong Lake", desc: "Transfer to Pangong Lake, check-in, evening at leisure to settle in." },
      { day: 5, title: "Pangong Lake Exploration", desc: "Guided sightseeing and key highlights around Pangong Lake." },
      { day: 6, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Inner-line permits"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips", "Personal high-altitude medication"]
  },
  {
    id: "manali-solang-valley",
    title: "Manali Hills & Solang Valley",
    destination: "Manali, Himachal Pradesh",
    country: "India",
    tripType: "Adventure",
    duration: 5,
    price: 16999,
    rating: 4.6,
    reviews: 63,
    badge: "Family Favourite",
    heroImg: "https://images.unsplash.com/photo-1677820915334-d7ceba1e844a?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1677820915334-d7ceba1e844a?q=80&w=900",
      "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?q=80&w=900",
      "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?q=80&w=900",
      "https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=900",
      "https://images.unsplash.com/photo-1600356033695-a003690a6351?q=80&w=900"
    ],
    summary: "Snow-capped views, Solang Valley adventure sports and riverside cafes on a classic Manali getaway.",
    itinerary: [
      { day: 1, title: "Arrive in Manali", desc: "Transfer to Manali, check-in, evening at leisure to settle in." },
      { day: 2, title: "Manali Exploration", desc: "Guided sightseeing and key highlights around Manali." },
      { day: 3, title: "Manali Exploration", desc: "Guided sightseeing and key highlights around Manali." },
      { day: 4, title: "Arrive in Solang Valley", desc: "Transfer to Solang Valley, check-in, evening at leisure to settle in." },
      { day: 5, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Solang Valley adventure activity pass"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "goa-beach-holiday",
    title: "Goa Beach Holiday",
    destination: "North & South Goa",
    country: "India",
    tripType: "Beach",
    duration: 4,
    price: 12999,
    rating: 4.5,
    reviews: 98,
    badge: "Bestseller",
    heroImg: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=900",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=900",
      "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=900",
      "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=900",
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=900"
    ],
    summary: "Beach shacks, old Portuguese churches and sunset cruises across North and South Goa.",
    itinerary: [
      { day: 1, title: "Arrive in North Goa", desc: "Transfer to North Goa, check-in, evening at leisure to settle in." },
      { day: 2, title: "North Goa Exploration", desc: "Guided sightseeing and key highlights around North Goa." },
      { day: 3, title: "Arrive in South Goa", desc: "Transfer to South Goa, check-in, evening at leisure to settle in." },
      { day: 4, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Sunset river cruise"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "jammu-kashmir-paradise",
    title: "Jammu & Kashmir Paradise",
    destination: "Srinagar, Gulmarg & Pahalgam",
    country: "India",
    tripType: "Nature",
    duration: 6,
    price: 28999,
    rating: 4.8,
    reviews: 51,
    badge: "Premium",
    heroImg: "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600438831035-48f5f196d3bf?q=80&w=900",
      "https://images.unsplash.com/photo-1677820915334-d7ceba1e844a?q=80&w=900",
      "https://images.unsplash.com/photo-1619837374214-f5b9eb80876d?q=80&w=900",
      "https://images.unsplash.com/photo-1635255506105-b74adbd94026?q=80&w=900",
      "https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=900"
    ],
    summary: "Shikara rides on Dal Lake, Gulmarg's gondola views and Pahalgam's valleys on Kashmir's classic circuit.",
    itinerary: [
      { day: 1, title: "Arrive in Srinagar", desc: "Transfer to Srinagar, check-in, evening at leisure to settle in." },
      { day: 2, title: "Srinagar Exploration", desc: "Guided sightseeing and key highlights around Srinagar." },
      { day: 3, title: "Arrive in Gulmarg", desc: "Transfer to Gulmarg, check-in, evening at leisure to settle in." },
      { day: 4, title: "Arrive in Pahalgam", desc: "Transfer to Pahalgam, check-in, evening at leisure to settle in." },
      { day: 5, title: "Pahalgam Exploration", desc: "Guided sightseeing and key highlights around Pahalgam." },
      { day: 6, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Shikara ride on Dal Lake", "Gulmarg gondola (Phase 1)"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "rajasthan-royal-circuit",
    title: "Rajasthan Royal Circuit",
    destination: "Jaipur, Udaipur & Jodhpur",
    country: "India",
    tripType: "City",
    duration: 7,
    price: 32999,
    rating: 4.7,
    reviews: 44,
    badge: "Heritage Special",
    heroImg: "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=900",
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=900",
      "https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?q=80&w=900",
      "https://images.unsplash.com/photo-1706961121783-4ae6c933983a?q=80&w=900",
      "https://images.unsplash.com/photo-1602339752474-f77aa7bcaecd?q=80&w=900"
    ],
    summary: "Palaces, forts and lake-city sunsets across Rajasthan's three most iconic royal cities.",
    itinerary: [
      { day: 1, title: "Arrive in Jaipur", desc: "Transfer to Jaipur, check-in, evening at leisure to settle in." },
      { day: 2, title: "Jaipur Exploration", desc: "Guided sightseeing and key highlights around Jaipur." },
      { day: 3, title: "Arrive in Jodhpur", desc: "Transfer to Jodhpur, check-in, evening at leisure to settle in." },
      { day: 4, title: "Jodhpur Exploration", desc: "Guided sightseeing and key highlights around Jodhpur." },
      { day: 5, title: "Arrive in Udaipur", desc: "Transfer to Udaipur, check-in, evening at leisure to settle in." },
      { day: 6, title: "Udaipur Exploration", desc: "Guided sightseeing and key highlights around Udaipur." },
      { day: 7, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Fort & palace entry tickets"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "andaman-island-escape",
    title: "Andaman Island Escape",
    destination: "Port Blair & Havelock Island",
    country: "India",
    tripType: "Beach",
    duration: 6,
    price: 34999,
    rating: 4.8,
    reviews: 39,
    badge: "Bucket List",
    heroImg: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?q=80&w=900",
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=900",
      "https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?q=80&w=900",
      "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=900",
      "https://images.unsplash.com/photo-1580741186862-c5d0bf2aff33?q=80&w=900"
    ],
    summary: "Turquoise waters, coral reefs and the Cellular Jail's history across Port Blair and Havelock Island.",
    itinerary: [
      { day: 1, title: "Arrive in Port Blair", desc: "Transfer to Port Blair, check-in, evening at leisure to settle in." },
      { day: 2, title: "Port Blair Exploration", desc: "Guided sightseeing and key highlights around Port Blair." },
      { day: 3, title: "Arrive in Havelock Island", desc: "Transfer to Havelock Island, check-in, evening at leisure to settle in." },
      { day: 4, title: "Havelock Island Exploration", desc: "Guided sightseeing and key highlights around Havelock Island." },
      { day: 5, title: "Havelock Island Exploration", desc: "Guided sightseeing and key highlights around Havelock Island." },
      { day: 6, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Ferry transfers between islands", "Snorkeling session"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "varanasi-spiritual-sojourn",
    title: "Varanasi Spiritual Sojourn",
    destination: "Varanasi, Uttar Pradesh",
    country: "India",
    tripType: "City",
    duration: 3,
    price: 9999,
    rating: 4.6,
    reviews: 72,
    badge: "Cultural Pick",
    heroImg: "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=900",
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=900",
      "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=900",
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=900",
      "https://images.unsplash.com/photo-1596097825168-c9b773f404ff?q=80&w=900"
    ],
    summary: "Sunrise boat rides on the Ganges and the evening Ganga Aarti at the ghats of Varanasi.",
    itinerary: [
      { day: 1, title: "Arrive in Varanasi", desc: "Transfer to Varanasi, check-in, evening at leisure to settle in." },
      { day: 2, title: "Varanasi Exploration", desc: "Guided sightseeing and key highlights around Varanasi." },
      { day: 3, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Sunrise Ganges boat ride", "Ganga Aarti viewing"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "ayodhya-pilgrimage-trail",
    title: "Ayodhya Pilgrimage Trail",
    destination: "Ayodhya, Uttar Pradesh",
    country: "India",
    tripType: "City",
    duration: 3,
    price: 9499,
    rating: 4.6,
    reviews: 34,
    badge: "Pilgrimage Special",
    heroImg: "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=900",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=900",
      "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=900",
      "https://images.unsplash.com/photo-1596097825168-c9b773f404ff?q=80&w=900",
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=900"
    ],
    summary: "A focused pilgrimage trip to the Ram Mandir and Ayodhya's key temples and riverfront ghats.",
    itinerary: [
      { day: 1, title: "Arrive in Ayodhya", desc: "Transfer to Ayodhya, check-in, evening at leisure to settle in." },
      { day: 2, title: "Ayodhya Exploration", desc: "Guided sightseeing and key highlights around Ayodhya." },
      { day: 3, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Local temple guide"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "bodhgaya-buddhist-circuit",
    title: "Bodhgaya Buddhist Circuit",
    destination: "Bodh Gaya, Bihar",
    country: "India",
    tripType: "City",
    duration: 3,
    price: 10499,
    rating: 4.6,
    reviews: 28,
    badge: "Pilgrimage Special",
    heroImg: "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1706186839147-0d708602587b?q=80&w=900",
      "https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=900",
      "https://images.unsplash.com/photo-1561359313-0639aad49ca6?q=80&w=900",
      "https://images.unsplash.com/photo-1571536802807-30451e3955d8?q=80&w=900",
      "https://images.unsplash.com/photo-1596097825168-c9b773f404ff?q=80&w=900"
    ],
    summary: "The Mahabodhi Temple and Bodh Gaya's monasteries on a short, focused Buddhist heritage trip.",
    itinerary: [
      { day: 1, title: "Arrive in Bodh Gaya", desc: "Transfer to Bodh Gaya, check-in, evening at leisure to settle in." },
      { day: 2, title: "Bodh Gaya Exploration", desc: "Guided sightseeing and key highlights around Bodh Gaya." },
      { day: 3, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Mahabodhi Temple guided visit"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "ooty-nilgiri-retreat",
    title: "Ooty Nilgiri Hill Retreat",
    destination: "Ooty, Tamil Nadu",
    country: "India",
    tripType: "Nature",
    duration: 4,
    price: 15999,
    rating: 4.6,
    reviews: 49,
    badge: "Weekend Favourite",
    heroImg: "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=900",
      "https://images.unsplash.com/photo-1470087167738-6aa485ff65dc?q=80&w=900",
      "https://images.unsplash.com/photo-1637066742971-726bee8d9f56?q=80&w=900",
      "https://images.unsplash.com/photo-1663597675816-9b5d68952f42?q=80&w=900",
      "https://images.unsplash.com/photo-1629813538702-64c925934e19?q=80&w=900"
    ],
    summary: "Tea gardens, botanical gardens and the toy train through the Nilgiri Hills.",
    itinerary: [
      { day: 1, title: "Arrive in Ooty", desc: "Transfer to Ooty, check-in, evening at leisure to settle in." },
      { day: 2, title: "Ooty Exploration", desc: "Guided sightseeing and key highlights around Ooty." },
      { day: 3, title: "Ooty Exploration", desc: "Guided sightseeing and key highlights around Ooty." },
      { day: 4, title: "Departure", desc: "Check-out and transfer for onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Private AC vehicle & driver", "Sightseeing as per itinerary", "Nilgiri toy train ride", "Botanical garden entry"],
    exclusions: ["Flights/train to base city", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "maldives-overwater-escape",
    title: "Maldives Overwater Escape",
    destination: "Male & Resort Island, Maldives",
    country: "Maldives",
    tripType: "Beach",
    duration: 5,
    price: 89999,
    rating: 4.9,
    reviews: 44,
    badge: "Bucket List",
    heroImg: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=900",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=900",
      "https://images.unsplash.com/photo-1595184979141-090792f6b578?q=80&w=900",
      "https://images.unsplash.com/photo-1574226780565-388f10f8121e?q=80&w=900",
      "https://images.unsplash.com/photo-1547528114-f4daa226e256?q=80&w=900"
    ],
    summary: "Overwater villas, house-reef snorkeling and endless lagoon views on the Maldives' classic honeymoon-style escape.",
    itinerary: [
      { day: 1, title: "Arrive in Male", desc: "Transfer to Male, check-in, evening at leisure to settle in." },
      { day: 2, title: "Arrive in Resort Island", desc: "Transfer to Resort Island, check-in, evening at leisure to settle in." },
      { day: 3, title: "Resort Island Exploration", desc: "Guided sightseeing and key highlights around Resort Island." },
      { day: 4, title: "Resort Island Exploration", desc: "Guided sightseeing and key highlights around Resort Island." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "Speedboat/seaplane resort transfer", "House-reef snorkeling session"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips", "Water villa upgrade (on request)"]
  },
  {
    id: "maldives-starter-getaway",
    title: "Maldives Starter Getaway",
    destination: "Male, Maldives",
    country: "Maldives",
    tripType: "Beach",
    duration: 4,
    price: 54999,
    rating: 4.7,
    reviews: 31,
    badge: "Starting From",
    heroImg: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=900",
      "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=900",
      "https://images.unsplash.com/photo-1595184979141-090792f6b578?q=80&w=900",
      "https://images.unsplash.com/photo-1574226780565-388f10f8121e?q=80&w=900",
      "https://images.unsplash.com/photo-1547528114-f4daa226e256?q=80&w=900"
    ],
    summary: "A shorter, more affordable introduction to the Maldives — turquoise lagoons without the full luxury price tag.",
    itinerary: [
      { day: 1, title: "Arrive in Male", desc: "Transfer to Male, check-in, evening at leisure to settle in." },
      { day: 2, title: "Arrive in Resort Island", desc: "Transfer to Resort Island, check-in, evening at leisure to settle in." },
      { day: 3, title: "Resort Island Exploration", desc: "Guided sightseeing and key highlights around Resort Island." },
      { day: 4, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "Speedboat resort transfer"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "sri-lanka-highlights-tour",
    title: "Sri Lanka Highlights Tour",
    destination: "Colombo, Sigiriya, Kandy & Galle",
    country: "Sri Lanka",
    tripType: "Adventure",
    duration: 7,
    price: 47999,
    rating: 4.7,
    reviews: 36,
    badge: "Complete Tour",
    heroImg: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=900",
      "https://images.unsplash.com/photo-1580635849262-3161a7c99dac?q=80&w=900",
      "https://images.unsplash.com/photo-1580889240912-c39ecefd3d95?q=80&w=900",
      "https://images.unsplash.com/photo-1607672996533-98ec2fb71625?q=80&w=900",
      "https://images.unsplash.com/photo-1580889272861-dc2dbea5468d?q=80&w=900"
    ],
    summary: "Sigiriya's ancient rock fortress, Kandy's temples and Galle's colonial fort on a full island circuit.",
    itinerary: [
      { day: 1, title: "Arrive in Colombo", desc: "Transfer to Colombo, check-in, evening at leisure to settle in." },
      { day: 2, title: "Arrive in Sigiriya", desc: "Transfer to Sigiriya, check-in, evening at leisure to settle in." },
      { day: 3, title: "Sigiriya Exploration", desc: "Guided sightseeing and key highlights around Sigiriya." },
      { day: 4, title: "Arrive in Kandy", desc: "Transfer to Kandy, check-in, evening at leisure to settle in." },
      { day: 5, title: "Kandy Exploration", desc: "Guided sightseeing and key highlights around Kandy." },
      { day: 6, title: "Arrive in Galle", desc: "Transfer to Galle, check-in, evening at leisure to settle in." },
      { day: 7, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary", "Sigiriya Rock Fortress entry", "Temple of the Tooth visit"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  },
  {
    id: "sri-lanka-starter-getaway",
    title: "Sri Lanka Starter Getaway",
    destination: "Colombo & Kandy, Sri Lanka",
    country: "Sri Lanka",
    tripType: "City",
    duration: 5,
    price: 39999,
    rating: 4.6,
    reviews: 24,
    badge: "Starting From",
    heroImg: "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1612862862126-865765df2ded?q=80&w=900",
      "https://images.unsplash.com/photo-1580635849262-3161a7c99dac?q=80&w=900",
      "https://images.unsplash.com/photo-1580889240912-c39ecefd3d95?q=80&w=900",
      "https://images.unsplash.com/photo-1607672996533-98ec2fb71625?q=80&w=900",
      "https://images.unsplash.com/photo-1580889272861-dc2dbea5468d?q=80&w=900"
    ],
    summary: "A compact Sri Lanka introduction covering Colombo's city sights and Kandy's hill-country charm.",
    itinerary: [
      { day: 1, title: "Arrive in Colombo", desc: "Transfer to Colombo, check-in, evening at leisure to settle in." },
      { day: 2, title: "Colombo Exploration", desc: "Guided sightseeing and key highlights around Colombo." },
      { day: 3, title: "Arrive in Kandy", desc: "Transfer to Kandy, check-in, evening at leisure to settle in." },
      { day: 4, title: "Kandy Exploration", desc: "Guided sightseeing and key highlights around Kandy." },
      { day: 5, title: "Departure", desc: "Check-out and transfer to the airport for your onward journey." }
    ],
    inclusions: ["Accommodation as per itinerary", "Daily breakfast", "Airport transfers", "Sightseeing as per itinerary"],
    exclusions: ["International flights", "Visa fees", "Travel insurance", "Lunches & dinners (unless noted)", "Personal expenses & tips"]
  }
];

const TRIP_TYPES = [...new Set(PACKAGES.map(p => p.tripType))];
const COUNTRIES = [...new Set(PACKAGES.map(p => p.country))];

function formatINR(n){
  return "₹" + n.toLocaleString("en-IN");
}
