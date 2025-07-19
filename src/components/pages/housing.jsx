import React from "react";
import housingBg from "../../assets/images/housingbg.jpg";

const housingTypes = [
  {
    title: "🏢 Apartments",
    description:
      "Available in both urban and beachside areas, apartments range from simple studios to luxury penthouses. Ideal for solo travelers or couples.",
  },
  {
    title: "🏡 Villas",
    description:
      "Spacious and often luxurious, villas usually come with a garden and sometimes a pool. Great for families or long stays.",
  },
  {
    title: "🏘️ Guesthouses",
    description:
      "A common option for short to mid-term stays. Offers a local experience with optional meals included.",
  },
  {
    title: "🏖️ Beachfront Homes",
    description:
      "Often more expensive, these offer incredible ocean views and direct beach access, perfect for a tropical lifestyle.",
  },
  {
    title: "🌴 Rural Homes",
    description:
      "Located inland or in small villages, these are peaceful and often surrounded by nature. Great for those seeking tranquility.",
  },
];

const livingAreas = [
  {
    name: "Grand Baie",
    info: "Popular with expats and digital nomads. Plenty of restaurants, shopping, and nightlife. Access to beaches and coworking spaces.",
  },
  {
    name: "Tamarin",
    info: "Laid-back surf town on the west coast with a growing digital nomad community. Known for its sunsets and dolphin sightings.",
  },
  {
    name: "Flic en Flac",
    info: "Beautiful beach, lots of rental options, and lively on weekends. Well-connected and close to supermarkets and cafes.",
  },
  {
    name: "Moka",
    info: "Central and modern with quick access to business parks, schools, and hiking trails. Great for professionals and families.",
  },
  {
    name: "Curepipe",
    info: "Cooler climate and less touristy. A good option for long-term living inland with access to markets and transport.",
  },
  {
    name: "Mahebourg",
    info: "Historic southern town with charming streets and lagoon views. Ideal for a quiet lifestyle with local flavor.",
  },
];

export default function Housing() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${housingBg})` }}
    >
      <div className="absolute inset-0 z-0" />
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-10">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Housing in Mauritius
        </h1>

        {/* Housing Types */}
        {/* Housing Types – Collapsible Cards */}
<section className="space-y-4">
  <h2 className="text-2xl font-mono font-bold text-teal-700">🏠 Types of Housing</h2>
  <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
    {housingTypes.map((type, index) => (
      <details
        key={index}
        className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden"
      >
        <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
          {type.title}
        </summary>
        <div className="px-4 py-3 text-gray-700 font-mono">
          <p>{type.description}</p>
        </div>
      </details>
    ))}
  </div>
</section>


        {/* Best Areas */}
        <section className="space-y-4">
          <h2 className="text-2xl font-mono font-bold text-teal-700">📍 Best Areas to Live</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {livingAreas.map((area, index) => (
              <div key={index} className="border rounded-xl p-4 bg-white shadow hover:shadow-lg transition">
                <h3 className="text-xl font-mono font-bold text-teal-700">{area.name}</h3>
                <p className="font-mono text-gray-700 mt-1">{area.info}</p>
              </div>
            ))}
          </div>
        </section>

        {/* General Tips */}
        <section className="space-y-4">
          <h2 className="text-2xl font-mono font-bold text-teal-700">💡 What to Know</h2>
          <ul className="list-disc list-inside space-y-2 text-medium font-mono text-gray-700">
            <li><strong>Rent:</strong> Monthly rent can range from MUR 15,000–100,000 depending on location and style.</li>
            <li><strong>Furnished Options:</strong> Many rentals come furnished and include basic appliances.</li>
            <li><strong>Utilities:</strong> Electricity and internet are usually separate and vary based on use.</li>
            <li><strong>Leases:</strong> Most landlords require a 6-month or 12-month lease with deposit.</li>
            <li><strong>For Nomads:</strong> Short-term rentals and coworking/living spaces are available in tourist hubs.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
