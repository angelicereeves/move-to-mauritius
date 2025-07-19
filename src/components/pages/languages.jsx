import React from "react";
import languagesBg from "../../assets/images/languagesbg.jpg";
import { Link } from "react-router-dom";

export default function Languages() {
  const languages = [
    {
      name: "Mauritian Creole (Kreol Morisien)",
      usedBy: "Everyone – spoken in daily life across all communities",
      context: "Home, markets, casual conversation, music",
      notes:
        "Mauritian Creole is the most widely spoken language in Mauritius. It's a French-based creole with its own spelling and pronunciation. Though it's not used officially, it's the heart of local identity.",
      phrases: [
        { kreol: "Bonzur", english: "Hello" },
        { kreol: "Ki manyer?", english: "How are you?" },
        { kreol: "Mo apel...", english: "My name is..." },
        { kreol: "Mersi", english: "Thank you" },
      ],
    },
    {
      name: "French",
      usedBy: "Most Mauritians – strong in media, education, and culture",
      context: "TV, newspapers, schools, religion, formal settings",
      notes:
        "French is deeply embedded in Mauritian society. Though not the official language, it’s dominant in cultural and intellectual life.",
      phrases: [
        { kreol: "Bonjour", english: "Hello" },
        { kreol: "Comment ça va ?", english: "How are you?" },
        { kreol: "Je m'appelle...", english: "My name is..." },
        { kreol: "Merci beaucoup", english: "Thank you very much" },
      ],
    },
    {
      name: "English",
      usedBy: "Everyone understands it, but it’s mainly official",
      context: "Government, legal system, schools, signage",
      notes:
        "English is the official language of Mauritius, used in parliament, education, and administration. However, it’s not the most spoken in daily life.",
      phrases: [
        { kreol: "Good morning", english: "Good morning" },
        { kreol: "How are you?", english: "How are you?" },
        { kreol: "Thank you", english: "Thank you" },
        { kreol: "Please", english: "Please" },
      ],
    },
    {
      name: "Bhojpuri",
      usedBy: "Primarily older generations of Indian descent",
      context: "Cultural festivals, religious rituals, some homes",
      notes:
        "Bhojpuri is a North Indian language brought by indentured laborers. Though less spoken today, it holds cultural value, especially in music and folklore.",
      phrases: [
        { kreol: "Ka haal ba?", english: "How are you?" },
        { kreol: "Hamra naam...", english: "My name is..." },
        { kreol: "Dhanyawaad", english: "Thank you" },
      ],
    },
    {
      name: "Hindi, Urdu, Tamil, Mandarin, Hakka, etc.",
      usedBy: "Religious and ethnic communities",
      context: "Religious events, cultural TV/radio, temples/mosques",
      notes:
        "These languages are often taught in schools as optional subjects and play an important role in preserving the island’s multicultural identity.",
      phrases: [
        { kreol: "Namaste / Salaam", english: "Hello / Peace" },
        { kreol: "Vanakkam", english: "Welcome (Tamil)" },
        { kreol: "Xie xie", english: "Thank you (Mandarin)" },
      ],
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${languagesBg})` }}
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0" />

      {/* Content wrapper */}
      <div className="relative z-10 max-w-5xl mx-auto opacity-95 bg-white/90 rounded-2xl shadow-xl p-8 space-y-8">
        {/* Intro section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
            Languages in Mauritius
          </h1>

          <p className="text-lg font-mono font-bold leading-relaxed">
            Mauritius is a multilingual society. While English is the official
            language used in parliament and legal documents, French is more
            commonly spoken in media, education, and everyday business.
          </p>

          <p className="text-lg font-mono font-bold leading-relaxed">
            The most widely spoken language, however, is Mauritian Creole — a
            French-based creole that blends African, Indian, European, and Asian
            influences. It’s used in homes, markets, and casual conversation
            island-wide.
          </p>

          <p className="text-lg font-mono font-bold leading-relaxed">
            You’ll also encounter languages like Hindi, Urdu, Tamil, Bhojpuri,
            and Chinese, especially during cultural festivals and within local
            communities. This rich mix reflects the island’s diverse heritage
            and inclusive spirit.
          </p>

          <Link
            to="/about"
            className="relative z-10 inline-block mb-6 text-teal-700 font-mono font-bold hover:underline hover:text-teal-900 transition"
          >
            ← Back to About Mauritius
          </Link>
        </div>

        {/* Expandable language sections */}
        <div className="space-y-6">
          {languages.map((lang, index) => (
            <details
              key={index}
              className="bg-white border border-teal-200 rounded-xl shadow-md"
            >
              <summary className="cursor-pointer px-6 py-4 text-xl font-mono font-bold text-teal-700 hover:bg-teal-50 rounded-t-xl">
                {lang.name}
              </summary>
              <div className="px-6 py-4 text-lg text-gray-800 font-mono space-y-2">
                <p>
                  <span className="font-bold font-mono">Used by:</span> {lang.usedBy}
                </p>
                <p>
                  <span className="font-bold font-mono">Where it's used:</span>{" "}
                  {lang.context}
                </p>
                <p>
                  <span className="font-bold font-mono">Cultural notes:</span> {lang.notes}
                </p>
                <div>
                  <p className="font-bold font-mono">Common Phrases:</p>
                  <ul className="list-disc list-inside pl-4 space-y-1">
                    {lang.phrases.map((phrase, i) => (
                      <li key={i}>
                        <span className="text-teal-700 font-semibold font-mono">
                          {phrase.kreol}
                        </span>{" "}
                        — <span className="font-mono">{phrase.english}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

