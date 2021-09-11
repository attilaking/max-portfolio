import React from 'react';

const SideNav = (props) => {
    return (
        <div className={`grid grid-cols-1 gap-6 pl-10 text-white text-3xl font-light fixed bottom-0 top-0 w-0 pt-20 transition-width duration-500 ease-in-out bg-black overflow-hidden ${props.Open ? "w-64" : "w-0"}`}>
            <div className="whitespace-no-wrap">
                Home
            </div>
            <div className="whitespace-no-wrap">
                About Me
            </div>
            <div className="whitespace-no-wrap">
                My Work
            </div>
        </div>
    )
}

export default SideNav;