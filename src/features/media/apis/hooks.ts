import { API_ERROR_MESSAGES, getErrorMessage } from '@/constants/error';
import { ApiRoutes } from '@/constants/route';
import { toUrl } from '@/lib/route';
import axios, { AxiosResponse } from 'axios';

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

type QueryParams = Record<string, string | number | undefined>;

const useFetch = async <T, P extends QueryParams = QueryParams>(
  route: ApiRoutes,
  params?: P
): Promise<ApiResponse<T>> => {
  try {
    const path = toUrl(route, params);
    const url = `${API_URL}/${path}`;

    const response: AxiosResponse<ApiResponse<T>> = await axios.get(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      throw new Error(getErrorMessage(status));
    }
    throw new Error(API_ERROR_MESSAGES.DEFAULT);
  }
};
export { useFetch };
export type { ApiResponse, QueryParams };
