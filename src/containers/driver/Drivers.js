import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Drivers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

  render() {
    return (
        <div>
        <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-primary">Drivers</h3> </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Drivers</a></li>
                    </ol>
                </div>
            </div>
        <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-subtitle"><NavLink to="/dashboard/create-driver" class="btn btn-success waves-effect waves-light">+ Create Driver</NavLink></h6>
                        <div className="table-responsive m-t-40">
                            <table id="example23" className="display nowrap table table-hover table-striped table-bordered" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Tiger Nixon</td>
                                        <td>System Architect</td>
                                        <td>Edinburgh</td>
                                        <td>61</td>
                                        <td>2011/04/25</td>
                                        <td>$320,800</td>
                                    </tr>
                                    <tr>
                                        <td>Garrett Winters</td>
                                        <td>Accountant</td>
                                        <td>Tokyo</td>
                                        <td>63</td>
                                        <td>2011/07/25</td>
                                        <td>$170,750</td>
                                    </tr>
                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
  }
}

Drivers.PropTypes = {
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Drivers);
