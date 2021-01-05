import React from "react";

import "./rhcard.styles.css";

import RhLogo from "../../assets/rhcardlogo.png";

import RhLogoFront from "../../assets/rhcardlogofront.png";

import { Link } from "react-router-dom";

import { FiFacebook, FiYoutube } from "react-icons/fi";

import { FaInstagram } from "react-icons/fa";

export const RhCardFront = () => {
  return (
    <div className="rhcard-container">
      <div className="rhcardfront-details">
        <div className="rhcard-sociallinks">
          <Link className="social-link">
            <FiFacebook className="icon" /> <p>@rhpositive</p>
          </Link>
          <Link className="social-link">
            <FaInstagram className="icon" /> <p>@rhpositive</p>
          </Link>
          <Link className="social-link">
            <FiYoutube className="icon" /> <p>@rhpositive</p>
          </Link>
        </div>
        <img src={RhLogoFront} alt="" className="rhcard-frontlogo" />
        <Link className="web-link">www.rhpositive.com</Link>
      </div>
    </div>
  );
};

class RhCard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="rhcard-container">
        <div className="rhcard-details">
          <img src={RhLogo} alt="" className="rh-logo" />
          <img src="" alt="barcode here" className="barcode" />
          <span className="rh-id">XXXXXXXXXXXX</span>
          <span className="donor-name">Name here</span>
        </div>
      </div>
    );
  }
}

export default RhCard;
