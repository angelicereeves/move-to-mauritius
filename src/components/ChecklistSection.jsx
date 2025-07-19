import React from "react";

export default function ChecklistSection({ section, sectionIndex, onToggle }) {
  return (
    <div className="mb-8">
      <h3 className="text-3xl font-mono font-bold text-blue-800 mb-3">{section.category}</h3>
      <ul className="space-y-3">
        {section.items.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className={`font-mono font-bold flex items-center justify-between px-4 py-2 rounded-lg shadow-sm hover:bg-yellow-200 ${
              item.completed
                ? "bg-green-200 line-through text-gray-400"
                : "bg-yellow-100"
            }`}
          >
            <span>{item.text}</span>
            <button
              onClick={() => onToggle(sectionIndex, itemIndex)}
              className={`text-sm font-mono px-3 py-1 rounded-full transition ${
                item.completed
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : "bg-blue-800 text-white hover:bg-blue-400"
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
