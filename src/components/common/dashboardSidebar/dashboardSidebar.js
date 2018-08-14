/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../store/configureStore';
import { logout } from '../../../store/actions/loginActions';
import { push } from 'connected-react-router'
// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class DashboardSiderBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.logout()
    }

  render() {
    return (
        <div className="left-sidebar">
        <div className="scroll-sidebar">
            <nav className="sidebar-nav">
                <ul id="sidebarnav">
                    <li className="nav-devider"></li>
                    <li><NavLink to="/dashboard/admins"><i className="fa fa-user-circle-o"></i><span className="hide-menu">Admin</span></NavLink></li>
                    <li><NavLink to="/dashboard/vehicle-owners"><i className="fa fa-user"></i><span className="hide-menu">Vehicle Owner</span></NavLink></li>
                    <li><NavLink to="/dashboard/vehicles"><i className="fa fa-truck"></i><span className="hide-menu">Vehicle</span></NavLink></li>
                    <li><NavLink to="/dashboard/drivers"><i className="fa fa-bus"></i><span className="hide-menu">Driver</span></NavLink></li>
                    <li><NavLink to="/dashboard/business-owners"><i className="fa fa-users"></i><span className="hide-menu">Business Owner</span></NavLink></li>
                    <li onClick={() => this.onLogout()}><i className="fa fa-sign-out"></i><span className="hide-menu">Log Out</span></li>
                </ul>
            </nav>
        </div>
    </div>
    );
  }
}

DashboardSiderBar.propTypes = {
    logout: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state, ownProps) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }


export default connect(mapStateToProps, { logout })(DashboardSiderBar);
