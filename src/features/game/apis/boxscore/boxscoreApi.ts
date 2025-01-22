import { ApiRoutes } from '@/constants/route';
import { BoxscoreData } from '@/features/game';
import instance from '@/lib/axios/instance';

export const boxscoreApi = {
  // 박스스코어 경기 데이터
  getMatchData: async (
    gameDate: string,
    gmkey: string
  ): Promise<BoxscoreData> => {
    const response = await instance.get(ApiRoutes.Boxscore, {
      params: { gameDate, gmkey },
    });
    return response.data.data;
  },
};
