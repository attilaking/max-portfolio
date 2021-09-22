import React from 'react';

const Button = ({link, label}) => {
    return (
        <button onClick={() => props.OnClicked(link)} className={`text-2xl pr-6 pl-6 pt-2 pb-2 border-2 border-black text-black ${props.variant === "primary" ? "" : ""}`}>
            {label}
        </button>
    )
}

export default Button;