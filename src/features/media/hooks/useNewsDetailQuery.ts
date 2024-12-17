import { QueryParser } from '@/lib';
import { useParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { newsApi } from '@/features/media/apis/news/NewsApi';

import {
  NEWS_API_QUERY_KEY,
  useGetNewsBySeq,
} from '@/features/media/apis/news/NewsApi.query';

const useNewsDetailQuery = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const seq = QueryParser.toString(id);

  const { data, isLoading, isError } = useGetNewsBySeq({
    variables: { artcSeq: id as string },
    options: {
      enabled: Boolean(seq),
    },
  });

  const prefetchNews = (seq: number) => {
    const seqString = seq.toString();
    queryClient.prefetchQuery({
      queryKey: NEWS_API_QUERY_KEY.GET_BY_SEQ({ artcSeq: seqString }),
      queryFn: () => newsApi.getNewsBySeq({ artcSeq: seqString }),
    });
  };

  return { data, isLoading, isError, prefetchNews };
};

export default useNewsDetailQuery;
