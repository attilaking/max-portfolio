import React from 'react';
import Header from './components/Header';
import './assets/style/App.scss';
import './assets/style/main.css';
import Topnav from './components/Topnav';
import Section from './components/Section';

function App() {
  return (
    <main>
      <Topnav />
      <Header />
      <Section>
        wewe
      </Section>
    </main>
  );
}

export default App;
