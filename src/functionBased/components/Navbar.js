import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navBar">
      <Link to="/" className="active-link">
        Home
      </Link>
      <Link to="about" className="active-link">
        About
      </Link>
    </nav>
  );
};
export default Navbar;
