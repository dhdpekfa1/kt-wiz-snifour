import { QueryParser } from '@/lib';
import { useSearchParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

import {
  HIGHLIGHT_API_QUERY_KEY,
  useGetHighlightList,
} from '@/features/media/apis/highlight/HighlightApi.query';
import { highlightApi } from '@/features/media/apis/highlight/HighlightApi';

const useHighlightListQuery = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const variables = {
    pageNum: QueryParser.toNumber(searchParams.get('pageNum')) ?? 1,
    itemCount: 12,
    searchWord: QueryParser.toString(searchParams.get('searchWord')) ?? '',
  };

  // 하이라이트 리스트 조회
  const {
    data: highlightList,
    isError,
    isLoading,
    isSuccess,
  } = useGetHighlightList({
    variables,
  });

  const prefetchNewsList = () => {
    queryClient.prefetchQuery({
      queryKey: HIGHLIGHT_API_QUERY_KEY.GET_LIST({
        ...variables,
        pageNum: variables.pageNum + 1,
      }),
      queryFn: () =>
        highlightApi.getHighlightList({
          ...variables,
          pageNum: variables.pageNum + 1,
        }),
    });
  };

  return { highlightList, isError, isLoading, isSuccess, prefetchNewsList };
};

export default useHighlightListQuery;
