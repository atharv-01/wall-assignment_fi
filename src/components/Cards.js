import React from "react";
import Card from "./Card";
import "./Cards.css";
const Cards = (projects) => {
  let projectData = [];
  for (let i = 0; i < projects.projects.length; i++) {
    projectData.push(projects.projects[i]);
  }

  return (
    <div className="cards">
      {projectData.map((project) => (
        <Card key={project.id} project={project} className="card1" />
      ))}
    </div>
  );
};

export default Cards;
