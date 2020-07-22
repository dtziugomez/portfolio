import React from "react";
import "./App.css";
import { Element } from "react-scroll";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import Details from "./components/Details";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ProductConsumer } from "./context/Context";

function App() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className="App">
            <Navbar />
            <Element name="Projects">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Projects} />
                  <Route exact path="/details/:id" component={Details} />
                  <Redirect from="/" to="/" />
                </Switch>
              </BrowserRouter>
            </Element>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default App;
