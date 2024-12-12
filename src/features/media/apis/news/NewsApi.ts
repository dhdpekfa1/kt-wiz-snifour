import instance from '@/lib/axios/instance';
import { ApiRoutes } from '@/constants/route';
import {
  NewsDetailDto,
  NewsListDto,
  NewsResponse,
  NewsDetailResponse,
} from '@/features/media/types';

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
};
