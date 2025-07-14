import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // Import the new component
import BaseLayout from './components/BaseLayout';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Booking from './components/Booking';
import Contact from './components/Contact';
import RoadworthyInspection from './components/RoadworthyInspection';
import UberCOI from './components/UberCOI';
import RotorsMachining from './components/RotorsMachining';
import './App.css';
import BatteryServices from './components/BatteryServices'; // Add this import
import TruckServices from './components/TruckServices';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop component here */}
      <BaseLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/battery-services" element={<BatteryServices />} />
          <Route path="/services/roadworthy-inspection" element={<RoadworthyInspection />} />
          <Route path="/services/uber-coi" element={<UberCOI />} />
          <Route path="/services/rotors-machining" element={<RotorsMachining />} />
          <Route path="/services/truck-services" element={<TruckServices />} />
          {/* Add more routes as needed */}
        </Routes>
      </BaseLayout>
    </Router>
  );
}

export default App;
