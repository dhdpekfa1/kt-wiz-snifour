import { ApiRoutes } from '@/constants/route';
import {
  MainWizPhotoDto,
  MainWizPhotoResponse,
  MainWizVideoDto,
  MainWizVideoResponse,
  WizRankResponse,
} from '@/features/home';
import instance from '@/lib/axios/instance';

export const mainApi = {
  getWizRank: async (): Promise<WizRankResponse> => {
    const response = await instance.get(ApiRoutes.WizRank);
    return response.data;
  },
  getMainWizVideo: async (
    params: MainWizVideoDto
  ): Promise<MainWizVideoResponse> => {
    const response = await instance.get(ApiRoutes.MainWizVideo, { params });
    return response.data;
  },
  getMainWizPhoto: async (
    params: MainWizPhotoDto
  ): Promise<MainWizPhotoResponse> => {
    const response = await instance.get(ApiRoutes.MainWizPhoto, { params });
    return response.data;
  },
};
