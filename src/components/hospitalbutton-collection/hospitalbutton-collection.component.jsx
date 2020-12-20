import React from "react";

import "./hospitalbutton-collection.styles.css";

import HospitalButton from "../hospitalbutton/hospitalbutton.component";

const HospitalButtonCollection = () => {
  return (
    <div className="hospitalbutton-collection">
      <HospitalButton name="Search Blood" />
      <HospitalButton name="Update Blood" />
      <HospitalButton name="Add Post" />
      <HospitalButton name="Send Mail" />
    </div>
  );
};

export default HospitalButtonCollection;
