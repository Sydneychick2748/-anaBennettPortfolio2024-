import "./PortfolioCard.scss";

import React, { useEffect } from "react";

const projects = [
  {
    title: "Lighthouse App",
    description: `
       Built and revamped the Lighthouse App's landing page for Annie Cannons.
      Using React to create a responsive and interactive UI, and applied Material-UI for custom-styled components like buttons, 
      text fields, and dialogs that matched the updated branding. 
      Integrated AWS Amplify for secure user authentication, managing login and password reset with form validation and error handling.
      Rebuilt the entire CSS from scratch to align with the new design, updating images, logos, and layout for a modern, consistent look.
    `,
    // videoUrl: "https://www.youtube.com/embed/PERoi2a8dyw"

    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/Lighthouse+app.mp4",
    // videoUrl: "https://youtu.be/PERoi2a8dyw"
    // https://youtu.be/PERoi2a8dyw
  },
  {
    title: "Kubecost Webpage",
    description: `
      Built a cost monitoring dashboard for Kubecost, focused on providing insights into Kubernetes resource utilization and expenses. 
      I used React.js for building the interface, Recharts for visualizing cost data with interactive charts, 
      and MUI DataGrid for managing and displaying EMR job data efficiently.
      The project helps Kubecost users monitor and optimize their Kubernetes spending in real-time, 
      offering detailed views of resource usage and related costs.
    `,
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/Kubecost.mp4",
    // videoUrl: "https://youtu.be/Ls0V2jgmMyU"
  },
  //https://youtu.be/Ls0V2jgmMyU

  {
    title: "Resourceful Provider App",
    description: `
      Built a dynamic program listing page for Annie Cannons using React.js with data fetched from AWS via a RESTful API. 
      Tools Used: AWS API Gateway, React.js, JavaScript, CSS/Sass.
      Key Tasks:
      - Pulled program-specific data, replacing organization listings with individual program details.
      - Dynamically applied organization colors to avatars based on data.
      - Filtered service types for each program, displaying only relevant types.
      - Displayed organization names with conditional text for virtual programs and confidential addresses.
      This project showcases my ability to integrate cloud-based data with React and handle dynamic, conditional rendering.
    `,
    // videoUrl: "https://www.youtube.com/embed/v7kqrDBzBXY"
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/ResourceFull+Providers.mp4",
  },
  {
    title: "2024 Subaru Crosstrek Landing Page",
    description: `
      Developed a responsive landing page for the 2024 Subaru Crosstrek during a technical interview with DealerOn. 
      The project was completed in 2 hours using Bootstrap and jQuery, with a focus on responsiveness from 360 pixels and up. 
      All assets and text were provided, and I implemented a design that fulfilled all specified criteria.
    `,
    // videoUrl: "https://www.youtube.com/embed/v7kqrDBzBXY"
    //videoUrl: "https://player.vimeo.com/video/1020360541"
    videoUrl: "https://s3.us-west-1.amazonaws.com/a.bennettportfoilo/2024+Subaru+Crosstrek+Landing+Page.mp4",
  },
];

const PortfolioCard = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* <div className="card-image">
                <img src={project.imageUrl} alt={`${project.title} Screenshot`} />
              </div> */}
            <div className="card-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <video autoPlay muted loop width="100%">
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* <iframe 
  width="100%" 
  height="500" 
  src={project.videoUrl} 
  frameBorder="0" 
  allow="autoplay; fullscreen; picture-in-picture" 
  allowFullScreen>
</iframe> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCard;
