import React from 'react';
import { Router, Link } from '@reach/router';

const SideNav = ({onLinkClicked, isOpen}) => {
    return (
        <div className={`grid grid-cols-1 gap-6 text-white text-3xl font-light fixed bottom-0 top-0 w-0 pt-20 transition-width duration-500 ease-in-out bg-black overflow-hidden ${isOpen ? "w-full sm:w-1/3" : "w-0"}`}
        style={{opacity:0.9}}>
            <Link to="/" onClick={onLinkClicked}>
                <div className="whitespace-no-wrap hover:bg-gray-900 pl-16">
                    Home
                </div>
            </Link>
            <Link to="/about" onClick={onLinkClicked}>
                <div className="whitespace-no-wrap hover:bg-gray-900 pl-16">
                    About Me
                </div>
            </Link>
        </div>
    )
}

export default SideNav;