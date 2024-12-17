import { QueryParser } from '@/lib';
import { useParams } from 'react-router';
import { useQueryClient } from '@tanstack/react-query';
import { newsApi } from '@/features/media/apis/news/NewsApi';

import {
  PRESS_API_QUERY_KEY,
  useGetPressBySeq,
} from '@/features/media/apis/news/PressApi.query';

const usePressDetailQuery = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();
  const seq = QueryParser.toString(id);

  const { data, isLoading, isError } = useGetPressBySeq({
    variables: { artcSeq: id as string },
    options: {
      enabled: Boolean(seq),
    },
  });

  const prefetchPress = (seq: number) => {
    const seqString = seq.toString();
    queryClient.prefetchQuery({
      queryKey: PRESS_API_QUERY_KEY.GET_BY_SEQ({ artcSeq: seqString }),
      queryFn: () => newsApi.getPressBySeq({ artcSeq: seqString }),
    });
  };

  return { data, isLoading, isError, prefetchPress };
};

export default usePressDetailQuery;
