import React from "react";

import "./error.page.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import { Link } from "react-router-dom";

import ErrorImage from "../../assets/404.png";

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
        <div className="errorpage-content">
          <div className="errorpage-image">
            <img src={ErrorImage} alt="" />
          </div>
          <div className="errorpage-details">
            <p>You have lost your way</p>
            <p>but</p>
            <p>You can give someone a way to live.</p>
            <div className="errorpage-links">
              <Link className="redirectlink">Become a blood donor</Link>
              <Link className="redirectlink">Take a tour</Link>
            </div>
            <div className="error-mssg">Error 404: Page not found</div>
          </div>
        </div>
        <NavbarForMobile />
      </div>
    );
  }
}

export default ErrorPage;
