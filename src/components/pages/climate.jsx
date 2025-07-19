import React from "react";
import climateBg from "../../assets/images/climatebg.jpg";
import { Link } from "react-router-dom";


export default function Climate() {
  return (
    
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${climateBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">Climate in Mauritius</h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius has a delightful tropical climate with two main seasons: a warm, humid summer from November to April and
          a cooler, dry winter from May to October. Temperatures along the coast range from 25°C to 33°C (77°F to 91°F) in summer,
          and from 17°C to 25°C (63°F to 77°F) in winter.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          The central plateau is slightly cooler and can receive more rainfall, especially during the summer months. Cyclones
          are rare but can occur between January and March. Thankfully, the island is well-prepared for weather events, and storms
          are usually tracked in advance.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          The best months for beachgoers are typically September through December, when skies are clear, humidity is lower,
          and the ocean is warm and inviting. Snorkeling, diving, and hiking are enjoyable year-round thanks to the island's
          moderate weather and consistent sunshine.
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
