import React from "react";
import PropTypes from "prop-types";
import "./HeaderComponent.scss";

const Header = ({ title }) => {
  return <div className={"header"}>{title}</div>;
};

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
