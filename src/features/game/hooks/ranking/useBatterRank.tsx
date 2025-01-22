import { useMemo } from 'react';

import { useSearchParams } from 'react-router';
import {
  useGetAllBatterRanking,
  useGetKTBatterRanking,
} from '../../apis/ranking/rankingApi.query';

export function useBatterRank(domain: 'kt' | 'all') {
  const [searchParams] = useSearchParams();

  const variables = useMemo(() => {
    return {
      gyear: searchParams.get('gyear') || '2024',
      pname: '',
      sortKey: 'HRA',
    };
  }, [searchParams]);

  switch (domain) {
    case 'kt': {
      const {
        data: ranking,
        isLoading,
        isError,
        error,
      } = useGetKTBatterRanking({ variables });
      return { ranking, isLoading, error, isError };
    }
    case 'all': {
      const {
        data: ranking,
        isLoading,
        isError,
        error,
      } = useGetAllBatterRanking({ variables });
      return { ranking, isLoading, error, isError };
    }
    default: {
      return { ranking: [], loading: false, error: 'error' };
    }
  }
}
