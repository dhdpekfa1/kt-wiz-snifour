import { useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router';

import { firstPitchApi } from '@/features/media/apis/firstPitch/firstPitchApi';
import {
  FIRSTPITCH_API_QUERY_KEY,
  useGetFirstPitchDetail,
} from '@/features/media/apis/firstPitch/firstPitchApi.query';

const useFirstPitchDetailQuery = () => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const { data, isLoading, isError } = useGetFirstPitchDetail({
    variables: { artcSeq: id as string },
    options: {
      enabled: Boolean(id),
    },
  });

  const prefetchFirstPitch = (seq: number) => {
    const seqString = seq.toString();
    queryClient.prefetchQuery({
      queryKey: FIRSTPITCH_API_QUERY_KEY.GET_DETAIL({ artcSeq: seqString }),
      queryFn: () => firstPitchApi.getFirstPitchDetail({ artcSeq: seqString }),
    });
  };

  return { data, isLoading, isError, prefetchFirstPitch };
};

export default useFirstPitchDetailQuery;
