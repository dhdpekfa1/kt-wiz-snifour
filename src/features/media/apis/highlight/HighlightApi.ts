import { ApiRoutes } from '@/constants/route';
import {
  HighlightDetailDto,
  HighlightDetailResponse,
  HighlightListDto,
  HighlightResponse,
} from '@/features/media/types';
import instance from '@/lib/axios/instance';

export const highlightApi = {
  getHighlightList: async (
    params: HighlightListDto
  ): Promise<HighlightResponse> => {
    const response = await instance.get(ApiRoutes.Highlight, { params });
    return response.data;
  },
  getHighlightDetail: async (
    params: HighlightDetailDto
  ): Promise<HighlightDetailResponse> => {
    const response = await instance.get(ApiRoutes.HighlightDetail, { params });
    return response.data;
  },
};
