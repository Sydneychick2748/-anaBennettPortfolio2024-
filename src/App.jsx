// import './App.css';
import "./app.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
// import AboutMe from "./Components/AboutMe";
// import Contact from "./Components/Contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
