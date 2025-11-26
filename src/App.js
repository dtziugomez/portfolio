import React from "react";
import "./App.css";
//import { Element } from "react-scroll";
import Navbar from "./components/Navbar";

//import Projects from "./components/Projects";
//import Details from "./components/Details";
//import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { ProductConsumer } from "./context/Context";

function App() {
  return (
    <ProductConsumer>
      {value => {
        return (
          <div className="App">
            <Navbar />
            <div className="intro-container" style={{ textAlign: 'center', padding: '2rem' }}>
              
              <h1>Hi I'm Deyvi Fernando Tziu Gómez</h1>
              <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', fontFamily: 'Segoe UI, sans-serif', lineHeight: '1.6', color: '#333' }}>
  

              <p>
                <strong>Full-Stack Developer</strong> 
                with hands-on experience in both frontend and backend development. 
                Proficient in modern JavaScript frameworks including 
                <strong>Angular</strong>, <strong>Vue.js</strong>, and <strong>React</strong>
                , as well as backend technologies such as <strong>C#</strong>, <strong>SQL</strong>,
                 and <strong>Web API development</strong>.
              </p>

              <p>Demonstrated ability to:</p>
              <ul style={{ paddingLeft: '1.5rem' }}>
                <li>Analyze and resolve complex technical challenges.</li>
                <li>Develop new features and improve existing systems.</li>
                <li>Work effectively within <strong>Agile</strong> environments, participating in impact analysis, design reviews, unit testing, and collaborative code development.</li>
              </ul><br></br>
              <p>
                Driven by a passion for continuous learning and innovation, 
                I aim to contribute to the delivery of high-quality, 
                scalable solutions within dynamic and fast-paced development teams.
              </p>
            </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default App;
