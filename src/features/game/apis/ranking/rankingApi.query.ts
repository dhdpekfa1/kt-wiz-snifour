import { isNotNullish, Parameter, UseQueryParams } from '@/lib';
import { rankingApi } from './rankingApi';
import { AxiosError } from 'axios';
import { RankingResponse } from '../../types/ranking';
import { useQuery } from '@tanstack/react-query';
import {
  OverallPitcherRank,
  PitcherERA,
  PitcherWins,
} from '@/features/common/types/pitchers';

// 랭킹 쿼리 키
export const RANKING_API_QUERY_KEY = {
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
};

export function useGetPitcherEraTop3(
  params?: UseQueryParams<
    typeof rankingApi.getPitcherEraTop3,
    AxiosError,
    RankingResponse,
    PitcherERA[]
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
    RankingResponse,
    PitcherWins[]
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
    RankingResponse,
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
    RankingResponse,
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
