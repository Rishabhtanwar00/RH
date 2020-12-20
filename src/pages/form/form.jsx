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
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState((prevstate) => ({
      checkedItems: prevstate.checkedItems.set(item, e.target.name),
    }));
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit.bind(this)}>
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
          <input type="submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Page;
