import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import LoginPage from '../containers/pages/Auth/Login/Login';
import SignupPage from '../containers/pages/Auth/Signup/Signup';

const AuthRoute = () => (
  <div className="primary-layout">
      <main>
        <Switch>
          <Route path='/auth/login' component={LoginPage} />
          <Route path='/auth/signup'  component={SignupPage} />
          <Redirect to='/auth/login' />
        </Switch>
      </main>
  </div>
)

export default AuthRoute
