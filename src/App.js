import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { hot } from 'react-hot-loader';
import DashboardRoute from './routes/DashboardRoute';
import AuthorizeRoute from './routes/AuthorizeRoute';
import AuthRoute from './routes/AuthRoute';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={AuthorizeRoute} />
        <Route path="/dashboard" component={DashboardRoute} />
        <Route path="/auth" component={AuthRoute} />
        <Redirect to="/404" />
      </Switch>
    </ConnectedRouter>

  )
}

App.propTypes = {
  history: PropTypes.object,
}
     
export default hot(module)(App);
