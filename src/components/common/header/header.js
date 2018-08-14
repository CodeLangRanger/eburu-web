/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg nav-custom-style">
        <NavLink className="navbar-brand nav-custom-logo" exact to="/" role="navigation">Eburu</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          </ul>
          <div className="my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item menu-list-style">
                    <NavLink className="nav-link list-custom-style" to="/auth/login" role="navigation" >Log In<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item menu-list-style">
                    <NavLink className="nav-link list-custom-style" to="/auth/signup" role="navigation" >Sign Up<span className="sr-only">(current)</span></NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
