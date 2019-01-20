import React from "react";
import PropTypes from "prop-types";
import "./ButtonComponent.scss";

const Button = ({ cbFunction, title, isLoading }) => {
  return (
    <button className={"button"} onClick={cbFunction} disabled={isLoading}>
      {isLoading ? "Is loading..." : title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  cbFunction: PropTypes.func
};

export default Button;
