import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation4.json'; // Path to your Lottie JSON file
import './HeroSection4.css';

const HeroSection4 = () => {
  return (
    <header className="hero-section4">
      <div className="hero-content4">
        <div className="text-animation-container">
          <div className="text-content">
            <h1>With Our Calender you can add events and save them based upon their status</h1>
            <p>
              Our platform offers the tools you need to manage your projects efficiently and accurately. 
              Leverage powerful features to streamline your workflow and ensure every detail is in place.
            </p>
          </div>
          <div className="animation-content">
            <Lottie 
              animationData={animationData} 
              className="lottie-animation" 
              style={{ height: '400px', width: '400px' }} 
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection4;
