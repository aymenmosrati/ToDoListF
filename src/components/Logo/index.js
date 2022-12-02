import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <span className="logoFirstName">Taki</span>
      <span className="logoLastName">Academy</span>
    </Link>
  );
};
export default Logo;
