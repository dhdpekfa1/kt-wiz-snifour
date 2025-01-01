import { QueryParser } from '@/lib';
import { useSearchParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';

import {
  FIRSTPITCH_API_QUERY_KEY,
  useGetFirstPitchList,
} from '@/features/media/apis/firstPitch/firstPitchApi.query';
import { firstPitchApi } from '@/features/media/apis/firstPitch/firstPitchApi';

const useFirstPitchListQuery = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const variables = {
    pageNum: QueryParser.toNumber(searchParams.get('pageNum')) ?? 1,
    itemCount: 12,
    searchWord: QueryParser.toString(searchParams.get('searchWord')) ?? '',
  };

  // 시구자 리스트 조회
  const {
    data: firstPitchList,
    isError,
    isLoading,
    isSuccess,
  } = useGetFirstPitchList({
    variables,
  });

  const prefetchFirstPitchList = () => {
    queryClient.prefetchQuery({
      queryKey: FIRSTPITCH_API_QUERY_KEY.GET_LIST({
        ...variables,
        pageNum: variables.pageNum + 1,
      }),
      queryFn: () =>
        firstPitchApi.getFirstPitchList({
          ...variables,
          pageNum: variables.pageNum + 1,
        }),
    });
  };

  return {
    firstPitchList,
    isError,
    isLoading,
    isSuccess,
    prefetchFirstPitchList,
  };
};

export default useFirstPitchListQuery;
