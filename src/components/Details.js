import React from "react";
import { projects } from "../context/Data";
import Title from "../components/Title";
import "../App.css";

function Details(props) {
  let project = projects.filter(p => p.id === Number(props.match.params.id));

  return (
    <div className="projects">
      <div className="container">
        <Title title={project[0].details.title} color="gray" />
        <article>
          <p>{project[0].details.description}</p>
        </article>
        <div className="projects-center">
          <div id="images" className="single-project">
            {project[0].details.images.map(image => (
              <img key={props.match.params.id++} src={image} alt="pic" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
