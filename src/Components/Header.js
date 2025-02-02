// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css";
import logoImage from "../Images/Austra.png";

const Header = () => {
  return (
    <header className="header redesigned-header">
      <div className="header-left">
        <img src={logoImage} alt="Austra Finserv Logo" className="header-image" />
      </div>
      <div className="header-right">
        <nav>
          <ul className="nav-list">
          <li className="nav-item">
              <Link to="/whoweare" className="nav-link">
                About Us
              </Link>
              <span className="nav-description">Our Vision,Your Future</span>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <span className="nav-description">Trust,Expertise,Solutions.</span>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <Link to="/insuranceSolutions" className="nav-link">
                Products
              </Link>
              <span className="nav-description">Tailored Financial Products</span>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
              <span className="nav-description">Discover our services</span>
            </li>
            <div className="divider"></div>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <span className="nav-description">Reach out to us</span>
            </li>
          </ul>
        </nav>
        <button className="sign-in-button">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
