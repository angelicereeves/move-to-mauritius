import React, { useState } from "react";
import currencyBg from "../../assets/images/currencybg.jpg";
import { Link } from "react-router-dom";

export default function Currency() {
  const [mur, setMur] = useState("");
  const [usd, setUsd] = useState("");

  const conversions = [
    { mur: 100, usd: 2.19 },
    { mur: 500, usd: 10.94 },
    { mur: 1000, usd: 21.88 },
    { mur: 2500, usd: 54.71 },
    { mur: 5000, usd: 109.41 },
    { mur: 10000, usd: 218.82 },
    { mur: 20000, usd: 437.64 },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${currencyBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
            Currency in Mauritius
          </h1>

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
        </div>
                {/* Static Currency Converter */}
        <div className="pt-8 space-y-4">
          <h2 className="text-2xl font-mono font-bold text-teal-600 text-center">
            Currency Converter Estimator
          </h2>
          <p className="text-center text-medium font-mono text-gray-600">
            Based on estimated rate: <span className="font-bold font-mono">1 MUR = 0.02188 USD</span>
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* MUR to USD */}
            <div className="space-y-2 w-full md:w-1/2">
              <label className="font-mono font-bold text-gray-700 block">
                Convert MUR to USD
              </label>
              <input
                type="number"
                value={mur}
                onChange={(e) => setMur(e.target.value)}
                placeholder="Enter MUR amount"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
              />
              <p className="text-teal-700 font-bold font-mono">
                ≈ ${mur ? (mur * 0.02188).toFixed(2) : "0.00"} USD
              </p>
            </div>

            {/* USD to MUR */}
            <div className="space-y-2 w-full md:w-1/2">
              <label className="font-mono font-bold text-gray-700 block">
                Convert USD to MUR
              </label>
              <input
                type="number"
                value={usd}
                onChange={(e) => setUsd(e.target.value)}
                placeholder="Enter USD amount"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono"
              />
              <p className="text-teal-700 font-bold font-mono">
                ≈ {usd ? Math.round(usd / 0.02188) : "0"} MUR
              </p>
            </div>
          </div>
        </div>

        {/* Conversion Table */}
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-mono font-bold text-teal-600 mb-4 text-center">Quick Conversion Guide</h2>
          <table className="w-full table-auto border border-gray-300 text-center rounded-xl overflow-hidden">
            <thead className="bg-teal-100 font-mono text-gray-800 text-base">
              <tr>
                <th className="px-4 py-3 border">Mauritian Rupees (MUR)</th>
                <th className="px-4 py-3 border">Equivalent in USD</th>
              </tr>
            </thead>
            <tbody className="font-mono text-medium">
              {conversions.map((row, index) => (
                <tr key={index} className="border-t hover:bg-teal-50">
                  <td className="px-4 py-2 border">{row.mur.toLocaleString()}</td>
                  <td className="px-4 py-2 border">${row.usd.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        {/* Back link */}
        <Link
          to="/about"
          className="relative z-10 inline-block text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition"
        >
          ← Back to About Mauritius
        </Link>
      </div>
    </div>
  );
}


