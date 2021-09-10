import React from 'react';

const SideNav = (props) => {
    return (
        <div className={`fixed bottom-0 top-0 w-0 hover:text-red-500 transition-width duration-500 ease-in-out bg-black overflow-hidden ${props.Open ? "w-64" : ""}`}>
            rerer
        </div>
    )
}

export default SideNav;