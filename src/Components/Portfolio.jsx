import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import "./Portfolio.scss";

const Portfolio = () => {
  const portfolioData = [
    {
      title: "Tic Tac Toe",
      description: `


      This project demonstrates the use of React for building interactive and dynamic user interfaces, showcasing fundamental concepts such as state management, components, and responsive design
- Game Logic: 
Implements the core logic for playing Tic Tac Toe, including detecting winners and handling player turns.
Player Names: Allows users to enter their names 
- Game History: Keeps track of the game's move history, 

- State Management: 

- Responsive Design: 

- Confetti Animation: 

- Form Component: 

`,
      imageUrl: "images/card-1.jpeg", // Updated path
      link: "https://tictactoe-zeta-amber.vercel.app",
      gifUrl: "/src/assets/ezgif1.gif", // Add a unique gif URL for this project
    },
    {
      title: "Project 2",
      description: "Description for Project 1",
      imageUrl: "images/card-2.jpeg", // Updated path
      link: "https://example.com/project1",
    },
    {
      title: "Project 3",
      description: "Description for Project 1",
      imageUrl: "images/card-6.jpeg", // Updated path
      link: "https://example.com/project1",
    },
    {
      title: "Project 3",
      description: "Description for Project 1",
      imageUrl: "images/card-1.jpeg", // Updated path
      link: "https://example.com/project1",
    },

    
    {
      title: "Project 5",
      description: "Description for Project 1",
      imageUrl: "images/card-6.jpeg", // Updated path
      link: "https://example.com/project1",
    },
    {
      title: "Project 4",
      description: "Description for Project 1",
      imageUrl: "images/card-7.png", // Updated path
      link: "https://example.com/project1",
    },
    
    
    // Add more portfolio items as needed
  ];

  return (
    <div id="portfolio">
    <div className="Home-Container">
      <div className="portfolio-section">
        <h1 className="portfolio-heading ">
          Check out some of the the projects i worked on
        </h1>
      </div>

      <div className="portfolio-cards">
        {portfolioData.map((project, index) => {
          const { title, description, imageUrl, link, gifUrl  } = project;

          return (
            <PortfolioCard
              key={index}
              title={title}
              description={description}
              imageUrl={imageUrl}
              link={link}
              gifUrl={gifUrl} // Pass the gif URL as a prop
        
            />
          );
        })}
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
