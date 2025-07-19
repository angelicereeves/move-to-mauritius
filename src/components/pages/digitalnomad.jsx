import React from "react";
import digitalNomadBg from "../../assets/images/digitalnomadbg.jpg";
import { Link } from "react-router-dom";

export default function DigitalNomad() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${digitalNomadBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content card */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Digital Nomad Friendly
        </h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius launched its Premium Visa program in 2020, allowing remote workers and entrepreneurs to live on the island for
          up to 12 months (renewable), with no income tax on earnings from abroad.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          To qualify, you need proof of employment or company ownership, health insurance coverage, and a minimum income of around
          US$1,500 per month. This flexible visa allows you to bring family members and enjoy the island lifestyle while working remotely.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius offers reliable high-speed internet, co-working spaces in Port Louis and coastal towns, and an overall affordable cost
          of living compared to Europe or North America. It’s an ideal destination for digital nomads seeking sun, culture, and community.
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
