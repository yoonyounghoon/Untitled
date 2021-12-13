import axios from 'axios';
import { BASE_URL } from '../lib/constants';
import { getToken } from '../utils/getToken';

// 토큰 필요없을 때 사용
export const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰 필요할때 사용
export const auth = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getToken()}`,
  },
});

// auth.interceptors.request.use(
//   function (config) {
//     const user = JSON.parse(sessionStorage.getItem('accessToken'));
//     config.headers.Authorization = `Bearer ${user}`;
//     return config;
//   },
//   function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   },
// );
