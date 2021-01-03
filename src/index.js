import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './Login';
import App from './App';
import Profile from './profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/login" component={Login} />
      <Route exact={true} path="/profile" component={Profile} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
