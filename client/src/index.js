import React from 'react';
import ReactDOM from 'react-dom';
import {
  Provider
} from 'react-redux';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import './index.css';
import App from './components/App';
import MainLayout from '@components/MainLayout';
import Signin from '@components/Auth/SignIn';
import Signup from '@components/Auth/SignUp';
import Signout from '@components/Auth/SignOut';
import Homepage from '@components/Homepage';

import store from './store';



const renderApp = () => {
  ReactDOM.render( <Provider store = {store} >
    <BrowserRouter >
      <App >
        <Route path='/' exact component={MainLayout} />
        <Route path='/signup' component={Signup} />
        <Route path='/feature' component={Homepage} />
        <Route path='/signout' component={Signout} />
        <Route path = '/signin' component = {Signin}/> 
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
  );
};

renderApp();
