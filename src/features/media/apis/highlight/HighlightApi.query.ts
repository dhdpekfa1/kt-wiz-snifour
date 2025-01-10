import {
  GridInfiniteQueryResult,
  HighlightDetailResponse,
  HighlightItem,
  HighlightResponse,
} from '@/features/media/types';
import {
  Parameter,
  UseInfiniteQueryParams,
  UseQueryParams,
  isNotNullish,
} from '@/lib';
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { createGridViewItem } from '../../services/grid-mapper.service';
import { highlightApi } from './HighlightApi';

// 쿼리 키 정의
export const HIGHLIGHT_API_QUERY_KEY = {
  /** 하이라이트 목록 조회 쿼리 키 생성 */
  GET_LIST: (params?: Parameter<typeof highlightApi.getHighlightList>) =>
    ['highlight-list', params].filter(isNotNullish),
  GET_DETAIL: (params?: Parameter<typeof highlightApi.getHighlightDetail>) =>
    ['highlight-detail', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 하이라이트 목록 조회에 필요한 파라미터
 * @returns 그리드 타입으로 변환된 하이라이트 목록 데이터와 총 데이터 개수
 */
export function useGetHighlightList(
  params: UseInfiniteQueryParams<
    typeof highlightApi.getHighlightList,
    AxiosError,
    HighlightResponse, // 실제 응답
    GridInfiniteQueryResult, // 변환된 응답
    number // pageParams 타입
  >
) {
  return useInfiniteQuery<
    HighlightResponse, // TQueryFnData
    AxiosError, // TError
    GridInfiniteQueryResult, // TData
    QueryKey, // TQueryKey
    number // TPageParam
  >({
    queryKey: HIGHLIGHT_API_QUERY_KEY.GET_LIST(params.variables),
    queryFn: async ({ pageParam }): Promise<HighlightResponse> => {
      const response = await highlightApi.getHighlightList({
        ...params.variables,
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
      data: InfiniteData<HighlightResponse, number>
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
    ...params.options,
  });
}

export function useGetHighlightDetail(
  params: UseQueryParams<
    typeof highlightApi.getHighlightDetail,
    AxiosError,
    HighlightDetailResponse, // 실제 응답
    HighlightItem // 변환된 응답
  >
) {
  return useQuery({
    queryKey: HIGHLIGHT_API_QUERY_KEY.GET_DETAIL(params?.variables),
    queryFn: async () => {
      const response = await highlightApi.getHighlightDetail(params.variables);
      return response;
    },
    select: (res: HighlightDetailResponse): HighlightItem => {
      return res.data.article;
    },
    ...params?.options,
  });
}
