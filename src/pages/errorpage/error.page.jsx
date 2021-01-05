import React from "react";

import "./error.page.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

class ErrorPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="errorpage-container">
        <Navbar />
        <div className="errorpage-content"></div>
        <NavbarForMobile />
      </div>
    );
  }
}
