import {
  useGetBatterHraTop3,
  useGetBatterHrTop3,
} from '../../apis/ranking/rankingApi.query';

export function useTopBatterRank() {
  const {
    data: hraRanking,
    isLoading: isHraLoading,
    isError: isHraError,
    error: hraError,
  } = useGetBatterHraTop3();

  const {
    data: hrRanking,
    isLoading: isHrLoading,
    isError: isHrError,
    error: hrError,
  } = useGetBatterHrTop3();

  return {
    hraRanking,
    hrRanking,
    isLoading: isHraLoading || isHrLoading,
    isError: isHraError || isHrError,
    error: hraError || hrError,
  };
}
