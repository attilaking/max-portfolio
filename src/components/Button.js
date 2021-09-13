import React from 'react';

const Button = (props) => {
    return (
        <button onClick={() => props.OnClicked(props.Link)} className={`text-2xl pr-6 pl-6 pt-2 pb-2 border-2 border-black text-black ${props.variant === "primary" ? "" : ""}`}>
            {props.Label}
        </button>
    )
}

export default Button;