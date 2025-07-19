import React from "react";
import { Link } from "react-router-dom";
import mauritiusBg from "../assets/images/mauritius.jpg";

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden m-0 p-0">
      {/* Background Image FULLSCREEN and CENTERED */}
      <img
        src={mauritiusBg}
        alt="Mauritius"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h2 className="text-4xl font-extrabold mb-4 text-yellow-300 drop-shadow-lg">
          Ready to Move to Paradise?
        </h2>
        <p className="text-lg mb-6 max-w-xl text-white/90">
          This app will help you plan every step of your move to Mauritius — from booking flights and preparing pets, to sorting out legal paperwork and housing.
        </p>
        <Link
          to="/checklist"
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full shadow-md transition"
        >
          Start Your Checklist
        </Link>
      </div>
    </div>
  );
}
