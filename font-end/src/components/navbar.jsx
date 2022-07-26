import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import authService from "../services/authService";

const Navbar = () => {
  const [user, setUser] = useState({ nickname: "", token: "" });

  useEffect(() => {
    const currentUser = authService.getCurrentUser();
    if (currentUser) setUser(currentUser);
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
            <NavLink
              className='nav-item nav-link '
              to='/'
              style={({ isActive }) =>
                isActive
                  ? {
                      textShadow: "1px 1px",
                      boxShadow: "inset 5px 5px 5px black",
                    }
                  : {}
              }
            >
              Articles
            </NavLink>

            {!user.nickname ? (
              <>
                <NavLink
                  className='nav-item nav-link '
                  to='/user'
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textShadow: "1px 1px",
                          boxShadow: "inset 5px 5px 5px black",
                        }
                      : {}
                  }
                >
                  Register
                </NavLink>
                <NavLink
                  className='nav-item nav-link '
                  to='/login'
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textShadow: "1px 1px",
                          boxShadow: "inset 5px 5px 5px black",
                        }
                      : {}
                  }
                >
                  Sign In
                </NavLink>
              </>
            ) : (
              <>
                <NavLink
                  className='nav-item nav-link'
                  to='/edit/new'
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textShadow: "1px 1px",
                          boxShadow: "inset 5px 5px 5px black",
                        }
                      : {}
                  }
                >
                  New Article
                </NavLink>
                <NavLink
                  className='nav-item nav-link'
                  to='/myarticle'
                  style={({ isActive }) =>
                    isActive
                      ? {
                          textShadow: "1px 1px",
                          boxShadow: "inset 5px 5px 5px black",
                        }
                      : {}
                  }
                >
                  My Articles
                </NavLink>
                <NavLink
                  onClick={handleLogout}
                  className='nav-item nav-link '
                  to='/logout'
                >
                  <p>Sign Out</p>
                </NavLink>
              </>
            )}
          </div>
        </div>
        <div className='rightCorner'>
          {user.nickname ? user.nickname : "Friend"}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
