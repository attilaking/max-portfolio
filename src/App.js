import React from 'react';
import Section from './components/Section';
import Home from './pages/Home';
import { Router, Link } from "@reach/router";
import About from './pages/About';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Home path="/" />
        <About path="/about"/>
      </Router>
      <Section ContainerCssClass="bg-gray-800">
        <div className="pl-24 pt-6 pb-6 text-xl text-white font-light">
          <a href="https://www.linkedin.com/in/attilaking/">Max Attila King </a>- Front-End Developer & Ui Designer
        </div>
      </Section>
    </>
  );
}

export default App;
