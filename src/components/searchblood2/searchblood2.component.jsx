import React from "react";

import "./searchblood2.styles.css";

import HospitalButtonCollection from "../hospitalbutton-collection/hospitalbutton-collection.component";

import Image2 from "../../assets/search-2.png";

class SearchBlood2 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="searchblood2-container">
        <HospitalButtonCollection />
        <div className="searchblood2-image"></div>
        <div className="blood-list"></div>
      </div>
    );
  }
}

export default SearchBlood2;
