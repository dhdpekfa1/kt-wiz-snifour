import { ApiRoutes } from '@/constants/route';
import {
  NewsDetailDto,
  NewsDetailResponse,
  NewsListDto,
  NewsResponse,
} from '@/features/media/types';
import instance from '@/lib/axios/instance';

export const newsApi = {
  getNewsList: async (params?: NewsListDto): Promise<NewsResponse> => {
    const response = await instance.get(ApiRoutes.News, { params });
    return response.data;
  },

  getNewsBySeq: async (params: NewsDetailDto): Promise<NewsDetailResponse> => {
    const response = await instance.get(ApiRoutes.NewsDetail, { params });
    return response.data;
  },

  getPressList: async (params?: NewsListDto): Promise<NewsResponse> => {
    const response = await instance.get(ApiRoutes.Press, { params });
    return response.data;
  },

  getPressBySeq: async (params: NewsDetailDto): Promise<NewsDetailResponse> => {
    const response = await instance.get(ApiRoutes.PressDetail, { params });
    return response.data;
  },
};
