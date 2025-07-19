import React from "react";
import languagesBg from "../../assets/images/languagesbg.jpg";
import { Link } from "react-router-dom";

export default function Languages() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${languagesBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">Languages in Mauritius</h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius is a multilingual society. While English is the official language used in parliament and legal documents,
          French is more commonly spoken in media, education, and everyday business.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          The most widely spoken language, however, is Mauritian Creole — a French-based creole that blends African,
          Indian, European, and Asian influences. It’s used in homes, markets, and casual conversation island-wide.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          You’ll also encounter languages like Hindi, Urdu, Tamil, Bhojpuri, and Chinese, especially during cultural festivals
          and within local communities. This rich mix reflects the island’s diverse heritage and inclusive spirit.
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
