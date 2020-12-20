import React from "react";

import "./hospitalbutton.styles.css";

const HospitalButton = (props) => {
  return (
    <div className="hospitalbutton-container">
      <button className="hospital-button">{props.name}</button>
    </div>
  );
};

export default HospitalButton;
