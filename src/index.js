import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/configureStore';
import setAuthorizationToken from './utils/setAuthorizationToken';
import history from './utils/history';
import App from './App';
import './index.css';
import { setCurrentUser } from './store/actions/loginActions';


if (localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(localStorage.jwtToken));
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App history={history}/>
    </Router>
  </Provider>,
  document.getElementById('root')
)

