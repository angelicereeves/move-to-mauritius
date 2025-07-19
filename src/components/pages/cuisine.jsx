import React from "react";
import cuisineBg from "../../assets/images/cuisinebg.jpg";
import DhollPuri from "../../assets/images/food/dhollpuri.jpg";
import MineFrite from "../../assets/images/food/minefrite.jpg";
import Rougaille from "../../assets/images/food/rougaille.jpg";
import GateauPiment from "../../assets/images/food/gateaupiment.jpg";
import OctopusCurry from "../../assets/images/food/octopuscurry.jpg";
import Biryani from "../../assets/images/food/biryani.jpg";
import Alouda from "../../assets/images/food/alouda.jpg";
import Napolitaine from "../../assets/images/food/napolitaine.jpg";
import RotiChaud from "../../assets/images/food/rotichaud.jpg";
import PineappleChiliSalt from "../../assets/images/food/pineapplewithchilisalt.jpg";
import Lassi from "../../assets/images/food/lassi.jpg";
import Farata from "../../assets/images/food/farata.jpg";


const dishes = [
  {
    name: "Dholl Puri",
    image: DhollPuri,
    type: "Dish",
    description:
      "A thin flatbread stuffed with ground yellow split peas, often served with curry, pickles, and chutneys.",
    flavors: "Savory, tangy, soft and spiced",
    where: "Best from street vendors in Port Louis Central Market",
    tags: ["Street Food", "Vegetarian"]
  },
  {
    name: "Mine Frite (Fried Noodles)",
    image: MineFrite,
    type: "Dish",
    description:
      "Stir-fried noodles with vegetables, meat or seafood, topped with soy sauce and sometimes a fried egg.",
    flavors: "Salty, smoky, customizable",
    where: "Available island-wide, especially at food trucks",
    tags: ["Local Favorite", "Customizable"]
  },
  {
    name: "Rougaille",
    image: Rougaille,
    type: "Dish",
    description:
      "A Creole tomato-based sauce cooked with garlic, thyme, and chili, served with sausage, fish, or eggs.",
    flavors: "Zesty, herbaceous, lightly spicy",
    where: "Most local homes and traditional restaurants",
    tags: ["Creole", "Comfort Food"]
  },
  {
    name: "Gateau Piment (Chili Cakes)",
    image: GateauPiment,
    type: "Snack",
    description:
      "Crispy fried lentil fritters made with split peas, chilies, and herbs — a popular Mauritian snack.",
    flavors: "Crispy, spicy, savory",
    where: "Street food stalls and tea shops",
    tags: ["Spicy", "Snack", "Vegan"]
  },
  {
    name: "Octopus Curry",
    image: OctopusCurry,
    type: "Dish",
    description:
      "Tender octopus cooked in a coconut-based or tomato curry with island spices.",
    flavors: "Spicy, oceanic, creamy",
    where: "Coastal restaurants, especially in the south",
    tags: ["Seafood", "Island Classic"]
  },
  {
    name: "Biryani",
    image: Biryani,
    type: "Dish",
    description:
      "Mauritian-style layered rice dish with marinated meat or vegetables, saffron, and fried onions.",
    flavors: "Rich, aromatic, filling",
    where: "Indian restaurants and during weddings/festivals",
    tags: ["Festive", "Hearty"]
  },
  {
    name: "Alouda",
    image: Alouda,
    type: "Drink",
    description:
      "A sweet, chilled milk-based drink made with basil seeds, agar jelly, and flavored with vanilla or rose.",
    flavors: "Creamy, floral, refreshing",
    where: "Found at markets and local juice bars",
    tags: ["Drink", "Cooling", "Street Drink"]
  },
  {
    name: "Napolitaine",
    image: Napolitaine,
    type: "Dessert",
    description:
      "A Mauritian cookie filled with jam and covered in a soft pink sugar glaze.",
    flavors: "Sweet, buttery, fruity",
    where: "Bakery shops and tea houses",
    tags: ["Dessert", "Pastry"]
  },
  {
    name: "Roti Chaud",
    image: RotiChaud,
    type: "Dish",
    description:
      "Warm flatbread filled with bean curry, pickled vegetables, and chutney.",
    flavors: "Savory, spicy, filling",
    where: "Street vendors and lunchtime stalls",
    tags: ["Street Food", "Vegetarian"]
  },
  {
    name: "Pineapple with Chili Salt",
    image: PineappleChiliSalt,
    type: "Snack",
    description:
      "Fresh pineapple slices sprinkled with salt, chili, and sometimes tamarind sauce.",
    flavors: "Tangy, spicy, tropical",
    where: "Beach stalls and markets",
    tags: ["Snack", "Fruit"]
  },
  {
    name: "Lassi",
    image: Lassi,
    type: "Drink",
    description:
      "A creamy yogurt-based drink flavored with mango, rose, or cardamom.",
    flavors: "Sweet, creamy, aromatic",
    where: "Indian cafes and home kitchens",
    tags: ["Drink", "Cooling"]
  },
  {
    name: "Farata",
    image: Farata,
    type: "Dish",
    description:
      "Mauritian take on Indian paratha, served with beans, curry, or chutney.",
    flavors: "Flaky, hearty, savory",
    where: "Street vendors, especially for breakfast",
    tags: ["Flatbread", "Street Food"]
  }
];


export default function Cuisine() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat py-12 px-6 text-gray-800 relative"
      style={{ backgroundImage: `url(${cuisineBg})` }}
    >
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-5xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 space-y-10 opacity-95">
        <h1 className="text-4xl font-mono font-bold text-teal-700 text-center">
          Local Cuisine of Mauritius
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {dishes.map((dish, index) => (
            <details
              key={index}
              className="rounded-xl border bg-white hover:shadow-lg transition overflow-hidden"
            >
              <summary className="cursor-pointer px-4 py-3 text-lg font-mono font-bold text-teal-700 bg-teal-50">
                {dish.emoji} {dish.name}
              </summary>
              <div className="px-4 py-3 text-gray-700 font-mono space-y-2">
                <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover rounded-md shadow-md"
                />

                <p><strong>📝 Description:</strong> {dish.description}</p>
                <p><strong>🍽️ Flavors:</strong> {dish.flavors}</p>
                <p><strong>📍 Where to Try:</strong> {dish.where}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {dish.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-teal-100 text-teal-800 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
