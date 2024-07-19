import "./Portfolio.scss";

// PortfolioCard.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const PortfolioCard = ({ title, description, imageUrl, link, gifUrl, colorClass }) => {
  return (
    <Card className="portfolio-card">
      {/* <a href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a> */}

      <CardContent>
        <img src={imageUrl} alt={title} className="card-image" />
      </CardContent>
      <Typography variant="h5" component="div" className={`card-title ${colorClass}`}>
        {title}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        className="card-description"
      >
        {description}
      </Typography>
      {/* <CardContent>
       
        <img src={gifUrl} alt={title} className="card-image" />
      </CardContent>  */}
    </Card>
  );
};

export default PortfolioCard;
