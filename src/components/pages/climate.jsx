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
        {/* Monthly Climate Details */}
<div className="space-y-8">
  {[
    {
      month: "January",
      season: "Hot, wet, cyclone-prone",
      temperature: "30°C–34°C (86°F–93°F)",
      humidity: "Very high (70–90%)",
      rainfall: "Frequent tropical showers",
      bestFor: "Lush scenery, fewer tourists",
      avoid: "Boating, hiking (muddy trails)",
    },
    {
      month: "February",
      season: "Hot and stormy",
      temperature: "30°C–34°C",
      humidity: "Very high",
      rainfall: "Very frequent",
      bestFor: "Waterfalls, cultural festivals (Maha Shivaratri)",
      avoid: "Open-sea activities, inland hikes",
    },
    {
      month: "March",
      season: "End of cyclone season",
      temperature: "29°C–32°C",
      humidity: "High",
      rainfall: "Heavy but tapering off",
      bestFor: "Green landscapes, Holi Festival",
      avoid: "Unpredictable weather for boating",
    },
    {
      month: "April",
      season: "Transitional",
      temperature: "26°C–30°C",
      humidity: "Moderate-high",
      rainfall: "Scattered showers",
      bestFor: "Beach + inland combo adventures",
      avoid: "Storms still possible early April",
    },
    {
      month: "May",
      season: "Early winter",
      temperature: "24°C–28°C",
      humidity: "Mild",
      rainfall: "Low",
      bestFor: "All-around exploring, fewer tourists",
      avoid: "None — great shoulder season",
    },
    {
      month: "June",
      season: "Cool & dry",
      temperature: "22°C–26°C",
      humidity: "Low",
      rainfall: "Minimal",
      bestFor: "Hiking, waterfalls, local markets",
      avoid: "Cold sea for swimming",
    },
    {
      month: "July",
      season: "Mauritian winter",
      temperature: "20°C–25°C",
      humidity: "Low",
      rainfall: "Minimal",
      bestFor: "Cultural experiences, trails",
      avoid: "Boating if windy",
    },
    {
      month: "August",
      season: "Windy but clear",
      temperature: "20°C–26°C",
      humidity: "Low",
      rainfall: "Rare showers",
      bestFor: "Island touring, kite surfing",
      avoid: "Open water sports if seas are rough",
    },
    {
      month: "September",
      season: "Warming up",
      temperature: "24°C–28°C",
      humidity: "Moderate",
      rainfall: "Low",
      bestFor: "Snorkeling, boat rides",
      avoid: "None — ideal month",
    },
    {
      month: "October",
      season: "Dry and warm",
      temperature: "26°C–30°C",
      humidity: "Rising",
      rainfall: "Low",
      bestFor: "Beach days, diving, photography",
      avoid: "Peak tourist build-up late month",
    },
    {
      month: "November",
      season: "Start of summer",
      temperature: "28°C–32°C",
      humidity: "High",
      rainfall: "Increasing",
      bestFor: "Beach, Diwali festival",
      avoid: "Humid afternoons",
    },
    {
      month: "December",
      season: "Hot & festive",
      temperature: "29°C–33°C",
      humidity: "High",
      rainfall: "Short tropical bursts",
      bestFor: "Holiday travel, beach time",
      avoid: "Occasional storms",
    },
  ].map((data, idx) => (
    <details
      key={idx}
      className="bg-white border border-teal-200 rounded-xl shadow-md"
    >
      <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
        {data.month}
      </summary>
      <div className="px-6 py-4 text-lg text-gray-800 font-mono">
        <table className="w-full border-collapse border border-gray-300 rounded">
          <tbody>
            <tr className="border-b">
              <td className="py-2 font-mono font-bold">Season</td>
              <td>{data.season}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-mono font-bold">Temperature</td>
              <td>{data.temperature}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-mono font-bold">Humidity</td>
              <td>{data.humidity}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-mono font-bold">Rainfall</td>
              <td>{data.rainfall}</td>
            </tr>
            <tr className="border-b">
              <td className="py-2 font-mono font-bold">Best For</td>
              <td>{data.bestFor}</td>
            </tr>
            <tr>
              <td className="py-2 font-mono font-bold">Avoid</td>
              <td>{data.avoid}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </details>
  ))}
</div>

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
