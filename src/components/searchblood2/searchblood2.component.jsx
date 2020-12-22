import React from "react";

import "./searchblood2.styles.css";

import Image2 from "../../assets/search-2.png";

class SearchBlood2 extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="searchblood2-container">
        <div className="searchblood2-image">
          <img src={Image2} alt="png" />
        </div>
        <div className="blood-list"></div>
      </div>
    );
  }
}

export default SearchBlood2;
