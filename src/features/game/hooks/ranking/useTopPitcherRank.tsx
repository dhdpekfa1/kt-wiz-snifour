import { useSearchParams } from 'react-router';
import {
  useGetPitcherEraTop3,
  useGetPitcherWinTop3,
} from '../../apis/ranking/rankingApi.query';

export function useTopPitcherRank() {
  const [searchParams] = useSearchParams();
  const variables = {
    gyear: searchParams.get('gyear') || '2024',
  };

  const {
    data: eraRanking,
    isLoading: isEraLoading,
    isError: isEraError,
    error: eraError,
  } = useGetPitcherEraTop3({ variables });

  const {
    data: winRanking,
    isLoading: isWinLoading,
    isError: isWinError,
    error: winError,
  } = useGetPitcherWinTop3({ variables });

  return {
    eraRanking,
    winRanking,
    isLoading: isEraLoading || isWinLoading,
    isError: isEraError || isWinError,
    error: eraError || winError,
  };
}
