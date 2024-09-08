// import React from 'react';
// import Lottie from 'lottie-react';
// import animationData from '../assets/Animation.json'; // Path to your Lottie JSON file
// import './HeroSection.css';

// const HeroSection = () => {
//   return (
//     <header className="hero-section1">
//       <div className="hero-content1">
//         <h1>Take Control of Your Projects with Precision</h1>
//         <Lottie 
//           animationData={animationData} 
//           className="lottie-animation" 
//           style={{ height: '400px', width: '400px' }} 
//         />
//         <button className="cta-button">Start Your Journey</button>
//       </div>
//     </header>
//   );
// };

// export default HeroSection;

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/Animation.json'; // Path to your Lottie JSON file
import './HeroSection.css';

const HeroSection = () => {
  return (
    <header className="hero-section1">
      <div className="hero-content1">
        <div className="text-animation-container">
          <div className="text-content">
            <h1>Take Control of Your Projects with Precision</h1>
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

export default HeroSection;
