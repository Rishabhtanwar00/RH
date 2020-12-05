import React from 'react';

import './input.styles.css';

const Input=({type , placeholder, guideInput ,registrationInput}) =>{
    return(
        <input className={`${guideInput ? 'guide-input' : ' '} 
                           ${registrationInput ? 'registration-input' : ' '}  input`} type={type} placeholder={placeholder}/>
    )
}

export default Input;