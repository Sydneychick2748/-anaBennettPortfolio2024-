import React from "react";
import "./Portfolio.scss"

const PortfolioCard = ({ title, description, imageUrl, link }) => {
  return (
    <div className="portfolio-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
