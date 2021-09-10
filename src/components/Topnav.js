import React, { useState } from 'react';
import githubLogo from '../assets/img/github.png';
import SideNav from '../components/SideNav';

const Topnav = () => {

    const [isSideMenuOpen, SetIsSideMenuOpen] = useState(false);

    const onSideMenuClicked = () => {
        SetIsSideMenuOpen(!isSideMenuOpen);
    }

    return (
        <>
            <div className="text-white bg-black sticky top-0 right-0 left-0 grid grid-cols-2 p-5 z-40">
                <div className="grid justify-start cursor-pointer" onClick={onSideMenuClicked}>
                    Menu
                </div>
                <div className="grid justify-end">
                    <div class="hint hint--left" aria-label="Repo of this website">
                        <a href="https://github.com/attilaking/max-portfolio" target="_blank">
                            <img class="hover:rotate-90" style={{ "width": "50px" }} alt="github" src={githubLogo} />
                        </a>
                    </div>
                </div>
            </div>
            <SideNav Open={isSideMenuOpen}/>
        </>
    )
}

export default Topnav;