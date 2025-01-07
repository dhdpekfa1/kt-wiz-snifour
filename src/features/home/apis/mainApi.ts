import { ApiRoutes } from '@/constants/route';
import instance from '@/lib/axios/instance';
import { WizRankResponse } from '../types';

export const mainApi = {
  getWizRank: async (): Promise<WizRankResponse> => {
    const response = await instance.get(ApiRoutes.WizRank);
    return response.data;
  },
};
