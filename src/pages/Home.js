import React from 'react';
import { navigate } from "@reach/router"
import Header from '../components/Header';
import Section from '../components/Section';
import mouseImg from '../assets/img/mouse.jpg';
import arrowRightImg from '../assets/img/icons/arrow-right.png';
import uiImg from '../assets/img/ui-design.png';
import Button from '../components/Button';

const Home = (props) => {

    const OnButtonClicked = (link) => {
        navigate(link);
    }

    return (
        <>
            <Header />
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div class="pl-24 pt-24 pb-24 pr-4 grid items-center justify-items-center">
                        <div>
                            <div className="text-6xl font-semibold color">
                                About Me
                            </div>
                            <p className="text-xl font-light">I live in Brisbane, Australia, I am a passionate Fron-End developer and UI Designer. I am an early adopter, I love new technology. I never stop learning, I am always looking for new challenges in software development.</p>
                            <div class="grid justify-items-end w-full">
                                    <a href="/about">
                                        <img className="mr-6 hover:mr-4 transition-margin duration-500 ease-in-out" style={{ "width": "35px" }} alt="more" src={arrowRightImg} />
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div className="grid items-center justify-items-center">
                        <img className="w-2/3" alt="mouse" src={mouseImg} />
                    </div>
                </div>
            </Section>

            <Section ContainerCssClass="bg-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-xl">
                    <div className="grid items-center justify-items-center">
                        <img className="w-2/3" alt="mouse" src={uiImg} />
                    </div>
                    <div class="pl-4 pt-24 pb-24 pr-24 grid items-top justify-items-center">
                        <div>
                            <div className="text-6xl font-semibold color">
                                Front-End
                            </div>
                            <p className="font-light">I have been a Front-End developer for about 4 years. I mainly work in Blazor/C# and React and relevant frameworks and technologies. My main focus are the following:</p>
                            <div class="font-light">
                                <div class="pl-4 pt-2 pb-2"><span className="font-bold">Blazor</span> / C# / .NET</div>
                                <hr />
                                <div class="pl-4 pt-2 pb-2"><span className="font-bold">React</span>  / JavaScript / Next.js</div>
                                <hr />
                                <div class="pl-4 pt-2 pb-2"><span className="font-bold">SASS</span>  / CSS / HTML5</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Home;