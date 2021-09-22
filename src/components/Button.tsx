import React from 'react';

const Button = ({
    link,
    label,
    variant,
    onClicked
}: {
    link: string,
    label: string,
    variant: string,
    onClicked: (link: string) => void
}) => {
    return (
        <button onClick={() => onClicked(link)} className={`text-2xl pr-6 pl-6 pt-2 pb-2 border-2 border-black text-black ${variant === "primary" ? "" : ""}`}>
            {label}
        </button>
    )
}

export default Button;