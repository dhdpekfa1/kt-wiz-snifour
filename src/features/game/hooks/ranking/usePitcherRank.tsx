import { useMemo } from 'react';

import { useSearchParams } from 'react-router';
import {
  useGetAllPitcherRanking,
  useGetKTPitcherRanking,
} from '../../apis/ranking/rankingApi.query';

export function usePitcherRank(domain: 'kt' | 'all') {
  const [searchParams] = useSearchParams();

  const variables = useMemo(() => {
    return {
      gyear: searchParams.get('gyear') || '2024',
      pname: '',
      sortKey: 'ERA',
    };
  }, [searchParams]);

  switch (domain) {
    case 'kt': {
      const {
        data: ranking,
        isLoading,
        isError,
        error,
      } = useGetKTPitcherRanking({ variables });
      return { ranking, isLoading, error, isError };
    }
    case 'all': {
      const {
        data: ranking,
        isLoading,
        isError,
        error,
      } = useGetAllPitcherRanking({ variables });
      return { ranking, isLoading, error, isError };
    }
    default: {
      return { ranking: [], loading: false, error: 'error' };
    }
  }
}
