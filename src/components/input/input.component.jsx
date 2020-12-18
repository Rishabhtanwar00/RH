import React from "react";

import "./input.styles.css";

const Input = (props, { guideInput, registrationInput }) => {
  return (
    <input
      className={`${guideInput ? "guide-input" : " "} 
                           ${
                             registrationInput ? "registration-input" : " "
                           }  input`}
      type={props.type}
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default Input;
