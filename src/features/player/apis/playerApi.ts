import instance from '@/lib/axios/instance';
import {
  CoachDetailResponse,
  PlayerDto,
  PlayerListResponse,
} from '../types/player';
import { ApiRoutes } from '@/constants/route';

export const playerApi = {
  getCoachList: async (): Promise<PlayerListResponse> => {
    const response = await instance.get(ApiRoutes.CoachList);
    return response.data;
  },
  getCoachDetail: async (params?: PlayerDto): Promise<CoachDetailResponse> => {
    const response = await instance.get(ApiRoutes.CoachDetail, { params });
    return response.data;
  },
};
