import React from "react";

import "./searchblood1.styles.css";

import Image1 from "../../assets/search-1.png";

import { Link } from "react-router-dom";

class SearchBlood1 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="Searchblood1-container">
        <div className="blood-groups">
          <div className="left-group">
            <Link className="blood-group" to="/hospital/A+">
              A+
            </Link>
            <Link className="blood-group">A-</Link>
            <Link className="blood-group">O+</Link>
            <Link className="blood-group">O-</Link>
          </div>
          <div className="right-group">
            <Link className="blood-group">B+</Link>
            <Link className="blood-group">B-</Link>
            <Link className="blood-group">AB+</Link>
            <Link className="blood-group">AB-</Link>
          </div>
        </div>
        <div className="hospital1-image">
          <img src={Image1} alt="png" />
        </div>
      </div>
    );
  }
}

export default SearchBlood1;
