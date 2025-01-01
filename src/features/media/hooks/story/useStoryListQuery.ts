import { QueryParser } from '@/lib';
import { useSearchParams } from 'react-router';
import {
  STORY_API_QUERY_KEY,
  useGetStoryList,
} from '@/features/media/apis/story/StoryApi.query';
import { useQueryClient } from '@tanstack/react-query';
import { storyApi } from '@/features/media/apis/story/StoryApi';

const useStoryListQuery = () => {
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();

  const variables = {
    pageNum: QueryParser.toNumber(searchParams.get('pageNum')) ?? 1,
    itemCount: 12,
    searchWord: QueryParser.toString(searchParams.get('searchWord')) ?? '',
  };

  // 스토리 리스트 조회
  const {
    data: storyList,
    isError,
    isLoading,
    isSuccess,
  } = useGetStoryList({
    variables,
  });

  const prefetchStoryList = () => {
    queryClient.prefetchQuery({
      queryKey: STORY_API_QUERY_KEY.GET_LIST({
        ...variables,
        pageNum: variables.pageNum + 1,
      }),
      queryFn: () =>
        storyApi.getStoryList({
          ...variables,
          pageNum: variables.pageNum + 1,
        }),
    });
  };

  return { storyList, isError, isLoading, isSuccess, prefetchStoryList };
};

export default useStoryListQuery;
