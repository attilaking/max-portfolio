import React, { useState } from 'react';
import githubLogo from '../assets/img/github.png';
import burgerImg from '../assets/img/icons/burger.png';
import cancelImg from '../assets/img/icons/cancel.png';
import SideNav from './SideNav';

const Navigation = () => {

    const [isSideMenuOpen, SetIsSideMenuOpen] = useState(false);

    const onSideMenuClicked = () => {
        SetIsSideMenuOpen(!isSideMenuOpen);
    }

    const onLinkClicked= () => {
        SetIsSideMenuOpen(isSideMenuOpen = false);
    }

    return (
        <>
            <div className="text-white bg-black sticky top-0 right-0 left-0 grid grid-cols-2 pl-6 pr-6 pt-3 pb-3 z-40">
                <div className="grid justify-start items-center cursor-pointer pl-4" onClick={onSideMenuClicked}>
                    <img class="opacity-75 transform rotate-0 hover:rotate-180 transition-rotate duration-500 ease-in-out" style={{ "width": isSideMenuOpen ? "25px" : "30px" }} alt="menu" src={isSideMenuOpen ? cancelImg : burgerImg} />
                </div>
                <div className="grid justify-end items-center">
                    <div class="hint hint--left" aria-label="Repo of this website">
                        <a href="https://github.com/attilaking/max-portfolio" target="_blank">
                            <img class="hover:rotate-90" style={{ "width": "50px" }} alt="github" src={githubLogo} />
                        </a>
                    </div>
                </div>
            </div>
            <SideNav OnLinkClicked={onLinkClicked} Open={isSideMenuOpen} />
        </>
    )
}

export default Navigation;