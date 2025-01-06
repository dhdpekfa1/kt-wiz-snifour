import { seasons } from '@/constants/seasons';
import { useSearchParams } from 'react-router';
import { useGetCrowdRanking } from '../../apis/ranking/rankingApi.query';

export function useCrowdRank() {
  const [searchParams] = useSearchParams();

  const variables = { gyear: searchParams.get('gyear') || seasons[0] };

  const {
    data: ranking,
    isLoading,
    isError,
    error,
  } = useGetCrowdRanking({ variables });

  return { ranking, isLoading, isError, error };
}
