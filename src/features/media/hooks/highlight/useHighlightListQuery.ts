import { QueryParser } from '@/lib';
import { useSearchParams } from 'react-router';

import { useGetHighlightList } from '@/features/media/apis/highlight/HighlightApi.query';

const useHighlightListQuery = () => {
  const [searchParams] = useSearchParams();

  const variables = {
    itemCount: 12,
    searchWord: QueryParser.toString(searchParams.get('searchWord')) ?? '',
  };

  // 하이라이트 리스트 조회
  const {
    data: highlightList,
    isError,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
  } = useGetHighlightList({
    variables,
  });

  return {
    highlightList,
    isError,
    isLoading,
    isSuccess,
    fetchNextPage,
    hasNextPage,
  };
};

export default useHighlightListQuery;
