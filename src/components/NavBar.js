import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/* <NavLink to="/menu"/>
      <NavLink to="/about"/>
      <NavLink to="/contact"/> */}
    </div>
  )
}
export default NavBar
