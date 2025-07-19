import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Checklist", path: "/checklist" },
    { name: "About Mauritius", path: "/about" },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-500 via-sky-400 to-yellow-300 text-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-4xl font-bold tracking-wide drop-shadow-md">
          🌴 Let's Move to Mauritius!
        </h1>
        <div className="space-x-6 text-2xl font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`transition hover:underline ${
                location.pathname === item.path
                  ? "underline underline-offset-4 font-semibold text-white"
                  : "text-white/90"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
