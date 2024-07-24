import "./AboutMe.scss";
import React, { useState, useEffect } from "react";

const AboutMe = () => {
  const [videoPaused, setVideoPaused] = useState(false);

  useEffect(() => {
    // Set a timeout to pause the video for 3 seconds
    const timeoutId = setTimeout(() => {
      setVideoPaused(true);
    }, 10000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div id="about-me">
      <video
        autoPlay
        muted
        loop={!videoPaused} // Set loop to false when paused
        playsInline
        width="50%"
        height="auto"
      >
        <source
          src="/Videos/vecteezy_abstract-woman-face-one-line-drawing-portret-minimalistic_6671265.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div class="bio-section">
  <svg class="bio-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200">
    <path fill="#1b7d74" d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100 L1000,200 L0,200 Z"></path>
  </svg>
  <div class="bio-content">
    <h2>About Me</h2>
    <p>
      I am a passionate developer with a love for creating interactive and dynamic web applications.
      My journey in the tech industry has been fueled by continuous learning and the thrill of solving complex problems.
      Welcome to my portfolio!
    </p>
  </div>
</div>
      
      {/* <div class="typewriter">
        <h1>
          "Coding solutions into web reality, one line at a time. Crafting
          innovative solutions in the digital realm of web development."
        </h1>
      </div> */}
    </div>
  );
};

export default AboutMe;
