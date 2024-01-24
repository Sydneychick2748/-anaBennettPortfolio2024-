
import "./Portfolio.scss"

// PortfolioCard.jsx
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const PortfolioCard = ({ title, description, imageUrl, link, gifUrl }) => {
  return (
    <Card className="portfolio-card">
      <div className="overlay">
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
        <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
      <CardContent>
        <img src={imageUrl} alt={title} className="card-image" />
      </CardContent>
       {/* <CardContent>
       
        <img src={gifUrl} alt={title} className="card-image" />
      </CardContent>  */}
    </Card>
  );
};

export default PortfolioCard;