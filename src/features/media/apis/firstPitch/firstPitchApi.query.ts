import { ListDataType } from '@/features/media/types';
import { Parameter, UseQueryParams, isNotNullish } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { firstPitchApi } from './firstPitchApi';
import {
  FirstPitchDetailResponse,
  FirstPitchItem,
  FirstPitchResponse,
} from '../../types/firstPitch';
import { createListViewItem } from '../../services';

// 쿼리 키 정의
export const FIRSTPITCH_API_QUERY_KEY = {
  /** 시구자 목록 조회 쿼리 키 생성 */
  GET_LIST: (params?: Parameter<typeof firstPitchApi.getFirstPitchList>) =>
    ['firstPitch-list', params].filter(isNotNullish),
  GET_DETAIL: (params?: Parameter<typeof firstPitchApi.getFirstPitchDetail>) =>
    ['firstPitch-detail', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 시구자 목록 조회에 필요한 파라미터
 * @returns 리스트 타입으로 변환된 시구자 목록 데이터와 총 데이터 개수
 */
export function useGetFirstPitchList(
  params?: UseQueryParams<
    typeof firstPitchApi.getFirstPitchList,
    AxiosError,
    FirstPitchResponse, // 실제 응답
    ListDataType // 변환된 응답
  >
) {
  return useQuery({
    queryKey: FIRSTPITCH_API_QUERY_KEY.GET_LIST(params?.variables),
    queryFn: async () => {
      const response = await firstPitchApi.getFirstPitchList(params?.variables);
      return response;
    },
    select: (res: FirstPitchResponse): ListDataType => ({
      list: res.data.list
        .filter((item) => item.useYn === 'Y')
        .map(createListViewItem),
    }),
    ...params?.options,
  });
}

export function useGetFirstPitchDetail(
  params?: UseQueryParams<
    typeof firstPitchApi.getFirstPitchDetail,
    AxiosError,
    FirstPitchDetailResponse, // 실제 응답
    FirstPitchItem // 변환된 응답
  >
) {
  return useQuery({
    queryKey: FIRSTPITCH_API_QUERY_KEY.GET_DETAIL(params?.variables),
    queryFn: async () => {
      const response = await firstPitchApi.getFirstPitchDetail(
        params?.variables
      );
      return response;
    },
    select: (res: FirstPitchDetailResponse): FirstPitchItem => {
      return res.data.article;
    },
    ...params?.options,
  });
}
