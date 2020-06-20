import React from "react";
import "./App.css";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Skills from "./components/Skills";
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
            {
              <Route exact path="/" component={Header} />
              /*<Route exact path="/Skills" component={Skills} />
            <Route exact path="/Projects" component={Projects} /> */
            }
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default App;
