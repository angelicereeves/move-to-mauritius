import React, { useEffect, useState } from "react";
import { checklist as defaultChecklist, checklistVersion } from "../components/ChecklistData";
import ChecklistSection from "../components/ChecklistSection";
import fishBg from "../assets/images/fish.jpg";

export default function ChecklistPage() {
  const [data, setData] = useState(() => {
    const storedVersion = localStorage.getItem("mauritiusChecklistVersion");
    const storedData = localStorage.getItem("mauritiusChecklist");

    if (storedData && storedVersion === checklistVersion) {
      return JSON.parse(storedData);
    }

    // Save new data and version
    localStorage.setItem("mauritiusChecklistVersion", checklistVersion);
    localStorage.setItem("mauritiusChecklist", JSON.stringify(defaultChecklist));
    return defaultChecklist;
  });

  useEffect(() => {
    localStorage.setItem("mauritiusChecklist", JSON.stringify(data));
  }, [data]);

  const toggleItem = (sectionIndex, itemIndex) => {
    const updated = [...data];
    updated[sectionIndex].items[itemIndex].completed =
      !updated[sectionIndex].items[itemIndex].completed;
    setData(updated);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={fishBg}
        alt="Colorful fish background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-100 via-sky-100 to-yellow-100 opacity-90 mix-blend-multiply" />

      {/* Content */}
      <div className="relative z-10 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-lg p-8 shadow-lg">
          <h2 className="text-3xl font-extrabold text-teal-700 mb-8 text-center">
            Move to Mauritius: Checklist
          </h2>

          {data.map((section, index) => (
            <ChecklistSection
              key={index}
              section={section}
              sectionIndex={index}
              onToggle={toggleItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
