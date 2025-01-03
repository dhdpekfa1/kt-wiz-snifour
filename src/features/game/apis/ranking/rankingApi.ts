import instance from '@/lib/axios/instance';
import {
  BatterRankingResponse,
  PitcherRankingResponse,
  RankingDto,
} from '../../types/ranking';
import { ApiRoutes } from '@/constants/route';

// ranking api
export const rankingApi = {
  // 투수
  getPitcherEraTop3: async (): Promise<PitcherRankingResponse> => {
    const response = await instance.get(ApiRoutes.PitcherEraTop3);
    return response.data;
  },
  getPitcherWinTop3: async (): Promise<PitcherRankingResponse> => {
    const response = await instance.get(ApiRoutes.PitcherWinTop3);
    return response.data;
  },
  getKTPitcherRanking: async (
    params?: RankingDto
  ): Promise<PitcherRankingResponse> => {
    const response = await instance.get(ApiRoutes.KtPitcherRank, { params });
    return response.data;
  },
  getAllPitcherRanking: async (
    params?: RankingDto
  ): Promise<PitcherRankingResponse> => {
    const response = await instance.get(ApiRoutes.AllPitcherRank, { params });
    return response.data;
  },
  // 타자
  getBatterHraTop3: async (): Promise<BatterRankingResponse> => {
    const response = await instance.get(ApiRoutes.BatterHraTop3);
    return response.data;
  },
  getBatterHrTop3: async (): Promise<BatterRankingResponse> => {
    const response = await instance.get(ApiRoutes.BatterHrTop3);
    return response.data;
  },
  getKTBatterRanking: async (
    params?: RankingDto
  ): Promise<BatterRankingResponse> => {
    const response = await instance.get(ApiRoutes.KTBatterRank, { params });
    return response.data;
  },
  getAllBatterRanking: async (
    params?: RankingDto
  ): Promise<BatterRankingResponse> => {
    const response = await instance.get(ApiRoutes.AllBatterRank, { params });
    return response.data;
  },
};
