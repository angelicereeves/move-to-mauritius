import React from "react";
import { Link } from "react-router-dom";
import wildlifeBg from "../../assets/images/wildlifebg.jpg";
import Macaque from "../../assets/images/animals/macaquelongtailed.jpg";
import PhelsumaDayGecko from "../../assets/images/animals/phelsumadaygecko.jpg";
import WildBoar from "../../assets/images/animals/wildboar.jpg";
import RedWhiskeredBulbul from "../../assets/images/animals/redwhiskeredbulbul.jpg";
import RadiatedTortoise from "../../assets/images/animals/radiatedtortoise.jpg";
import MauritiusGreyWhiteEye from "../../assets/images/animals/mauritiusgreywhiteeye.jpg";
import WolfSnake from "../../assets/images/animals/wolfsnake.jpg";
import MauritianFruitBat from "../../assets/images/animals/mauritianfruitbat.jpg";
import GreenBackedHeron from "../../assets/images/animals/greenbackedheron.jpg";
import MauritiusOrnateDayGecko from "../../assets/images/animals/ornatedaygecko.jpg";

const wildlifeSpecies = [
  {
    name: "Mauritius Macaque (Long-tailed Macaque)",
    image: Macaque,
    description:
      "Introduced centuries ago, these adaptable monkeys are now widespread in forests, parks, and sometimes near beaches.",
    funFact:
      "They often wash their food in water before eating!",
    location:
      "Black River Gorges National Park, La Vallée des Couleurs"
  },
  {
    name: "Phelsuma Day Gecko",
    image: PhelsumaDayGecko,
    description:
      "Bright green with red spots, these stunning geckos cling to palm trees and garden walls during the day.",
    funFact:
      "They’re diurnal — unlike most geckos, they’re active in daylight.",
    location:
      "Hotel gardens, forest edges, even indoors"
  },
  {
    name: "Wild Boar",
    image: WildBoar,
    description:
      "These nocturnal animals dwell in thick forests, foraging for roots and fruit.",
    funFact:
      "Despite being shy, they play a key role in forest ecosystems by turning soil and dispersing seeds.",
    location:
      "Black River Gorges, mountain slopes (early morning or dusk)"
  },
  {
    name: "Red-Whiskered Bulbul",
    image: RedWhiskeredBulbul,
    description:
      "A melodious bird with a black crest and red cheeks, often seen perched on fences or fruit trees.",
    funFact:
      "They're known to mimic the calls of other birds.",
    location:
      "Urban gardens, botanical parks, and rural farms"
  },
  {
    name: "Radiated Tortoise (at sanctuaries)",
    image: RadiatedTortoise,
    description:
      "Native to Madagascar, these endangered tortoises are found in protected sanctuaries on Mauritius.",
    funFact:
      "Their stunning star-patterned shells make them one of the most beautiful tortoise species in the world.",
    location:
      "La Vanille Nature Park, François Leguat Reserve"
  },
  {
    name: "Mauritius Grey White-eye (Pic-Pic)",
    image: MauritiusGreyWhiteEye,
    description:
      "A small and social bird with a sweet song, often seen flitting in groups through the trees.",
    funFact:
      "Despite their drab name, they’re curious and surprisingly acrobatic!",
    location:
      "Native forests and reforested areas"
  },
  {
    name: "Wolf Snake",
    image: WolfSnake,
    description:
      "One of the few snake species on the island — non-venomous and harmless to humans.",
    funFact:
      "It often mimics venomous snakes with its sudden strikes, even though it poses no danger.",
    location:
      "Forest floor, under rocks or logs, mostly at night"
  },
  {
    name: "Mauritius Fruit Bat",
    image: MauritianFruitBat,
    description:
      "The island’s only native mammal, these large bats play a vital role in pollination and seed dispersal.",
    funFact:
      "They can fly up to 20 kilometers in a night while foraging.",
    location:
      "High tree canopies, nature reserves like Île aux Aigrettes"
  },
  {
    name: "Green-backed Heron",
    image: GreenBackedHeron,
    description:
      "A small but clever wading bird known for using tools — like dropping insects on water to lure fish.",
    funFact:
      "One of the few bird species known to use bait to catch prey!",
    location:
      "Coastal lagoons, estuaries, and mangrove areas"
  },
  {
    name: "Mauritius Ornate Day Gecko",
    image: MauritiusOrnateDayGecko,
    description:
      "A brilliantly colored and tiny gecko endemic to Mauritius, clinging to tree trunks and thatched roofs.",
    funFact:
      "They lick nectar and pollen, acting as mini-pollinators.",
    location:
      "Native forest zones and restoration sites"
  }
];

export default function Wildlife() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${wildlifeBg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 space-y-10 opacity-95">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Wildlife in Mauritius
        </h1>

{/* Habitats in Mauritius Section */}
<section className="pt-6">
  <h2 className="text-2xl font-mono font-bold underline text-teal-600 text-center mb-6">
    🌿 Habitats in Mauritius
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <details className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🏞️ Native Forests
      </summary>
      <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
        <p>Once covering most of the island, only small patches of original forest remain, mainly in areas like <strong>Black River Gorges National Park</strong> and <strong>Macchabée Forest</strong>.</p>
        <p>These dense, humid forests are rich in native trees and provide refuge to rare birds, reptiles, and insects.</p>
        <p><strong>Key species:</strong> Mauritius Grey White-eye, Day Geckos, Mauritius Kestrel</p>
      </div>
    </details>

    <details className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🌾 Coastal and Wetland Zones
      </summary>
      <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
        <p>Marshlands, estuaries, and mangrove forests fringe many coastal areas and act as nurseries for juvenile fish and feeding grounds for birds.</p>
        <p><strong>Best places to explore:</strong> Rivulet Terre Rouge Estuary Bird Sanctuary, Pointe d’Esny Wetland</p>
        <p><strong>Wildlife to watch:</strong> Herons, egrets, mudskippers, and migratory shorebirds</p>
      </div>
    </details>

    <details className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🏜️ Mountain Ridges and Dry Slopes
      </summary>
      <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
        <p>The island’s volcanic terrain features high-altitude slopes and rugged plateaus with dry-adapted plant life.</p>
        <p>These areas support more elusive or shy wildlife like wild boar and macaques, and offer panoramic views of the island's biodiversity.</p>
      </div>
    </details>

    <details className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🌴 Cultivated and Urban Gardens
      </summary>
      <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
        <p>Though not “natural,” parks and gardens in Mauritius host a surprising amount of biodiversity.</p>
        <p>You’ll often spot colorful birds, geckos, and butterflies in <strong>Pamplemousses Botanical Garden</strong>, hotel gardens, and even residential areas.</p>
      </div>
    </details>
  </div>
</section>


{/* Endemic vs. Introduced Species Section */}
<section className="space-y-10">
  <h2 className="text-2xl underline font-mono font-bold text-teal-700 text-center">
    Endemic vs. Introduced Species
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Endemic Info */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🌿 Endemic Species
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-2">
        <p>
          Endemic species are unique to Mauritius and found nowhere else on Earth. These animals evolved on the island over millennia, making them incredibly special — and often vulnerable.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Examples:</strong> Pink Pigeon, Mauritius Kestrel, Echo Parakeet, Telfair’s Skink</li>
          <li><strong>Why they matter:</strong> Many are critically endangered due to habitat loss and invasive species.</li>
          <li><strong>Conservation:</strong> Active breeding and reforestation programs are working to protect them.</li>
        </ul>
      </div>
    </details>

    {/* Introduced Info */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🐗 Introduced Species
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-2">
        <p>
          Introduced species were brought to Mauritius either intentionally or accidentally, often during colonization. While some have integrated into the ecosystem, others pose threats to native wildlife and habitats.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Examples:</strong> Long-tailed Macaque, Java Deer, Wild Boar, House Gecko</li>
          <li><strong>Impact:</strong> Some introduced species compete with or prey on native animals, altering the island's delicate biodiversity.</li>
          <li><strong>Management:</strong> Efforts include population control and habitat restoration to protect endemic species.</li>
        </ul>
      </div>
    </details>
  </div>

  {/* Species Example Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Endemic Cards */}
    {[
      {
        name: "🕊️ Pink Pigeon - Endemic",
        description: "Once nearly extinct, this rosy-colored pigeon is now making a comeback thanks to conservation efforts. It’s one of the rarest pigeons in the world."
      },
      {
        name: "🦅 Mauritius Kestrel - Endemic",
        description: "A small but fierce raptor, it was once down to only four individuals in the wild. It’s a major success story of species recovery."
      },
      {
        name: "🦜 Echo Parakeet - Endemic",
        description: "The only surviving native parrot of Mauritius, now thriving again thanks to reforestation and captive breeding."
      },
      {
        name: "🦎 Telfair’s Skink - Endemic",
        description: "This shiny reptile is one of the island’s last endemic reptiles. It lives mostly on offshore islets like Round Island."
      }
    ].map((animal, index) => (
      <div key={index} className="border rounded-lg p-4 bg-teal-50 shadow-sm">
        <h3 className="text-xl font-bold text-teal-700 font-mono">{animal.name}</h3>
        <p className="text-sm font-mono text-gray-700">{animal.description}</p>
      </div>
    ))}

    {/* Introduced Cards */}
    {[
      {
        name: "🐒 Long-tailed Macaque - Introduced",
        description: "These playful monkeys are widespread in forests and parks. Originally from Southeast Asia, they’re now one of the island’s most visible animals."
      },
      {
        name: "🦌 Java Deer - Introduced",
        description: "Introduced by the Dutch in the 17th century for hunting, Java Deer now roam wild in forested regions and are farmed for meat."
      },
      {
        name: "🐗 Wild Boar - Introduced",
        description: "These nocturnal foragers root through forest floors and can disrupt native plant growth. They are hunted in certain regions."
      },
      {
        name: "🦎 House Gecko - Introduced",
        description: "Common around buildings, these geckos help control insect populations but compete with native reptiles for habitat."
      }
    ].map((animal, index) => (
      <div key={index} className="border rounded-lg p-4 bg-teal-50 shadow-sm">
        <h3 className="text-xl font-bold text-teal-700 font-mono">{animal.name}</h3>
        <p className="text-sm font-mono text-gray-700">{animal.description}</p>
      </div>
    ))}
  </div>
</section>


{/* Seasonal Highlights Section */}
<section className="space-y-10 pt-12">
  <h2 className="text-2xl underline font-mono font-bold text-teal-700 text-center">
    Seasonal Wildlife Highlights
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Summer */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        ☀️ Summer (November–April)
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Mauritius’ summer months are hot, humid, and rainy — but also the most active for many animals.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Sea turtles come ashore to nest on beaches like Poste Lafayette and Île aux Cerfs.</li>
          <li>Many migratory birds, including waders and herons, arrive and breed in coastal wetlands.</li>
          <li>Butterflies and reptiles are more active due to the warmth and vegetation growth.</li>
        </ul>
      </div>
    </details>

    {/* Winter */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        ❄️ Winter (May–October)
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Cooler, drier months mean clearer skies and great hiking — and wildlife viewing opportunities.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Pink Pigeons and Echo Parakeets become more vocal and visible during this time.</li>
          <li>Best season for spotting whales off the west coast (especially July–September).</li>
          <li>Less humidity makes hiking Le Morne and Black River Gorges ideal for mammal sightings.</li>
        </ul>
      </div>
    </details>

    {/* Rainy Season */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🌧️ Rainy Season (January–March)
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Although prone to tropical showers and occasional cyclones, this season nourishes the ecosystem.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Amphibians like tree frogs are more vocal and easier to spot after rain.</li>
          <li>Fresh vegetation attracts herbivores and pollinators to forest edges and gardens.</li>
          <li>Some sanctuaries close temporarily due to heavy rain and trail flooding — check ahead.</li>
        </ul>
      </div>
    </details>

    {/* Breeding Season */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🐣 Breeding Season Highlights
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Wildlife breeding patterns vary by species but many endemic birds nest between August and December.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Look for Echo Parakeets nesting in artificial nest boxes in Black River Gorges.</li>
          <li>Mauritius Kestrels begin rearing chicks in cliffside nests during spring.</li>
          <li>Volunteers and researchers often participate in monitoring programs during this time.</li>
        </ul>
      </div>
    </details>
  </div>
</section>


{/* Conservation Efforts Section */}
<section className="space-y-10 pt-12">
  <h2 className="text-2xl underline font-mono font-bold text-teal-700 text-center">
    Conservation Efforts in Mauritius
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {/* Reforestation */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🌱 Reforestation Projects
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Native forests in Mauritius have been heavily reduced, but efforts are underway to restore them.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Groups like Ebony Forest and Mauritian Wildlife Foundation are planting native species.</li>
          <li>Restored forests provide vital habitat for endemic birds and reptiles.</li>
          <li>Volunteer opportunities allow visitors to contribute directly.</li>
        </ul>
      </div>
    </details>

    {/* Species Recovery */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🐦 Species Recovery Programs
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Mauritius is home to some of the world’s most successful species recovery stories.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>The Mauritius Kestrel went from just 4 birds in the wild to over 300 today.</li>
          <li>Pink Pigeons and Echo Parakeets are also rebounding due to captive breeding and release programs.</li>
          <li>Ongoing monitoring and nesting site protection is essential for their survival.</li>
        </ul>
      </div>
    </details>

    {/* Invasive Species Control */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        🦝 Invasive Species Management
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Introduced animals like rats, mongooses, and feral cats pose serious threats to native species.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Conservation teams trap and remove invasive predators from breeding sites.</li>
          <li>Island restoration projects aim to create predator-free zones.</li>
          <li>Public awareness helps reduce further introductions of invasive species.</li>
        </ul>
      </div>
    </details>

    {/* Community & Education */}
    <details className="border border-gray-300 rounded-xl bg-white hover:shadow-lg transition">
      <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
        📚 Community & Education
      </summary>
      <div className="p-4 font-mono text-gray-700 space-y-3">
        <p>
          Public education and community involvement are essential to long-term conservation success.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>School programs teach children about Mauritius’ unique biodiversity.</li>
          <li>Local eco-tourism businesses support sustainable practices.</li>
          <li>Volunteer programs welcome travelers to help with habitat maintenance and monitoring.</li>
        </ul>
      </div>
    </details>
  </div>
</section>



{/* Wildlife Species Cards */}
<section className="space-y-6">
  <h2 className="text-2xl underline font-mono font-bold text-teal-700 text-center">
    Featured Wildlife Species
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {wildlifeSpecies.map((animal, index) => (
      <details
        key={index}
        className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden"
      >
        <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
          {animal.name}
        </summary>
        <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
          {animal.image && (
          <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-48 object-cover rounded-lg mb-3"
          />
  )}

          <p><strong>📝 Description:</strong> {animal.description}</p>
          <p><strong>🎉 Fun Fact:</strong> {animal.funFact}</p>
          <p><strong>📍 Where to Spot:</strong> {animal.location}</p>
        </div>
      </details>
    ))}
  </div>
</section>


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

