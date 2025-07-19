import React from "react";
import snorkelingBg from "../assets/images/snorkel.jpg";

const cardData = [
  {
    title: "🌴 Location",
    text: "Mauritius is located in the Indian Ocean, east of Madagascar. It's part of the Mascarene Islands and offers stunning coastal beauty.",
  },
  {
    title: "🌞 Climate",
    text: "Mauritius has a tropical climate with warm summers (Nov–Apr) and mild winters (May–Oct). Perfect beach weather year-round!",
  },
  {
    title: "🗣️ Languages",
    text: "The official language is English, but French and Mauritian Creole are widely spoken, reflecting its diverse culture.",
  },
  {
    title: "💵 Currency",
    text: "The Mauritian Rupee (MUR) is the local currency. The cost of living is lower than most Western countries.",
  },
  {
    title: "📱 Digital Nomad Friendly",
    text: "Great internet, coworking spaces, and a special Premium Visa make Mauritius ideal for remote work.",
  },
  {
    title: "🐠 Fish Life",
    text: "The coral reefs are home to parrotfish, butterflyfish, angelfish, clownfish, and even reef sharks — a diver’s dream.",
  },
  {
    title: "🧗‍♀️ Things to Do",
    text: "Hike Le Morne, visit Chamarel waterfalls, swim with dolphins, go ziplining, take rum tours, and explore local markets.",
  },
  {
    title: "🤿 Best Snorkeling Spots",
    text: "Blue Bay Marine Park, Flic en Flac, and Ile aux Cerfs are famous for clear water, coral reefs, and marine diversity.",
  },
  {
    title: "🦜 Island Wildlife",
    text: "Spot giant tortoises, flying foxes (fruit bats), colorful geckos, and over 100 bird species like the pink pigeon.",
  },
];

export default function AboutMauritius() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={snorkelingBg}
        alt="Snorkeling in Mauritius"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-sky-100 to-teal-100 opacity-90 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 px-4 py-12">
        <h2 className="text-4xl font-extrabold text-yellow-300 text-center mb-12 drop-shadow-lg">
          Discover Mauritius
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg transition hover:scale-105 hover:shadow-2xl"
            >
              <h3 className="text-xl font-bold text-teal-700 mb-2">{card.title}</h3>
              <p className="text-gray-800 text-sm">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
