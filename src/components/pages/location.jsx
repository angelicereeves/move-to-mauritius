import React from "react";
import locationBg from "../../assets/images/locationbg.jpg";
import { Link } from "react-router-dom";

export default function Location() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${locationBg})` }}
    >
      {/* Optional overlay */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto bg-white/90 opacity-95 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row gap-8 items-center">
        {/* Map Section */}
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

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold font-mono text-teal-700">Where is Mauritius?</h1>
          <p className="text-lg font-mono font-bold leading-relaxed">
            Mauritius is a volcanic island located in the southwest Indian Ocean, about 2,000 kilometers (1,200 miles)
            off the southeastern coast of Africa. It lies east of Madagascar and is part of the Mascarene Islands,
            which also include Réunion and Rodrigues.
          </p>
          <p className="text-lg font-mono font-bold leading-relaxed">
            The island is just 65 km long and 45 km wide, but offers a rich variety of landscapes — from white sandy
            beaches and coral reefs to rainforest-covered mountains and cascading waterfalls. The capital city,
            Port Louis, is located on the northwest coast.
          </p>
          <p className="text-lg font-mono font-bold leading-relaxed">
            Thanks to its central location between Asia and Africa, Mauritius is easily accessible by air and serves as
            a strategic hub for tourism, finance, and remote work.
          </p>
          <Link
            to="/about"
             className="relative z-10 inline-block mb-6 text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition"
            >
            ← Back to About Mauritius
        </Link>
        </div>
      </div>
    </div>
  );
}


