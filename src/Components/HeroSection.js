import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import lifeImage from "../Images/Life-Insurance.png";
import RetireImage from "../Images/Retire.png";
import allImage from "../Images/All.png";

const images = [lifeImage, RetireImage, allImage];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="hero">
      <div className="poster">
        <img src={images[currentIndex]} alt="Poster" className="poster-image fade-in" />
        <div className="poster-content"></div>
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;