import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import "./Portfolio.scss"


const Portfolio = () => {
  const portfolioData = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      imageUrl: "path/to/image1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2",
      description: "Description for Project 1",
      imageUrl: "path/to/image1.jpg",
      link: "https://example.com/project1",
    },
    {
      title: "Project 3",
      description: "Description for Project 1",
      imageUrl: "path/to/image1.jpg",
      link: "https://example.com/project1",
    },
    // Add more portfolio items as needed
  ];

  return (
    <div className="Home-Container">
    
    
      <div className="portfolio-section">
      <h1 className="portfolio-heading ">Check out some of the the projects i worked on </h1>
      </div>


      <div className="portfolio-cards">
  {portfolioData.map((project, index) => {
    const { title, description, imageUrl, link } = project;

    return (
      <PortfolioCard
        key={index}
        title={title}
        description={description}
        imageUrl={imageUrl}
        link={link}
      />
    );
  })}
</div>
   
    </div>
  );
};

export default Portfolio;
