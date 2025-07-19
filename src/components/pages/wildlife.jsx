import React from "react";
import wildlifeBg from "../../assets/images/wildlifebg.jpg";
import { Link } from "react-router-dom";

export default function Wildlife() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${wildlifeBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content card */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-6">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Wildlife in Mauritius
        </h1>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Mauritius is home to a unique mix of native, endemic, and introduced species. While much of its original wildlife was lost to
          colonization, the island remains rich in biodiversity, both on land and in the sea.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          On land, you’ll find giant Aldabra tortoises, fruit bats (flying foxes), and colorful reptiles like day geckos and skinks.
          The island is also a birdwatcher’s paradise, with rare and recovering species like the pink pigeon, Mauritius kestrel, and
          echo parakeet.
        </p>

        <p className="text-lg font-mono font-bold leading-relaxed">
          Conservation parks like Île aux Aigrettes, La Vanille Nature Park, and Casela Nature Parks offer opportunities to see and
          support local wildlife. Whether you're hiking, boating, or exploring nature reserves, Mauritius offers incredible encounters
          with animals you won't find anywhere else.
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
