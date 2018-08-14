/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../../store/configureStore';
import { login } from '../../../../store/actions/loginActions';
import { push } from 'connected-react-router'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
            isLoading: false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        this.setState({ errors: {}, isLoading: true });
        this.props.login({email, password}).then(() => {
            // toastr.success("You have successfully been login.");
            store.dispatch(push('/dashboard'))
        }).catch(error => {
            if (error.response == undefined) {
                // toastr.error("An error occured while submitting form.");
                this.setState({isLoading: false });
            } else{
                if (error.response.status == 401) {
                    // toastr.error(error.response.data.message);
                    this.setState({isLoading: false });
                }
                else {
                    // toastr.error("An error occured while submitting form.");
                    this.setState({isLoading: false });
                }
            }
        });
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
  render() {
    return (
      <div className="unix-login">
      <div className="container-fluid">
          <div className="row justify-content-center">
              <div className="col-lg-4">
                  <div className="login-content card">
                      <div className="login-form">
                        <h4><NavLink to="/" role="navigation" >Eburu<span className="sr-only">(current)</span></NavLink></h4>
                          <form onSubmit={this.onSubmit}>
                              <div className="form-group">
                                  <label>Email address</label>
                                  <input value={this.state.email} onChange={this.onChange} type="email" className="form-control" placeholder="Email" name="email" />
                              </div>
                              <div className="form-group">
                                  <label>Password</label>
                                  <input value={this.state.password} onChange={this.onChange} type="password" className="form-control" placeholder="Password" name="password" />
                              </div>
                              <div className="checkbox">
                                  <label>
                      <input type="checkbox" /> Remember Me
                    </label>
                                  <label className="pull-right">
                      <a href="#">Forgotten Password?</a>
                    </label>

                              </div>
                              <button disabled={this.state.isLoading} type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Sign in</button>
                              <div className="register-link m-t-15 text-center">
                                  <p>Don't have account ? <NavLink to="/auth/signup" role="navigation" >Sign Up Here<span className="sr-only">(current)</span></NavLink></p>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

    );
  }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state, ownProps) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }
  
  export default connect(mapStateToProps, { login })(LoginPage);
  
