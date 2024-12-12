import { AxiosError } from 'axios';
import { highlightApi } from './highlightApi';
import { useQuery } from '@tanstack/react-query';
import { Parameter, isNotNullish, UseQueryParams } from '@/lib';
import { GridDataType, HighlightResponse } from '@/features/media/types';
import { createGridViewItem } from '../../services/grid-mapper.service';

// 쿼리 키 정의
export const HIGHLIGHT_API_QUERY_KEY = {
  /** 하이라이트 목록 조회 쿼리 키 생성 */
  GET_LIST: (params?: Parameter<typeof highlightApi.getHighlightList>) =>
    ['highlight-list', params].filter(isNotNullish),
};

/**
 * [GET] /api/article/highlightlist?count=
 * @param params 하이라이트 목록 조회에 필요한 파라미터
 * @returns 그리드 타입으로 변환된 뉴스 목록 데이터와 총 데이터 개수
 */
export function useGetHighlightList(
  params?: UseQueryParams<
    typeof highlightApi.getHighlightList,
    AxiosError,
    HighlightResponse, // 실제 응답
    GridDataType // 변환된 응답
  >
) {
  return useQuery({
    queryKey: HIGHLIGHT_API_QUERY_KEY.GET_LIST(params?.variables),
    queryFn: async () => {
      const response = await highlightApi.getHighlightList(params?.variables);
      return response;
    },
    select: (res: HighlightResponse): GridDataType => ({
      list: res.data.list
        .filter((item) => item.useYn === 'Y')
        .map(createGridViewItem),
    }),
    gcTime: 10 * 60 * 1000, // 캐시타임
    refetchOnMount: false, // 컴포넌트 마운트 시 쿼리 재요청 여부
    refetchOnWindowFocus: false, // 창 포커스 시 쿼리 재요청 여부
    ...params?.options,
  });
}
