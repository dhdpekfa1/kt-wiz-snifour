import instance from '@/lib/axios/instance';
import {
  CoachDetailResponse,
  PlayerDetailResponse,
  PlayerDto,
  CoachListResponse,
  PlayerListResponse,
} from '../types/player';
import { ApiRoutes } from '@/constants/route';
import {
  BatterSeasonSummaryBase,
  PitcherSeasonSummaryBase,
  PlayerBase,
} from '../types/detail';

export const playerApi = {
  getCoachList: async (): Promise<CoachListResponse> => {
    const response = await instance.get(ApiRoutes.CoachList);
    return response.data;
  },
  getCoachDetail: async (params?: PlayerDto): Promise<CoachDetailResponse> => {
    const response = await instance.get(ApiRoutes.CoachDetail, { params });
    return response.data;
  },
  getPlayerList: async (params: PlayerDto): Promise<PlayerListResponse> => {
    const { position } = params;

    switch (position) {
      case 'pitcher': {
        const response = await instance.get(ApiRoutes.PitcherList);
        return response.data;
      }
      case 'catcher': {
        const response = await instance.get(ApiRoutes.CatcherList);
        return response.data;
      }
      case 'infielder': {
        const response = await instance.get(ApiRoutes.InfielderList);
        return response.data;
      }
      case 'outfielder': {
        const response = await instance.get(ApiRoutes.OutfielderList);
        return response.data;
      }
      default: {
        return { data: [] };
      }
    }
  },
  getPlayerDetail: async (params: PlayerDto): Promise<PlayerDetailResponse> => {
    const { position, ...restParams } = params;

    switch (position) {
      case 'pitcher': {
        const response = await instance.get(ApiRoutes.PitcherDetail, {
          params: restParams,
        });
        return response.data;
      }
      case 'catcher': {
        const response = await instance.get(ApiRoutes.CatcherDetail, {
          params: restParams,
        });
        return response.data;
      }
      case 'infielder': {
        const response = await instance.get(ApiRoutes.InfielderDetail, {
          params: restParams,
        });
        return response.data;
      }
      case 'outfielder': {
        const response = await instance.get(ApiRoutes.OutfielderDetail, {
          params: restParams,
        });
        return response.data;
      }
      default: {
        return {
          data: {
            gameplayer: {} as PlayerBase,
            recentgamerecordlist: [],
            recentgamerecordlistfutures: [],
            seasonsummary: {} as
              | PitcherSeasonSummaryBase
              | BatterSeasonSummaryBase,
            seasonsummaryfutures: {} as
              | PitcherSeasonSummaryBase
              | BatterSeasonSummaryBase,
            yearrecordlist: [],
          },
        };
      }
    }
  },
};
