import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";

const Navbar = () => {
  const [user, setUser] = useState({ nickname: "", token: "" });

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) setUser(currentUser);
    console.log(currentUser);
    // eslint-disable-next-line
  }, []);

  const handleLogout = () => {
    authService.logout();
  };

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
            {!user.nickname ? (
              <>
                <NavLink className='nav-item nav-link ' to='/user'>
                  Register
                </NavLink>
                <NavLink className='nav-item nav-link ' to='/login'>
                  Login
                </NavLink>
              </>
            ) : (
              <NavLink
                onClick={handleLogout}
                className='nav-item nav-link '
                to='/logout'
              >
                Logout
              </NavLink>
            )}
          </div>
        </div>
        <div className='rightCorner'>{user && user.nickname}</div>
      </nav>
    </>
  );
};

export default Navbar;
