import React from "react";

export default function ChecklistSection({ section, sectionIndex, onToggle }) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold text-teal-700 mb-3">{section.category}</h3>
      <ul className="space-y-3">
        {section.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className={`flex items-center justify-between px-4 py-2 rounded-lg shadow-sm ${
              item.completed
                ? "bg-green-100 line-through text-gray-500"
                : "bg-white"
            }`}
          >
            <span>{item.text}</span>
            <button
              onClick={() => onToggle(sectionIndex, itemIndex)}
              className={`text-sm px-3 py-1 rounded-full transition ${
                item.completed
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
            >
              {item.completed ? "Undo" : "Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
