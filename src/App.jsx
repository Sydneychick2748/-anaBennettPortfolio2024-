import React from 'react';
import './App.css';
import Footer from './Components/Footer';
 import Bio from './Components/Bio';
import Header from './Components/Header';
import PortfolioCard from './Components/PortfolioCard';



const App = () => {
  
  return (
    <div id="root">
      <Header />
      <Bio/>
      <PortfolioCard/>
      <Footer />
    
     
    </div>
  );
};

export default App;
