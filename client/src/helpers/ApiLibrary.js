import axios from 'axios';
import constants from '../constants';

class ApiLibrary {
  constructor() {
    let timeout = Number(constants.REQUEST_TIMEOUT);

    this.instance = axios.create({
      baseURL: constants.BACKEND_URL,
      timeout: timeout
    });
    this.addInterceptor();
  }
  addInterceptor() {
    this.instance.interceptors.request.use(request => {
      if (localStorage.getItem('token')){ 
        request.headers['Authorization'] = localStorage.getItem('token');
      }
      return request;
    }

    );

    this.instance.interceptors.response.use(
      response => response,
      error => {
        return Promise.reject(error);
      }
    );
  }
  setAuthorizationToken(token) {
    if (token) {
      this.instance.defaults.headers.common['Authorization'] = `${token}`;
    } else {
      delete this.instance.defaults.headers.common['Authorization'];
    }
  }
  request(config) {
    return this.instance.request(config);
  }
}

const api = new ApiLibrary();
export { api };
