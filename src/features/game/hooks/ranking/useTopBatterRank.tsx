import { useSearchParams } from 'react-router';
import {
  useGetBatterHraTop3,
  useGetBatterHrTop3,
} from '../../apis/ranking/rankingApi.query';

export function useTopBatterRank() {
  const [searchParams] = useSearchParams();
  const variables = {
    gyear: searchParams.get('gyear') || '2024',
  };

  const {
    data: hraRanking,
    isLoading: isHraLoading,
    isError: isHraError,
    error: hraError,
  } = useGetBatterHraTop3({ variables });

  const {
    data: hrRanking,
    isLoading: isHrLoading,
    isError: isHrError,
    error: hrError,
  } = useGetBatterHrTop3({ variables });

  return {
    hraRanking,
    hrRanking,
    isLoading: isHraLoading || isHrLoading,
    isError: isHraError || isHrError,
    error: hraError || hrError,
  };
}
