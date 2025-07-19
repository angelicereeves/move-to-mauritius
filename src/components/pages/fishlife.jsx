import React from "react";
import fishLifeBg from "../../assets/images/fishlifebg.jpg";
import { Link } from "react-router-dom";

export default function FishLife() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${fishLifeBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content card */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Fish Life in Mauritius
        </h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius is surrounded by vibrant coral reefs and warm Indian Ocean waters, making it a paradise for marine biodiversity.
          Over 1,000 species of fish can be found in the island’s reefs, lagoons, and deep waters.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Snorkelers and divers frequently encounter parrotfish, butterflyfish, angelfish, clownfish, and wrasses swimming among colorful
          coral gardens. Larger species such as groupers, barracuda, and even reef sharks are also spotted in deeper dive spots.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius is committed to marine conservation, with protected areas like Blue Bay Marine Park that help preserve delicate reef
          ecosystems. Whether you're diving, snorkeling, or just watching from a glass-bottom boat, the underwater life is unforgettable.
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
