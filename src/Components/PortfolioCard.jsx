import "./PortfolioCard.scss";

const projects = [
  {
    title: "Survivors.io Data Visualization",
    description: "Implemented data visualizations using React and D3 to help users interact with survivors' data.",
    imageUrl: "/images/survivors-io.png",
    projectLink: "https://survivors-io.com"
  },
  {
    title: "LightHouse App",
    description: "Developed login, email, and password verification functionality using React and JavaScript.",
    imageUrl: "/images/lighthouse.png",
    projectLink: "https://lighthouseapp.com"
  },
  {
    title: "Resourceful Provider App",
    description: "Integrated AWS RESTful APIs into a dynamic React web application to provide resources for providers.",
    imageUrl: "/images/resourceful-provider.png",
    projectLink: "https://resourcefulprovider.com"
  }
];

const PortfolioCard = () => {
    return (
      <div className="portfolio-container">
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="card-image">
                <img src={project.imageUrl} alt={`${project.title} Screenshot`} />
              </div>
              <div className="card-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default PortfolioCard;
