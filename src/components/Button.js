import React from 'react'
const Button = ({theme}) => {
    const {textColor, backgroundColor, styleName}  = theme;
    return (
        <button className={styleName}></button>
    )
}