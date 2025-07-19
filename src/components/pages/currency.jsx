import React from "react";
import currencyBg from "../../assets/images/currencybg.jpg";
import { Link } from "react-router-dom";

export default function Currency() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${currencyBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">Currency in Mauritius</h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          The official currency of Mauritius is the Mauritian Rupee (MUR). Prices across the island are generally more affordable
          than in Western countries, making it a great destination for long-term stays or digital nomad living.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          As of 2025, the exchange rate typically hovers around 44–46 MUR per 1 USD, though this can vary. You can exchange currency
          at banks, hotels, or exchange bureaus, and ATMs are widely available across the island. 1 MUR ≈ 0.02188 USD, so 10,000 MUR ≈ 218.82 USD.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          While most larger establishments accept credit and debit cards, it’s a good idea to keep some cash handy for markets,
          street food vendors, or small rural shops. Tipping isn’t mandatory but is appreciated for good service.
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
