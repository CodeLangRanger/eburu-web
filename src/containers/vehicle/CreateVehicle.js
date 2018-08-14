import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as create from '../../store/actions/vehicleActions';

class CreateVehicle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        vehicle_type: "",
        model :  "",
        make:  "",
        isLoading: false,
        errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onchange = this.onchange.bind(this);
  }

  onchange(e){
    this.setState({ [e.target.name] : e.target.value,});
  }

  onSubmit(e){
    e.preventDefault();
    const { vehicle_type, model, make} = this.state;
    const data = { vehicle_type : vehicle_type, model: model, make: make }
    this.setState({ errors: {}, isLoading: true });
    this.props.onCreate(data).then(() => {
    }).catch(error => {
        if (error.response === undefined) {
            this.setState({isLoading: false });
        } else{
            if (error.response.status === 401) {
                this.setState({isLoading: false });
            }
            else {
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
                        <h4 className="m-b-0 text-white">Create Vehicle</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-body">
                                <div className="row p-t-20">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="control-label">Vehicle Type</label>
                                            <input value={this.state.vehicle_type} onChange={this.onchange} type="text" name="vehicle_type" className="form-control" placeholder="Vehicle Type" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Model</label>
                                        <input value={this.state.model} onChange={this.onchange} type="text" name="model" className="form-control form-control-danger" placeholder="Model" />
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label">Make</label>
                                        <input value={this.state.make} onChange={this.onchange} type="text" name="make" className="form-control" placeholder="Make" />
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

CreateVehicle.PropTypes = {
  onCreate: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onCreate: (payload) => dispatch(create.createVehicle(payload))
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CreateVehicle);
