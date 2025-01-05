import {
  useGetPitcherEraTop3,
  useGetPitcherWinTop3,
} from '../../apis/ranking/rankingApi.query';

export function useTopPitcherRank() {
  const {
    data: eraRanking,
    isLoading: isEraLoading,
    isError: isEraError,
    error: eraError,
  } = useGetPitcherEraTop3();

  const {
    data: winRanking,
    isLoading: isWinLoading,
    isError: isWinError,
    error: winError,
  } = useGetPitcherWinTop3();

  return {
    eraRanking,
    winRanking,
    isLoading: isEraLoading || isWinLoading,
    isError: isEraError || isWinError,
    error: eraError || winError,
  };
}
