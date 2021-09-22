import React from 'react';
import { Router, RouteComponentProps } from "@reach/router";

import Section from './components/Section';
import Home from './pages/Home';
import About from './pages/About';
import Navigation from './components/Navigation';
import AppErrorBoundary from './components/AppErrorBoundary';

function App() {
  return (
    <>
      <AppErrorBoundary>
        <Navigation />
        <Router>
          <RouterPage path="/" pageComponent={<Home />} />
          <RouterPage path="/about" pageComponent={<About />} />
        </Router>
        <Section containerCssClass="bg-black">
          <div className="pl-24 pt-6 pb-6 text-xl text-white font-light">
            <a href="https://www.linkedin.com/in/attilaking/">Max Attila King </a>- Front-End Developer & Ui Designer
          </div>
        </Section>
      </AppErrorBoundary>
    </>
  );
}

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default App;
