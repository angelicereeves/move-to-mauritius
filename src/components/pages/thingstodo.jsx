import React from "react";
import thingsToDoBg from "../../assets/images/thingstodobg.jpg";
import { Link } from "react-router-dom";

export default function ThingsToDo() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${thingsToDoBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content card */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Things to Do in Mauritius
        </h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius is packed with unforgettable activities for all types of travelers. Start with a hike up Le Morne Brabant, a UNESCO
          World Heritage site offering panoramic ocean views and cultural significance.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Adventure lovers can swim with dolphins in Tamarin Bay, zipline through forest canopies, go quad biking in the south, or take a boat
          to Île aux Cerfs for beach and water sports.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          For culture and relaxation, visit the colorful Chamarel Seven Colored Earths, explore the lively Port Louis Central Market,
          or tour local **rum distilleries and tea plantations**. Mauritius has something for every mood, every day.
        </p>
        <Link
            to="/about"
             className="relative z-10 inline-block mb-6 text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition"
            >
            ← Back to About Mauritius
        </Link>
      </div>
    </div>
  );
}
