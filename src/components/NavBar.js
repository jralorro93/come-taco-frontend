import React from "react";
import { NavLink } from "react-router-dom";

<<<<<<< HEAD
const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

=======
>>>>>>> 0a79967afd21a400c98be75ea42dcc00db1e7ff9
const NavBar = () => {
  return (
    <div className="navbar">
    {/*Drop down options*/}
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
        <nav>
        {/*Nav Bar*/}
          <div class="nav-wrapper">
            <NavLink to='/' className="brand-logo center">Come Taco</NavLink>
            <ul class="right hide-on-med-and-down">
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact Us</NavLink></li>
              <li><NavLink to='/login'>Login</NavLink></li>
            {/*<!-- Dropdown Trigger -->*/}
              <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
          </div>
        </nav>
    </div>
  );
};
export default NavBar;
