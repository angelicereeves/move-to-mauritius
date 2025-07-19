import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import ChecklistPage from "./components/ChecklistPage";
import AboutMauritius from "./components/AboutMauritius";

export default function App() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/about" element={<AboutMauritius />} />
      </Routes>
    </div>
  );
}
