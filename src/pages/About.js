import React from 'react';
import Section from '../components/Section';
import mouseImg from '../assets/img/mouse.jpg';

const About = (props) => {
    return (
        <>
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <div className="pl-24 pt-24 pb-24 pr-4 grid items-center justify-items-center">
                        <div>
                            <div className="text-6xl font-semibold color">
                                About Me
                            </div>
                            <p className="text-xl font-light">I live in Brisbane, Australia, I am a passionate Fron-End developer and UI Designer. I am an early adopter, I love new technology. I never stop learning, I am always looking for new challenges in software development. </p>
                        </div>
                    </div>
                    <div className="grid items-center justify-items-center">
                        <img className="w-2/3" alt="mouse" src={mouseImg} />
                    </div>
                </div>
            </Section>
        </>
    )
}

export default About;