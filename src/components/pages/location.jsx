import React from "react";
import locationBg from "../../assets/images/locationbg.jpg";
import { Link } from "react-router-dom";

export default function Location() {
  const regions = [
    {
      region: "North (Grand Baie, Pereybère, Trou aux Biches)",
      vibe: "Touristy, modern, lively",
      population: "~120,000+",
      highlights: [
        "White-sand beaches: Pereybère, Mont Choisy",
        "Nightlife & restaurants in Grand Baie",
        "Shopping at La Croisette Mall & Super U",
        "Watersports: sailing, parasailing, paddleboarding",
      ],
      bestFor: "Expats, beachgoers, nightlife lovers",
      downsides: "Can be busy and expensive; traffic in tourist season",
    },
    {
      region: "West (Flic en Flac, Tamarin, Black River)",
      vibe: "Relaxed, sunny, expat-friendly",
      population: "~100,000",
      highlights: [
        "Flic en Flac Beach — long and beautiful",
        "Dolphin watching and surfing in Tamarin",
        "Black River Gorges National Park",
        "Casela Nature Park, hiking, golf",
      ],
      bestFor: "Families, nature lovers, digital nomads",
      downsides: "Slightly remote; traffic during school runs",
    },
    {
      region: "South-West (Le Morne, Chamarel, Baie du Cap)",
      vibe: "Natural, wild, scenic",
      population: "Low — mostly nature reserves",
      highlights: [
        "UNESCO site: Le Morne Brabant",
        "Chamarel Seven Colored Earth & waterfalls",
        "Rhumerie de Chamarel (local rum distillery)",
        "World-class kitesurfing lagoon",
      ],
      bestFor: "Adventurers, hikers, peace seekers",
      downsides: "Few shops or services; need a car",
    },
    {
      region: "Central Plateau (Curepipe, Quatre Bornes, Phoenix)",
      vibe: "Cooler, urban, local Mauritian life",
      population: "300,000+ (densest region)",
      highlights: [
        "Trou aux Cerfs (volcanic crater)",
        "Curepipe colonial architecture",
        "Quatre Bornes street markets",
        "Accessible public transport & schools",
      ],
      bestFor: "Affordable housing, integration into local life",
      downsides: "Cooler & wetter; not coastal",
    },
    {
      region: "South (Mahebourg, Blue Bay, Gris Gris)",
      vibe: "Authentic, historical, coastal",
      population: "~80,000",
      highlights: [
        "Blue Bay Marine Park — snorkeling",
        "Mahebourg Market & Naval Museum",
        "Gris Gris cliffs and Rochester Falls",
      ],
      bestFor: "History lovers, quiet coastal living",
      downsides: "Fewer nightlife or shopping options",
    },
    {
      region: "East Coast (Belle Mare, Flacq, Trou d’Eau Douce)",
      vibe: "Peaceful, scenic, breezy",
      population: "~100,000",
      highlights: [
        "Île aux Cerfs — island day trips",
        "Belle Mare Beach — ideal for sunrise",
        "Traditional villages & sugar estates",
      ],
      bestFor: "Couples, luxury resorts, kitesurfing",
      downsides: "Windy; limited year-round rentals",
    },
    {
      region: "Port Louis (Capital City)",
      vibe: "Urban, busy, cultural",
      population: "~150,000",
      highlights: [
        "Caudan Waterfront, Chinatown, Central Market",
        "Street food, museums, shopping",
        "Fort Adelaide for city views",
      ],
      bestFor: "Day trips, city culture",
      downsides: "Traffic, hot, not ideal for living long-term",
    },
    {
      region: "Rodrigues Island (560 km east of Mauritius)",
      vibe: "Remote, eco-paradise",
      population: "~40,000",
      highlights: [
        "Caves, hiking, deserted beaches",
        "Incredible seafood and low crowds",
        "Off-grid lifestyle",
      ],
      bestFor: "Eco-tourism, digital detox",
      downsides: "Requires a flight, fewer services",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${locationBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 z-0" />

      {/* Main container */}
      <div className="relative z-10 max-w-7xl mx-auto bg-white/90 opacity-95 rounded-2xl shadow-xl p-8 space-y-12">
        {/* Top section: map and intro */}
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Map */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Mauritius Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d502832.5412484626!2d57.21487217611378!3d-20.275945004565655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x217c5313b2209355%3A0x43e3b4421fa7a9cc!2sMauritius!5e0!3m2!1sen!2sus!4v1721432611965!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Intro text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold font-mono text-teal-700">
              Where is Mauritius?
            </h1>
            <p className="text-lg font-mono font-bold leading-relaxed">
              Mauritius is a volcanic island located in the southwest Indian
              Ocean, about 2,000 kilometers (1,200 miles) off the southeastern
              coast of Africa. It lies east of Madagascar and is part of the
              Mascarene Islands, which also include Réunion and Rodrigues.
            </p>
            <p className="text-lg font-mono font-bold leading-relaxed">
              The island is just 65 km long and 45 km wide, but offers a rich
              variety of landscapes — from white sandy beaches and coral reefs
              to rainforest-covered mountains and cascading waterfalls. The
              capital city, Port Louis, is located on the northwest coast.
            </p>
            <p className="text-lg font-mono font-bold leading-relaxed">
              Thanks to its central location between Asia and Africa, Mauritius
              is easily accessible by air and serves as a strategic hub for
              tourism, finance, and remote work.
            </p>

            <Link
              to="/about"
              className="inline-block text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition"
            >
              ← Back to About Mauritius
            </Link>
          </div>
        </div>

        {/* Expandable region sections */}
        <div className="space-y-8">
          {regions.map((area, index) => (
            <details
              key={index}
              className="bg-white border border-emerald-200 rounded-xl shadow-md"
            >
              <summary className="cursor-pointer px-6 py-4 text-2xl font-mono font-bold text-emerald-700 hover:bg-emerald-50 rounded-t-xl">
                {area.region}
              </summary>
              <div className="px-6 py-4 text-medium text-gray-800 font-mono space-y-2">
                <p>
                  <span className="font-bold">Vibe:</span> {area.vibe}
                </p>
                <p>
                  <span className="font-bold">Population:</span>{" "}
                  {area.population}
                </p>
                <p>
                  <span className="font-bold">Highlights:</span>
                </p>
                <ul className="list-disc list-inside pl-4 space-y-1">
                  {area.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <p>
                  <span className="font-bold">Best For:</span> {area.bestFor}
                </p>
                <p>
                  <span className="font-bold">Downsides:</span> {area.downsides}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}



