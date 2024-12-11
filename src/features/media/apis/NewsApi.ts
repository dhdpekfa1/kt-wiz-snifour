import { AxiosInstance } from 'axios';

import {
  NewsDetailDto,
  NewsListDto,
  NewsResponse,
} from '@/features/media/types/news';
import { ApiRoutes } from '@/constants/route';
import { toUrl } from '@/lib/routes';
import instance from '@/lib/axios/instance';

export class NewsApi {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance = instance) {
    this.axios = axios;
  }

  async getList(params?: NewsListDto): Promise<NewsResponse> {
    const { data } = await this.axios.get(ApiRoutes.News, { params });
    return data;
  }

  async getBySeq({ artcSeq }: NewsDetailDto): Promise<NewsResponse> {
    const path = toUrl(ApiRoutes.NewsDetail, { artcSeq });
    const { data } = await this.axios.get(path);
    return data;
  }
}

export const newsApi = new NewsApi();
