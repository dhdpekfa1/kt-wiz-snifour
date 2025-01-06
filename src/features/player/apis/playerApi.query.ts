import { isNotNullish, Parameter, UseQueryParams } from '@/lib';
import { playerApi } from './playerApi';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import {
  CoachDetailResponse,
  CoachItem,
  CoachListItem,
  PlayerListResponse,
} from '../types/player';

export const PLAYER_API_QUERY_KEY = {
  GET_COACH_LIST: () => ['coach-list'],
  GET_COACH_DETAIL: (params?: Parameter<typeof playerApi.getCoachDetail>) =>
    ['coach-detail', params].filter(isNotNullish),
};

export function useGetCoachList(
  params?: UseQueryParams<
    typeof playerApi.getCoachList,
    AxiosError,
    PlayerListResponse,
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
