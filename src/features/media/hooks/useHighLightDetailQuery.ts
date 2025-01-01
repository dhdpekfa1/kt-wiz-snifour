import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';

import {
  HIGHLIGHT_API_QUERY_KEY,
  useGetHighlightDetail,
} from '../apis/highlight/HighlightApi.query';
import { highlightApi } from '../apis/highlight/HighlightApi';

const useHighLightDetailQuery = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data, isLoading, isError } = useGetHighlightDetail({
    variables: { artcSeq: id as string },
    options: {
      enabled: Boolean(id),
    },
  });

  const prefetchHighlight = (seq: number) => {
    const seqString = seq.toString();
    queryClient.prefetchQuery({
      queryKey: HIGHLIGHT_API_QUERY_KEY.GET_DETAIL({ artcSeq: seqString }),
      queryFn: () => highlightApi.getHighlightDetail({ artcSeq: seqString }),
    });
  };

  return { data, isLoading, isError, prefetchHighlight };
};

export default useHighLightDetailQuery;
