import React from "react";
import "./Card.style.css";

const Card = ({ project }) => {
  return (
    <div className="card">
      <div className="upperHead">Polygon</div>
      <div className="card-container">
        <div className="card-name">{project.project_info.name}</div>

        {/* <span className="project-name">{project.project_info.name}</span> */}
      </div>
      <div className="desc">
        <div className="picture">
          <img
            src={project.project_info.project_display_image}
            alt=""
            className="pic"
          />
        </div>
        <div className="description">{project.project_info.name}</div>
      </div>

      <div className="lowerpart">
        <div className="img">
          <img src="logo3.png" alt="" className="" />
        </div>
        <div className="ind">"12.4K"</div>
      </div>
    </div>
  );
};

export default Card;
