import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="navbar">
    {/*Drop down options*/}
      <ul id="dropdown1" class="dropdown-content">
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li class="divider"></li>
        <li><a href="#!">three</a></li>
      </ul>
        <nav className="blue-grey lighten-4">
        {/*Nav Bar*/}
          <div id="nav-wrapper">
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
  )
}
export default NavBar
