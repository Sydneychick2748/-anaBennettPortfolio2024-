

import "./Header.scss";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./Pages/Home";
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";

// import AboutMe from "./Components/AboutMe";
// import Contact from "./Components/Contact"
import ModelViewer from "../Components/ModelViewer";

const Header = () => {
    const canvasRef = useRef();
  
    return (
      <div>
        <div className="headline-container">
          <div id="text-behind">
            ANA BENNETT
            <br />
        <span className="span-text-ModelViewer">Portfolio</span>    
          </div>
          <div id="text-behind-blur">
            ANA BENNETT
            <br />
            <span className="span-text-ModelViewer">Portfolio</span>    
          </div>
          <div id="text-front">
            ANA BENNETT
            <br />
            <span className="span-text-ModelViewer">Portfolio</span>    
          </div>
        </div>
  
        <div className="canvas-container">
          <Canvas ref={canvasRef}>
            <ModelViewer />
          </Canvas>
        </div>
  
       
        </div>
  );
};

export default Header;