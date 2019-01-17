import React from "react";
import PropTypes from "prop-types";
import "./ButtonComponent.scss";

const Button = ({ cbFunction, title }) => {
  return (
    <button className={"button"} onClick={cbFunction}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  cbFunction: PropTypes.func
};

export default Button;
