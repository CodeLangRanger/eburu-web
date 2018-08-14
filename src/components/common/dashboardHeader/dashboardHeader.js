/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class DashboardHeader extends React.Component {
  render() {
    return (
        <div className="header">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
            
            <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                    
                    <b><img src="images/logo.png" alt="Eburu" className="dark-logo" /></b>
                   
                    <span><img src="images/logo-text.png" alt="Eburu" className="dark-logo" /></span>
                </a>
            </div>
            <div className="navbar-collapse">
               
                <ul className="navbar-nav mr-auto mt-md-0">
                   
                    <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted  " href="javascript:void(0)"><i className="mdi mdi-menu"></i></a> </li>
                    <li className="nav-item m-l-10"> <a className="nav-link sidebartoggler hidden-sm-down text-muted  " href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
                    
                    <li className="nav-item hidden-sm-down search-box"> <a className="nav-link hidden-sm-down text-muted  " href="javascript:void(0)"><i className="ti-search"></i></a>
                        <form className="app-search">
                            <input type="text" className="form-control" placeholder="Search here" /> <a className="srh-btn"><i className="ti-close"></i></a> </form>
                    </li> 
                </ul>
            </div>
        </nav>
    </div>
    );
  }
}

export default DashboardHeader;
