// import './App.css';

import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import AboutMe from "../Components/AboutMe";
import MyWork from "../Components/MyWork"; // Import other components
import Resume from "../Components/Resume";
import Contact from "../Components/Contact";
import "../app.scss";

const Home = () => {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showMyWork, setShowMyWork] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);
  

  const handleAboutMeClick = () => {
    setShowAboutMe(true);
    
  };

  const handleMyWorkClick = () => {
    setShowMyWork(true);
    
  };

  const handleResumeClick = () => {
    setShowResume(true);
   
  };

  const handleContactClick = () => {
    setShowContact(true);
    
  };

  return (
    <div className="Home-Container">
      <nav className="">
        <div className="line"></div>
        <ul className="ul-home">
          <li>
            <ScrollLink
              to="about-me"
              smooth={true}
              duration={500}
              className="active"
              onClick={handleAboutMeClick}
            >
              About Me
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="my-work"
              smooth={true}
              duration={500}
              className="active"
              onClick={handleMyWorkClick}
            >
            My Work
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="resume"
              smooth={true}
              duration={500}
              className="active"
              onClick={handleResumeClick}
            >
              Resume
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="active"
              onClick={handleContactClick}
            >
             Contact
            </ScrollLink>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>

      {/* Sections to scroll to */}
      {showAboutMe && <AboutMe id="about-me" />}
      {showMyWork && <MyWork id="my-work" />}
      {showResume && <Resume id="resume" />}
      {showContact && <Contact id="contact" />}
      {/* Add more sections as needed */}
    </div>
  );
};

export default Home;
