import { isNotNullish, Parameter, UseQueryParams } from '@/lib';
import { rankingApi } from './rankingApi';
import { AxiosError } from 'axios';
import {
  BatterRankingResponse,
  PitcherRankingResponse,
} from '../../types/ranking';
import { useQuery } from '@tanstack/react-query';
import { OverallPitcherRank } from '@/features/common/types/pitchers';
import { OverallBatterRank } from '@/features/common/types/batters';

// 랭킹 쿼리 키
export const RANKING_API_QUERY_KEY = {
  /* 투수 */
  GET_PITCHER_ERA_TOP3: (
    params?: Parameter<typeof rankingApi.getPitcherEraTop3>
  ) => ['pitcher-era-top3', params].filter(isNotNullish),
  GET_PITCHER_WIN_TOP3: (
    params?: Parameter<typeof rankingApi.getPitcherWinTop3>
  ) => ['pitcher-win-top3', params].filter(isNotNullish),
  GET_KT_PITCHER_RANKING: (
    params?: Parameter<typeof rankingApi.getKTPitcherRanking>
  ) => ['ktpitcher-ranking', params].filter(isNotNullish),
  GET_ALL_PITCHER_RANKING: (
    params?: Parameter<typeof rankingApi.getAllPitcherRanking>
  ) => ['allpitcher-ranking', params].filter(isNotNullish),
  /* 타자 */
  GET_BATTER_HRA_TOP3: (
    params?: Parameter<typeof rankingApi.getBatterHraTop3>
  ) => ['batter-hra-top3', params].filter(isNotNullish),
  GET_BATTER_HR_TOP3: (params?: Parameter<typeof rankingApi.getBatterHrTop3>) =>
    ['batter-hr-top3', params].filter(isNotNullish),
  GET_KT_BATTER_RANKING: (
    params?: Parameter<typeof rankingApi.getKTBatterRanking>
  ) => ['ktbatter-ranking', params].filter(isNotNullish),
  GET_ALL_BATTER_RANKING: (
    params?: Parameter<typeof rankingApi.getAllBatterRanking>
  ) => ['allbatter-ranking', params].filter(isNotNullish),
};

/* 투수 */
export function useGetPitcherEraTop3(
  params?: UseQueryParams<
    typeof rankingApi.getPitcherEraTop3,
    AxiosError,
    PitcherRankingResponse,
    OverallPitcherRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_PITCHER_ERA_TOP3(),
    queryFn: async () => {
      const response = await rankingApi.getPitcherEraTop3();
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetPitcherWinTop3(
  params?: UseQueryParams<
    typeof rankingApi.getPitcherWinTop3,
    AxiosError,
    PitcherRankingResponse,
    OverallPitcherRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_PITCHER_WIN_TOP3(),
    queryFn: async () => {
      const response = await rankingApi.getPitcherWinTop3();
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetKTPitcherRanking(
  params?: UseQueryParams<
    typeof rankingApi.getKTPitcherRanking,
    AxiosError,
    PitcherRankingResponse,
    OverallPitcherRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_KT_PITCHER_RANKING(params?.variables),
    queryFn: async () => {
      const response = await rankingApi.getKTPitcherRanking(params?.variables);
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetAllPitcherRanking(
  params?: UseQueryParams<
    typeof rankingApi.getAllPitcherRanking,
    AxiosError,
    PitcherRankingResponse,
    OverallPitcherRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_ALL_PITCHER_RANKING(params?.variables),
    queryFn: async () => {
      const response = await rankingApi.getAllPitcherRanking(params?.variables);
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

/* 타자 */
export function useGetBatterHraTop3(
  params?: UseQueryParams<
    typeof rankingApi.getBatterHraTop3,
    AxiosError,
    BatterRankingResponse,
    OverallBatterRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_BATTER_HRA_TOP3(),
    queryFn: async () => {
      const response = await rankingApi.getBatterHraTop3();
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetBatterHrTop3(
  params?: UseQueryParams<
    typeof rankingApi.getBatterHrTop3,
    AxiosError,
    BatterRankingResponse,
    OverallBatterRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_BATTER_HR_TOP3(),
    queryFn: async () => {
      const response = await rankingApi.getBatterHrTop3();
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetKTBatterRanking(
  params?: UseQueryParams<
    typeof rankingApi.getKTBatterRanking,
    AxiosError,
    BatterRankingResponse,
    OverallBatterRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_KT_BATTER_RANKING(params?.variables),
    queryFn: async () => {
      const response = await rankingApi.getKTBatterRanking(params?.variables);
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetAllBatterRanking(
  params?: UseQueryParams<
    typeof rankingApi.getAllBatterRanking,
    AxiosError,
    BatterRankingResponse,
    OverallBatterRank[]
  >
) {
  return useQuery({
    queryKey: RANKING_API_QUERY_KEY.GET_ALL_BATTER_RANKING(params?.variables),
    queryFn: async () => {
      const response = await rankingApi.getAllBatterRanking(params?.variables);
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}
