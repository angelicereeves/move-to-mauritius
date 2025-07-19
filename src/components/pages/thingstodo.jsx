import React, { useState } from "react";
import { Link } from "react-router-dom";
import thingsToDoBg from "../../assets/images/thingstodobg.jpg";
import PortLouisMarket from "../../assets/images/thingstodo/portlouiscentralmarket.jpg";
import GangaTalao from "../../assets/images/thingstodo/gangatalao.jpg";
import SwimWithDolphins from "../../assets/images/thingstodo/dolphins.jpg";
import UnderseaWalk from "../../assets/images/thingstodo/underseawalk.jpg";
import LeMorneBrabant from "../../assets/images/thingstodo/hikelemornebrabant.jpg";
import ChamarelWaterfall from "../../assets/images/thingstodo/chamarelfalls.jpg";
import SevenColoredEarth from "../../assets/images/thingstodo/7coloredearth.jpg";
import IleAuxCerfs from "../../assets/images/thingstodo/ileauxcerfs.jpg";
import AapravasiGhat from "../../assets/images/thingstodo/aapravasighat.jpg";
import BlueBayMarinePark from "../../assets/images/thingstodo/bluebaymarinepark.jpg";
import SegaDance from "../../assets/images/thingstodo/segadance.jpg";
import BotanicalGardens from "../../assets/images/thingstodo/ssrbotanicalgarden.jpg";
import LesValleesPark from "../../assets/images/thingstodo/lesvalleespark.jpg";
import EurekaColonialHouse from "../../assets/images/thingstodo/eurekahouse.jpg";
import KaylassonTemple from "../../assets/images/thingstodo/kaylassontemple.jpg";
import GlassBottomBoat from "../../assets/images/thingstodo/glassbottomboat.jpg";
import DeepSeaFishing from "../../assets/images/thingstodo/deepseafishing.jpg";
import Kitesurfing from "../../assets/images/thingstodo/kitesurfing.jpg";

const activities = [
  {
    name: "Explore Port Louis Central Market",
    image: PortLouisMarket,
    category: "island",
    emoji: "🛍️",
    description:
      "Discover local produce, spices, handicrafts, and souvenirs in a colorful and bustling environment. This vibrant market is perfect for trying local street food, meeting Mauritian vendors, and picking up authentic gifts. Best visited early in the morning for the freshest goods."
  },
  {
    name: "Visit Ganga Talao",
    image: GangaTalao,
    category: "cultural",
    emoji: "🛕",
    description:
      "A sacred Hindu lake surrounded by temples and towering statues. Nestled in the crater of an extinct volcano, this spiritual site offers a peaceful ambiance, often accompanied by the sounds of chanting and temple bells."
  },
  {
    name: "Swim with Dolphins in Tamarin Bay",
    image: SwimWithDolphins,
    category: "water",
    emoji: "🐬",
    description:
      "Join an early-morning boat tour to swim alongside wild spinner and bottlenose dolphins. Guides provide respectful wildlife viewing practices for a memorable and responsible encounter."
  },
  {
    name: "Undersea Walk Adventure",
    image: UnderseaWalk,
    category: "water",
    emoji: "🤿",
    description:
      "Don a special helmet and walk on the ocean floor surrounded by coral and tropical fish. No diving experience needed — a truly unique way to explore marine life."
  },
  {
    name: "Hike Le Morne Brabant",
    image: LeMorneBrabant,
    category: "island",
    emoji: "🥾",
    description:
      "Climb this UNESCO World Heritage mountain with dramatic cliffside views and deep historical roots linked to escaped slaves. Guided hikes recommended for safety and insight."
  },
{
  name: "Chamarel Waterfall",
  image: ChamarelWaterfall,
  category: "island",
  emoji: "💦",
  description:
    "Visit the tallest single-drop waterfall in Mauritius, cascading over 100 meters into a lush green gorge. A dramatic and refreshing natural wonder."
},
{
  name: "Seven Colored Earths",
  image: SevenColoredEarth,
  category: "island",
  emoji: "🌈",
  description:
    "Explore the surreal, rainbow-colored sand dunes — a geological phenomenon created by volcanic activity and weathering. Great photo spot and home to giant tortoises nearby."
},

  {
    name: "Ile aux Cerfs Day Trip",
    image: IleAuxCerfs,
    category: "water",
    emoji: "🏝️",
    description:
      "A full-day island escape with options for snorkeling, parasailing, golf, or lounging on powdery beaches. Includes a scenic boat ride through lagoons and optional lunch packages."
  },
  {
    name: "Visit Aapravasi Ghat",
    image: AapravasiGhat,
    category: "cultural",
    emoji: "📜",
    description:
      "A moving museum and heritage site honoring the indentured laborers who arrived from India. Interactive exhibits and archival footage provide historical context."
  },
  {
    name: "Snorkel at Blue Bay Marine Park",
    image: BlueBayMarinePark,
    category: "water",
    emoji: "🐠",
    description:
      "Snorkel through crystal-clear waters filled with vibrant coral and fish species. Guided glass-bottom boat tours are also available from the shore."
  },
  {
    name: "Attend a Sega Dance Performance",
    image: SegaDance,
    category: "cultural",
    emoji: "🪘",
    description:
      "Experience the rhythm of traditional Mauritian music under the stars. Sega performances often feature bonfires, Creole cuisine, and vibrant costumes."
  },
  {
    name: "Botanical Gardens of Pamplemousses",
    image: BotanicalGardens,
    category: "island",
    emoji: "🌿",
    description:
      "Explore one of the oldest botanical gardens in the Southern Hemisphere, home to giant lily pads, medicinal plants, and native wildlife like fruit bats."
  },
  {
    name: "La Vallée des Couleurs Nature Park",
    image: LesValleesPark,
    category: "island",
    emoji: "🪂",
    description:
      "An eco-park filled with adrenaline adventures like ziplining over waterfalls, quad biking trails, and panoramic viewpoints of volcanic landscapes."
  },
  {
    name: "Eureka Colonial House",
    image: EurekaColonialHouse,
    category: "cultural",
    emoji: "🏡",
    description:
      "Tour a well-preserved 19th-century Creole mansion featuring period antiques, lush gardens, and access to nearby river cascades."
  },
  {
    name: "Kaylasson Temple",
    image: KaylassonTemple,
    category: "cultural",
    emoji: "🛕",
    description:
      "A stunning Tamil temple known for its vivid colors and elaborate sculptures. Located in Port Louis, it hosts major Hindu festivals and welcomes visitors."
  },
  {
    name: "Glass-Bottom Boat Tour",
    image: GlassBottomBoat,
    category: "water",
    emoji: "🚤",
    description:
      "Perfect for families, these calm lagoon cruises let you see coral reefs and tropical fish without getting wet — often paired with snorkeling stops."
  },
  {
    name: "Deep Sea Fishing Expedition",
    image: DeepSeaFishing,
    category: "water",
    emoji: "🎣",
    description:
      "Head offshore in pursuit of big game like marlin and yellowfin tuna. Local charters cater to all experience levels and often include BBQ lunch."
  },
  {
    name: "Kitesurfing in Le Morne",
    image: Kitesurfing,
    category: "water",
    emoji: "🪁",
    description:
      "Try one of the world’s premier kitesurfing spots. Shallow lagoons, steady winds, and pro instructors make it ideal for beginners and thrill-seekers alike."
  }



];

export default function ThingsToDo() {
  const [filter, setFilter] = useState("all");

  const filteredActivities = activities.filter(
    (activity) => filter === "all" || activity.category === filter
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${thingsToDoBg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 space-y-10 opacity-95">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Things to Do in Mauritius
        </h1>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            { label: "All", value: "all" },
            { label: "Island", value: "island" },
            { label: "Water", value: "water" },
            { label: "Cultural", value: "cultural" }
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`px-4 py-2 rounded-lg border font-mono text-sm transition ${
                filter === value
                  ? "bg-teal-700 text-white"
                  : "bg-teal-100 text-teal-800 hover:bg-teal-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Activity Cards */}
        <div className="space-y-4">
          {filteredActivities.map((activity, index) => (
            <details
              key={index}
              className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden"
            >
              <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50 flex items-center gap-2">
                <span>{activity.emoji}</span>
                <span>{activity.name}</span>
              </summary>
              <img
              src={activity.image}
              alt={activity.name}
              className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="px-4 py-3 text-gray-700 font-mono">
                <p className="mb-2">{activity.description}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Back link */}
        <Link
          to="/about"
          className="relative z-10 inline-block text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition pt-4"
        >
          ← Back to About Mauritius
        </Link>
      </div>
    </div>
  );
}
