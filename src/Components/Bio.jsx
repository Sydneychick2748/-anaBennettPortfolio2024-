

import { FaFileAlt } from 'react-icons/fa'; // Import FontAwesome icon
import './Bio.scss';
import React from 'react';
import headShot from '../assets/images/HeadShot.png'; // Import the image

const Bio = () => {
  return (
    <div className="bio-container">

      
      <div className="bio-image-container">
        {/* <img src={headShot} alt="Ana Bennett" className="bio-image" /> */}
      </div>
      <div className="bio-section">
        <h3 className="italic-heading">"Where creativity meets structure to build seamless web experiences!"</h3>
        <p>
          Hey there, I’m Ana Bennett, a front-end developer who loves blending creativity with maintainable, structured code.
          I thrive on building sleek, responsive web experiences using JavaScript and React. I love pushing myself, never giving up
          when the code breaks, and finding the 'why' behind every bug. I'm driven and motivated to see things through.
          The process is fun for me, and I’m always eager to learn and grow. Let’s connect and create something awesome together!
        </p>
        {/* <a href="path-to-your-resume.pdf" className="resume-button" download>
          <FaFileAlt className="resume-icon" /> Download Resume
        </a> */}

      </div>
      
    </div>
  );
};

export default Bio;

