import React from "react";

import CheckBoxes from "../../components/checkbox/checkbox.data";

import CheckBox1 from "../../components/checkbox/checkbox1.component";

import PropTypes from "prop-types";

class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      checkedItems: new Map(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const items = e.target.name;
    const isChecked = e.target.checked;
  }

  render() {
    return (
      <React.Fragment>
        {CheckBoxes.map((item) => (
          <label key={item.key}>
            {item.name}
            <CheckBox1
              name={item.name}
              checked={this.state.checkedItems.get(item.name)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}

export default Page;
