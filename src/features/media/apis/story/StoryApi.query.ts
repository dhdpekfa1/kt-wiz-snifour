import { GridDataType } from '@/features/media/types';
import { Parameter, UseQueryParams, isNotNullish } from '@/lib';
import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createGridViewItem } from '../../services/grid-mapper.service';
import { storyApi } from './StoryApi';
import {
  StoryDetailResponse,
  StoryItem,
  StoryResponse,
} from '../../types/story';

// 쿼리 키 정의
export const STORY_API_QUERY_KEY = {
  /** 하이라이트 목록 조회 쿼리 키 생성 */
  GET_LIST: (params?: Parameter<typeof storyApi.getStoryList>) =>
    ['story-list', params].filter(isNotNullish),
  GET_DETAIL: (params?: Parameter<typeof storyApi.getStoryBySeq>) =>
    ['story-detail', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 하이라이트 목록 조회에 필요한 파라미터
 * @returns 그리드 타입으로 변환된 뉴스 목록 데이터와 총 데이터 개수
 */
export function useGetStoryList(
  params?: UseQueryParams<
    typeof storyApi.getStoryList,
    AxiosError,
    StoryResponse, // 실제 응답
    GridDataType // 변환된 응답
  >
) {
  return useQuery({
    queryKey: STORY_API_QUERY_KEY.GET_LIST(params?.variables),
    queryFn: async () => {
      const response = await storyApi.getStoryList(params?.variables);
      return response;
    },
    select: (res: StoryResponse): GridDataType => ({
      list: res.data.list
        .filter((item) => item.useYn === 'Y')
        .map(createGridViewItem),
    }),
    ...params?.options,
  });
}

export function useGetStoryDetail(
  params?: UseQueryParams<
    typeof storyApi.getStoryBySeq,
    AxiosError,
    StoryDetailResponse, // 실제 응답
    StoryItem // 변환된 응답
  >
) {
  return useQuery({
    queryKey: STORY_API_QUERY_KEY.GET_DETAIL(params?.variables),
    queryFn: async () => {
      const response = await storyApi.getStoryBySeq(params?.variables);
      return response;
    },
    select: (res: StoryDetailResponse): StoryItem => {
      return res.data.article;
    },
    ...params?.options,
  });
}
