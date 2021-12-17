import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../lib/constants';
import { getToken } from '../utils/getToken';

class HTTP {
  axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  get(url: string, contentType?: string) {
    return this.axios.get(
      `${url}`,
      contentType && {
        headers: {
          'Content-Type': contentType,
        },
      },
    );
  }

  post(url: string, body: any, contentType?: string) {
    return this.axios.post(
      `${url}`,
      body,
      contentType && {
        headers: {
          'Content-Type': contentType,
        },
      },
    );
  }

  delete(url: string, contentType?: string) {
    return this.axios.delete(
      `${url}`,
      contentType && {
        headers: {
          'Content-Type': contentType,
        },
      },
    );
  }

  patch(url: string, body: any, contentType?: string) {
    return this.axios.post(
      `${url}`,
      body,
      contentType && {
        headers: {
          'Content-Type': contentType,
        },
      },
    );
  }
}

export const Client = new HTTP();

Client.axios.interceptors.request.use(
  function (config) {
    // 요청을 보내기 전에 수행할 일
    // ...
    console.log(config.headers);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${getToken()}`,
    };
    return config;
  },
  function (error) {
    // 오류 요청을 보내기전 수행할 일
    // ...
    return Promise.reject(error);
  },
);
