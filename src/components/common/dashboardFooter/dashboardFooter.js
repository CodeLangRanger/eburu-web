/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class DashboardFooter extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg nav-custom-style">
      </nav>
    );
  }
}

export default DashboardFooter;
