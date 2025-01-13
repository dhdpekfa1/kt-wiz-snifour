import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { storyApi } from '@/features/media/apis/story/StoryApi';
import {
  STORY_API_QUERY_KEY,
  useGetStoryDetail,
} from '@/features/media/apis/story/StoryApi.query';

const useStoryDetailQuery = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data, isLoading, isError } = useGetStoryDetail({
    variables: { artcSeq: id as string },
    options: {
      enabled: Boolean(id),
    },
  });

  const prefetchStory = (seq: number) => {
    const seqString = seq.toString();
    queryClient.prefetchQuery({
      queryKey: STORY_API_QUERY_KEY.GET_DETAIL({ artcSeq: seqString }),
      queryFn: () => storyApi.getStoryBySeq({ artcSeq: seqString }),
    });
  };

  return { data, isLoading, isError, prefetchStory };
};

export default useStoryDetailQuery;
