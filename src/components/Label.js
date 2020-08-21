import React from 'react';
import {LabelStyle} from "./label.style";

const Label = ({label, value}) =>{
    return (
        <LabelStyle>
            {label.toUpperCase() + ': ' + value}
        </LabelStyle>
    )
}

export default Label