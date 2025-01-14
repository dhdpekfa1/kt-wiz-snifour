import { ApiRoutes } from '@/constants/route';
import {
  StoryDetailDto,
  StoryDetailResponse,
  StoryListDto,
  StoryResponse,
} from '@/features/media/types/story';
import instance from '@/lib/axios/instance';

export const storyApi = {
  getStoryList: async (params?: StoryListDto): Promise<StoryResponse> => {
    const response = await instance.get(ApiRoutes.Story, { params });
    return response.data;
  },

  getStoryBySeq: async (
    params?: StoryDetailDto
  ): Promise<StoryDetailResponse> => {
    const response = await instance.get(ApiRoutes.StoryDetail, { params });
    return response.data;
  },
};
