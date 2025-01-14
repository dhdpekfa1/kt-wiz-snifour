import { useGetCoachDetail } from '@/features/player/apis/playerApi.query';
import { useSearchParams } from 'react-router';

const useCoach = () => {
  const [searchParams] = useSearchParams();
  const variables = {
    pcode: searchParams.get('pcode') ?? '',
  };
  const {
    data: coachData,
    isLoading,
    isError,
    error,
  } = useGetCoachDetail({ variables });

  return { coachData, isLoading, isError, error };
};

export default useCoach;
