import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Header from '../components/common/header/header';
import HomePage from '../containers/pages/Home/Home';

// Sub Layouts

const AuthorizeRoute = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </div>
)

export default AuthorizeRoute;