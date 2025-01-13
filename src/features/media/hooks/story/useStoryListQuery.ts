import { useGetStoryList } from '@/features/media/apis/story/StoryApi.query';
import { QueryParser } from '@/lib';
import { useSearchParams } from 'react-router';

const useStoryListQuery = () => {
  const [searchParams] = useSearchParams();

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
    hasNextPage,
    fetchNextPage,
  } = useGetStoryList({
    variables,
  });

  return {
    storyList,
    isError,
    isLoading,
    isSuccess,
    hasNextPage,
    fetchNextPage,
  };
};

export default useStoryListQuery;
