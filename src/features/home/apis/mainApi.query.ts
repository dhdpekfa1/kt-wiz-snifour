import { useQuery } from '@tanstack/react-query';
import { mainApi } from './mainApi';
import { UseQueryParams } from '@/lib';
import { AxiosError } from 'axios';
import { WizRank, WizRankResponse } from '../types';

export const MAIN_API_QUERY_KEY = {
  GET_WIZ_RANK: () => ['wiz-rank'],
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
