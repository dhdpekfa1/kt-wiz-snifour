import { newsApi } from './NewsApi';
import { useQuery } from '@tanstack/react-query';
import { createListViewItem } from '@/features/media/services';
import { Parameter, isNotNullish, UseQueryParams } from '@/lib';
import { ListDataType, NewsResponse } from '@/features/media/types';
import { AxiosError } from 'axios';

//  쿼리 키 정의
export const NEWS_API_QUERY_KEY = {
  /** 뉴스 목록 조회 쿼리 키 생성 */
  GET_LIST: (params?: Parameter<typeof newsApi.getList>) =>
    ['news-list', params].filter(isNotNullish),

  /** 특정 뉴스 상세 정보 조회 쿼리 키 생성 */
  GET_BY_SEQ: (artcSeq: Parameter<typeof newsApi.getBySeq>) =>
    ['news-by-seq', artcSeq].filter(isNotNullish),
};

/**
 * [GET] /api/article/newslist?searchWord=
 * @param params 뉴스 목록 조회에 필요한 파라미터
 * @returns 리스트 타입으로 변환된 뉴스 목록 데이터와 총 데이터 개수
 */
export function useGetNewsList(
  params?: UseQueryParams<
    typeof newsApi.getList,
    AxiosError,
    NewsResponse, // 실제 응답
    ListDataType // 변환된 응답
  >
) {
  return useQuery<NewsResponse, AxiosError, ListDataType>({
    queryKey: NEWS_API_QUERY_KEY.GET_LIST(params?.variables),
    queryFn: async () => {
      const response = await newsApi.getList(params?.variables);
      return response;
    },
    select: (data: NewsResponse): ListDataType => ({
      list: data.list
        .filter((item) => item.useYn === 'Y')
        .map(createListViewItem),
      searchCount: data.searchCount,
    }),
    ...params?.options,
    ...{
      keepPreviousData: true, // 페이지 네이션이 있을 경우에는 추가해주세요. 이전 데이터를 유지해줍니다.
    },
  });
}

export function useGetNewsById(
  params: UseQueryParams<typeof newsApi.getBySeq>
) {
  const queryKey = NEWS_API_QUERY_KEY.GET_BY_SEQ(params?.variables);
  return useQuery({
    queryKey,
    queryFn: () => newsApi.getBySeq(params?.variables),
    ...params?.options,
  });
}
