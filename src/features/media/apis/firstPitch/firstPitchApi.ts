import { ApiRoutes } from '@/constants/route';
import {
  FirstPitchDetailDto,
  FirstPitchDetailResponse,
  FirstPitchListDto,
  FirstPitchResponse,
} from '@/features/media/types/firstPitch';
import instance from '@/lib/axios/instance';

export const firstPitchApi = {
  getFirstPitchList: async (
    params?: FirstPitchListDto
  ): Promise<FirstPitchResponse> => {
    const response = await instance.get(ApiRoutes.FirstPitch, { params });
    return response.data;
  },
  getFirstPitchDetail: async (
    params?: FirstPitchDetailDto
  ): Promise<FirstPitchDetailResponse> => {
    const response = await instance.get(ApiRoutes.FirstPitchDetail, { params });
    return response.data;
  },
};
