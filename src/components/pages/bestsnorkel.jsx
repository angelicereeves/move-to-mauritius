import React from "react";
import { Link } from "react-router-dom";
import snorkelBg from "../../assets/images/bestsnorkelbg.jpg";

const snorkelSpots = [
  {
    name: "Blue Bay Marine Park",
    address: "Blue Bay, Southeast Mauritius",
    conditions: "Calm and clear; best during low tide",
    marineLife: "Parrotfish, clownfish, butterflyfish, turtles",
    bestTime: "Morning or midday for best light and visibility",
    visibility: "20–30 meters",
    difficulty: "Beginner",
    tips: "Ideal for beginners; bring reef-safe sunscreen",
    operators: "Blue Bay Divers, Coral Diving Center"
  },
  {
    name: "Flic en Flac",
    address: "Flic en Flac Beach, West Coast",
    conditions: "Generally calm; occasional currents offshore",
    marineLife: "Octopus, moray eels, damselfish, crabs",
    bestTime: "Early morning or late afternoon",
    visibility: "15–25 meters",
    difficulty: "Intermediate",
    tips: "Watch for boats in the area; bring fins",
    operators: "Tamarin Divers, Exploration Sous-Marine"
  },
  {
    name: "Coin de Mire",
    address: "Northern coast near Cap Malheureux",
    conditions: "More open water; mild swells",
    marineLife: "Pelagic fish, wrasse, groupers, turtles",
    bestTime: "April–October",
    visibility: "30+ meters",
    difficulty: "Advanced",
    tips: "Best accessed by boat tour",
    operators: "Ocean Spirit, Dive Spirit Mauritius"
  },
  {
    name: "Pointe aux Piments",
    address: "Northwest Mauritius",
    conditions: "Sheltered lagoon; very calm",
    marineLife: "Clownfish, sea urchins, trumpetfish",
    bestTime: "Morning",
    visibility: "15–20 meters",
    difficulty: "Beginner",
    tips: "Great for kids and families",
    operators: "Pro Dive Mauritius, Easy Dive"
  },
  {
    name: "Île aux Cerfs Lagoon",
    address: "East coast off Trou d’Eau Douce",
    conditions: "Shallow and safe",
    marineLife: "Snappers, tangs, wrasses",
    bestTime: "Mid-morning to early afternoon",
    visibility: "15–25 meters",
    difficulty: "Beginner",
    tips: "Combine with a full-day islet tour",
    operators: "Sea-Life Holidays, Vicky Boat Tours"
  },
  {
    name: "Trou aux Biches",
    address: "Northwest Mauritius",
    conditions: "Mild current with wide lagoon",
    marineLife: "Angelfish, butterflyfish, sea cucumbers",
    bestTime: "Early morning",
    visibility: "15–30 meters",
    difficulty: "Beginner to Intermediate",
    tips: "Avoid weekends for a quieter experience",
    operators: "Dive Dream, DiveSail"
  },
  {
    name: "La Cuvette Beach",
    address: "Grand Baie, North Coast",
    conditions: "Calm with occasional waves",
    marineLife: "Small reef fish, juvenile species",
    bestTime: "Mid-morning",
    visibility: "10–15 meters",
    difficulty: "Beginner",
    tips: "Good for a quick snorkel session near town",
    operators: "Mostly DIY; nearby rentals available"
  },
  {
    name: "Mont Choisy",
    address: "Northwest coast",
    conditions: "Gentle waves, easy entry",
    marineLife: "Boxfish, blennies, parrotfish",
    bestTime: "Early afternoon",
    visibility: "12–20 meters",
    difficulty: "Beginner",
    tips: "Look near the rocky edges for best variety",
    operators: "Ocean Dive Center, Just Diving"
  },
  {
    name: "Roche Zozo",
    address: "South coast near Blue Bay",
    conditions: "Deeper and open; for experienced snorkelers",
    marineLife: "Turtles, lionfish, scorpionfish, eagle rays",
    bestTime: "Calm season (April–October)",
    visibility: "25–35 meters",
    difficulty: "Advanced",
    tips: "Access by boat only; bring a waterproof camera",
    operators: "Blue Safari Submarine, Captain Nemo"
  },
  {
    name: "Tamarin Bay Reefs",
    address: "West coast near Tamarin",
    conditions: "Slight current, but shallow reefs",
    marineLife: "Dolphins offshore, tangs, trumpetfish",
    bestTime: "Early morning",
    visibility: "10–20 meters",
    difficulty: "Intermediate",
    tips: "Can be combined with dolphin-watching tours",
    operators: "Dolswim, Tamarin Ocean Pro"
  }
];

export default function BestSnorkel() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${snorkelBg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 space-y-10 opacity-95">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Best Snorkeling Spots in Mauritius
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {snorkelSpots.map((spot, index) => (
            <details
              key={index}
              className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden"
            >
              <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
                {spot.name}
              </summary>
              <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
                <p><strong>📍 Address:</strong> {spot.address}</p>
                <p><strong>🌊 Water Conditions:</strong> {spot.conditions}</p>
                <p><strong>🐠 Marine Life:</strong> {spot.marineLife}</p>
                <p><strong>🕒 Best Time to Go:</strong> {spot.bestTime}</p>
                <p><strong>🔭 Visibility:</strong> {spot.visibility}</p>
                <p><strong>⚙️ Difficulty:</strong> {spot.difficulty}</p>
                <p><strong>💡 Tips:</strong> {spot.tips}</p>
                <p><strong>🏝️ Local Operators:</strong> {spot.operators}</p>
              </div>
            </details>
          ))}
        </div>

        <Link
          to="/about"
          className="relative z-10 inline-block text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition pt-4"
        >
          ← Back to About Mauritius
        </Link>
      </div>
    </div>
  );
}
