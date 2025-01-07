import { useQuery } from '@tanstack/react-query';
import { mainApi } from './mainApi';
import { isNotNullish, Parameter, UseQueryParams } from '@/lib';
import { AxiosError } from 'axios';
import {
  MainWizVideoResponse,
  Video,
  WizRank,
  WizRankResponse,
} from '../types';

export const MAIN_API_QUERY_KEY = {
  GET_WIZ_RANK: () => ['wiz-rank'],
  GET_MAIN_WIZ_VIDEO: (params: Parameter<typeof mainApi.getMainWizVideo>) =>
    ['main-wiz-video', params].filter(isNotNullish),
};

export function useGetWizRank(
  params?: UseQueryParams<
    typeof mainApi.getWizRank,
    AxiosError,
    WizRankResponse,
    WizRank
  >
) {
  return useQuery({
    queryKey: MAIN_API_QUERY_KEY.GET_WIZ_RANK(),
    queryFn: async () => {
      const response = await mainApi.getWizRank();
      return response;
    },
    select: (data) => {
      return data.data.ktWizTeamRank;
    },
    ...params?.options,
  });
}

export function useGetMainWizVideo(
  params: UseQueryParams<
    typeof mainApi.getMainWizVideo,
    AxiosError,
    MainWizVideoResponse,
    Video[]
  >
) {
  return useQuery({
    queryKey: MAIN_API_QUERY_KEY.GET_MAIN_WIZ_VIDEO(params.variables),
    queryFn: async () => {
      const response = await mainApi.getMainWizVideo(params.variables);
      return response;
    },
    select: (data) => {
      return data.data.list;
    },
    ...params.options,
  });
}
