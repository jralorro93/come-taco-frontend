import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <p>About</p>
      <p>Contact Us</p>
      <p>Login</p>
    </div>
  );
};
export default NavBar;
