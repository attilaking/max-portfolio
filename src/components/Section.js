import React from 'react';

const Section = (props) => {
    return (
        <div className={props.ContainerCssClass}>
            {props.children}
        </div>
    )
}

export default Section;