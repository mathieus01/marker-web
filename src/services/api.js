import axios from 'axios';
import { getToken, logout } from './auth';

const api = axios.create({
  baseURL: 'http://api.markeer.com.br/',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      logout();
      window.location.replace('www.markeer.com.br');
    }

    return error;
  }
);

export default api;
