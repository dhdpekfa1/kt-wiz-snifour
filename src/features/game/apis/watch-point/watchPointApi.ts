import instance from '@/lib/axios/instance';
import { ApiRoutes } from '@/constants/route';

import { WatchPointData } from '../../types/watch-point';

export const watchPointApi = {
  // 관전포인트
  getWatchPoint: async (
    gameDate: string,
    gmkey: string
  ): Promise<WatchPointData> => {
    const response = await instance.get(ApiRoutes.WatchPoint, {
      params: { gameDate, gmkey },
    });
    return response.data.data;
  },
};
