import React from "react";
import Title from "./Title";
import { ProductConsumer } from "../context/Context";

export default function Projects() {
  return (
    <ProductConsumer>
      {value => {
        const { setClass } = value;
        return (
          <div className="projects">
            <div className="container">
              <Title title="Projects" color={setClass ? "#fefefe" : "gray"} />

              <div className="projects-center">
                {value.projects.map(item => {
                  return (
                    <div className="single-project" key={item.id}>
                      <a
                        href={item.extlink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src={item.img} alt="img" />
                      </a>
                      <p>{item.title}</p>

                      <div className="items">
                        {
                         item.id!==3? 
                        <button className="projectBtn">
                          <a
                            href={item.extlink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.btnTitle}
                          </a>
                        </button>
                        :null
                        }
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}
