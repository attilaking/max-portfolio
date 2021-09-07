import React from 'react';
import { useEffect, useState } from 'react';
import { style } from '../assets/style/components/header.scss';
import  heroImage from '../assets/img/max.jpg';

const Header = () => {
    return (
        <div>
            <div className="text-white bg-black sticky top-0 right-0 left-0 border-2 border-red-500">
                s
            </div>
        <div className="bg-black font-semibold grid grid-cols-2 mx-headerCont">
            
            <div className="text-white grid items-center mx-headerCont__left">
                <div className="pl-32 mx-headerCont__left__herowrapper">
                    <div className="leading-none mx-headerCont__left__herowrapper__hero">
                        <div>Hello,</div>
                        <div>I'm</div>
                        <div className="mx-headerCont__primary">Max</div>
                    </div>
                    <div className="text-2xl font-light mx-headerCont__left__herowrapper__sub">
                        Front-End Developer
                    </div>
                </div>
            </div>

            <div className="text-white grid items-center justify-items-center">
                    <div className="w-3/4">
                       <img className="w-full" alt="Max Attila King" src={heroImage}/>
                    </div>
            </div>
        </div>
        </div>

    )

}

export default Header;