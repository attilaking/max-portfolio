import React from 'react';

const Section = ({children, containerCssClass}) => {
    return (
        <div className={containerCssClass}>
            {children}
        </div>
    )
}

export default Section;