import React from 'react';

const Section = ({
    children, 
    containerCssClass
} : {
    children:any, 
    containerCssClass:string
}) => {
    return (
        <div className={containerCssClass}>
            {children}
        </div>
    )
}

export default Section;