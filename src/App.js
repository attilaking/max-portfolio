import React from 'react';
import Header from './components/Header';
import './assets/style/App.scss';
import './assets/style/main.css';
import Topnav from './components/Topnav';
import Section from './components/Section';
import mouseImg from '../src/assets/img/mouse.jpg';
import uiImg from '../src/assets/img/ui-design.png';

function App() {
  return (
    <main>
      <Topnav />
      <Header />
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div class="pl-24 pt-24 pb-24 pr-4 grid items-center justify-items-center">
            <div>
              <div className="text-6xl font-semibold color">
                About Me
              </div>
              <p className="text-xl font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation et iusto odio</p>
            </div>
          </div>
          <div className="grid items-center justify-items-center">
            <img className="w-2/3" alt="mouse" src={mouseImg} />
          </div>
        </div>
      </Section>

      <Section ContainerCssClass="bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="grid items-center justify-items-center">
            <img className="w-2/3" alt="mouse" src={uiImg} />
          </div>
          <div class="pl-4 pt-24 pb-24 pr-24  grid items-center justify-items-center">
            <div>
              <div className="text-6xl font-semibold color">
                Front-End
              </div>
              <p className="text-xl font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation et iusto odio</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

export default App;
