/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import store from '../../../../store/configureStore';
import { register } from '../../../../store/actions/registerAction';
import { push } from 'connected-react-router'

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class SignupPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastName: "",
            firstName :  "",
            email    :  "",
            password :  "",
            phoneNumber: "",
            serverResp :"",
            isLoading: false,
            dErrors :{}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onchange = this.onchange.bind(this);
      }
    
      onchange(e){
        this.setState({ [e.target.name] : e.target.value,});
      }
    
      onSubmit(e){
        e.preventDefault();
        const { lastName, email, password, firstName, phoneNumber} = this.state;
        const user = { phone_number : phoneNumber, first_name: firstName, last_name: lastName, user : { email: email, password: password }}
        this.setState({ dErrors: {}, isLoading: true });
        this.props.register(user).then(() => {
            // toastr.success("You have successfully been signed up.");
            store.dispatch(push('/auth/login'));
        }).catch(error => {
            if (error.response == undefined) {
                // toastr.error("An error occured while submitting form.");
                this.setState({ isLoading: false });
            } else{
                if (error.response.status == 409) {
                    // toastr.error("Username already exist");
                    this.setState({isLoading: false });
                }
                else {
                    // toastr.error("An error occured while submitting form.");
                    this.setState({isLoading: false });
                }
            }
        });
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
                                        <label>First Name</label>
                                        <input value={this.state.firstName} onChange={this.onchange} type="text" name="firstName" class="form-control" placeholder="First Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input value={this.state.lastName} onChange={this.onchange} type="text" name="lastName" class="form-control" placeholder="Last Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input value={this.state.phoneNumber} onChange={this.onchange} type="text" name="phoneNumber" class="form-control" placeholder="Phone Name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email address</label>
                                        <input value={this.state.email} onChange={this.onchange} type="email" name="email" class="form-control" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label> 
                                        <input value={this.state.password} onChange={this.onchange} type="password" name="password" class="form-control" placeholder="Password" />
                                    </div>
                                    <div className="checkbox">
                                        <label>
										<input type="checkbox" /> Agree the terms and policy
									</label>
                                    </div>
                                    <button type="submit" disabled={this.state.isLoading} className="btn btn-primary btn-flat m-b-30 m-t-30">Register</button>
                                    <div className="register-link m-t-15 text-center">
                                        <p>Already have account ? <NavLink to="/auth/login" role="navigation" >Sign In<span className="sr-only">(current)</span></NavLink></p>
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

SignupPage.PropTypes = {
    register: PropTypes.func.isRequired
}

export default connect(null, { register })(SignupPage);
