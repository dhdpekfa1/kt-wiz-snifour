import { Parameter, UseQueryParams, isNotNullish } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { CoachListItem, PlayerListItem } from '../types/list';
import {
  CoachDetailResponse,
  CoachItem,
  CoachListResponse,
  PlayerDetailResponse,
  PlayerItem,
  PlayerListResponse,
} from '../types/player';
import { playerApi } from './playerApi';

export const PLAYER_API_QUERY_KEY = {
  GET_COACH_LIST: () => ['coach-list'],
  GET_COACH_DETAIL: (params?: Parameter<typeof playerApi.getCoachDetail>) =>
    ['coach-detail', params].filter(isNotNullish),
  GET_PLAYER_LIST: (params: Parameter<typeof playerApi.getPlayerList>) => [
    'player-list',
    params,
  ],
  GET_PLAYER_DETAIL: (params: Parameter<typeof playerApi.getPlayerDetail>) => [
    'player-detail',
    params,
  ],
};

export function useGetCoachList(
  params?: UseQueryParams<
    typeof playerApi.getCoachList,
    AxiosError,
    CoachListResponse,
    CoachListItem[]
  >
) {
  return useQuery({
    queryKey: PLAYER_API_QUERY_KEY.GET_COACH_LIST(),
    queryFn: async () => {
      const response = await playerApi.getCoachList();
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params?.options,
  });
}

export function useGetCoachDetail(
  params?: UseQueryParams<
    typeof playerApi.getCoachDetail,
    AxiosError,
    CoachDetailResponse,
    CoachItem
  >
) {
  return useQuery({
    queryKey: PLAYER_API_QUERY_KEY.GET_COACH_DETAIL(params?.variables),
    queryFn: async () => {
      const response = await playerApi.getCoachDetail(params?.variables);
      return response;
    },
    select: (data) => {
      return data.data.coachstep;
    },
    ...params?.options,
  });
}

export function useGetPlayerList(
  params: UseQueryParams<
    typeof playerApi.getPlayerList,
    AxiosError,
    PlayerListResponse,
    PlayerListItem[]
  >
) {
  return useQuery({
    queryKey: PLAYER_API_QUERY_KEY.GET_PLAYER_LIST(params.variables),
    queryFn: async () => {
      const response = await playerApi.getPlayerList(params.variables);
      return response;
    },
    ...params.options,
  });
}

export function useGetPlayerDetail(
  params: UseQueryParams<
    typeof playerApi.getPlayerDetail,
    AxiosError,
    PlayerDetailResponse,
    PlayerItem
  >
) {
  return useQuery({
    queryKey: PLAYER_API_QUERY_KEY.GET_PLAYER_DETAIL(params.variables),
    queryFn: async () => {
      const response = await playerApi.getPlayerDetail(params.variables);
      return response;
    },
    select: (data) => {
      return data.data;
    },
    ...params.options,
  });
}
