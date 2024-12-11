import axios, { AxiosError } from 'axios';
import { apiLogger } from '@/lib';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const isDev = import.meta.env.MODE === 'development';

const instance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * 요청 인터셉터 (Request Interceptor)
 * - 요청이 전송되기 전에 실행됩니다.
 * - 인증 토큰 추가와 같은 요청 전 처리 로직을 이곳에 작성합니다. (추후 구현시 이쪽에서 작성하심 돼요)
 * - 현재는 개발 환경에서 API 요청 정보를 로깅하는 기능을 포함합니다.
 */
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

/**
 * 응답 인터셉터 (Response Interceptor)
 * - 서버로부터 응답이 도착한 후 실행됩니다.
 * - 응답 데이터를 전처리하거나 로깅하는 데 사용됩니다.
 */
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
    throw error; // 에러를 그대로 반환하여 호출한 쪽에서 처리하도록 합니다.
  }
);

export default instance;
