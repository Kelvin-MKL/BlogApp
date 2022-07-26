import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <Link className='navbar-brand' to='#'>
          Navbar
        </Link>
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
            <Link to='/' className='nav-item nav-link active'>
              Home <span className='sr-only'></span>
            </Link>
            <Link to='/' className='nav-item nav-link'>
              Features
            </Link>
            <Link to='/' className='nav-item nav-link'>
              Pricing
            </Link>
            <Link to='/user' className='nav-item nav-link'>
              Disabled
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
