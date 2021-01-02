import React from "react";
import "./dashboard.styles.css";

import Navbar from "../../components/navbar/navbar.component";

import DonationHistory from "../../components/donationhistory/donationhistory.component";

import NavbarForMobile from "../../components/navbarformobile/navbar.component";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="dashboard-container">
        <Navbar />
        <div className="dashboard-details">
          <div className="name">Welcome Olive Max</div>
          <DonationHistory />
        </div>
        <NavbarForMobile />
      </div>
    );
  }
}

export default Dashboard;
