// import api from '@helpers/ApiLibrary';
import {
  AUTH_USER,
  AUTH_ERROR
} from './types';
import {
  signupApi,
  signinApi
} from '@apis/api';

import { api } from '@helpers/ApiLibrary';


export const signup = (formProps) => async dispatch => {
  try {
    return new Promise((resolve, reject) => {
      signupApi(formProps).then(response => {
        if (response.data.err) {
          dispatch({
            type: AUTH_ERROR,
            payload: 'Email in use'
          });
          reject();
        } else {
          let token = response.headers.authorization;
          dispatch({
            type: AUTH_USER,
            payload: token
          });
          api.setAuthorizationToken(token);
          localStorage.setItem('token', token);
          resolve();
        }
      });
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    });
  }
};




export const signin = (formProps) => async dispatch => {
  
  try {
    return new Promise((resolve, reject) => {
      signinApi(formProps).then(response => {
        if (response.data.err) {
          dispatch({
            type: AUTH_ERROR,
            payload: 'User not Found'
          });
          reject();
        } else {
          let token = response.headers.authorization;
          dispatch({
            type: AUTH_USER,
            payload: token
          });
          api.setAuthorizationToken(token);
          localStorage.setItem('token', token);
          resolve();
        }
      });
    });
    // signinApi(formProps).then(response => {
    //   let token = response.headers.authorization;
    //   dispatch({
    //     type: AUTH_USER,
    //     payload: token
    //   });
    //   localStorage.setItem('token', token);
    //   callback();
    // });


  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials'
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};

// export const getDishes = (formProps, callback) => async dispatch => {
//   console.log(formProps);
//   try {
//     const response = await api.post(
//       'http://localhost:3090/signin',
//       formProps
//     );
//     dispatch({ type: AUTH_USER, payload: response.data.token });
//     localStorage.setItem('token', response.data.token);
//     callback();
//   } catch (e) {
//     dispatch({ type: AUTH_ERROR, payload: 'Invalid login credentials' });
//   }
// };
