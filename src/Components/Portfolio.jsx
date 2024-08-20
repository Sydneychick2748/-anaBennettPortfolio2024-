// import React from "react";
// import PortfolioCard from "../Components/PortfolioCard";
// import "./Portfolio.scss";

// const Portfolio = () => {
//   const colorClasses = ["color-1", "color-2", "color-3"];
//   const portfolioData = [
//     {
//       title: "Tic Tac Toe 1",
//       description: `descritipton of project 1`,
//       imageUrl: "images/card-7.png",
//       link: "https://tictactoe-zeta-amber.vercel.app",
//       gifUrl: "/src/assets/ezgif1.gif",
//       colorClass: colorClasses[0],
//     },
//     {
//       title: "Project 2",
//       description: "Description for Project 2",
//       imageUrl: "images/card-2.jpeg",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[1],
//     },
//     {
//       title: "Project 3",
//       description: "Description for Project 3",
//       imageUrl: "images/card-6.jpeg",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[2],
//     },
//     {
//       title: "Project 4",
//       description: "Description  Project 4",
//       imageUrl: "images/card-2.jpeg",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[0],
//     },

//     {
//       title: "Project 5",
//       description: "Description for Project 5",
//       imageUrl: "images/card-6.jpeg",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[1],
//     },
//     {
//       title: "Project 6",
//       description: "Description for Project 6",
//       imageUrl: "images/card-7.png",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[2],
//     },
//     {
//       title: "Project 7",
//       description: "Description for Project 7",
//       imageUrl: "images/card-7.png",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[0],
//     },
//     {
//       title: "Project 8",
//       description: "Description for Project 8",
//       imageUrl: "images/card-7.png",
//       link: "https://example.com/project1",
//       colorClass: colorClasses[1],
//     },
//   ];

//   return (
//     <div id="portfolio">
//       <div className="Home-Container">
//         <div className="portfolio-section">
//           <h1 className="portfolio-heading ">
//             Take a look at some of the work I have done
//           </h1>
//         </div>

//         <div className="portfolio-cards">
//           {portfolioData.map((project, index) => {
//             const { title, description, imageUrl, link, gifUrl, colorClass } =
//               project;

//             return (
//               <PortfolioCard
//                 key={index}
//                 title={title}
//                 description={description}
//                 imageUrl={imageUrl}
//                 link={link}
//                 gifUrl={gifUrl}
//                 colorClass={colorClass}
//               />
//             );
//           })}
//         </div>
//         <div className="portfolio-section-resume">
//           <h1 className="portfolio-heading-resume ">
//             Take a look at some of the work I have done
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;
