import { useSearchParams } from 'react-router';
import { useGetCoachDetail } from '../apis/playerApi.query';

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
