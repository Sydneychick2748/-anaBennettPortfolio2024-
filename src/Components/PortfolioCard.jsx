import "./PortfolioCard.scss";

import resourcefulVideo from '../assets/ResourceFull Providers.mp4';
import subaruVideo from "../assets/2024 Subaru Crosstrek Landing Page.mp4";
import kubecostVideo from "../assets/Kubecost.mp4";



const projects = [
  
  {
    title: "LightHouse App",
    description: "Developed login, email, and password verification functionality using React and JavaScript.",
    imageUrl: "/images/lighthouse.png",
    projectLink: "https://lighthouseapp.com"
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
    videoUrl: kubecostVideo
  },

  {
    title: "Resourceful Provider App",
    description: `
      Built a dynamic program listing page using React.js with data fetched from AWS via a RESTful API. 
      Tools Used: AWS API Gateway, React.js, JavaScript, CSS/Sass.
      Key Tasks:
      - Pulled program-specific data, replacing organization listings with individual program details.
      - Dynamically applied organization colors to avatars based on data.
      - Filtered service types for each program, displaying only relevant types.
      - Displayed organization names with conditional text for virtual programs and confidential addresses.
      This project showcases my ability to integrate cloud-based data with React and handle dynamic, conditional rendering.
    `,
    
    videoUrl: resourcefulVideo,
   
  },
  {
    title: "2024 Subaru Crosstrek Landing Page",
    description: `
      Developed a responsive landing page for the 2024 Subaru Crosstrek during a technical interview with DealerOn. 
      The project was completed in 2 hours using Bootstrap and jQuery, with a focus on responsiveness from 360 pixels and up. 
      All assets and text were provided, and I implemented a design that fulfilled all specified criteria.
    `,
    videoUrl: subaruVideo,
   
  }
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
                <video controls width="100%">
      <source src={project.videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* <video controls width="100%">
  <source src="/assets/Kubecost.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video> */}
    {/* <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
      Visit Project
    </a> */}
                {/* {project.videoUrl ? (
      <video controls width="100%">
        <source src={project.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ) : (
      <img src={project.imageUrl} alt={`${project.title} screenshot`} />
    )} */}
                {/* <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PortfolioCard;
