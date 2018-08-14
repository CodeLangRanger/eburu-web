import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom';
import DashboardHeader from '../components/common/dashboardHeader/dashboardHeader';
import DashboardFooter from '../components/common/dashboardFooter/dashboardFooter';
import DashboardSiderBar from '../components/common/dashboardSidebar/dashboardSidebar';
import Admins from '../containers/admin/Admins';
import CreateAdmin from '../containers/admin/CreateAdmin';
import Vehicles from '../containers/vehicle/Vehicles';
import CreateVehicle from '../containers/vehicle/CreateVehicle';
import VehicleOwners from '../containers/vehicleOwner/VehicleOwners';
import BusinessOwners from '../containers/businessOwner/BusinessOwners';
import CreateDriver from '../containers/driver/CreateDriver';
import Drivers from '../containers/driver/Drivers';


const DashboardRoute = () => (
  <div>
    <DashboardHeader />
    <DashboardSiderBar />
    <div className="page-wrapper">
      <Switch>
        <Route path='/dashboard/create-admin' component={CreateAdmin} />
        <Route path='/dashboard/admins' component={Admins} />
        <Route path='/dashboard/vehicles' component={Vehicles} />
        <Route path='/dashboard/create-vehicle' component={CreateVehicle} />
        <Route path='/dashboard/vehicle-owners' component={VehicleOwners} />
        <Route path='/dashboard/business-owners' component={BusinessOwners} />
        <Route path='/dashboard/create-driver' component={CreateDriver} />
        <Route path='/dashboard/drivers' component={Drivers} />
        <Redirect to='/dashboard/create-admin' />
      </Switch>
    </div>
    <DashboardFooter />
  </div>
)

export default DashboardRoute
