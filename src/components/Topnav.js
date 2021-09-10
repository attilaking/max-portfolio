import React from 'react';
import githubLogo from '../assets/img/github.png';

const Topnav = () => {
    return (
        <div>
            <div className="text-white bg-black sticky top-0 right-0 left-0 grid grid-cols-2 p-5">
                <div className="grid justify-start">1</div>
                <div className="grid justify-end">
                    <div class="hint hint--left" aria-label="Repo of this website">
                        <a href="https://github.com/attilaking/max-portfolio" target="_blank">
                            <img class="hover:rotate-90" style={{ "width": "50px" }} alt="github" src={githubLogo} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topnav;