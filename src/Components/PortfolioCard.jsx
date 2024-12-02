import "./PortfolioCard.scss";

import React, { useEffect } from "react";

const projects = [
  {
    title: "Lighthouse App",
    description: `
      <ul>
        <li>Built and revamped the Lighthouse App's landing page for Annie Cannons.</li>
        <li>Using React to create a responsive and interactive UI, and applied Material-UI for custom-styled components like buttons, text fields, and dialogs that matched the updated branding.</li>
        <li>Integrated AWS Amplify for secure user authentication, managing login and password reset with form validation and error handling.</li>
        <li>Rebuilt the entire CSS from scratch to align with the new design, updating images, logos, and layout for a modern, consistent look.</li>
      </ul>
    `,
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/Lighthouse+_+Data+Initiative.mp4",
  },
  {
    title: "Kubecost Webpage",
    description: `
      <ul>
        <li>Built a cost monitoring dashboard for Kubecost, focused on providing insights into Kubernetes resource utilization and expenses.</li>
        <li>Used React.js for building the interface, Recharts for visualizing cost data with interactive charts.</li>
        <li>Managed and displayed EMR job data efficiently with MUI DataGrid.</li>
        <li>Helped Kubecost users monitor and optimize their Kubernetes spending in real-time with detailed resource usage and cost views.</li>
      </ul>
    `,
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/Vite+%2B+React+(2).mp4",
  },
  {
    title: "Resourceful Provider App",
    description: `
      <ul>
        <li>Built a dynamic program listing page for Annie Cannons using React.js with data fetched from AWS via a RESTful API.</li>
        <li>Tools Used: AWS API Gateway, React.js, JavaScript, CSS/Sass.</li>
        <li>Pulled program-specific data, replacing organization listings with individual program details.</li>
        <li>Dynamically applied organization colors to avatars based on data.</li>
        <li>Filtered service types for each program, displaying only relevant types.</li>
        <li>Displayed organization names with conditional text for virtual programs and confidential addresses.</li>
      </ul>
    `,
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/ResourceFull+Providers+(1).mp4",
  },
  {
    title: "2024 Subaru Crosstrek Landing Page",
    description: `
      <ul>
        <li>Developed a responsive landing page for the 2024 Subaru Crosstrek during a technical interview with DealerOn.</li>
        <li>Completed the project in 2 hours using Bootstrap and jQuery, focusing on responsiveness from 360 pixels and up.</li>
        <li>Implemented a design that fulfilled all specified criteria with provided assets and text.</li>
      </ul>
    `,
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/2024+Subaru+Crosstrek+Landing+Page+(1).mp4",
  },
];


const PortfolioCard = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
           
            <div className="card-info">
              <h3>{project.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: project.description }}
              ></div>

              <video  className = "video"autoPlay muted loop width="100%">
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
