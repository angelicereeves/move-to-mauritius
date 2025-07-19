import React, { useState, useEffect } from "react";
import fishlifebg from "../../assets/images/fishlifebg.jpg";
import Parrotfish from "../../assets/images/fish/parrotfish.jpg";
import MauritianScorpionfish from "../../assets/images/fish/mauritianscorpionfish.jpg";
import Clownfish from "../../assets/images/fish/clownfish.jpg";
import ButterflyFish from "../../assets/images/fish/butterflyfish.jpg";
import SaddlebackWrasse from "../../assets/images/fish/saddlebackwrasse.jpg";
import MoorishIdol from "../../assets/images/fish/moorishidol.jpg";
import BlueTang from "../../assets/images/fish/bluetang.jpg";
import RegalAngelfish from "../../assets/images/fish/regalangelfish.jpg";
import Anthias from "../../assets/images/fish/anthias.jpg";
import Damselfish from "../../assets/images/fish/damselfish.jpg";
import MorayEel from "../../assets/images/fish/morayeel.jpg";
import EagleRay from "../../assets/images/fish/eagleray.jpg";
import BlacktipReefShark from "../../assets/images/fish/blacktipreefshark.jpg";
import SeaTurtle from "../../assets/images/fish/seaturtle.jpg";
import Lionfish from "../../assets/images/fish/lionfish.jpg";
import LeafScorpionfish from "../../assets/images/fish/leafscorpionfish.jpg";
import FlyingGurnard from "../../assets/images/fish/flyinggurnard.jpg";
import Octopus from "../../assets/images/fish/octopus.jpg";
import Frogfish from "../../assets/images/fish/frogfish.jpg";
import Flounder from "../../assets/images/fish/flounder.jpg";
import EmperorAngelfish from "../../assets/images/fish/emperorangelfish.jpg";
import { Link } from "react-router-dom";

const fishSpecies = [
    {
      name: "Parrotfish",
      image: Parrotfish,
      fact: "They sleep in a bubble of mucus to avoid predators!",
      description:
        "Colorful and important reef grazers, parrotfish help clean algae from coral. You'll find them near most shallow reefs in Mauritius.",
    },
    {
      name: "Mauritian Scorpionfish",
      image: MauritianScorpionfish,
      fact: "Venomous but rarely aggressive. Excellent camouflage!",
      description:
        "Endemic to the region, these reef ambush predators blend perfectly into the rocks. Look closely during dives!",
    },
    {
      name: "Clownfish",
      image: Clownfish,
      fact: "They can change sex — all start male!",
      description:
        "Found living in anemones, these iconic orange fish are popular among snorkelers and kids. Look for them in calm lagoon areas.",
    },
    {
      name: "Butterflyfish",
      image: ButterflyFish,
      fact: "Often seen in pairs — they mate for life!",
      description:
        "With their bright colors and fluttering movement, butterflyfish are a common reef delight around Mauritius’ coral slopes.",
    },
    {
      name: "Saddleback Wrasse",
      image: SaddlebackWrasse,
      fact: "Feeds on sea urchins and small invertebrates.",
      description:
        "This rare wrasse is more commonly seen by divers than snorkelers. Look for them around drop-offs and deeper reefs.",
    },
    {
  name: "Moorish Idol",
  image: MoorishIdol,
  fact: "Known as a symbol of happiness in many cultures.",
  description: "With bold black, white, and yellow stripes, these graceful fish are often seen gliding solo or in pairs across reefs."
},
{
  name: "Blue Tang",
  image: BlueTang,
  fact: "Also known as 'Dory' from Finding Nemo!",
  description: "Fast-swimming and territorial, these electric-blue reef fish dart in and out of coral crevices."
},
{
  name: "Regal Angelfish",
  image: RegalAngelfish,
  fact: "Their colors fade quickly after death — a true living rainbow.",
  description: "Often shy, these intricate-patterned fish prefer coral-rich lagoons and ledges."
},
{
  name: "Anthias",
  image: Anthias,
  fact: "All anthias are born female — dominant ones turn male!",
  description: "These small, neon-orange fish form clouds above coral heads and are a snorkeler's delight."
},
{
  name: "Damselfish",
  image: Damselfish,
  fact: "They farm algae like underwater gardeners.",
  description: "Aggressive defenders of their territory, these tiny electric-blue fish are common near shallow reef crests."
},
{
  name: "Moray Eel",
  image: MorayEel,
  fact: "They have two sets of jaws — alien-style!",
  description: "Often hiding in crevices, moray eels can grow over 6 feet long. They’re curious but rarely dangerous."
},
{
  name: "Eagle Ray",
  image: EagleRay,
  fact: "They leap out of the water when excited or threatened!",
  description: "Graceful swimmers, eagle rays are often seen gliding over sandy bottoms in groups or pairs."
},
{
  name: "Blacktip Reef Shark",
  image: BlacktipReefShark,
  fact: "One of the most common reef sharks — shy and safe!",
  description: "These sleek predators patrol shallow reef zones and are often spotted during guided dives."
},
{
  name: "Sea Turtle",
  image: SeaTurtle,
  fact: "Some return to the exact beach they were born on to lay eggs.",
  description: "You might spot them grazing on seagrass or napping under coral shelves. Best seen early morning."
},
{
  name: "Lionfish",
  image: Lionfish,
  fact: "Venomous spines! But stunning to look at.",
  description: "An invasive species in many oceans, lionfish are native here. Look for them in still waters under ledges."
},
{
  name: "Leaf Scorpionfish",
  image: LeafScorpionfish,
  fact: "They sway like a leaf to fool predators.",
  description: "A master of disguise — divers often miss them completely! Their shape blends with algae or coral."
},
{
  name: "Flying Gurnard",
  image: FlyingGurnard,
  fact: "They spread wing-like fins to appear larger when startled.",
  description: "Found near sandy bottoms, they scurry with their pectoral fins and occasionally take small 'hops'."
},
{
  name: "Octopus",
  image: Octopus,
  fact: "They can change both color and texture in milliseconds.",
  description: "Octopuses are brilliant escape artists. Look for them in rocky areas near dusk or dawn."
},
{
  name: "Frogfish",
  image: Frogfish,
  fact: "They 'walk' across the ocean floor with their fins.",
  description: "Frogfish use camouflage and a lure to ambush prey — often blending perfectly into coral sponges."
},
{
  name: "Flounder",
  image: Flounder,
  fact: "Both eyes are on one side of their head!",
  description: "They bury themselves in sand and remain still, relying on excellent camouflage to avoid detection."
},
{
  name: "Emperor Angelfish",
  image: EmperorAngelfish,
  fact: "Juveniles look completely different from adults — they have swirling blue and white patterns!",
  description: "With bold yellow and blue stripes, this regal reef dweller is both stunning and shy. They prefer coral caves and crevices for hiding and are often spotted solo or in pairs."
}

];

const funFacts = [
  "Octopuses have three hearts and blue blood!",
  "Moray eels have a second set of jaws hidden in their throat.",
  "Sea turtles can hold their breath for up to 7 hours while sleeping.",
  "Clownfish are all born male and can switch sex to become dominant females.",
  "Parrotfish poop sand — they help make the beach!",
  "Lionfish can consume prey up to half their body size in one gulp.",
  "Some reef fish clean parasites off sea turtles and sharks.",
  "Flounders start life with one eye on each side, then one migrates!"
];

export default function FishLife() {
  const [currentFact, setCurrentFact] = useState(0);
  const [shuffledFish, setShuffledFish] = useState([]);
  const [currentFishIndex, setCurrentFishIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFact((prev) => (prev + 1) % funFacts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const shuffled = [...fishSpecies].sort(() => 0.5 - Math.random());
    setShuffledFish(shuffled);
  }, []);

  useEffect(() => {
    if (shuffledFish.length > 0) {
      const correctFish = shuffledFish[currentFishIndex];
      const wrongOptions = fishSpecies
        .filter((f) => f.name !== correctFish.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      const allOptions = [...wrongOptions, correctFish].sort(() => 0.5 - Math.random());
      setOptions(allOptions);
    }
  }, [shuffledFish, currentFishIndex]);

 const handleFishAnswer = (option) => {
  const correct = shuffledFish[currentFishIndex].name;

  if (option === correct) {
    setSelectedAnswer(option);
    setFeedback("✅ Correct!");

    setTimeout(() => {
      setSelectedAnswer(null);
      setFeedback("");

      if (currentFishIndex + 1 < shuffledFish.length) {
        setCurrentFishIndex((prev) => prev + 1);
      } else {
        setFeedback("🎉 You’ve identified all the fish!");
      }
    }, 2000);
  } else {
    setFeedback("❌ Try Again");
    // Do not disable anything
  }
};


  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${fishlifebg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 space-y-12 opacity-95">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Marine Life in Mauritius
        </h1>

        {/* Conservation Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-mono font-bold text-teal-600">Reef Conservation</h2>
          <p className="text-lg font-mono font-bold leading-relaxed">
            Coral reefs in Mauritius are vital ecosystems facing threats from climate change, bleaching, and pollution.
            Efforts like coral planting, reef cleanups, and marine protected zones help protect biodiversity.
          </p>
        </section>

        {/* Seasonal Marine Life Patterns */}
        <section className="space-y-4">
          <h2 className="text-2xl font-mono font-bold text-teal-600">Seasonal Marine Life</h2>
          <p className="text-lg font-mono font-bold leading-relaxed">
            Summer (Nov–Apr) brings larger pelagic species and more turtles. Winter (May–Oct) is great for visibility and reef sightings.
            Whale watching is best from July–October.
          </p>
        </section>

        {/* Snorkeling & Diving Table */}
        <section className="space-y-4">
          <h2 className="text-2xl font-mono font-bold text-teal-600">Best Snorkel & Dive Spots</h2>
          <table className="w-full table-auto border border-gray-300 text-center rounded-xl overflow-hidden">
            <thead className="bg-teal-100 font-mono text-gray-800 text-medium">
              <tr>
                <th className="px-4 py-3 border">Location</th>
                <th className="px-4 py-3 border">Region</th>
                <th className="px-4 py-3 border">Highlights</th>
              </tr>
            </thead>
            <tbody className="font-mono text-medium">
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">Blue Bay Marine Park</td>
                <td className="px-4 py-2 border">Southeast</td>
                <td className="px-4 py-2 border">Coral gardens, turtles</td>
              </tr>
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">Flic en Flac</td>
                <td className="px-4 py-2 border">West</td>
                <td className="px-4 py-2 border">Shallow reef, octopus</td>
              </tr>
              <tr className="border-t hover:bg-teal-50">
                <td className="px-4 py-2 border">Coin de Mire</td>
                <td className="px-4 py-2 border">North</td>
                <td className="px-4 py-2 border">Drop-offs, pelagics</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Fun Fact Rotator */}
        <section className="text-center pt-10">
          <h2 className="text-3xl font-mono font-bold text-teal-600">🌟 Fun Marine Facts!</h2>
          <p className="text-2xl font-mono font-bold text-teal-800 mt-2 animate-pulse">
            {funFacts[currentFact]}
          </p>
        </section>

        {/* Fish Species Grid */}
        <section className="pt-12">
          <h2 className="text-2xl font-mono font-bold text-teal-600 text-center mb-6">Fish You Might See</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fishSpecies.map((fish, index) => (
              <details
                key={index}
                className="border border-gray-300 rounded-xl overflow-hidden bg-white hover:shadow-lg transition"
              >
                <summary className="cursor-pointer px-4 py-3 text-medium font-mono font-bold text-teal-700 bg-teal-50">
                  {fish.name}
                </summary>
                <img
                  src={fish.image}
                  alt={fish.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-medium text-gray-700 font-mono">
                  <p><strong><u>Fun Fact:</u></strong> {fish.fact}</p>
                  <p className="mt-2">{fish.description}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
         {/* ID the Fish Quiz */}
        <section className="pt-10 text-center">
          <h2 className="text-3xl font-mono font-bold text-teal-600 mb-4">ID the Fish Quiz</h2>

          {shuffledFish.length > 0 && (
            <>
              <img
                src={shuffledFish[currentFishIndex].image}
                alt="Fish to identify"
                className="w-full max-w-sm mx-auto rounded-lg shadow-md"
              />
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 justify-center">
                {options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleFishAnswer(option.name)}
                    disabled={selectedAnswer && selectedAnswer !== option.name}
                    className={`px-4 py-2 font-mono rounded-lg border ${
                      selectedAnswer === option.name
                        ? option.name === shuffledFish[currentFishIndex].name
                          ? "bg-green-100 border-green-500 text-green-700"
                          : "bg-red-100 border-red-500 text-red-700"
                        : "bg-teal-100 hover:bg-teal-200 text-teal-800"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
              {feedback && (
                <p className="mt-4 font-mono font-bold text-xl text-teal-700">{feedback}</p>
              )}
            </>
          )}
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