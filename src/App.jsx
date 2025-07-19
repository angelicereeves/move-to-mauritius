import React from "react";
import { Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./components/home";
import ChecklistPage from "./components/ChecklistPage";
import AboutMauritius from "./components/AboutMauritius";
import Navbar from "./components/navbar";

// About Subpages
import Location from "./components/pages/location";
import Climate from "./components/pages/climate";
import Languages from "./components/pages/languages";
import Currency from "./components/pages/currency";
import DigitalNomad from "./components/pages/digitalnomad";
import FishLife from "./components/pages/fishlife";
import ThingsToDo from "./components/pages/thingstodo";
import Snorkeling from "./components/pages/bestsnorkel";
import Wildlife from "./components/pages/wildlife";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Main Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/about" element={<AboutMauritius />} />

              {/* About Detail Pages */}
      <Route path="/about/location" element={<Location />} />
      <Route path="/about/climate" element={<Climate />} />
      <Route path="/about/languages" element={<Languages />} />
      <Route path="/about/currency" element={<Currency />} />
      <Route path="/about/digital-nomad" element={<DigitalNomad />} />
      <Route path="/about/fish-life" element={<FishLife />} />
      <Route path="/about/things-to-do" element={<ThingsToDo />} />
      <Route path="/about/snorkeling" element={<Snorkeling />} />
      <Route path="/about/wildlife" element={<Wildlife />} />

      </Routes>
    </>
  );
}   



