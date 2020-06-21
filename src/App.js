import React from "react";
import "./App.css";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import { Route } from "react-router-dom";
import { ProductConsumer } from "./context/Context";

function App() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className="App">
            <Navbar />

            {/* <Element name="Home">
              < Route exact path="/" component={Header} />
            </Element> */}

            <Element name="Projects">
              <Route exact path="/" component={Projects} />
            </Element>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default App;
