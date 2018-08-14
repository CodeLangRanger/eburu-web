/* eslint-disable import/no-named-as-default */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createAdmin } from '../../store/actions/adminActions';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class CreateDriver extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            lastName: "",
            firstName :  "",
            email    :  "",
            password :  "",
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
        const { lastName, email, password, firstName} = this.state;
        const user = { first_name: firstName, last_name: lastName, user : { email: email, password: password }}
        this.setState({ dErrors: {}, isLoading: true });
        this.props.createAdmin(user).then(() => {
            // toastr.success("You have successfully been signed up.");
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card card-outline-primary">
                        <div className="card-header">
                            <h4 className="m-b-0 text-white">Create Driver</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-body">
                                    <div className="row p-t-20">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="control-label">First Name</label>
                                                <input value={this.state.firstName} onChange={this.onchange} type="text" name="firstName" className="form-control" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Last Name</label>
                                            <input value={this.state.lastName} onChange={this.onchange} type="text" name="lastName" className="form-control form-control-danger" placeholder="Last Name" />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Gender</label>
                                            <select className="form-control custom-select">
                                                <option value="">Male</option>
                                                <option value="">Female</option>
                                            </select>
                                
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Email</label>
                                            <input value={this.state.email} onChange={this.onchange} type="text" name="email" className="form-control" placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Password</label>
                                            <input value={this.state.password} onChange={this.onchange} type="password" name="password" className="form-control" placeholder="Password" /> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-actions">
                                <button type="submit" disabled={this.state.isLoading}  className="btn btn-success"> <i className="fa fa-check"></i> Save</button>
                                <button type="button" className="btn btn-inverse">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}

CreateDriver.propTypes = {
    createAdmin: PropTypes.func.isRequired
  }
  
  function mapStateToProps(state, ownProps) {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    }
  }
  
  export default connect(mapStateToProps, { createAdmin })(CreateDriver);
  








           