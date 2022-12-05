import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/takiacademy-logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="errLogo" className="imgLogo" />
      <span className="titleLogo">My Tasks</span>
    </Link>
  );
};
export default Logo;
