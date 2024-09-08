import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation3.json'; // Path to your Lottie JSON file
import './HeroSection3.css';

const HeroSection3 = () => {
  return (
    <header className="hero-section3">
      <div className="hero-content3">
        <div className="text-animation-container">
          <div className="text-content">
            <h1>An app that is fully Secure from any threats</h1>
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

export default HeroSection3;
