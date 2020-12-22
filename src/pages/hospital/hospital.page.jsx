import React from "react";

import "./hospital.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import HospitalButtonCollection from "../../components/hospitalbutton-collection/hospitalbutton-collection.component";

import SearchBlood1 from "../../components/searchblood1/searchblood1.component";

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
        <SearchBlood1 />
        <NavbarForMobile />
      </div>
    );
  }
}

export default Hospital;
