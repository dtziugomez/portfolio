import React from "react";
import Title from "./Title";
import { ProductConsumer } from "../context/Context";
import { withRouter } from "react-router-dom";

function Projects(props) {
  const setId = id => {
    props.history.push(id);
  };

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
                    <div
                      className="single-project"
                      key={item.id}
                      onClick={() => setId(`${item.id}`)}
                    >
                      {item.active ? (
                        <a
                          href={item.extlink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={item.img} alt="img" />
                        </a>
                      ) : (
                        <a
                          href={`/details/${item.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={item.img} alt="img" />
                        </a>
                      )}
                      <p>{item.title}</p>

                      <div className="items">
                        <button className="projectBtn">
                          <a
                            href={item.extlink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.btnTitle}
                          </a>
                        </button>
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
export default withRouter(Projects);
