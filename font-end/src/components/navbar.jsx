import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
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
                Articles
              </NavLink>
              <NavLink className='nav-item nav-link' to='/edit/new'>
                New Article
              </NavLink>
              <NavLink className='nav-item nav-link ' to='/user'>
                Register
              </NavLink>
              <NavLink className='nav-item nav-link ' to='/login'>
                Login
              </NavLink>
            </div>
          </div>
          <div className='rightCorner'>username</div>
        </nav>
      </>
    );
  }
}

export default Navbar;
