import React from "react";
import beachesBg from "../../assets/images/beachesbg.jpg";
import { Link } from "react-router-dom";
import FlicEnFlac from "../../assets/images/beaches/flicenflac.jpg";
import LeMorneImg from "../../assets/images/beaches/lemorne.jpg";
import BelleMareImg from "../../assets/images/beaches/bellemare.jpg";
import MontChoisyImg from "../../assets/images/beaches/montchoisy.jpg";
import PereybereImg from "../../assets/images/beaches/pereybere.jpg";
import TrouAuxBichesImg from "../../assets/images/beaches/trouauxbiches.jpg";

const beaches = [
  {
    name: "Flic en Flac",
    image: FlicEnFlac,
    vibe: "Laid-back & Social",
    location: "West Coast",
    water: "Calm, great for swimming",
    highlights: "Sunsets, beach bars, weekend crowds",
    bestTime: "Late afternoon for golden hour vibes",
    tags: ["Sunsets", "Social", "Popular"]
  },
  {
    name: "Le Morne",
    image: LeMorneImg,
    vibe: "Dramatic & Windy",
    location: "Southwest Tip",
    water: "Wavy, great for kiteboarding",
    highlights: "Epic mountain backdrop, great for photos",
    bestTime: "Early morning before the wind picks up",
    tags: ["Kitesurfing", "Scenic", "Adventurous"]
  },
  {
    name: "Belle Mare",
    image: BelleMareImg,
    vibe: "Tranquil & Peaceful",
    location: "East Coast",
    water: "Clear and calm in the morning",
    highlights: "Long white-sand stretch, quiet atmosphere",
    bestTime: "Sunrise for a peaceful beach walk",
    tags: ["Quiet", "Long Beach", "Sunrise"]
  },
  {
    name: "Mont Choisy",
    image: MontChoisyImg,
    vibe: "Local Favorite",
    location: "Northwest Coast",
    water: "Calm lagoon, swimmable year-round",
    highlights: "Food trucks, casuarina trees, weekend buzz",
    bestTime: "Weekdays for fewer crowds",
    tags: ["Local Vibe", "Shade", "Casual"]
  },
  {
    name: "Pereybere",
    image: PereybereImg,
    vibe: "Small but Lively",
    location: "Near Grand Baie, North Coast",
    water: "Deep and clear, good for swimming",
    highlights: "Compact, clean, close to cafes and bars",
    bestTime: "Late morning to early afternoon",
    tags: ["Swimming", "Accessible", "Food Nearby"]
  },
  {
    name: "Trou aux Biches",
    image: TrouAuxBichesImg,
    vibe: "Family-Friendly & Snorkel-Ready",
    location: "Northwest Coast",
    water: "Calm, crystal clear, shallow reef nearby",
    highlights: "Incredible snorkeling, shaded spots, great for kids",
    bestTime: "Mid-morning for soft light and warm water",
    tags: ["Snorkeling", "Family-Friendly", "Shade"]
  }
];



export default function Beaches() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${beachesBg})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 opacity-95 rounded-2xl shadow-xl p-8 space-y-8">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Best Beaches in Mauritius
        </h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius is famous for its powdery white-sand beaches and turquoise lagoons. Whether you’re looking for calm waters, dramatic scenery, or vibrant social spots, there’s a beach for every vibe.
        </p>

        {/* Beach Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {beaches.map((beach, index) => (
            <details
              key={index}
              className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition overflow-hidden"
            >
              <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
                🏖️ {beach.name}
              </summary>
              <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
                <img
                    src={beach.image}
                    alt={beach.name}
                    className="w-full h-48 object-cover rounded-lg shadow"
                />
                <p><strong>📍 Location:</strong> {beach.location}</p>
                <p><strong>🌊 Water Conditions:</strong> {beach.water}</p>
                <p><strong>🧘 Vibe:</strong> {beach.vibe}</p>
                <p><strong>✨ Highlights:</strong> {beach.highlights}</p>
                <p><strong>🕒 Best Time to Visit:</strong> {beach.bestTime}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Back Button */}
        <Link
          to="/about"
          className="inline-block text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 pt-4"
        >
          ← Back to About Mauritius
        </Link>
      </div>
    </div>
  );
}
