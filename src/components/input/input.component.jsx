import React from 'react';

import './input.styles.css';

const Input=({type , placeholder, guideInput}) =>{
    return(
        <input className={`${guideInput ? 'guide-input' : ' '} input`} type={type} placeholder={placeholder}/>
    )
}

export default Input;