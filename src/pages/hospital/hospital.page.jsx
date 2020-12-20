import React from "react";

import "./hospital.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import HospitalButtonCollection from "../../components/hospitalbutton-collection/hospitalbutton-collection.component";

import Hospital1 from "../../components/hospital1/hospital1.component";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

class Hospital extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="hospital-container">
        <Navbar />
        <HospitalButtonCollection />
        <Hospital1 />
        <NavbarForMobile />
      </div>
    );
  }
}

export default Hospital;
