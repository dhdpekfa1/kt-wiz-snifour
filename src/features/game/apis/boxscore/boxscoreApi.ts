import { ApiRoutes } from '@/constants/route';
import instance from '@/lib/axios/instance';

import { BoxscoreData } from '../../types/boxscore';

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
  // 주요 기록 선수 사진
};
