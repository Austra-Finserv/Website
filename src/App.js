// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SignupForm from './Components/SignupForm';
import MessageComponent from './Components/MessageComponent';
import ContactInfo from './Components/Contactinfo';
import Footer from './Components/Footer';
import Partners from './Components/Partners';
import WhoWeAre from './Components/Whoweare';
import InsuranceSolutions from './Components/InsuranceSolutions';
import Home from './Components/Home'; // Import the Home component
import Services from './Components/Services';
import Contact from './Components/Contact';
import "./index.css";


const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <HeroSection /> {/* Always render HeroSection */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Render Home component by default */}
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/messagecomponent" element={<MessageComponent />} />
            <Route path="/contactinfo" element={<ContactInfo />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/insuranceSolutions" element={<InsuranceSolutions />} />
            <Route path="/whoweare" element={<WhoWeAre />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
