import axios, { AxiosError } from 'axios';
import { apiLogger } from '@/lib';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const isDev = import.meta.env.MODE === 'development';

const instance = axios.create({
  baseURL: API_URL || 'http://localhost:5001',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    if (isDev) {
      apiLogger({
        method: 'info',
        status: 'REQUEST',
        reqData: config,
        resData: {
          url: config.url,
          method: config.method,
          params: config.params,
          data: config.data,
        },
      });
    }
    return config;
  },
  (error) => {
    if (isDev) {
      apiLogger({
        method: 'error',
        status: 'ERROR',
        reqData: error.config,
        resData: error,
      });
    }
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use(
  (response) => {
    if (isDev) {
      apiLogger({
        method: 'info',
        status: response.status,
        reqData: response.config,
        resData: response.data,
      });
    }
    return response.data;
  },
  (error: AxiosError) => {
    if (isDev) {
      apiLogger({
        method: 'error',
        status: error.response?.status ?? 'ERROR',
        reqData: error.config,
        resData: error.response?.data,
      });
    }
    throw error;
  }
);

export default instance;
