import instance from '@/lib/axios/instance';
import { ApiRoutes } from '@/constants/route';
import { HighlightResponse, HighlightListDto } from '@/features/media/types';

export const highlightApi = {
  getHighlightList: async (
    params?: HighlightListDto
  ): Promise<HighlightResponse> => {
    const response = await instance.get(ApiRoutes.Highlight, { params });
    return response.data;
  },
};
