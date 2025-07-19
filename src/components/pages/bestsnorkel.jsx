import React from "react";
import snorkelBg from "../../assets/images/bestsnorkelbg.jpg";
import { Link } from "react-router-dom";

export default function BestSnorkel() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${snorkelBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content card */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Best Snorkeling Spots in Mauritius
        </h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius offers world-class snorkeling with crystal-clear waters, vibrant coral reefs, and abundant marine life. Whether you're
          a beginner or seasoned diver, the island has a perfect spot waiting for you.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Blue Bay Marine Park is one of the most famous and protected areas, known for its calm waters and incredible coral diversity.
          You’ll see colorful fish, coral gardens, and maybe even a sea turtle or two.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Other popular snorkeling spots include Flic en Flac, Île aux Cerfs, Trou aux Biches, and Pereybère. Many sites are
          accessible right from the beach, or you can book a guided boat trip for reef or lagoon exploration.
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
