import { createGridViewItem } from '@/features/media/services/grid-mapper.service';
import { GridInfiniteQueryResult } from '@/features/media/types';
import { PhotoResponse } from '@/features/media/types/photo';
import { Parameter, UseInfiniteQueryParams, isNotNullish } from '@/lib';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { photoApi } from './PhotoApi';

export const PHOTO_API_QUERY_KEY = {
  /** 포토 목록 조회 쿼리 키 생성 */
  GET_LIST: (params: Parameter<typeof photoApi.getPhotoList>) =>
    ['photo-list', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 포토 목록 조회에 필요한 파라미터
 * @returns 그리드 타입으로 변환된 포토 목록 데이터와 총 데이터 개수
 */
export function useGetPhotoList(
  params: UseInfiniteQueryParams<
    typeof photoApi.getPhotoList,
    AxiosError,
    PhotoResponse, // 실제 응답
    GridInfiniteQueryResult, // 변환된 응답
    number // pageParams 타입
  >
) {
  return useInfiniteQuery({
    queryKey: PHOTO_API_QUERY_KEY.GET_LIST(params.variables),
    queryFn: async ({ pageParam }) => {
      const response = await photoApi.getPhotoList({
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
      data: InfiniteData<PhotoResponse, number>
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
