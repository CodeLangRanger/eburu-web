import React from 'react';
import ReactDOM from 'react-dom';
import history from './utils/history';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App history={history} />, div);
});
