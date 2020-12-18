import React from "react";

import PropTypes from "prop-types";

const CheckBox1 = ({ type = "checkbox", name, checked = false, onChange }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

CheckBox1.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox1;
