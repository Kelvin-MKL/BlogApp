import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink className='nav-item nav-link ' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-item nav-link' to='/create'>
              New Post
            </NavLink>
            <NavLink className='nav-item nav-link ' to='/user'>
              Users
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
