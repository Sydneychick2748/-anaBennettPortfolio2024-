


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
      <div className="content">
        <h1 className="my-name">Ana Bennett</h1>
        <p className="my-paragraph">
          Passionate front-end developer with a knack for creating visually stunning and highly responsive web applications. Proficient in modern technologies like React, HTML, CSS, and JavaScript. Committed to delivering exceptional user experiences through clean and efficient code. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
