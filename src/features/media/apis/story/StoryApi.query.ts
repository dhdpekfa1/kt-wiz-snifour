import { GridInfiniteQueryResult } from '@/features/media/types';
import {
  Parameter,
  UseInfiniteQueryParams,
  UseQueryParams,
  isNotNullish,
} from '@/lib';
import {
  InfiniteData,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createGridViewItem } from '../../services/grid-mapper.service';
import {
  StoryDetailResponse,
  StoryItem,
  StoryResponse,
} from '../../types/story';
import { storyApi } from './StoryApi';

// 쿼리 키 정의
export const STORY_API_QUERY_KEY = {
  /** 스토리 목록 조회 쿼리 키 생성 */
  GET_LIST: (params?: Parameter<typeof storyApi.getStoryList>) =>
    ['story-list', params].filter(isNotNullish),
  GET_DETAIL: (params?: Parameter<typeof storyApi.getStoryBySeq>) =>
    ['story-detail', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 스토리 목록 조회에 필요한 파라미터
 * @returns 그리드 타입으로 변환된 스토리 목록 데이터와 총 데이터 개수
 */
export function useGetStoryList(
  params?: UseInfiniteQueryParams<
    typeof storyApi.getStoryList,
    AxiosError,
    StoryResponse, // 실제 응답
    GridInfiniteQueryResult, // 변환된 응답
    number // pageParams 타입
  >
) {
  return useInfiniteQuery({
    queryKey: STORY_API_QUERY_KEY.GET_LIST(params?.variables),
    queryFn: async ({ pageParam }) => {
      const response = await storyApi.getStoryList({
        ...params?.variables,
        pageNum: pageParam,
      });
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const totalPage = lastPage?.data?.list?.[0]?.totalPage ?? 0; // 안전하게 접근하고 기본값 설정
      return allPages.length < totalPage ? allPages.length + 1 : undefined;
    },
    select: (
      data: InfiniteData<StoryResponse, number>
    ): GridInfiniteQueryResult => {
      return {
        pages: data.pages.map((page) => {
          return page.data.list
            .filter((item) => item.useYn === 'Y')
            .map(createGridViewItem);
        }),
        pageParams: data.pageParams as number[],
      };
    },
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
