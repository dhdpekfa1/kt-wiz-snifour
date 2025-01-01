import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';

import {
  STORY_API_QUERY_KEY,
  useGetStoryDetail,
} from '../apis/story/StoryApi.query';
import { storyApi } from '../apis/story/StoryApi';

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
