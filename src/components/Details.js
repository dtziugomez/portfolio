import React from "react";
import { projects } from "../context/Data";
import Title from "../components/Title";
import "../App.css";
import Fade from "react-reveal/Fade";

function Details(props) {
  let project = projects.filter(p => p.id === Number(props.match.params.id));

  return (
    <Fade left cascade>
      <div className="projects">
        <div className="container">
          <Title title={project[0].details.title} color="gray" />
          <article>
            <p>{project[0].details.description}</p>
          </article>
          <div className="projects-center">
            {project[0].details.images.map(image => (
              <div id="images" className="single-project-detail">
                <img key={props.match.params.id++} src={image} alt="pic" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Details;
