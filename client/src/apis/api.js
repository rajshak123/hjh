import { HTTPMethod } from './http';
import { api } from '@helpers/ApiLibrary';
import * as urls from './endpoints';

export const signupApi = data => {
  const request = {
    method: HTTPMethod.POST,
    url: urls.SIGNUP,
    data: data
  };
  return api.request(request);
};

export const signinApi = data => {
  const request = {
    method: HTTPMethod.POST,
    url: urls.SIGNIN,
    data: data
  };
  return api.request(request);
};


export const getProduct = () => {
  const request = {
    method: HTTPMethod.GET,
    url: urls.GET_PRODUCTLIST
  };
  return api.request(request);
};

// export const getSessionStatusApi = () => {
//   const request = {
//     method: HTTPMethod.GET,
//     url: urls.GET_SESSION_STATUS_ENDPOINT
//   };
//   return api.request(request);
// };

// export const verifyOtpApi = data => {
//   const request = {
//     method: HTTPMethod.POST,
//     url: urls.VERIFY_OTP_ENDPOINT,
//     data: data
//   };
//   return api.request(request);
// };

// export const resendOtpApi = () => {
//   const request = {
//     method: HTTPMethod.GET,
//     url: urls.RESEND_OTP_ENDPOINT
//   };
//   return api.request(request);
// };

// export const getNextQuestionsApi = () => {
//   const request = {
//     method: HTTPMethod.POST,
//     url: urls.GET_NEXT_QUESTIONS_ENDPOINT
//   };
//   return api.request(request);
// };
